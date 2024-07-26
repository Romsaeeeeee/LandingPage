import Numbers from "../components/Numbers";
import Shoes from "../components/Shoes";
import Topbar from "../components/Topbar";
import White from "../assets/White.png"
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function SecondPage() {
    return (
        <div className="h-screen w-full flex justify-center items-center relative">
            <div className="w-3/5 h-full flex flex-col justify-start items-start gap-10 bg-white">
                <div className="w-full h-14 px-10 shadow">
                    <Topbar />
                </div>
                <div className="w-full h-1/4 flex flex-col justify-between items-center gap-32">
                    <div className="w-full h-full flex justify-start items-center">
                        <Numbers />
                        <p className="text-6xl">Lunar Glide 6</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-14 px-[140px]">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, illum! Commodi itaque suscipit quasi asperiores facere dignissimos dolorem rem! Blanditiis repellat ab est? Nulla commodi hic eveniet aperiam, architecto illo!</p>
                        <Shoes />
                    </div>
                </div>
            </div>
            <div className="flex-1 h-full flex flex-col justify-center items-start gap-2 bg-[#EE4444] p-5">
                <div className="h-5/6 flex justify-start items-center">
                    <img src={White} alt="Shoes" className="-ml-40 scale-[120%] -rotate-[25deg] transition hover:-rotate-[18deg] hover:scale-[130%]" />
                </div>
                <div className="h-1/6 w-full flex flex-col justify-end items-end gap-2">
                    <button className=" border-2 rounded py-[11px] px-14 text-white transition-all hover:bg-white hover:text-black hover:px-16">150$</button>
                    <button className="bg-white flex justify-center items-center gap-2 py-3 px-[17px] rounded transition-all hover:border-2 hover:px-[23px] hover:py-2.5 hover:bg-[#EE4444] hover:text-white">Add to Cart <span><AiOutlineShoppingCart /></span></button>
                </div>
            </div>
        </div>
    )
}
