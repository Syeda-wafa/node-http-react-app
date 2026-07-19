import { useState } from "react";
import "./SaveData.css";

function SaveData() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    if (!text.trim()) {
      setMessage("Please enter some text.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/save", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          text,
        }),
      });

      console.log(response.status);

      const result = await response.json();

      setMessage(result.message);

      setText("");
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="save-page">
      <div className="save-card">
        <h1>Save File Data</h1>

        <p>
          Enter some text below. Later, this data will be saved in
          <strong> data.txt </strong>
          using the Node.js fs module.
        </p>

        <textarea
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleSave}>Save Data</button>

        {message && <div className="success">{message}</div>}
      </div>
    </div>
  );
}

export default SaveData;
