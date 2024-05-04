import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="rounded-lg shadow-2xl w-10/12 object-cover" />
                    <img src={parts} className="rounded-lg shadow-2xl absolute -bottom-12 right-8  w-1/2 object-cover border-gray-400 border-8" />
                </div>
                <div className="lg:w-1/2 p-4">
                    <h3 className="text-sm text-red-600 font-bold mb-5">About Us</h3>
                    <h6 className="text-5xl font-bold max-w-96 mb-7">We are qualified & of experience in this field</h6>
                    <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="mb-7">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-error text-white">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;