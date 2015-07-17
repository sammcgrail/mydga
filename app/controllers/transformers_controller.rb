class TransformersController < ApplicationController
  def index
    @transformers = Transformer.all
  end

  def show
    @transformer = Transformer.find(params[:id])
    @samples = @transformer.samples
    @location = @transformer.location
    @id = params[:id]
  end

  def new
    @location = Location.find(params[:location_id])
    @transformer = Transformer.new
  end

  def create
    @transformer = Transformer.new(transformer_params)
    @transformer.location = Location.find(params[:location_id])
    @transformer.user = current_user

    if @transformer.save
      redirect_to location_path(params[:location_id]), notice: "Transformer was successfully created."
    else
      render :new, notice: "Your transformer could not be saved."
    end
  end

  def edit
    @transformer = Transformer.find(params[:id])
    @location = @transformer.location
  end

  def update
    @transformer = Transformer.find(params[:id])
    @location = @transformer.location
    if @transformer.update(transformer_params)
      flash[:success] = 'Transformer edited successfully.'
    redirect_to transformer_path(@transformer)
    else
      flash[:warning] = 'Transformer was not edited.'
    render :edit
    end
  end

  def destroy
    @transformer = Transformer.find(params[:id])
    @transformer.destroy
    redirect_to transformers_path
  end

  private

  def transformer_params
    params.require(:transformer).permit(:name, :kind, :user_id)
  end
end
