interface JobListingCardProperties {
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  selectedFilters: (item: string) => void;
}

const JobListingCard = ({ ...props }: JobListingCardProperties) => {
  return (
    <>
      <div
        className={`bg-white pt-11 pl-6 pb-6 pr-6 md:p-6 rounded mb-12 md:mb-4 flex flex-col md:flex-row justify-between shadow-xl  md:items-center items-start ${
          props.featured ? "border-l-4 border-dark-cyan" : ""
        }`}
      >
        <div className="flex gap-3 relative flex-col md:flex-row">
          <img
            src={props.logo}
            alt={props.company}
            className="absolute top-[-4.5rem] md:top-0 md:relative size-16 md:size-auto"
          />
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-dark-cyan font-bold">{props.company}</span>
              {props.new && (
                <span className="font-bold bg-dark-cyan rounded-full px-2 py-1.5 text-xs text-white inline-block mx-2 uppercase">
                  New!
                </span>
              )}
              {props.featured && (
                <span className="font-bold font-body bg-very-dark-gray-cyan rounded-full px-2 py-1.5 text-xs text-white inline-block uppercase">
                  Featured
                </span>
              )}
            </div>
            <div className="font-bold text-lg hover:text-dark-cyan cursor-pointer">
              {props.position}
            </div>
            <div className="flex items-center">
              <span className="font-medium text-dark-gray-cyan">
                {props.postedAt}
              </span>
              <span className="size-1 bg-dark-gray-cyan rounded-full mx-2 inline-block"></span>
              <span className="font-medium text-dark-gray-cyan">
                {props.contract}
              </span>
              <span className="size-1 bg-dark-gray-cyan rounded-full mx-2 inline-block"></span>
              <span className="font-medium text-dark-gray-cyan">
                {props.location}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="my-3 md:hidden  block border-1 bg-very-dark-gray-cyan h-px" />

          <button
            className="font-bold px-3 py-2 bg-light-grayish-cyan text-dark-cyan rounded mr-2 md:ml-2 hover:bg-dark-cyan hover:text-white"
            onClick={() => props.selectedFilters(props.role)}
          >
            {props.role}
          </button>

          {props.tools?.map((tool) => (
            <button
              className="font-bold px-3 py-2 bg-light-grayish-cyan text-dark-cyan rounded mr-2 md:ml-2 hover:bg-dark-cyan hover:text-white"
              onClick={() => props.selectedFilters(tool)}
              key={tool + Math.random()}
              value={tool}
            >
              {tool}
            </button>
          ))}

          {props.languages.map((l) => (
            <button
              className="font-bold px-3 py-2 bg-light-grayish-cyan text-dark-cyan rounded mr-2 md:ml-2 my-2 hover:bg-dark-cyan hover:text-white"
              key={l + Math.random()}
              onClick={() => props.selectedFilters(l)}
            >
              {l}
            </button>
          ))}

          <button
            className="font-bold px-3 py-2 bg-light-grayish-cyan text-dark-cyan rounded mr-2 md:ml-2 hover:bg-dark-cyan hover:text-white"
            onClick={() => props.selectedFilters(props.level)}
          >
            {props.level}
          </button>
        </div>
      </div>
    </>
  );
};

export default JobListingCard;
