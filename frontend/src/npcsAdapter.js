//get, post, destroy
class NpcsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/npcs'
    }
// GET request
    fetchNpcs(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let npc = new Npc(el.attributes)
                npc.attachToDomNpcList(el)
            })
        })
    }
//random NPC form submit
    handleRandomSubmit = (e) => {
        e.preventDefault()

        const raceArray = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Human", "Tiefling", "Goliath", "Firbolg", "Goblin", "Orc", "Tabaxi", "Warforged"]
        const sexArray = ["Male", "Female", "Non-Binary"]
        const alignmentArray = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
        const healthArray = ["10", "15", "20", "25", "30"]
        const armorArray = ["Padded 11", "Leather 11", "Studded-Leather 12", "Hide 12", "Chain-Shirt 13", "Scale-Mail 14", "Spiked-Armor 14", "Breatplate 14", "Halfplate 15", "Ring-Mail 14", "Chain-Mail 16", "Splint 17","Plate 18"]
        const meleeArray = ["Battle Axe [1d8 Slashing]", "Club [1d4 Bludgeoning]", "Dagger [1d4 piercing]", "Greataxe [1d12 Slashing]", "Great Club [1d8 Bludgeoning]", "Hand Axe [1d6 Slashing]", "Long Sword [1d8 Slashing]", "Quarterstaff [1d6 Bludgeoning]", "Rapier [1d8 Piercing]", "Scimitar [1d6 Slashing]", "Short Sword [1d6 Slashing]"]
        const rangeArray = ["Blowgun [1 Piercing Range (25/100)]", "Light Crossbow [1D8 Piercing Range(80/320)]", "Dart [1D4 Piercing Range(20/60)]", "Shortbow [1D6 piercing Range(80/320)]", "Sling [1D4 piercing Range(30/120) ]", "Hand Crossbow [1D6 Piercing Range(30/120)]", "Heavy Crossbow [1D10 piercing Range(100/400)]", "Longbow [1D8 piercing Range(150/600)]"]
        const strArray = ["1", "2", "3", "4" ,"5", "6"]
        const dexArray = ["1", "2", "3", "4" ,"5", "6"]
        const conArray = ["1", "2", "3", "4" ,"5", "6"]
        const wisArray = ["1", "2", "3", "4" ,"5", "6"]
        const chaArray = ["1", "2", "3", "4" ,"5", "6"]

        const randomRace = raceArray[Math.floor(Math.random() * raceArray.length)]
        const randomSex = sexArray[Math.floor(Math.random() * sexArray.length)]
        const randomAlignment = alignmentArray[Math.floor(Math.random() * alignmentArray.length)]
        const randomHealth = healthArray[Math.floor(Math.random() * healthArray.length)]
        const randomArmor = armorArray[Math.floor(Math.random() * armorArray.length)]
        const randomMelee = meleeArray[Math.floor(Math.random() * meleeArray.length)]
        const randomRanged = rangeArray[Math.floor(Math.random() * rangeArray.length)]
        const randomStr = strArray[Math.floor(Math.random() * strArray.length)]
        const randomDex = dexArray[Math.floor(Math.random() * dexArray.length)]
        const randomCon = conArray[Math.floor(Math.random() * conArray.length)]
        const randomWis = wisArray[Math.floor(Math.random() * wisArray.length)]
        const randomCha = chaArray[Math.floor(Math.random() * chaArray.length)]
        const randomNameFunction = () => {

            const maleNameArray = ["Lydan","Syrin","Ptorik","Joz","Varog","Gethrod","Hezra","Feron","Ophni","Colborn","Fintis","Gatlin","Jinto","Hagalbar","Krinn","Lenox","Revvyn","Hodus","Dimian","Paskel","Kontas","Weston","Azamarr","Jather","Tekren","Jareth","Adon","Zaden","Eune","Graff","Tez","Jessop","Gunnar","Pike","Domnhar","Baske","Jerrick","Mavrek","Riordan","Wulfe","Straus","Tyvrik","Henndar","Favroe","Whit","Jaris","Renham","Kagran","Lassrin","Vadim","Arlo","Quintis","Vale","Caelan","Yorjan","Khron","Ishmael","Jakrin","Fangar","Roux","Baxar","Hawke","Gatlen","Barak","Nazim","Kadric","Paquin","Kent","Moki","Rankar","Lothe","Ryven","Clawsen","Pakker","Embre","Cassian","Verssek","Dagfinn","Ebraheim","Nesso","Eldermar","Rivik","Rourke","Barton","Hemm","Sarkin","Blaiz","Talon","Agro","Zagaroth","Turrek","Esdel","Lustros","Zenner","Baashar","Dagrod","Gentar","Feston"]
            const femaleNameArray = ["Syrana","Resha","Varin","Wren","Yuni","Talis","Kessa","Magaltie","Aeris","Desmina","Krynna","Asralyn","Herra","Pret","Kory","Afia","Tessel","Rhiannon","Zara","Jesi","Belen","Rei","Ciscra","Temy","Renalee","Estyn","Maarika","Lynorr","Tiv","Annihya","Semet","Tamrin","Antia","Reslyn","Basak","Vixra","Pekka","Xavia","Beatha","Yarri","Liris","Sonali","Razra","Soko","Maeve","Everen","Yelina","Morwena","Hagar","Palra","Elysa","Sage","Ketra","Lynx","Agama","Thesra","Tezani","Ralia","Esmee","Heron","Naima","Rydna","Sparrow","Baakshi","Ibera","Phlox","Dessa","Braithe","Taewen","Larke","Silene","Phressa","Esther","Anika","Rasy","Harper","Indie","Vita","Drusila","Minha","Surane","Lassona","Merula","Kye","Jonna","Lyla","Zet","Orett","Naphtalia","Turi","Rhays","Shike","Hartie","Beela","Leska","Vemery","Lunex","Fidess","Tisette","Partha"]
            const nonBinaryNameArray = ["Syrana","Resha","Varin","Wren","Yuni","Talis","Kessa","Magaltie","Aeris","Desmina","Krynna","Asralyn","Herra","Pret","Kory","Afia","Tessel","Rhiannon","Zara","Jesi","Belen","Rei","Ciscra","Temy","Renalee","Estyn","Maarika","Lynorr","Tiv","Annihya","Semet","Tamrin","Antia","Reslyn","Basak","Vixra","Pekka","Xavia","Beatha","Yarri","Liris","Sonali","Razra","Soko","Maeve","Everen","Yelina","Morwena","Hagar","Palra","Elysa","Sage","Ketra","Lynx","Agama","Thesra","Tezani","Ralia","Esmee","Heron","Naima","Rydna","Sparrow","Baakshi","Ibera","Phlox","Dessa","Braithe","Taewen","Larke","Silene","Phressa","Esther","Anika","Rasy","Harper","Indie","Vita","Drusila","Minha","Surane","Lassona","Merula","Kye","Jonna","Lyla","Zet","Orett","Naphtalia","Turi","Rhays","Shike","Hartie","Beela","Leska","Vemery","Lunex","Fidess","Tisette","Partha","Lydan","Syrin","Ptorik","Joz","Varog","Gethrod","Hezra","Feron","Ophni","Colborn","Fintis","Gatlin","Jinto","Hagalbar","Krinn","Lenox","Revvyn","Hodus","Dimian","Paskel","Kontas","Weston","Azamarr","Jather","Tekren","Jareth","Adon","Zaden","Eune","Graff","Tez","Jessop","Gunnar","Pike","Domnhar","Baske","Jerrick","Mavrek","Riordan","Wulfe","Straus","Tyvrik","Henndar","Favroe","Whit","Jaris","Renham","Kagran","Lassrin","Vadim","Arlo","Quintis","Vale","Caelan","Yorjan","Khron","Ishmael","Jakrin","Fangar","Roux","Baxar","Hawke","Gatlen","Barak","Nazim","Kadric","Paquin","Kent","Moki","Rankar","Lothe","Ryven","Clawsen","Pakker","Embre","Cassian","Verssek","Dagfinn","Ebraheim","Nesso","Eldermar","Rivik","Rourke","Barton","Hemm","Sarkin","Blaiz","Talon","Agro","Zagaroth","Turrek","Esdel","Lustros","Zenner","Baashar","Dagrod","Gentar","Feston"]

            if (randomSex == "Male") {
             return maleNameArray[Math.floor(Math.random() * maleNameArray.length)]
            } else if (randomSex == "Female") {
              return femaleNameArray[Math.floor(Math.random() * femaleNameArray.length)]
            } else {
             return nonBinaryNameArray[Math.floor(Math.random() * nonBinaryNameArray.length)]
            }
        }
        
        const name = randomNameFunction()
        // document.getElementById('npc-name-random').value
        const race = randomRace
        const sex = randomSex
        const alignment = randomAlignment
        const melee = randomMelee
        const ranged = randomRanged
        const health = randomHealth
        const armor = randomArmor
        const strength = randomStr
        const dexterity = randomDex
        const constitution = randomCon
        const wisdom = randomWis
        const charisma = randomCha
        const encounter_id = document.getElementById('encounter_id_random').value

        let newNpcRand = {
            name,
            race,
            sex,
            alignment,
            melee,
            ranged,
            health,
            armor,
            strength,
            dexterity,
            constitution,
            wisdom,
            charisma,
            encounter_id
        }

        let configNpcRand = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newNpcRand)
        }
        
        fetch(this.baseUrl, configNpcRand)
        .then(res => res.json())
        .then(json => {
            let npc = new Npc(json.data.attributes)
            npc.attachToDomNpcList() 
        })

        randomNpcForm.reset()
        npcForm.reset()
    }

    //// POST request for submitting a npc from the form
    handleFormSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('npc-name').value
        const race = document.getElementById('npc-race').value
        const sex = document.getElementById('npc-sex').value
        const alignment = document.getElementById('npc-alignment').value
        const melee = document.getElementById('npc-melee').value
        const ranged = document.getElementById('npc-ranged').value
        const health = document.getElementById('npc-health').value
        const armor = document.getElementById('npc-armor').value
        const strength = document.getElementById('npc-strength').value
        const dexterity = document.getElementById('npc-dexterity').value
        const constitution = document.getElementById('npc-constitution').value
        const wisdom = document.getElementById('npc-wisdom').value
        const charisma = document.getElementById('npc-charisma').value
        const encounter_id = document.getElementById('encounter').value
        
        const newNpc = {
            name,
            race,
            sex,
            alignment,
            melee,
            ranged,
            health,
            armor,
            strength,
            dexterity,
            constitution,
            wisdom,
            charisma,
            encounter_id
        }

        const configNpc = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newNpc) // sends the key value pairs of the newNpc object as a stringified version of JSON
        }

        fetch(this.baseUrl, configNpc) // 
        .then(res => res.json()) //returns a response and convert parsing it into a Javascript object
        .then(json => {
            const npc = new Npc(json.data.attributes)
            npc.attachToDomNpcList() // adds the newly instantiated Npc to the DOM
        }) // return the data from the response

        npcForm.reset()
        randomNpcForm.reset()

    }

    // delete function
    deleteNpc(id){
        let configNpc = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(this.baseUrl + `/${id}`, configNpc)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        Npc.all = Npc.all.filter(i => i.id != id)
        
        let npc = document.getElementById(`npc-${id}`)
        npc.remove()
        
        let npcFullInfo = document.getElementById(`npc-full-info-${id}`)
        npcFullInfo.remove()
    }
}

