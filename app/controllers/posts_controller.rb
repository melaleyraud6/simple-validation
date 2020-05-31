class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      redirect_to root_path
    end
      render :new 
  end

  private
  def post_params
    params.require(:post).permit(:name, :email , :content)
  end
end
