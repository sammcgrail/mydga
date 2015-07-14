class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|
      t.integer :user_id, null: false
      t.integer :transformer_id, null: false

      t.string :date, null: false

      t.decimal :hydrogen
      t.decimal :oxygen
      t.decimal :nitrogen
      t.decimal :methane
      t.decimal :carbon_monoxide
      t.decimal :ethane
      t.decimal :carbon_dioxide
      t.decimal :ethylene
      t.decimal :acetylene

      t.timestamps null: false
    end
  end
end
