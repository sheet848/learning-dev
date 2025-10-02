import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if(storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("auth", true);
            navigate("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    }

  return (
    <>
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input type="email" placeholder="Email" required 
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password" required 
            className="border p-2 rounded" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
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