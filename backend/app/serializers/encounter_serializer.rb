class EncounterSerializer
    include FastJsonapi::ObjectSerializer
    has_many :items
end