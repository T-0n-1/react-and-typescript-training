import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy pepperoni",
    toppings: ["mushrooms"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };

  return (
    <div>
      <p>Exercise 2 for mutating objects</p>
    </div>
  );
}

export default App;
