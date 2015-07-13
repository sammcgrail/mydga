class GraphController < ApplicationController
  def index
  end

  def data
    respond_to do |format|
      format.json {
        render :json => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      }
    end
  end
end
