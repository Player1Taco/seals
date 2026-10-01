import React, { useState } from 'react';

const LINKS = [
  { href: '#story', label: 'Story' },
  { href: '#levels', label: 'Levels' },
  { href: '#weapons', label: 'Weapons' },
  { href: '#bosses', label: 'Bosses' },
  { href: '#stealth', label: 'Stealth' },
  { href: '#wishlist', label: 'Wishlist' },
];

type Props = { audioOn: boolean; onToggleAudio: () => void };

export default function Nav({ audioOn, onToggleAudio }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          <img src="/seals-logo-mark.png" alt="SEALS logo mark" />
          SEALS
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className="nav-links" id="primary-nav" data-open={open} style={open ? { display: 'flex' } : undefined}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-audio"
          aria-pressed={audioOn}
          onClick={onToggleAudio}
          title="Ambient audio"
        >
          {audioOn ? '◼ Ambience On' : '▶ Ambience Off'}
        </button>
      </div>
    </header>
  );
}
