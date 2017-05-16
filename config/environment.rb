# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


# do the camelize thing that
Jbuilder.key_format camelize: :lower
