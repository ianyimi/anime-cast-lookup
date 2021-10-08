import "./styles.css";
import { useState } from "react";
import Main from "./Main";
import Characters from "./Characters";

export default function App() {
  const [anime, setAnime] = useState(null);
  return (
    <div className="App">
      <Main setAnime={setAnime} />
      <Characters anime={anime} />
    </div>
  );
}
