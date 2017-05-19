class AddNonUniqueIndexToEvents < ActiveRecord::Migration[5.0]
  def change
    add_index :events, :city_id
    add_index :events, :host_id
  end
end
