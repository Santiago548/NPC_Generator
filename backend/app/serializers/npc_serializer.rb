class NpcSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :race, :sex, :alignment, :melee, :ranged, :strength, :dexterity, :constitution, :wisdome, :charisma, :id, :encounter_id
    #belongs_to :encounter
end