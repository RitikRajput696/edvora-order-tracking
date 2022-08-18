import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'product_id', headerName: 'id', width: 300 },
  { field: 'name', headerName: 'Item Name', width: 300 },
  { field: 'stock', headerName: 'stock left', width: 300 },
  { field: 'selling_price', headerName: 'Product Price', width: 300 },
];

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/products')
      .then((response) => response.json())
      .then((json) => setTableData(json));
  }, []);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        getRowId={(tableData) => tableData.product_id}
        loading={!tableData.length}
        sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          my: 5,
          mx: 'auto',
          maxHeight: 400,
          maxWidth: 1280,
        }}
      />
    </div>
  );
};

export default DataTable;
