// import {dineoutRestaurants} from '../utils/Dinedata'
import {newdineoutRestaurants} from '../utils/NewDinedata'
import DineCard from './DineCard'
export default function DineOption(){
    return(
        <div className='w-[80%] mx-auto mt-20 mb-20'>
            <p className='text-3xl font-bold'>Discover best restaurants on Dineout</p>
            <div className='flex flex-nowrap overflow-x-auto mt-5 gap-5 '>
                {
                    newdineoutRestaurants.map((restdata)=><DineCard key={restdata?.info?.id} restdata={restdata}></DineCard>
                )
                }
            </div>
        </div>
    )
}