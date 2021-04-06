const npcForm = document.getElementById('npc-form')
const npcAdapter = new NpcsAdapter
const encounterAdapter = new EncountersAdapter
// const encounterForm = document.getElementById('encounter-form')

document.addEventListener('DOMContentLoaded', () => {
    // if(Npc.prop){
        npcAdapter.fetchNpcs()
    // } else {
        // console.log("No Npcs exist")
    // }
    encounterAdapter.fetchEncounters()
    npcForm.addEventListener('submit', npcAdapter.handleFormSubmit)
    // encounterForm.addEventListener('submit', encounterAdapter.handleFormSubmit)
})