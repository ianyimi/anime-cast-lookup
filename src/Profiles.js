export default function Profiles({ characters }) {
  const characterDivs = [];

  characters &&
    characters.forEach((character, i) => {
      const firstName = character.name.includes(",")
        ? character.name.split(" ")[character.name.split(" ").length - 1]
        : character.name;
      const img = character.image_url;
      characterDivs.push(
        <div id="profile-background" key={i}>
          <div id="profile">
            <img
              id="profile-image"
              style={{ width: "100px", height: "100px" }}
              src={img}
              alt={firstName}
            />
            <p>{firstName}</p>
          </div>
        </div>
      );
    });

  return <div id="profiles">{characterDivs}</div>;
}
