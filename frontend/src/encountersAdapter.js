//post, patch, delete
class EncountersAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/encounters'
    }

    fetchEncounters(){
        if(Encounter.exists){
            fetch(this.baseUrl)
            .then(res => res.json())
            .then(response => {
                response.data.forEach(el => {
                    this.sanitizeAndInitializeEncounter(el)
            })
        })
        } else {
            console.log("there are no Encounters")
        }
    }

    sanitizeAndInitializeEncounter(data){
        let encounter = new Encounter({id: data.id, ...data.attributes})
        encounter.attachToDom()
    }

    // handleFormSubmit = (e) => {
    //     e.preventDefault()
    //     const name = document.getElementById('encounter-name').value
        
    //     let newEncounter = {
    //         name
    //     }

    //     let configEncounter =  {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify(newEncounter)
    //     }

    //     fetch(this.baseUrl, configEncounter)
    //     .then(res => res.json())
    //     .then(json => {
    //         let encounter = new Encounter(json.data.attributes)
    //         encounter.attachToDom()
    //     })
    // }

    // deleteEncounter(id){
    //     let configEncounter = {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         }
    //     }

    //     fetch(this.baseUrl + `/${id}`, configEncounter)
    //     .then(res => res.json())
    //     .then(json => {
    //         alert(json.message)
    //     })
    //     Encounter.all = Encounter.all.filter(i => i.id !=id)
        
    //     let encounter = document.getElementById(`encounter-${id}`)
    //     encounter.remove()
    // }

}
