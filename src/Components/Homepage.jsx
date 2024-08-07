import React from 'react';
import { TbShoppingBagEdit } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto max-w-full h-[700px] bg-[#efe8c2]">
                <div className="flex flex-col md:flex-row justify-around pt-10 w-[90%] mx-auto">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl font-bold text-[#224f34] ml-10 md:ml-0">LOGO</h1>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <ul className="flex justify-center md:justify-between gap-4 md:gap-8 text-[16px] md:text-[18px] mt-2 font-semibold text-[#224f34]">
                            <li><a href="#" className="underline underline-offset-2">HOME</a></li>
                            <li><a href="#">SHOP</a></li>
                            <li><a href="#">FEATURES</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center md:justify-end gap-4">
                        <div className="text-4xl text-[#224f34] mx-4 md:mx-10">
                            <TbShoppingBagEdit />
                        </div>
                        <button className="border-2 border-black rounded px-4 py-2">LOGIN</button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-around w-[85%] mt-8 mx-auto">
                    <div className="flex flex-col w-full md:w-[70%] gap-6 ml-0 md:ml-12 text-center md:text-left">
                        <h1 className="text-[40px] md:text-[50px] text-[#6f6a42] font-bold">Uncover And<br /> Cultivate Your<br /> Distinctive Style</h1>
                        <p className="text-base md:text-xl text-[#272727]">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Odit iste nostrum nihil veritatis voluptatem rerum pra-<br />esentium nulla aperiam facere molestiae?</p>
                        <button className="text-white border rounded-lg bg-[#6f6a42] w-full md:w-[25%] mt-7 px-7 py-3">Explore Now</button>
                    </div>
                    <div className="rounded mt-10 pb-12 pt-5 w-full md:w-[50%] bg-[#6f6a42] p-6  flex justify-center">
                        <img src="./src/images/Capture-removebg-preview.png" alt="" className="object-contain" />
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4 py-8">
                <h1 className='text-[50px] text-center  text-[#224f34] font-bold mt-10'>Best Selling</h1>
                <p className='text-center text-xl font-sans mt-3'>Get in on the trend with our curated selection of best-selling stle</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {/* Product 1 */}
                    <div class="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-1.jpg" width={300} height={400} alt="Product 1" class="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center">Name of the product</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$38.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-3.jpg" alt="Product 2" width={300} height={400} class="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center">Name of the product</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$56.59</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-2.jpg" alt="Product 2" width={300} height={400} class="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center">Name of the product</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$38.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Product 4 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-4.jpg" alt="Product 2" width={300} height={400} class="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center">Name of the product</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$38.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className='flex justify-center mt-8'>
                    <button className="flex gap-2 justify-center border-2 border-[#224f34] text-center rounded px-6 py-2 ml-12">See more<svg class="w-6 h-6 pt-1 text-[#224f34] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                    </button>
                </div>
            </div>


            <div className="container w-[70%] mx-auto px-4 py-8">
                <h1 className='text-[50px] text-center  text-[#224f34] font-bold mt-10 ml-4'>Best Selling</h1>
                <div className=' justify-between mt-6 mr-10'>
                    <ul className="flex justify-center md:justify-around gap-3 md:gap-8 text-[12px] md:text-[18px] font-semibold text-[#224f34]">
                        <li><a href="#">SALE</a></li>
                        <li><a href="#">HOT</a></li>
                        <li><a href="#" className="underline underline-offset-2" >NEW ARRIVAL</a></li>
                        <li><a href="#">ACCESSORIES</a></li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {/* Product 1 */}
                    <div class="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-5.png" width={300} height={400} alt="Product 1" class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-center text-gray-600">Summer Wind T-Shirt</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$31.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">4.2</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-6.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600">Tailored Jacket</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$38.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">4.5</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-7.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600">Formal Classic suit</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$50.00</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">4.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Product 4 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-8.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600 mt-2">White Solid Formal T-Shirt</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$42.09</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 5 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-9.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600 mt-2">Tailored Jacket</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$41.03</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 6 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-10.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600 mt-2">Solid White Summer T-Shirt</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$29.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">4.5</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 7 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-11.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600 mt-2">Classic Top</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$24.54</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">3.8</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 8 */}
                    <div class="transition ease-in-out hover:translate-y-2">
                        <img src="./src/images/img-12.png" alt="Product 2" width={300} height={400} class="w-full h-64 object-contain" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-center text-gray-600 mt-2">Formal Jeans</h2>
                            <div class="flex justify-center items-center text-gray-600 mt-2">
                                <p class="text-xl font-bold">$38.99</p>
                                <span class="mx-2">|</span>
                                <div class="flex items-center">
                                    <span class="text-xl font-bold">5.0</span>
                                    <span class="text-yellow-500 ml-1">★</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className="container mx-auto max-w-full h-auto bg-[#efe8c2]">
                <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mt-7 pt-10 mx-auto">
                    <div className="flex justify-center items-center w-full lg:w-[700px] mb-8 lg:mb-0">
                        <img src="./src/images/img-13.png" alt="Product 2" className="w-full max-w-[400px] h-auto object-contain" />
                    </div>


                    <div className="flex flex-col text-center lg:text-left w-full lg:w-auto">
                        <div className="mb-6">
                            <h1 className="text-[32px] md:text-[40px] font-bold text-[#224f34]">Exclusive Offer</h1>
                            <p className="text-[18px] md:text-[23px] font-bold text-[#224f34] leading-9">Unlock the unlimited style upgrade with our exclusive<br />offer
                                Enjoy savings of up to 40% off on your latest<br /> New Arrivals</p>
                        </div>


                        <div className="flex justify-center mb-8 lg:justify-start gap-4 mt-8">
                            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-20 h-20">
                                <span className="text-3xl font-bold text-[#224f34]">05</span>
                                <span className="text-sm text-[#224f34]">Days</span>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-20 h-20">
                                <span className="text-3xl font-bold text-[#224f34]">17</span>
                                <span className="text-sm text-[#224f34]">Hours</span>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-20 h-20">
                                <span className="text-3xl font-bold text-[#224f34]">20</span>
                                <span className="text-sm text-[#224f34]">Min</span>
                            </div>
                        </div>


                        <button className="w-full mb-12 sm:w-[60%] md:w-[40%] lg:w-[30%] mx-auto lg:mx-0 text-white text-[18px] md:text-[22px] bg-[#6f7a42] border-3 rounded-md px-[15px] py-4 mt-6">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-[32px] sm:text-[40px] text-center text-[#6f6a42] font-bold mt-10">
                    Cool & Trendy Clothes For You
                </h1>
                <p className="text-center text-lg sm:text-xl font-sans mt-3">
                    Lorem ipsum dolor sit amet consectetur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                    {/* Product 1 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-14.jpg" alt="Product 1" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl sm:text-3xl text-[#224f34] font-semibold text-center">Accessories</h2>
                            <p className="font-semibold text-[14px] sm:text-[16px] mt-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae velit magnam soluta facilis ducimus.
                            </p>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-15.jpg" alt="Product 2" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl sm:text-3xl text-[#224f34] font-semibold text-center">Accessories</h2>
                            <p className="font-semibold text-[14px] sm:text-[16px] mt-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae velit magnam soluta facilis ducimus.
                            </p>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="transition ease-in-out hover:translate-y-1">
                        <img src="./src/images/img-2.jpg" alt="Product 3" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl sm:text-3xl text-[#224f34] font-semibold text-center">Accessories</h2>
                            <p className="font-semibold text-[14px] sm:text-[16px] mt-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae velit magnam soluta facilis ducimus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto w-[80%] px-4 py-8">
                <h2 className="text-center text-4xl font-bold text-[#6f6a42] mb-10">
                    Clients Feedback
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {/*  Card 1 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg md:w-1/3 hover:bg-[#efe8c2] transition ease-in-out hover:translate-y-1">
                        <blockquote className="text-2xl text-[#6f6a42]">“</blockquote>
                        <h3 className="text-xl font-bold mt-4">Maria Shabbir</h3>
                        <p className="mt-2 font-serif">
                            The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I’m beyond satisfied!
                        </p>
                    </div>

                    {/*  Card 2 */}
                    <div className="bg-[#efe8c2] shadow-lg p-6 rounded-lg w-full md:w-1/3 hover:bg-[#d6d0b2] transition ease-in-out hover:translate-y-1">
                        <blockquote className="text-2xl text-[#6f6a42]">“</blockquote>
                        <h3 className="text-xl font-bold mt-4">Beenish Mumtaz</h3>
                        <p className="mt-2 font-serif">
                            I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-1/3 hover:bg-[#efe8c2] transition ease-in-out hover:translate-y-1">
                        <blockquote className="text-2xl text-[#6f6a42]">“</blockquote>
                        <h3 className="text-xl font-bold mt-4 pb-4">Ayra Khan</h3>
                        <p className="mt-2 pb-10 font-serif">
                            I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!
                        </p>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10 gap-4">
                    <button className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition duration-300">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                        </svg>

                    </button>
                    <button className="p-2 rounded-full bg-[#d6d0b2] shadow-lg hover:bg-[#bcb69e] transition duration-300">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                        </svg>

                    </button>
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

export default Homepage