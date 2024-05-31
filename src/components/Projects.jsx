import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="flex flex-col px-24 py-10 bg-stone-100">
      <div className="lg:flex lg:p-5 lg:items-cente lg:flex-row lg:gap-6">
        <div>
          <img src="./webpage-header/navnet.webp" alt="Navnet" />
          <div className="flex flex-col px-4 pt-8 text-stone-600">
            <h3 className="text-3xl font-light text-stone-800">NavNet</h3>
            <p className="text-xl pt-1.5 font-light">
              Branding redesign, website design & development for an IT solution
              Provider in California, US.
            </p>
            <Link to="/NavNet">
              <div className="flex flex-row my-5 text-stone-600 font-light hover:animate-pulse">
                Full Project
                <div className="w-5 h-5 mt-0.5 ml-1 cursor-pointer">
                  <ArrowLongRightIcon />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="./webpage-header/muna.webp"
            alt="National Museum of Ecuador"
          />
          <div className="flex flex-col px-4 pt-8 text-stone-600">
            <h3 className="text-3xl font-light text-stone-800">
              National Museum of Ecuador
            </h3>
            <p className="text-xl pt-1.5 font-light">
              Project manager and UX designer for digital solutions - Mobile,
              Web and Inractive instalations
            </p>
            <Link to="/MuNa">
              <div className="flex hover:animate-pulse flex-row my-5 text-stone-600 font-light">
                Full Project
                <div className="w-5 h-5 mt-0.5 ml-1 cursor-pointer">
                  <ArrowLongRightIcon />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <img src="./webpage-header/wertfokus.webp" alt="wertfokus" />
          <div className="flex flex-col px-4 pt-8 text-stone-600">
            <h3 className="text-3xl font-light text-stone-800">Wertfokus</h3>
            <p className="text-xl pt-1.5 font-light">
              Website design and development for a professional coaching company
              in Germany
            </p>
            <a
              href="https://wertfokus.com/en/home//"
              target="_blank"
              className="flex flex-row hover:animate-pulse mt-12 mb-5 text-stone-600 font-light"
            >
              See Website
              <div className="w-5 h-5 mt-0.5 ml-1 cursor-pointer">
                <ArrowLongRightIcon />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:p-5 lg:items-cente lg:flex-row lg:gap-6">
        <div>
          <img src="./webpage-header/equal_value.webp" alt="EqualValue" />
          <div className="flex flex-col px-4 pt-8 text-stone-600">
            <h3 className="text-3xl font-light text-stone-800">
              Equal Value, Equal rights
            </h3>
            <p className="text-xl pt-1.5 font-light">
              {`Website design & development for a domestic worker's rights advocacy program for Latino America.`}
            </p>
            <button
              href="https://navigatornetworks.com/"
              target="_blank"
              className="flex flex-row my-5 text-stone-600 font-light hover:animate-pulse cursor-pointer"
            >
              view website
              <div className="w-5 h-5 mt-0.5 ml-1 cursor-pointer">
                <ArrowLongRightIcon />
              </div>
            </button>
          </div>
        </div>

        <div>
          <img src="./webpage-header/bdp-touch.webp" alt="Banco del Pacífic" />
          <div className="flex flex-col px-4 pt-8 text-stone-600">
            <h3 className="text-3xl font-light text-stone-800">
              Banco del Pacífic
            </h3>
            <p className="text-xl pt-1.5 font-light">
              {`Project manager and UX designer for Bank del Pacífic's first virtual bank experience.`}
            </p>
            <Link to="/MuNa">
              <div className="flex hover:animate-pulse flex-row my-5 text-stone-600 font-light">
                coming soon!
                <div className="w-5 h-5 mt-0.5 ml-1 cursor-pointer">
                  {/* <ArrowLongRightIcon/> */}
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <img src="./webpage-header/wertfokus.webp" alt="wertfokus" />
          <div className="flex flex-col px-4 pt-8 text-stone-600">
            <h3 className="text-3xl font-light text-stone-800">Wertfokus</h3>
            <p className="text-xl pt-1.5 font-light">
              Website design and development for a professional coaching company
              in Germany
            </p>
            <Link to="/NavNet">
              <div className="flex flex-row hover:animate-pulse my-5 text-stone-600 font-light">
                Full Project
                <div className="w-5 h-5 mt-0.5 ml-1 cursor-pointer">
                  <ArrowLongRightIcon />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
