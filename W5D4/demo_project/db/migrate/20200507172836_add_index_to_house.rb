class AddIndexToHouse < ActiveRecord::Migration[5.2]
  def change
    add_index :houses, :address, unique: true
  end
end
