import React, { useEffect, useState } from 'react';
import { useGetAllBlogsQuery } from '../api';
import { excludeBlogs } from './ExcludeBlogs';

function Blogs() {
    const [blogData, setBlogData] = useState([]);
    const {data: blogsData} = useGetAllBlogsQuery();
    console.log("werfgf", blogsData, blogData);
    useEffect(() => {
        if(blogsData?.blogs?.length > 0){
            const filteredBlogs = blogsData.blogs.filter((item) => {
                      const { extractedTitle } = item.title;
                      return !excludeBlogs.includes(extractedTitle);
                    });
                    console.log("filteredBlogs",filteredBlogs);
                    
                    setBlogData(filteredBlogs?.slice(0, 3));
        }
    }, [blogsData])
    return (
        <div>
            
        </div>
    );
}

export default Blogs;