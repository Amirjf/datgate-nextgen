import { IconCalendar, IconPlayerPlay } from '@tabler/icons';
import React from 'react';
import { Container } from '@/components/ui';
const DealerIntro = () => {
  return (
    <Container className="my-20 mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[85vh]">
        <div className="flex flex-col pl-4 justify-end mb-10 mt-36 lg:justify-center">
          <h3 className="text-5xl font-bold font-serif">
            Make This Year Electric
          </h3>
          <p className="text-gray-500 pt-10 lg:w-3/4 leading-7 font-light">
            With special offers on the 2022 EQB and EQS, your ideal electric
            vehicle is finally in range. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque officia doloribus impedit tenetur sed
            nesciunt, suscipit necessitatibus magnam aspernatur unde sunt
            reprehenderit vitae rem, consequuntur perferendis deserunt ea
            dolorem deleniti.
          </p>
          <div className="pt-12 flex gap-8">
            <button className="bg-black text-white text-sm p-4">
              View Incentives
            </button>
            <button>Discouver Mercedes-Benz</button>
          </div>
        </div>
        <div className='relative bg-[url("https://www.mbusa.com/content/dam/mb-nafta/us/homepage-redesign/2023_Jan_Homepage_Hero_XL.jpg")] bg-fixed bg-center h-[40rem] lg:h-full'>
          <button className="text-center bg-white font-semibold py-8 px-14 hover:bg-black hover:text-white transition-colors">
            View Inventory
          </button>

          <div className="absolute bottom-0 right-0">
            <button className="text-center bg-white font-bold py-8 px-10 hover:bg-black hover:text-white transition-colors flex items-center gap-2">
              <span>
                <IconCalendar />
              </span>
              Book Test Drive
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 lg:-left-8">
            <button className="bg-black w-16 h-16 text-center flex items-center justify-center rounded-full text-white shadow-lg shadow-gray-700">
              <IconPlayerPlay />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { DealerIntro };
