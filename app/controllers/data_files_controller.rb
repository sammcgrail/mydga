class DataFilesController < ApplicationController
  def index
    @data_files = DataFile.all
  end

  def show
    @data_file = DataFile.find(params[:id])
    url = @data_file.csv_file.url
    @file = CSV.parse(open(url))
    gon.file = @file
    @file_json = @file.to_json.html_safe
    gon.file_json = @file_json

    @compound_names = @file[0]
    @rows = @file.count - 1
    @values = @file[1..@rows]

    gon.hydrogen = @values.map {|c| c[0] }
    gon.oxygen = @values.map {|c| c[1] }
    gon.nitrogen = @values.map {|c| c[2] }
    gon.methane = @values.map {|c| c[3] }
    gon.carbon_monoxide = @values.map {|c| c[4] }
    gon.ethane = @values.map {|c| c[5] }
    gon.carbon_dioxide = @values.map {|c| c[6] }
    gon.ethylene = @values.map {|c| c[7] }
    gon.acetylene = @values.map {|c| c[8] }

    gon.compound_names = @compound_names

    gon.hydrogen_column = gon.hydrogen.unshift(gon.compound_names[0])
    gon.oxygen_column = gon.oxygen.unshift(gon.compound_names[1])
    gon.nitrogen_column = gon.nitrogen.unshift(gon.compound_names[2])
    gon.methane_column = gon.methane.unshift(gon.compound_names[3])
    gon.carbon_monoxide = gon.carbon_monoxide.unshift(gon.compound_names[4])
    gon.ethane_column = gon.ethane.unshift(gon.compound_names[5])
    gon.carbon_dioxide_column = gon.carbon_dioxide.unshift(gon.compound_names[6])
    gon.ethylene_column = gon.ethylene.unshift(gon.compound_names[7])
    gon.acetylene_column = gon.acetylene.unshift(gon.compound_names[8])
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
