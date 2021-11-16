class UsersController < ApplicationController
    def index
        #display all users
        users = User.all
        render component: "Users", props: {users: users}
    end

    def show
        #display 1 user at their :id
    end

    def new
        #pulls up form for entering a new user
    end

    def create
        #makes the new user based on params
    end

    def edit
        #pulls up form for editing a user
    end

    def update
        #changes the user
    end

    def destroy
        #deletes
    end
end
