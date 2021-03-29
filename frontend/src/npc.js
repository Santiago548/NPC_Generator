class Npc{
    static all = []

    constructor({name, race, sex, alignment, description, strength, dexterity, constitution, wisdom, charisma, id, encounter_id}){
        this.name = name
        this.race = race
        this.sex = sex
        this.alignment = alignment
        this.description = description
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
        this.npcList.append(render())
        this.addEventListeners()
    }


}
