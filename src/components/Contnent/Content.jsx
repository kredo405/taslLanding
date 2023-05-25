import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterDropdown from "../FilterDropdown/FilterDropDown";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router";
import ListTasks from "../lListTask/ListTasks";
import PaginationTasks from "../PaginationTasks/PaginationTasks";
import human from "../../img/human.png";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Content = () => {
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [value, setValue] = useState(3);
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(3);
    const state = useSelector((state) => state);
    const task = state.taskSlice.task;

    const navigate = useNavigate();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onChangePagination = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
        <div className="flex justify-between z-0 relative">
            <div className="w-full lg:w-7/12">
                <div className="flex md:hidden">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="px-4 w-full mx-auto"
                    >
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-3 h-3 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Поиск"
                                className="dark:bg-slate-800 dark:text-gray-50 dark:border-slate-700 w-full pl-12 pr-4 text-gray-600 border rounded-md outline-none  bg-white focus:bg-gray-50 focus:border-indigo-600"
                            />
                        </div>
                    </form>
                </div>
                <div className="flex justify-between items-center px-2">
                    <div className="hidden md:flex w-full mt-2">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-md px-4 mx-auto"
                        >
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-3 h-3 my-auto text-gray-400 left-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Поиск"
                                    className="dark:bg-slate-800 dark:border-slate-700 w-full pl-12 pr-4 text-gray-600 border rounded-md outline-none  bg-white focus:bg-gray-50 focus:border-indigo-600"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="py-3 flex justify-start w-full">
                        <FilterDropdown />
                    </div>
                    <div className="py-3 px-3 flex justify-end">
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <Menu.Button className="md:text-base inline-flex w-full justify-center dark:border-slate-800 border-white gap-x-1.5 rounded-md dark:bg-slate-800 bg-white px-3 py-2 text-sm font-semibold dark:text-gray-50 text-gray-900  hover:bg-gray-50">
                                    Сортировка
                                    <ChevronDownIcon
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}
                                                >
                                                    По сложности
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}
                                                >
                                                    По рейтингу
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <div className="w-full lg:h-[50vh] xl:h-[80vh] flex flex-col justify-between">
                    <ListTasks
                        setDescription={setDescription}
                        showDrawer={showDrawer}
                    />
                    <PaginationTasks />
                </div>
            </div>
            <div className="w-5/12 mt-10 hidden lg:block border-l-2 border-solid border-slate-100">
                <h2 className="text-center font-bold text-3xl dark:text-gray-50">
                    Описание
                </h2>
                <div className="p-5 dark:text-gray-50 flex flex-col items-around justify-between h-full">
                    {description}
                    {description ? (
                        <div className="flex justify-around flex-col items-center">
                            <div className="flex justify-evenly items-center w-full border-y-2 border-solid border-slate-200 mt-10">
                                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-10 h-10 px-2 text-sky-400"
                                    >
                                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                    </svg>
                                    Лайки: {task.rate}
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-10 h-10 px-2 text-orange-400 "
                                    >
                                        <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                                    </svg>
                                    Дизлайки: 18
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-10 h-10 px-2 text-lime-400"
                                    >
                                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                                    </svg>
                                    Сложность: {task.complexity}
                                </div>
                            </div>
                            <button
                                className="px-7 w-8/12 xl:w-10/12 mt-20 py-4 xl:text-lg text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
                                onClick={() => navigate("/simulator")}
                            >
                                Решить в тренажере
                            </button>
                        </div>
                    ) : null}
                </div>
                <div></div>
            </div>
            <div className="block lg:hidden z-10">
                {open ? (
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setOpen(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        Описание
                                    </h4>
                                    <button
                                        className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mx-auto"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                                    {description}
                                </div>
                                <div className="flex items-center gap-3 p-4 mt-5 border-t">
                                    <button
                                        className="px-6 py-2 text-white  bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => {
                                            setOpen(false);
                                            navigate("/simulator");
                                        }}
                                    >
                                        Решить в тренажере
                                    </button>
                                    <button
                                        className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Content;
