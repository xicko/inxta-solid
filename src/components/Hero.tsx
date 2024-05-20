import NormalButton from "./NormalButton";
import Showcase from "./Showcase";

export default function Hero({setIsVisible}: any) {

  return (
    <>
      <section class="flex md:flex-row flex-col justify-center md:space-x-20 text-white customfont-title pt-[120px]">
        <div class='flex justify-center flex-col items-center text-center'>
          <img
            src="/logoinxta_small.webp"
            alt="Inxta Logo"
            class="md:max-w-[200px] max-w-[150px] mb-6"
            width={300}
            height={300}
            draggable="false"
          />

          <h1 class='font-bold tracking-wide md:text-9xl text-8xl animate-glow'>Inxta</h1>

          <p class='md:text-4xl text-2xl'>A better Instagram.</p>

          <div class='flex justify-center flex-row md:space-x-6 space-x-4 my-8'>
            <div>
              <NormalButton download={true} text='Download' link='https://dl.dashnyam.com/inxta.apk' color='bg-sky-200 text-slate-800 md:text-3xl text-xl' glow={true}></NormalButton>
            </div>

            <div onClick={() => setIsVisible(true)}>
              <NormalButton text='Changelog' color='bg-slate-200 text-slate-800 md:text-3xl text-xl' glow={true}/>
            </div>
          </div>

          <p class='md:text-2xl text-slate-200'>Android 9.0+</p>
        </div>

        <div class='flex justify-center'>
            <Showcase class='md:h-[60vh] h-[80vh]'/>
        </div>
      </section>
    </>
  );
}
