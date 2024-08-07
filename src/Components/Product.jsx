import React from "react";
import { TbShoppingBagEdit } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Product = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between w-full md:w-[90%]">
                <div className="flex bg-gray-100 py-4 px-6 w-full md:w-auto mb-4 md:mb-0">
                    <div className="text-xl font-bold text-green-800">LOGO</div>
                    <div className="flex-grow mx-8 max-w-md">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for an item..."
                                className="w-full py-2 pl-10 pr-4 border-b bg-transparent border-gray-300 focus:outline-none focus:border-green-500"
                            />
                            <svg
                                className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <ul className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-8 text-[16px] md:text-[18px] font-semibold text-[#224f34] mb-4 md:mb-0 w-full md:w-auto">
                    <li><a href="#" className="hover:underline">HOME</a></li>
                    <li><a href="#" className="underline underline-offset-2">SHOP</a></li>
                    <li><a href="#" className="hover:underline">ABOUT US</a></li>
                    <li><a href="#" className="hover:underline">CONTACT</a></li>
                </ul>

                <div className="flex justify-center md:justify-end gap-6 w-full md:w-auto">
                    <div className="text-3xl md:text-4xl text-[#224f34]">
                        <TbShoppingBagEdit />
                    </div>
                    <button className="border-2 border-black rounded px-4 py-2">LOGIN</button>
                </div>
            </div>
            {/*  */}

            <div className="flex flex-col text-white bg-[#6f6a42] mt-12 px-6 py-6 mx-4 md:mx-10 leading-7 w-auto md:w-[90%]">
                <h3 className="">Ladies Top</h3>
                <p className="text-gray-300">Slash Sales begins in August. Get up to 80% Discount on all products <a href="#" className="underline">Read More</a></p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-auto md:w-[90%] mt-10 mx-4 md:mx-10">
                <p className="text-gray-400 mb-4 md:mb-0">Showing 1-20 out of 2,356 Products</p>
                <div className="flex items-center gap-1">
                    <p className="text-gray-400">Sort by: <span className="font-semibold text-black">New Arrivals</span></p>
                    <svg className="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                </div>
            </div>


            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full py-4">
                {/* Sidebar */}
                <aside className="w-full lg:w-[30%] mt-10 lg:mt-0 p-4 mr-5 md:mb-12 bg-gray-100">
                    <div className="mb-6">
                        <h2 className="font-bold mb-2 text-[13px]">PRICES</h2>
                        <div className="flex justify-between">
                            <p className="text-sm mb-2 text-gray-500">Range</p>
                            <p className="text-sm font-semibold">$120 - $300</p>
                        </div>
                        <input type="range" min="120" max="300" className="w-full font-red" />
                    </div>

                    <div className="mb-6">
                        <h2 className="font-bold text-[12px] mb-2">FILTERS</h2>
                        {['Women', 'Men', 'Girls', 'Babies'].map(item => (
                            <div key={item} className="flex items-center text-gray-500 mb-2">
                                <input type="checkbox" id={item} className="mr-2" />
                                <label htmlFor={item} className="text-sm">{item}</label>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="font-bold text-[12px] mb-2">BRANDS</h2>
                        {[
                            "Victoria's Secret",
                            'Dior',
                            'Gucci',
                            'Fendi',
                            'Prada',
                            'Versace',
                            'Dolce & Gabbana',
                            'Zara',
                            'Chanel',
                        ].map(brand => (
                            <div key={brand} className="flex items-center text-gray-500 mb-2">
                                <input type="checkbox" id={brand} className="mr-2" />
                                <label htmlFor={brand} className="text-sm">{brand}</label>
                            </div>
                        ))}
                        <span className="text-red-500 pl-7 mb-8 text-[10px] ">+234 more</span>
                    </div>

                    <div>
                        <h2 className="font-bold text-[12px] mt-5 mb-2">CATEGORIES</h2>
                        {[
                            'Dresses',
                            'Tops',
                            'Lingerie & Lounge Wear',
                            'Blouse',
                            'Vintage',
                        ].map(brand => (
                            <div key={brand} className="flex items-center text-gray-500 mb-2">
                                <input type="checkbox" id={brand} className="mr-2" />
                                <label htmlFor={brand} className="text-sm">{brand}</label>
                            </div>
                        ))}
                        <span className="text-red-500 pl-7 text-[10px] ">+4 more</span>
                    </div>

                    <div>
                        <h2 className="font-bold text-[12px] mt-5 mb-2">SIZE</h2>
                        {['Medium', 'Large', 'Plus Size', 'Sexy Plus Size'].map(brand => (
                            <div key={brand} className="flex items-center text-gray-500 mb-2">
                                <input type="checkbox" id={brand} className="mr-2" />
                                <label htmlFor={brand} className="text-sm">{brand}</label>
                            </div>
                        ))}
                    </div>
                </aside>
                {/* End Sidebar */}

                {/* Product Grid */}
                <div className="flex-1 pt-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="transition ease-in-out hover:translate-y-1">
                                <div>
                                    <div className="relative mb-2">
                                        <img src="./src/images/img-3.jpg" alt="Product" className="w-full h-64 object-cover" />
                                        <button className="absolute top-2 right-2 bg-gray-200 p-1 rounded">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className="font-semibold text-gray-400 mb-1">Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</h3>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold">$120.23</span>
                                            <span className="text-gray-500 line-through">$129.23</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500">22 Orders</span>
                                            <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded mt-2">New Arrivals</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center mt-4 space-x-1 text-sm">
                {/* Previous Button */}
                <button
                    className="px-2 py-1 border rounded-md text-gray-500 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Page Numbers */}
                <button className="px-2 py-1 border rounded-md hover:bg-gray-200">1</button>
                <button className="px-2 py-1 border rounded-md hover:bg-gray-200">2</button>
                <button className="px-2 py-1 border rounded-md cursor-default">...</button>
                <button className="px-2 py-1 border rounded-md hover:bg-gray-200">13</button>

                {/* Next Button */}
                <button className="px-2 py-1 border rounded-md text-white bg-gray-800 hover:bg-gray-700">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>


            <footer className="container mx-auto max-w-full bg-[#6f6a42] px-4 py-8 md:py-12 mt-4">
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
export default Product;
