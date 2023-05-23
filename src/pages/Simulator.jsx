import Nav from "../components/Nav/Nav";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import Editor from "@monaco-editor/react";
import Footer from "../components/Footer/Footer";
import { Tree } from "antd";
import { useState } from "react";

const radios = ["Write and Read", "Read only", "Write only"];
const { DirectoryTree } = Tree;

const Simulator = () => {
    const state = useSelector((state) => state);
    const task = state.taskSlice.task;
    const [open, setOpen] = useState(false);

    const treeData = [
        {
            title: "testTaskName",
            key: "0-0",
            children: [
                {
                    title: "src",
                    key: "0-0-0",
                    children: [
                        {
                            title: "main",
                            key: "0-0-0-1",
                            children: [
                                {
                                    title: "java",
                                    key: "0-0-0-1-0",
                                    children: [
                                        {
                                            title: "my",
                                            key: "0-0-0-1-0-1",
                                            children: [
                                                {
                                                    title: "alex",
                                                    key: "0-0-0-1-0-1-0",
                                                    children: [
                                                        {
                                                            title: "tasks",
                                                            key: "0-0-0-1-0-1-0-2",
                                                            children: [
                                                                {
                                                                    title: "Decision.java",
                                                                    key: "0-0-0-1-0-1-0-3",
                                                                    isLeaf: true,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: "files",
            key: "0-1",
            children: [
                {
                    title: "build.gradle",
                    key: "0-1-0",
                    isLeaf: true,
                },
            ],
        },
    ];

    const onSelect = (keys, info) => {
        console.log("Trigger Select", keys, info);
    };
    const onExpand = (keys, info) => {
        console.log("Trigger Expand", keys, info);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: "1",
            label: <p className="dark:text-gray-50">Условие</p>,
            children: (
                <div className="h-[40vh] overflow-y-scroll dark:bg-slate-700 bg-slate-50 text-center dark:text-gray-50  text-xl">
                    {task.description}
                </div>
            ),
        },
        {
            key: "2",
            label: <p className="dark:text-gray-50">Структура</p>,
            children: (
                <div className="h-[40vh] overflow-y-scroll dark:bg-slate-700 bg-slate-50 dark:text-gray-50 text-xl">
                    <DirectoryTree
                        multiple
                        defaultExpandAll
                        onSelect={onSelect}
                        onExpand={onExpand}
                        treeData={treeData}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <Nav />
            <div
                className={`flex justify-between  px-2 lg:px-10 mt-10 h-screen`}
            >
                <div className="w-3/6 flex flex-col border-r-2 border-none border-zinc-400 dark:border-slate-700 lg:border-solid overflow-y-scroll">
                    <div className="flex justify-center">
                        <h1 className="font-serif text-center dark:text-gray-50 text-2xl font-bold">
                            {task.task}
                        </h1>
                    </div>
                    <div className="mt-1 flex flex-col items-center justify-center sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 px-2 text-gray-600 dark:text-gray-50"
                            >
                                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                            </svg>
                            Лайки: 4
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 px-2 text-gray-600 dark:text-gray-50"
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
                                className="w-10 h-10 px-2 text-gray-600 dark:text-gray-50"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Кол-во решений: 10
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 px-2 text-gray-600 dark:text-gray-50"
                            >
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                            </svg>
                            Сложность: {task.complexity}
                        </div>
                    </div>
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            centered
                            items={items}
                            onChange={onChange}
                        />
                    </div>
                    {/* <div className="flex justify-center mt-5">
                        <h2 className="font-serif text-xl font-semibold dark:text-gray-50">Описание</h2>
                    </div>
                    <div className="px-3 font-mono mt-2 dark:text-gray-50">
                        {task.description}
                    </div> */}
                    <div className=" px-4 my-20">
                        <h2 className="text-gray-800 font-medium text-start dark:text-gray-50">
                            Задача выполнена когда:
                        </h2>
                        <ul className="mt-3 space-y-3">
                            {radios.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-x-2.5"
                                >
                                    <input
                                        type="checkbox"
                                        name="role"
                                        id={idx}
                                        className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150"
                                    />
                                    <label
                                        htmlFor={idx}
                                        className="text-sm text-gray-700 dark:text-gray-50 font-medium"
                                    >
                                        {item}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border-t-2 border-slate-400 dark:border-slate-700 border-solid mt-5 pt-3">
                        <span className="mx-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Arrays
                        </span>
                        <span className="mx-2  inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Stream
                        </span>
                        <span className="mx-2  inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Io
                        </span>
                    </div>
                    <div className="flex justify-center mx-5 items-end h-full">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3  py-2  2xl:text-lg text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                            Подсказка
                        </button>
                        <button
                            type="button"
                            className="ml-3 lg:hidden inline-flex items-center rounded-md bg-lime-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => {
                                showDrawer();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                                />
                            </svg>
                            Редактор кода
                        </button>
                    </div>
                </div>
                <div className={`hidden lg:block w-3/6 `}>
                    <div className="px-3">
                        <Editor
                            height="60vh"
                            defaultLanguage="java"
                            theme="vs-dark"
                            defaultValue='class HelloWorld {
                        public static void main(String[] args) {
                            System.out.println("Hello world!");
                        }
                    }'
                        />
                    </div>
                    <div className="flex justify-center my-3">
                        <button
                            type="button"
                            className="inline-flex mx-2 px-5 items-center bg-lime-400 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inline-flex px-5 mx-2 items-center rounded-md bg-orange-400 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inline-flex px-5 mx-2  items-center rounded-md bg-sky-400 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inline-flex px-5 mx-2  items-center rounded-md bg-red-400 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="border-y-2 border-slate-600 border-solid mt-2 flex justify-start items-center bg-slate-900 mx-4 w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-slate-50"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="px-5 font-bold py-2 bg-slate-900 text-gray-50">
                            Вывод:
                        </span>
                    </div>
                    <div className="w-full h-[20vh] bg-slate-900 text-slate-50 mx-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-teal-50"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
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
                                            Редактор
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
                                        <div
                                            className={` w-full border-t-2 border-slate-700 border-solid`}
                                        >
                                            <div className="flex justify-center my-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex mx-2 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6 bg-lime-600"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6 bg-orange-500"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="px-3">
                                                <Editor
                                                    height="49vh"
                                                    defaultLanguage="java"
                                                    theme="vs-dark"
                                                    defaultValue='class HelloWorld {
                                                    public static void main(String[] args) {
                                                        System.out.println("Hello world!");
                                                    }
                                                }'
                                                />
                                            </div>
                                            <div className="border-y-2 border-slate-600 border-solid mt-2 mx-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>

                                                <span className="px-3 font-bold py-2 dark:text-gray-50">
                                                    Вывод:
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 mt-5 border-t">
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
            <Footer />
        </>
    );
};

export default Simulator;
