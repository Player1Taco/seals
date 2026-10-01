import React from 'react';
import { CAM_STATES, SHUTDOWNS } from '../data';

export default function Stealth() {
  return (
    <section id="stealth" aria-labelledby="stealth-h">
      <div className="wrap">
        <p className="eyebrow reveal">Systems</p>
        <h2 id="stealth-h" className="reveal" style={{ marginBottom: 16 }}>
          The camera <span style={{ color: 'var(--accent)' }}>never blinks</span>
        </h2>
        <p className="lede reveal" style={{ marginBottom: 48 }}>
          Every camera in SEALS runs four states. Reading the colour is the difference between a
          clean floor and a firefight.
        </p>

        <div className="stealth-grid">
          <div className="reveal">
            <figure className="cam-icon" style={{ margin: 0 }}>
              <img src="/stealth-camera-state-icon.png" alt="ARCH surveillance camera state indicator" />
            </figure>

            <div className="cam-states">
              {CAM_STATES.map((c) => (
                <div className={`cam ${c.tone}`} key={c.id}>
                  <div className="cam-swatch" aria-hidden="true">
                    {c.label}
                  </div>
                  <div className="cam-body">
                    <b>{c.title}</b>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <h3 style={{ marginBottom: 16 }}>Shutdown Methods</h3>
            <div className="shutdowns">
              {SHUTDOWNS.map((s, i) => (
                <div className="shutdown" key={s.name}>
                  <span className="num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <b>{s.name}</b>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lore" style={{ marginTop: 24 }}>
              <h4>Why it matters</h4>
              <p style={{ marginBottom: 0 }}>
                A black camera leaves no log. Every other state writes a timestamp, a floor and a
                face. Finish a mission with a single red event on the record and ARCH knows exactly
                who walked through — and exactly where to look next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
