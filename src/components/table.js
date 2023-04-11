import React,{ Component } from "react";
import ReactTable from "react-table";
//import "react-table/react-table.css"

class Table extends React.Component{

render() {
const data = [{name:'Aryan',age:26},{name : 'shamita',age:22},{name:'makkhi',age:24}]

const columns = [{Header:'Name', accessor:'name'},{Header: 'Age', accessor:'age'}]

return(
    <div>
        <ReactTable
        data ={data}
        columns={columns}
        defaultPageSize = {2}
        pageSizeOptions = {[2,4,6]}
        />
    </div>
)

}
}

export default Table;