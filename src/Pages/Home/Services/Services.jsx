import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {

    const [services , setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    } ,[])

    return (
        <div className="mb-24">
            <div className="space-y-5">
                <h3 className="text-sm font-bold text-red-600 text-center">Our Services</h3>
                <h4 className="text-5xl font-bold text-center">Our Service Area</h4>
                <p className="w-11/12 max-w-[712px] text-center mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;