class EncountersController < ApplicationController

    def index
        encounters = encounter.all
        render json: EncounterSerializer.new(encounters, {include: [:npcs]})
    end

    def show
        encounter = Encounter.find(params[:id])
        render json: EncounterSerializer.new(encounter)
    end
end
