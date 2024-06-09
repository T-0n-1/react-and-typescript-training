import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    Player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, Player: { ...game.Player, name: "Bob" } });
  };

  return (
    <div>
      <p>Exercise 1 for mutating objects</p>
    </div>
  );
}

export default App;
