class FixCitiesName < ActiveRecord::Migration[5.0]
  def change
    remove_column :cities, :CreateCities
    add_column :cities, :name, :string
  end
end
