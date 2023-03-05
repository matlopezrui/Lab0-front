import React, { useState, useEffect } from 'react'
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from '../TableComponents/MOCK_DATA.json';
import { COLUMNS }  from '../TableComponents/columns.js';
import MOCK_DATA_HOMES from '../TableComponents/MOCK_DATA_HOMES.json';
import { HOMECOLUMNS }  from '../TableComponents/homeColumns.js';
import { getAllPersonas } from '../services/PersonaServices';
import './ReadView.css'

function ReadView({classType}) {
    const [ personas, setPersonas ] = useState([]);
    let headers;
    let rowData;

    if (classType === "persona") {
        headers = COLUMNS;
        rowData = personas;
    } else if (classType === "vivienda") {
        headers = HOMECOLUMNS;
        rowData = MOCK_DATA_HOMES;
    } else {
        
    }

    const tableInstance = useTable(
        {
            columns: headers,
            data: rowData
        },
        usePagination
    )

    const { 
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow 
    } = tableInstance;
    
    const { pageIndex } = state;
    
    useEffect(() => {
        getAllPersonas().then((personasData) => setPersonas(personasData))
     }, []);

    if (!personas) return <div>Cargando...</div>

    function logPersonas(){
        console.log(personas)
    }

    return (
        <>
        {logPersonas()}
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        
        <div className='pagination'>
            
            <span className="pagination-text">
                Página{' '}
                <strong>
                    {pageIndex + 1} de {pageOptions.length}
                </strong>
            </span>

            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="pagination-button">Anterior</button>
            <button onClick={() => nextPage()} disabled={!canNextPage} className="pagination-button">Siguiente</button>
        </div>

        </>
    )
}

export default ReadView;