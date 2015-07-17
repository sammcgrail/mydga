class SamplesController < ApplicationController
  def index
    @samples = Sample.all
  end

  def show
    @sample = Sample.find(params[:id])
    # @id = params[:id]
    @transformer_id = @sample.transformer_id
    @transformer = @sample.transformer
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

  def edit
    @sample = Sample.find(params[:id])
    @transformer = @sample.transformer
  end

  def update
    @sample = Sample.find(params[:id])
    @transformer = @sample.transformer
    if @sample.update(sample_params)
      flash[:success] = 'Sample edited successfully.'
    redirect_to sample_path(@sample)
    else
      flash[:warning] = 'Sample was not edited.'
    render :edit
    end
  end

  def destroy
    @sample = Sample.find(params[:id])
    @sample.destroy
    redirect_to samples_path
  end

  private

  def sample_params
    params.require(:sample).permit(
      :date, :hydrogen, :oxygen, :nitrogen, :methane, :carbon_monoxide, :ethane, :carbon_dioxide, :ethylene, :acetylene, :user_id
    )
  end
end