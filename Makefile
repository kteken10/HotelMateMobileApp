# Makefile for Expo (React Native) Project

# Variables
PROJECT_NAME = MyExpoApp

# Commands
install:
	npm install

start:
	npm start

android:
	npm run android

ios:
	npm run ios

web:
	npm run web
push:
	git commit -m "This is the Push of the Work Evolution project x%"	




build-android:
	npm run build:android

build-ios:
	npm run build:ios

publish:
	npm publish

# Targets
.PHONY: install start android ios web build-android build-ios publish
