class CakesController < ApplicationController

    def index 
        render json: Cake.all
    end

    def show
        cake = Cake.find_by(id: params[:id])

        if cake
            render json: cake
        else 
            render json: {error: "Cake Not Found"}, status: :not_found
        end 

    end
    
    def create 

        new_cake = Cake.create(cake_params)

        if new_cake 
            render json: new_cake
        else
            render json: {errors: new_cake.errors.full_messages}, status: :unprocessable_entity
        end 


    end 

    def update
        cake_up = Cake.find_by(id: params[:id])

        if cake_up 
            cake_up.update(cake_params)
            render json: cake_up 
        else 
            render json: {error: "Cake Not Found"}, status: :not_found
        end 

    end

    def destroy
        # byebug
        cake_del = Cake.find_by(id: params[:id])

        if cake_del
            cake_del.destroy
            render json: cake_del
            # head :no_content
        else 
            # byebug
            render json: {error: "Cake Not Found"}, status: :not_found
        end 
    end 

    private 
    def cake_params 
        params.permit(:name,:image,:ingredients, :user_id)
    end 

end
