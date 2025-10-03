# What is Throttling?

Throttling means limiting a function to run at most once every X milliseconds, no matter how many times the event is triggered.

## 👉 Example use case:

Scroll events — firing too many events can crash performance. With throttling, you handle them at most once every 200ms.

### Analogy:
Think of a security guard letting only one person through every 2 seconds, even if there’s a big crowd pushing.

### React Example: Throttling a Scroll Event

``` jsx
import { useEffect, useState } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

export default function ThrottledScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
      console.log("Scroll position:", window.scrollY);
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] p-4">
      <p>Scroll down to see throttling in action</p>
      <p className="fixed bottom-4 left-4 bg-gray-200 p-2 rounded">
        Scroll Y: {scrollY}
      </p>
    </div>
  );
}
```
✅ Even if you scroll rapidly, the function executes at most once every 300ms.
