class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password_digest, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.new(pw)
  end

  def self.gen_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.gen_session_token
    self.save
  end

  def find_by_credentials(username, pw)
    user = User.find_by(username: username)
    #TODO: throw specific error for invalid username?
    return nil unless user

    user.is_password?(pw) ? user : nil
  end

  def is_password?(pw)
    userBCrypt::Password.create(self.password_digest).is_password?(pw)
  end

  private

  def ensure_session_token
    self.session_token ||= gen_session_token
  end
end
