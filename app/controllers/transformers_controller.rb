class TransformersController < ApplicationController
  def index
    @transformers = Transformer.all
  end

  def new
    @transformer = Transformer.new
  end

  def create
    @transformer = Transformer.new(transformer_params)

    if @transformer.save
      redirect_to transfomers_path, notice: "Transformer was successfully created."
    else
      render :new, notice: "Your transformer could not be saved."
    end
  end

  private

  def transformer_params
    params.require(:transformer).permit(:name, :type)
  end

end
