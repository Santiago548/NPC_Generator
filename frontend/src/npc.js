class Npc{
    static all = []

    constructor({name, race, sex, alignment, melee, ranged, health, armor, strength, dexterity, constitution, wisdom, charisma, id }){ // encounter_id
        this.name = name
        this.race = race
        this.sex = sex
        this.alignment = alignment
        this.melee = melee
        this.ranged = ranged
        this.health = health
        this.armor = armor
        this.strength = strength
        this.dexterity = dexterity
        this.constitution = constitution
        this.wisdom = wisdom
        this.charisma = charisma
        this.id = id
        // this.encounter_id = encounter_id
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
        <span class="name">${this.name}</span><br>
        The <span class="alignment">${this.alignment}</span>
        <span class="sex">${this.sex}</span>
        <span class="race">${this.race}</span><br>
        <br>
        HEALTH: <span class="health">${this.health + (this.constitution * 6)}</span><br>
        ARMOR: <span class="health">${this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)}</span><br><br>
        <b>WEAPONS:</b><br>
        MELEE: <span class="melee">${this.melee} + ${this.strength}</span> <br>
        RANGED: <span class="ranged">${this.ranged} + ${this.dexterity}</span><br><br>
        <b>ABILITY SCORES:</b><br>
        Strength +<span class="strength">${this.strength}</span><br>
        Dexterity +<span class="dexterity">${this.dexterity}</span><br>
        Constitution +<span class="constitution">${this.constitution}</span><br>
        Wisdom +<span class="wisdom">${this.wisdom}</span><br>
        Charisma +<span class="charisma">${this.charisma}</span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }


   handleListClick = (e) => {
       if (e.target.className === "delete"){
           let id = e.target.dataset.id
           npcAdapter.deleteNpc(id)
       }
   }
}
