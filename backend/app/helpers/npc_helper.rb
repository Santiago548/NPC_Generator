module NpcHelper
    def npc_languages
        ["Common",
        "Dwarvish",
        "Elvish",
        "Gnomish",
        "Goblin",
        "Halfling",
        "Orc"]
    end

    def npc_weapons
        ["Simple Weapons",
        "Martial Weapons",
        "Firearms",
        "Exotic Weapons",]
    end

    def npc_race
        ["Dragonborn",
         "Dwarf",
         "Elf",
         "Gnome",
         "Half-Elf",
         "Halfling",
         "Half-Orc",
         "Human",
         "Tiefling",
         "Orc of Exandria",
         "Leonin",
         "Satyr",
         "Genasi",
         "Goliath",
         "Aasimar",
         "Bugbear",
         "Firbolg",
         "Goblin",
         "Hobgoblin",
         "Kenku",
         "Kobold",
         "Lizardfolk",
         "Orc",
         "Tabaxi",
         "Triton",
         "Yuan-ti Pureblood",
         "Feral Tiefling",
         "Tortle",
         "Changeling",
         "Kalashtar",
         "Orc of Eberron",
         "Shifter",
         "Warforged",
         "Gith",
         "Centaur",
         "Loxodon",
         "Minotaur",
         "Simic hybrid",
         "Vedalken",
         "Verdan",
         "Locathah",
         "Grung"]
    end

    def skill_strength
        case @npc.strength
        when @npc.strength = 1
            "12"
        when @npc.strength = 2
            "14"
        when @npc.strength = 3
            "16"
        when @npc.strength = 4
            "18"
        when @npc.strength = 5
            "20"
        when @npc.strength = 6
            "22"
        end
    end

    def skill_dexterity
        case @npc.dexterity
        when @npc.dexterity = 1
            "12"
        when @npc.dexterity = 2
            "14"
        when @npc.dexterity = 3
            "16"
        when @npc.dexterity = 4
            "18"
        when @npc.dexterity = 5
            "20"
        when  @npc.dexterity= 6
            "22"
        end
    end

    def skill_constitution
        case@npc.constitution
        when @npc.constitution = 1
            "12"
        when @npc.constitution = 2
            "14"
        when @npc.constitution = 3
            "16"
        when @npc.constitution = 4
            "18"
        when @npc.constitution = 5
            "20"
        when @npc.constitution = 6
            "22"
        end
    end

    def skill_intelligence
        case@npc.intelligence
        when @npc.intelligence = 1
            "12"
        when @npc.intelligence = 2
            "14"
        when @npc.intelligence = 3
            "16"
        when @npc.intelligence = 4
            "18"
        when @npc.intelligence = 5
            "20"
        when @npc.intelligence = 6
            "22"
        end
    end

    def skill_wisdom
        case@npc.wisdom
        when @npc.wisdom = 1
            "12"
        when @npc.wisdom = 2
            "14"
        when @npc.wisdom = 3
            "16"
        when @npc.wisdom = 4
            "18"
        when @npc.wisdom = 5
            "20"
        when @npc.wisdom = 6
            "22"
        end
    end

    def skill_charisma
        case@npc.charisma
        when @npc.charisma = 1
            "12"
        when @npc.charisma = 2
            "14"
        when @npc.charisma = 3
            "16"
        when @npc.charisma = 4
            "18"
        when @npc.charisma = 5
            "20"
        when @npc.charisma = 6
            "22"
        end
    end

    
end