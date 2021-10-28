import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('service added successfully');
                    reset();
                };
            })
    }

    return (
        <div className="py-3">
            <h2>Add service here!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column my-4 align-items-center">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="mb-2 w-25 p-2" />
                <textarea {...register("description", { required: true, maxLength: 250 })} placeholder="Description" className="mb-2 w-25 p-2"></textarea>
                <input type="number" {...register("price", { min: 0 })} placeholder="Price" className="mb-2 w-25 p-2" />
                <input {...register("img")} placeholder="Image URL" className="mb-2 w-25 p-2" />
                <input type="submit" value="Add Service" className="mb-2" />
            </form>

        </div>
    );
};

export default AddService;