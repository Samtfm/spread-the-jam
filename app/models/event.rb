# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  address     :string           not null
#  description :text
#  city_id     :integer          not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  date_time   :datetime         not null
#

class Event < ApplicationRecord
  validates :date_time, :address, presence: true
  validates :city, :host, presence: true, uniqueness: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :city

  has_many :registrations

  has_many :users, through: :registrations
end
