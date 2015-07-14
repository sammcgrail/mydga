class Location < ActiveRecord::Base
  has_many :transformers

  validates :name, presence: true
end
