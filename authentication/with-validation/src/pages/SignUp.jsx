import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        // password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        } else if (!/\d/.test(password)) {
            newErrors.password = "Password must contain at least one number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSignup = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        localStorage.setItem("user", JSON.stringify({ email, password }));
        alert("Signup successful! Please Login.");
        navigate("/login");
    }


    return (
        <>
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
                <form onSubmit={handleSignup} className="flex flex-col gap-4">
                    <div>
                        <input type="email" placeholder="Email" required
                            className={`border p-2 rounded w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input type="password" placeholder="Password" required
                            className={`border p-2 rounded w-full ${errors.password ? "border-red-500" : "border-gray-300"}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>
                    
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Signup</button>
                </form>
                <p className="mt-4 text-sm text-center">Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </>
    )
}

export default SignUp