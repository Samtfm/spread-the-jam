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
  validates :date_time, :address, :city, :host, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :city
end
