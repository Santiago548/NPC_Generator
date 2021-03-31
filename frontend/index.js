const npcForm = document.getElementById('npc-form')
const encounterForm = document.getElementById('encounter-form')
const npcAdapter = new NpcAdapter
const encounterAdapter = new EncounterAdapter

document.addEventListener('DOMContentLoaded', () => {
    npcAdapter.fetchNpcs()
    encounterAdapter.fetchEncounters()
    npcForm.addEventListener('submit', npcAdapter.handleFormSubmit)
    encounterForm.addEventListener('submit', encounterAdapter.handleFormSubmit)
})