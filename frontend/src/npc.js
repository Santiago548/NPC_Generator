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

        Npc.all.push(this)
    }
    
}
