import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import {
  FaServer,
  FaFolderOpen,
  FaPuzzlePiece,
  FaSyncAlt,
  FaStream,
  FaBell,
} from "react-icons/fa";

function Home() {
  const [mathResult, setMathResult] = useState(null);

  const runMath = async () => {
    const response = await fetch("http://localhost:5000/math");

    const data = await response.json();

    setMathResult(data);
  };

  const [eventMessage, setEventMessage] = useState("");

  const runEvent = async () => {
    const response = await fetch("http://localhost:5000/event-loop");

    const data = await response.json();

    setEventMessage(data.message);
  };

  const [streamData, setStreamData] = useState("");

  const runStream = async () => {
    const response = await fetch("http://localhost:5000/stream");

    const data = await response.text();

    setStreamData(data);
  };

  const [eventResult, setEventResult] = useState("");

  const runCustomEvent = async () => {
    const response = await fetch("http://localhost:5000/events");

    const data = await response.json();

    setEventResult(data.message);
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Node.js HTTP Server</h1>

        <p>
          A simple project built with React frontend and a Node.js backend using
          the HTTP module (without Express).
        </p>

        <div className="hero-buttons">
          <Link to="/read" className="btn">
            Read Data
          </Link>

          <Link to="/save" className="btn btn-outline">
            Save Data
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h2>
            <FaServer /> HTTP Module
          </h2>
          <p>Create a server without Express.</p>
        </div>

        <div className="card">
          <h2>
            <FaFolderOpen /> File System
          </h2>
          <p>Read and write files using the fs module.</p>
        </div>

        <div className="card">
          <h2>
            <FaPuzzlePiece /> CommonJS
          </h2>

          <p>Using require() & module.exports</p>

          <button onClick={runMath}>Run Module</button>

          {mathResult && (
            <div className="result">
              <p>Addition : {mathResult.addition}</p>
              <p>Subtraction : {mathResult.subtraction}</p>
            </div>
          )}
        </div>

        <div className="card">
          <h2>
            <FaSyncAlt /> Event Loop
          </h2>

          <p>Understand asynchronous execution in Node.js.</p>

          <button onClick={runEvent}>Run Event Loop</button>

          {eventMessage && (
            <div className="result">
              <p>{eventMessage}</p>
            </div>
          )}
        </div>

        <div className="card">
          <h2>
            <FaStream /> Streams
          </h2>

          <p>Read a large file using createReadStream().</p>

          <button onClick={runStream}>Read Large File</button>

          {streamData && (
            <div className="result">
              <pre>{streamData}</pre>
            </div>
          )}
        </div>

        <div className="card">
          <h2>
            <FaBell /> Events
          </h2>

          <p>Trigger a custom EventEmitter event.</p>

          <button onClick={runCustomEvent}>Trigger Event</button>

          {eventResult && (
            <div className="result">
              <p>{eventResult}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
