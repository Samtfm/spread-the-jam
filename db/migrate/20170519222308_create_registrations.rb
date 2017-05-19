class CreateRegistrations < ActiveRecord::Migration[5.0]
  def change
    create_table :registrations do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :registrations, [:event_id, :user_id], unique: true;
  end
end
