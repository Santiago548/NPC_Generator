class EncountersController < ApplicationController

    def index
        encounters = Encounter.all
        render json: EncounterSerializer.new(encounters, {include: [:npcs]}) 
    end

    def show
        encounter = Encounter.find(params[:id])
        render json: EncounterSerializer.new(encounter)
    end

    def create
        encounter = Encounter.new(encounter_params)

        if encounter.save
            render json: EncounterSerializer.new(encounter)
        else
            render json: {error: "encounter could not be created"}
        end
    end

    def destroy
        encounter = Encounter.find(params[:id])
        encounter.destroy
        render json: {message: `#{encounter.name} has been deleted`}
    end

    def update
        encounter = Encounter.find(params{:id})
        encounter.update(encounter_params)
        render json: EncounterSerializer.new(encounter)
    end

private

    def encounter_params
        params.require(:encounter).permit(:name, :description, :environment)
    end
end
