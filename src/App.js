import Header from "./components/Header";
import Card from "./components/Card";
import "./styles/main.scss";
import data from "./data";

function App() {
  const Cards = () => {
    const cardItems = data.map((d) => (
      <Card
        key={d.id}
        company={d.company}
        logo={d.logo}
        location={d.location}
        position={d.position}
        postedAt={d.postedAt}
        role={d.role}
        contract={d.contract}
        filters={d.languages}
      ></Card>
    ));
    return cardItems;
  };
  return (
    <div className="App">
      <Header />
      <main>{Cards()}</main>
    </div>
  );
}

export default App;
