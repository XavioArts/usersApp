class UsersController < ApplicationController
    def index
        #display all users
        users = User.all
        render component: "Users", props: {users: users}
    end

    def show
        #display 1 user at their :id
        user = User.find(params[:id])
        render component: "User", props: {user: user}
    end

    def new
        #pulls up form for entering a new user
        render component: "UserNew"
    end

    def create
        #makes the new user based on params
        User.create(full_name: params[:user][:full_name],age: params[:user][:age], gender: params[:user][:gender])
        redirect_to users_path
    end

    def edit
        #pulls up form for editing a user
    end

    def update
        #changes the user
    end

    def destroy
        #deletes
        user = User.find(params[:id])
        user.destroy
    end
end
