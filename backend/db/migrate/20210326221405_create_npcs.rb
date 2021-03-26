class CreateNpcs < ActiveRecord::Migration[6.1]
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :sex
      t.string :alignment
      t.string :description
      t.string :strength
      t.string :dexterity
      t.string :constitution
      t.string :wisdom
      t.string :charisma
      t.string :id
      t.string :encounter_id

      t.timestamps
    end
  end
end
