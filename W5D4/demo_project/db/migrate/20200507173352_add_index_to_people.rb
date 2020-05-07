class AddIndexToPeople < ActiveRecord::Migration[5.2]
  def change
    add_index :people, :name
    add_index :people, :house_id
  end
end
