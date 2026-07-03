const projects = {
    "metaversal-madness": {
        title: "Metaversal Madness",
        genre: "3D Extraction Shooter",
        isUnity: false,
        category: "featured",
        video: "1foKAoog6reo2sJ59hgHWkvGpn_1NdBjz",
        cover: "images/covers/watermelongame.png",
        screenshots: 
        [
        "images/screenshots/MetaversalMadness-SS.png", 
        "images/screenshots/MetaversalMadness-SS2.png"
        ],
        bullets: 
        [
            "Networked multiplayer using the Gameplay Ability System & Lyra architecture",
            "Created modular system for streamlined Weapon/Ammo creation for scalability",
            "Diverse ability sets per weapon with ammo (similar to MOBA hero abilities)"
        ]
    },
    "watermelon-game": {
        title: "Watermelon Game",
        genre: "2D Physics Puzzle Game",
        isUnity: true,
        category: "featured",
        video: "1OZxwUGYhtrIsclI0FdJMEmU-QxiQe9OT",
        cover: "images/covers/watermelongame.png",
        screenshots: 
        [
        "images/screenshots/Watermelon-SS.png", 
        "images/screenshots/Watermelon-SS2.png"
        ],
        bullets: 
        [
            "25k+ unique players and 500k+ play sessions during alpha release",
            "Built core gameplay loop with the scriptable event and variable architecture",
            "Base game created from scratch within a week leveraging Suika Game hype"
        ]
    },
    "kekt-boss-rush":
    {
        title: "Kekt Boss Rush",
        genre: "2D Boss Rush Roguelite",
        isUnity: true,
        category: "featured",
        video: "1X-e0CKpcKETL5pZ4XRscbtHLqiJEuU_m",
        cover: "images/covers/kektbossrush.png",
        screenshots:
        [
            "images/screenshots/KBR-SS.png",   
            "images/screenshots/KBR-SS2.png",   
        ],
        bullets:
        [
            "2D side-scrolling combat with attacks, abilities and combos",
            "Base boss-rush game mode created within a game jam submission",
            "Rogue-lite wave mode added to enhance replayability and challenge"
        ]
    },
    "binary-shift":
    {
        title: "Binary Shift",
        genre: "2.5D/3D King of the Hill Game",
        isUnity: true,
        category: "featured",
        video: "1Cw3oV421RRAZmc2cc21iWaxNXl9w2Qy-",
        cover: "images/covers/binaryshift.png",
        screenshots:
        [
            "images/screenshots/BinaryShift-SS.png",   
            "images/screenshots/BinaryShift-SS2.png",   
        ],
        bullets:
        [
            "Base game created within a 1 week game jam",
            "Setup seamless world switching between 2.5D and 3D gameplay",
            "Implemented Unity Timeline for title animations"
        ]
    },
    "baby-dash":
    {
        title: "Baby Dash",
        genre: "3D Endless Runner",
        isUnity: true,
        category: "featured",
        video: "1Ao4uuckSC5jdVz2dMqTTvl7oiEjKrmZN",
        cover: "images/covers/babydash.png",
        screenshots:
        [
            "images/screenshots/BabyDash-SS.png",   
            "images/screenshots/BabyDash-SS2.png",   
        ],
        bullets:
        [
            "Refined player controller with improved drift and movement mechanics",
            "Added challenges and extra game modes to keep the gameplay fresh and engaging",
            "Adjusted track generator to allow for branching paths and forks"
        ]
    },
    "slimix-showdown":
    {
        title: "Slimix Showdown",
        genre: "2D Match-3 Puzzle Game",
        isUnity: true,
        category: "featured",
        video: "1hdVFnkEXev_RlOaWeYl-MQ7eU_uc1YOh",
        cover: "images/covers/slimix.png",
        screenshots:
        [
            "images/screenshots/Slimix-Ss.png",   
            "images/screenshots/Slimix-SS2.png",   
        ],
        bullets:
        [
            "Built core match-3 and Puyo-Puyo mechanics from the ground up",
            "Designed State Machine AIs for varying challenge levels",
            "Developed unique abilities to build depth, strategy and skill expression"
        ]
    },
    "blitzfire":
    {
        title: "Blitzfire",
        genre: "3D FPS Speedrunner",
        isUnity: true,
        category: "featured",
        video: "1P0ipyKBCkam4ApRFGAXROInleRD96ZhT",
        cover: "images/covers/blitzfire.png",
        screenshots:
        [
            "images/screenshots/Blitzfire-SS.png",
            "images/screenshots/Blitzfire-SS2.png",
        ],
        bullets:
        [
            "Refined shooting and platforming mechanics for speedrunning gameplay",
            "Designed and setup levels utilising gunplay and platforming",
            "Integrated cinemachine systems for level preview and results screenshots"
        ]
    },
/*!Prototypes*/ 
    "lightspeed-labyrinth":
    {
        title: "Lightspeed Labyrinth",
        genre: "3D Endless Space Shooter",
        isUnity: true,
        category: "prototype",
        video: "1Pk7o3-5Um1PkNt1BxfqH-H9WDnF18G4l",
        cover: "images/covers/lightspeed.png",
        screenshots:
        [
            "images/screenshots/Lightspeed-SS.png",
            "images/screenshots/Lightspeed-SS2.png",   
        ],
        bullets:
        [
            "Developed modular instructions system for scalability and feature expansion",
            "Used scriptable event and data architecture to avoid hard references",
            "Designed various level sections to use with a modular level stitcher"
        ]
    },
    "stoshi-world":
    {
        title: "Stoshi World",
        genre: "2D Platformer",
        isUnity: true,
        category: "prototype",
        video: "1K1__Xv2sINgA_vmOGKMaAUMnWUrZbgF-",
        cover: "images/covers/stoshiworld.png",
        screenshots:
        [
            "images/screenshots/StoshiWorld-SS.png",
            "images/screenshots/StoshiWorld-SS2.png",   
        ],
        bullets:
        [
            "Designed levels using Unity Tilemap painting for portions of 50+ levels",
            "Implemented multiple AI types to provide varied challenges per level set",
            "Extended Corgi Engine for custom platformer gameplay systems"
        ]
    },
    "pick-2":
    {
        title: "Pick 2",
        genre: "2D Battle Simulator/RTS",
        isUnity: true,
        category: "prototype",
        video: "1YAcQ_Hh0H4KnqPs_q57UgGppBTgS1vvA",
        cover: "images/covers/pick2.png",
        screenshots:
        [
            "images/screenshots/Pick2-SS.png",
            "images/screenshots/Pick2-SS2.png",
        ],
        bullets:
        [
            "Implemented GOAP based AI for units and abilities",
            "Designed RTS controls and camera for tactical gameplay",
            "Balanced gameplay using simulation tests and data analysis"
        ]
    },
    "wen-lambo":
    {
        title: "Wen Lambo",
        genre: "3D Endless Runner/Racer",
        isUnity: true,
        category: "prototype",
        video: "1-lzNbjYA0iN-SDaxccHIWuvZ_ob5vdAp",
        cover: "images/covers/wenlambo.png",
        screenshots:
        [
            "images/screenshots/WenLambo-SS.png",
            "images/screenshots/WenLambo-SS2.png",
        ],
        bullets:
        [
            "Mesh deformation and level generation with the Forever level generator",
            "Added multiple challenge modes for various scoring methods",
            "Polished driving feel with improved visual effects and user interface"
        ]
    },
    "stoshi-board":
    {
        title: "Stoshi Board",
        genre: "3D Obstacle Puzzle Game",
        isUnity: true,
        category: "prototype",
        video: "1zDtYHWh2Q3SlfBCJ4oL8Ut33UE7wiTWD",
        cover: "images/covers/stoshiboard.png",
        screenshots:
        [
            "images/screenshots/StoshiBoard-SS.png",
            "images/screenshots/StoshiBoard-SS2.png",
        ],
        bullets:
        [
            "Built dynamic UI and transitions for title and in-game UI",
            "Optimized game performance and build size for mobile compatibility",
            "Enhanced base gameplay with additional tricks and visual polish"
        ]
    },
    "stoshi-run":
    {
        title: "Stoshi Run",
        genre: "3D Endless Runner",
        isUnity: true,
        category: "prototype",
        video: "12CjTdiH9MxrvkRHHxDLMstmmlH_taOam",
        cover: "images/covers/stoshirun.png",
        screenshots:
        [
            "images/screenshots/StoshiRun-SS.png",
            "images/screenshots/StoshiRun-SS2.png",
        ],
        bullets:
        [
            "Refined player controller and collisions for parkour-style movements",
            "Designed multiple level sections using the Forever Level Generator",
            "Polished gameplay with particles, trails and sound effects"
        ]
    },
    "blockspace":
    {
        title: "Blockspace",
        genre: "2D Physics Puzzle Game",
        isUnity: true,
        category: "prototype",
        video: "1kP_tGkpvcogpbQmL0bSpY9uKR7T5XLzf",
        cover: "images/covers/blockspace.png",
        screenshots:
        [
            "images/screenshots/Blockspace-SS.png",
            "images/screenshots/Blockspace-SS2.png",
        ],
        bullets:
        [
            "Created game concept based on the 'Shape inside Hole' mechanic",
            "Designed and created levels with varying puzzle mechanics every few levels",
            "Timed based scoring model to stand out from other games on the platform"
        ]
    },
    "pwned":
    {
        title: "Pwned",
        genre: "3D FPS Aim Trainer",
        isUnity: true,
        category: "prototype",
        video: "1MEQsSVX4idU6fb17EaPmTNLS5hahGtf6",
        cover: "images/covers/pwned.png",
        screenshots:
        [
            "images/screenshots/Pwned-SS.png",
            "images/screenshots/Pwned-SS2.png",
        ],
        bullets:
        [
            "Analyzed and implemented CSGO AWP style for familiar style feel",
            "Designed scoring system factoring reaction time and accuracy",
            "UI transitions with charts utilising database saving and Unity Leaderboards"
        ]
    },
    "jetpack-galaxy-rush":
    {
        title: "Jetpack Galaxy Rush",
        genre: "2.5D Endless Sidescroller",
        isUnity: true,
        category: "prototype",
        video: "13bEn_bpe7eCG0XZBOtdSPeOMMzaey29s",
        cover: "images/covers/jetpack.png",
        screenshots:
        [
            "images/screenshots/Jetpack-SS.png",
            "images/screenshots/Jetpack-SS2.png",
        ],
        bullets:
        [
            "Designed sections with seamless level stitcher and varying obstacles",
            "Implemented State Machine AI bosses as checkpoints for score thresholds",
            "Built shooting and reload mechanics for skill-based gameplay expression"
        ]
    },
    "pandaboard-extreme":
    {
        title: "Pandaboard Extreme",
        genre: "3D Trick Snowboarder",
        isUnity: true,
        category: "prototype",
        video: "1K-_4uwskwn55TQh12wQWLOYGOLw3j7Gd",
        cover: "images/covers/pandaboard.png",
        screenshots:
        [
            "images/screenshots/Pandaboard-SS.png",
            "images/screenshots/Pandaboard-SS2.png",
        ],
        bullets:
        [
            "Designed and setup levels using the Unity Terrain System",
            "Refined player controller for a more immersive snowboarding feel",
            "Placed varying props to create scoring opportunities per level"
        ]
    },
    "silkroad":
    {
        title: "Silk Road",
        genre: "2D Simulation/Tycoon",
        isUnity: true,
        category: "prototype",
        video: "1irTx3CfpvJT9uckjE6Z7Y5m0gyMjAbpz",
        cover: "images/covers/silkroad.png",
        screenshots:
        [
            "images/screenshots/SilkRoad-SS.png",
            "images/screenshots/SilkRoad-SS2.png",
        ],
        bullets:
        [
            "Implemented Scriptable Event & Variable Architecture for decoupled coding",
            "Used Serialized References for efficient data and event management",
            "Improved UI with dynamic layouts, sliders and window transitions"
        ]
    },
    "fawkes":
    {
        title: "Fawkes",
        genre: "2D Artillery Puzzle Game",
        isUnity: true,
        category: "prototype",
        video: "1QdK_ljlJCejc59FhonpyonoiK7jvG2Fg",
        cover: "images/covers/fawkes.png",
        screenshots:
        [
            "images/screenshots/Fawkes-SS.png",
            "images/screenshots/Fawkes-SS2.png",
        ],
        bullets:
        [
            "Designed levels using Unity Spline Shapes for flexible layouts",
            "Implemented 2D Side-Scrolling & projectile movement mechanics",
            "Setup destructible terrain and sprites for dynamic interactions"
        ]
    },
    "tightrope":
    {
        title: "Tightrope",
        genre: "3D Endless Runner",
        isUnity: true,
        category: "prototype",
        video: "1YZRy--qSCWmcSs_SIYqg0aXsgcs_HxfC",
        cover: "images/covers/tightrope.png",
        screenshots:
        [
            "images/screenshots/Tightrope-SS.png",
            "images/screenshots/Tightrope-SS2.png",
        ],
        bullets:
        [
            "Project lead for game direction and task allocation",
            "Built level stitching system to combine mini-sections into endless sections",
            "Implemented collectable and progression systems for replayability"
        ]
    },
    "lost-in-transit":
    {
        title: "Lost in Transit",
        genre: "3D Strategy Puzzle Game",
        isUnity: true,
        category: "prototype",
        video: "1r3dmtTWRPJJnXLLcuY6s4HPKwOY-kp9C",
        cover: "images/covers/lostintransit.png",
        screenshots:
        [
            "images/screenshots/LostInTransit-SS.png",
            "images/screenshots/LostInTransit-SS2.png",
        ],
        bullets:
        [
            "Solo developed playable demo during a 1 week internal game jam",
            "Implemented scriptable data architecture for setting up multiple characters",
            "Designed multiple levels during new mechanics every few levels"
        ]
    },
    "bosh-the-bear":
    {
        title: "Bosh the Bear",
        genre: "3D Parkour Platformer",
        isUnity: true,
        category: "prototype",
        video: "1fjhOJfhu26HPyyD1vYEWCWHdCTfDXh9x",
        cover: "images/covers/bosh.png",
        screenshots:
        [
            "images/screenshots/Bosh-SS.png",
            "images/screenshots/Bosh-SS2.png",
        ],
        bullets:
        [
            "Refined character controller and climbing mechanics for smooth movement",
            "Designed and setup various sections for an endless vertical platformer",
            "Implemented cinemachine states for smooth camera transitions"
        ]
    },
}