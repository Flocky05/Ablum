import logo from "../../assets/images/body/logo.png"
import leaf from "../../assets/images/body/spinach-leaf.png"
import facebook from "../../assets/images/social/facebook.png"
import instragram from "../../assets/images/social/instragram.png"
import twiter from "../../assets/images/social/twiter.png"
import youtube from "../../assets/images/social/youtube.png"
import onion from "../../assets/images/body/spring-onion.png"
import card1 from "../../assets/images/body/footer-card-1.png"
import card2 from "../../assets/images/body/footer-card-2.png"
import card3 from "../../assets/images/body/footer-card-3.png"
import card4 from "../../assets/images/body/footer-card-4.png"
import upArrow from "../../assets/images/body/upArrow.png"


const Footer = () => {
    return (
        <div className="bg-red-100 dark:bg-white  shadow-xl text-center lg:text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-10 lg:p-20">
                <div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <img className="w-10 h-10" src={logo} alt="" />
                        <a className="hover:text-orange-400 text-xl font-semibold" href="/">Ablum</a>
                    </div>
                    <p>Food for the body is not enough .There must be food for the soul.</p>
                    <img className="h-14 w-8 mt-12 ml-20" src={leaf} alt="" />
                </div>
                <div className=" p-5 lg:p-0">
                    <h3 className="text-xl font-semibold">Main Menu</h3>
                    <div className="text-lg flex flex-col">
                        <a href="/">About</a>
                        <a href="/">Menu</a>
                        <a href="/">Offer</a>
                        <a href="/">Events</a>
                    </div>
                    <img src="" alt="" />
                </div>
                
                    <div className=" p-5 lg:p-0">
                        <h3 className="text-xl font-semibold">Information</h3>
                        <div className="text-lg flex flex-col">
                            <a href="/">Contract</a>
                            <a href="/">Other & Return</a>
                            <a href="/">Videos</a>
                            <a href="/">Resarvations</a>
                        </div>
                    </div>
           
                    <div className=" p-5 lg:p-0">
                        <h3 className="text-xl font-semibold">Address</h3>
                        <p>Faridpur,Niltuli</p>
                        <p>Lima House,1278/A</p>
                        <h5>9:00Am - 11:00Pm</h5>
                    </div>
                    <div className=" p-5 lg:p-0">
                        <h3 className="text-xl font-semibold">Social</h3>
                        <div className="flex gap-5 justify-center lg:justify-start">
                            <img className="w-8 h-8" src={facebook} alt="" />
                            <img className="w-8 h-8" src={instragram} alt="" />
                            <img className="w-8 h-8" src={twiter} alt="" />
                            <img className="w-8 h-8" src={youtube} alt="" />
                        </div>
                        <img className="h-10 w-8 mt-8 ml-10" src={onion} alt="" />
                    </div>
                </div>
                <div className="lg:flex justify-between p-20 ">
                    <p>@ copyright Ablum All rights are Ablum</p>
                    <div className="flex gap-3 justify-center p-3 lg:p-2">
                        <img className="p-2" src={card1} alt="" />
                        <img className="p-2" src={card2} alt="" />
                        <img className="p-2" src={card3} alt="" />
                        <img className="p-2" src={card4} alt="" />
                    </div>
                </div>
                <a className="bg-orange-600 w-16 h-8 lg:text-right" href="/"><img className="invert" src={upArrow} alt="" /></a>
            </div>
    );
};

export default Footer;