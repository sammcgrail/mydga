class CreateTransformers < ActiveRecord::Migration
  def change
    create_table :transformers do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false

      t.string :name, null: false
      t.string :kind

      t.timestamps null: false
    end
  end
end
