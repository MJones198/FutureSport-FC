import React from 'react'
import SeasonData from "../../assets/table data/SeasonStats.JSON"
import {useTable} from "react-table"

export default function SeasonStats() {
    const data = React.useMemo(() => SeasonData, []);
    const column = React.useMemo(() => [ 
        {Header: "Games",
        accessor: "Games",},
        {Header: "Wins",
        accessor: "Wins",},
        {Header: "Losses",
        accessor: "Losses",},
        {Header: "Draws",
        accessor:"Draws",},
        {Header: "Points",
        accessor: "Points",}
    ], [])

    const {getTableProps, getTableBodyProps, headerGroup, rows, prepareRow} = 
    useTable({column,data});

    
  
  
    return ( 
    <div className='table'>
        <table {...getTableProps()}>
            <thead>
                {headerGroup.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) =>(
                        <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                    ))}
                    </tr>

                ))}
            </thead>

            <tbdoy {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return(
                        <tr{...row.getRowProps()}>
                        {row.cells.amp((cell) => (
                            <td {...cell.getCellProps()}> {cell.render("Cell")}

                            </td>
                        ))}

                        </tr>
                    )
                })}


            </tbdoy>
        </table>

    </div>
)
}
