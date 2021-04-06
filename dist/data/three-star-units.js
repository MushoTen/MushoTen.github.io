const threeStarUnits = [
    {
        thumb: "cc_0001010_01.png",
        title: "Skillful Actor",
        name: "Rudeus",
        rarity: "3",
        element: "Fire",
        tier: {
            rank: "C",
            desc: "Single target nuker kit, but held back by being a 3-star and having 3-star levels of stats.",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Skillful Actor",
            lv1: "Increase Fire type units Attack by 5%",
            lv6: "Increase Fire type units Attack by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Fireball",
                desc: "Deals 150% Magic Damage to 1 enemy + chance to inflict Burn to the target (1 turn)",
            },
            two: {
                title: "Magic Control",
                desc: "Increase own Magic Attack by 100% (3 turns) + lowers Skill Cooldown by 20 seconds",
            },
        },
    },
    {
        thumb: "cc_0002008_01.png",
        title: "Blue Haired Beauty",
        name: "Roxy",
        rarity: "3",
        element: "Fire",
        tier: {
            rank: "B",
            desc:
                "Pretty nice kit and cute. Unfortunately, stats aren't great, but shouldn't be much of a problem when you pair her with other Fire-attribute DPS.",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Blue Haired Beauty",
            lv1: "Increase Fire type units Health by 5%",
            lv6: "Increase Fire type units Health by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Burn Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Heat Island",
                desc:
                    "Increase Magic Attack of all allies by 30% (3 turns) + 15% Attack if ally is a Fire type unit (3 turns)",
            },
            two: {
                title: "Great Fire Ball [Ex. Flame]",
                desc: "Deals 190% Magic Damage to 1 enemy",
            },
        },
    },
    {
        thumb: "cc_0004001_01.png",
        title: "Tomboyish Girl",
        name: "Eris",
        rarity: "3",
        element: "Fire",
        tier: {
            rank: "D",
            desc: "Awful stats and strictly worse than the 3-star Fire Roxy. Has an interesting kit though.",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "500",
            def: "130",
        },
        leaderSkill: {
            title: "Tomboyish Girl",
            lv1: "Increase Fire type units Attack by 5%",
            lv6: "Increase Fire type units Attack by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Poison Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Heat Island",
                desc:
                    "Increase Magic Attack of all allies by 30% (3 turns) + 15% Attack if ally is a Fire type unit (3 turns) ",
            },
            two: {
                title: "Onegai Nyan✰✰✰",
                desc: "Deals 150% Sword Damage to 1 enemy + chance to inflict Paralyze to the target (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0007001_01.png",
        title: "Grayrat Family Maid",
        name: "Lilia",
        rarity: "3",
        element: "Fire",
        tier: {
            rank: "X",
            desc: "Awful stats, but decreases enemy buff turns by 3. This might come in handy.",
        },
        base: {
            hp: "700",
            atk: "200",
            def: "150",
            spd: "9",
        },
        mlb: {
            hp: "1000",
            atk: "300",
            def: "210",
        },
        leaderSkill: {
            title: "Grayrat Family Maid",
            lv1: "Increase Fire type units Defense by 5%",
            lv6: "Increase Fire type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Defense UP",
            lv1: "Increase own Magic Defense by 10% + Burn Resistance by 30%",
            lv5: "Increase own Magic Defense by 10% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Analyze",
                desc: "Lowers 1 enemy Defense by 20% (3 turns)",
            },
            two: {
                title: "Repulsed",
                desc: "Lowers all enemies Magic Attack by 20% (3 turns) + reduces Buff turns of 1 enemy by 3 turns",
            },
        },
    },
    {
        thumb: "cc_0010001_01.png",
        title: "Magician's Apprentice",
        name: "Ghislaine",
        rarity: "3",
        element: "Fire",
        tier: {
            rank: "B",
            desc:
                "Great stats by 3-star standards. Has a Sword Skill kit but does fire element damage. Can be very useful in teams that need a physical Fire DPS for some reason.",
        },
        base: {
            hp: "800",
            atk: "400",
            def: "125",
            spd: "15",
        },
        mlb: {
            hp: "1250",
            atk: "900",
            def: "150",
        },
        leaderSkill: {
            title: "Magician's Apprentice",
            lv1: "Increase Fire type units Health by 5%",
            lv6: "Increase Fire type units Health by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Fear Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Fear Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: 'Nuki-Uchi "Early Advantage"',
                desc: "Deals 150% Sword Damage to 1 enemy + decrease Sword Defense by 20% (3 turns)",
            },
            two: {
                title: "Magic Power Eye Release",
                desc:
                    "Increase own Sword Attack by 100% (3 turns) + lowers Skill Cooldown by 10 seconds + recovers from Blind",
            },
        },
    },
    {
        thumb: "cc_0001001_01.png",
        title: "Reincarnated",
        name: "Rudeus",
        rarity: "3",
        element: "Water",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Reincarnated",
            lv1: "Increase Water type units Attack by 5%",
            lv6: "Increase Water type units Attack by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Waterball",
                desc: "Deals 150% Magic Damage to 1 enemy + lowers Crit Rate by 10% (3 turns)",
            },
            two: {
                title: "Water Cannon [Splash Flow]",
                desc: "100% Magic Damage to 3 enemies + inflicts Stun to 1 enemy of a Fire type (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0001012_01.png",
        title: "New Outfit",
        name: "Rudeus",
        rarity: "3",
        element: "Water",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "600",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "1100",
            def: "130",
        },
        leaderSkill: {
            title: "New Outfit",
            lv1: "Increase Water type units Attack by 5%",
            lv6: "Increase Water type units Attack by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Rage Resistance by 30%",
            lv5: "lvl  6 - Increase own Magic Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Waterball",
                desc: "Deals 150% Magic Damage to 1 enemy + lowers Crit Rate by 10% (3 turns)",
            },
            two: {
                title: "Magic Control",
                desc: "Increases own Magic Attack by 100% (3 turns) + lowers Skill Cooldown by 20 seconds",
            },
        },
    },
    {
        thumb: "cc_0002003_01.png",
        title: "Midgurd Mage",
        name: "Roxy",
        rarity: "3",
        element: "Water",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Midgurd Mage",
            lv1: "Increase Water type units Crit Rate by 5%",
            lv6: "Increase Water type units Crit Rate by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Burn Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "-",
                desc: "",
            },
            two: {
                title: "-",
                desc: "",
            },
        },
    },
    {
        thumb: "cc_0003001_01.png",
        title: "Girl from Buena Village",
        name: "Sylphiette",
        rarity: "3",
        element: "Water",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "300",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "600",
            def: "130",
        },
        leaderSkill: {
            title: "Girl from Buena Village",
            lv1: "Increase Water type units Defense by 5%",
            lv6: "Increase Water type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Paralysis Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Paralysis Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Cheer",
                desc: "Recovers own Health by 20% + increase 1 ally Defense by 20% (3 turns)",
            },
            two: {
                title: "Water Cannon [Splash Flow]",
                desc: "Deals 100% Magic Damage to 3 enemies + inflicts Stun to 1 enemy of a Fire type (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0003008_01.png",
        title: "Long Eared Girl",
        name: "Sylphiette",
        rarity: "3",
        element: "Water",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "300",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "600",
            def: "130",
        },
        leaderSkill: {
            title: "Long Eared Girl",
            lv1: "Increase Water type units Defense by 5%",
            lv6: "Increase Water type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Defense UP",
            lv1: "Increase own Magic Defense by 10% + Paralysis Resistance by 30%",
            lv5: "Increase own Magic Defense by 20% + Paralysis Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Waterball",
                desc: "Deals 150% Magic Damage to 1 enemy + lowers Crit Rate by 10% (3 turns)",
            },
            two: {
                title: "Greater Healing Arts [Ex. Healing]",
                desc: "Recovers all allies Health by 20% + removes Poison and Paralysis effect",
            },
        },
    },
    {
        thumb: "cc_0006003_01.png",
        title: "Milis Believer",
        name: "Zenith",
        rarity: "3",
        element: "Water",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "250",
            def: "150",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "350",
            def: "210",
        },
        leaderSkill: {
            title: "Milis Believer",
            lv1: "Increase Water type units Defense by 5%",
            lv6: "Increase Water type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Defense UP",
            lv1: "Increase own Magic Defense by 10% + Poison Resistance by 30%",
            lv5: "Increase own Magic Defense by 10% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Cheer",
                desc: "Recovers 1 ally Health by 20% + increase Defense by 20% (3 turns)",
            },
            two: {
                title: "Greater Healing Arts [Ex. Healing]",
                desc: "Recovers 20% of Health to all allies + removes Poison and Paralysis effect",
            },
        },
    },
    {
        thumb: "cc_0001011_01.png",
        title: "Towards a New Land",
        name: "Rudeus",
        rarity: "3",
        element: "Wind",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "600",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "1100",
            def: "130",
        },
        leaderSkill: {
            title: "Towards a New Land",
            lv1: "Increase Wind type units Attack by 5%",
            lv6: "Increase Wind type units Attack by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Sonic Boom",
                desc: "Deals 150% Magic Damage to 1 enemy + increase own Speed by 3 (3 trurns)",
            },
            two: {
                title: "Rending Wind [Wind Slice]",
                desc: "Deals 100% Magic Damage to all enemies + lowers Magic Attack by 20% (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0002001_01.png",
        title: "Home Tutor",
        name: "Roxy",
        rarity: "3",
        element: "Wind",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Home Tutor",
            lv1: "Increase Wind type units Attack by 5%",
            lv6: "Increase Wind type units Attack by 10%",
        },
        passiveSkill: {
            title: "Attack UP",
            lv1: "Increase Rudeus' Attack by 15% + Burn Resistance by 30%",
            lv5: "Increase Rudeus' Attack by 25% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Sonic Boom",
                desc: "Deals 150% Magic Damage to 1 enemy + increase own Speed by 3 (3 turns)",
            },
            two: {
                title: "Greater Healing Arts [Ex. Healing]",
                desc: "Recovers all allies Health by 20% + removes Poison and Paralysis effect",
            },
        },
    },
    {
        thumb: "cc_0002009_01.png",
        title: "Investigative Journey",
        name: "Roxy",
        rarity: "3",
        element: "Wind",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "600",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "1100",
            def: "130",
        },
        leaderSkill: {
            title: "Investigative Journey",
            lv1: "Increase Wind type units Crit Rate by 5%",
            lv6: "Increase Wind type units Crit Rate by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Burn Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Blast",
                desc:
                    "Nullifies Magic Damage effect to 1 ally (1 time) + 80% Attack if ally is a Wind type unit (3 turns) + increase Speed by 3 (3 turns)",
            },
            two: {
                title: "Rending Wind [Wind Slice]",
                desc: "Deals 100% Magic Damage to all enemies + lowers Magic Attack by 20% (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0006001_01.png",
        title: "Healer of Charity",
        name: "Zenith",
        rarity: "3",
        element: "Wind",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "250",
            def: "150",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "350",
            def: "210",
        },
        leaderSkill: {
            title: "Healer of Charity",
            lv1: "Increase Wind type units Defense by 5%",
            lv6: "Increase Wind type units Defense by 10%",
        },
        passiveSkill: {
            title: "Paralysis Resistance UP	",
            lv1: "Increase own Paralysis Resistance by 30% + Poison Resistance by 30%",
            lv5: "Increase own Paralysis Resistance by 50% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Anti-Poison",
                desc:
                    "Recovers 1 ally Health by 20% + removes Poison and Paralysis effect + prevents Poison and Paralysis effect (3 turns)",
            },
            two: {
                title: "Greater Healing Arts [Ex. Healing]",
                desc: "Recovers all allies Health by 20% + removes Poison and Paralysis effect",
            },
        },
    },
    {
        thumb: "cc_0011001_01.png",
        title: "Familiar of a Hero",
        name: "Almanfi",
        rarity: "3",
        element: "Wind",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "100",
            spd: "20",
        },
        mlb: {
            hp: "850",
            atk: "500",
            def: "130",
        },
        leaderSkill: {
            title: "Familiar of a Hero",
            lv1: "Increase Wind type units Crit Rate by 5%",
            lv6: "Increase Wind type units Crit Rate by 10%",
        },
        passiveSkill: {
            title: "Normal Attack UP",
            lv1: "Increase own Normal Attack by 10% + Paralysis Resistance by 30%",
            lv5: "Increase own Normal Attack by 20% + Paralysis Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Research",
                desc: "Increase 1 ally Crit Rate by 40% (3 turns)",
            },
            two: {
                title: "Light Speed Maneuver",
                desc:
                    "Increase own Speed by 6 (1 turn) + grants Pursuit (3 turns) + increase Crit Rate by 40% (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0001009_01.png",
        title: "Childhood Period",
        name: "Rudeus",
        rarity: "3",
        element: "Earth",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Childhood Period",
            lv1: "Increase Earth type units Attack by 5%",
            lv6: "Increase Earth type units Attack by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Earth Pillar",
                desc:
                    "Deals 150% Magic Damage to 1 enemy + lowers Magic Defense by 30% (3 turns) if enemy is a Water type",
            },
            two: {
                title: "Magic Control",
                desc: "Increases own Magic Attack by 100% (3 turns) + lowers Skill Cooldown by 20 seconds",
            },
        },
    },
    {
        thumb: "cc_0002007_01.png",
        title: "Sleepy Mage",
        name: "Roxy",
        rarity: "3",
        element: "Earth",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Sleepy Mage",
            lv1: "Increase Earth type units Crit Rate by 5%",
            lv6: "Increase Earth type units Crit Rate by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Burn Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Earth Pillar",
                desc:
                    " - Deals 150% Magic Damage to 1 enemy + lowers Magic Defense by 30% (3 turns) if enemy is a Water type",
            },
            two: {
                title: "Earth Shell [Stone Cannon]",
                desc: "Deals 100% Magic Damage to all enemies + lowers Speed by 3 (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0003007_01.png",
        title: "Bishounen?",
        name: "Sylphiette",
        rarity: "3",
        element: "Earth",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "300",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "600",
            def: "130",
        },
        leaderSkill: {
            title: "Bishounen?",
            lv1: "Increase Earth type units Defense by 5%",
            lv6: "Increase Earth type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Paralysis Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Paralysis Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Cheer",
                desc: "Recovers own Health by 20% + increase 1 ally Defense by 20% (3 turns)",
            },
            two: {
                title: "Earth Shell [Stone Cannon]",
                desc: "Deals 100% Magic Damage to all enemies + lowers Speed by 3 (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0003009_01.png",
        title: "Becoming Independent",
        name: "Sylphiette",
        rarity: "3",
        element: "Earth",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Becoming Independent",
            lv1: "Increase Earth type units Defense by 5%",
            lv6: "Increase Earth type units Defense by 10%",
        },
        passiveSkill: {
            title: "Attack UP",
            lv1: "Increase Rudeus' Attack by 15% + own Paralysis Resistance by 30%",
            lv5: "Increase Rudeus' Attack by 25% + own Paralysis Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Earth Wall",
                desc:
                    " - Increase all allies Magic Defense by 30% (3 turns) + increase Defense by 20% if ally is a Earth unit (3 turns)",
            },
            two: {
                title: "Greater Healing Arts [Ex. Healing]",
                desc: "Recovers all allies Health by 20% + removes Poison and Paralysis effect",
            },
        },
    },
    {
        thumb: "cc_0017001_01.png",
        title: "Harsh, Large Mountain Summit",
        name: "Talhand",
        rarity: "3",
        element: "Earth",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "300",
            def: "200",
            spd: "9",
        },
        mlb: {
            hp: "1250",
            atk: "600",
            def: "310",
        },
        leaderSkill: {
            title: "Harsh, Large Mountain Summit",
            lv1: "Increase Earth type units Defense by 5%",
            lv6: "Increase Earth type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Defense UP",
            lv1: "Increase own Magic Defense by 10% + Fear Resistance by 30%",
            lv5: "Increase own Magic Defense by 20% + Fear Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Earth Wall",
                desc:
                    " - Increase Magic Defense of all allies by 30% (3 turns) + 20% Defense if ally is a Earth unit (3 turns)",
            },
            two: {
                title: "Earth Shell [Stone Cannon]",
                desc: "Deals 100% Magic Damage to all enemies + lowers Speed by 3 (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0004004_01.png",
        title: "Daughter of House Boreas",
        name: "Eris",
        rarity: "3",
        element: "Self-Taught",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "250",
            def: "125",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "850",
            def: "150",
        },
        leaderSkill: {
            title: "Daughter of House Boreas",
            lv1: "Increase Self-Taught type units Health by 5%",
            lv6: "Increase Self-Taught type units Health by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Poison Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Low Spirits",
                desc: "Increase own Attack by 50% (3 turns)",
            },
            two: {
                title: "Sword Slash",
                desc: "Deals 190% Sword Damage to 1 enemy",
            },
        },
    },
    {
        thumb: "cc_0015002_01.png",
        title: "New Member",
        name: "Ruijerd",
        rarity: "3",
        element: "Self-Taught",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "400",
            def: "200",
            spd: "9",
        },
        mlb: {
            hp: "1250",
            atk: "900",
            def: "310",
        },
        leaderSkill: {
            title: "New Member",
            lv1: "Increase Self-Taught type units Defense by 5%",
            lv6: "Increase Self-Taught type units Defense by 10%",
        },
        passiveSkill: {
            title: "Humans Damage UP	",
            lv1: "Increase damage against Humans by 20% + increase own Faint Resistance by 30%",
            lv5: "Increase damage against Humans by 30% + increase own Faint Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Low Spirits",
                desc: "Increase own Attack by 50% (3 turns)",
            },
            two: {
                title: "Three Pronged Spear Attack",
                desc:
                    " - Deals 100% Sword Damage to 3 enemies. Chance to apply a buff where for the next 1 turn, when Ruijerd attacks, deal an additional instance of damage equal to 30% of Sword Skill Damage",
            },
        },
    },
    {
        thumb: "cc_0015008_01.png",
        title: "Warrior of the Superd Tribe",
        name: "Ruijerd",
        rarity: "3",
        element: "Self-Taught",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "400",
            def: "200",
            spd: "9",
        },
        mlb: {
            hp: "1250",
            atk: "900",
            def: "310",
        },
        leaderSkill: {
            title: "Warrior of the Superd Tribe",
            lv1: "Increase Self-Taught type units Health by 5%",
            lv6: "Increase Self-Taught type units Health by 10%",
        },
        passiveSkill: {
            title: "Humans Damage UP",
            lv1: "Increase damage against Humans by 20% + increase own Faint Resistance by 30%",
            lv5: "Increase damage against Humans by 30% + increase own Faint Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Tempered Blow",
                desc: "Deals 150% Sword Damage to 1 enemy + chance to inflict Fear to the target (2 turns)",
            },
            two: {
                title: "Superd Eyes",
                desc: "Increase own Attack by 40% (3 turns) + 40% Defense (3 turns)				",
            },
        },
    },
    {
        thumb: "cc_0016001_01.png",
        title: "S Rank Adventurer",
        name: "Elinalise",
        rarity: "3",
        element: "Self-Taught",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "200",
            spd: "15",
        },
        mlb: {
            hp: "850",
            atk: "300",
            def: "310",
        },
        leaderSkill: {
            title: "S Rank Adventurer",
            lv1: "Increase Self-Taught type units Defense by 5%",
            lv6: "Increase Self-Taught type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Faint Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Faint Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Hate Control",
                desc: "Provokes all enemies (3 turns) + increase own Defense by 10% (2 turns)",
            },
            two: {
                title: "Substitution",
                desc: "Creates Barrier to self (2 turns) + 5% Auto Recovery (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0017003_01.png",
        title: "Investigative Journey",
        name: "Talhand",
        rarity: "3",
        element: "Self-Taught",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "300",
            def: "200",
            spd: "9",
        },
        mlb: {
            hp: "1250",
            atk: "600",
            def: "310",
        },
        leaderSkill: {
            title: "Investigative Journey",
            lv1: "Increase Self-Taught type units Defense by 5%",
            lv6: "Increase Self-Taught type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Fear Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Fear Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Physical Shield",
                desc: "Increase all allies Sword Defense by 40% (3 turns)",
            },
            two: {
                title: "Drinking Contest",
                desc:
                    " - Provokes 1 enemy (3 turns) + increase own Defense by 40% (3 turns) + chance to inflict Sleep to self and enemy (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0018003_01.png",
        title: "Smug Face",
        name: "Nokopara",
        rarity: "3",
        element: "Self-Taught",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "150",
            spd: "15",
        },
        mlb: {
            hp: "850",
            atk: "500",
            def: "210",
        },
        leaderSkill: {
            title: "Smug Face",
            lv1: "Increase Self-Taught type units Defense by 5%",
            lv6: "Increase Self-Taught type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Blind Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Blind Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Concentrate",
                desc: "Increase own Crit Rate by 50% (3 turns)",
            },
            two: {
                title: "Listen Up",
                desc: "Chance to inflict Rage to 1 enemy (3 turns) +  lowers Magic Attack by 10% (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0001004_01.png",
        title: "Elementary-Ranked Sword God",
        name: "Rudeus",
        rarity: "3",
        element: "Sword God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Elementary-Ranked Sword God",
            lv1: "Increase Sword God type units Defense by 5%",
            lv6: "Increase Sword God type units Defense by 10%",
        },
        passiveSkill: {
            title: "Magic Attack UP",
            lv1: "Increase own Magic Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Magic Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Low Spirits",
                desc: "Increase own Attack by 50% (3 turns)",
            },
            two: {
                title: "Earth Shell [Stone Cannon]",
                desc: "100% Magic Damage to all enemies + lowers Speed by 3 (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0004013_01.png",
        title: "The Boreas Bloodline",
        name: "Eris",
        rarity: "3",
        element: "Sword God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "500",
            def: "130",
        },
        leaderSkill: {
            title: "The Boreas Bloodline",
            lv1: "Increase Sword God type units Attack by 5%",
            lv6: "Increase Sword God type units Attack by 10%",
        },
        passiveSkill: {
            title: "Crit Rate UP",
            lv1: "Chance to raise own Crit Rate by 30% + Poison Resistance by 30%",
            lv5: "Chance to raise own Crit Rate by 40% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Boreas Punch",
                desc: "Deals 150% Sword Damage to 1 enemy + decrease Sword Defense by 20% (3 turns)",
            },
            two: {
                title: "Onegai Nyan✰✰✰",
                desc: "Deals 150% Sword Damage to 1 enemy + chance to inflict Paralyze to the target (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0004014_01.png",
        title: "Towards a New Land",
        name: "Eris",
        rarity: "3",
        element: "Sword God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "250",
            def: "125",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "600",
            def: "150",
        },
        leaderSkill: {
            title: "Towards a New Land",
            lv1: "Increase Sword God type units Health by 5%",
            lv6: "Increase Sword God type units Health by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Poison Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Low Spirits",
                desc: "Increase own Attack by 50% (3 turns)",
            },
            two: {
                title: "Sword Slash",
                desc: "Deals 190% Sword Damage to 1 enemy",
            },
        },
    },
    {
        thumb: "cc_0005009_01.png",
        title: "Spoiled Brat",
        name: "Paul",
        rarity: "3",
        element: "Sword God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "700",
            atk: "250",
            def: "150",
            spd: "12",
        },
        mlb: {
            hp: "1000",
            atk: "600",
            def: "210",
        },
        leaderSkill: {
            title: "Spoiled Brat",
            lv1: "Increase Sword God type units Attack by 5%",
            lv6: "Increase Sword God type units Attack by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Low Spirits",
                desc: "Increase own Attack by 50% (3 turns)",
            },
            two: {
                title: "Rapid Blade",
                desc: "Deals 190% Sword Damage to 1 enemy",
            },
        },
    },
    {
        thumb: "cc_0010003_01.png",
        title: "Eyepatched Swordsman",
        name: "Ghislaine",
        rarity: "3",
        element: "Sword God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "400",
            def: "125",
            spd: "15",
        },
        mlb: {
            hp: "1250",
            atk: "900",
            def: "150",
        },
        leaderSkill: {
            title: "Eyepatched Swordsman",
            lv1: "Increase Sword God type units Attack by 5%",
            lv6: "Increase Sword God type units Attack by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Fear Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Fear Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Nuki-Uchi [Early Advantage]",
                desc: "Deals 150% Sword Damage to 1 enemy + decrease Sword Defense by 20% (3 turns)",
            },
            two: {
                title: "Magic Power Eye Release",
                desc:
                    " - Increase own Sword Attack by 100% (3 turns) + lowers Skill Cooldown by 10 seconds + recovers from Blind",
            },
        },
    },
    {
        thumb: "cc_0004015_01.png",
        title: "My Favourite Clothes",
        name: "Eris",
        rarity: "3",
        element: "North God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "250",
            def: "125",
            spd: "12",
        },
        mlb: {
            hp: "850",
            atk: "600",
            def: "150",
        },
        leaderSkill: {
            title: "My Favourite Clothes",
            lv1: "Increase North God type units Attack by 5%",
            lv6: "Increase North God type units Attack by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Lv.1- Increase own Sword Attack by 10% + Poison Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Poison Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Nuki-Uchi [Early Advantage]",
                desc: "Deals 150% Sword Damage to 1 enemy + decrease Sword Defense by 20% (3 turns)",
            },
            two: {
                title: "Onegai Nyan✰✰✰",
                desc: "Deals 150% Sword Damage to 1 enemy + chance to Paralyze the target (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0005007_01.png",
        title: "Genius Swordsman",
        name: "Paul",
        rarity: "3",
        element: "North God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "250",
            def: "150",
            spd: "12",
        },
        mlb: {
            hp: "1250",
            atk: "600",
            def: "210",
        },
        leaderSkill: {
            title: "Genius Swordsman",
            lv1: "Increase North God type units Health by 5%",
            lv6: "Increase North God type units Health by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Nuki-Uchi [Early Advantage]",
                desc: "Deals 150% Sword Damage to 1 enemy + decrease Sword Defense by 20% (3 turns)",
            },
            two: {
                title: "Rapid Blade",
                desc: "Deals 190% Sword Damage to 1 enemy",
            },
        },
    },
    {
        thumb: "cc_0011003_01.png",
        title: "Dagger User",
        name: "Almanfi",
        rarity: "3",
        element: "North God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "100",
            spd: "20",
        },
        mlb: {
            hp: "850",
            atk: "500",
            def: "130",
        },
        leaderSkill: {
            title: "Dagger User",
            lv1: "Increase North God type units Attack by 5%",
            lv6: "Increase North God type units Attack by 10%",
        },
        passiveSkill: {
            title: "Normal Attack UP",
            lv1: "Increase own Normal Attack by 10% + Paralysis Resistance by 30%",
            lv5: "Increase own Normal Attack by 20% + Paralysis Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Research",
                desc: "Increase 1 ally Crit Rate by 40% (3 turns)",
            },
            two: {
                title: "Light Speed Maneuver",
                desc:
                    " - Increase own Speed by 6 (1 turn) + grants Pursuit (3 turns) + increase Crit Rate by 40% (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0018001_01.png",
        title: "Cheapskate",
        name: "Nokopara",
        rarity: "3",
        element: "North God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "150",
            spd: "15",
        },
        mlb: {
            hp: "850",
            atk: "500",
            def: "210",
        },
        leaderSkill: {
            title: "Cheapskate",
            lv1: "Increase North God type units Defense by 5%",
            lv6: "Increase North God type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Blind Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Blind Resistance by 50%			",
        },
        activeSkill: {
            one: {
                title: "Sneaky",
                desc: "Inflicts Raid to self + 150% Sword Damage to 1 enemy",
            },
            two: {
                title: "Listen Up",
                desc: "Chance to inflict Rage to 1 enemy (3 turns) +  lowers Magic Attack by 10% (3 turns)",
            },
        },
    },
    {
        thumb: "cc_0001002_01.png",
        title: "Overflowing with Talent",
        name: "Rudeus",
        rarity: "3",
        element: "Water God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "500",
            atk: "450",
            def: "100",
            spd: "12",
        },
        mlb: {
            hp: "800",
            atk: "800",
            def: "130",
        },
        leaderSkill: {
            title: "Overflowing with Talent",
            lv1: "Increase Water God type units Defense by 5%",
            lv6: "Increase Water God type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Rage Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Protective Stance",
                desc: "Creates Barrier to self (2 turns) + increase Sword Defense by 10% (2 turns)",
            },
            two: {
                title: "Water Cannon [Splash Flow]",
                desc: "Deals 100% Magic Damage to 3 enemies + inflicts Stun to 1 enemy of Sword God type (2 turns)",
            },
        },
    },
    {
        thumb: "cc_0005001_01.png",
        title: "Buena Village Knight",
        name: "Paul",
        rarity: "3",
        element: "Water God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "800",
            atk: "250",
            def: "150",
            spd: "12",
        },
        mlb: {
            hp: "1250",
            atk: "600",
            def: "210",
        },
        leaderSkill: {
            title: "Buena Village Knight",
            lv1: "Increase Water God type units Health by 5%",
            lv6: "Increase Water God type units Health by 10%",
        },
        passiveSkill: {
            title: "Sword Attack UP",
            lv1: "Increase own Sword Attack by 10% + Rage Resistance by 30%",
            lv5: "Increase own Sword Attack by 20% + Rage Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Protective Blade",
                desc:
                    " - Deals 70% Sword Damage to 1 enemy + inflicts Provoke (3 turns) + increase own Sword Defense by 30% (3 turns)",
            },
            two: {
                title: "Water God Style",
                desc: "Deals 150% Sword Damage to 1 enemy + nullifies Sword Damage to self (1 time)",
            },
        },
    },
    {
        thumb: "cc_0007004_01.png",
        title: "Skilled Maid",
        name: "Lilia",
        rarity: "3",
        element: "Water God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "700",
            atk: "200",
            def: "150",
            spd: "9",
        },
        mlb: {
            hp: "1000",
            atk: "300",
            def: "210",
        },
        leaderSkill: {
            title: "Skilled Maid",
            lv1: "Increase Water God type units Defense by 5%",
            lv6: "Increase Water God type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Burn Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Burn Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Concentrate",
                desc: "Increase own Crit Rate by 50% (3 turns)",
            },
            two: {
                title: "Repulsed",
                desc: "Lowers all enemies Sword Attack by 20% (3 turns) + reduces Buff turns of 1 enemy by 3 turns",
            },
        },
    },
    {
        thumb: "cc_0016003_01.png",
        title: "Investigative Journey",
        name: "Elinalise",
        rarity: "3",
        element: "Water God",
        tier: {
            rank: "-",
            desc: "",
        },
        base: {
            hp: "600",
            atk: "200",
            def: "200",
            spd: "15",
        },
        mlb: {
            hp: "850",
            atk: "300",
            def: "310",
        },
        leaderSkill: {
            title: "Investigative Journey",
            lv1: "Increase Water God type units Defense by 5%",
            lv6: "Increase Water God type units Defense by 10%",
        },
        passiveSkill: {
            title: "Sword Defense UP",
            lv1: "Increase own Sword Defense by 10% + Faint Resistance by 30%",
            lv5: "Increase own Sword Defense by 20% + Faint Resistance by 50%",
        },
        activeSkill: {
            one: {
                title: "Concentrate",
                desc: "Increase own Crit Rate by 60% (3 turns)",
            },
            two: {
                title: "Substitution",
                desc: "Creates Barrier to self (2 turns) + 5% Auto Recovery (2 turns)",
            },
        },
    },
];
