// import React from 'react';

import { useLoaderData } from "react-router-dom";
import SubmitedAssCard from "./SubmitedAssCard";
// console.log(useLoaderData)

const Submited = () => {
    const submitedAssignments = useLoaderData()

    // console.log(submitedAssignment)
    return (
        <div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-8 mx-8 gap-4">

            {
                submitedAssignments.map(submitAssignmentsCard => <SubmitedAssCard key={submitAssignmentsCard._id} submitAssignmentsCard={submitAssignmentsCard}></SubmitedAssCard>)
            }
            </div>

              

        </div>
    );
};

export default Submited;