import React from 'react'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import CYSS from "/Assets/Images/CYSS.jpg"
import Event from "/Assets/Images/Event.jpeg"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className='col-span-3 bg-black py-5 px-10'>
            <div className="card space-y-5 border-y-2 py-2 border-gray-700 border-opacity-35 text-white">
                <Link to="community/pu/cyss" className="title flex space-x-2 items-center font-Roboto">
                    <img src={CYSS} alt="Uploaded-Image" className='rounded-full bg-cover bg-center size-10' />
                    <p className="party text-themeTwo">
                        CYSS
                    </p>
                </Link>
                <div className="body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus qui quae sed placeat. Quidem soluta laborum nobis adipisci! Quod, nobis et voluptatibus eveniet sequi magni non earum, praesentium nemo veritatis explicabo quaerat cumque, vitae placeat id incidunt. Doloribus porro optio dolores incidunt nisi natus in molestias, minima ex ratione inventore magni qui accusantium eligendi eius repellat deleniti omnis quo voluptates aspernatur debitis. Delectus atque perspiciatis voluptas, ipsum, nisi vero illum ratione provident consequuntur sit eum, modi doloribus dignissimos vitae? Sunt aliquid totam eos quia, recusandae quas temporibus sapiente nemo qui debitis impedit, aut quod saepe officiis unde facere quidem.
                </div>
                <img src={Event} alt="Post-Image" className='w-full object-cover object-center h-96' />
                <div className="engagement flex gap-x-4">
                    <div className="Likes flex space-x-1 bg-white w-fit bg-opacity-25 rounded-full px-2 py-1 hover:bg-opacity-30 items-center text-lg">
                        <span className='flex items-center bg-white bg-opacity-0 hover:bg-opacity-30 rounded-full p-2 cursor-pointer hover:text-green-500 transition-all duration-200'>
                            <BiUpvote />
                        </span>
                        50
                        <span className='flex items-center bg-white bg-opacity-0 hover:bg-opacity-30 rounded-full p-2 cursor-pointer hover:text-red-500 transition-all duration-200'>
                            <BiDownvote />
                        </span>
                    </div>
                    <div className="comments bg-white bg-opacity-25 hover:bg-opacity-30 py-2 px-4  rounded-3xl flex items-center gap-2">
                        <FaRegCommentAlt />
                        40
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home