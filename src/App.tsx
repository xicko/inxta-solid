import { createSignal, type Component, Show } from 'solid-js';
import Footer from "./components/Footer";
import Background from './components/Background';
import Hero from './components/Hero';
import Modal from "./components/Modal";
import MainCard from './components/MainCard';

const App: Component = () => {
  const [IsVisible, setIsVisible] = createSignal(false); // Modal Visibility

  return (
    <div class='customfont-base'>
      <Background />

      <Hero setIsVisible={setIsVisible}/>

      <Show when={IsVisible()}>
        <Modal setIsVisible={setIsVisible}/>
      </Show>

      <MainCard setIsVisible={setIsVisible}/>

      <Footer />
    </div>
  );
};

export default App;
