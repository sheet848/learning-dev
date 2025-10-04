// 1. where we will get the data from -> dummy data or API
// 2. Focus show and hide
// 3. improving performance -> debouncing
// 4. backtracking also calls for API repeating -> solution: cache results
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {

    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const response = await data.json();
    setResults(response?.recipes);
    setCache((prev) => ({...prev, [input]: response?.recipes }));
  }

  // useCallback
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <>
      <div className="App">
        <h1>Autocomplte Search Bar</h1>
        <div>
          <input type="text" className='search-input'
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
          />
          {
            showResults && (
              <div className='results-container'>
                {
                  results.map((r) => ((
                    <span className='result' key={r.id}>{r.name}</span>
                  )))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App