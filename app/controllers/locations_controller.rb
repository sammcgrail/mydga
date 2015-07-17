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
    @location.user = current_user

    if @location.save
      redirect_to locations_path, notice: "Location was successfully created."
    else
      render :new, notice: "Your location could not be saved."
    end
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
      flash[:success] = 'Location edited successfully.'
    redirect_to location_path(@location)
    else
      flash[:warning] = 'Location was not edited.'
    render :edit
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    redirect_to locations_path
  end



  private

  def location_params
    params.require(:location).permit(:name, :user_id)
  end
end
