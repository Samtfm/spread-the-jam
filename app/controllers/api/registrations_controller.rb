class Api::RegistrationsController < ApplicationController
  def create
    @registration = Registration.new(registration_params);
    if @registration.save
      render :show
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  def registration_params
    params.require(:registration).permit(:userId, :eventId)
  end
end
