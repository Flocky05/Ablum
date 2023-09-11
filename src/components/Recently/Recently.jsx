
import img from "../../assets/images/body/recently-salmon-sushi.png"
import leaf from "../../assets/images/body/spinach-leaf.png"
import arrow from "../../assets/images/body/icons8-arrow-48.png"
const Recently = () => {
    return (
        <div className="grid grid-cols-2 m-20">
                <div className="m-20 text-left">
                <h3 className=" text-3xl font-bold text-orange-600">Recently Added</h3>
                <h3 className="text-2xl font-bold ">Sushi Samurai</h3>
                <div className="flex justify-between ">
                    <h3 className="text-2xl font-bold ">Salmon Cheese</h3>
                    <img className="w-10 h-16 -mt-9" src={leaf} alt="" />
                </div>
                <p className="text-lg my-8">Take a look at whats's new.And dont deprive yourselft of a good meal enjoy and be happy</p>
                <div className="flex bg-orange-600 px-4 py-2 rounded-full text-white items-center w-44">
                    <a className=" " href="/">Order Now</a>
                    <img className="invert" src={arrow} alt="" />
                </div>
            </div>
            <img className="px-20" src={img} alt="" />
        </div>
    );
};

export default Recently;