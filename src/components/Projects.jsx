// import NavNet from "./NavNet"
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="flex flex-col font-display py-10 px-32 bg-stone-100">
      <div className="pt-12 px-34 bg-sky-500	">
        <img src="./NavNet-img/navnet_header_page.webp" alt="Navnet" />
      </div>
      <div className="flex flex-row my-2 px-10 pt-8 text-stone-600">
        <h3 className="text-3xl font-light">
          NavNet
        </h3>
        <p className="text-xl pl-3 pt-1.5 font-light">
          Brand and website redesign
        </p>
      </div>
      <Link to="/NavNet">
        <div className="flex flex-row px-14 my-2 text-stone-600 font-light">
          Full Project
          <div className='w-5 h-5 mt-0.5 ml-1 cursor-pointer'>
            <ArrowLongRightIcon/>
          </div>
        </div>
      </Link>
    </div>
  )
}