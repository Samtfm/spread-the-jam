class AddImgurlToCities < ActiveRecord::Migration[5.0]
  def change
    add_column :cities, :img_url, :string
  end
end
