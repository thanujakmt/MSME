import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllBlogsQuery } from '../api';
import { parseTitleAndDescription } from './parseTitleAndDescription';
import DOMPurify from 'dompurify';

function BlogsDetails() {
    const { id } = useParams();
    const [blogData, setBlogData] = useState({});
    const [extractedTitle, setExtractedTitle] = useState({});
    const { data: blogs_data, isLoading } = useGetAllBlogsQuery();

    useEffect(() => {
        if (blogs_data?.blogs?.length > 0) {
            let blog = blogs_data?.blogs.find((item) => item.id === id);
            setBlogData(blog || {});
        }
    }, [blogs_data]);

    const parseContent = (htmlContent) => {
        const cleanHTML = DOMPurify.sanitize(htmlContent, {
            USE_PROFILES: { html: true }
        });

        const parser = new DOMParser();
        const doc = parser.parseFromString(cleanHTML, 'text/html');

        const image = doc.querySelector("img")?.src || null;

        const textOnlyHTML = doc.body.innerHTML;

        return {
            image,
            text: textOnlyHTML
        };
    };

    useEffect(() => {
        if (blogData) {
            const { extractedTitle } = parseTitleAndDescription(
                blogData?.title
            );
            let { image, text } = parseContent(blogData?.content)
            setExtractedTitle({ title: extractedTitle, img: image, truncatedText: text });
        }
    }, [blogData]);
console.log("isloofrrerererrr");

    return (
        <div>
            {isLoading ? <div class="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> :
                <div className="bg-white border rounded-lg shadow-md overflow-hidden w-5/6 m-3">
                    <div className="p-4">
                        <p className="text-xl font-semibold text-gray-900 pb-1">{extractedTitle.title}</p>
                        <p className="mt-2 text-gray-600 text-sm pb-2">Published On: {new Date(blogData?.created_at).toLocaleDateString()}</p>
                        <div className="text-md font-semibold text-gray-700 pt-3" dangerouslySetInnerHTML={{ __html: extractedTitle?.truncatedText }} />
                    </div>
                </div>
            }

        </div>
    );
}

export default BlogsDetails;