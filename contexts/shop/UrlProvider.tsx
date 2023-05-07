import { createContext, FC, useEffect } from 'react';

import qs from 'qs';

import { useSsr } from 'usehooks-ts';
import { convertArrayToObject } from 'pages/[...slug]';
import { useVehicles } from './VehiclesContext';

export const filterOriginalFilterObj = (
  filters: any,
  makes: string[],
  models: string[]
) => {
  const keysToChange = ['body'];

  keysToChange.forEach((key) => {
    if (filters[key]) {
      filters[key] = filters[key].slice(1);
    }
  });

  if (makes) {
    filters.make = filters['make']?.filter((make: string) => {
      return make !== makes[0];
    });
  }

  if (makes && makes.length === 1) {
    filters.trim = filters['trim']?.slice(1);
  }

  if (
    (models && makes && makes.length === 1) ||
    (models && !makes?.length)
    // (models && makesByModelValue)
  ) {
    filters.model = filters['model']?.slice(1);
  }
};

export const handleConditionsUrl = (appliedConditions: string[]) => {
  if (!appliedConditions) return '';
  if (appliedConditions.length === 3) {
    return 'used-vehicles/';
  }

  if (
    appliedConditions.length === 2 &&
    appliedConditions.includes('new') &&
    appliedConditions.includes('certified')
  ) {
    return 'used-vehicles/certified/';
  }
  if (
    appliedConditions.length === 2 &&
    appliedConditions.includes('certified') &&
    appliedConditions.includes('used')
  ) {
    return 'used-vehicles/';
  }
  if (
    appliedConditions.length === 1 &&
    appliedConditions.includes('certified')
  ) {
    return 'used-vehicles/certified/';
  }
  if (appliedConditions.length === 1) {
    return `${appliedConditions[0]}-vehicles/`;
  }
};
const UrlProviderContext = createContext({});

export const filterConditions = (conditions: string[]) => {
  if (conditions.length === 1 && conditions.includes('certified')) {
    return {
      condition: conditions.filter((cond: string) => cond !== 'certified'),
    };
  }

  if (conditions.length === 1 && conditions.includes('new')) {
    return { condition: conditions.filter((cond: string) => cond !== 'new') };
  }

  return { condition: conditions.filter((cond: string) => cond === 'new') };
};

export const UrlStructureProvider: FC<any> = ({ children }) => {
  const { data }: any = useVehicles();
  const selectedFilters = data?.selectedFilters;
  const { isBrowser } = useSsr();

  useEffect(() => {
    const refactorFiltersForParse = convertArrayToObject(selectedFilters);

    const {
      make: makes,
      model: models,
      trim: trims,
      body: bodys,
      condition,
    } = refactorFiltersForParse;

    const otherQueries = {
      ...refactorFiltersForParse,
      ...(condition && filterConditions(condition)),
      //   ...(debouncedSearchValue && { search: debouncedSearchValue }),
    };

    const specialFiltersArray: any = [
      ...(makes ? [makes[0]] : []),
      ...(bodys ? [bodys[0]] : []),
      ...((models && makes && makes.length === 1) || (models && !makes?.length)
        ? [models[0]]
        : []),
      ...(trims && makes && makes.length === 1 ? [trims[0]] : []),
    ];

    const encodedSpecialFiltersArray = specialFiltersArray.length
      ? `${specialFiltersArray.join('/')}/`
      : '';

    filterOriginalFilterObj(otherQueries, makes, models);

    const endcodedFilters = `${qs.stringify(otherQueries, {
      arrayFormat: 'comma',
      encodeValuesOnly: true,
    })}`;

    const finalEncodedURL = `${handleConditionsUrl(
      condition
    )}${encodedSpecialFiltersArray}${
      endcodedFilters ? `?${endcodedFilters}` : ''
    }`
      .replaceAll(' ', '_')
      .replaceAll('%20', '_')
      .toLowerCase();

    if (isBrowser) {
      window.history.replaceState({}, 'filters', `/` + finalEncodedURL);
    }
  }, [selectedFilters]);

  return (
    <UrlProviderContext.Provider value={{}}>
      {children}
    </UrlProviderContext.Provider>
  );
};
