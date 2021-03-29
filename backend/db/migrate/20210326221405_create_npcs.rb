class CreateNpcs < ActiveRecord::Migration[6.1]
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :race
      t.string :sex
      t.string :alignment
      t.string :description
      t.string :strength
      t.string :dexterity
      t.string :constitution
      t.string :wisdom
      t.string :charisma
      t.belongs_to :encounter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
