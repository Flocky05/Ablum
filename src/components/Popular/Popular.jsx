import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard.jsx";


const Popular = () => {
    const [foodcards,setFoodcard]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setFoodcard(data))
    },[])
    return (
        <div>
            <h3 className="text-orange-500 text-xl text-center p-4">The Best Food </h3>
            <h3 className="text-center text-3xl font-bold">Popular Dishes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-3/5 mx-auto">
                {
                   foodcards.map(foodcard=><FoodCard
                   key={foodcard.id}
                   data={foodcard}
                   ></FoodCard>)
                }
                </div>
        </div>
    );
};

export default Popular;