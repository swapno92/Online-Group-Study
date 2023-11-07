// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
    const assignment = useLoaderData()
    const { _id, photo, level, marks, title, description } = assignment
    // console.log(typeof(_id))
    // console.log(`http://localhost:5000/assignment/${_id}`)


    const handleUpdateAssignment = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value
        const marks = form.marks.value
        const photo = form.photo.value
        const level = form.level.value
        const description = form.description.value
        const updatedAssignment = { title, marks, photo, level, description }
        // console.log(updatedAssignment)

        //send data to the server
        fetch(`http://localhost:5000/assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                // }
            })

    }

    return (
            <form onSubmit={handleUpdateAssignment} className="border border-white">
                <div className="my-4 mx-4  py-6 rounded-lg border border-purple-500 ">
                    <h2 className="text-center text-3xl font-bold font-serif text-gray-600 ">
                        Update Assignment
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1  md:px-16">
                        <div className="space-y-1 mt-8 ">
                            <h3 className="text-lg font-semibold ml-4">Assignment Title :</h3>
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                id=""
                                defaultValue={title}
                                placeholder="title"
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Assignment Marks :</h3>
                            <input
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                type="number"
                                name="marks"
                                id=""
                                defaultValue={marks}
                                placeholder="Marks"
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Image URL...</h3>
                            <input
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                type="url"
                                name="photo"
                                id=""
                                placeholder="Image Url"
                                defaultValue={photo}
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Assignment Difficulty Level :</h3>
                            <select id="" name="level" defaultValue={level} className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4 ">
                                <option  value="Easy">Easy </option>
                                <option  value="Medium">Medium</option>
                                <option  value="Hard" >Hard</option>
                            </select>
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Description :</h3>
                            <textarea
                                className="border border-gray-300 rounded-lg  md:w-[85%] w-[90%] p-8 md:ml-0 ml-4"
                                name="description"
                                id=""
                                // cols="lg:65"
                                rows="4"
                                placeholder="Short Description"
                            defaultValue={description}
                            ></textarea>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mt-8">
                        <button className=" bg-gray-700 text-white rounded-lg px-12 py-3">
                            Update Assignment
                        </button>
                    </div>
                </div>
            </form>
    );
};

export default UpdateAssignment;