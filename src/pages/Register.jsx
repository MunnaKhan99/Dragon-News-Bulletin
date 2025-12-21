import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        // console.log({ name, photoUrl, email, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoUrl: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoUrl: photoUrl });
                        navigate("/")
                    }).catch((error) => {
                        console.log(error);
                        setUser(user);
                    });


                // console.log(result.user);
            })
            .catch(error => {
                // console.log(error.message);
                alert(error.message);
            })
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
                    onSubmit={handleRegister}
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
                            required
                            name="name"
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
                            required
                            name="photoUrl"
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
                            required
                            name="email"
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
                            required
                            name="password"
                        />
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
