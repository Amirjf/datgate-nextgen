interface Filters {
  [key: string]: string[];
}

interface FilterToRemove {
  key: string;
  value: string;
}

export const handleAddingFilter = (
  filters: Filters,
  { key, value }: { key: string; value: string }
): Filters => {
  const currentFilters = filters[key] ?? [];
  const newFilters = [...currentFilters, value];
  const uniqueFilters = Array.from(new Set(newFilters));

  return { ...filters, [key]: uniqueFilters };
};

export const handleRemovingFilter = (
  filters: Filters,
  filterToRemove: FilterToRemove
): Filters => {
  const { key, value } = filterToRemove;

  // Get the current filter values for the given key
  const filterValues = filters[key] || [];

  //for removing search from tags
  if (typeof filterValues === 'string') {
    delete filters[key];
    return { ...filters };
  }

  //@ts-ignore
  if (filterValues.min || filterValues.max) {
    delete filters[key];
    return { ...filters };
  }

  // Remove the filter value to be removed from the filter values
  const updatedFilterValues = filterValues.filter(
    (filter) => filter !== value.toString()
  );

  if (updatedFilterValues.length) {
    // If there are updated filter values, create a new filters object with the updated values
    return {
      ...filters,
      //@ts-ignore
      [key]: [...new Set(updatedFilterValues)],
    };
  } else {
    // If there are no updated filter values, create a new filters object without the key
    const { [key]: deletedKey, ...remainingFilters } = filters;
    return remainingFilters;
  }
};
