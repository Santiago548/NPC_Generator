//post, patch, delete
class NpcAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/npcs'
    }

    fetchItems(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let npc = new Npc(el.attributes)
                npc.attachToDom(el)
            })
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('npc-name').value
        const race = document.getElementById('npc-race').value
        const sex = document.getElementById('npc-sex').value
        const alignment = document.getElementById('npc-alignment').value
        const strength = document.getElementById('npc-strength').value
        const dexterity = document.getElementById('npc-dexterity').value
        const constitution = document.getElementById('npc-constitution').value
        const wisdom = document.getElementById('npc-wisdom').value
        const charisma = document.getElementById('npc-charisma').value
    
        let newNpc = {
            name,
            race,
            sex,
            alignment,
            strength,
            dexterity,
            constitution,
            wisdom,
            charisma
        }

        let configNpc =  {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newNpc)
        }

        fetch(this.baseUrl, configNpc)
        .then(res => res.json())
        .then(json => {
            let npc = new Npc(json.data.attributes)
            npc.attachToDom()
        })
    }

    deleteNpc(id){
        let configNpc = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(this.baseUrl + `/${id}`, configNpc)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        Npc.all = Npc.all.filter(i => i.id !=id)
        let npc = document.getElementById(`npc-${id}`)
        npc.remove()
    }

}
