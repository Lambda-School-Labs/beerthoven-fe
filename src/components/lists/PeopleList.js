import React from 'react';
import { Table, Button } from 'antd';

const PeopleList = ({ list, onDelete, onEdit }) => {

    // define the columns of the table
    const columns = [
        {
            title: 'First',
            dataIndex: 'first_name'
        },
        {
            title: 'Last',
            dataIndex: 'last_name'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'City',
            dataIndex: 'city'
        },
        {
            title: 'Zip',
            dataIndex: 'zip'
        },
        // actions/buttons
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => (
                <>
                    <Button type="link">Edit</Button>
                    <Button type="link">Delete</Button>
                </>
            )
        }
    ];

    // define the data of the table
    const data = list;

    // define the table
    return (
        <Table
            columns={columns}
            dataSource={data}
        />
    );

};

export default PeopleList;
