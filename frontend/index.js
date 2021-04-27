const npcForm = document.getElementById('npc-form')
const randomNpcForm = document.getElementById('random-form')
const npcAdapter = new NpcsAdapter
const encounterAdapter = new EncountersAdapter
const evilButton = document.getElementById('evil')
// const encounterForm = document.getElementById('encounter-form')

document.addEventListener('DOMContentLoaded', () => {
    npcAdapter.fetchNpcs()
    encounterAdapter.fetchEncounters()
    npcForm.addEventListener('submit', npcAdapter.handleFormSubmit)
    randomNpcForm.addEventListener('submit', npcAdapter.handleRandomSubmit)
    evilButton.addEventListener('click', Npc.npcEvil)
})