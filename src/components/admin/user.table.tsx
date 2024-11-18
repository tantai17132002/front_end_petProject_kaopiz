'use client'
import { Button, Table } from "antd"

const UserTable = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Tai',
            age: 20,
            address: 'Quảng Trị',
        },
        {
            key: '2',
            name: 'Minh',
            age: 20,
            address: 'Hue',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <>
            <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20
            }}>
                <span>Manager Users</span>
                <Button>Create User</Button>
            </div>
            <Table
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </>
    )
}

export default UserTable;