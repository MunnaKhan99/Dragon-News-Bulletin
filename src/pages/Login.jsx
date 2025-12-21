import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { loginUser } = use(AuthContext);


    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({ email, password });

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                alert("Successfully login");
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Login your account
                </h2>

                {/* Divider */}
                <hr className="mb-6 border-gray-200" />

                {/* Form */}
                <form className="space-y-4"
                    onSubmit={handleLogin}
                >

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full bg-base-200"
                            name="email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-base-200"
                            name="password"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-neutral text-white hover:bg-neutral-focus"
                    >
                        Login
                    </button>

                    {
                        errorMessage && <p className="text-red-400 text-xs">{errorMessage}</p>
                    }
                </form>

                {/* Footer */}
                <p className="text-center text-sm mt-6">
                    Don’t Have An Account?
                    <Link
                        to="/auth/register"
                        className="ml-1 text-red-500 font-semibold"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
