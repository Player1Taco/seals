import React from 'react';

const CAST = [
  {
    name: 'Alan',
    role: 'Handler — Overwatch',
    img: 'https://assets.dappit.app/q/radio+operator+headset+portrait',
    line: 'Runs the net from a van two blocks out. Alan gives Holmes the route, the timing and the exit — and tells him when there is no exit.',
  },
  {
    name: 'Tucker',
    role: 'Quartermaster',
    img: 'https://assets.dappit.app/q/armorer+workshop+portrait',
    line: 'Builds the loadout and hates every field modification Holmes makes to it. The M14 is his; the scratches are not.',
  },
  {
    name: 'Ava',
    role: 'ARCH Insider',
    img: '/portrait-ava-operative.png',
    line: 'A former ARCH analyst who watched Project RIO go from a research note to a weapons program. She feeds Holmes the floor plans she was never supposed to keep.',
  },
];

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-h">
      <div className="wrap">
        <p className="eyebrow reveal">Mission Briefing</p>
        <div className="story-grid">
          <div className="reveal">
            <h2 id="story-h">
              The man they
              <br />
              sent alone
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Philip Holmes spent eleven years in places that do not appear on maps. When four
              nuclear components vanished from a decommissioned site in Nevada, the trail led to a
              private security conglomerate called ARCH — and to a boardroom that had already
              decided the loss was acceptable.
            </p>
            <p className="lede">
              Holmes is not sent to negotiate. He is sent to walk into four ARCH bases, find the
              cores, and leave the buildings standing only if it is convenient. No backup, no
              extraction window, no official record that he was ever there.
            </p>

            <div className="lore">
              <h4>TOM &amp; Project RIO</h4>
              <p>
                ARCH built its reputation on TOM — the Tactical Operations Mesh, a private
                intelligence network that quietly rents itself to whoever pays. TOM was never meant
                to be a weapon. Project RIO made it one: a humanoid frame wired directly into the
                mesh, eight metres tall, piloted by a single operator who sees everything TOM sees.
              </p>
              <p style={{ marginBottom: 0 }}>
                The stolen components are not the point. They are the fuel. ARCH needs the cores to
                keep RIO running long enough to sell the program — and Holmes is the only person
                left who knows what happens if they do.
              </p>
            </div>
          </div>

          <div className="reveal">
            <div className="portraits">
              {CAST.map((c) => (
                <figure className="portrait" key={c.name} style={{ margin: 0 }}>
                  <img src={c.img} alt={`${c.name} — ${c.role}`} />
                  <figcaption>
                    <b>{c.name}</b>
                    <small>{c.role}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="lore" style={{ marginTop: 16 }}>
              <h4>Supporting Cast</h4>
              <p style={{ marginBottom: 0 }}>
                Alan keeps Holmes alive from a distance. Tucker keeps him armed. Ava keeps him
                honest — and every one of them is a liability the moment ARCH decides to look for
                the leak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
