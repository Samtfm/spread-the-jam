class UnUniqueEventsColumns < ActiveRecord::Migration[5.0]
  def change
    remove_index :events, :city_id
    remove_index :events, :host_id
  end
end
