import React from 'react';
import { useForm } from "react-hook-form";
import { COLUMNS } from '../TableComponents/columns';
import { HOMECOLUMNS } from '../TableComponents/homeColumns';
import './CreateView.css';

export default function UpdateView({classType}) {

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
                    <label>{column.Header}</label>
                    <input type="text" {...register(`${column.accessor}`, {
                        required: true,
                    })} />
                </div>
            })}
            <input className="Submit-button" type="submit" value="Actualizar Persona"/>
        </form>
    )
}
