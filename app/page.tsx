import Image from 'next/image'

export default function Page() {
  return (
    <div className="container mx-auto">
      {/* <nav className=" border-gray-300 bg-pink-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src='peer-career-logo-cunia1-1@2x.png' alt='PeerCareer LOGO' className="size-1/6" />
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="#" className="py-2.5 px-3 me-2 mb-2 text-pink-800 hover:text-black text-lg font-semibold flex-col">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="py-2.5 px-3 me-2 mb-2 text-pink-800 hover:text-black text-lg font-semibold flex-col">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="py-2.5 px-3 me-2 mb-2 text-pink-800 hover:text-black text-lg font-semibold flex-col">
                  Contact
                </a>               </li>
              <li>
                <a href="#" className="py-2.5 px-3 me-2 mb-2 text-pink-800 hover:text-black text-lg font-semibold flex-col">
                  FAQ
                </a>               </li>
            </ul>
          </div>
        </div>
      </nav> */} 
      <div className="grid grid-cols-2 gap-36 my-10 mx-40 justify-items-center">
        <div>
          <h1 className="text-6xl font-bold my-5 text-blue-800">We are</h1>
          <h1 className="text-6xl font-bold my-5 text-blue-800">PeerCareer</h1>
          <p className="text-gray-60 my-5">The guiding light on your career journey.</p>
          <p className="text-gray-600 my-5">Peer Career empowers students and fresh graduate discover and navigate their passion and possibilities in their career paths.</p>
        </div>
        <div>
          <img src='undraw-launching-re-tomg-1@2x.png' alt='Title Picture' className=' h-4/5' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 my-10 mx-40'>
        <div className='col-span-3 justify-self-center my-5'>
          <p className='text-4xl font-semibold'>Our Missions</p>
        </div>
        <div className='justify-self-center my-5'>
          <div className='grid grid-row-3 gap-4 justify-items-center'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-pink-800">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-center">Personalised Career Information</p>
            </div>
            <div>
              <p className="text-md text-gray-600 text-center">Insight into what motivates you at work and what's possible.</p>
            </div>
          </div>
        </div>
        <div className='justify-self-center my-5'>
          <div className='grid grid-row-3 gap-4 justify-items-center'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-pink-800">
                <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Clear Navigation Process</h3>
            </div>
            <div>
              <p className="text-md text-gray-600 text-center">Your interactive, visualised career path.</p>
            </div>
          </div>
        </div>
        <div className='justify-self-center my-5'>
          <div className='grid grid-row-3 gap-4 justify-items-center'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-pink-800">
                <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Continual Career Navigation Updates</h3>
            </div>
            <div>
              <p className="text-md text-gray-600 text-center">Explore free-following information from peers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 my-10 mx-40">
        <div>
          <img src='undraw-scrum-board-re-wk7v-1@2x.png' alt='Title Picture' className=' h-4/5' />
        </div>
        <div>
          <div className='grid grid-row-3 gap-10'>
            <div className='row-start-3'>
              <p className='text-4xl font-semibold'>Our Version</p>
            </div>
            <div className='row-start-4'>
              <p className="text-gray-600">We want you all to have a career you love.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-row-3 gap-10'>
            <div className=''>
              <p className='text-4xl font-semibold'>Introduction to the project</p>
            </div>
            <div className=''>
              <p className="text-gray-600">4 graduate students met at uni, and you know the rest. Although none of us dropped out later, it does not make Peer Career less innovative or entrepreneurial.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="my-10">
        <h2 className="text-4xl font-bold text-center">Our Missions</h2>
        <div className="flex justify-around mt-6">
          <div className="w-1/3">
            <h3 className="text-2xl font-bold">Personalised Career Information</h3>
            <p className="text-gray-600 mt-2">Insight into what motivates you at work and what's possible.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-2xl font-bold">Clearer Navigation Process</h3>
            <p className="text-gray-600 mt-2">Your interactive, visualised career path.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-2xl font-bold">Continual Career Navigation Updates</h3>
            <p className="text-gray-600 mt-2">Explore free-flowing information from peers.</p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-4xl font-bold text-center">Our Vision</h2>
        <p className="text-gray-600 mt-4 text-center">We want you all to have a career you love.</p>
      </section>

      <section className="my-10">
        <h2 className="text-4xl font-bold text-center">Introduction to the project</h2>
        <p className="text-gray-600 mt-4">4 graduate students met at uni, and you know the rest. Although none of us dropped out later, it does not make Peer Career less innovative or entrepreneurial.</p>
        <p className="text-gray-600 mt-2">We started from a problem we all have: career navigation. Our investigation shows over 50% of students are unsure of their career passion, and those who are sure are also sometimes in doubt. That led to the creation of the Peer Career project.</p>
      </section>
    </div>
  );
}
