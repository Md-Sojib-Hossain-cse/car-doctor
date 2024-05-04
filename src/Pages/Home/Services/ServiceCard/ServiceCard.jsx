import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card border bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-red-600 font-medium">Price : ${price}</p>
                    <button className="btn btn-ghost">
                        <FaArrowRight className="text-red-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service : PropTypes.object,
}

export default ServiceCard;