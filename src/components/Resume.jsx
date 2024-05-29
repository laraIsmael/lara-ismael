import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'


export default function Resume() {
  return (
    <div className="flex flex-col font-display py-10 px-32 bg-stone-100 w-fill h-fill">
      <div className="flex justify-between">
        <p className="pb-5 ml-8">Resume</p>
        <div  className='w-5 h-5 mr-8 top-4 cursor-pointer'>
          <a href="./LaraIsmael-resume.pdf" download>
            <ArrowDownTrayIcon />
          </a>
        </div>
      </div>

      <img src="./resume-screenshot.png" alt="resume" />
    </div>
  )
}