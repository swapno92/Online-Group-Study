// import React from 'react';

import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';


const SubmitedAssCard = ({ submitAssignmentsCard }) => {
    const {user} = useContext(AuthContext)
    // console.log(submitAssignmentsCard)
    const { _id, title, marks, name } = submitAssignmentsCard
    // const { user } = useContext(AuthContext)
    // console.log(title)
    // console.log(submitAssignmentsCard)

    const handlesubmitmark = e => {
        e.preventDefault()
        const form = e.target;

        const obtainMarks = form.obtainMarks.value
        const title = form.title.value
        const email = form.email.value
        const feedback = form.feedback.value
        // const marks = form.marks.value
        console.log(feedback, marks)
        const newMyAssignment = { feedback, title, obtainMarks, marks,email}
        //     // console.log(title)


        fetch('https://assignment-eleven-server-beta.vercel.app/myAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMyAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('Assignment Form Submited successfully')
                }
            })


    }
    const [giveMarkAssignmentCard, setGiveMarkAssignmentCard] = useState(0)
    const handleGiveMark = _id => {
        fetch(`https://assignment-eleven-server-beta.vercel.app/submitedForm/${_id}`)
            .then(res => res.json())
            .then(data => setGiveMarkAssignmentCard(data))
        console.log(_id)
    }
    // console.log(giveMarkAssignmentCard)
    const { pdf, note } = giveMarkAssignmentCard
    // console.log(note)



    return (
        // {/* card */ }
        < div className="bg-yellow-50 rounded-xl shadow-xl py-4 px-2" >
            <h2 className="text-center text-xl font-bold mt-4">
                Title :
                <span className="font-medium text-lg">{title}</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-2xl font-semibold mt-4 px-2 py-1">assignment marks : {marks}</h2>
            </div>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-2xl font-semibold mt-4 px-2 py-1">examinee name :{name}</h2>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="flex flex-col justify-center mt-3 items-center">
                <button className="px-3 rounded-md border border-black py-2 text-center bg-stone-500 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}><span onClick={() => handleGiveMark(_id)}>Give Mark</span></button>
            </div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-gray-100">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handlesubmitmark} >
                        <div className="space-y-3 ">
                            <h3 className="font-semibold text-xl">Google  Drive Link or PDF file :{pdf} </h3>
                            <h3 className="font-semibold text-xl">Note : {note}</h3>
                            <div className="flex items-center">
                                <h2 className="font-semibold text-xl">Marks :</h2> <input  className="line ml-4 w-20 rounded-md pl-3" type="number" name="obtainMarks" />
                            </div>
                            <ToastContainer></ToastContainer>

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
                                <h3 className="text-lg font-semibold ml-4">Title :</h3>
                                <input
                                    className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                    type="text"
                                    name="title"
                                    defaultValue={'title'}
                                    id=""
                                    placeholder="title"
                                // defaultValue={data.img}
                                />
                            </div>
                            <div className="space-y-1 mt-8 ">
                                <h3 className="font-semibold text-xl">Feedback :</h3>
                                <textarea
                                    className="border border-gray-300 rounded-lg p-8 md:w-[85%] w-[90%] md:ml-0 ml-4"
                                    name="feedback"
                                    id=""
                                    // cols="lg:65"
                                    rows="4"
                                    placeholder="feedback"
                                // defaultValue={data.description}
                                ></textarea>
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="submit" className="btn bg-gray-300 font-semibold">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </dialog>
        </div >
    );
};

export default SubmitedAssCard;