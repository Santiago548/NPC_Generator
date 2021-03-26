//post, patch, delete
class NpcAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/npc'
    }

    fetchItems(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let npc = new Npc(el.attributes)
                //npc.attachToDom(el)
            })
        })
    }
}
