import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/reactImage.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import jqery from '../assets/jquery.png';
import php from '../assets/php.png';
import sql from '../assets/sql.png';
import sass from '../assets/sass.jpg';
import wordpress from '../assets/wordpress.png';
import python from '../assets/python.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';



const Experience = () => {
    const techs = [
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },

        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },

        {
            id:3,
            src:javascript,
            title:"JavaScript",
            style:'shadow-yellow-500'
        },

        {
            id:4,
            src:reactImage,
            title:"React",
            style:'shadow-blue-600'
        },

        {
            id:5,
            src:node,
            title:"Node with Express",
            style:'shadow-green-500'
        },

        {
            id:6,
            src:mongodb,
            title:"MongoDB",
            style:'shadow-green-500'
        },

        {
            id:7,
            src:jqery,
            title:"Jquery",
            style:'shadow-blue-500'
        },

        {
            id:8,
            src:php,
            title:"PHP",
            style:'shadow-purple-500'
        },

        {
            id:9,
            src:sql,
            title:"SQL",
            style:'shadow-orange-500'
        },

        {
            id:10,
            src:sass,
            title:"SASS",
            style:'shadow-pink-500'
        },
        
        {
            id:11,
            src:wordpress,
            title:"WordPress",
            style:'shadow-blue-500'
        },

        {
            id:12,
            src:python,
            title:"Python",
            style:'shadow-yellow-500'
        },

        {
            id:13,
            src:github,
            title:"GitHub",
            style:'shadow-gray-500'
        },

        {
            id:14,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-sky-400'
        },
    ]
  return (
    <div name ="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full py-12'>
        <div className='max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {techs.map(({ id, src, title, style }) => (
                    <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                    </div>
                ))}
        </div>
        </div>
    </div>
  )
}

export default Experience