class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json
      end
    else
      render :new  
    end
    # if @post.save
    #   redirect_to root_path and return
    # else
    #   render :new   and return
    # end
  end

  private
  def post_params
    params.require(:post).permit(:name, :email , :content)
  end
end
