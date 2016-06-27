class User
	attr_accessor	:remember_token, :activation_token, :reset_token
	
  include ActiveModel::SecurePassword
  include Mongoid::Document
	include Mongoid::Timestamps
	
	has_many :tasks,   dependent: :delete
	has_one  :api_key, dependent: :delete

	before_save   :downcase_email
	after_create  :create_api_key
  
  field :email,             type: String
  field :password_digest,   type: String
	field :first_name,				type: String
	field :last_name,					type: String
  has_secure_password
	
  index({ email: 1 }, { unique: true, name: "users_email_index" })
	
  validates :password, length: { minimum: 6 }, allow_blank: true
  validates :first_name,  presence: true, length: { maximum: 30 }
	validates :last_name,  	presence: true, length: { maximum: 30 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                      format: { with: VALID_EMAIL_REGEX },
                      uniqueness: true
	
	# Returns the hash digest of the given string
	def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
	end
	
	# Returns a random token.
	def User.new_token
		SecureRandom.urlsafe_base64
	end
	
	def authenticated?(attribute, token)
		digest = send("#{attribute}_digest")
		return false if digest.nil?
		BCrypt::Password.new(digest).is_password?(token)
	end
	
	private
		# Converts email to all lower-case
		def downcase_email
			self.email = email.downcase
		end
		
		def create_api_key
    	self.api_key = ApiKey.create(user: :self)
    end
end
