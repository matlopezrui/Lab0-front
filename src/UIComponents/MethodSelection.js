import React from 'react'
import "./MethodSelection.css";
import { Link } from "react-router-dom";


function MethodSelection({type}) {
    return (
        <div className='Method-selection'>
            <Link to ={`/create/${type}`} style= {{ textDecoration: 'none' }}>
                <div className='Method-button'>
                    <h3>Create</h3>
                </div>
            </Link>

            <Link to ={`/read/${type}`} style= {{ textDecoration: 'none' }}>
                <div className='Method-button'>
                    <h3>Read</h3>
                </div>
            </Link>

            <Link to ={`/update/${type}`} style= {{ textDecoration: 'none' }}>
                <div className='Method-button'>
                    <h3>Update</h3>
                </div>
            </Link>
            
            <Link to ={`/delete/${type}`} style= {{ textDecoration: 'none' }}>
                <div className='Method-button'>
                    <h3>Delete</h3>
                </div>
            </Link>
        </div>
    )
}

export default MethodSelection;
