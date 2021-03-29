class EncountersController < ApplicationController

    

    def encounter_params
        params.require(:encounter).permit(:name, :description, :environment)
    end
end
