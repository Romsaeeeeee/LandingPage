import { SiNike } from "react-icons/si";

const TopLabel = [
    { id: 1, label: "Home" },
    { id: 2, label: "Men" },
    { id: 3, label: "Women" },
    { id: 4, label: "Accessories" },
    { id: 5, label: "Sale" },
]

export default function Topbar() {
    return (
        <div className="h-full w-full flex justify-start items-center gap-4 text-lg">
            <span className="text-3xl"><SiNike /> </span>
            {TopLabel && TopLabel.map((item, index) => (
                <p key={index} className="cursor-pointer transition hover:border-b-2 hover:border-[#EE4444] hover:text-[#EE4444]">{item?.label}</p>
            ))}

        </div>
    )
}
