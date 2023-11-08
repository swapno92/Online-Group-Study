// import React from 'react';

import { Link } from "react-router-dom";

const MyAssignmentCard = ({ MyAssignment }) => {
    const { _id, title, level, marks, obtainMarks,feedback,  email } = MyAssignment
    console.log(MyAssignment)

    return (
        <div className="px-2 py-4 bg-white shadow-lg rounded-md ">
            
            <h2 className="text-center text-2xl font-bold mt-4">
                Title :
                <span className="font-medium"> {title}</span>
            </h2>
            <h2 className="text-center text-2xl font-bold mt-4">
                Assignment Status : complite
                <span className="font-medium"> {}</span>
            </h2>
            <div className=" w-[90%] mx-auto flex justify-between px-3 items-center mt-4">
                <div className="flex items-center">
                    <p className="font-semibold text-xl">Marks : {marks}<span></span></p>
                </div>
                <div className="flex items-center">
                    <p className="font-semibold text-xl">Obtain Marks : {obtainMarks}<span></span></p>
                </div>
                {/* <h2 className="text-2xl font-semibold">
                    Level : <span>{level}</span>
                </h2> */}
            </div>
            <h2 className="text-center text-2xl font-bold mt-4">
                Feedback :{feedback}
                <span className="font-medium"> {}</span>
            </h2>
            {/* <div className="flex justify-evenly items-center mt-5">
                <Link to={`detailsAssignments/${_id}`}>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-green-100 border border-green-500">View <br />Assignment
                    </button>
                </Link>
                <Link to={`updateAssignment/${_id}`}>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-green-100 border border-green-500">Update <br />Assignment
                    </button>
                </Link>
            </div> */}
        </div>
    );
};

export default MyAssignmentCard;