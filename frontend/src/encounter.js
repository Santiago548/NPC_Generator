class Encounter{
    static all = []

    constructor({name, description, environment, id}){
        this.name = name
        this.description = description
        this.environment = environment
        this.id = id
        this.npc_id = npc_id
        this.element = document.createElement('div')
        this.element.id = `encounter-${this.id}`

        Encounter.all.push(this)
    }

    get encounterList(){
        return document.getElementById('encounter-list')
    }
    
    static findById(id){
        return Encounter.all.find(encounter => encounter.id == id)
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
        <li>
        <span class="encounter-name">${this.name}</span>
        <span class="encounter-description">${this.description}</span>
        <span class="encounter-envionment">${this.environment}</span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }

   handleListClick = (e) => {
       if(e.target.className === "delete"){
           let id = e.target.dataset.id
           encounterAdapter.deleteencounter(id)
       }
   }
}
