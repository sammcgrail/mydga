class DataFilesController < ApplicationController
  def index
    @data_files = DataFile.all
  end

  def show
    @data_file = DataFile.find(params[:id])
  end

  def new
    @data_file = DataFile.new
  end

  def create
    @data_file = DataFile.new(data_file_params)
    @data_file.user = current_user

    if @data_file.save
      redirect_to data_files_path, notice: "Data File saved successfully."
    else
      render :new, notice: "Your Data File could not be saved."
    end
  end


  def download
    @data_file = DataFile.find(params[:id])
    url = @data_file.csv_file.url
    @file = CSV.parse(open(url))
  end

  private

  def data_file_params
    params.require(:data_file).permit(:name, :user_id, :csv_file)
  end
end
