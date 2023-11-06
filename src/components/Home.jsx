// import React from 'react';

import Banner from "./Banner";
import Faq from "./Faq";

const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>

            <div>
                <h1 className="text-gray-700 text-4xl font-semibold font-serif mb-5 text-center">Assignment Feature</h1>
                <section className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 rounded-lg">
                    <div className=" py-4 bg-white shadow-lg rounded-md ">
                        <div className="flex justify-center items-center">
                            <img src="https://i.ibb.co/9r69Pbm/logo2.png" alt="" className="w-[90%] h-60 rounded-lg" />
                        </div>
                        <h2 className="text-center text-2xl font-bold mt-4">
                            Title :
                            <span className="font-medium"> name</span>
                        </h2>
                        <div className=" w-[90%] mx-auto flex justify-between px-3 items-center mt-4">
                            <h2 className="text-2xl font-semibold">
                                Level : <span>price</span>
                            </h2>
                            <div className="flex items-center">
                                <p className="font-semibold text-xl">Marks : 100<span></span></p>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center mt-5">
                            <button
                                // onClick={() => handleDelete(_id)}
                                className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500">View <br />Assignment
                            </button>
                            <button
                                // onClick={() => handleDelete(_id)}
                                className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500">Update <br />Assignment
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <Faq></Faq>
        </div>
    );
};

export default Home;