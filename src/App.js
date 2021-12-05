import Header from "./components/Header";
import Card from "./components/Card";
import "./styles/main.scss";
import data from "./data";

function App() {
  const Cards = () => {
    const cardItems = data.map((d) => (
      <Card key={d.id} company={d.company}></Card>
    ));
    return cardItems;
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Card company="test" />
        {Cards()}
      </main>
    </div>
  );
}

export default App;
