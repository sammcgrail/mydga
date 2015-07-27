class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|
      t.integer :user_id, null: false
      t.integer :transformer_id, null: false

      t.string :date, null: false

      t.decimal :hydrogen, null: false
      t.decimal :oxygen, null: false
      t.decimal :nitrogen, null: false
      t.decimal :methane, null: false
      t.decimal :carbon_monoxide, null: false
      t.decimal :ethane, null: false
      t.decimal :carbon_dioxide, null: false
      t.decimal :ethylene, null: false
      t.decimal :acetylene, null: false

      t.timestamps null: false
    end
  end
end
