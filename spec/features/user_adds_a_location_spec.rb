require 'rails_helper'

feature 'user adds a location', %{
  As a user
  I want to add a location
  So that I can a transformer to it
} do

  # Acceptance Criteria
  # [] template

  scenario 'user adds a location' do
    user = FactoryGirl.create(:user)

    visit user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button "Log in"




    visit new_location_path

    fill_in 'Name', with: 'Boston -test'

    click_button "Add Location"

    expect(page).to have_content("Boston -test")
  end
end
