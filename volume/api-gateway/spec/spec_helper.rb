# spec/spec_helper.rb
require 'simplecov'
require 'simplecov-console'
SimpleCov.start do
  track_files '{app,lib}/**/*.rb'
end
require 'rack/test'
require 'rspec'
require_relative '../config/environment'

ENV['RACK_ENV'] = 'test'

module RSpecMixin
  include ParamsHelper
  include Rack::Test::Methods
  def app
    ApplicationController.new
  end
end

# For RSpec 2.x and 3.x
RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include RSpecMixin
end

RSpec::Matchers.define(:redirect_to) do |url|
  match do |response|
    response.status == 302 && response.headers['Location'] == url
  end
end
