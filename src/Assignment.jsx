// import React from 'react';
import './Assignment.css'

import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";

// window.location.reload();
const Assignment = () => {
    const loadedAssignments = useLoaderData()
    // console.log(loadedAssignments)
    const [assignments, setAssignments] = useState(loadedAssignments)
    // console.log(assignments)


    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)
    const [assignmentCart, setAssignmentCart] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/assignmentsCount?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAssignmentCart(data))
    }, [currentPage, itemsPerPage])
    const { count } = assignmentCart
    console.log(count)
    // const itemsPerPage = 4
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    // console.log(pages)
    const handleItemsPerPage = e => {
        // console.log(e.target.value)
        const val = parseInt(e.target.value)
        // console.log(val)
        setItemsPerPage(val)
        setCurrentPage(0)
    }
    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }



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
                        assignments={assignments}
                        setAssignments={setAssignments}
                    ></AssignmentCard>)
                }
            </section>


            <div className='pagination line'>

                <p>
                    currentPage:{currentPage}
                </p>
                <button className='line rounded-md px-2 py-1' onClick={handlePreviousPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={`line rounded-md px-4 py-1 ${currentPage === page ? 'selected' : undefined}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button className='line rounded-md px-2 py-1' onClick={handleNextPage}>Next</button>
                <select className='line rounded-md px-2 py-1' value={itemsPerPage} name="" id="" onChange={handleItemsPerPage} >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Assignment;