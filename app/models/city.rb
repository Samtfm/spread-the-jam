# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  img_url    :string
#

class City < ApplicationRecord
  validates :name, :img_url, presence: true;

  has_many :events
  has_many :users
end
