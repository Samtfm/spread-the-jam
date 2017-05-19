class EventsCombineDateTime < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :date
    remove_column :events, :time
    add_column :events, :date_time, :datetime, null: false
  end
end
