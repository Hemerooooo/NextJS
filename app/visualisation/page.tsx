import Image from "next/image";

export default function Page() {
    return (
        <div className="flex h-full flex-col">
            <Image src='/peer-career-logo-cunia1-1@2x.png' alt='PeerCareer LOGO' width={480} height={480} className="pl-10" />
            <Image src='/undraw_map_dark_re_36sy 2.png' alt='PeerCareer LOGO' width={500} height={500} />
            <p className="mt-10 text-4xl font-bold text-rose-500 dark:text-white">
            Create Your Own Career Map
                </p>
        </div>
    );
}