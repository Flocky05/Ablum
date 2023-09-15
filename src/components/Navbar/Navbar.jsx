
import img from "../../assets/images/body/logo.png"
import moon from "../../assets/images/navbar/moon.png"
const Navbar = () => {
    return (
        <nav className="flex justify-around p-2 lg:p-10  text-md lg:text-xl lg:font-semibold bg-blue-950 text-white">
            <div className="flex items-center">
                <img className=" w-4 h-4 lg:w-10 lg:h-10" src={img} alt="" />
                <a className="hover:text-orange-400" href="/">Ablum</a>
            </div>
            <div className="grid grid-cols-5 justify-items-end w-4/5 lg:w-2/4">
                <a className="hover:text-orange-400" href="/">Home</a>
                <a className="hover:text-orange-400" href="/about-us">About Us</a>
                <a className="hover:text-orange-400" href="/popular">Popular</a>
                <a className="hover:text-orange-400" href="/recently">Recently</a>
                <img className="w-4 h-4 lg:w-8 lg:h-8 invert" src={moon} alt="" />

            </div>
        </nav>
    );
};

export default Navbar;