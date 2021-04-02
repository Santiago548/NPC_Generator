class EncountersController < ApplicationController

    def index
        encounters = Encounter.all
        render json: EncounterSerializer.new(encounters, {include: [:npcs]})
    end

    def show
        encounter = Encounter.find(params[:id])
        render json: EncounterSerializer.new(encounter)
    end
end
