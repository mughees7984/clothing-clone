import React from 'react';

const Login = () => {
    return (
        <>
            <div className="bg-[#efe8c2] min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#6f6a42] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#6f6a42] rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="bg-white p-6 sm:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg">
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-center mb-6">Login</h2>
                    <p className="text-center font-semibold text-[14px] sm:text-[16px] lg:text-[17px] mb-6">Please enter your Login and your Password</p>

                    <form className="space-y-4">
                        <div className="relative">
                            <input type="text" placeholder="Username or Email" className="w-full py-2 px-4 rounded-lg border-2 bg-transparent placeholder:text-black border-black pl-10" />
                            <svg className="w-5 h-5 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>

                        <div className="relative">
                            <input type="password" placeholder="Password" className="w-full py-2 px-4 rounded-lg bg-transparent border-2 placeholder:text-black border-black pl-10" />
                            <svg className="w-5 h-5 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-xs sm:text-sm text-[#6f6a42] hover:underline">Forgot password?</a>
                        </div>

                        <button className="w-full py-2 px-4 border-black text-black border-2 font-bold rounded-lg bg-transparent hover:bg-gray-100 transition duration-200">Login</button>

                        <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#FFF" />
                            </svg>
                            Or, sign-in with Google
                        </button>
                    </form>

                    <p className="text-center mt-4 text-sm sm:text-base">
                        <span className='font-bold'>Not a member yet?</span> <a href="#" className="text-[#545a44] hover:underline font-sans">Register!</a>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Login

