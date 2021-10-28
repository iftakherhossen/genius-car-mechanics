import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://tranquil-coast-66678.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    },[])

    return (
        <div>
            <h2>Details Of: {service.name}</h2>
            <p>{service.description}</p>
            <h4>{service.price}</h4>
            <img src={service.img} alt="banner"/>
        </div>
    );
};

export default Booking;