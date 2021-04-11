class Encounter{
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('h4')
        this.element.id = `encounter-${id}`
        this.encounterList = document.getElementById('encounter-list')
        this.encounterList2 = document.getElementById('encounter-list-2')
        this.encounterList3 = document.getElementById('encounter-list-3')
        this. sorted = false

        Encounter.all.push(this)
    }

    get npcs(){
        return Npc.all.filter(i => i.encounter_id == this.id)
    }
    
    static find(id){
        return Encounter.all.find(e => e.id == id)
    }

    addEventListeners(){
            this.element.addEventListener('click', this.displayNpcList)
    }
        
    attachToDom(){
        this.encounterList.append(this.render())
        this.encounterList2.append(this.render())
        this.encounterList3.append(this.render())
        this.addEventListeners()
    }
        
    render(){
        this.encounterList.innerHTML = `
        <button id="encounter-1" type="button">Encounter 1</button>
        `
        this.encounterList2.innerHTML = `
        <button id="encounter-2" type="button">Encounter 2</button>
        `
        this.encounterList3.innerHTML = `
        <button id="encounter-3" type="button">Encounter 3</button>
        `
        return this.encounterList
    }
        
    //working functionallity fully
    displayNpcList = (e) => {
        const npcList = document.getElementById('npc-list')
        
        npcList.innerHTML = ""
        this.npcs.forEach(i => {
            i.attachToDomNpcList()
        })
        
        let encounterHeader = document.getElementById('npcs-header')
        let id = e.target.id
        if(id == "encounter-1"){
            encounterHeader.innerHTML =
            "<h2 id='npcs-header'>Encounter 1 NPC's</h2>"
        } else if(id == "encounter-2"){
            encounterHeader.innerHTML = 
            "<h2 id='npcs-header'>Encounter 2 NPC's</h2>"
        } else if(id == "encounter-3"){
            encounterHeader.innerHTML = 
            "<h2 id='npcs-header'>Encounter 3 NPC's</h2>"
        }
        return encounterHeader
    }
}
