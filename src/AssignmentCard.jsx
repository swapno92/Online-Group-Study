// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Providers/AuthProvider";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
    const { _id, photo, level, marks, title, email } = assignment
    // console.log(assignment)

    const { user } = useContext(AuthContext)
    // console.log(user.email)
    // console.log(email)

    const handleDelete = _id => {
        if (email === user?.email) {
            // console.log(true)
            console.log(_id)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://assignment-eleven-server-beta.vercel.app/assignment/${_id}`,  {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remainingAssignments = assignments.filter(assign => assign._id !== _id)
                                setAssignments(remainingAssignments)
                            }
                        })

                    console.log('delete confirmed')
                }
            });
        }
        else {
            // console.log(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can only delete assignments you have created!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }
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
                        className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-green-100 border border-green-500">View <br />Assignment
                    </button>
                </Link>
                <Link to={`updateAssignment/${_id}`}>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-green-100 border border-green-500">Update <br />Assignment
                    </button>
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={() => handleDelete(_id)}
                    className=" mt-4 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500">Delete</button>
            </div>
        </div>
    );
};

export default AssignmentCard;