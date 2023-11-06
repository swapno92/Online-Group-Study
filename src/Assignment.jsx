// import React from 'react';

import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const Assignment = () => {

    const assignments = useLoaderData()

    return (
        <div>
            <h1 className="text-gray-700 text-4xl font-semibold font-serif mb-5 text-center mt-5">All Assignments Here...</h1>
            <section className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 rounded-lg">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)

                }
            </section>
        </div>
    );
};

export default Assignment;