import Black from "../assets/Black.png"
import Orange from "../assets/Orange.png"
import Purple from "../assets/Purple.png"
import White from "../assets/White.png"


const shoes = [
    {
        id: 1,
        image: White
    },
    {
        id: 2,
        image: Purple
    },
    {
        id: 3,
        image: Orange
    },
    {
        id: 4,
        image: Black
    },
]

export default function Shoes() {
    return (
        <div className="h-full w-full flex justify-center items-center gap-4">
            {shoes && shoes.map((item, index) => (
                <span key={index} className="shadow-inner border-[1.5px] py-5 px-2 rounded-md transition hover:scale-[115%] ">
                    <img src={item?.image} alt={index} className="h-16 w-fit transition hover:-rotate-[25deg] hover:scale-110" />
                </span>
            ))}
        </div>
    )
}
