class Encounter{
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('h4')
        this.element.id = `encounter-${id}`
        this.encounterList = document.getElementById('encounter-list')
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
        this.addEventListeners()
    }
        
    render(){
        this.element.innerHTML = `
        <button id="encounter-${this.id}" type="button">${this.name}</button>
        `
        return this.element
    }
        
    //working fully
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
    
    //working
    // handleListClick = (e) => {
    //     let id = e.target.dataset.id
    //         if(e.target.className === "encounter-1"){
    //             encounterAdapter.displayNpcList(id)
    //         } else if(e.target.className === "encounter-2"){
    //             encounterAdapter.dispalyNpcList(id)
    //         } else if(e.targer.className === "encounter-3"){
    //             encounterAdapter.displayNpcList(id)
    //         }
    //     }
    // }