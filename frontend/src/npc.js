class Npc{
    static all = []

    constructor({name, race, sex, alignment, melee, ranged, strength, dexterity, constitution, wisdom, charisma, id, encounter_id}){
        this.name = name
        this.race = race
        this.sex = sex
        this.alignment = alignment
        this.melee = melee
        this.ranged = ranged
        this.strength = strength
        this.dexterity = dexterity
        this.constitution = constitution
        this.wisdom = wisdom
        this.charisma = charisma
        this.id = id
        this.encounter_id = encounter_id
        this.element = document.createElement('div')
        this.element.id = `npc-${this.id}`

        Npc.all.push(this)
    }

    get npcList(){
        return document.getElementById('npc-list')
    }
    
    static findById(id){
        return Npc.all.find(npc => npc.id == id)
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
    }

    attachToDom(){
        this.npcList.append(this.render())
        this.addEventListeners()
    }

    render(){
        this.element.innerHTML = `
        <li>
        <span class="name">${this.name}</span>
        <span class="race">${this.race}</span>
        <span class="sex">${this.sex}</span>
        <span class="alignment">${this.alignment}</span>
        <span class="melee">${this.melee}</span>
        <span class="ranged">${this.ranged}</span>
        <span class="strength">${this.strength}</span>
        <span class="dexterity">${this.dexterity}</span>
        <span class="constitution">${this.constitution}</span>
        <span class="wisdom">${this.wisdom}</span>
        <span class="charisma">${this.charisma}</span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }

   handleListClick = (e) => {
       if(e.target.className === "delete"){
           let id = e.target.dataset.id
           npcAdapter.deleteNpc(id)
       }
   }
}
