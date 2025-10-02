import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    }

  return (
    <>
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard 🎉</h2>
      <p className="mb-6">You are successfully logged in!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
    </>
  )
}

export default Dashboard