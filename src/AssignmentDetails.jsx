// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
    const { user } = useContext(AuthContext)

    const handleSubmitedForm = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value
        const marks = form.marks.value
        const name = form.name.value
        const email = form.email.value
        const pdf = form.pdf.value
        const note = form.note.value
        const status = document.getElementById('status').innerText
        // console.log(status)
        const newSumited = { pdf, title, name, marks, note, status, email }
        console.log(newSumited)

        //send data to the server
        fetch('http://localhost:5000/submitedForm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSumited)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Form Submited successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

    const loadedAssignment = useLoaderData()
    // console.log(loadedAssignment)
    const { description, photo, title, marks } = loadedAssignment
    // console.log(title)
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
                        <span className="underline font-bold">Assignment Title:</span> {title}
                    </p>
                    <p className=" font-semibold text-justify lg:w-3/5 mx-auto mt-4 ">
                        <span className="underline font-bold">Details:</span> {description}
                    </p>

                    {/* <div className=" flex justify-center">
                        <Link to='assignment/detailsAssignments/submissionForm'
                            // onClick={handleCurt}
                            className="text-center  px-4 py-1 rounded-lg btn-accent mt-4"
                        >
                            Take Assignment
                        </Link>
                    </div> */}

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className=" flex justify-center">
                        <Link className="text-center  px-4 py-1 rounded-lg btn-accent mt-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment</Link>
                    </div>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg text-center">Assignment Submission Form</h3>
                            <form onSubmit={handleSubmitedForm}>


                                <div className="space-y-1 mt-8 ">
                                    <h3 className="text-lg font-semibold ml-4"> PDF link :</h3>
                                    <input
                                        type="text"
                                        name="pdf"
                                        className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                        id=""
                                        placeholder="Pdf link"
                                    // defaultValue={data.brand}
                                    />
                                </div>
                                <div className="space-y-1 mt-8">
                                    <h3 className="text-lg font-semibold ml-4">Quic Text Note :</h3>
                                    <textarea
                                        className="border border-gray-300 rounded-lg p-8 md:w-[85%] w-[90%] md:ml-0 ml-4"
                                        name="note"
                                        id=""
                                        // cols="lg:65"
                                        rows="4"
                                        placeholder="Quic note..."
                                    // defaultValue={data.description}
                                    ></textarea>
                                </div>
                                <div className="space-y-1 mt-8 hidden">
                                    <h3 className="text-lg font-semibold ml-4">User Email :</h3>
                                    <input
                                        className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                        type="email"
                                        name="email"
                                        defaultValue={user?.email}
                                        id=""
                                        placeholder="User Email"
                                    // defaultValue={data.img}
                                    />
                                </div>
                                <div className="space-y-1 mt-8 hidden">
                                    <h3 className="text-lg font-semibold ml-4">User Name :</h3>
                                    <input
                                        className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                        type="text"
                                        name="name"
                                        defaultValue={user?.displayName}
                                        id=""
                                        placeholder="User name"
                                    // defaultValue={data.img}
                                    />
                                </div>
                                <div className="space-y-1 mt-8 hidden">
                                    <h3 className="text-lg font-semibold ml-4">Title :</h3>
                                    <input
                                        className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                        type="text"
                                        name="title"
                                        defaultValue={title}
                                        id=""
                                        placeholder="Title"
                                    // defaultValue={data.img}
                                    />
                                </div>
                                <div className="space-y-1 mt-8 hidden">
                                    <h3 className="text-lg font-semibold ml-4">Marks :</h3>
                                    <input
                                        className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                        type="number"
                                        name="marks"
                                        defaultValue={marks}
                                        id=""
                                        placeholder="marks"
                                    // defaultValue={data.img}
                                    />
                                </div>
                                <div className="mt-5 flex justify-around">
                                    <button ><span className="font-bold text-2xl">Status :</span> <span id="status" className="font-semibold text-2xl">Pending</span></button>
                                    <button type="submit" className="btn bg-slate-400">Submit</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AssignmentDetails;