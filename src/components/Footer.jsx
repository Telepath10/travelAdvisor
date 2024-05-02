import icon from '../img/logo2.jpg';

const Footer = () => {
    return ( 
        <div className="bg-[#faf1ed]">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-12 text-gray-800">
                    <div className="col-span-12 lg:col-span-8 space-y-2 text-dark">
                        <div className="flex space-x-3">
                            <img src={icon} alt="" className="h-15 w-35" />
                        </div>
                        <div className="text-[0.7em] md:text-xs w-full space-y-3">
                            <p>
                            "Welcome to TripHub, your ultimate destination for curated travel experiences! At TripHub, we believe that every journey should be as unique as the traveler themselves. Our mission is to inspire and assist you in crafting unforgettable adventures tailored to your tastes and preferences. Whether you're exploring bustling cities or tranquil landscapes, our team of dedicated travel experts is here to guide you every step of the way. From insider tips on local hotspots to handpicked recommendations for accommodations and activities, TripHub is your trusted companion for seamless travel planning. Join us and embark on a journey filled with discovery, excitement, and unforgettable memories. Your next adventure starts here at TripHub!"
                            </p>
                        </div>
                    </div>
                    <div className="col-span-8">

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;