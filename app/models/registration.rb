class Registration < ApplicationRecord
  validates :user, :event, presence: true
  validates :event, uniqueness: {scope: :user}
  belongs_to :user
  belongs_to :event

  def self.Register!(user, event);
    Registration.create(user_id: user.id, event_id: event.id);
  end
end
