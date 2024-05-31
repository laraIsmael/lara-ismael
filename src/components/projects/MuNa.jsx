export default function MuNa() {
  return (
    <>
      <div className="flex flex-col font-display px-12 pt-10  bg-violet-400">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col self-center items-center lg:pl-16">
            <p className="text-xl pb-5 font-light">
              Interactive instalation - mobile and web development
            </p>
            <p className="text-3xl font-light">Navigator Networks</p>
          </div>
          <img
            src="./MuNA/MuNa_header.webp"
            className="pr-16 py-10"
            alt="Nacional Museum of Ecuador"
          />
        </div>
      </div>

      <div className="flex flex-row lg:mx-96 gap-2 mt-10 mb-24 px-10 py-5 bg-neutral-100 justify-center">
        <div className="flex flex-col items-center w-auto px-8">
          <p className="pt-2 text-slate-800 text-xl font-semibold">Role</p>
          <p className="pt-4 text-slate-700 text-xl font-light text-center">
            Project Manager <br /> UX design
          </p>
        </div>
        <div className="flex flex-col px-8 items-center border-x-2 border-slate-200">
          <p className="pt-2 text-slate-800 text-xl font-semibold">Timeframe</p>
          <p className="pt-6 text-slate-700 text-xl font-light text-center">
            1 year
          </p>
        </div>
        <div className="flex flex-col px-12 items-center ">
          <p className="pt-2 text-slate-800 text-xl font-semibold">
            Plataforms
          </p>
          <p className="pt-4 text-slate-700 text-xl font-light text-center">
            Interactive instalation <br /> mobile and website
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:mx-96 items-start">
        <p className="py-2 text-slate-800 font-semibold text-3xl text-start">
          Background
        </p>
        <p className="pt-2 text-slate-700 text-2xl text-start">
          Reopening of the MuNa – National Museum of Ecuador
        </p>
        <p className="py-6 text-slate-700 text-xl leading-10 font-light text-start">
          After three years of being closed, the National Museum of Ecuador
          reopened in May 2018 after a complete renovation and
          reconceptualization of the museum experience. Our team was in charge
          of the conceptualization, design, development and implementation of
          the technological installations. Our main challenge was to re-invent
          the user experience with a focus on interactive installations never
          before seen at museums in Ecuador, since one of the main goals of the
          reopening of MuNa was to become a national reference for the use of
          technology in the museum experience.
        </p>
        <img className="self-center py-10" src="./MuNA/logo_muna.webp" />
        <p className="py-2 text-slate-800 font-semibold text-3xl text-start">
          My Role
        </p>
        <p className="py-6 text-slate-700 text-xl leading-10 font-light text-start">
          I worked directly with our clients and users. I led the ideation
          process, conducted several methods of UX research and usability
          studies. I created user flows and wireframes to share with designers
          and developers and lead the direction of the overall UX and UI,
          providing detailed documentation of specifications for our designers
          and engineers to build the products. I also performed user acceptance
          testing to evaluate if the interface fulfilled the clients’
          requirements and achieved user satisfaction.
        </p>
      </div>

      <div>
        <p className="py-2 text-slate-800 font-semibold text-3xl text-center">
          Products
        </p>
        <div className="lg:flex justify-center lg:p-5 lg:items-cente lg:flex-row">
          <img
            className="p-6 lg:max-w-sm lg:max-h-xs"
            src="./MuNA/muna_p1.webp"
          />
          <img
            className="p-6 lg:max-w-sm lg:max-h-xs"
            src="./MuNA/muna_p2.webp"
          />
          <img
            className="p-6 lg:max-w-sm lg:max-h-xs"
            src="./MuNA/muna_p3.webp"
          />
        </div>
        <div className="lg:flex lg:p-5 justify-center lg:items-cente lg:flex-row">
          <img
            className="p-6 lg:max-w-sm lg:max-h-xs"
            src="./MuNA/muna_p4.webp"
          />
          <img
            className="p-6 lg:max-w-sm lg:max-h-xs"
            src="./MuNA/muna_p5.webp"
          />
          <img
            className="p-6 lg:max-w-sm lg:max-h-xs"
            src="./MuNA/muna_p6.webp"
          />
        </div>
      </div>
    </>
  );
}
