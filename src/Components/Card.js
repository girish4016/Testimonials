
import { FaQuoteLeft , FaQuoteRight , FaChevronRight, FaChevronLeft } from 'react-icons/fa';


function Card (  { Testimonials , currentIndex , setCurrentIndex }  )  
{
    function getRandomIndex(){
        let randomIndex = Math.floor(Math.random()*(Testimonials.length-1));
        return randomIndex<currentIndex ? (randomIndex) : (randomIndex+1);
    }

    return (
        <div className='flex flex-col w-[85vw] md:w-[700px] bg-white justify-center text-center mx-auto rounded-lg p-10 shadow-md mb-4 min-[768px]:relative' >

            <img className='w-[140px] object-cover rounded-full shadow-[8px_-5px_8px_0_#888888] mx-auto min-[768px]:absolute min-[768px]:m-0 min-[768px]:-top-20 min-[768px]:left-10' 
            src = {Testimonials[currentIndex].image} alt = ""></img>
            
            <div>
                <h1 className='text-lg font-bold tracking-wider mt-6  min-[768px]:text-2xl' >{Testimonials[currentIndex].name}</h1>
                <p className='uppercase text-sm font-normal text-gray-400 font-md ' >{Testimonials[currentIndex].job}</p>
            </div>

            <div>
                <FaQuoteLeft className=' mx-auto my-5 text-gray-500' />
                <p className='text-gray-500' >{Testimonials[currentIndex].text}</p>
                <FaQuoteRight className=' mx-auto my-5  text-gray-500' />
            </div>

            <div className='flex flex-col justify-center text-center py-6' >

                <div className='flex flex-row mx-auto gap-5 text-2xl text-gray-600' >
                    <FaChevronLeft onClick={ ()=>{ setCurrentIndex( (currentIndex-1)>=0 ? (currentIndex-1) : (Testimonials.length -1) ) } } />
                    <FaChevronRight onClick={ ()=>{ setCurrentIndex( (currentIndex+1)%Testimonials.length ) } } />
                </div>
            </div>

            <button className=' bg-gray-400 w-max mx-auto py-2 px-10 rounded-md font-bold text-white text-lg shadow-lg '
              onClick={ ()=>{ setCurrentIndex( getRandomIndex() ) } }  >Surprise Me</button>

        </div>
    )


}

export default Card;