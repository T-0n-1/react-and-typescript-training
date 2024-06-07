import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["Tampere", "Helsinki", "Turku", "Oulu", "Jyväskylä"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
