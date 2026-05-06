import { GrocerGridCards } from "../utils/InstaMart";
import GroceryCard from "./GroceryCard";
export default function Grocery(){
    return (
        <div className="mt-20 w-[80%] container mx-auto">
        <h1 className="text-2xl font-bold ">Shop Grocery on Instamart</h1>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-10 gap-10">
        {
            GrocerGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
        }
       </div>
        </div>
    )
}