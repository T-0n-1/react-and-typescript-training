import React, { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleButtonClick = () => {
    setAlertVisibility(true);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button onClick={handleButtonClick}>Toggle Alert</Button>
    </div>
  );
}

export default App;
