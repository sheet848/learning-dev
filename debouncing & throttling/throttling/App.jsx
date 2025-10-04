// 1. where we will get the data from -> dummy data or API
// 2. decide threshold page for show
// 3. write the scroll handle function
// 4. implement the throttle function on the scrollhandle function
import React, { useEffect, useState } from 'react'
import './App.css'

//throttle function
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  }
}

const App = () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (pageNumber) => {
    //const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`);
    //const data = await response.json();
    //setPosts((prev) => [...prev, ...data]);

    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
      );
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false); // no more data to load
        return;
      }

      setPosts((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts(page);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      //if near bottom, load next page
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setPage((prev) => prev + 1);
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // Fetch more when page changes
  useEffect(() => {
    if (page > 1) {
      fetchPosts(page);
    }
  }, [page]);

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Infinite Scroll Feed</h1>

        <ul className="space-y-3">
          {
            posts.map((post) => (
              <li key={post.id} className="p-4 bg-gray-100 rounded shadow">
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-700">{post.body}</p>
              </li>
            ))
          }
        </ul>

        {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
      </div>
    </>
  )
}

export default App