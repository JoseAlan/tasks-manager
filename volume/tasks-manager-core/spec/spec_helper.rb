# coverage
require 'simplecov'
require 'simplecov-console'

SimpleCov.start do
  track_files '{app,lib}/**/*.rb'
  add_filter 'spec/'
end

RSpec.configure do |config|
  config.define_derived_metadata(file_path: Regexp.new('/spec/services/')) do |metadata|
    metadata[:type] = :services
  end

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end
