import { useEffect, useState } from "react";
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
                <div className="p-5 dark:text-gray-50 flex flex-col items-between justify-between h-full">
                    {description}
                    <div className="flex justify-center mt-4">
                        <img className="w-2/6 h-full" src={human} alt="human" />
                    </div>
                    {description ? (
                        <div className="flex justify-center">
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
