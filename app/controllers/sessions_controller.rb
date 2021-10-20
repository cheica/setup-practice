class SessionsController < ApplicationController

# //This creates a new session when u try logging in POST to /login 
    def create 

        user_logging = User.find_by_username(params[:username])

        if user_logging
            session[:user_id] = user_logging.id
            render json: user_logging

        else 
            
            render json: {error: "could not authenticate"}

        end 
    end 

#This logs u out 
    def destroy 
        session.delete(:user_id)

        head :no_content
    end 
end 