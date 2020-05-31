class Post < ApplicationRecord
  validates :name , :email, :content,  presence:true
  
end
