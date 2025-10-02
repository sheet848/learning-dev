import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify({ email, password }));
        alert("Signup successful! Please Login.");
        navigate("/login");
    }


    return (
        <>
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
                <form onSubmit={handleSignup} className="flex flex-col gap-4">
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