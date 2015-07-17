class Location < ActiveRecord::Base
  belongs_to :user
  has_many :transformers
  has_many :samples, through: :transformers

  validates :name, presence: true
  validates :user_id, presence: true
end
