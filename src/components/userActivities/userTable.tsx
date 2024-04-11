import React from "react"
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';

const UserTable = ({ data }: any) => {

  const dataSource = data?.map((res: any, index: number) => {
    return {
      id: index + 1,
      name: res?.name,
    }
  })


  const columns: GridColDef[] = [
    {
      field: 'name', headerName: 'User List', flex: 1, disableColumnMenu: true, headerClassName: 'tableHeader', minWidth: 200
    },
   
  
  ];
  return (
    <div>
       <DataGrid
            className="adminTable"
            rows={dataSource?.length > 0 ? dataSource : []}
            rowHeight={50}
            columns={columns}
            slots={{
              pagination: null,
            }}
          />
    </div>
  )
};

export default UserTable;
