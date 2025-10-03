# What is Debouncing?

Debouncing means delaying the execution of a function until after a certain time has passed without the event being triggered again.

## 👉 Example use case:

A search bar where you don’t want to call an API on every keystroke, but only after the user stops typing for ~500ms.

### Analogy:
You’re writing a WhatsApp message. Notifications only go out after you pause typing for a bit.

### React Example: Debouncing a Search Input
```jsx
import { useState, useEffect } from "react";

export default function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Update debouncedQuery after 500ms of no typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler); // cleanup on re-render
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API Call with:", debouncedQuery);
      // fetch(`https://api.example.com/search?q=${debouncedQuery}`)
    }
  }, [debouncedQuery]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="mt-2">Searching for: {debouncedQuery}</p>
    </div>
  );
}
```

✅ Typing “hello” quickly will trigger only one API call, not five.
