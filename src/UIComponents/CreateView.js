import React from 'react';
import { useForm } from "react-hook-form";
import { COLUMNS } from '../TableComponents/columns';
import { HOMECOLUMNS } from '../TableComponents/homeColumns';
import './CreateView.css';

export default function CreateView({classType}) {

    let fields;
    if (classType === "persona") {
        fields = COLUMNS;
    } else if (classType === "vivienda") {
        fields = HOMECOLUMNS;
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(column => {
                return <div className='Create-form'>
                    {column.Header !== "Id" && <label>{column.Header}</label>}
                    {column.Header !== "Id" && <input type="text" {...register(`${column.accessor}`, {
                        required: true,
                    })} />}
                    
                </div>
            })}
            <input className="Submit-button" type="submit" value="Añadir Persona"/>
        </form>
    )
}
