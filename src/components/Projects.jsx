// import NavNet from "./NavNet"
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

      //  flex flex-col sm:flex-row gap-6 font-display py-10 px-5 bg-stone-100">

export default function Projects() {
  return (
    <div className="md:flex md:gap-6 p-5 md:items-center bg-stone-100 " >
      <div>
        <div className="h-72 w-64 pt-12 px-34 bg-sky-500">
          <img src="./NavNet-img/navnet_header_page.webp" alt="Navnet" />
        </div>
        <div className="flex flex-row my-2 px-4 pt-8 text-stone-600">
          <h3 className="text-3xl font-light">
            NavNet
          </h3>
          <p className="text-xl pl-3 pt-1.5 font-light">
            Brand and website redesign
          </p>
        </div>
        <Link to="/NavNet">
          <div className="flex flex-row px-4 my-2 text-stone-600 font-light">
            Full Project
            <div className='w-5 h-5 mt-0.5 ml-1 cursor-pointer'>
              <ArrowLongRightIcon/>
            </div>
          </div>
        </Link>
      </div>

      <div>
        <div className="my-6 h-72 w-64 pt-12 px-34 bg-red-400">
          <img src="./webpage-header/MuNa_multitouch.webp"  alt="MuNa" />
        </div>
        <div className="flex flex-row px-6 text-stone-600">
          <h3 className="text-3xl font-light">
            National Museum of Equador
          </h3>
          <p className="text-xl pl-3 pt-1.5 font-light">
          INTERACTIVE INSTALLATIONS, MOBILE APP AND WEBSITE
          </p>
        </div>
        <Link to="/MuNa">
          <div className="flex flex-row px-14 my-2 text-stone-600 font-light">
            Full Project
            <div className='w-5 h-5 mt-0.5 ml-1 cursor-pointer'>
              <ArrowLongRightIcon/>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <div className="h-72 w-64 pt-12 px-34">
          <img src="./webpage-header/bdp-touch.webp" alt="BdP" />
        </div>
        <div className="flex flex-row my-2 px-10 pt-8 text-stone-600">
          <h3 className="text-3xl font-light">
            BdP
          </h3>
          <p className="text-xl pl-3 pt-1.5 font-light">
            Brand and website redesign
          </p>
        </div>
        <Link to="/BdP">
          <div className="flex flex-row px-14 my-2 text-stone-600 font-light">
            Full Project
            <div className='w-5 h-5 mt-0.5 ml-1 cursor-pointer'>
              <ArrowLongRightIcon/>
            </div>
          </div>
        </Link>
      </div>
      
    </div>
  )
}