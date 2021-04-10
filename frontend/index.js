const npcForm = document.getElementById('npc-form')
const randomNpcForm = document.getElementById('random-form')
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
    randomNpcForm.addEventListener('submit', npcAdapter.handleRandomSubmit)
    // encounterForm.addEventListener('submit', encounterAdapter.handleFormSubmit)
})