import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-coast-66678.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete = id => {
        const url = `https://tranquil-coast-66678.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('service deleted successfully!')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }
            })
    }

    return (
        <div>
            <h2 className="my-4">Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <div className="d-flex flex-column mb-3 align-items-center justify-content-center">
                        <h4>{service.name}</h4>
                        <div className="d-flex">
                            <button onClick={() => handleDelete(service._id)} className="py-0 px-2 mx-1">Delete</button>
                            <button onClick={() => handleDelete(service._id)} className="py-0 px-2 mx-1">Update</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default ManageService;