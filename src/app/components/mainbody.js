import React from 'react';
import Postelement from './postelement';

const MainBody = () => {
  return (
    <div className='flex items-start justify-around p-4 w-full max-h-screen lg:w-[85%] overflow-y-scroll scrollbar-hide pb-20'>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 lg:p-3 w-full">
            {/* Post element starts */}
            <Postelement/>
            {/* Post element ends */}
          </section>
    </div>
  );
};

export default MainBody;
