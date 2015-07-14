class Transformer < ActiveRecord::Base
  belongs_to :location
  has_many :samples

  validates :name, presence: true
  validates :location_id, presence: true
end
