import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const {tours,getTours,removeTour} = props;
  
  return(
    <>
       {tours.length ?
           <section>
              <div className='title'>
                <h2>Our Tours</h2>
                <div className='underline'></div>
              </div>
              <div>
                {tours.map((tour)=>{
                   return <Tour {...tour} {...{removeTour}} key={tour.id}/>;
                })}
              </div>
           </section>
           :
           <div className='title'>
             <h2>No Tours Left</h2>
             <button className='btn' onClick={getTours}>refresh</button>
           </div>
       }
    </> 
    
  );
};

export default Tours;
