class Sample < ActiveRecord::Base
  belongs_to :user
  belongs_to :transformer

  validates :user_id, presence: true
  validates :transformer_id, presence: true
  validates :date, presence: true
end
