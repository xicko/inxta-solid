import About from "./About";
import ChangelogTable from "./ChangelogTable";


const features = [
    {
      name: "Ads free",
      description: "Blocks all sponsored posts from feed, direct, reels, and explore tabs.",
      color: "bg-sky-200",
    },
    {
        name: "Anonymity",
        description: "View stories, watch lives, read DMs anonymously.",
        color: "bg-indigo-200",
    },
    {
        name: "Downloader",
        description: "Download posts, reels, and stories in high quality.",
        color: "bg-purple-200",
    },
    {
        name: "Enhanced Upload",
        description: "Upload photos, videos, and stories in highest quality.",
        color: "bg-pink-200",
    },
    {
        name: "Developer Options",
        description:"Advanced developer options enabled, allowing you to experiment with various settings.",
        color: "bg-red-200",
    },
    {
        name: "Distraction-free",
        description: "Block reels, posts, explore tab, stories, and comments accordingly to your needs.",
        color: "bg-orange-200",
    },
    {
        name: "Verification badge",
        description: "Get verified badge on your profile.",
        color: "bg-amber-200",
    },
    {
        name: "Dynamic Android Theme",
        description: "Dynamic color theme changes colors of elements within the app based on your phone theme.",
        color: "bg-lime-200",
    }
  ]

export default function MainCard({setIsVisible}: any) {
    return(
        <>
            <section class='flex justify-center px-4 my-12'>
                <div class='md:w-[1310px] w-full px-4 bg-white rounded-[52px] overflow-x-hidden shadow-[0px_0px_35px_0px_rgba(255,255,255,0.25)]'>
                    <About items={features}/>
                    <ChangelogTable setIsVisible={setIsVisible}/>
                </div>
            </section>
        </>
    )
}