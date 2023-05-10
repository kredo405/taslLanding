import Language_btn from '../Language_btn/Language_btn';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { setThemeValue } from '../../store/slices/themeSlice';
import { setValue } from '../../store/slices/themeSlice';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import UserMenu from '../UserMenu/UserMenu';
import logo from '../../img/logo1.png';

const { confirm } = Modal;
const navigation = [
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Nav = () => {
    const [theme, setTheme] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const onChange = (e) => {
        console.log(e.target.checked)
        setTheme(e.target.checked);
        if (e.target.checked) {
            dispatch(setThemeValue('dark'))
            dispatch(setValue(true))
        } else {
            dispatch(setThemeValue(''))
            dispatch(setValue(false))
        }
    };

    useEffect(() => {
        if (theme) {
            const body = document.querySelector('body');
            body.style.backgroundColor = 'rgb(30 41 59)';
        } else {
            const body = document.querySelector('body');
            body.style.backgroundColor = 'rgb(255 255 255)';
        }
    }, [theme])

    useEffect(() => {
        const isAuth = sessionStorage.getItem('isAuth');
        setIsAuth(isAuth)
    }, [sessionStorage.getItem('isAuth')]);

    return (
   
        <Disclosure as="nav" className="dark:bg-gray-800 bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto lg:max-w-none max-w-7xl px-2 lg:px-3">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-start ml-10 sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto "
                                        src={logo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-100 text-black dark:bg-gray-800 dark:text-white' : 'dark:text-gray-50 text-gray-900 dark:hover:bg-gray-900 hover:bg-gray-200 hover:text-black',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                <div className="flex justify-between w-full">
                                    <div className='w-full flex justify-end items-center'>
                                        <div className="flex items-center justify-center mb-2">
                                            <Language_btn />
                                        </div>
                                        <div className="px-2 flex justify-center">
                                            <ThemeSwitcher sx={{ m: 1 }} checked={state.value} onChange={(e) => onChange(e)} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <UserMenu />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    )
}

export default Nav;