import React, { useEffect, useState } from 'react';
import { useGetAllBlogsQuery } from '../api';
import { excludeBlogs } from './ExcludeBlogs';
import { parseTitleAndDescription } from './parseTitleAndDescription';
import DOMPurify from "dompurify";
import { useNavigate } from 'react-router-dom';
import { FullscreenLoader } from './FullscreenLoader';

function Blogs() {
    const [blogData, setBlogData] = useState([]);
    const { data: blogsData, isLoading } = useGetAllBlogsQuery();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (blogsData?.blogs?.length > 0) {
            const filteredBlogs = blogsData.blogs.filter((item) => {
                const { extractedTitle } = parseTitleAndDescription(item?.title);
                return !excludeBlogs.includes(extractedTitle);
            });
            setBlogData(filteredBlogs?.slice(0, 3));
        }
    }, [blogsData]);

    const parseContent = (htmlContent) => {
        const cleanHTML = DOMPurify.sanitize(htmlContent);
        const parser = new DOMParser();
        const doc = parser.parseFromString(cleanHTML, "text/html");

        const firstImage = doc.querySelector("img")?.src || null;

        const textContent = doc.body.textContent || "";
        const truncatedText = textContent.slice(0, 100) + (textContent.length > 100 ? "..." : "");

        return { firstImage, truncatedText };
    };

    return (
        <>
            {isLoading ? <FullscreenLoader />
                : <div className='px-10 py-3 m-5'>
                    <p className='text-orange-500 text-2xl font-bold pb-2'>Latest Blogs</p>
                    <div className='flex'>
                        {blogData?.map((item) => {
                            let { firstImage, truncatedText } = parseContent(item?.content);
                            return (

                                <div className="bg-white border rounded-lg shadow-md overflow-hidden w-1/3 m-3">
                                    <div className="p-4">
                                        <p className="text-xl font-semibold text-gray-900 pb-1">{item?.title}</p>
                                        <p className="mt-2 text-gray-600 text-sm pb-2">Published On: {new Date(item?.created_at).toLocaleDateString()}</p>
                                        <img src={firstImage} className='w-2/5 rounded-lg' />
                                        <p className="text-md font-semibold text-gray-700 flex items-center pt-3">{truncatedText}</p>
                                        <button style={{ color: "#ff6900" }} className='text-sm pt-3' onClick={() => navigate(`/blog-details/${item?.id}`)}>
                                            Read More
                                        </button>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            }
        </>
    );
}

export default Blogs;