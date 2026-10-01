import React, { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Story from './components/Story';
import Levels from './components/Levels';
import Weapons from './components/Weapons';
import Bosses from './components/Bosses';
import Stealth from './components/Stealth';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [audioOn, setAudioOn] = useState(false);
  const ambience = useRef<HTMLAudioElement | null>(null);

  useReveal();

  useEffect(() => {
    const el = ambience.current;
    if (!el) return;
    el.volume = 0.18;
    if (audioOn) {
      el.play().catch(() => setAudioOn(false));
    } else {
      el.pause();
    }
  }, [audioOn]);

  return (
    <>
      <Nav audioOn={audioOn} onToggleAudio={() => setAudioOn((v) => !v)} />
      <main>
        <Hero />
        <Story />
        <Levels />
        <Weapons />
        <Bosses />
        <Stealth />
        <Cta />
      </main>
      <Footer />
      <audio
        ref={ambience}
        src="https://assets.dappit.app/q/dark+ambient+drone+cinematic"
        loop
        preload="none"
        aria-hidden="true"
      />
    </>
  );
}
