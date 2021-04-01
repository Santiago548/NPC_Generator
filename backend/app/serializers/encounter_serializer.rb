class EncounterSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name
    has_many :npcs
end