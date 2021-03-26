class CreateEncounters < ActiveRecord::Migration[6.1]
  def change
    create_table :encounters do |t|
      t.string :name
      t.string :description
      t.string :environment

      t.timestamps
    end
  end
end
