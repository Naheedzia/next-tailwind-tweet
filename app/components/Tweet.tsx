import React from "react";
import Image from "next/image";
import { GoKebabHorizontal } from "react-icons/go";
import Link from "next/link";
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";



const Tweet = () => {
    return (
        <div className="flex max-w-xl my-24 mx-auto p-3 border bg-white">
            <div>
                <Image className="rounded-full mr-3" src="/profile.jpg" alt="Profile Image" height={50} width={50} />
            </div>
            <div className="w-full">
                <div className="flex">
                    <Link href={"https://twitter.com/znk68"}>
                        <span><strong className="text-gray-800 mr-1">Ziaullah</strong></span>
                        <span className="text-gray-500 mr-1">@znk68</span>
                    </Link>
                    <p className="text-gray-500 mr-1">&middot;</p>
                    <p className="text-gray-500">May 02</p>
                    <p className="ml-auto">  <GoKebabHorizontal /></p>
                </div>
                <div>
                    You are amazing if you take time to comment on a tweet or/and YouTube video or a blogpost that has helped you!
                </div>
                <div className="flex justify-between mt-2">
                    <div className="flex items-center">
                        <FaRegComment className="mr-2 text-gray-600" />
                        <span className="text-gray-600">20</span>
                    </div>
                    <div className="flex items-center">
                        <FaRetweet className="mr-2 text-gray-600" />
                        <span className="text-gray-600">17</span>
                    </div>
                    <div className="flex items-center">
                        <AiOutlineHeart className="mr-2 text-gray-600" />
                        <span className="text-gray-600">215</span>
                    </div>
                    <div className="flex items-center">
                        <BsUpload className="mr-2 text-gray-600" />
                    </div>
                    <div className="flex items-center">
                        <FiBarChart2 className="mr-2 text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tweet;