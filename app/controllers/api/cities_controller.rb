class Api::CitiesController < ApplicationController

  def index
    @cities = City.all
    render :index
  end

  def show
    p params
    @city = City.find(params[:id])
    render :show
  end

end
