# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path


# old precompiles
# Rails.application.config.assets.precompile += %w( graph.js )
# Rails.application.config.assets.precompile += %w( chart.js )
# Rails.application.config.assets.precompile += %w( csv_chart.js )
# Rails.application.config.assets.precompile += %w( jquery.js )
# Rails.application.config.assets.precompile += %w( jquery_ujs.js )
Rails.application.config.assets.precompile += %w( dataTables/jquery.dataTables.js )

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
