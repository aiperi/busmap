import React, {useMemo, useRef} from 'react';
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns'
import './tableStyle.css';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {Grid} from "@mui/material";

const TableComponent = () => {
    const tableRef = useRef(null);
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns,
        data: data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance


    return (
        <div>
            <Grid container justifyContent={"end"}>
            <ReactHTMLTableToExcel
                id="report"
                className="download-xls"
                table="report-table"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Скачать XLS"/>
            </Grid>

            <table {...getTableProps()} id="report-table">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>

                {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    }
                )}

                </tbody>
            </table>
        </div>

    );
};

export default TableComponent;