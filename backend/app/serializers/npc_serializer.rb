class NpcSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :race, :sex, :alignment, :melee, :ranged, :health, :armor, :strength, :dexterity, :constitution, :wisdom, :charisma, :id
end