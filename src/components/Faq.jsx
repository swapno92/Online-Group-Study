// import React from 'react';

const Faq = () => {
    return (
        <div className=" bg-slate-100 rounded-lg py-5 border border-blue-300 mx-5">
            <h1 className="text-gray-700 text-4xl font-semibold font-serif mb-5 text-center"> Frequently Asked Questions</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-[95%] mx-auto   ">
                <div className="line p-5 rounded-xl ">
                    <h2 className="font-bold">1. What is the purpose of this online study group?</h2>
                    <p className="font-semibold text-black"><span className="underline">answer:</span> The purpose of this online study group is to provide a collaborative and supportive environment for members to discuss course materials, share resources, ask questions, and enhance their understanding of the subject matter.</p>
                </div>
                <div className="line p-5 rounded-xl ">
                    <h2 className="font-bold">2. How often will the study group meetings be held?</h2>
                    <p className="font-semibold text-black"><span className="underline">answer:</span> The study group meetings will be held [insert frequency], typically on [insert specific days] at [insert time]. However, please check the group announcements for any updates or changes in the schedule.</p>
                </div>
                <div className="line p-5 rounded-xl ">
                    <h2 className="font-bold">3. How can I join the online study group?</h2>
                    <p className="font-semibold text-black"><span className="underline">answer:</span> To join the study group, click on the provided link and request to join. Once your request is approved, you'll have access to the group discussions, materials, and meeting schedules.</p>
                </div>
                <div className="line p-5 rounded-xl ">
                    <h2 className="font-bold">4. Can I invite my friends/classmates to join the study group?</h2>
                    <p className="font-semibold text-black"><span className="underline">answer:</span> Yes, you can invite your friends or classmates to join the study group. However, please ensure that they are enrolled in the same course or have a genuine interest in the subject matter to maintain the group's focus and effectiveness.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;