export type Level = {
  id: string;
  index: string;
  name: string;
  location: string;
  image: string;
  brief: string;
  boss: string;
  enemies: string;
  mechanic: string;
  mechanicDetail: string;
  model?: { src: string; label: string; note: string };
};

export const LEVELS: Level[] = [
  {
    id: 'base-delta',
    index: '01',
    name: 'Base Delta',
    location: 'Houston, Texas — Corporate Office Park',
    image: 'https://assets.dappit.app/q/houston+corporate+office+park+night',
    brief:
      'ARCH fronts its nuclear logistics out of a glass-and-steel campus that never sleeps. Holmes enters as a contractor, badge cloned, and works the floors from the parking deck up.',
    boss: 'Lloyd — Tactical Commander',
    enemies: 'Corporate security, badge-check patrols, rooftop snipers',
    mechanic: 'Social Stealth',
    mechanicDetail:
      'Blend into the office crowd. Walk pace, badge tier and posture determine whether a guard reads you as staff or as a threat.',
  },
  {
    id: 'base-charlie',
    index: '02',
    name: 'Base Charlie',
    location: 'Colorado — Underground Mountain Facility',
    image: '/level-base-charlie-facility.png',
    brief:
      'Two kilometres of granite over a hangar carved for one machine. Charlie is where ARCH weaponised the RIO frame, and where Wok learned to drive it.',
    boss: 'Wok — piloting RIO',
    enemies: 'Mech escorts, turret nests, drone swarms',
    mechanic: 'Vertical Breach',
    mechanicDetail:
      'Cut through maintenance shafts and bring the ceiling down. Gravity is a tool: drop on armour, not beside it.',
    model: {
      src: 'https://assets.dappit.app/3d/ph-camera.glb',
      label: 'RIO — 8m Bipedal Mech',
      note: 'Interactive field scan',
    },
  },
  {
    id: 'base-bravo',
    index: '03',
    name: 'Base Bravo',
    location: 'Philadelphia — Flooded Subway Tunnels',
    image: 'https://assets.dappit.app/q/flooded+subway+tunnel+dark',
    brief:
      'The Schuylkill took the line in 2019 and ARCH never gave it back. Waist-deep water, dead lights, and a field commander who knows every service tunnel by heart.',
    boss: 'Hudson — Field Commander',
    enemies: 'Divers, floodlight teams, tunnel ambushers',
    mechanic: 'Water Noise',
    mechanicDetail:
      'Every step carries. Move slow and stay silent, or move fast and accept that the whole tunnel hears you coming.',
  },
  {
    id: 'base-alpha',
    index: '04',
    name: 'Base Alpha',
    location: 'Aberville — Underground Bunker & Airship',
    image: '/level-base-alpha-airship-bunker.png',
    brief:
      'The end of the line. A buried airship hangar holding the last recovered core, guarded by the machine ARCH built specifically to end infiltrators.',
    boss: 'Delta Spider Droid — Unnamed',
    enemies: 'Elite guard, automated sentries, the Delta itself',
    mechanic: 'Zero Light',
    mechanicDetail:
      'Kill the power and fight in black. Night vision is loud, thermal is blind — pick your sense and live with its blind spot.',
    model: {
      src: 'https://assets.dappit.app/3d/khronos-antiquecamera.glb',
      label: 'Delta — Spider Droid',
      note: 'Interactive field scan',
    },
  },
];

export type Weapon = {
  id: string;
  name: string;
  role: string;
  image: string;
  blurb: string;
  profile: { label: string; value: number; hot?: boolean }[];
  audio: string;
  audioNote: string;
};

export const WEAPONS: Weapon[] = [
  {
    id: 'm14',
    name: 'M14',
    role: 'Battle Rifle — Primary',
    image: '/weapon-m14-battle-rifle.png',
    blurb:
      'Seven-six-two, wood-stocked, and old enough to have opinions. The M14 does not whisper — it announces. One clean shot ends an encounter; a missed one brings the floor.',
    profile: [
      { label: 'Report', value: 92, hot: true },
      { label: 'Recoil', value: 78 },
      { label: 'Range', value: 88 },
      { label: 'Handling', value: 44 },
    ],
    audio: 'https://assets.dappit.app/q/rifle+shot+heavy+boom',
    audioNote: 'Heavy, authoritative — a low crack with a long tail.',
  },
  {
    id: 'glock',
    name: 'Glock',
    role: 'Sidearm — Secondary',
    image: '/weapon-glock-sidearm.png',
    blurb:
      'The pistol you draw when the plan has already failed. Sharp, immediate, and honest about its range. Twelve rounds and no ceremony.',
    profile: [
      { label: 'Report', value: 61 },
      { label: 'Recoil', value: 38 },
      { label: 'Range', value: 42 },
      { label: 'Handling', value: 94, hot: true },
    ],
    audio: 'https://assets.dappit.app/q/pistol+shot+sharp+crack',
    audioNote: 'Sharp, immediate — a flat snap with almost no tail.',
  },
];

