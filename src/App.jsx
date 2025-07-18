import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [deboundQuery, setDeboundQuery] = useState("");
  const [deboundSearchString, setDeboundSearchString] = useState("");
  const [throtleSearchString, setThrotleSearchString] = useState("");
  

  const handleChange = (event) => {
    setDeboundQuery(event.target.value);
  };

  useEffect(()=>{
    const deboundTimer = setTimeout(()=>{
    console.log("검색 쿼리:", deboundQuery);
    },1000);
    return () => clearTimeout(deboundTimer)
  },[deboundQuery])



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
          onChange={handleChange}
        />
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={handleChange}
        />
      </div>
      <p>{deboundSearchString}</p>
      <p>{throtleSearchString}</p>

    </div>
  );
}

export default App;
