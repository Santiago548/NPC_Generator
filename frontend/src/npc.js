class Npc{
    static all = []

    constructor({name, race, sex, alignment, melee, ranged, health, armor, strength, dexterity, constitution, wisdom, charisma, id, encounter_id }){
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
        this.encounter_id = encounter_id
        this.element = document.createElement('div')
        this.element.id = `npc-${this.id}`

        Npc.all.push(this)
    }

    get npcList(){
        return document.getElementById('npc-list')
    }

    get npcInfo(){
        return document.getElementById('npc-full-info')
    }

    get npc(){
        return Npc.all.filter(i => i.npc_id == this.id)
    }
    
    static findById(id){
        return Npc.all.find(npc => npc.id == id)
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
    }

    attachToDomNpcList(){
        this.npcList.append(this.renderNpcList())
        this.addEventListeners() 
    }
    
    renderNpcList(){
        this.element.innerHTML = `
        <fieldset>
        <legend style="text-transform:uppercase" class="name"><b>${this.name}</b></legend>
        The <span class="alignment">${this.alignment}</span>
        <span class="sex">${this.sex}</span>
        <span class="race">${this.race}</span><br>
        <br>
        HEALTH: <span class="health">${this.health + (this.constitution * 6)}</span><br>
        ARMOR: <span class="armor">${this.armor.split(' ').slice(0, 1) + ' ' + 'AC:' + ' ' +(parseInt(this.armor.split(' ').slice(1)) + this.dexterity)}</span><br><br>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="full-info" data-id="${this.id}">Full Info</button>
        </fieldset><br>
        `
        return this.element
    }
    
    displayNpc = (e) => {
        this.npcInfo.innerHTML = `
        <fieldset id="npc-full-info-${this.id}">
        <legend style="text-transform:uppercase" class="name"><b>${this.name}</b></legend>
        The <span class="alignment">${this.alignment}</span>
        <span class="sex">${this.sex}</span>
        <span class="race">${this.race}</span><br>
        <br>
        HEALTH: <span class="health">${this.health + (this.constitution * 6)}</span><br>
        ARMOR:
        <span class="armor">${this.armor.split(' ').slice(0, 1) + ' ' + 'AC:'}
        </span><br>
        <div id='shield-container'>
        <img id='image-shield' src='images/shield.png'>
        <span id='text-shield' class="armor-number">${(parseInt(this.armor.split(' ').slice(1)) + this.dexterity)}    
        </div>
        <b>WEAPONS:</b><br>
        MELEE: <span class="melee">${this.melee} + ${this.strength}</span> <br>
        RANGED: <span class="ranged">${this.ranged} + ${this.dexterity}</span><br><br>
        <b>ABILITY SCORES:</b><br>
        
        <div id='ability-container'>
            <div id='ability-str'>
                Strength |
            </div>
            <div id='ability-dex'>
                Dexterity |
            </div>
            <div id='ability-con'>
                Constitution |
            </div> 
            <div id='ability-wis'>
                Wisdom |
            </div>
            <div id='ability-cha'>
                Charisma
            </div>
        </div>
        
        <div ='npc-container'>
        <div id='ability-container'> 
                <img id='image-str' src='images/strlogo.png'>
            <div id='text-str' class="strength">
                + ${this.strength}
            </div>
                <img id='image-dex' src='images/dexlogo.png'>
            <div id='text-dex' class="dexterity">
                + ${this.dexterity}
            </div>
                <img id='image-con' src='images/conlogo.png'>
            <div id='text-con' class="constitution">
                + ${this.constitution}
            </div>
            <img id='image-wis' src='images/wislogo.png'>
            <div id='text-wis' class="wisdom">
                + ${this.wisdom}
            </div>
                <img id='image-cha' src='images/chalogo.png'>
            <div id='text-cha' class="charisma">
                + ${this.charisma}</div>
            </div>
            <button class="hide-npc-full-info" data-id="${this.id}">Hide</button>
            </div>
        </fieldset>
        </div>
        `
        return this.element
    }

   handleListClick = (e) => {
       let id = e.target.dataset.id
       if (e.target.className === "delete"){
           npcAdapter.deleteNpc(id)
       } else if (e.target.className === 'full-info'){
           this.displayNpc(id)
       } else if (e.target.className === 'hide-npc-full-info'){
           this.hideNpcFullInfo()
       }
   }

   hideNpcFullInfo(){
    let npcel = document.getElementById("hide-npc-full-info")
    npcel.innerHTML = ""
   }

   armorFormat() {
    if(this.armor == "Padded 11") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
    } else if(this.armor == "Leather 11") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
    } else if(this.armor == "Studded Leather 12") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
   
    } else if(this.armor == "Hide 12") {
        if(this.dexterity == 1) {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else if(this.dexterity == 2){
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + 2)
        }
        
    } else if(this.armor == "Chain-Shirt 13") {
        if(this.dexterity == 1) {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else if(this.dexterity == 2){
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + 2)
        }

    } else if(this.armor == "Scale-Mail 14") {
        if(this.dexterity == 1) {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else if(this.dexterity == 2){
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + 2)
        }

    } else if(this.armor == "Spiked-Armor 14") {
        if(this.dexterity == 1) {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else if(this.dexterity == 2){
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + 2)
        }

    } else if(this.armor == "Breatplate 14") {
        if(this.dexterity == 1) {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else if(this.dexterity == 2){
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + 2)
        }
        
    } else if(this.armor == "Halfplate 15") {
        if(this.dexterity == 1) {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else if(this.dexterity == 2){
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + this.dexterity)
        } else {
            this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)) + 2)
        }
    } else if(this.armor == "Ring-Mail 14") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)))
    } else if(this.armor == "Chain-Mail 16") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)))
    } else if(this.armor == "Splint 17") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)))
    } else if(this.armor == "Plate 18") {
        this.armor.split(' ').slice(0, 1) + ' ' + "AC" + (parseInt(this.armor.split(' ').slice(1)))
    }
}

}
