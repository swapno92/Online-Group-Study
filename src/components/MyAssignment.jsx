// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignment = () => {
    const { user } = useContext(AuthContext)
    const [myAssignments, setMyAssignment] = useState([])

    useEffect(() => {
        fetch(`https://assignment-eleven-server-beta.vercel.app/myAssignment/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAssignment(data))
    }, [user?.email])
    console.log(myAssignments)
    // const assignments
    return (
        <div>
            <section className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 rounded-lg">
                {
                    myAssignments.map(MyAssignment =>
                        <MyAssignmentCard
                            key={MyAssignment._id}
                            MyAssignment={MyAssignment}
                        ></MyAssignmentCard>)
                }
            </section>
        </div>
    );
};

export default MyAssignment;