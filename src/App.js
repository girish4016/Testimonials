import React, { useState  } from 'react';
import reviews from "./data";
import Card from "./Components/Card";

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);


  
  return (
    <div className='bg-gray-200 justify-center text-center flex flex-col min-h-screen overflow-y-scroll' >

      <div className = ' flex flex-col justify-center text-center mb-8 mt-4 min-[768px]:mb-10' >
        <h1 className='text-4xl font-bold text-gray-900 ' >Our Testimonials</h1>
        <div className=' w-[150px] h-[4px] bg-slate-600 flex mx-auto mt-[4px]'></div>
      </div>
      
      <Card Testimonials = {reviews} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex} ></Card>
    
    </div>

  );
};

export default App;
