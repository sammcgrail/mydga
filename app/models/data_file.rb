class DataFile < ActiveRecord::Base
  belongs_to :user

  validates :user_id, presence: true
  validates :name, presence: true
  mount_uploader :csv_file, CsvFileUploader
end
