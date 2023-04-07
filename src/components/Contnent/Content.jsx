import { Avatar, Divider, List, Skeleton, Dropdown, Space, Button, Drawer, theme } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Content = () => {
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [data, setData] = useState([
        {
            task: 'Создать класс "Студент",',
            description: 'Создать класс "Студент", содержащий поля "имя", "возраст" и "средний балл". Написать метод, который будет выводить на экран информацию о студенте (имя, возраст, средний балл).'
        },
        {
            task: 'Квадрат числа",',
            description: 'Написать программу, которая считывает с клавиатуры целое число и выводит на экран его квадрат. Использовать класс Scanner.'
        },
        {
            task: 'Создать класс "Прямоугольник"',
            description: 'Создать класс "Прямоугольник", содержащий поля "ширина" и "высота". Написать метод, который будет возвращать площадь прямоугольника..'
        },
        {
            task: 'Программа для рассчета суммы',
            description: 'Написать программу, которая считывает с клавиатуры целые числа и выводит на экран их сумму. Использовать класс Scanner и цикл while.'
        },
        {
            task: 'Создать класс "Калькулятор"',
            description: 'Создать класс "Калькулятор", содержащий методы для выполнения математических операций (сложение, вычитание, умножение, деление). Написать программу, которая считывает с клавиатуры два числа и знак операции, а затем вызывает соответствующий метод класса "Калькулятор" для выполнения операции и выводит результат на экран.'
        },
        {
            task: 'Сортировка слов',
            description: 'Написать программу, которая считывает с клавиатуры строку, разбивает ее на отдельные слова, сортирует слова по алфавиту и выводит их на экран.'
        },
        {
            task: 'Создать класс "Массив"',
            description: 'Создать класс "Массив", содержащий поле "массив" и методы для работы с ним (например, методы для добавления элемента, удаления элемента, получения элемента по индексу и т.д.). Написать программу, которая создает массив, добавляет в него элементы, удаляет элементы, выводит на экран элементы массива и т.д.'
        },
        {
            task: 'Являится ли строка палидромом',
            description: 'Написать программу, которая считывает с клавиатуры строку, проверяет, является ли она палиндромом (т.е. читается одинаково слева направо и справа налево) и выводит на экран соответствующее сообщение.'
        },
        {
            task: 'Создать класс "Счетчик"',
            description: 'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.'
        },
    ]);

    const { token } = theme.useToken();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const containerStyle = {
        position: 'relative',
        height: 200,
        padding: 48,
        overflow: 'hidden',
        textAlign: 'center',
        background: token.colorFillAlter,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    const items = [
        {
            key: '1',
            label: (
                <span target="_blank" rel="noopener noreferrer" >
                    По сложности
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <span target="_blank" rel="noopener noreferrer">
                    По Возврастанию
                </span>
            ),
        },
        {
            key: '3',
            label: (
                <span target="_blank" rel="noopener noreferrer">
                    По Убыванию
                </span>
            ),
        },
    ];

    // const loadMoreData = () => {
    //     if (loading) {
    //         return;
    //     }
    //     setLoading(true);
    //     fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    //         .then((res) => res.json())
    //         .then((body) => {
    //             setData([...data, ...body.results]);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             setLoading(false);
    //         });
    // };
    // useEffect(() => {
    //     loadMoreData();
    // }, []);

    return (
        <div className='flex justify-between z-0'>
            <div className='w-full lg:w-6/12'>
                <div className='py-3 px-3 w-full flex justify-end'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Сортировка
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div
                    id="scrollableDiv"
                    style={{
                        height: 500,
                        overflow: 'auto',
                        padding: '0 16px',
                        border: '1px solid rgba(140, 140, 140, 0.35)',
                    }}
                >
                    {/* <InfiniteScroll
                        dataLength={data.length}
                        next={loadMoreData}
                        hasMore={data.length < 50}
                        loader={
                            <Skeleton
                                avatar
                                paragraph={{
                                    rows: 1,
                                }}
                                active
                            />
                        }
                        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                        scrollableTarget="scrollableDiv"
                    > */}
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                key={item.task}
                                onClick={() => { setDescription(item.description); showDrawer(); }} className='font-sans text-lg font-normal'
                            >
                                <p className='cursor-pointer'>{item.task}</p>
                            </List.Item>
                        )}
                    />
                    {/* </InfiniteScroll> */}
                </div>
            </div>
            <div className='w-6/12 mt-10 hidden lg:block'>
                <h2 className='text-center font-bold text-3xl'>Описание</h2>
                <div className='p-5'>
                    {description}
                </div>
                <div>
                </div>
            </div>
            <div className='block lg:hidden'>
                    <Drawer
                        title="Описание"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        open={open}
                        getContainer={false}
                    >
                        <p>{description}</p>
                    </Drawer>
                </div>
        </div>
    )
}

export default Content;