class Api::EventsController < ApplicationController
  def index
    if params[:city_id]
      @events = City.find(params[:city_id]).events
    else
      user = User.find(params[:user_id])
      @events = user.events + user.hosted_events
    end
    render :index
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def create
    @event = Event.new(event_params)
    @event.city_id = params[:city_id]
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
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
    params.require(:event).permit(:date_time, :address, :description, :host_id)
  end
end
