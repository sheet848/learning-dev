import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("auth", true);
            navigate("/dashboard");
        } else {
            setErrors({ general: "Invalid credentials!" });
        }
    }

    return (
        <>
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                       
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
                </form>
                <p className="mt-4 text-sm text-center">Don't have an Account? {" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
                </p>
            </div>
        </>
    )
}

export default Login