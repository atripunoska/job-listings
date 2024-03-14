import data from "../data.json";
import JobListingCard from "./components/JobListingCard";

function App() {
  return (
    <>
      <header className="h-[150px] md:h-[200px] bg-[url('./src/assets/bg-header-mobile.svg')] md:bg-[url('./src/assets/bg-header-desktop.svg')] bg-no-repeat bg-center bg-cover bg-dark-cyan"></header>
      <main className="bg-light-grayish-cyan">
        <div className="w-10/12 mx-auto py-12">
          {data.map((d) => (
            <JobListingCard
              key={d.id}
              company={d.company}
              logo={d.logo}
              new={d.new}
              featured={d.featured}
              position={d.position}
              role={d.role}
              level={d.level}
              postedAt={d.postedAt}
              contract={d.contract}
              location={d.location}
              languages={d.languages}
              tools={d.tools}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
