// import React from 'react';

const CreateAssignment = () => {

    const handleCreateAssignment = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value
        const marks = form.marks.value
        const photo = form.photo.value
        const level = form.level.value
        const description = form.description.value
        const newAssignment = { title, marks, photo, level, description }
        console.log(newAssignment)
    }
    return (
        <>
            <form onSubmit={handleCreateAssignment}>
                <div className="my-4 mx-4  py-3 rounded-lg border border-purple-500">
                    <h2 className="text-center text-3xl font-bold font-serif text-gray-600">
                        Add Product
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1  md:px-16">
                        <div className="space-y-1 mt-8 ">
                            <h3 className="text-lg font-semibold ml-4">Assignment Title :</h3>
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                id=""
                                placeholder="title"
                            // defaultValue={data.brand}
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Assignment Marks :</h3>
                            <input
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                type="number"
                                name="marks"
                                id=""
                                placeholder="Marks"
                            // defaultValue={data.price}
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
                            // defaultValue={data.img}
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Assignment Difficulty Level :</h3>
                            <select id="" name="level" className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4 ">
                                <option value="easy">easy </option>
                                <option value="medium">medium</option>
                                <option value="hard" >hard</option>
                            </select>
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Description :</h3>
                            <textarea
                                className="border border-gray-300 rounded-lg pt-8 md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                name="description"
                                id=""
                                // cols="lg:65"
                                rows="4"
                                placeholder="Short Description"
                            // defaultValue={data.description}
                            ></textarea>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mt-8">
                        <button className=" bg-gray-700 text-white rounded-lg px-12 py-3">
                            Create Assignment
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateAssignment;