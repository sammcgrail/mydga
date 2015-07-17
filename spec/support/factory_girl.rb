require 'factory_girl'

FactoryGirl.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password 'password'
    password_confirmation 'password'
  end

  factory :location do
    sequence(:name) { |n| "Boston #{n}" }
    user
  end

  factory :transformer do
    sequence(:name) { |n| "Transformer #{n}" }
    kind "LTC"
    user
    location
  end

  factory :sample do
    sequence(:date) { |n| "0#{n}/02/03" }
  end

end
