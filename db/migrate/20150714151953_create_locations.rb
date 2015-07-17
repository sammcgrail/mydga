class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :user_id, null: false
      t.string :name, null: false
      t.string :latitude
      t.string :longitude

      t.timestamps null: false
    end
  end
end
