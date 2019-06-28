class AdminController < ApplicationController
  def index
  	@admin = Slider.first
  	@admin2 = Slider.second
  	@admin3 = Slider.third
  end
  def new
  	@admin = Slider.new
  	
  	
  end
  def edit
  	@admin = Slider.find(params[:id])
  	
  end
  def show
  	@admin = Slider.find(params[:id])
    
  end
  def create
  	@admin = Slider.new(slider_params)
      if @admin.save
        redirect_to admin_path(@admin) 
      else
        render 'new' 
      end
  end
  def update
  	@admin = Slider.find(params[:id])
		if @admin.update(slider_params)
			redirect_to admin_path(@admin)
		else
			render 'edit', notice: "Not updated"
		end
  end
  private
  def slider_params
  	params.permit(:heading, :paragraph)
  end
end
