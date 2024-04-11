import { Table } from "antd";
import React from "react"

const UserTable = ({ data }: any) => {

  const dataSource = data?.map((res: any, index: number) => {
    return {
      key: index + 1,
      name: res?.name,
    }
  })

  const columns = [
    {
      title: 'User List',
      dataIndex: 'name',
      key: 'name',
    },
  ];
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  )
};

export default UserTable;
