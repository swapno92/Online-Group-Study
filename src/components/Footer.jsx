// import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="line py-8 bg-black text-gray-300">
            <div className="line w-[90%] mx-auto md:flex gap-12 ">
                <div className="line md:w-[30%] p-4 flex flex-col items-center space-y-2">
                    <img src="https://i.ibb.co/9r69Pbm/logo2.png" alt="" className="w-16" />
                    <h2 className="font-bold font-serif text-3xl text-[#374c7b]">Online Study Group</h2>
                    <p className="font-semibold">Join our vibrant online study group designed for collaborative learning and academic support. Connect with fellow students, share knowledge, and enhance your understanding of course materials. Engage in lively discussions, participate in interactive study sessions, and access a wealth of resources shared by members.</p>
                    <p className="font-semibold mt-4">© 2023 Study Group Limited</p>
                </div>
                <div className="line w-[70%] pl-8 pt-8">
                    <h2 className='font-bold text-xl'>Our Services :</h2>
                    <div className="flex font-semibold gap-8 mt-4">
                        <p>Zoom</p>
                        <p>Google Meet</p>
                        <p>Discord</p>
                        <p>Microsoft Teams</p>
                        <p>Slack</p>
                    </div>
                    <h2 className='font-bold text-xl mt-10'>Follow us :</h2>
                    <div className='flex flex-wrap lg:w-full  mx-auto  gap-6 ml-5 mt-4 '>
                        <FaFacebook className='text-3xl  '></FaFacebook>
                        <FaTwitter className='text-3xl'></FaTwitter>
                        <FaYoutube className='text-3xl'></FaYoutube>
                        <FaInstagram className='text-3xl'></FaInstagram>
                        <FaLinkedin className='text-3xl'></FaLinkedin>
                    </div>
                    <div className="mt-10 line font-semibold gap-x-9 pt-5 flex flex-wrap">
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