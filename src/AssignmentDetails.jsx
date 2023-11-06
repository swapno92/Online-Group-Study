// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AssignmentDetails = () => {
    const loadedAssignment = useLoaderData()
    const {description,photo,title} = loadedAssignment
    // console.log(photo)
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="rounded-lg p-8 shadow-inner">
                    <img
                        src={photo}
                        alt=""
                        className="lg:w-3/5 w-11/12 h-[60vh] mx-auto rounded-lg shadow-2xl my-6"
                    />
                    <p className=" font-semibold text-justify lg:w-3/5 mx-auto ">
                        <span className="underline font-bold">Details:</span> {description}
                    </p>
                    <p className=" font-semibold text-justify lg:w-3/5 mx-auto mt-4">
                        <span className="underline font-bold">Assignment Title:</span> {title}
                    </p>
                    <div className=" flex justify-center">
                        <button
                            // onClick={handleCurt}
                            className="text-center  px-4 py-1 rounded-lg btn-accent mt-4"
                        >
                            Take Assignment
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AssignmentDetails;