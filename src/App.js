import Header from "./components/Header";
import Card from "./components/Card";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card company="test" />
      </main>
    </div>
  );
}

export default App;
