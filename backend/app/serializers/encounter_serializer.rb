class EncounterSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :description, :environment, :id, :npc_id
    has_many :items
end