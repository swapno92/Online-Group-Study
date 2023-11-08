// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SubmitedAssCard = ({ submitAssignmentsCard }) => {
    // console.log(submitAssignmentsCard)
    const { title, marks,name } = submitAssignmentsCard
    // const { user } = useContext(AuthContext)
    console.log(submitAssignmentsCard)
    return (
        // {/* card */ }
        < div className="bg-yellow-50 rounded-xl shadow-xl py-4 px-2" >
            <h2 className="text-center text-xl font-bold mt-4">
                Title : {title}
                <span className="font-medium text-lg"> Introduction to HTML and CSS</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-2xl font-semibold mt-4 px-2 py-1">assignment marks : {marks}</h2>
            </div>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-2xl font-semibold mt-4 px-2 py-1">examinee name :{name }</h2>
            </div>
            <div className="flex flex-col justify-center mt-3 items-center">
                <button className="px-3 rounded-md border border-black py-2 text-center bg-stone-500 text-white">Give Mark</button>
            </div>
        </div >
    );
};

export default SubmitedAssCard;