import React from 'react';


const C1 = ({ mil, name, img, mrp, pr, category }) => {
  return (
    <div className="w-[100vw] h-max pb-10 rounded-[30px] xl:h-[50vh] bg-[#D9CFB5] mt-10 lg:w-[100%] hover:scale-105 transform transition-transform duration-300 ease-in-out -we zoom-in-hover">
      <div className="">
        
        <div className='h-[40vh] font-bold contrast-200 w-full rounded-t-[30px]  'style={{backgroundImage:`url(${img})`}} >
        <div className="flex gap-3 pl-5 pt-5 ">
  <div className="font-semibold">{name}</div>
  <div className="border-l-2 border-black pl-3">{mil}</div>
</div>
        </div>
        <div className="flex  items-end  px-5   font-bold">
          <div className="ml-3">
            Price: {mrp} {pr}% off <span className="text-blue-900">inclusive of all taxes</span> <br />
            Category: {category}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default C1;
