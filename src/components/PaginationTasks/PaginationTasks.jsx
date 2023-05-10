import { useState } from "react"
const PaginationTasks = () => {

    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState("1")

    return (
        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="hidden items-center justify-between sm:flex" aria-label="Pagination">
                <a href="javascript:void(0)" className="hover:text-indigo-600 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:text-gray-50 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
                <ul className="flex items-center gap-1">
                    {
                        pages.map((item, idx) => (
                            <li key={item} className="text-sm">
                                {
                                    item == "..." ? (
                                        <div>
                                            {item}
                                        </div>
                                    ) : (

                                        <a href="javascript:void(0)" aria-current={currentPage == item ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 dark:bg-slate-800  dark:text-gray-50 dark:hover:bg-slate-700 hover:text-indigo-600 hover:bg-indigo-50 ${currentPage == item ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`}>
                                            {item}
                                        </a>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <a href="javascript:void(0)" className="hover:text-indigo-600 flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 dark:text-gray-50 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </a>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <a href="javascript:void(0)" className="px-4 py-2 dark:border-slate-700 dark:text-gray-50 border rounded-lg duration-150 dark:hover:bg-gray-700 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:text-gray-50 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
                <div className="font-medium dark:text-gray-50">
                    Страница {currentPage} из {pages.length}
                </div>
                <a href="javascript:void(0)" className="px-4 py-2 dark:border-slate-700 dark:text-gray-50 border rounded-lg duration-150 dark:hover:bg-gray-700 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 dark:text-gray-50 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </a>
            </div>
        </div>
    )
}
export default PaginationTasks;