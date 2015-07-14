class CreateTransformers < ActiveRecord::Migration
  def change
    create_table :transformers do |t|
      t.integer :location_id, null: false

      t.string :name, null: false
      t.string :type

      t.timestamps null: false
    end
  end
end
