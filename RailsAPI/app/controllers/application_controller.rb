include ActionController::HttpAuthentication::Token::ControllerMethods
include ActionController::MimeResponds
include ApplicationHelper

class ApplicationController < ActionController::API
	
	private

			# Before filters
	    def restrict_access
	      unless restrict_access_by_params || restrict_access_by_header
	        render json: {message: 'Invalid API Token'}, status: 401
	        return
	      end

	      @current_user = @api_key.user if @api_key
	    end

	    def restrict_access_by_header
	      return true if @api_key

	      authenticate_with_http_token do |token|
	        @api_key = ApiKey.find_by(token: token)
	      end
	    end

	    def restrict_access_by_params
	      return true if @api_key

	      @api_key = ApiKey.find_by(token: params[:token])
	    end
end
