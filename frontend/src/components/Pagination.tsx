import { useState } from "react";
import { MdLastPage } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";

interface pageData {
    totalPosts: number,
    postPerPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ totalPosts, postPerPage, setCurrentPage }: pageData) {

    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const maxVisible = 10;

    const visiblePages = pages.slice(currentIndex, currentIndex + maxVisible);

    const next = () => {
        if (currentIndex + maxVisible < pages.length)
            setCurrentIndex(currentIndex + maxVisible);
    };

    const prev = () => {
        if (currentIndex - maxVisible >= 0)
            setCurrentIndex(currentIndex - maxVisible);
    };

    return (
        <div className="flex items-center justify-center gap-2">

            {pages.length > maxVisible && (
                <button
                    onClick={prev}
                    className="px-3 py-2 bg-gray-200 rounded disabled:opacity-40"
                    disabled={currentIndex === 0}
                >
                    <MdFirstPage size={30}/>
                </button>
            )}

            {visiblePages.map((page) => (
                <button
                    key={page}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg"
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}

            {pages.length > maxVisible && (
                <button
                    onClick={next}
                    className="px-3 py-2 bg-gray-200 rounded disabled:opacity-40"
                    disabled={currentIndex + maxVisible >= pages.length}
                >
                    <MdLastPage size={30}/>
                </button>
            )}
        </div>
    );
}
