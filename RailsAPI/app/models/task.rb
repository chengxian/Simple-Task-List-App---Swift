class Task
	include Mongoid::Document
	include Mongoid::Timestamps

	belongs_to 	:user, index: true

	field :title, 					type: String
	field :completed, 			type: Boolean, default: false

	index({ user_id: 1, created_at: 1 })

	default_scope -> {order_by(:created_at => :desc)}

	validates :title, presence: true, length: { maximum: 50 }
end
