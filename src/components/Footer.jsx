// import React from 'react';

const Footer = () => {
    return (
        <div className="line py-8">
            <div className="line w-[90%] mx-auto md:flex gap-12">
                <div className="line w-[30%] p-4 flex flex-col items-center space-y-2">
                    <img src="https://i.ibb.co/9r69Pbm/logo2.png" alt="" className="w-16" />
                    <h2 className="font-bold font-serif text-3xl from-stone-400">Online Study Group</h2>
                    <p className="font-semibold">Join our vibrant online study group designed for collaborative learning and academic support. Connect with fellow students, share knowledge, and enhance your understanding of course materials. Engage in lively discussions, participate in interactive study sessions, and access a wealth of resources shared by members.</p>
                    <p className="font-semibold mt-4">© 2023 Study Group Limited</p>
                </div>
                <div className="line w-[70%]">
                    <h2>Our Services</h2>
                    <div className="flex">
                        <p>Zoom</p>
                        <p>Google Meet</p>
                        <p>Discord</p>
                        <p>Microsoft Teams</p>
                        <p>Slack</p>
                    </div>
                    <h2>Follow us:</h2>
                    <div>
                        
                    </div>
                    <div className="flex line">
                        <p>United Kingdom</p>
                        <p>Ireland</p>
                        <p>United States of America</p>
                        <p>Modern Slavery Statement</p>
                        <p>The Board</p>
                        <p>Governance</p>
                        <p>The Board</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Cookie Preferences</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;