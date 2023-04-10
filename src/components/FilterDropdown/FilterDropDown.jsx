import { DownOutlined, FilterTwoTone } from '@ant-design/icons';
import { Dropdown, Space, Checkbox } from 'antd';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const items = [
    {
        key: '1',
        label: (
            <Checkbox onChange={onChange}>Сложные</Checkbox>
        ),
    },
    {
        key: '2',
        label: (
            <Checkbox onChange={onChange}>Легкие</Checkbox>
        ),
    },
    {
        key: '3',
        label: (
            <Checkbox onChange={onChange}>Очень сложные</Checkbox>
        ),
    },
];



const FilterDropdown = () => (

    <Dropdown
        menu={{
            items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                Фильтр
                <FilterTwoTone />
            </Space>
        </a>
    </Dropdown>
);
export default FilterDropdown;