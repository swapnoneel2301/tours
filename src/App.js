import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [tours,setTours] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const getTours = async ()=>{
     setIsLoading(true);
     try{
       const resp = await fetch(url);
       const tour_arr = await resp.json();
       setTours(tour_arr);
       setIsLoading(false); 
     }catch(error){
        console.log(error);
        setIsLoading(false);
     }
  }

  const removeTour = (id)=>{
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  useEffect(()=>{
    getTours();
  },[]);

  return (
    <main>
       {
          isLoading ? 
          <Loading /> : 
          // <Tours tours={tours} getTours={getTours} removeTour={removeTour}/>
          <Tours {...{tours,getTours,removeTour}}/>
       }
    </main>
  );
}

export default App;
