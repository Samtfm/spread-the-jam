class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :events,
    foreign_key: :host_id,
    class_name: :Event

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def self.gen_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.gen_session_token
    self.save
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    #TODO: throw specific error for invalid username?
    return nil unless user

    user.is_password?(pw) ? user : nil
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  private

  def ensure_session_token
    self.session_token ||= User.gen_session_token
  end
end
