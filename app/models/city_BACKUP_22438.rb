class City < ApplicationRecord
<<<<<<< HEAD
  validates :name, :img_url, presence: true;
=======
  validates :name, presence: true;

  has_many :events
>>>>>>> create-events-backend
end
