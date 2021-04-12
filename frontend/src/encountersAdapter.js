//post, patch, delete
class EncountersAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/encounters'
    }

    fetchEncounters(){
            fetch(this.baseUrl)
            .then(res => res.json())
            .then(response => {
                response.data.forEach(el => {
                    this.sanitizeAndInitializeEncounter(el)
            })
        })
    }

    sanitizeAndInitializeEncounter(data){
        let encounter = new Encounter({id: data.id, ...data.attributes})
        encounter.attachToDom()
    }
}
