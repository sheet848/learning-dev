const PostCard = ({ post }) => {
  return (
    <>
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
      <p className="text-gray-600 mt-2">{post.body}</p>
    </div>
    </>
  )
}

export default PostCard