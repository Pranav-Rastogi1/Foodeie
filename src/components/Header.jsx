import { Link } from "react-router"
export default function Header() {
   
    return (
         <div className='bg-[#ff5200] font-serif '>
           <div className="flex justify-between container mx-auto py-8">
                <img className='w-40 h-12' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
                <div className=" text-white font-bold text-base flex gap-10 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Coperate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>
                    <a className="border border-white rounded-2xl px-4 py-3" target="_blank" href="https://www.swiggy.com/corporate/">Get App</a>
                    <a className="border border-black rounded-2xl bg-black px-4 py-3" target="_blank" href="https://www.swiggy.com/corporate/">Sign In</a>
                </div>
           </div>
           <div className="pt-16 pb-8 relative pl-4">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                <div className="text-5xl text-white font-bold max-w-[60%] container mx-auto text-center">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-4 mt-10">
                  <input className="bg-white w-[40%] text-base px-6 py-4 rounded-2xl" placeholder="Delhi,India"></input>
                  <input className="bg-white w-[55%] text-base px-6 py-4 rounded-2xl" placeholder="Search for restaurants and items or more"></input>  
                </div>
           </div>
           <div className="max-w-[80%] container mx-auto flex">
             {/* <a href="https://www.swiggy.com/restaurants">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
             </a> */}
             <Link to="/restaurant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
             </Link>
             <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
             </a>
             <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
             </a>
           </div>
         </div>
    )
}