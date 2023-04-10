import { Dropdown, Space, Pagination, Input, Button, Drawer, Rate  } from 'antd';
import { DownOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const { Search } = Input;

const Content = () => {
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(3);
    const [data, setData] = useState([
        {
            task: 'Создать класс "Студент",',
            description: 'Создать класс "Студент", содержащий поля "имя", "возраст" и "средний балл". Написать метод, который будет выводить на экран информацию о студенте (имя, возраст, средний балл).',
            rate: 4,
            complexity: 'Легко',
            isDone: true
        },
        {
            task: 'Квадрат числа",',
            description: 'Написать программу, которая считывает с клавиатуры целое число и выводит на экран его квадрат. Использовать класс Scanner.',
            rate: 4,
            complexity: 'Легко',
            isDone: false
        },
        {
            task: 'Создать класс "Прямоугольник"',
            description: 'Создать класс "Прямоугольник", содержащий поля "ширина" и "высота". Написать метод, который будет возвращать площадь прямоугольника..',
            rate: 5,
            complexity: 'Сложно',
            isDone: true
        },
        {
            task: 'Программа для рассчета суммы',
            description: 'Написать программу, которая считывает с клавиатуры целые числа и выводит на экран их сумму. Использовать класс Scanner и цикл while.',
            rate: 3,
            complexity: 'Сложно',
            isDone: true
        },
        {
            task: 'Создать класс "Калькулятор"',
            description: 'Создать класс "Калькулятор", содержащий методы для выполнения математических операций (сложение, вычитание, умножение, деление). Написать программу, которая считывает с клавиатуры два числа и знак операции, а затем вызывает соответствующий метод класса "Калькулятор" для выполнения операции и выводит результат на экран.',
            rate: 4,
            complexity: 'Сложно',
            isDone: false
        },
        {
            task: 'Сортировка слов',
            description: 'Написать программу, которая считывает с клавиатуры строку, разбивает ее на отдельные слова, сортирует слова по алфавиту и выводит их на экран.',
            rate: 2,
            complexity: 'Легко',
            isDone: true
        },
        {
            task: 'Создать класс "Массив"',
            description: 'Создать класс "Массив", содержащий поле "массив" и методы для работы с ним (например, методы для добавления элемента, удаления элемента, получения элемента по индексу и т.д.). Написать программу, которая создает массив, добавляет в него элементы, удаляет элементы, выводит на экран элементы массива и т.д.',
            rate: 1,
            complexity: 'Легко',
            isDone: false
        },
        {
            task: 'Являится ли строка палидромом',
            description: 'Написать программу, которая считывает с клавиатуры строку, проверяет, является ли она палиндромом (т.е. читается одинаково слева направо и справа налево) и выводит на экран соответствующее сообщение.',
            rate: 4,
            complexity: 'Легко',
            isDone: true
        },
        {
            task: 'Создать класс "Счетчик"',
            description: 'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: 'Легко',
            isDone: false
        },
        {
            task: 'Реализация алгоритма Дейкстры',
            description: 'Задача заключается в написании программы, которая находит кратчайший путь между двумя вершинами графа с помощью алгоритма Дейкстры. Для этого нужно ввести матрицу смежности графа и выбрать начальную и конечную вершину',
            rate: 4,
            complexity: 'Очень сложно',
            isDone: false
        },
        {
            task: 'Реализация системы управления банком',
            description: 'Задача заключается в написании программы, которая позволяет управлять банковскими счетами и операциями с ними. Программа должна позволять открывать и закрывать счета, вносить и снимать деньги, проводить переводы и т.д. Также нужно предусмотреть механизм проверки подлинности пользователей и защиты от мошенничества.',
            rate: 4,
            complexity: 'Очень сложно',
            isDone: false
        },
    ]);

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const tasks = data.map(el => {
        return (
            <div
                className='flex flex-col lg:flex-row items-center justify-between border-y cursor-pointer border-slate-200 py-3 px-4'
                onClick={() => {setDescription(el.description); showDrawer()}}>
                <div className='flex w-full lg:w-10/12 lg:items-center'>
                    <div className='w-8/12'>{el.task}</div>
                    <div className='w-2/12'>{el.complexity}</div>
                    <Rate className='w-2/12' onChange={setValue} value={el.rate} />
                </div>
                <div className="flex justify-end">{el.isDone ? <CheckCircleTwoTone /> : <div className='w-2/12'></div>}</div>
            </div>
        )
    });

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
                    По рейтигу
                </span>
            ),
        },
    ];


    return (
        <div className='flex justify-between z-0 relative'>
            <div className='w-full lg:w-8/12'>
               <div className='flex justify-between items-center px-5'>
               <div>
                    <Search
                        placeholder="Поиск"
                        // onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />
                </div>
                <div className='py-3 px-3 flex justify-end'>
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
               </div>
                <div className="w-full">
                    {tasks}
                    <div className="flex w-full justify-center pt-2">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
            <div className='w-4/12 mt-10 hidden lg:block'>
                <h2 className='text-center font-bold text-3xl'>Описание</h2>
                <div className='p-5'>
                    {description}
                   
                </div>
                <div>
                </div>
            </div>
            <div className='block lg:hidden z-10'>
                    <Drawer
                        title='Описание'
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        open={open}
                        getContainer={false}
                        extra={
                              <Button onClick={onClose}>Cancel</Button>
                          }
                    >
                        <p>{description}</p>
                    </Drawer>
                </div>
        </div>
    )
}

export default Content;