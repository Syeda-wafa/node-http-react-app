import { useState } from "react";
import "./ReadData.css";

function ReadData() {
  const [data, setData] = useState("");

  const handleLoadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/read");

      const result = await response.text();

      setData(result);
    } catch (error) {
      setData("Failed to load data.");
    }
  };

  return (
    <div className="read-page">
      <div className="read-card">
        <h1>Read File Data</h1>

        <p>Click the button below to load data from the Node.js backend.</p>

        <button onClick={handleLoadData}>Load Data</button>

        <div className="output">
          {data ? <p>{data}</p> : <span>No data loaded yet.</span>}
        </div>
      </div>
    </div>
  );
}

export default ReadData;
