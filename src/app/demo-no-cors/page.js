"use client";
import { useState, useEffect } from "react";
const DemoNoCors = () => {
  const [data, setData] = useState([]);
  const url = "https://mustbebuilt.co.uk/SHU/films-api/api-nocors.php";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <main>
      <div>
        <h1>No CORS Demo</h1>
        <p>Atempt to make cross domain call with no CORS.</p>
        <ul>
          {data.map((item) => (
            <li key={item.filmID}>{item.filmTitle}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default DemoNoCors;
