class ApiKey
  include Mongoid::Document
	include Mongoid::Timestamps
	
	belongs_to 	:user
	
	before_create :create_token
	
  field :token, type: String
	
	private
		# Creates and assigns the token
		def create_token
	    begin
	      self.token = User.digest(User.new_token)
	    end while check_token_exists?(token)
	  end
		
		def check_token_exists?(token_value)
			return false if ApiKey.find_by(token: token_value).nil?
			true
		end
end
