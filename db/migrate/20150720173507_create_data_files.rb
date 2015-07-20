class CreateDataFiles < ActiveRecord::Migration
  def change
    create_table :data_files do |t|
      t.string :name, null: false

      t.string :location_id
      t.string :transformer_id
      t.string :sample_id

      t.string :user_id, null: false

      t.string :csv_file

      t.timestamps null: false
    end
  end
end
