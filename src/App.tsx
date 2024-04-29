import type { Component } from 'solid-js';
import Hero from './components/Hero';
import Background from './components/Background';

const App: Component = () => {
  return (
    <div class='customfont-base'>
      <Background />

      <Hero />
    </div>
  );
};

export default App;
