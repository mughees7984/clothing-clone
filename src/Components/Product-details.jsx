import React from 'react';
import { TbShoppingBagEdit } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Productdetails = () => {
    return (
        <>

            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between w-[90%] md:w-[90%]">
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
            {/* End Navbar */}

            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 mt-4 w-[95%]">
                {/* Image gallery */}
                <div className="lg:w-3/5 w-full flex gap-4">
                    <div className="flex flex-col gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <img
                                key={num}
                                src={`/src/images/img-${1}.jpg`}
                                alt={`Thumbnail ${num}`}
                                className="w-full h-[150px] object-cover rounded-md cursor-pointer"
                            />
                        ))}
                    </div>
                    <div className="flex-grow w-[90%]">
                        <img
                            src="/src/images/img-1.jpg"
                            alt="Main product image"
                            className="w-[800px] h-[780px] object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Product details */}
                <div className="lg:w-1/2 w-full flex flex-col justify-center gap-3 ml-10">
                    <h1 className="text-[30px] font-bold mb-2">Womens Denim Jacket (Blue)</h1>
                    <p className="text-gray-600 mb-2">Brand Name</p>
                    <p className="text-sm text-gray-500 mb-4">Sold By: Sellers Name</p>

                    <div className="flex items-center mb-4">
                        <div className="flex text-black">
                            {[1, 2, 3, 4].map((star) => (
                                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                            <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>
                        <span className="ml-2 text-gray-600">4.4</span>
                        <span className="ml-2 text-sm text-gray-500">36 Reviews</span>
                    </div>

                    <div className="mb-4">
                        <span className="text-2xl font-bold">Rs. 700</span>
                        <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                        <span className="ml-2 text-green-500">(30% off)</span>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-[20px]">Select Size</h3>
                        <div className="flex gap-2 items-center">
                            <a href="#" className="text-[#003984] text-[15px]">Size Chart &gt;</a>
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <button key={size} className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Select Color</h3>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 bg-blue-700 rounded-full"></button>
                            <button className="w-8 h-8 bg-red-400 rounded-full"></button>
                            <button className="w-8 h-8 bg-gray-400 rounded-full"></button>
                        </div>
                    </div>

                    <div className="mb-4 mt-6">
                        <h3 className="font-semibold mb-2 text-[20px]">Best Offers</h3>
                        <ul className="text-[15px] leading-9">
                            <li>Special offer get 25% off <span className='text-[#00398f]'>T&C</span></li>
                            <li>Bank offer get 30% off on Axis Bank Credit card <span className='text-[#00398f]'>T&C</span></li>
                            <li>Wallet offer get 40% cashback via Paytm wallet on first transaction <span className='text-[#00398f]'>T&C</span></li>
                            <li>Special offer get 25% off <span className='text-[#00398f]'>T&C</span></li>
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-[#6f6a42] text-white px-6 py-2 rounded">Add to cart</button>
                        <button className="border border-gray-300 px-3 py-2 rounded">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-4 md:mt-8 px-4 md:px-0">
                <div className="border-b border-gray-200 w-full md:w-[90%] overflow-x-auto">
                    <nav className="-mb-px flex whitespace-nowrap">
                        <a href="#" className="border-b-2 border-blue-500 py-2 md:py-4 px-3 md:px-6 text-xs md:text-sm font-medium text-blue-600">
                            Product Details
                        </a>
                        <a href="#" className="border-b-2 border-transparent py-2 md:py-4 px-3 md:px-6 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700">
                            Specification
                        </a>
                        <a href="#" className="border-b-2 border-transparent py-2 md:py-4 px-3 md:px-6 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700">
                            Ratings & Reviews
                        </a>
                    </nav>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 mt-4 md:mt-6">
                    <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Product Details</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
                        Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem
                    </p>

                    <h3 className="text-base md:text-lg font-semibold mb-1">Size & Fit</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-6">
                        The model (height 5'8") is wearing a size S
                    </p>

                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Material & Care</h3>
                    <ul className="text-sm md:text-base text-gray-600 list-disc list-inside">
                        <li>100% cotton</li>
                        <li>Machine Wash</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-[25px] text-left text-black font-bold font-sans mt-10">
                    Similar Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-4">
                    {/* Product 1 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-20.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-1.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-2.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-4.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-8">
                <h1 className="text-[25px] text-left text-black font-bold font-sans mt-10">
                    Customer Also Like
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-4">
                    {/* Product 1 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-20.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-1.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-2.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
                            </div>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-4.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-left text-gray-600 mt-2">Women Denim Jacket</h2>
                            <div class="flex gap-3">
                                <span class="text-[15px] text-gray-600 font-bold">Brand Name</span>
                                <span class="text-gray-400 ml-1">4.4 ★</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-[20px] font-bold">Rs. 700</span>
                                <span className="ml-2 text-gray-500 line-through">Rs. 1000</span>
                                <span className="ml-2 text-green-500">(30% off)</span>
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

export default Productdetails;