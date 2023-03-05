import React from 'react'
import { useForm } from 'react-hook-form';
import './DeleteView.css';

export default function DeleteView() {
    var personName = "";
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        personName = "Mateo";
        console.log(personName)
    }

    return (
        <div className='Delete-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='SearchId-form'>
                        <label>ID</label>
                        <input type="text" {...register(`ID`, {
                            required: true
                        })} />
                </div>
                <input className="Submit-button" type="submit" value="Buscar"/>
            </form>
        </div>
    )
}
