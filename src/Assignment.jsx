// import React from 'react';

import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";

const Assignment = () => {
    const assignments = useLoaderData()
    // console.log(assignments)

    const [searchItem, setSearchItem] = useState('')
    // const [showCards, setShowCards] = useState([])
    const filterData = assignments?.filter((item) => {
        // console.log(item.level)
        if (item && item.level) {
            return item.level.toLowerCase().includes(searchItem.toLowerCase())
        }
        return false
    })

    const handleSearch = () => {
        const searchValue = document.getElementById('searchInput').value
        setSearchItem(searchValue)
    }

    return (
        <div>
            <h1 className="text-gray-700 text-4xl font-semibold font-serif mb-5 text-center mt-5">All Assignments Here...</h1>
            <div className='div text-center'>
                <span className="text-3xl font-bold  mt-2">Selected level from :</span> <select id="searchInput" name="level" className="input input-bordered md:w-[8%] w-[90%] pl-8 md:ml-0 ml-4 rounded-l-lg rounded-r-none">
                    <option value="Easy">Easy </option>
                    <option value="Medium">Medium</option>
                    <option value="Hard" >Hard</option>
                </select>
                {/* <input type="text" name="" id="searchInput" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l" /> */}
                <button onClick={handleSearch} className="bg-[#FF444A] px-5 py-3 rounded-r-lg border-none">Search</button>
            </div>
            <section className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 rounded-lg">
                {
                    filterData.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)

                }
            </section>
        </div>
    );
};

export default Assignment;