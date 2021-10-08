class User < ApplicationRecord
    has_many :cakes


    has_secure_password
    
  
end
