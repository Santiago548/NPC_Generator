const npcForm = document.getElementById('npc-form')
// const encounterForm = document.getElementById('encounter-form')
const npcAdapter = new NpcsAdapter
// const encounterAdapter = new EncountersAdapter

document.addEventListener('DOMContentLoaded', () => {
    if(Npc.exists){
        npcAdapter.fetchNpcs()
    } else {
        console.log("No Npcs exist")
    }
    // encounterAdapter.fetchEncounters()
    npcForm.addEventListener('submit', npcAdapter.handleFormSubmit)
    // encounterForm.addEventListener('submit', encounterAdapter.handleFormSubmit)
})