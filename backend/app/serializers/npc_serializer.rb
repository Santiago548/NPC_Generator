class NpcSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :race, :sex, :alignment, :melee, :ranged, :strength, :dexterity, :constitution, :wisdom, :charisma, :id
end