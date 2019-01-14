Rails.application.routes.draw do
  resources :people, except: [:show]

  #get 'people/index'
  #get 'people/new'
  #get 'people/create'
  #get 'people/edit'
  #get 'people/update'
  #get 'people/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #root 'application#hello'
  root 'people#index'
end
