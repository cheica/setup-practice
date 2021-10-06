class UsersController < ApplicationController

    def index 
        render json: User.all
    end 

    def create 
        new_user = User.create(user_params)
        

        if new_user 
            render json: new_user
        else 
            render json: {errors: new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    private
    def user_params 
        params.permit(:name)
    end
end
