class Sample < ActiveRecord::Base
  belongs_to :user
  belongs_to :transformer

  validates :user_id, presence: true
  validates :transformer_id, presence: true
  validates :date, presence: true
  validates :hydrogen, presence: true
  validates :oxygen, presence: true
  validates :nitrogen, presence: true
  validates :carbon_dioxide, presence: true
  validates :carbon_monoxide, presence: true
  validates :ethane, presence: true
  validates :acetylene, presence: true
  validates :ethylene, presence: true
end
