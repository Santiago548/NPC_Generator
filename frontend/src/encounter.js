class Encounter{
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('li')
        this.element.id = `encounter-${id}`
        this.encounterList = document.getElementById('encounter-list')
        this. sorted = false

        Encounter.all.push(this)
    }

    get encounterList(){
        return document.getElementById('encounter-list')
    }
    
    
    // addEventListeners(){
        //     this.element.addEventListener('click', this.handleListClick)
        // }
        
        attachToDom(){
            this.encounterList.append(this.render())
            this.addEventListeners()
        }
        
        render(){
            this.element.innerHTML = `
            <h3>${this.name}</h3>
            `
            return this.element
        }
        
        static findById(id){
            return Encounter.all.find(encounter => encounter.id == id)
        }
    }
    //    handleListClick = (e) => {
        //        if(e.target.className === "delete"){
            //            let id = e.target.dataset.id
            //            encounterAdapter.deleteencounter(id)
            //        }
            //    }
            