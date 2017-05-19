Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show] do
      resources :events, only: [:index, :create]
    end
    resources :users, only: [:create, :update]
    resources :events, only: [ :show, :update, :destroy]
    #TODO: nest some event routes under cities
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
