import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
// import { Modal } from 'antd';
import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { ExclamationCircleOutlined } from '@ant-design/icons';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const UserMenu = () => {
    const [isAuth, setIsAuth] = useState(false);
    // const { t, i18n } = useTranslation();
    // const dispatch = useDispatch();

    // const showDeleteConfirm = () => {
    //     confirm({
    //         title: t('description.part37'),
    //         icon: <ExclamationCircleOutlined />,
    //         okText: t('description.part38'),
    //         okType: 'danger',
    //         cancelText: t('description.part39'),

    //         onOk() {
    //             sessionStorage.clear();
    //             setIsAuth(false);
    //             dispatch({
    //                 type: 'TOKEN',
    //                 payload: '',
    //             })
    //         },
    //     });
    // };

    const userNavigation = [
        { name: 'Профиль', href: '#' },
        { name: <button > Выйти</button> },
    ];

    // useEffect(() => {
    //     const isAuth = sessionStorage.getItem('isAuth');
    //     setIsAuth(isAuth)
    // }, [sessionStorage.getItem('isAuth')]);

    return (
        <>
            <Menu as="div" className="relative ml-3">
                <div>
                    {/* {
                        isAuth ? */}
                    <div className='flex justify-center items-center'>
                        <Menu.Button className="flex max-w-xs items-center rounded-full dark:bg-gray-800  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src='https://happycoin.club/wp-content/uploads/2022/03/elona.jpg' alt="logo" />
                            <span className='p-2 dark:text-slate-200'>
                                Илона Маскова
                            </span>
                        </Menu.Button>
                    </div>
                    {/* :
                            <Link to="/auth" className="font-medium dark:text-slate-200 dark:hover:text-slate-400 text-indigo-600 hover:text-indigo-500">
                                {t('description.part4')}
                            </Link> */}
                    {/* } */}
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                    <>

                                        <span
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            {item.name}
                                        </span>

                                    </>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

export default UserMenu;