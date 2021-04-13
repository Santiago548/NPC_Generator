class NpcsController < ApplicationController
    def index
        npcs = Npc.all
        render json: NpcSerializer.new(npcs)
    end

    def show
        npc = Npc.find(params[:id])
        render json: NpcSerializer.new(npc)
    end

    def create
        npc = Npc.new(npc_params)

        if npc.save
            render json: NpcSerializer.new(npc)
        else
            render json: {error: "NPC couldn't be created"}
        end
    end

    def destroy
        npc = Npc.find(params[:id])
        npc.destroy
        render json: {message: "#{npc.name} has been deleted!"}
    end
    
    private

    def npc_params
        params.require(:npc).permit(:name, :race, :sex, :alignment, :melee, :ranged, :health, :armor, :strength, :dexterity, :constitution, :wisdom, :charisma, :encounter_id) 
    end
end
