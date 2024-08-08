import React, { useEffect, useState } from "react";
import Card1 from "../components/Card1";
import axios from "axios";
import "./home.css";

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abil");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        console.log("Data fetched:", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <h1>Welcome to my home page</h1>
      <h2>Count is :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me to Increment</button>
      <h2>my name is {name}</h2>
      <button onClick={() => setName(name + " joseph")}>Fullname</button> */}
      {/* <p>{JSON.stringify(data.name)}</p> */}
      {console.log(data)}
      {data.length ? (
        data.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <p>
              <strong>Company:</strong> {item.company.name}
            </p>
            <p>
              <strong>Catch Phrase:</strong> {item.company.catchPhrase}
            </p>
            <p>
              <strong>BS:</strong> {item.company.bs}
            </p>
            <p>
              <strong>Phone:</strong> {item.phone}
            </p>
            <p>
              <strong>Website:</strong> {item.website}
            </p>
          </div>
        ))
      ) : (
        <div style={{ fontSize: "3rem" }}>No data available</div>
      )}

      {/* <p>This is a paragraph of text</p>
      <Card1 name={myname} /> */}
    </div>
  );
}

export default Home;
