require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryBot.build(:user,
      email: "test@gmail.com",
      password: "password"
    )
  end

  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least 6 }
  end
  
  describe "#is_password?" do
    it "checks if the entered password is correct" do
      expect(user.is_password?("password")).to be true
    end
  end

  describe "#reset_session_token!" do
    it "resets the user's session token" do
      prev_session_token = user.session_token
      expect(user.reset_session_token!).to_not eq prev_session_token
    end
  end

  describe "::find_by_credentials" do
    before { user.save! }

    context "if user exists, and credentials are correct" do
      it "returns the user" do
        expect(
          User.find_by_credentials("test@gmail.com", "password")
        ).to eq user
      end
    end

    context "if user doesn't exist, or credentials are incorrect" do
      it "returns nil" do
        expect(
          User.find_by_credentials("non_existant@email.com", "password")
        ).to eq nil
      end
    end
  end
end
