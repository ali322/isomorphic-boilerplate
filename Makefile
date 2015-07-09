SHELL := /bin/bash
PATH := node_modules/.bin:$(PATH)

start:
	@gulp nodemon
develop-webpack:
	@make webpack && gulp develop-webpack
deploy-webpack:
	@make webpack-prod && gulp deploy-webpack
webpack:
	@webpack --config ./task/webpack.develop.js --display-error-details
webpack-prod:
	@webpack --config ./task/webpack.production.js --display-error-details

.PHONY:start
