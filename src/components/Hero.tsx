import Footer from "./Footer";
import MainCard from "./MainCard";
import Modal from "./Modal";
import NormalButton from "./NormalButton";
import { createSignal, Show } from "solid-js";


export default function Hero() {
  const [IsVisible, setIsVisible] = createSignal(false);

  return (
    <>
      <section class="flex justify-center text-white customfont-title pt-[120px]">
        <div class='flex justify-center flex-col items-center text-center'>
          <img
            src="/logoinxta_small.webp"
            alt="Inxta Logo"
            class="max-w-[150px] mb-6"
            width={150}
            height={150}
            draggable="false"
          />

          <h1 class='font-bold tracking-wide text-8xl animate-glow'>Inxta</h1>

          <p class='text-2xl'>A better Instagram.</p>

          <div class='flex justify-center flex-row space-x-4 my-8'>
            <div>
              <NormalButton download={true} text='Download' link='https://dl.dashnyam.com/inxta.apk' color='bg-sky-200 text-slate-800 text-xl' glow={true}></NormalButton>
            </div>

            <div onClick={() => setIsVisible(true)}>
              <NormalButton text='Changelog' color='bg-slate-200 text-slate-800 text-xl' glow={true}/>
            </div>
          </div>

          <p class='text-slate-200'>Android 9.0+</p>

          <Show when={IsVisible()}>
            <Modal setIsVisible={setIsVisible}/>
          </Show>

          <MainCard setIsVisible={setIsVisible}/>

          <Footer />
        </div>
      </section>
    </>
  );
}
