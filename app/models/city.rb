class City < ApplicationRecord
  validates :name, :img_url, presence: true;

  has_many :events
end