export type Boss = {
  id: string;
  name: string;
  role: string;
  image: string;
  desc: string;
  phase: string;
  weakness: string;
};

export const BOSSES: Boss[] = [
  {
    id: 'lloyd',
    name: 'Lloyd',
    role: 'Alpha Boss — Tactical Commander',
    image: '/portrait-lloyd-commander.png',
    desc: 'Runs the campus like a chessboard. Lloyd never chases — he closes doors, cuts corridors and lets you walk into the room he already cleared.',
    phase: 'Phase 1: badge-locked floors. Phase 2: he takes the roof and calls the snipers in.',
    weakness: 'Glass atria. Break his sightlines and his command net goes quiet.',
  },
  {
    id: 'hudson',
    name: 'Hudson',
    role: 'Bravo Boss — Field Commander',
    image: 'https://assets.dappit.app/q/military+commander+portrait+dark',
    desc: 'A tunnel rat who has never lost a fight below street level. Hudson floods sections to move you, then hunts you through the dark he owns.',
    phase: 'Phase 1: floodlight sweeps. Phase 2: he cuts the lights and comes in with divers.',
    weakness: 'Standing water. Every charge he plants is a fuse you can shoot.',
  },
  {
    id: 'wok',
    name: 'Wok',
    role: 'Charlie Boss — Piloting RIO',
    image: 'https://assets.dappit.app/q/mech+pilot+helmet+portrait',
    desc: 'An engineer who volunteered for the RIO program and never came back out of the cockpit. Minigun arm on the right, rocket pod on the left, eight metres of bad news.',
    phase: 'Phase 1: minigun suppression. Phase 2: rocket pod salvos and a charge that cracks the floor.',
    weakness: 'The knee actuators. Drop from above, hit the joint, then get clear before the stomp.',
  },
  {
    id: 'delta',
    name: 'Delta',
    role: 'Alpha Boss — Spider Droid',
    image: '/stealth-camera-state-icon.png',
    desc: 'ARCH never gave it a name, only a designation. Eight legs, no face, and a targeting suite that learns your movement pattern in three engagements.',
    phase: 'Phase 1: ceiling ambush. Phase 2: it cuts the grid and hunts on thermal alone.',
    weakness: 'EMP from the fuse panel. Blind it, then break the legs one at a time.',
  },
];

export type CamState = {
  id: string;
  label: string;
  tone: 'green' | 'yellow' | 'red' | 'black';
  title: string;
  desc: string;
};

export const CAM_STATES: CamState[] = [
  {
    id: 'green',
    label: 'GRN',
    tone: 'green',
    title: 'Green — Unaware',
    desc: 'The camera is sweeping its default arc. Cross the cone at walking pace and it never logs you.',
  },
  {
    id: 'yellow',
    label: 'YEL',
    tone: 'yellow',
    title: 'Yellow — Suspicious',
    desc: 'Motion in the cone, no visual confirm. It holds the last known position and tightens its sweep. Break line of sight for six seconds.',
  },
  {
    id: 'red',
    label: 'RED',
    tone: 'red',
    title: 'Red — Alerted',
    desc: 'Visual confirmed. The camera locks, the nearest patrol reroutes, and the sector timer starts. You have one room of grace.',
  },
  {
    id: 'black',
    label: 'BLK',
    tone: 'black',
    title: 'Black — Offline',
    desc: 'No power, no feed, no log. The only state that leaves no evidence behind — and the only one that takes a real action to reach.',
  },
];

export const SHUTDOWNS = [
  {
    name: 'Power Box',
    desc: 'A local breaker on the wall. Kills one camera for ninety seconds. Fast, loud, and it comes back.',
  },
  {
    name: 'Security Room',
    desc: 'The desk that watches the sector. Take the room and you own every feed on the floor until someone notices.',
  },
  {
    name: 'Fuse Panel',
    desc: 'Sector-wide grid. Darkens a whole wing for the rest of the mission — and trips the backup generator in four minutes.',
  },
  {
    name: 'Destruction',
    desc: 'Shoot the housing. Permanent, instant, and logged the moment the feed drops. Loudest option on the list.',
  },
];

export const MILESTONES = [
  { tag: 'M1', text: 'Vertical slice — Base Delta, social stealth, M14 / Glock combat loop.' },
  { tag: 'M2', text: 'Camera state system, shutdown methods and full guard AI behaviour tree.' },
  { tag: 'M3', text: 'Base Charlie and the RIO encounter — vertical breach, mech boss fight.' },
  { tag: 'M4', text: 'Base Bravo and Base Alpha, Delta spider droid, zero-light mechanic.' },
  { tag: 'M5', text: 'Campaign polish, audio pass, accessibility and launch.' },
];
