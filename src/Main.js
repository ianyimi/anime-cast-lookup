import { useState } from "react";

export default function Main({ setAnime }) {
  const [search, setSearch] = useState("");
  return (
    <div id="inputDiv">
      <h1>Anime Cast Lookup</h1>
      <h4>Search an anime to see its cast of characters!</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAnime(search);
        }}
      >
        <input
          id="input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}
