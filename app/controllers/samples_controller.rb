class SamplesController < ApplicationController
  def index
    @samples = Sample.all
  end

  def show
    @sample = Sample.find(params[:id])
  end

  def new
    @transformer = Transofmer.find(params[:location_id])
    @sample = Sample.new
  end

  def create
    @sample = Sample.new(sample_params)

    if @sample.save
      redirect_to samples_path, notice: "Sample was successfully created."
    else
      render :new, notice: "Your sample could not be saved."
    end
  end

  private

  def sample_params
    params.require(:sample).permit(
      :date, :hydrogen, :oxygen, :nitrogen, :methane, :carbon_monoxide, :ethane, :carbon_dioxide, :ethylene, :acetylene
    )
  end

end
