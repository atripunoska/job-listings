import { useState } from "react";
import JobListingCard from "./components/JobListingCard";
import data from "./assets/data.json";

function App() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function handleFilterClick(item: string) {
    if (!activeFilters.includes(item)) {
      const filtersCopy = [...activeFilters, item];
      setActiveFilters(filtersCopy);
    }
    return;
  }

  function handleFilterDelete(item: string) {
    const updatedFilters = activeFilters.filter((filter) => {
      return filter !== item;
    });
    setActiveFilters(updatedFilters);
  }

  function deleteAllFilters() {
    setActiveFilters([]);
  }

  return (
    <>
      <header className="h-[150px] md:h-[200px] bg-[url('./src/assets/bg-header-mobile.svg')] md:bg-[url('./src/assets/bg-header-desktop.svg')] bg-no-repeat bg-center bg-cover bg-dark-cyan"></header>

      <main className="bg-light-grayish-cyan relative pt-5">
        {activeFilters.length > 0 && (
          <div className="bg-white p-4 md:p-6 rounded  flex justify-between shadow-md items-center  w-10/12 mx-auto relative -top-12 left-0 right-0 ">
            <div className="flex flex-wrap">
              {activeFilters.map((filter) => (
                <div
                  key={filter}
                  className="bg-light-grayish-cyan text-dark-cyan mr-3 rounded-tl mb-3
                  rounded-bl"
                >
                  <span className="px-2 font-bold">{filter}</span>
                  <button
                    onClick={() => handleFilterDelete(filter)}
                    className="bg-dark-cyan text-white size-7 uppercase hover:bg-very-dark-gray-cyan rounded-tr
                    rounded-br aspect-square font-bold inline-flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="13"
                      height="13"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#ffffff"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="none"
                        stroke-linecap="butt"
                        stroke-linejoin="none"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        // style="mix-blend-mode: normal"
                      >
                        <path
                          transform="scale(5.12,5.12)"
                          d="M25,22.15625l15.84375,-15.84375l2.84375,2.84375l-15.84375,15.84375l15.9375,15.9375l-2.84375,2.84375l-15.9375,-15.9375l-15.96875,15.9375l-2.8125,-2.8125l15.9375,-15.96875l-15.84375,-15.84375l2.84375,-2.84375z"
                          id="strokeMainSVG"
                          stroke="#ffffff"
                          stroke-width="6"
                          stroke-linejoin="round"
                        ></path>
                        <g
                          transform="scale(5.12,5.12)"
                          stroke="none"
                          stroke-width="1"
                          stroke-linejoin="miter"
                        >
                          <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            {activeFilters.length > 0 && (
              <button
                onClick={deleteAllFilters}
                className="text-dark-cyan font-bold text-lg hover:underline "
              >
                Clear
              </button>
            )}
          </div>
        )}

        <div className="w-10/12 mx-auto py-12 pt-6">
          {data.map((d) => {
            if (
              activeFilters.length === 0 ||
              d.tools.some((v) => activeFilters.includes(v)) ||
              d.languages.some((v) => activeFilters.includes(v)) ||
              activeFilters.includes(d.level) ||
              activeFilters.includes(d.role)
            ) {
              return (
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
                  selectedFilters={handleFilterClick}
                />
              );
            }
          })}
        </div>
      </main>
    </>
  );
}

export default App;
