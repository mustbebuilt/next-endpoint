"use client";
import { useState, useEffect } from "react";
const DemoNoCors = () => {
  const [data, setData] = useState([]);
  const url = "https://mustbebuilt.co.uk/SHU/films-api/api.php";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <main>
      <div>
        <h1>CORS Demo</h1>
        <p>Atempt to make cross domain call where Endpoint has CORS enabled.</p>
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
