import Like from "./Components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
