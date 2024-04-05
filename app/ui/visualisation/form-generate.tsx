'use client'
import { FormEvent, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

var Button = 'Generate';

export default function FormLayout() {
    const [loading, setLoading]= useState(false);

    const pathName = usePathname();

    if (pathName != "/visualisation")
        Button = 'Regenerate';

    const [formData, setFormData] = useState({});

    const router = useRouter();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const dataToSubmit = {
            ...formData
        };
        setLoading(true);
        router.push('/visualisation/map')
    }

    // const handleInputChange = (event:Event) => {
    //     const { target } = event;
    //     const { name, value } = target;

    //     setFormData({
    //       ...formData, // Keep existing form data
    //       [name]: value // Update form data for the input field that changed
    //     });
    //   }


    return (
        <div className="flex h-full flex-col px-40 lg:px-60 py-10 items-center">
            <div>
                <p className=" text-8xl font-bold text-rose-500">PATH</p>
            </div>
            <div>
                <p className=" text-4xl font-bold text-rose-500">VISUALISATION</p>
            </div>
            <div className="text-center">
                <p className="text-sm py-5">What will your career look like? Find out here.</p>
                <p className="text-sm pb-5">Start from your current position, and make choices as you move along your career path.</p>
            </div>
            <div className=" bg-pink-200 rounded-3xl text-center">
                {/* <div className="flex h-full flex-col lg:overflow-hidden"> */}
                <form onSubmit={handleSubmit}>
                    <p className=" mt-6 text-xl font-extrabold text-rose-500 dark:text-white">
                        Dream Position
                    </p>
                    <p className=" text-xs font-light text-gray-500 dark:text-gray-400">Let's set your dream position as your end goal.</p>
                    <div className="mx-6">
                        <input type="text" name="dreamPosition" id="dPosition" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CTO" required={true} />
                    </div>
                    <p className=" mt-6 text-xl font-extrabold text-rose-500 dark:text-white">
                        Current Position
                    </p>
                    <p className=" text-xs font-light text-gray-500 dark:text-gray-400">Let's set your current position as your straight point.</p>
                    <div className="mx-6">
                        <input type="text" name="dreamPosition" id="dPosition" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Junior UI/UX designer" required={true} />
                    </div>
                    <p className=" mt-6 text-xl font-extrabold text-rose-500 dark:text-white">
                        Interest
                    </p>
                    <p className=" text-xs font-light text-gray-500 dark:text-gray-400">Let's set your interest to get a more personalised map.</p>
                    <div className="mx-6">
                        <input type="text" name="dreamPosition" id="dPosition" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Management" required={true} />
                    </div>
                    {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div> */}
                    <button type="submit" className=" my-6 text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-xl text-lg px-8 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{Button}</button>
                </form>
                {/* </div> */}
            </div>
        </div>
    )
}