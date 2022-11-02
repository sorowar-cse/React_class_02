import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    // const [name,setName]=useState('')
    // useEffect(()=>{},[])
    // fetch()
    // .then(res=>res.json())
    // .then
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/nazim725/Services/posts')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            {
                services.map(service=><Service service={service}></Service>)
            }
        </div>
    );

};

export default Services;