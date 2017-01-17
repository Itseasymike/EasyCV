Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root :to => "homes#index"
    resources :resumes, only: [:index,:create,:destroy,:update,:show]
    resources :games, only: [:index]
end
