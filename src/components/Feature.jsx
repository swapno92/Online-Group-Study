// import React from 'react';

const Feature = () => {
    return (
        <div>
            <h1 className="text-gray-700 text-4xl font-semibold font-serif mb-5 text-center">Our Feature</h1>
            <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-8 rounded-xl gap-x-6 gap-y-8">
                <div className=" w-full text-center space-y-4 rounded-xl p-5 bg-[rgba(255,255,255,0.40)]">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6389f415538b8f13f2d86db6_Solo%20Study.svg" className="w-full h-[180px] " alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Own Study Universe</h2>
                    <p className=" text-xl text-black">
                        <span className="text-[#4a4a4a] font-semibold ">Create your very own study room with atmospheric</span>
                        <span className="font-bold">backgrounds, personal timers, </span>
                        <span className="text-[#4a4a4a] font-semibold">and</span>
                        <span className="font-bold">goals.</span>
                    </p>
                </div>
                {/* 2 */}
                <div className=" w-full text-center space-y-4 rounded-xl p-5 bg-[rgba(255,255,255,0.40)]">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6389f4154e6ab3104c6f5078_Group%20study.svg" className="w-full h-[180px] " alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Group Study Rooms
                    </h2>
                    <p className=" text-xl text-black">
                        <span className="text-[#4a4a4a] font-semibold ">Join </span>
                        <span className="font-bold">motivated students </span>
                        <span className="text-[#4a4a4a] font-semibold ">from all over the world to boost your </span>
                        <span className="font-bold">productivity .</span>
                        <span className="text-[#4a4a4a] font-semibold">and find your study flow.</span>
                    </p>
                </div>
                {/* 3 */}
                <div className=" w-full text-center space-y-4 rounded-xl p-5 bg-[rgba(255,255,255,0.40)]">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6389f413ac476c729c4e3376_Help.svg" className="w-full h-[180px] " alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Free Tutor Help!</h2>
                    <p className=" text-xl text-black">
                        <span className="text-[#4a4a4a] font-semibold ">Feeling stuck? Just raise your hand and one of our</span>
                        <span className="font-bold">expert community tutors </span>
                        <span className="text-[#4a4a4a] font-semibold">will jump in and help.</span>
                    </p>
                </div>
                {/* 4 */}
                <div className=" w-full text-center space-y-4 rounded-xl p-5 bg-[rgba(255,255,255,0.40)]">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6389f41542ab4a1897c2bd59_mindfulness.svg" className="w-full h-[180px] " alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Mindfulness</h2>
                    <p className=" text-xl text-black">
                        <span className="text-[#4a4a4a] font-semibold ">Balance is crucial – check out our</span>
                        <span className="font-bold">mindfulness exercises</span>
                        <span className="text-[#4a4a4a] font-semibold">to give your mind a breather.</span>
                    </p>
                </div>
                {/* 5 */}
                <div className=" w-full text-center space-y-4 rounded-xl p-5 bg-[rgba(255,255,255,0.40)]">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6389f41460f36b5497722afd_events.svg" className="w-full h-[180px] " alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Community Events</h2>
                    <p className=" text-xl text-black">
                        <span className="text-[#4a4a4a] font-semibold ">Our live events tackle everything from</span>
                        <span className="font-bold">productivity courses to career advice. </span>
                    </p>
                </div>
                {/* 6 */}
                <div className=" w-full text-center space-y-4 rounded-xl p-5 bg-[rgba(255,255,255,0.40)]">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6389f4178f2fdffb6aa635ef_dashboard.svg" className="w-full h-[180px] " alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Study Stats
                    </h2>
                    <p className=" text-xl text-black">
                        <span className="text-[#4a4a4a] font-semibold ">Create your very own study room with atmospheric</span>
                        <span className="text-[#4a4a4a] font-semibold">See your </span>
                        <span className="font-bold">progress </span>
                        <span className="text-[#4a4a4a] font-semibold">every day in your Stats and on the</span>
                        <span className="font-bold">community leaderboard. </span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Feature;