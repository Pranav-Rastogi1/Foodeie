import {imageGridCards} from "../utils/Fooddata"
import FoodCard from "./FoodCard"
import { GrocerGridCards } from "../utils/InstaMart"
export default function FoodOption(){
    return (
       <>
       <div className="w-[80%]  container mx-auto flex flex-wrap mt-20 gap-5">
        {
            imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
        }
       </div>
       </>
    )
}