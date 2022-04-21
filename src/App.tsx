import { useState } from "react";
import "./App.css";

function App() {
  const [attendees, setAttendees] = useState([
    "Adam",
    "Alex",
    "Cammy",
    "Chloe",
    "Chris",
    "Dima",
    "Glen",
    "Harry",
    "Ioannis",
    "Nick",
    "Omar",
    "Panos",
    "Pavlos",
    "Rich",
    "Roberta",
  ]);

  const [speaker, setSpeaker] = useState("Who's next?!");

  const getRandomSpeaker = () => {
    const randomNumber = Math.floor(Math.random() * attendees.length);
    console.log({ randomNumber });
    setSpeaker(attendees[randomNumber]);
    setAttendees(
      attendees.filter(function (value, index, arr) {
        return index !== randomNumber;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="title">Stand Up Randomiser</h1>
      <ol className="questions">
        <li>What did you achieve yesterday?</li>
        <li>What do you hope you achieve today?</li>
        <li>Are there any blockers?</li>
      </ol>
      <div className="attendees">
        {attendees.map((attendee) => {
          return <p>{attendee}</p>;
        })}
      </div>
      <div className="speaker">
        <strong>{speaker}</strong>
        <button onClick={getRandomSpeaker}>Randomise</button>
      </div>
    </div>
  );
}

export default App;
