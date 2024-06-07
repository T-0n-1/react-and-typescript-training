import React, { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      {showAlert && <Alert>Hello World</Alert>}
      <Button onClick={handleButtonClick}>Toggle Alert</Button>
    </div>
  );
}

export default App;
