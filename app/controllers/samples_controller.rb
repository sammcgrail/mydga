class SamplesController < ApplicationController
  def index
    @samples = Sample.all
  end

  def show
    @sample = Sample.find(params[:id])
    # @id = params[:id]
    @transformer_id = @sample.transformer_id
    @transformer = @sample.transformer
    @sample_json = @sample.to_json
    gon.sample = @sample

    # move these to model
    gon.hydrogen = @sample.hydrogen
    gon.oxygen = @sample.oxygen
    gon.nitrogen = @sample.nitrogen
    gon.methane = @sample.methane
    gon.carbon_monoxide = @sample.carbon_monoxide
    gon.ethane = @sample.ethane
    gon.ethylene = @sample.ethylene
    gon.carbon_dioxide = @sample.carbon_dioxide
    gon.acetylene = @sample.acetylene
    gon.r1 = @sample.acetylene / @sample.ethylene
    gon.r2 = @sample.methane / @sample.hydrogen
    gon.r3 = @sample.ethylene / @sample.ethane
  end

  def new
    @transformer = Transformer.find(params[:transformer_id])
    @sample = Sample.new
  end

  def create
    @sample = Sample.new(sample_params)
    @transformer = Transformer.find(params[:transformer_id])
    @sample.transformer = Transformer.find(params[:transformer_id])
    @sample.user = current_user

    if @sample.save
      flash[:success] = "Sample was successfully created."
      redirect_to transformer_path(params[:transformer_id])
    else
      flash[:warning] =  "Your sample could not be saved."
      render :new
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
