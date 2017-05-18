class Event < ApplicationRecord
  validates :date, :time, :address, presence: true
  validates :city, :host, presence: true, uniqueness: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :city
end
