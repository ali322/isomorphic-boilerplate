SHELL := /bin/bash
PATH := node_modules/.bin:$(PATH)

start:
	@gulp nodemon

.PHONY:start
