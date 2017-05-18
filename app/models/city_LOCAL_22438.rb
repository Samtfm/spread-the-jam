class City < ApplicationRecord
  validates :name, :img_url, presence: true;
end
