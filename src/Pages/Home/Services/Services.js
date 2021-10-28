import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://tranquil-coast-66678.herokuapp.com/services/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <Container>
                <h2 className="text-primary mt-5 mb-4">Our services</h2>
                <div className="service-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;