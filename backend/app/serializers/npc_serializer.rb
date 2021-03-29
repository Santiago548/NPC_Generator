class NpcSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :race, :sex, :alignment, :description, :strength, :dexterity, :constitution, :wisdome, :charisma, :id, :encounter_id
    #velongs_to :encounter
end