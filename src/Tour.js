import React, { useState } from 'react';

const Tour = (props) => {
  const {id,name,info,image,price,removeTour} = props;

  const [isFullInfo,setIsFullInfo] = useState(false);

  const changeInfoState = ()=>{
    setIsFullInfo(!isFullInfo);
  }

  

  return (
      <article className='single-tour'>
         <img src={image} alt={info}></img>
         <footer>
            <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>${price}</h4>
            </div>
            <p>
              {
                isFullInfo ? 
                <>
                   {info}
                   <button onClick={changeInfoState}>Show less</button>
                </> :
                <>
                  {info.slice(0,200)}...
                  <button onClick={changeInfoState}>Read More</button>
                </>
              }
            </p>
            <button className='delete-btn' onClick={()=>{removeTour(id)}}>not interested</button>
         </footer>
      </article>
  );
};

export default Tour;
