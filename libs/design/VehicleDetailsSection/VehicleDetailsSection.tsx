import React from 'react';
import { InfoLine } from '../InfoLine';

export const VehicleDetailsSection = ({ vehicleData }: any) => {
  const {
    trim,
    transmission,
    mileage,
    make,
    int_color,
    ext_color,
    fuel_type,
    engine,
    drive_train,
    body,
    doors,
    year,
    model,
  } = vehicleData;

  const getData = {
    make,
    model,
    trim,
    body,
    year,
    transmission,
    drive_train,
    mileage,
    int_color,
    ext_color,
    fuel_type,
    engine,
    doors,
  };

  const arrayOfObjects = [];

  // Iterate over the variables and create objects
  for (const key in getData) {
    if (getData.hasOwnProperty(key)) {
      //@ts-ignore
      const value = getData[key];
      const uppercaseTitle = key.replaceAll('_', ' ');
      const object = { title: uppercaseTitle, content: value };
      arrayOfObjects.push(object);
    }
  }

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-4">Details</h2>

        <div className="bg-white p-4 flex flex-col gap-y-2 rounded">
          {arrayOfObjects?.map((content) => (
            <div key={content.title} className="border-b mb-4">
              <InfoLine label={content.title} value={content.content} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
