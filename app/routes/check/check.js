import React, { useEffect, useState } from 'react';
import C1 from './c1'
import Data from '../component/data'


export default function SomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.products); // Assuming the API response has a 'products' property
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' flex flex-wrap gap-[5vw]  mx-auto'>
    
      {data.map((item, index) => (
        <div key={index} className=' w-[40vw]'>
          <C1 img={item.thumbnail}
              mil={item.mileage}
              name={item.title}
              // onClick={() => handleProductSelect(product)}
            />
        </div>
      ))}
      <Data/>
    </div>
  );
}
