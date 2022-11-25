import React from "react";
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from "mui-datatables";
import "./App.css";

function App() {
  const columns: MUIDataTableColumnDef[] = ["Name", "Company", "City", "State"];

  const data: Array<object | number[] | string[]> = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options: MUIDataTableOptions = {
    filterType: "checkbox",
  };

  return (
    <div className='App'>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default App;
