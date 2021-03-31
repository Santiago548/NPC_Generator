class CreateNpcs < ActiveRecord::Migration[6.1]
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :race
      t.string :sex
      t.string :alignment
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :wisdom
      t.integer :charisma
      t.belongs_to :encounter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
