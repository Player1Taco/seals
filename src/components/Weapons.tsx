import React from 'react';
import { WEAPONS } from '../data';

export default function Weapons() {
  return (
    <section id="weapons" aria-labelledby="weapons-h">
      <div className="wrap">
        <p className="eyebrow reveal">Loadout</p>
        <h2 id="weapons-h" className="reveal" style={{ marginBottom: 16 }}>
          Two guns. <span style={{ color: 'var(--accent)' }}>Two arguments.</span>
        </h2>
        <p className="lede reveal" style={{ marginBottom: 48 }}>
          Holmes carries a rifle for the fight he planned and a pistol for the one he did not.
          Listen to both before you pick a favourite.
        </p>

        <div className="weapons">
          {WEAPONS.map((w) => (
            <article className="weapon reveal" key={w.id}>
              <img src={w.image} alt={`${w.name} — ${w.role}`} />
              <div className="weapon-body">
                <h3>{w.name}</h3>
                <p className="weapon-role">{w.role}</p>
                <p>{w.blurb}</p>

                <div className="profile">
                  {w.profile.map((p) => (
                    <div className="profile-row" key={p.label}>
                      <span>{p.label}</span>
                      <span className="bar" aria-hidden="true">
                        <i className={p.hot ? 'hot' : ''} style={{ width: `${p.value}%` }} />
                      </span>
                      <span>{p.value}</span>
                    </div>
                  ))}
                </div>

                <div className="audio-row">
                  <audio controls preload="none" src={w.audio}>
                    Your browser does not support audio playback.
                  </audio>
                  <span className="audio-note">{w.audioNote}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
