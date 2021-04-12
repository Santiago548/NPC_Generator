class Npc < ApplicationRecord
    belongs_to :encounter
    validates :name, presence: true
end
