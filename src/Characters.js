import { useEffect, useState } from "react";
import Profiles from "./Profiles";

export default function Characters({ anime }) {
  const [animeData, setAnimeData] = useState(null);
  const [characterData, setCharacterData] = useState(null);
  const [status, setStatus] = useState("waiting");

  function getAnimeFromServer() {
    if (!anime) return;
    const url = `https://api.jikan.moe/v3/search/anime?q=${anime.toLowerCase()}&page=1/`;
    setStatus("loading");
    fetch(url)
      .then((r) => {
        if (!r.ok) {
          setStatus("failed");
        }
        return r.json();
      })
      .then((r) => setAnimeData(r.results))
      .catch((err) => setStatus("failed"));
  }

  useEffect(getAnimeFromServer, [anime]);

  useEffect(() => {
    if (!animeData) return;
    const topAnimeId = animeData[0].mal_id;
    const url = `https://api.jikan.moe/v3/anime/${topAnimeId}/characters_staff`;
    fetch(url)
      .then((r) => {
        if (!r.ok) {
          setStatus("failed");
        }
        return r.json();
      })
      .then((r) => {
        setCharacterData(r.characters);
        setStatus("done");
      })
      .catch((err) => {
        setStatus("failed");
      });
  }, [animeData]);

  return (
    <div id="characters">
      {characterData && status === "done" && (
        <Profiles characters={characterData} />
      )}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Anime not found. Try Another</p>}
    </div>
  );
}
