class Location < ActiveRecord::Base
  has_many :transformers
  has_many :samples, through: :transformers

  validates :name, presence: true
end
