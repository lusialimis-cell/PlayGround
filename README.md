# APE PROJECT — Laboratory Escape

A complete, playable 3D pixel-art survival-horror game that runs in the browser with no build step.

You are the last ape in a failed subterranean research lab. Three isotope cores are scattered across the Mossline jungle outside. Recover them, feed the main terminal, and ride the emergency lift out — while a blind, 2.8 m acoustic apex predator called **Moss.Man** maps the world by sound.

## Play

Open the project through OMGithub, or serve the folder with any static web server and open `index.html`:

```bash
python3 -m http.server 3000
# then visit http://localhost:3000/
```

A local server is required because the game uses ES modules and a vendored Three.js import map.

## Objective

1. Leave the 15 × 15 m lab through one of four hydraulic doors.
2. Follow the three columns of light to the isotope beacon sites in the 500 × 500 m jungle.
3. Pick up each core with **E**.
4. Return to the lab terminal and activate the emergency ascent.
5. Wait for the shaft to pressurise, then step onto the centre lift pad to escape.

The main terminal stays locked until all three cores are installed. An exterior release switch is mounted to the left of every door frame, so you can always get back inside.

## Controls

| Action | Keyboard / Mouse |
| --- | --- |
| Move | **W A S D** or arrow keys |
| Look | Move the mouse (click the game to capture the pointer), or drag |
| Sprint / knuckle-walk | Hold **Shift** |
| Crouch / quiet movement | **C** (toggle) |
| Jump | **Space** |
| Interact / use switch / pick up | **E** |
| Throw a stone | **Q** |
| Toggle headlamp | **F** |
| Toggle first / third person | **V** |
| Pause | **P** or **Esc** |
| Toggle audio | **M** |
| Restart after death or win | **R** |

On touch devices a virtual stick, run, crouch, view, lamp, throw, jump, and pause buttons appear automatically. The HUD compass points to the nearest live beacon, then back to the lab once all cores are recovered.

## Survival rules

- **Moss.Man is blind.** It hears footsteps, sprinting, hydraulic doors, thrown stones, and core pickups.
- Walking is quiet; sprinting and knuckle-running are loud; crouching reduces your noise and lets you slip past.
- The threat meter shows how close its acoustic map is to you. A roar means it is closing in.
- You cannot outrun it: it reaches 33 km/h and turns at roughly half the agility of a normal pursuer. Break line of sound, crouch, or throw a stone to move its attention.
- Datapads scattered through the lab and jungle contain useful field notes. Medkits restore health.
- Rain, lightning, spores, fireflies, steam, sparks, and dust are all part of the presentation and the atmosphere.

## What is in the build

- Procedural pixel-art textures and flat-shaded voxel/low-poly assets, rendered at a reduced internal resolution with nearest-neighbour scaling.
- Metallic lab lobby with racks, beakers, terminals, hazard markings, animated hydraulic doors, and tactile switches on both sides of every frame.
- Hilly, sparsely forested exterior with beacon sites, ruins, logs, rocks, rain, and dynamic lightning.
- Animated ape player rig with upright walk, quadrupedal sprint, crouch, hill traversal, stamina, headlamp, and two camera modes.
- Fully procedural WebAudio soundscape: wind, rain, electrical hum, footsteps, hydraulic doors, roars, heartbeat, alarms, and UI cues.
- Desktop and mobile HUD, pause/settings, datapad reader, death and win screens.

## Tech

- Static HTML, CSS, and ES modules.
- Vendored [Three.js](https://threejs.org/) r170 and `BufferGeometryUtils`.
- No external art, audio, or network assets; all game content is generated at runtime or stored locally in the repository.

## Project links

<!-- omgithub:readme:start -->
- 🎮 [Open the project](https://omgithub.com/lusialimis-cell/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=lusialimis-cell%2FPlayGround).
- 💻 [Explore the source](https://github.com/lusialimis-cell/PlayGround).
- 🛠️ [Check build runs](https://github.com/lusialimis-cell/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/lusialimis-cell/PlayGround/issues).
<!-- omgithub:readme:end -->
