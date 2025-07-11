import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";

function Menu() {

    return (
        <div className='absolute md:top-1/2 top-[100%]  left-1/2 md:-translate-y-[50%] -translate-1/2 flex item-center flex-wrap gap-3 '>
            <div className=" top-[22%] left-[50%] h-45 w-20 border border-white flex-[1_0_45%] text-center hover:bg-gray-900">
                <FaHome className='flex mt-9 ml-14' size={'4.5em'} color='white' />
                <p className='text-white  top-34 left-13 text-xl'>Welcome</p>
            </div>
            <div className=" top-[22%] left-[63%] h-45 w-20 border border-white flex-[1_0_45%] text-center hover:bg-gray-900">
                <MdGroups className='flex mt-9 ml-14' size={'4.5em'} color='white' />
                <p className='text-white  top-34 left-13 text-xl'>Our Team</p>
            </div>
            <div className=" top-[49%] left-[50%] h-45 w-20 border border-white flex-[1_0_45%] text-center hover:bg-gray-900">
                <FaRegHandshake className='flex mt-9 ml-14' size={'4.5em'} color='white' />
                <p className='text-white  top-34 left-13 text-xl'>Over Work</p>
            </div>
            <div className=" top-[49%] left-[63%] h-45 w-20 border border-white flex-[1_0_45%] text-center hover:bg-gray-900">
                <FaHome className='flex mt-9 ml-14' size={'4.5em'} color='white' />
                <p className='text-white  top-34 left-13 text-xl'>Contact</p>
            </div>

        </div>

    );
}

export default Menu;
