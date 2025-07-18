import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [throttleQuery, setThrottleQuery] = useState("");
  const [deboundSearchString, setDeboundSearchString] = useState("");
  const [throttleSearchString, setThrottleSearchString] = useState("");

  const throttleTime = useRef(new Date());

  const handleChangeDebound = (event) => {
    setQuery(event.target.value);
  };
  const handleChangeThrottle = (event) => {
    setThrottleQuery(event.target.value);
  };

  useEffect(()=>{
    const deboundTimer = setTimeout(()=>{
    console.log("검색 쿼리:", query);
    setDeboundSearchString(query)
    },1000);
    return () => clearTimeout(deboundTimer);
  },[query])

  useEffect(()=>{
    const newTime =new Date();

    const throttleTimer = setTimeout(()=>{
      console.log("검색 쿼리:", throttleQuery);
      setThrottleSearchString(throttleQuery);
      throttleTime.current = new Date();
    }, 1000 - (newTime - throttleTime.current))

    return () => clearTimeout(throttleTimer);
  },[throttleQuery])

  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>
      <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          onChange={handleChangeDebound}
        />
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={handleChangeThrottle}
        />
      </div>
      <p>{deboundSearchString}</p>
      <p>{throttleSearchString}</p>

    </div>
  );
}

export default App;
