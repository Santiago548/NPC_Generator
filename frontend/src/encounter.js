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
    
    addEventListeners(){
            this.element.addEventListener('click', this.handleListClick)
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
        
    static findById(id){
        return Encounter.all.find(encounter => encounter.id == id)
    }
    //working
    displayNpcList = (e) => {
        const npcList = document.getElementById('npc-list')
        
        npcList.innerHTML = ""
        this.npcs.forEach(i => {
            i.attachToDom()
        })
    }
    //working
    handleListClick = (e) => {
        let id = e.target.dataset.id
            if(e.target.className === "encounter-1"){
                encounterAdapter.displayNpcList(id)
            } else if(e.target.className === "encounter-2"){
                encounterAdapter.dispalyNpcList(id)
            } else if(e.targer.className === "encounter-3"){
                encounterAdapter.displayNpcList(id)
            }
        }
    }