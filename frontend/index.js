const npcForm = document.getElementById('npc-form')
const npcAdapter = new NpcAdapter

document.addEventListener('DOMContentLoaded', () =>{
    npcAdapter.fetchNpcs()
    npcForm.addEventListener('submit', npcAdapter.handleFormSubmit)
})