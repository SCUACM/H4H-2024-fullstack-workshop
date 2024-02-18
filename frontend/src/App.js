import {useState} from 'react';

function App() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState({});

  const set = function() {
    fetch("http://localhost:3000/set", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: key,
        value: value
      })
    }).then(response => response.json()).then(data => alert(data.message));
  }

  const get = function() {
    fetch("http://localhost:3000/get?key="+key)
    .then(response => response.json()).then(data => setData(data));
  }

  return (
    <div className="App">
      <p>Key:</p>
      <input type="text" onChange={element => setKey(element.target.value)} />
      <p>Value: </p>
      <input type="text" onChange={element => setValue(element.target.value)}/>
      <br></br><br></br>
      <button onClick={set}>Set</button>
      <button onClick={get}>Get</button>
      <div>
        <h2>Data</h2>
        <p>{data.key}: {data.value}</p>
      </div>
    </div>
  );
}

export default App;
