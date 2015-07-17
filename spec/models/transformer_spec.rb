require 'rails_helper'

describe Transformer do
  it { should have_many :samples }
  it { should belong_to :location }

  it { should have_valid(:name).when("Big transformer") }
  it { should_not have_valid(:name).when(nil) }
end
