import loginImg from "../../assets/images/login/login.svg"


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={loginImg} alt="" className="w-11/12"/>
                    </div>
                    <div className="card shrink-0 w-1/2 max-w-lg shadow-2xl bg-base-100">
                        <form onClick={handleLogin} className="card-body">
                            <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-medium">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;