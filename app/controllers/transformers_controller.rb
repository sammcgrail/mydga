class TransformersController < ApplicationController
  def index
    @transformers = Transformer.all
  end

  def show
    @transformer = Transformer.find(params[:id])
    @samples = @transformer.samples
    @id = params[:id]
  end

  def new
    @location = Location.find(params[:location_id])
    @transformer = Transformer.new
  end

  def create
    @transformer = Transformer.new(transformer_params)
    @transformer.location = Location.find(params[:location_id])

    if @transformer.save
      redirect_to location_path(params[:location_id]), notice: "Transformer was successfully created."
    else
      render :new, notice: "Your transformer could not be saved."
    end
  end

  private

  def transformer_params
    params.require(:transformer).permit(:name, :kind)
  end
end
