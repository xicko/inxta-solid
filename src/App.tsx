import { createSignal, type Component, Show } from 'solid-js';
import Footer from "./components/Footer";
import Background from './components/Background';
import Hero from './components/Hero';
import Modal from "./components/Modal";
import MainCard from './components/MainCard';
import LocomotiveScroll from './components/LocomotiveScroll';

const App: Component = () => {
  const [IsVisible, setIsVisible] = createSignal(false); // Modal Visibility

  return (
    <div class='customfont-base'>
      <Background />

      <LocomotiveScroll>
        <Hero setIsVisible={setIsVisible}/>

        <MainCard setIsVisible={setIsVisible}/>

        <Footer />
      </LocomotiveScroll>

      <Show when={IsVisible()}>
        <Modal setIsVisible={setIsVisible}/>
      </Show>
    </div>
  );
};

export default App;
