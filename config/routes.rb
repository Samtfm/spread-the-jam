Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show] do
      resources :events, only: [:index, :create]
    end
    resources :users, only: [:create, :update] do
      resources :events, only: [:index]
    end
    resources :events, only: [ :show, :update, :destroy]
    resources :registrations, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
