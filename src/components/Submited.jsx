// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Submited = () => {
    const submitedAssignment = useLoaderData()
    console.log(submitedAssignment)
    return (
        <div>
             {submitedAssignment.length}
        </div>
    );
};

export default Submited;