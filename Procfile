web: bundle exec puma -t 3:3 -p ${PORT:-3000} -e ${RACK_ENV:-development}

worker: bundle exec sidekiq -c 2
