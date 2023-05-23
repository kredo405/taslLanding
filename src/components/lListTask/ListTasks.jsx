import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTask } from "../../store/slices/taskSlice";

const ListTasks = ({ setDescription, showDrawer }) => {
    const dispatch = useDispatch();

    const [data, setData] = useState([
        {
            id: 1,
            task: 'Создать класс "Студент",',
            description:
                'Создать класс "Студент", содержащий поля "имя", "возраст" и "средний балл". Написать метод, который будет выводить на экран информацию о студенте (имя, возраст, средний балл).',
            rate: 4,
            complexity: "Легко",
            isDone: true,
        },
        {
            id: 1,
            task: 'Квадрат числа",',
            description:
                "Написать программу, которая считывает с клавиатуры целое число и выводит на экран его квадрат. Использовать класс Scanner.",
            rate: 4,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Прямоугольник"',
            description:
                'Создать класс "Прямоугольник", содержащий поля "ширина" и "высота". Написать метод, который будет возвращать площадь прямоугольника..',
            rate: 5,
            complexity: "Сложно",
            isDone: true,
        },
        {
            id: 1,
            task: "Программа для рассчета суммы",
            description:
                "Написать программу, которая считывает с клавиатуры целые числа и выводит на экран их сумму. Использовать класс Scanner и цикл while.",
            rate: 3,
            complexity: "Сложно",
            isDone: true,
        },
        {
            id: 1,
            task: 'Создать класс "Калькулятор"',
            description:
                'Создать класс "Калькулятор", содержащий методы для выполнения математических операций (сложение, вычитание, умножение, деление). Написать программу, которая считывает с клавиатуры два числа и знак операции, а затем вызывает соответствующий метод класса "Калькулятор" для выполнения операции и выводит результат на экран.',
            rate: 4,
            complexity: "Сложно",
            isDone: false,
        },
        {
            id: 1,
            task: "Сортировка слов",
            description:
                "Написать программу, которая считывает с клавиатуры строку, разбивает ее на отдельные слова, сортирует слова по алфавиту и выводит их на экран.",
            rate: 2,
            complexity: "Легко",
            isDone: true,
        },
        {
            id: 1,
            task: 'Создать класс "Массив"',
            description:
                'Создать класс "Массив", содержащий поле "массив" и методы для работы с ним (например, методы для добавления элемента, удаления элемента, получения элемента по индексу и т.д.). Написать программу, которая создает массив, добавляет в него элементы, удаляет элементы, выводит на экран элементы массива и т.д.',
            rate: 1,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: "Являится ли строка палидромом",
            description:
                "Написать программу, которая считывает с клавиатуры строку, проверяет, является ли она палиндромом (т.е. читается одинаково слева направо и справа налево) и выводит на экран соответствующее сообщение.",
            rate: 4,
            complexity: "Легко",
            isDone: true,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
        {
            id: 1,
            task: 'Создать класс "Счетчик"',
            description:
                'Создать класс "Счетчик", содержащий поле "значение" и методы для увеличения и уменьшения значения счетчика. Написать программу, которая создает экземпляр класса "Счетчик", устанавливает его значение, увеличивает и уменьшает значение и выводит его на экран.',
            rate: 5,
            complexity: "Легко",
            isDone: false,
        },
    ]);

    const [areAllChecked, setAllChecked] = useState(false);
    let [checkboxItems, setCheckboxItem] = useState({});

    // set or unset all checkbox items
    const handleCheckboxItems = () => {
        setAllChecked(!areAllChecked);
        data.forEach((item, idx) => {
            checkboxItems[`checkbox${idx}`] = !areAllChecked;
            setCheckboxItem({ ...checkboxItems });
        });
    };

    // Update checked value
    const handleCheckboxChange = (e, idx) => {
        setAllChecked(false);
        setCheckboxItem({
            ...checkboxItems,
            [`checkbox${idx}`]: e.target.checked,
        });
    };

    useEffect(() => {
        // Set properties with false value
        data.forEach((item, idx) => {
            checkboxItems[`checkbox${idx}`] = false;
            setCheckboxItem({ ...checkboxItems });
        });
    }, []);

    useEffect(() => {
        // Check if all checkbox items are checked and update setAllChecked state
        const checkboxItemsVal = Object.values(checkboxItems);
        const checkedItems = checkboxItemsVal.filter((item) => item == true);
        if (checkedItems.length == data.length) setAllChecked(true);
    }, [checkboxItems]);

    return (
        <div className="w-full mx-auto px-4  overflow-y-scroll">
            <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto dark:border-slate-700">
                <table className="w-full h-full table-auto text-sm text-left">
                    <thead className="dark:text-gray-50 text-gray-600 font-medium border-b dark:border-slate-700">
                        <tr>
                            <th className="py-3 px-6 flex items-center gap-x-4">
                                Задача
                            </th>
                            <th className="py-3 px-6">Сложность</th>
                            <th className="py-3 px-2">Лайки</th>
                            <th className="py-3 px-2">Дизлайки</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {data.map((item, idx) => (
                            <tr
                                key={idx}
                                className="odd:bg-gray-50 dark:bg-slate-800 even:bg-white cursor-pointer"
                                onClick={() => {
                                    setDescription(item.description);
                                    showDrawer();
                                    dispatch(
                                        setTask({
                                            id: item.id,
                                            task: item.task,
                                            description: item.description,
                                            rate: item.rate,
                                            complexity: item.complexity,
                                            isDone: item.isDone,
                                        })
                                    );
                                }}
                            >
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4 dark:text-gray-50">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${idx}`}
                                            name={`checkbox-${idx}`}
                                            className="checkbox-item peer hidden"
                                            checked={
                                                checkboxItems[`checkbox${idx}`]
                                            }
                                            onChange={(e) =>
                                                handleCheckboxChange(e, idx)
                                            }
                                        />
                                        <label
                                            htmlFor={`checkbox-${idx}`}
                                            className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                        ></label>
                                    </div>
                                    {item.task}
                                </td>
                                <td className="px-6 dark:text-gray-50 py-4 whitespace-nowrap">
                                    {item.complexity}
                                </td>
                                <td className="px-2 dark:text-gray-50 py-4 whitespace-nowrap">
                                    <div className="flex">
                                        {item.rate}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-cyan-500 ml-2 w-6 h-6"
                                        >
                                            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                        </svg>
                                    </div>
                                </td>
                                <td className="px-2 dark:text-gray-50 py-4 whitespace-nowrap">
                                    <div className="flex">
                                        {item.rate}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-orange-400 ml-2 w-6 h-6"
                                        >
                                            <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTasks;
