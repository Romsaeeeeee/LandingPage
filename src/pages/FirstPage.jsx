
import Products from '../components/Products'
import CornerBlob from '../assets/CornerBlob.png'


export default function FirstPage() {


    return (
        <div className="h-screen w-full flex justify-center items-center relative">
            <div className="w-1/2 h-full flex flex-col justify-between items-center p-20">
                <div className="h-full w-full flex flex-col justify-center items-start gap-8">
                    <p className="text-5xl leading-tight">Way to display your Product</p>
                    <div>
                        <p>In this following pages, I will show you which type of product display you can implement to your products.</p>
                        <p>If you are interested or have a suggestion, feel free to contact me.</p>
                    </div>
                </div>
                <div className="w-full h-1/2 flex justify-center items-end">
                    <p className="underline cursor-pointer">Click to Proceed</p>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <img
                    className='absolute bottom-0 right-0 w-2/3 brightness-125 opacity-40 z-30'
                    src={CornerBlob}
                    alt="Phone"
                />
                <Products />
            </div>
        </div>
    )
}
