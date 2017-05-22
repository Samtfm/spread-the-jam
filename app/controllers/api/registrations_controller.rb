class Api::RegistrationsController < ApplicationController
  def create
    @registration = Registration.new(registration_params)
    if @registration.save
      render :show
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy
    @registration = Registration.find_by(registration_params)
    if @registration.destroy
      render :show
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def registration_params
    params.require(:registration).permit(:user_id, :event_id)
  end
end
