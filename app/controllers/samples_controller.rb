class SamplesController < ApplicationController
  def index
    @samples = Sample.all
  end

  def show
    @sample = Sample.find(params[:id])
    @id = params[:id]
    @transformer_id = @sample.transformer_id
  end

  def new
    @transformer = Transformer.find(params[:transformer_id])
    @sample = Sample.new
  end

  def create
    @sample = Sample.new(sample_params)
    @sample.transformer = Transformer.find(params[:transformer_id])
    @sample.user = current_user

    if @sample.save
      redirect_to transformer_path(params[:transformer_id]), notice: "Sample was successfully created."
    else
      render :new, notice: "Your sample could not be saved."
    end
  end

  def update
    @sample = Sample.find(params[:id])
  end

  def destroy
    @rubygem = Transformer.find(params[:transformer_id])
    @sample = Sample.find(params[:id])
    @sample.destroy
    redirect_to transformer_path(@transformer)
  end

  private

  def sample_params
    params.require(:sample).permit(
      :date, :hydrogen, :oxygen, :nitrogen, :methane, :carbon_monoxide, :ethane, :carbon_dioxide, :ethylene, :acetylene
    )
  end
end
