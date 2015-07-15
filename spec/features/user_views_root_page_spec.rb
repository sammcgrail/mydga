require 'rails_helper'

feature 'user views web site info in the root page', %{
  As a user
  I can see info about the website
  So that I can know more
} do

  # Acceptance Criteria
  # [] I can click on About and see information about the website

  scenario 'user visits root page' do
    visit root_path


    expect(page).to have_content("Dissolved Gas Analysis")
  end
end
