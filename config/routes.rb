Rails.application.routes.draw do

  devise_for :users
  resources :homes
  resources :admin
  root 'admin#index'
   get 'admin/section1' =>'admin#section1'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
