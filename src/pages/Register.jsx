import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {

    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);

    console.log(name, photoUrl, email, password, terms);


    const handleRegister = (e) => {
        e.preventDefault();
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Register your account
                </h2>

                {/* Divider */}
                <hr className="mb-6 border-gray-200" />

                {/* Form */}
                <form
                    onClick={handleRegister}
                    className="space-y-4" >

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full bg-base-200"
                            name="name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full bg-base-200"
                            name="photoUrl"
                            value={photoUrl}
                            required
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full bg-base-200"
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            name="terms"
                            // value={terms}
                            required
                            onChange={() => setTerms(!terms)}
                        />
                        <span className="text-sm">
                            Accept Term & Conditions
                        </span>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-neutral text-white hover:bg-neutral-focus"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm mt-6">
                    Already Have An Account?
                    <Link
                        to="/auth/login"
                        className="ml-1 text-red-500 font-semibold"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;
