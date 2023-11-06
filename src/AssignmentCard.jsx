// import React from 'react';

import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
    const { _id, photo, level, marks, title } = assignment
    console.log(assignment)
    // console.log(assDefLevel)
    return (
        <div className=" py-4 bg-white shadow-lg rounded-md ">
            <div className="flex justify-center items-center">
                <img src={photo} alt="" className="w-[90%] h-60 rounded-lg border border-lime-200" />
            </div>
            <h2 className="text-center text-2xl font-bold mt-4">
                Title :
                <span className="font-medium"> {title}</span>
            </h2>
            <div className=" w-[90%] mx-auto flex justify-between px-3 items-center mt-4">
                <h2 className="text-2xl font-semibold">
                    Level : <span>{level}</span>
                </h2>
                <div className="flex items-center">
                    <p className="font-semibold text-xl">Marks : {marks}<span></span></p>
                </div>
            </div>
            <div className="flex justify-evenly items-center mt-5">
                <Link to={`detailsAssignments/${_id}`}>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500">View <br />Assignment
                    </button>
                </Link>
                <Link to={`updateAssignment/${_id}`}>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500">Update <br />Assignment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AssignmentCard;