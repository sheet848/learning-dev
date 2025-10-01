const UserCard = ({ user }) => {
  return (
    <>
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500">{user.phone}</p>
      <p className="text-gray-400">{user.website}</p>
    </div>
    </>
  )
}

export default UserCard