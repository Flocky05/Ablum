
import img from "../../assets/images/logo.png"
import moon from "../../assets/images/navbar/moon.png"
const Navbar = () => {
    return (
        <nav className="flex justify-between p-10 items-center text-xl font-semibold">
            <div className="flex items-center">
                <img className="w-10 h-10" src={img} alt="" />
                <a className="hover:text-orange-400" href="/">Ablum</a>
            </div>
            <div className="grid grid-cols-5 w-2/4">
                <a className="hover:text-orange-400" href="/">Home</a>
                <a className="hover:text-orange-400" href="/about-us">About Us</a>
                <a className="hover:text-orange-400" href="/popular">Popular</a>
                <a className="hover:text-orange-400" href="/recently">Recently</a>
                <img className="w-8 h-8" src={moon} alt="" />

            </div>
        </nav>
    );
};

export default Navbar;