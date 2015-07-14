class LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def show
    @location = Location.find(params[:id])
    @transformers = @location.transformers
    @id = params[:id]
  end

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(location_params)

    if @location.save
      redirect_to locations_path, notice: "Location was successfully created."
    else
      render :new, notice: "Your location could not be saved."
    end
  end

  private

  def location_params
    params.require(:location).permit(:name)
  end

end
