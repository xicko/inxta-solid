import Footer from "./Footer";
import MainCard from "./MainCard";
import NormalButton from "./NormalButton";

export default function Hero() {
  return (
    <>
      <section class="flex justify-center text-white customfont-title pt-[100px]">
        <div class='flex justify-center flex-col items-center text-center'>
          <img
            src="/logoinxta.webp"
            class="max-w-[150px] mb-6"
            width={150}
            height={150}
            draggable="false"
          />

          <h1 class='font-bold tracking-wide text-8xl animate-glow'>Inxta</h1>

          <p class='text-2xl'>A better Instagram.</p>

          <div class='flex justify-center flex-row space-x-4 my-8'>
            <NormalButton text='Download' link='#' color='bg-sky-200 text-slate-800 text-xl' glow={true}/>
            <NormalButton text='Changelog' link='#' color='bg-slate-200 text-slate-800 text-xl' glow={true}/>
          </div>

          <p class='text-slate-200'>Android 9.0+</p>

          <MainCard />

          <Footer />
        </div>
      </section>
    </>
  );
}
