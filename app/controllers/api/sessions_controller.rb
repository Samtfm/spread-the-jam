class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in @user
      render :show
      # render json: { username: user.username, id: user.id, cityId: user.city_id }
    else
      render json: ["invalid username or password"], status: 401
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: ["you are not logged in"], status: 404
    end
  end
end
