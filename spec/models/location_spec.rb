require 'rails_helper'

describe Location do
  it { should have_many :transformers }

  it { should have_valid(:name).when("Boston") }
  it { should_not have_valid(:name).when(nil) }
end
