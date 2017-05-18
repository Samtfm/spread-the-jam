class Api::EventsController < ApplicationController
  def index

  end

  def show

  end

  def create

  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end

  private

  def event_params
    params.require(:event).permit(:date, :time, :address, :description, :city_id, :host_id)
  end
end
