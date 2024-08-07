import React from 'react';
import { TbShoppingBagEdit } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Aboutus = () => {
    return (
        <>

            <div className="container mx-auto max-w-full py-10">
                <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
                    <h1 className="text-3xl font-bold text-[#224f34] text-left md:text-center mb-4 md:mb-0">LOGO</h1>
                    <ul className="flex justify-center md:justify-between gap-4 md:gap-8 text-[16px] md:text-[18px] font-semibold text-[#224f34] mb-4 md:mb-0">
                        <li><a href="#" className="hover:underline">HOME</a></li>
                        <li><a href="#" className="hover:underline">SHOP</a></li>
                        <li><a href="#" className="underline underline-offset-2">ABOUT US</a></li>
                        <li><a href="#" className="hover:underline">CONTACT</a></li>
                    </ul>
                    <div className="flex justify-center md:justify-end gap-4">
                        <div className="text-3xl md:text-4xl text-[#224f34]">
                            <TbShoppingBagEdit />
                        </div>
                        <button className="border-2 border-black rounded px-4 py-2">LOGIN</button>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="flex flex-col md:flex-row justify-between items-center w-[85%] mx-auto mt-12 space-y-8 md:space-y-0 md:space-x-12">
                    <div className="w-full md:w-[55%] text-center md:text-left">
                        <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#6f6a42] font-bold">About Us</h1>
                        <p className="text-[16px] md:text-xl text-[#272727] leading-relaxed mt-4">
                            Welcome to Logo – your ultimate destination for cool and trendy fashion!
                            At Logo, we are dedicated to providing the latest styles that resonate
                            with the vibrant and dynamic spirit of today's youth. Our collection is
                            carefully curated to ensure that every piece embodies the cutting-edge
                            trends and timeless coolness that define your unique style.
                        </p>
                    </div>
                    <div className="w-full md:w-[45%] flex justify-center">
                        <img
                            src="./src/images/img-2.jpg"
                            alt="About Us Image"
                            className="rounded-md object-contain max-h-[400px] md:max-h-[500px]"
                        />
                    </div>
                </div>
            </div>


            {/* Our Mission */}
            <div className="container mx-auto max-w-full bg-gray-100 px-4 py-10 md:py-16">
                <h2 className="text-center text-[#6f6a42] text-[24px] md:text-[30px] font-bold">
                    Our Mission
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full mt-8 space-y-8 md:space-y-0 md:space-x-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="./src/images/img-17.jpg"
                            alt="Fashionable Outfit"
                            className="rounded-md object-contain max-h-[400px] md:max-h-[500px]"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col text-center md:text-left px-4 md:px-0">
                        <p className="text-base md:text-[20px] text-[#272727] leading-relaxed md:leading-loose">
                            Our mission is simple: to inspire and empower youngsters to express
                            themselves through fashion. Whether you're looking for the perfect outfit for a
                            night out, a casual day at school, or anything in between, Logo has you
                            covered. We believe in fashion as a form of self-expression, and our diverse
                            range of clothing is designed to cater to every mood and moment.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-8">
                <h1 className='text-[30px] text-center  text-[#6f6a42] font-bold mt-10 pb-8'>Our Team</h1>

                <div class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {/* Product 1 */}
                    <div class="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-18.jpg" width={300} height={400} alt="Product 1" class="w-full h-64 object-cover" />
                    </div>

                    {/* Product 2 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-19.jpg" alt="Product 2" width={300} height={400} class="w-full h-64 object-cover" />
                    </div>
                    {/* Product 3 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-18.jpg" alt="Product 2" width={300} height={400} class="w-full h-64 object-cover" />
                    </div>


                    {/* Product 4 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-19.jpg" alt="Product 2" width={300} height={400} class="w-full h-64 object-cover" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 w-[90%] md:w-[80%]">
                <div className="flex flex-col gap-6 mt-8">
                    <h4 className="text-[24px] md:text-[30px] font-bold">Lorem Ipsum</h4>
                    <p className="text-gray-500 text-sm md:text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        <br className="hidden md:block" /> industry.
                    </p>
                    <div>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-[#6f6a42] text-white rounded-lg p-6 lg:px-[100px] lg:py-[30px]">
                            <div className="flex flex-col gap-4 md:gap-6">
                                <h2 className="text-xl md:text-2xl font-bold">Stay in the loop</h2>
                                <p className="text-sm md:text-base font-sans">
                                    Subscribe to receive the latest news and updates about TDA.
                                    <br className="hidden md:block" /> We promise not to spam you!
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-1 items-center">
                                <div className="w-full lg:w-auto">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="w-full lg:w-auto border-2 rounded-md bg-white px-4 md:px-8 py-2 md:py-3"
                                    />
                                </div>
                                <div className="w-full lg:w-auto">
                                    <button className="w-full lg:w-auto px-4 py-2 md:px-4 md:py-3 rounded-md text-white bg-[#4f4b32]">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="container mx-auto max-w-full bg-[#6f6a42] px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-around items-center w-full md:w-[95%] mt-6 md:mt-10 space-y-8 md:space-y-0 md:space-x-8">

                    <div className="flex md:flex-col gap-4 md:gap-12 justify-center items-center md:items-start">
                        <h1 className="text-white text-[24px] md:text-[28px] font-bold">LOGO</h1>
                        <span className="text-white font-semibold text-sm md:text-base">SOCIAL MEDIA</span>
                        <div className="flex justify-center md:justify-start gap-4">
                            <div className="text-[32px] md:text-[40px] text-white"><CiTwitter /></div>
                            <div className="text-[32px] md:text-[40px] text-white"><FaInstagram /></div>
                            <div className="text-[32px] md:text-[40px] text-white"><FiFacebook /></div>
                        </div>
                    </div>


                    <div className="flex flex-col text-white gap-4 md:gap-6 text-center md:text-left">
                        <h2 className="text-[16px] md:text-[18px] font-bold">SHOP</h2>
                        <ul className="flex flex-col gap-2 md:gap-4 text-sm md:text-base font-medium">
                            <li>Products</li>
                            <li>Overview</li>
                            <li>Pricing</li>
                            <li>Releases</li>
                        </ul>
                    </div>


                    <div className="flex flex-col text-white gap-4 md:gap-6 text-center md:text-left">
                        <h2 className="text-[16px] md:text-[18px] font-bold">COMPANY</h2>
                        <ul className="flex flex-col gap-2 md:gap-4 text-sm md:text-base font-medium">
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>News</li>
                            <li>Support</li>
                        </ul>
                    </div>


                    <div className="flex flex-col text-white gap-4 md:gap-6 md:mt-10 text-center md:text-left w-full md:w-auto">
                        <h2 className="text-[16px] md:text-[18px] font-bold mb-2">STAY UP TO DATE</h2>
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 p-3 border border-[#d6d0b2] bg-transparent text-white font-medium placeholder-[#d6d0b2] focus:outline-none focus:ring-2 focus:ring-[#d6d0b2] rounded-md md:rounded-l-md md:rounded-r-none w-full md:w-auto"
                            />
                            <button
                                type="submit"
                                className="border-2 bg-white text-black px-6 py-3 rounded-md md:rounded-r-md md:rounded-l-none w-full md:w-auto"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>



                <div className="pt-8 md:pt-11">
                    <hr className="border-[#d6d0b2] mb-4" />
                    <div className="flex justify-center gap-6 md:gap-8 pt-6 text-white text-xs md:text-sm font-semibold">
                        <a href="#" className="hover:underline">
                            Terms
                        </a>
                        <a href="#" className="hover:underline">
                            Privacy
                        </a>
                        <a href="#" className="hover:underline">
                            Cookies
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Aboutus