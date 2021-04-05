//post, patch, delete
class NpcsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/npcs'
    }

    fetchNpcs(){
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
        const melee = document.getElementById('npc-melee').value
        const ranged = document.getElementById('npc-ranged').value
        const health = document.getElementById('npc-health').value
        const armor = document.getElementById('npc-armor').value
        const strength = document.getElementById('npc-strength').value
        const dexterity = document.getElementById('npc-dexterity').value
        const constitution = document.getElementById('npc-constitution').value
        const wisdom = document.getElementById('npc-wisdom').value
        const charisma = document.getElementById('npc-charisma').value
        const encounter_id = document.getElementById('encounter').value
        
        let newNpc = {
            name,
            race,
            sex,
            alignment,
            melee,
            ranged,
            health,
            armor,
            strength,
            dexterity,
            constitution,
            wisdom,
            charisma,
            encounter_id
        }

        let configNpc = {
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

    // delete function
    deleteNpc(id){
        let configNpc = {
            method: 'DELETE',
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
        Npc.all = Npc.all.filter(i => i.id != id)
        
        let npc = document.getElementById(`npc-${id}`)
        npc.remove()
    }

    npcFullInfo(id){
        
    }

}



// sendPatchRequest(npcId){
//     const name = document.getElementById(`update-name-${npcId}`).value
//     const race = document.getElementById(`update-race-${npcId}`).value
//     const sex = document.getElementById(`update-sex-${npcId}`).value
//     const alignment = document.getElementById(`update-alignment-${npcId}`).value
//     const melee = document.getElementById(`update-melee-${npcId}`).value
//     const ranged = document.getElementById(`update-ranged-${npcId}`).value
//     const strength = document.getElementById(`update-strength-${npcId}`).value
//     const dexterity = document.getElementById(`update-dexterity-${npcId}`).value
//     const constitution = document.getElementById(`update-constitution-${npcId}`).value
//     const wisdom = document.getElementById(`update-wisdom-${npcId}`).value
//     const charisma = document.getElementById(`update-charisma-${npcId}`).value

//     let newNpc = {
//         name,
//         race,
//         sex,
//         alignment,
//         melee,
//         ranged,
//         strength,
//         dexterity,
//         constitution,
//         wisdom,
//         charisma
//     }

//     let configNpc = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(newNpc)
//     }

//     fetch(this.baseUrl + `/${npcId}`, configNpc)
//     .then(res => res.json())
//     .then(res => {
//         let npc = Npc.all.find(i => i.id == res.data.attributes.id)
//         npc.updateItemOnDom(res.data.attributes)

//         let form = document.getElementById(`update-form-${npcId}`)
//         form.remove()
//     })
// }