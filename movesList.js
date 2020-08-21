let properties = require('./pokemonDetails.js');

const pokeMoves = {
    Growl:
        {
            name: "Growl",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 40,
            effect: "The user growls in an endearing way making opposing Pokémon less wary. This lowers their Attack stats."
        },
    Scratch:
        {
            name: "Scratch",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 35,
            effect: "Hard pointed sharp claws rake the target to inflict damage."
        },
    Ember:
        {
            name: "Ember",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is attacked with small flames. This may also leave the target with a burn."
        },
    Smokescreen:
        {
            name: "Smokescreen",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy."
        },
    DragonBreath:
        {
            name: "Dragon Breath",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis."
        },
    Slash:
        {
            name: "Slash",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "The target is attacked with a slash of claws or blades. Critical hits land more easily."
        },
    Flamethrower:
        {
            name: "Flamethrower",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 15,
            effect: "The target is scorched with an intense blast of fire. This may also leave the target with a burn."
        },
    ScaryFace:
        {
            name: "Scary Face",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user frightens the target with a scary face to harshly lower its Speed stat."
        },
    FireSpin:
        {
            name: "Fire Spin",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 35,
            accuracy: 85,
            powerPoints: 15,
            effect: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns."
        },
    Inferno:
        {
            name: "Inferno",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 100,
            accuracy: 50,
            powerPoints: 5,
            effect: "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn."
        },
    FlareBlitz:
        {
            name: "Flare Blitz",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn."
        },
    DragonClaw:
        {
            name: "Dragon Claw",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user slashes the target with huge sharp claws."
        },
    HeatWave:
        {
            name: "Heat Wave",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 95,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user attacks by exhaling hot breath on opposing Pokémon. This may also leave those Pokémon with a burn."
        },
    Tackle:
        {
            name: "Tackle",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 35,
            effect: "A physical attack in which the user charges and slams into the target with its whole body."
        },
    TailWhip:
        {
            name: "Tail Whip",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user wags its tail cutely making opposing Pokémon less wary and lowering their Defense stats."
        },
    WaterGun:
        {
            name: "Water Gun",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is blasted with a forceful shot of water."
        },
    Withdraw:
        {
            name: "Withdraw",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "The user withdraws its body into its hard shell raising its Defense stat."
        },
    RapidSpin:
        {
            name: "Rapid Spin",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 40,
            effect: "A spin attack that can also eliminate such moves as Bind Wrap and Leech Seed. This also raises the user's Speed stat."
        },
    Bite:
        {
            name: "Bite",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is bitten with viciously sharp fangs. This may also make the target flinch."
        },
    WaterPulse:
        {
            name: "Water Pulse",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user attacks the target with a pulsing blast of water. This may also confuse the target."
        },
    Protect:
        {
            name: "Protect",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession."
        },
    RainDance:
        {
            name: "Rain Dance",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user summons a heavy rain that falls for five turns powering up Water-type moves. It lowers the power of Fire-type moves."
        },
    AquaTail:
        {
            name: "Aqua Tail",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user attacks by swinging its tail as if it were a vicious wave in a raging storm."
        },
    ShellSmash:
        {
            name: "Shell Smash",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user breaks its shell which lowers Defense and Sp. Def stats but sharply raises its Attack Sp. Atk and Speed stats."
        },
    IronDefense:
        {
            name: "Iron Defense",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user hardens its body's surface like iron sharply raising its Defense stat."
        },
    HydroPump:
        {
            name: "Hydro Pump",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 110,
            accuracy: 80,
            powerPoints: 5,
            effect: "The target is blasted by a huge volume of water launched under great pressure."
        },
    SkullBash:
        {
            name: "Skull Bash",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 130,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user tucks in its head to raise its Defense stat on the first turn then rams the target on the next turn."
        },
    FlashCannon:
        {
            name: "Flash Cannon",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user gathers all its light energy and releases it all at once. This may also lower the target's Sp. Def stat."
        },
    StringShot:
        {
            name: "String Shot",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 95,
            powerPoints: 40,
            effect: "Opposing Pokémon are bound with silk blown from the user's mouth that harshly lowers the Speed stat."
        },
    BugBite:
        {
            name: "Bug Bite",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user bites the target. If the target is holding a Berry the user eats it and gains its effect."
        },
    Harden:
        {
            name: "Harden",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user stiffens all the muscles in its body to raise its Defense stat."
        },
    Gust:
        {
            name: "Gust",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 35,
            effect: "A gust of wind is whipped up by wings and launched at the target to inflict damage."
        },
    Supersonic:
        {
            name: "Supersonic",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 55,
            powerPoints: 20,
            effect: "The user generates odd sound waves from its body that confuse the target."
        },
    Confusion:
        {
            name: "Confusion",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 50,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is hit by a weak telekinetic force. This may also confuse the target."
        },
    PoisonPowder:
        {
            name: "Poison Powder",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 75,
            powerPoints: 35,
            effect: "The user scatters a cloud of poisonous dust that poisons the target."
        },
    StunSpore:
        {
            name: "Stun Spore",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 75,
            powerPoints: 30,
            effect: "The user scatters a cloud of numbing powder that paralyzes the target."
        },
    SleepPowder:
        {
            name: "Sleep Powder",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 75,
            powerPoints: 15,
            effect: "The user scatters a big cloud of sleep-inducing dust around the target."
        },
    Psybeam:
        {
            name: "Psybeam",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The target is attacked with a peculiar ray. This may also leave the target confused."
        },
    Whirlwind:
        {
            name: "Whirlwind",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The target is blown away and a different Pokémon is dragged out. In the wild this ends a battle against a single Pokémon."
        },
    Safeguard:
        {
            name: "Safeguard",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 25,
            effect: "The user creates a protective field that prevents status conditions for five turns."
        },
    BugBuzz:
        {
            name: "Bug Buzz",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user generates a damaging sound wave by vibration. This may also lower the target's Sp. Def stat."
        },
    Tailwind:
        {
            name: "Tailwind",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user whips up a turbulent whirlwind that ups the Speed stats of the user and its allies for four turns."
        },
    RagePowder:
        {
            name: "Rage Powder",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user scatters a cloud of irritating powder to draw attention to itself. Opposing Pokémon aim only at the user."
        },
    QuiverDance:
        {
            name: "Quiver Dance",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user lightly performs a beautiful mystic dance. This boosts the user's Sp. Atk Sp. Def and Speed stats."
        },
    PoisonSting:
        {
            name: "Poison Sting",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 100,
            powerPoints: 35,
            effect: "The user stabs the target with a poisonous stinger. This may also poison the target."
        },
    Twineedle:
        {
            name: "Twineedle",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 25,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user damages the target twice in succession by jabbing it with two spikes. This may also poison the target."
        },
    FuryAttack:
        {
            name: "Fury Attack",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 85,
            powerPoints: 20,
            effect: "The target is jabbed repeatedly with a horn or beak two to five times in a row."
        },
    Rage:
        {
            name: "Rage",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 20,
            accuracy: 100,
            powerPoints: 20,
            effect: "As long as this move is in use the power of rage raises the Attack stat each time the user is hit in battle."
        },
    Pursuit:
        {
            name: "Pursuit",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 20,
            effect: "The power of this attack move is doubled if it's used on a target that's switching out of battle."
        },
    FocusEnergy:
        {
            name: "Focus Energy",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user takes a deep breath and focuses so that critical hits land more easily."
        },
    Venoshock:
        {
            name: "Venoshock",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned."
        },
    Assurance:
        {
            name: "Assurance",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 10,
            effect: "If the target has already taken some damage in the same turn this attack's power is doubled."
        },
    ToxicSpikes:
        {
            name: "Toxic Spikes",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user lays a trap of poison spikes at the feet of the opposing team. The spikes will poison opposing Pokémon that switch into battle."
        },
    PinMissile:
        {
            name: "Pin Missile",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 25,
            accuracy: 95,
            powerPoints: 20,
            effect: "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row."
        },
    PoisonJab:
        {
            name: "Poison Jab",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 20,
            effect: "The target is stabbed with a tentacle arm or the like steeped in poison. This may also poison the target."
        },
    Agility:
        {
            name: "Agility",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user relaxes and lightens its body to move faster. This sharply raises the Speed stat."
        },
    Endeavor:
        {
            name: "Endeavor",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "This attack move cuts down the target's HP to equal the user's HP."
        },
    FellStinger:
        {
            name: "Fell Stinger",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 25,
            effect: "When the user knocks out a target with this move the user's Attack stat rises drastically."
        },
    SandAttack:
        {
            name: "Sand Attack",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "Sand is hurled in the target's face reducing the target's accuracy."
        },
    QuickAttack:
        {
            name: "Quick Attack",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user lunges at the target at a speed that makes it almost invisible. This move always goes first."
        },
    Twister:
        {
            name: "Twister",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 20,
            effect: "May cause flinching. Hits Pokémon using Fly/Bounce with double power."
        },
    FeatherDance:
        {
            name: "Feather Dance",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user covers the target's body with a mass of down that harshly lowers its Attack stat."
        },
    WingAttack:
        {
            name: "Wing Attack",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 35,
            effect: "The target is struck with large imposing wings spread wide to inflict damage."
        },
    Roost:
        {
            name: "Roost",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user lands and rests its body. This move restores the user's HP by up to half of its max HP."
        },
    MirrorMove:
        {
            name: "Mirror Move",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user counters the target by mimicking the target's last move."
        },
    AirSlash:
        {
            name: "Air Slash",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().special,
            power: 75,
            accuracy: 95,
            powerPoints: 15,
            effect: "The user attacks with a blade of air that slices even the sky. This may also make the target flinch."
        },
    Hurricane:
        {
            name: "Hurricane",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().special,
            power: 110,
            accuracy: 70,
            powerPoints: 10,
            effect: "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. This may also confuse the target."
        },
    HyperFang:
        {
            name: "Hyper Fang",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 90,
            powerPoints: 15,
            effect: "The user bites hard on the target with its sharp front fangs. This may also make the target flinch."
        },
    Crunch:
        {
            name: "Crunch",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user crunches up the target with sharp fangs. This may also lower the target's Defense stat."
        },
    SuckerPunch:
        {
            name: "Sucker Punch",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 5,
            effect: "This move enables the user to attack first. This move fails if the target is not readying an attack."
        },
    SuperFang:
        {
            name: "Super Fang",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half."
        },
    DoubleEdge:
        {
            name: "Double-Edge",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 15,
            effect: "A reckless life-risking tackle in which the user rushes the target. This also damages the user quite a lot."
        },
    SwordsDance:
        {
            name: "Swords Dance",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat."
        },
    Peck:
        {
            name: "Peck",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 35,
            accuracy: 100,
            powerPoints: 35,
            effect: "The target is jabbed with a sharply pointed beak or horn."
        },
    Leer:
        {
            name: "Leer",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user gives opposing Pokémon an intimidating leer that lowers the Defense stat."
        },
    AerialAce:
        {
            name: "Aerial Ace",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user confounds the target with speed then slashes. This attack never misses."
        },
    DrillPeck:
        {
            name: "Drill Peck",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 20,
            effect: "A corkscrewing attack that strikes the target with a sharp beak acting as a drill."
        },
    DrillRun:
        {
            name: "Drill Run",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 95,
            powerPoints: 10,
            effect: "The user crashes into its target while rotating its body like a drill. Critical hits land more easily."
        },
    Pluck:
        {
            name: "Pluck",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 35,
            accuracy: 100,
            powerPoints: 35,
            effect: "The user pecks the target. If the target is holding a Berry the user eats it and gains its effect."
        },
    Wrap:
        {
            name: "Wrap",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 90,
            powerPoints: 20,
            effect: "A long body vines or the like are used to wrap and squeeze the target for four to five turns."
        },
    Glare:
        {
            name: "Glare",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user intimidates the target with the pattern on its belly to cause paralysis."
        },
    Screech:
        {
            name: "Screech",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 85,
            powerPoints: 40,
            effect: "An earsplitting screech harshly lowers the target's Defense stat."
        },
    Acid:
        {
            name: "Acid",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "Opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stats."
        },
    Stockpile:
        {
            name: "Stockpile",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user charges up power and raises both its Defense and Sp. Def stats. The move can be used three times."
        },
    Swallow:
        {
            name: "Swallow",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The power stored using the move Stockpile is absorbed by the user to heal its HP. Storing more power heals more HP."
        },
    SpitUp:
        {
            name: "Spit Up",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The power stored using the move Stockpile is released at once in an attack. The more power is stored the greater the move's power."
        },
    AcidSpray:
        {
            name: "Acid Spray",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 25,
            effect: "The user spits fluid that works to melt the target. This harshly lowers the target's Sp. Def stat."
        },
    MudBomb:
        {
            name: "Mud Bomb",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 85,
            powerPoints: 10,
            effect: "The user launches a hard-packed mud ball to attack. This may also lower the target's accuracy."
        },
    GastroAcid:
        {
            name: "Gastro Acid",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability."
        },
    Belch:
        {
            name: "Belch",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 120,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user lets out a damaging belch at the target. The user must eat a held Berry to use this move."
        },
    Haze:
        {
            name: "Haze",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle."
        },
    Coil:
        {
            name: "Coil",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user coils up and concentrates. This raises its Attack and Defense stats as well as its accuracy."
        },
    GunkShot:
        {
            name: "Gunk Shot",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 80,
            powerPoints: 5,
            effect: "The user shoots filthy garbage at the target to attack. This may also poison the target."
        },
    IceFang:
        {
            name: "Ice Fang",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 95,
            powerPoints: 10,
            effect: "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen."
        },
    ThunderFang:
        {
            name: "Thunder Fang",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 95,
            powerPoints: 10,
            effect: "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis."
        },
    FireFang:
        {
            name: "Fire Fang",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 95,
            powerPoints: 15,
            effect: "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn."
        },
    PlayNice:
        {
            name: "Play Nice",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user and the target become friends and the target loses its will to fight. This lowers the target's Attack stat."
        },
    SweetKiss:
        {
            name: "Sweet Kiss",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 75,
            powerPoints: 10,
            effect: "The user kisses the target with a sweet angelic cuteness that causes confusion."
        },
    Nuzzle:
        {
            name: "Nuzzle",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().physical,
            power: 20,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis."
        },
    NastyPlot:
        {
            name: "Nasty Plot",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat."
        },
    Charm:
        {
            name: "Charm",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user gazes at the target rather charmingly making it less wary. This harshly lowers the target's Attack stat."
        },
    ThunderShock:
        {
            name: "Thunder Shock",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "A jolt of electricity crashes down on the target to inflict damage. This may also leave the target with paralysis."
        },
    ThunderWave:
        {
            name: "Thunder Wave",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 90,
            powerPoints: 20,
            effect: "The user launches a weak jolt of electricity that paralyzes the target."
        },
    DoubleTeam:
        {
            name: "Double Team",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "By moving rapidly the user makes illusory copies of itself to raise its evasiveness."
        },
    ElectroBall:
        {
            name: "Electro Ball",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user hurls an electric orb at the target. The faster the user is than the target the greater the move's power."
        },
    Feint:
        {
            name: "Feint",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 30,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves."
        },
    Spark:
        {
            name: "Spark",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user throws an electrically charged tackle at the target. This may also leave the target with paralysis."
        },
    Slam:
        {
            name: "Slam",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 75,
            powerPoints: 20,
            effect: "The target is slammed with a long tail vines or the like to inflict damage."
        },
    Discharge:
        {
            name: "Discharge",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis."
        },
    Thunderbolt:
        {
            name: "Thunderbolt",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 15,
            effect: "A strong electric blast crashes down on the target. This may also leave the target with paralysis."
        },
    LightScreen:
        {
            name: "Light Screen",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "A wondrous wall of light is put up to reduce damage from special attacks for five turns."
        },
    Thunder:
        {
            name: "Thunder",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 110,
            accuracy: 70,
            powerPoints: 10,
            effect: "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis."
        },
    ThunderPunch:
        {
            name: "Thunder Punch",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 100,
            powerPoints: 15,
            effect: "The target is punched with an electrified fist. This may also leave the target with paralysis."
        },
    Dig:
        {
            name: "Dig",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user burrows into the ground then attacks on the next turn."
        },
    Flash:
        {
            name: "Flash",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user flashes a bright light that cuts the target's accuracy."
        },
    RockSmash:
        {
            name: "Rock Smash",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks with a punch. This may also lower the target's Defense stat."
        },
    SecretPower:
        {
            name: "Secret Power",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "The additional effects of this attack depend upon where it was used."
        },
    Strength:
        {
            name: "Strength",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The target is slugged with a punch thrown at maximum power."
        },
    Captivate:
        {
            name: "Captivate",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "If any opposing Pokémon is the opposite gender of the user it is charmed which harshly lowers its Sp. Atk stat."
        },
    NaturalGift:
        {
            name: "Natural Gift",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user draws power to attack by using its held Berry. The Berry determines the move's type and power."
        },
    DefenseCurl:
        {
            name: "Defense Curl",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "The user curls up to conceal weak spots and raise its Defense stat."
        },
    Bide:
        {
            name: "Bide",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 0,
            powerPoints: 10,
            effect: "The user endures attacks for two turns then strikes back to cause double the damage taken."
        },
    PowderSnow:
        {
            name: "Powder Snow",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 25,
            effect: "The user attacks with a chilling gust of powdery snow. This may also freeze opposing Pokémon."
        },
    IceBall:
        {
            name: "Ice Ball",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 30,
            accuracy: 90,
            powerPoints: 20,
            effect: "The user attacks the target for five turns. The move's power increases each time it hits."
        },
    MetalClaw:
        {
            name: "Metal Claw",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 95,
            powerPoints: 35,
            effect: "The target is raked with steel claws. This may also raise the user's Attack stat."
        },
    Swift:
        {
            name: "Swift",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 101,
            powerPoints: 20,
            effect: "Star-shaped rays are shot at opposing Pokémon. This attack never misses."
        },
    FuryCutter:
        {
            name: "Fury Cutter",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 95,
            powerPoints: 20,
            effect: "The target is slashed with scythes or claws. This attack becomes more powerful if it hits in succession."
        },
    FurySwipes:
        {
            name: "Fury Swipes",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 18,
            accuracy: 80,
            powerPoints: 15,
            effect: "The target is raked with sharp claws or scythes quickly two to five times in a row."
        },
    IronHead:
        {
            name: "Iron Head",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user slams the target with its steel-hard head. This may also make the target flinch."
        },
    GyroBall:
        {
            name: "Gyro Ball",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user tackles the target with a high-speed spin. The slower the user compared to the target the greater the move's power."
        },
    Hail:
        {
            name: "Hail",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user summons a hailstorm lasting five turns. It damages all Pokémon except Ice types."
        },
    Blizzard:
        {
            name: "Blizzard",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 110,
            accuracy: 70,
            powerPoints: 5,
            effect: "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen."
        },
    CrushClaw:
        {
            name: "Crush Claw",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 95,
            powerPoints: 10,
            effect: "The user slashes the target with hard and sharp claws. This may also lower the target's Defense stat."
        },
    Rollout:
        {
            name: "Rollout",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().physical,
            power: 30,
            accuracy: 90,
            powerPoints: 20,
            effect: "The user continually rolls into the target over five turns. It becomes more powerful each time it hits."
        },
    Magnitude:
        {
            name: "Magnitude",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user attacks everything around it with a ground-shaking quake. Its power varies."
        },
    SandTomb:
        {
            name: "Sand Tomb",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 35,
            accuracy: 85,
            powerPoints: 15,
            effect: "The user traps the target inside a harshly raging sandstorm for four to five turns."
        },
    Sandstorm:
        {
            name: "Sandstorm",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "A five-turn sandstorm is summoned to hurt all combatants except Rock Ground and Steel types. It raises the Sp. Def stat of Rock types."
        },
    Earthquake:
        {
            name: "Earthquake",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user sets off an earthquake that strikes every Pokémon around it."
        },
    DoubleKick:
        {
            name: "Double Kick",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 30,
            accuracy: 100,
            powerPoints: 30,
            effect: "The target is quickly kicked twice in succession using both feet."
        },
    HelpingHand:
        {
            name: "Helping Hand",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user assists an ally by boosting the power of that ally's attack."
        },
    Flatter:
        {
            name: "Flatter",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "Flattery is used to confuse the target. However this also raises the target's Sp. Atk stat."
        },
    PoisonFang:
        {
            name: "Poison Fang",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user bites the target with toxic fangs. This may also leave the target badly poisoned."
        },
    ChipAway:
        {
            name: "Chip Away",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "Looking for an opening the user strikes consistently. The target's stat changes don't affect this attack's damage."
        },
    BodySlam:
        {
            name: "Body Slam",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 85,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user drops onto the target with its full body weight. This may also leave the target with paralysis."
        },
    EarthPower:
        {
            name: "Earth Power",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat."
        },
    Superpower:
        {
            name: "Superpower",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user attacks the target with great power. However this also lowers the user's Attack and Defense stats."
        },
    HornAttack:
        {
            name: "Horn Attack",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is jabbed with a sharply pointed horn to inflict damage."
        },
    HornDrill:
        {
            name: "Horn Drill",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 30,
            powerPoints: 5,
            effect: "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits."
        },
    Thrash:
        {
            name: "Thrash",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user rampages and attacks for two to three turns. The user then becomes confused."
        },
    Megahorn:
        {
            name: "Megahorn",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 85,
            powerPoints: 10,
            effect: "Using its tough and impressive horn the user rams into the target with no letup."
        },
    Sing:
        {
            name: "Sing",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 55,
            powerPoints: 15,
            effect: "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber."
        },
    DisarmingVoice:
        {
            name: "Disarming Voice",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 101,
            powerPoints: 15,
            effect: "Letting out a charming cry the user does emotional damage to opposing Pokémon. This attack never misses."
        },
    Encore:
        {
            name: "Encore",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user compels the target to keep using the move it encored for three turns."
        },
    Splash:
        {
            name: "Splash",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "The user just flops and splashes around to no effect at all..."
        },
    Pound:
        {
            name: "Pound",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 35,
            effect: "The target is physically pounded with a long tail a foreleg or the like."
        },
    Copycat:
        {
            name: "Copycat",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user mimics the move used immediately before it. The move fails if no other move has been used yet."
        },
    StoredPower:
        {
            name: "Stored Power",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 20,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user attacks the target with stored power. The more the user's stats are raised the greater the move's power."
        },
    Minimize:
        {
            name: "Minimize",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user compresses its body to make itself look smaller which sharply raises its evasiveness."
        },
    AfterYou:
        {
            name: "After You",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user helps the target and makes it use its move right after the user."
        },
    LifeDew:
        {
            name: "Life Dew",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user scatters mysterious water around and restores the HP of itself and its ally Pokémon in the battle."
        },
    Metronome:
        {
            name: "Metronome",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user waggles a finger and stimulates its brain into randomly using nearly any move."
        },
    Moonlight:
        {
            name: "Moonlight",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user restores its own HP. The amount of HP regained varies with the weather."
        },
    Gravity:
        {
            name: "Gravity",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "This move enables Flying-type Pokémon or Pokémon with the Levitate Ability to be hit by Ground-type moves. Moves that involve flying can't be used."
        },
    MeteorMash:
        {
            name: "Meteor Mash",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 90,
            powerPoints: 10,
            effect: "The target is hit with a hard punch fired like a meteor. This may also raise the user's Attack stat."
        },
    FollowMe:
        {
            name: "Follow Me",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user draws attention to itself making all targets take aim only at the user."
        },
    CosmicPower:
        {
            name: "Cosmic Power",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user absorbs a mystical power from space to raise its Defense and Sp. Def stats."
        },
    Moonblast:
        {
            name: "Moonblast",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().special,
            power: 95,
            accuracy: 100,
            powerPoints: 15,
            effect: "Borrowing the power of the moon the user attacks the target. This may also lower the target's Sp. Atk stat."
        },
    HealingWish:
        {
            name: "Healing Wish",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user faints. In return the Pokémon taking its place will have its HP restored and status conditions cured."
        },
    Disable:
        {
            name: "Disable",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "For four turns this move prevents the target from using the move it last used."
        },
    Spite:
        {
            name: "Spite",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it."
        },
    Incinerate:
        {
            name: "Incinerate",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item such as a Berry the item becomes burned up and unusable."
        },
    ConfuseRay:
        {
            name: "Confuse Ray",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The target is exposed to a sinister ray that triggers confusion."
        },
    WillOWisp:
        {
            name: "Will-O-Wisp",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 85,
            powerPoints: 15,
            effect: "The user shoots a sinister flame at the target to inflict a burn."
        },
    Extrasensory:
        {
            name: "Extrasensory",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user attacks with an odd unseeable power. This may also make the target flinch."
        },
    Imprison:
        {
            name: "Imprison",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "If opposing Pokémon know any move also known by the user they are prevented from using it."
        },
    Grudge:
        {
            name: "Grudge",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "If the user faints the user's grudge fully depletes the PP of the opponent's move that knocked it out."
        },
    FireBlast:
        {
            name: "Fire Blast",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 110,
            accuracy: 85,
            powerPoints: 5,
            effect: "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn."
        },
    DoubleSlap:
        {
            name: "Double Slap",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 85,
            powerPoints: 10,
            effect: "The target is slapped repeatedly back and forth two to five times in a row."
        },
    Round:
        {
            name: "Round",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks the target with a song. Others can join in the Round to increase the power of the attack."
        },
    WakeUpSlap:
        {
            name: "Wake-Up Slap",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack inflicts big damage on a sleeping target. This also wakes the target up however."
        },
    Rest:
        {
            name: "Rest",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user goes to sleep for two turns. This fully restores the user's HP and heals any status conditions."
        },
    Mimic:
        {
            name: "Mimic",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user copies the target's last move. The move can be used during battle until the Pokémon is switched out."
        },
    HyperVoice:
        {
            name: "Hyper Voice",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user lets loose a horribly echoing shout with the power to inflict damage."
        },
    PlayRough:
        {
            name: "Play Rough",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user plays rough with the target and attacks it. This may also lower the target's Attack stat."
        },
    Absorb:
        {
            name: "Absorb",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 20,
            accuracy: 100,
            powerPoints: 25,
            effect: "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target."
        },
    Astonish:
        {
            name: "Astonish",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().physical,
            power: 30,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks the target while shouting in a startling fashion. This may also make the target flinch."
        },
    AirCutter:
        {
            name: "Air Cutter",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 95,
            powerPoints: 25,
            effect: "The user launches razor-like wind to slash opposing Pokémon. Critical hits land more easily."
        },
    MeanLook:
        {
            name: "Mean Look",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user pins the target with a dark arresting look. The target becomes unable to flee."
        },
    LeechLife:
        {
            name: "Leech Life",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user drains the target's blood. The user's HP is restored by half the damage taken by the target."
        },
    QuickGuard:
        {
            name: "Quick Guard",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user protects itself and its allies from priority moves."
        },
    Growth:
        {
            name: "Growth",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user's body grows all at once raising the Attack and Sp. Atk stats."
        },
    SweetScent:
        {
            name: "Sweet Scent",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "A sweet scent that harshly lowers opposing Pokémon's evasiveness."
        },
    MegaDrain:
        {
            name: "Mega Drain",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 15,
            effect: "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target."
        },
    GigaDrain:
        {
            name: "Giga Drain",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 75,
            accuracy: 100,
            powerPoints: 10,
            effect: "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target."
        },
    Toxic:
        {
            name: "Toxic",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 90,
            powerPoints: 10,
            effect: "A move that leaves the target badly poisoned. Its poison damage worsens every turn."
        },
    GrassyTerrain:
        {
            name: "Grassy Terrain",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user turns the ground to grass for five turns. This restores the HP of Pokémon on the ground a little every turn and powers up Grass-type moves."
        },
    PetalDance:
        {
            name: "Petal Dance",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 120,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user attacks the target by scattering petals for two to three turns. The user then becomes confused."
        },
    PetalBlizzard:
        {
            name: "Petal Blizzard",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user stirs up a violent petal blizzard and attacks everything around it."
        },
    Aromatherapy:
        {
            name: "Aromatherapy",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user releases a soothing scent that heals all status conditions affecting the user's party."
        },
    Spore:
        {
            name: "Spore",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user scatters bursts of spores that induce sleep."
        },
    XScissor:
        {
            name: "X-Scissor",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors."
        },
    CrossPoison:
        {
            name: "Cross Poison",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "A slashing attack with a poisonous blade that may also poison the target. Critical hits land more easily."
        },
    Foresight:
        {
            name: "Foresight",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "Enables a Ghost-type target to be hit by Normal- and Fighting-type attacks. This also enables an evasive target to be hit."
        },
    SignalBeam:
        {
            name: "Signal Beam",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().special,
            power: 75,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks with a sinister beam of light. This may also confuse the target."
        },
    ZenHeadbutt:
        {
            name: "Zen Headbutt",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 90,
            powerPoints: 15,
            effect: "The user focuses its willpower to its head and attacks the target. This may also make the target flinch."
        },
    Psychic:
        {
            name: "Psychic",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat."
        },
    SilverWind:
        {
            name: "Silver Wind",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 5,
            effect: "The target is attacked with powdery scales blown by the wind. This may also raise all the user's stats."
        },
    MudSlap:
        {
            name: "Mud-Slap",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().special,
            power: 20,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user hurls mud in the target's face to inflict damage and lower its accuracy."
        },
    Bulldoze:
        {
            name: "Bulldoze",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit."
        },
    Fissure:
        {
            name: "Fissure",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 30,
            powerPoints:  5,
            effect: "The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits."
        },
    NightSlash:
        {
            name: "Night Slash",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user slashes the target the instant an opportunity arises. Critical hits land more easily."
        },
    TriAttack:
        {
            name: "Tri Attack",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user strikes with a simultaneous three-beam attack. This may also burn freeze or paralyze the target."
        },
    FakeOut:
        {
            name: "Fake Out",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle."
        },
    PayDay:
        {
            name: "Pay Day",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 20,
            effect: "Numerous coins are hurled at the target to inflict damage. Money is earned after the battle."
        },
    Taunt:
        {
            name: "Taunt",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is taunted into a rage that allows it to use only attack moves for three turns."
        },
    PowerGem:
        {
            name: "Power Gem",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user attacks with a ray of light that sparkles as if it were made of gemstones."
        },
    Switcheroo:
        {
            name: "Switcheroo",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user trades held items with the target faster than the eye can follow."
        },
    Howl:
        {
            name: "Howl",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "The user howls loudly to raise the spirit of itself and allies. This raises their Attack stats."
        },
    FlameWheel:
        {
            name: "Flame Wheel",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 25,
            effect: "The user cloaks itself in fire and charges at the target. This may also leave the target with a burn."
        },
    Retaliate:
        {
            name: "Retaliate",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user gets revenge for a fainted ally. If an ally fainted in the previous turn this move's power is increased."
        },
    TakeDown:
        {
            name: "Take Down",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 85,
            powerPoints: 20,
            effect: "A reckless full-body charge attack for slamming into the target. This also damages the user a little."
        },
    Roar:
        {
            name: "Roar",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The target is scared off and a different Pokémon is dragged out. In the wild this ends a battle against a single Pokémon."
        },
    Reversal:
        {
            name: "Reversal",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "An all-out attack that becomes more powerful the less HP the user has."
        },
    WaterSport:
        {
            name: "Water Sport",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user soaks the battlefield with water. This weakens Fire-type moves for five turns."
        },
    Soak:
        {
            name: "Soak",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user shoots a torrent of water at the target and changes the target's type to Water."
        },
    PsychUp:
        {
            name: "Psych Up",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user hypnotizes itself into copying any stat change made by the target."
        },
    Amnesia:
        {
            name: "Amnesia",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user temporarily empties its mind to forget its concerns. This sharply raises the user's Sp. Def stat."
        },
    WonderRoom:
        {
            name: "Wonder Room",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints:10,
            effect: "The user creates a bizarre area in which Pokémon's Defense and Sp. Def stats are swapped for five turns."
        },
    MeFirst:
        {
            name: "Me First",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user cuts ahead of the target to copy and use the target's intended move with greater power. This move fails if it isn't used first."
        },
    AquaJet:
        {
            name: "Aqua Jet",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user lunges at the target at a speed that makes it almost invisible. This move always goes first."
        },
    Covet:
        {
            name: "Covet",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 25,
            effect: "The user endearingly approaches the target then steals the target's held item."
        },
    LowKick:
        {
            name: "Low Kick",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "A powerful low kick that makes the target fall over. The heavier the target the greater the move's power."
        },
    KarateChop:
        {
            name: "Karate Chop",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is attacked with a sharp chop. Critical hits land more easily."
        },
    SeismicToss:
        {
            name: "Seismic Toss",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The target is thrown using the power of gravity. It inflicts damage equal to the user's level."
        },
    Swagger:
        {
            name: "Swagger",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 85,
            powerPoints: 15,
            effect: "The user enrages and confuses the target. However this also sharply raises the target's Attack stat."
        },
    CrossChop:
        {
            name: "Cross Chop",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 80,
            powerPoints: 5,
            effect: "The user delivers a double chop with its forearms crossed. Critical hits land more easily."
        },
    Punishment:
        {
            name: "Punishment",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 5,
            effect: "The more the target has powered up with stat changes the greater the move's power."
        },
    CloseCombat:
        {
            name: "Close Combat",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user fights the target up close without guarding itself. This also lowers the user's Defense and Sp. Def stats."
        },
    StompingTantrum:
        {
            name: "Stomping Tantrum",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 100,
            powerPoints: 10,
            effect: "Driven by frustration the user attacks the target. If the user's previous move has failed the power of this move doubles."
        },
    FinalGambit:
        {
            name: "Final Gambit",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user risks everything to attack its target. The user faints but does damage equal to its HP."
        },
    Fling:
        {
            name: "Fling",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user flings its held item at the target to attack. This move's power and effects depend on the item."
        },
    ExtremeSpeed:
        {
            name: "Extreme Speed",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user charges the target at blinding speed. This move always goes first."
        },
    BurnUp:
        {
            name: "Burn Up",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 130,
            accuracy: 100,
            powerPoints: 5,
            effect: "To inflict massive damage the user burns itself out. After using this move the user will no longer be Fire type."
        },
    Hypnosis:
        {
            name: "Hypnosis",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 60,
            powerPoints: 20,
            effect: "The user employs hypnotic suggestion to make the target fall into a deep sleep."
        },
    Bubble:
        {
            name: "Bubble",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "A spray of countless bubbles is jetted at the opposing Pokémon. This may also lower their Speed stat."
        },
    BubbleBeam:
        {
            name: "Bubble Beam",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "A spray of bubbles is forcefully ejected at the target. This may also lower the target's Speed stat."
        },
    MudShot:
        {
            name: "Mud Shot",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().special,
            power: 55,
            accuracy: 95,
            powerPoints: 15,
            effect: "The user attacks by hurling a blob of mud at the target. This also lowers the target's Speed stat."
        },
    BellyDrum:
        {
            name: "Belly Drum",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user maximizes its Attack stat in exchange for HP equal to half its max HP."
        },
    Submission:
        {
            name: "Submission",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 80,
            powerPoints: 20,
            effect: "The user grabs the target and recklessly dives for the ground. This also damages the user a little."
        },
    CircleThrow:
        {
            name: "Circle Throw",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 90,
            powerPoints: 10,
            effect: "The target is thrown and a different Pokémon is dragged out. In the wild this ends a battle against a single Pokémon."
        },
    DynamicPunch:
        {
            name: "Dynamic Punch",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 50,
            powerPoints: 5,
            effect: "The user punches the target with full concentrated power. This confuses the target if it hits."
        },
    MindReader:
        {
            name: "Mind Reader",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user senses the target's movements with its mind to ensure its next attack does not miss the target."
        },
    Teleport:
        {
            name: "Teleport",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user switches places with a party Pokémon in waiting if any. If a wild Pokémon uses this move it flees."
        },
    MiracleEye:
        {
            name: "Miracle Eye",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "Enables a Dark-type target to be hit by Psychic-type attacks. This also enables an evasive target to be hit."
        },
    Reflect:
        {
            name: "Reflect",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "A wondrous wall of light is put up to reduce damage from physical attacks for five turns."
        },
    PsychoCut:
        {
            name: "Psycho Cut",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user tears at the target with blades formed by psychic power. Critical hits land more easily."
        },
    Recover:
        {
            name: "Recover",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "Restoring its own cells the user restores its own HP by half of its max HP."
        },
    Telekinesis:
        {
            name: "Telekinesis",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user makes the target float with its psychic power. The target is easier to hit for three turns."
        },
    AllySwitch:
        {
            name: "Ally Switch",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user teleports using a strange power and switches places with one of its allies."
        },
    RolePlay:
        {
            name: "Role Play",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user mimics the target completely copying the target's Ability."
        },
    FutureSight:
        {
            name: "Future Sight",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 120,
            accuracy: 100,
            powerPoints: 10,
            effect: "Two turns after this move is used a hunk of psychic energy attacks the target."
        },
    Trick:
        {
            name: "Trick",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user catches the target off guard and swaps its held item with its own."
        },
    Kinesis:
        {
            name: "Kinesis",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 80,
            powerPoints: 15,
            effect: "The user distracts the target by bending a spoon. This lowers the target's accuracy."
        },
    CalmMind:
        {
            name: "Calm Mind",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats."
        },
    LowSweep:
        {
            name: "Low Sweep",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user makes a swift attack on the target's legs which lowers the target's Speed stat."
        },
    Revenge:
        {
            name: "Revenge",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack move's power is doubled if the user has been hurt by the opponent in the same turn."
        },
    KnockOff:
        {
            name: "Knock Off",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user slaps down the target's held item and that item can't be used in that battle. The move does more damage if the target has a held item."
        },
    VitalThrow:
        {
            name: "Vital Throw",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 101,
            powerPoints: 10,
            effect: "User attacks last but ignores Accuracy and Evasiveness."
        },
    DualChop:
        {
            name: "Dual Chop",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 90,
            powerPoints: 15,
            effect: "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row."
        },
    BulkUp:
        {
            name: "Bulk Up",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user tenses its muscles to bulk up its body raising both its Attack and Defense stats."
        },
    WideGuard:
        {
            name: "Wide Guard",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user and its allies are protected from wide-ranging attacks for one turn."
        },
    VineWhip:
        {
            name: "Vine Whip",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 45,
            accuracy: 100,
            powerPoints: 25,
            effect: "The target is struck with slender whiplike vines to inflict damage."
        },
    RazorLeaf:
        {
            name: "Razor Leaf",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 55,
            accuracy: 95,
            powerPoints: 25,
            effect: "Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily."
        },
    WringOut:
        {
            name: "Wring Out",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user powerfully wrings the target. The more HP the target has the greater the move's power."
        },
    LeafTornado:
        {
            name: "Leaf Tornado",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy."
        },
    LeafStorm:
        {
            name: "Leaf Storm",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 130,
            accuracy: 90,
            powerPoints: 5,
            effect: "The user whips up a storm of leaves around the target. The attack's recoil harshly lowers the user's Sp. Atk stat."
        },
    LeafBlade:
        {
            name: "Leaf Blade",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily."
        },
    Constrict:
        {
            name: "Constrict",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 10,
            accuracy: 100,
            powerPoints: 35,
            effect: "The target is attacked with long creeping tentacles vines or the like. This may also lower the target's Speed stat."
        },
    Barrier:
        {
            name: "Barrier",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user throws up a sturdy wall that sharply raises its Defense stat."
        },
    Brine:
        {
            name: "Brine",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 10,
            effect: "If the target's HP is half or less this attack will hit with double the power."
        },
    Hex:
        {
            name: "Hex",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 10,
            effect: "This relentless attack does massive damage to a target affected by status conditions."
        },
    SludgeWave:
        {
            name: "Sludge Wave",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 95,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those hit."
        },
    ReflectType:
        {
            name: "Reflect Type",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user reflects the target's type making the user the same type as the target."
        },
    MudSport:
        {
            name: "Mud Sport",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user kicks up mud on the battlefield. This weakens Electric-type moves for five turns."
        },
    RockPolish:
        {
            name: "Rock Polish",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user polishes its body to reduce drag. This sharply raises the Speed stat."
        },
    RockThrow:
        {
            name: "Rock Throw",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 90,
            powerPoints: 15,
            effect: "The user picks up and throws a small rock at the target to attack."
        },
    SmackDown:
        {
            name: "Smack Down",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user throws a stone or similar projectile to attack the target. A flying Pokémon will fall to the ground when it's hit."
        },
    SelfDestruct:
        {
            name: "Self-Destruct",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 200,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user attacks everything around it by causing an explosion. The user faints upon using this move."
        },
    StealthRock:
        {
            name: "Stealth Rock",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user lays a trap of levitating stones around the opposing team. The trap hurts opposing Pokémon that switch into battle."
        },
    RockBlast:
        {
            name: "Rock Blast",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().physical,
            power: 25,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user hurls hard rocks at the target. Two to five rocks are launched in a row."
        },
    Explosion:
        {
            name: "Explosion",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 250,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move."
        },
    StoneEdge:
        {
            name: "Stone Edge",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 80,
            powerPoints: 5,
            effect: "The user stabs the target from below with sharpened stones. Critical hits land more easily."
        },
    Charge:
        {
            name: "Charge",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user boosts the power of the Electric move it uses on the next turn. This also raises the user's Sp. Def stat."
        },
    HeavySlam:
        {
            name: "Heavy Slam",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user slams into the target with its heavy body. The more the user outweighs the target the greater the move's power."
        },
    Steamroller:
        {
            name: "Steamroller",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user crushes its target by rolling over the target with its rolled-up body. This may also make the target flinch."
        },
    FlameCharge:
        {
            name: "Flame Charge",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 20,
            effect: "Cloaking itself in flame the user attacks the target. Then building up more power the user raises its Speed stat."
        },
    Stomp:
        {
            name: "Stomp",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The target is stomped with a big foot. This may also make the target flinch."
        },
    SmartStrike:
        {
            name: "Smart Strike",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user stabs the target with a sharp horn. This attack never misses."
        },
    Curse:
        {
            name: "Curse",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "A move that works differently for the Ghost type than for all other types."
        },
    Yawn:
        {
            name: "Yawn",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn."
        },
    Headbutt:
        {
            name: "Headbutt",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch."
        },
    Surf:
        {
            name: "Surf",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks everything around it by swamping its surroundings with a giant wave."
        },
    SlackOff:
        {
            name: "Slack Off",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user slacks off restoring its own HP by up to half of its max HP."
        },
    HealPulse:
        {
            name: "Heal Pulse",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user emits a healing pulse that restores the target's HP by up to half of its max HP."
        },
    MagnetBomb:
        {
            name: "Magnet Bomb",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user launches steel bombs that stick to the target. This attack never misses."
        },
    SonicBoom:
        {
            name: "Sonic Boom",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 90,
            powerPoints: 20,
            effect: "The target is hit with a destructive shock wave that always inflicts 20 HP damage."
        },
    MirrorShot:
        {
            name: "Mirror Shot",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 85,
            powerPoints: 10,
            effect: "The user lets loose a flash of energy at the target from its polished body. This may also lower the target's accuracy."
        },
    MetalSound:
        {
            name: "Metal Sound",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 85,
            powerPoints: 40,
            effect: "A horrible sound like scraping metal harshly lowers the target's Sp. Def stat."
        },
    LockOn:
        {
            name: "Lock-On",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user takes sure aim at the target. This ensures the next attack does not miss the target."
        },
    MagnetRise:
        {
            name: "Magnet Rise",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user levitates using electrically generated magnetism for five turns."
        },
    ZapCannon:
        {
            name: "Zap Cannon",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 120,
            accuracy: 50,
            powerPoints: 5,
            effect: "The user fires an electric blast like a cannon to inflict damage and cause paralysis."
        },
    ElectricTerrain:
        {
            name: "Electric Terrain",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user electrifies the ground for five turns powering up Electric-type moves. Pokémon on the ground no longer fall asleep."
        },
    Cut:
        {
            name: "Cut",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 95,
            powerPoints: 30,
            effect: "The target is cut with a scythe or claw."
        },
    FalseSwipe:
        {
            name: "False Swipe",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 40,
            effect: "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP."
        },
    BraveBird:
        {
            name: "Brave Bird",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user tucks in its wings and charges from a low altitude. This also damages the user quite a lot."
        },
    DoubleHit:
        {
            name: "Double Hit",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 35,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user slams the target with a long tail vines or a tentacle. The target is hit twice in a row."
        },
    Uproar:
        {
            name: "Uproar",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user attacks in an uproar for three turns. During that time no Pokémon can fall asleep."
        },
    Acupressure:
        {
            name: "Acupressure",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user applies pressure to stress points sharply boosting one of its or its allies' stats."
        },
    JumpKick:
        {
            name: "Jump Kick",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 95,
            powerPoints: 10,
            effect: "The user jumps up high then strikes with a kick. If the kick misses the user hurts itself."
        },
    IcyWind:
        {
            name: "Icy Wind",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 95,
            powerPoints: 15,
            effect: "The user attacks with a gust of chilled air. This also lowers opposing Pokémon's Speed stats."
        },
    IceShard:
        {
            name: "Ice Shard",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first."
        },
    AquaRing:
        {
            name: "Aqua Ring",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user envelops itself in a veil made of water. It regains some HP every turn."
        },
    AuroraBeam:
        {
            name: "Aurora Beam",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat."
        },
    Dive:
        {
            name: "Dive",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "Diving on the first turn the user floats up and attacks on the next turn."
        },
    IceBeam:
        {
            name: "Ice Beam",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "The target is struck with an icy-cold beam of energy. This may also leave the target frozen."
        },
    SheerCold:
        {
            name: "Sheer Cold",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 30,
            powerPoints: 5,
            effect: "The target faints instantly. It's less likely to hit the target if it's used by Pokémon other than Ice types."
        },
    PoisonGas:
        {
            name: "Poison Gas",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 90,
            powerPoints: 40,
            effect: "A cloud of poison gas is sprayed in the face of opposing Pokémon poisoning those it hits."
        },
    AcidArmor:
        {
            name: "Acid Armor",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user alters its cellular structure to liquefy itself sharply raising its Defense stat."
        },
    Memento:
        {
            name: "Memento",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user faints when using this move. In return this harshly lowers the target's Attack and Sp. Atk stats."
        },
    VenomDrench:
        {
            name: "Venom Drench",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "Opposing Pokémon are drenched in an odd poisonous liquid. This lowers the Attack Sp. Atk and Speed stats of a poisoned target."
        },
    RazorShell:
        {
            name: "Razor Shell",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 95,
            powerPoints: 10,
            effect: "The user cuts its target with sharp shells. This may also lower the target's Defense stat."
        },
    IcicleSpear:
        {
            name: "Icicle Spear",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 25,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user launches sharp icicles at the target two to five times in a row."
        },
    IcicleCrash:
        {
            name: "Icicle Crash",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 85,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user attacks by harshly dropping large icicles onto the target. This may also make the target flinch."
        },
    Spikes:
        {
            name: "Spikes",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user lays a trap of spikes at the opposing team's feet. The trap hurts Pokémon that switch into battle."
        },
    Lick:
        {
            name: "Lick",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().physical,
            power: 30,
            accuracy: 100,
            powerPoints: 30,
            effect: "The target is licked with a long tongue causing damage. This may also leave the target with paralysis."
        },
    Payback:
        {
            name: "Payback",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user stores power then attacks. If the user moves after the target this attack's power will be doubled."
        },
    NightShade:
        {
            name: "Night Shade",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level."
        },
    DarkPulse:
        {
            name: "Dark Pulse",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch."
        },
    ShadowBall:
        {
            name: "Shadow Ball",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user hurls a shadowy blob at the target. This may also lower the target's Sp. Def stat."
        },
    DestinyBond:
        {
            name: "Destiny Bond",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "After using this move if the user faints the Pokémon that landed the knockout hit also faints. Its chance of failing rises if it is used in succession."
        },
    DreamEater:
        {
            name: "Dream Eater",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 100,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user eats the dreams of a sleeping target. The user's HP is restored by half the damage taken by the target."
        },
    ShadowPunch:
        {
            name: "Shadow Punch",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user throws a punch from the shadows. This attack never misses."
        },
    PerishSong:
        {
            name: "Perish Song",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "Any Pokémon that hears this song faints in three turns unless it switches out of battle."
        },
    Bind:
        {
            name: "Bind",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 85,
            powerPoints: 20,
            effect: "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns."
        },
    RockSlide:
        {
            name: "Rock Slide",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 90,
            powerPoints: 10,
            effect: "Large boulders are hurled at opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch."
        },
    IronTail:
        {
            name: "Iron Tail",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 75,
            powerPoints: 15,
            effect: "The target is slammed with a steel-hard tail. This may also lower the target's Defense stat."
        },
    Meditate:
        {
            name: "Meditate",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "The user meditates to awaken the power deep within its body and raise its Attack stat."
        },
    Synchronoise:
        {
            name: "Synchronoise",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 120,
            accuracy: 100,
            powerPoints: 10,
            effect: "Using an odd shock wave the user inflicts damage on any Pokémon of the same type in the area around it."
        },
    Psyshock:
        {
            name: "Psyshock",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user materializes an odd psychic wave to attack the target. This attack does physical damage."
        },
    Synthesis:
        {
            name: "Synthesis",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user restores its own HP. The amount of HP regained varies with the weather."
        },
    Nightmare:
        {
            name: "Nightmare",
            type: properties.returnAttributes().ghost,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "A sleeping target sees a nightmare that inflicts some damage every turn."
        },
    ViseGrip:
        {
            name: "Vise Grip",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 55,
            accuracy: 100,
            powerPoints: 30,
            effect: "The target is gripped and squeezed from both sides to inflict damage."
        },
    Guillotine:
        {
            name: "Guillotine",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 30,
            powerPoints: 5,
            effect: "A vicious tearing attack with big pincers. The target faints instantly if this attack hits."
        },
    Crabhammer:
        {
            name: "Crabhammer",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 90,
            powerPoints: 10,
            effect: "The target is hammered with a large pincer. Critical hits land more easily."
        },
    Flail:
        {
            name: "Flail",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user flails about aimlessly to attack. The less HP the user has the greater the move's power."
        },
    EerieImpulse:
        {
            name: "Eerie Impulse",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat."
        },
    ChargeBeam:
        {
            name: "Charge Beam",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 50,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user attacks the target with an electric charge. The user may use any remaining electricity to raise its Sp. Atk stat."
        },
    MirrorCoat:
        {
            name: "Mirror Coat",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "A retaliation move that counters any special attack inflicting double the damage taken."
        },
    MagneticFlux:
        {
            name: "Magnetic Flux",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user manipulates magnetic fields which raises the Defense and Sp. Def stats of ally Pokémon with the Plus or Minus Ability."
        },
    Barrage:
        {
            name: "Barrage",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 85,
            powerPoints: 20,
            effect: "Round objects are hurled at the target to strike two to five times in a row."
        },
    LeechSeed:
        {
            name: "Leech Seed",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 90,
            powerPoints: 10,
            effect: "A seed is planted on the target. It steals some HP from the target every turn."
        },
    BulletSeed:
        {
            name: "Bullet Seed",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 25,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user forcefully shoots seeds at the target two to five times in a row."
        },
    WorrySeed:
        {
            name: "Worry Seed",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "A seed that causes worry is planted on the target. It prevents sleep by making the target's Ability Insomnia."
        },
    SolarBeam:
        {
            name: "Solar Beam",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().special,
            power: 120,
            accuracy: 100,
            powerPoints: 10,
            effect: "In this two-turn attack the user gathers light then blasts a bundled beam on the next turn."
        },
    Bestow:
        {
            name: "Bestow",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user passes its held item to the target when the target isn't holding an item."
        },
    SeedBomb:
        {
            name: "Seed Bomb",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user slams a barrage of hard-shelled seeds down on the target from above."
        },
    EggBomb:
        {
            name: "Egg Bomb",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 75,
            powerPoints: 10,
            effect: "A large egg is hurled at the target with maximum force to inflict damage."
        },
    WoodHammer:
        {
            name: "Wood Hammer",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user slams its rugged body into the target to attack. This also damages the user quite a lot."
        },
    BoneClub:
        {
            name: "Bone Club",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user clubs the target with a bone. This may also make the target flinch."
        },
    Bonemerang:
        {
            name: "Bonemerang",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user throws the bone it holds. The bone loops around to hit the target twice coming and going."
        },
    BoneRush:
        {
            name: "Bone Rush",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 25,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user strikes the target with a hard bone two to five times in a row."
        },
    BrickBreak:
        {
            name: "Brick Break",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks with a swift chop. It can also break barriers such as Light Screen and Reflect."
        },
    Endure:
        {
            name: "Endure",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession."
        },
    BlazeKick:
        {
            name: "Blaze Kick",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 85,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user launches a kick that lands a critical hit more easily. This may also leave the target with a burn."
        },
    MegaKick:
        {
            name: "Mega Kick",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 75,
            powerPoints: 5,
            effect: "The target is attacked by a kick launched with muscle-packed power."
        },
    HighJumpKick:
        {
            name: "High Jump Kick",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 130,
            accuracy: 90,
            powerPoints: 10,
            effect: "The target is attacked with a knee kick from a jump. If it misses the user is hurt instead."
        },
    DrainPunch:
        {
            name: "Drain Punch",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 100,
            powerPoints: 10,
            effect: "An energy-draining punch. The user's HP is restored by half the damage taken by the target."
        },
    VacuumWave:
        {
            name: "Vacuum Wave",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().special,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first."
        },
    BulletPunch:
        {
            name: "Bullet Punch",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user strikes the target with tough punches as fast as bullets. This move always goes first."
        },
    MachPunch:
        {
            name: "Mach Punch",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user throws a punch at blinding speed. This move always goes first."
        },
    Detect:
        {
            name: "Detect",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession."
        },
    IcePunch:
        {
            name: "Ice Punch",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 100,
            powerPoints: 15,
            effect: "The target is punched with an icy fist. This may also leave the target frozen."
        },
    FirePunch:
        {
            name: "Fire Punch",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 75,
            accuracy: 100,
            powerPoints: 15,
            effect: "The target is punched with a fiery fist. This may also leave the target with a burn."
        },
    MegaPunch:
        {
            name: "Mega Punch",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 85,
            powerPoints: 20,
            effect: "The target is slugged by a punch thrown with muscle-packed power."
        },
    Counter:
        {
            name: "Counter",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "A retaliation move that counters any physical attack inflicting double the damage taken."
        },
    FocusPunch:
        {
            name: "Focus Punch",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 150,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user focuses its mind before launching a punch. This move fails if the user is hit before it is used."
        },
    Refresh:
        {
            name: "Refresh",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user rests to cure itself of poisoning a burn or paralysis."
        },
    PowerWhip:
        {
            name: "Power Whip",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 85,
            powerPoints: 10,
            effect: "The user violently whirls its vines tentacles or the like to harshly lash the target."
        },
    Smog:
        {
            name: "Smog",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 30,
            accuracy: 70,
            powerPoints: 20,
            effect: "The target is attacked with a discharge of filthy gases. This may also poison the target."
        },
    ClearSmog:
        {
            name: "Clear Smog",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 50,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user attacks the target by throwing a clump of special mud. All stat changes are returned to normal."
        },
    Sludge:
        {
            name: "Sludge",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 100,
            powerPoints: 20,
            effect: "Unsanitary sludge is hurled at the target. This may also poison the target."
        },
    SludgeBomb:
        {
            name: "Sludge Bomb",
            type: properties.returnAttributes().poison,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 100,
            powerPoints: 10,
            effect: "Unsanitary sludge is hurled at the target. This may also poison the target."
        },
    HammerArm:
        {
            name: "Hammer Arm",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 90,
            powerPoints: 10,
            effect: "The user swings and hits with its strong heavy fist. It lowers the user's Speed however."
        },
    SoftBoiled:
        {
            name: "Soft-Boiled",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user restores its own HP by up to half of its max HP."
        },
    Ingrain:
        {
            name: "Ingrain",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user lays roots that restore its HP on every turn. Because it's rooted it can't switch out."
        },
    AncientPower:
        {
            name: "Ancient Power",
            type: properties.returnAttributes().rock,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user attacks with a prehistoric power. This may also raise all the user's stats at once."
        },
    Tickle:
        {
            name: "Tickle",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user tickles the target into laughing reducing its Attack and Defense stats."
        },
    CometPunch:
        {
            name: "Comet Punch",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 18,
            accuracy: 85,
            powerPoints: 15,
            effect: "The target is hit with a flurry of punches that strike two to five times in a row."
        },
    DizzyPunch:
        {
            name: "Dizzy Punch",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 10,
            effect: "The target is hit with rhythmically launched punches. This may also leave the target confused."
        },
    Outrage:
        {
            name: "Outrage",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().physical,
            power: 120,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user rampages and attacks for two to three turns. The user then becomes confused."
        },
    RazorWind:
        {
            name: "Razor Wind",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "In this two-turn attack blades of wind hit opposing Pokémon on the second turn. Critical hits land more easily."
        },
    Fly:
        {
            name: "Fly",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 90,
            accuracy: 95,
            powerPoints: 15,
            effect: "The user flies up into the sky and then strikes its target on the next turn."
        },
    RollingKick:
        {
            name: "Rolling Kick",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 85,
            powerPoints: 15,
            effect: "The user lashes out with a quick spinning kick. This may also make the target flinch."
        },
    Mist:
        {
            name: "Mist",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns."
        },
    HyperBeam:
        {
            name: "Hyper Beam",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 150,
            accuracy: 90,
            powerPoints: 5,
            effect: "The target is attacked with a powerful beam. The user can't move on the next turn."
        },
    DragonRage:
        {
            name: "Dragon Rage",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack hits the target with a shock wave of pure rage. This attack always inflicts 40 HP damage."
        },
    Waterfall:
        {
            name: "Waterfall",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().physical,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user charges at the target and may make it flinch."
        },
    Clamp:
        {
            name: "Clamp",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 35,
            accuracy: 85,
            powerPoints: 15,
            effect: "The target is clamped and squeezed by the user's very thick and sturdy shell for four to five turns."
        },
    SpikeCannon:
        {
            name: "Spike Cannon",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 20,
            accuracy: 100,
            powerPoints: 15,
            effect: "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row."
        },
    LovelyKiss:
        {
            name: "Lovely Kiss",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 75,
            powerPoints: 10,
            effect: "With a scary face the user tries to force a kiss on the target. If it succeeds the target falls asleep."
        },
    SkyAttack:
        {
            name: "Sky Attack",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 140,
            accuracy: 90,
            powerPoints: 5,
            effect: "A second-turn attack move where critical hits land more easily. This may also make the target flinch."
        },
    Transform:
        {
            name: "Transform",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user transforms into a copy of the target right down to having the same move set."
        },
    Psywave:
        {
            name: "Psywave",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The target is attacked with an odd psychic wave. The attack varies in intensity."
        },
    Sharpen:
        {
            name: "Sharpen",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user makes its edges more jagged which raises its Attack stat."
        },
    Conversion:
        {
            name: "Conversion",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user changes its type to become the same type as the move at the top of the list of moves it knows."
        },
    Substitute:
        {
            name: "Substitute",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user creates a substitute for itself using some of its HP. The substitute serves as the user's decoy."
        },
    Struggle:
        {
            name: "Struggle",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 50,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack is used in desperation only if the user has no PP. It also damages the user a little."
        },
    Sketch:
        {
            name: "Sketch",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 1,
            effect: "It enables the user to permanently learn the move last used by the target. Once used Sketch disappears."
        },
    TripleKick:
        {
            name: "Triple Kick",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 10,
            accuracy: 90,
            powerPoints: 10,
            effect: "A consecutive three-kick attack that becomes more powerful with each successive hit."
        },
    Thief:
        {
            name: "Thief",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 25,
            effect: "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item."
        },
    SpiderWeb:
        {
            name: "Spider Web",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user ensnares the target with thin gooey silk so it can't flee from battle."
        },
    Snore:
        {
            name: "Snore",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 50,
            accuracy: 100,
            powerPoints: 15,
            effect: "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch."
        },
    Conversion2:
        {
            name: "Conversion 2",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user changes its type to make itself resistant to the type of the attack the target used last."
        },
    Aeroblast:
        {
            name: "Aeroblast",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().special,
            power: 100,
            accuracy: 95,
            powerPoints: 5,
            effect: "A vortex of air is shot at the target to inflict damage. Critical hits land more easily."
        },
    CottonSpore:
        {
            name: "Cotton Spore",
            type: properties.returnAttributes().grass,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 40,
            effect: "The user releases cotton-like spores that cling to opposing Pokémon which harshly lowers their Speed stats."
        },
    FeintAttack:
        {
            name: "Feint Attack",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user approaches the target disarmingly then throws a sucker punch. This attack never misses."
        },
    Octazooka:
        {
            name: "Octazooka",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 65,
            accuracy: 85,
            powerPoints: 10,
            effect: "The user attacks by spraying ink at the target's face or eyes. This may also lower the target's accuracy."
        },
    MilkDrink:
        {
            name: "Milk Drink",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user restores its own HP by up to half of its max HP."
        },
    SteelWing:
        {
            name: "Steel Wing",
            type: properties.returnAttributes().steel,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 90,
            powerPoints: 25,
            effect: "The target is hit with wings of steel. This may also raise the user's Defense stat."
        },
    Attract:
        {
            name: "Attract",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "If it is the opposite gender of the user the target becomes infatuated and less likely to attack."
        },
    SleepTalk:
        {
            name: "Sleep Talk",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "While it is asleep the user randomly uses one of the moves it knows."
        },
    HealBell:
        {
            name: "Heal Bell",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user makes a soothing bell chime to heal the status conditions of all the party Pokémon."
        },
    Return:
        {
            name: "Return",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "This full-power attack grows more powerful the more the user likes its Trainer."
        },
    Present:
        {
            name: "Present",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 90,
            powerPoints: 15,
            effect: "The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes however."
        },
    Frustration:
        {
            name: "Frustration",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "This full-power attack grows more powerful the less the user likes its Trainer."
        },
    PainSplit:
        {
            name: "Pain Split",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user adds its HP to the target's HP then equally shares the combined HP with the target."
        },
    SacredFire:
        {
            name: "Sacred Fire",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 95,
            powerPoints: 5,
            effect: "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn."
        },
    BatonPass:
        {
            name: "Baton Pass",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 40,
            effect: "The user switches places with a party Pokémon in waiting and passes along any stat changes."
        },
    HiddenPower:
        {
            name: "Hidden Power",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 100,
            powerPoints: 15,
            effect: "A unique attack that varies in type depending on the Pokémon using it."
        },
    MorningSun:
        {
            name: "Morning Sun",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user restores its own HP. The amount of HP regained varies with the weather."
        },
    Wish:
        {
            name: "Wish",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "One turn after this move is used the user's or its replacement's HP is restored by half the user's max HP."
        },
    SunnyDay:
        {
            name: "Sunny Day",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 5,
            effect: "The user intensifies the sun for five turns powering up Fire-type moves. It lowers the power of Water-type moves."
        },
    Whirlpool:
        {
            name: "Whirlpool",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 35,
            accuracy: 85,
            powerPoints: 15,
            effect: "The user traps the target in a violent swirling whirlpool for four to five turns."
        },
    BeatUp:
        {
            name: "Beat Up",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user gets all party Pokémon to attack the target. The more party Pokémon the greater the number of attacks."
        },
    Torment:
        {
            name: "Torment",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user torments and enrages the target making it incapable of using the same move twice in a row."
        },
    Facade:
        {
            name: "Facade",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "This attack move doubles its power if the user is poisoned burned or paralyzed."
        },
    SmellingSalts:
        {
            name: "Smelling Salts",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 70,
            accuracy: 100,
            powerPoints: 10,
            effect: "This attack's power is doubled when used on a target with paralysis. This also cures the target's paralysis however."
        },
    NaturePower:
        {
            name: "Nature Power",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "This attack makes use of nature's power. Its effects vary depending on the user's environment."
        },
    Assist:
        {
            name: "Assist",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user hurriedly and randomly uses a move among those known by ally Pokémon."
        },
    MagicCoat:
        {
            name: "Magic Coat",
            type: properties.returnAttributes().Psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 15,
            effect: "Moves like Leech Seed and moves that inflict status conditions are blocked by a barrier and reflected back to the user of those moves."
        },
    Recycle:
        {
            name: "Recycle",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 10,
            effect: "The user recycles a held item that has been used in battle so it can be used again."
        },
    Eruption:
        {
            name: "Eruption",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 150,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user attacks opposing Pokémon with explosive fury. The lower the user's HP the lower the move's power."
        },
    SkillSwap:
        {
            name: "Skill Swap",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user employs its psychic power to exchange Abilities with the target."
        },
    Snatch:
        {
            name: "Snatch",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user steals the effects of any attempts to use a healing or stat-changing move."
        },
    ArmThrust:
        {
            name: "Arm Thrust",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 15,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user lets loose a flurry of open-palmed arm thrusts that hit two to five times in a row."
        },
    // Camouflage:
    //     {
    //         name: "Camouflage",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().status,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 20,
    //         effect: "Lowers"
    //     },
    TailGlow:
        {
            name: "Tail Glow",
            type: properties.returnAttributes().bug,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user stares at flashing lights to focus its mind drastically raising its Sp. Atk stat."
        },
    LusterPurge:
        {
            name: "Luster Purge",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 70,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user lets loose a damaging burst of light. This may also lower the target's Sp. Def stat."
        },
    MistBall:
        {
            name: "Mist Ball",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 70,
            accuracy: 100,
            powerPoints: 5,
            effect: "A mist-like flurry of down envelops and damages the target. This may also lower the target's Sp. Atk stat."
        },
    TeeterDance:
        {
            name: "Teeter Dance",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user performs a wobbly dance that confuses the Pokémon around it."
        },
    // NeedleArm:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // BlastBurn:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HydroCannon:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // WeatherBall:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    FakeTears:
        {
            name: "Fake Tears",
            type: properties.returnAttributes().dark,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user feigns crying to fluster the target harshly lowering its Sp. Def stat."
        },
    // Overheat:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // OdorSleuth:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // RockTomb:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // GrassWhistle:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // WaterSpout:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SkyUppercut:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    MuddyWater:
        {
            name: "Muddy Water",
            type: properties.returnAttributes().water,
            category: properties.returnCategory().special,
            power: 90,
            accuracy: 85,
            powerPoints: 10,
            effect: "The user attacks by shooting muddy water at opposing Pokémon. This may also lower their accuracy."
        },
    Block:
        {
            name: "Block",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 5,
            effect: "The user blocks the target's way with arms spread wide to prevent escape."
        },
    // FrenzyPlant:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Bounce:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PoisonTail:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // VoltTackle:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MagicalLeaf:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    DragonDance:
        {
            name: "Dragon Dance",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user vigorously performs a mystic powerful dance that raises its Attack and Speed stats."
        },
    ShockWave:
        {
            name: "Shock Wave",
            type: properties.returnAttributes().electric,
            category: properties.returnCategory().special,
            power: 60,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user strikes the target with a quick jolt of electricity. This attack never misses."
        },
    // DoomDesire:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PsychoBoost:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MetalBurst:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // UTurn:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Embargo:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PsychoShift:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // TrumpCard:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HealBlock:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PowerTrick:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // LuckyChant:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    PowerSwap:
        {
            name: "Power Swap",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user employs its psychic power to switch changes to its Attack and Sp. Atk stats with the target."
        },
    GuardSwap:
        {
            name: "Guard Swap",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user employs its psychic power to switch changes to its Defense and Sp. Def stats with the target."
        },
    LastResort:
        {
            name: "Last Resort",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 140,
            accuracy: 100,
            powerPoints: 5,
            effect: "This move can be used only after the user has used all the other moves it knows in the battle."
        },
    // HeartSwap:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ForcePalm:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    AuraSphere:
        {
            name: "Aura Sphere",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 101,
            powerPoints: 20,
            effect: "The user lets loose a blast of aura power from deep within its body at the target. This attack never misses."
        },
    DragonPulse:
        {
            name: "Dragon Pulse",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().special,
            power: 85,
            accuracy: 100,
            powerPoints: 10,
            effect: "The target is attacked with a shock wave generated by the user's gaping mouth."
        },
    DragonRush:
        {
            name: "Dragon Rush",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().physical,
            power: 100,
            accuracy: 75,
            powerPoints: 10,
            effect: "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch."
        },
    // FocusBlast:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // EnergyBall:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    GigaImpact:
        {
            name: "Giga Impact",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 150,
            accuracy: 90,
            powerPoints: 5,
            effect: "The user charges at the target using every bit of its power. The user can't move on the next turn."
        },
    Avalanche:
        {
            name: "Avalanche",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 10,
            effect: "The power of this attack move is doubled if the user has been hurt by the target in the same turn."
        },
    // ShadowClaw:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ShadowSneak:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // RockClimb:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Defog:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // TrickRoom:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // DracoMeteor:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    LavaPlume:
        {
            name: "Lava Plume",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn."
        },
    // RockWrecker:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // GrassKnot:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Chatter:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Judgement:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // AttackOrder:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // DefendOrder:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HealOrder:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HeadSmash:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // RoarOfTime:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SpacialRend:
    //     {
    //         name: "Spacial Rend",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // LunarDance:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // CrushGrip:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MagmaStorm:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // DarkVoid:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SeedFlare:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // OminousWind:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ShadowForce:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HoneClaws:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // GuardSplit:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PowerSplit:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Automize:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MagicRoom:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    StormThrow:
        {
            name: "Storm Throw",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user strikes the target with a fierce blow. This attack always results in a critical hit."
        },
    FlameBurst:
        {
            name: "Flame Burst",
            type: properties.returnAttributes().fire,
            category: properties.returnCategory().special,
            power: 70,
            accuracy: 100,
            powerPoints: 15,
            effect: "The user attacks the target with a bursting flame. The bursting flame damages Pokémon next to the target as well."
        },
    // FoulPlay:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SimpleBeam:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Entrainment:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // EchoedVoice:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    SkyDrop:
        {
            name: "Sky Drop",
            type: properties.returnAttributes().flying,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user takes the target into the sky then drops it during the next turn. The target cannot attack while in the sky."
        },
    // ShiftGear:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Quash:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Acrobatics:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // WaterPledge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FirePledge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // GrassPledge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // VoltSwitch:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // StruggleBug:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FrostBreath:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    DragonTail:
        {
            name: "Dragon Tail",
            type: properties.returnAttributes().dragon,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 90,
            powerPoints: 10,
            effect: "The target is knocked away and a different Pokémon is dragged out. In the wild this ends a battle against a single Pokémon."
        },
    WorkUp:
        {
            name: "Work Up",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user is roused and its Attack and Sp. Atk stats increase."
        },
    // Electroweb:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // WildCharge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    HeartStamp:
        {
            name: "Heart Stamp",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().physical,
            power: 60,
            accuracy: 100,
            powerPoints: 25,
            effect: "Lowers"
        },
    // HornLeech:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SacredSword:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HeatCrash:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // CottonGuard:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // NightDaze:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    Psystrike:
        {
            name: "Psystrike",
            type: properties.returnAttributes().psychic,
            category: properties.returnCategory().special,
            power: 100,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user materializes an odd psychic wave to attack the target. This attack does physical damage."
        },
    // TailSlap:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HeadCharge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // GearGrind:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SearingShot:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // TechnoBlast:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // RelicSong:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SecretSword:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Glaciate:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // BoltStrike:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // BlueFlare:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FieryDance:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FreezeShock:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // IceBurn:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Snarl:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // VCreate:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FusionFlare:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FusionBolt:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FlyingPress:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MatBlock:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Rototiller:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // StickyWeb:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PhantomForce:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // TrickOrTreat:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // NobleRoar:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // IonDeluge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ParabolicCharge:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ForestsCurse:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    FreezeDry:
        {
            name: "Freeze-Dry",
            type: properties.returnAttributes().ice,
            category: properties.returnCategory().special,
            power: 70,
            accuracy: 100,
            powerPoints: 20,
            effect: "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types."
        },
    // PartingShot:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // TopsyTurvy:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    DrainingKiss:
        {
            name: "Draining Kiss",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().special,
            power: 50,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user steals the target's HP with a kiss. The user's HP is restored by over half of the damage taken by the target."
        },
    // CraftyShield:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FlowerShield:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MistyTerrain:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Electrify:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FairyWind:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Boomburst:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // FairyLock:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // KingsShield:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Confide:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // DiamondStorm:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SteamEruption:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HyperspaceHole:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // WaterShuriken:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // MysticalFire:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // SpikyShield:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // AromaticMist:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Powder:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Geomancy:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HappyHour:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    DazzlingGleam:
        {
            name: "Dazzling Gleam",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().special,
            power: 80,
            accuracy: 100,
            powerPoints: 10,
            effect: "The user damages opposing Pokémon by emitting a powerful flash."
        },
    // Celebrate:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // HoldHands:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    BabyDollEyes:
        {
            name: "Baby-Doll Eyes",
            type: properties.returnAttributes().fairy,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 100,
            powerPoints: 30,
            effect: "The user stares at the target with its baby-doll eyes which lowers the target's Attack stat. This move always goes first."
        },
    // HoldBack:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // Infestation:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    PowerUpPunch:
        {
            name: "Power-Up Punch",
            type: properties.returnAttributes().fight,
            category: properties.returnCategory().physical,
            power: 40,
            accuracy: 100,
            powerPoints: 20,
            effect: "Striking opponents over and over makes the user's fists harder. Hitting a target raises the Attack stat."
        },
    // OblivionWing:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ThousandArrows:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // ThousandWaves:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // LandsWrath:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // LightOfRuin:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // OriginPulse:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // PrecipiceBlades:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    // DragonAscent:
    //     {
    //         name: "testing",
    //         type: properties.returnAttributes().normal,
    //         category: properties.returnCategory().physical,
    //         power: 1000,
    //         accuracy: 100,
    //         powerPoints: 2000,
    //         effect: "Lowers"
    //     },
    Spotlight:
        {
            name: "Spotlight",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 15,
            effect: "The user shines a spotlight on the target so that only the target will be attacked during the turn."
        },
    HighHorsepower:
        {
            name: "HighHorsepower",
            type: properties.returnAttributes().ground,
            category: properties.returnCategory().physical,
            power: 95,
            accuracy: 95,
            powerPoints: 10,
            effect: "Lowers"
        },
    LaserFocus:
        {
            name: "Laser Focus",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().status,
            power: 0,
            accuracy: 101,
            powerPoints: 30,
            effect: "The user concentrates intensely. The attack on the next turn always results in a critical hit."
        },
    temp:
        {
            name: "testing",
            type: properties.returnAttributes().normal,
            category: properties.returnCategory().physical,
            power: 1000,
            accuracy: 100,
            powerPoints: 2000,
            effect: "Lowers"
        },
};

module.exports = {
    returnMoves: function () {
        return pokeMoves;
    },
};