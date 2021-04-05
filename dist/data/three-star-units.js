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
                description: "Deals 150% Magic Damage to 1 enemy + chance to inflict Burn to the target (1 turn)",
            },
            two: {
                title: "Magic Control",
                description: "Increase own Magic Attack by 100% (3 turns) + lowers Skill Cooldown by 20 seconds",
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
                description:
                    "Increase Magic Attack of all allies by 30% (3 turns) + 15% Attack if ally is a Fire type unit (3 turns)",
            },
            two: {
                title: "Great Fire Ball [Ex. Flame]",
                description: "Deals 190% Magic Damage to 1 enemy",
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
                description:
                    "Increase Magic Attack of all allies by 30% (3 turns) + 15% Attack if ally is a Fire type unit (3 turns) ",
            },
            two: {
                title: "Onegai Nyan✰✰✰",
                description: "Deals 150% Sword Damage to 1 enemy + chance to inflict Paralyze to the target (2 turns)",
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
                description: "Lowers 1 enemy Defense by 20% (3 turns)",
            },
            two: {
                title: "Repulsed",
                description:
                    "Lowers all enemies Magic Attack by 20% (3 turns) + reduces Buff turns of 1 enemy by 3 turns",
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
                description: "Deals 150% Sword Damage to 1 enemy + decrease Sword Defense by 20% (3 turns)",
            },
            two: {
                title: "Magic Power Eye Release",
                description:
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
                description: "Deals 150% Magic Damage to 1 enemy + lowers Crit Rate by 10% (3 turns)",
            },
            two: {
                title: "Water Cannon [Splash Flow]",
                description: "100% Magic Damage to 3 enemies + inflicts Stun to 1 enemy of a Fire type (2 turns)",
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
                description: "Deals 150% Magic Damage to 1 enemy + lowers Crit Rate by 10% (3 turns)",
            },
            two: {
                title: "Magic Control",
                description: "Increases own Magic Attack by 100% (3 turns) + lowers Skill Cooldown by 20 seconds",
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
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
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
            title: "",
            lv1: "",
            lv6: "",
        },
        passiveSkill: {
            title: "",
            lv1: "",
            lv5: "",
        },
        activeSkill: {
            one: {
                title: "-",
                description: "",
            },
            two: {
                title: "-",
                description: "",
            },
        },
    },
];
