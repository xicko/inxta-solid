import { createSignal } from 'solid-js';

const screenshots = [
    "/screenshots/ss1.webp",
    "/screenshots/ss2.webp",
    "/screenshots/ss3.webp"
]

const [currentIndex, setCurrentIndex] = createSignal(0);

const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
}, 2750);
 
export default function Showcase(props: {class?: string}) {
    return(
        <>
            <div>
                <img 
                    class={props.class} 
                    draggable={false} 
                    src={screenshots[currentIndex()]}
                    alt='Screenshot'
                    fetchpriority="high"
                    width='1086'
                    height='2160'></img>
            </div>
        </>
    )
}