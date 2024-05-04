import { useEffect } from "react";
import { useState } from "react";

const Services = () => {

    const [services , setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    } ,[])

    console.log(services)

    return (
        <div className="mb-24">
            <div className="space-y-5">
                <h3 className="text-sm font-bold text-red-600 text-center">Our Services</h3>
                <h4 className="text-5xl font-bold text-center">Our Service Area</h4>
                <p className="w-11/12 max-w-[712px] text-center mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
        </div>
    );
};

export default Services;