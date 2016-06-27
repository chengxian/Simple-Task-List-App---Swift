Rails.application.routes.draw do
	
	namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :tasks
			resources :users
			resources :sessions, only: :create
    end
  end
	
	get '/docs', :to => redirect('/doc/index.html')
end
