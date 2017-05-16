require 'test_helper'

class Api::UsersControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_users_controller_create_url
    assert_response :success
  end

end
