class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.string :address, null: false
      t.text :description
      t.integer :city_id, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :events, :city_id, unique: true
    add_index :events, :host_id, unique: true
  end
end
