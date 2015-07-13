class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|

      t.timestamps null: false
    end
  end
end
