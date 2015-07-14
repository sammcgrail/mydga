require 'rails_helper'

describe Sample do
  it { should belong_to :transformer }

  it { should have_valid(:date).when("03/04/15") }
  it { should_not have_valid(:date).when(nil) }
end
