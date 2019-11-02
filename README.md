# StreamViewer Streamlabs challenge

This challenge consists in creating a single page app that:

* Has a backend
* Is a single page application
* Logs in a user
* Home page with a single YouTube Stream that is taken from the api
* Has the youtube chat where you can participate
* Messages are saved in the back end


# Streamviewer
Streamviewer simulates the page of streamer Natalie, it's branded for her and has the functionality Natalie wants in her page.
The site is developer with **React** and uses a backend for most logic.

Natalie is a streamer and her page is her HUB for her viewers, to her it is important that her site shows her streams as the main selling point. 
The site is structured in the following way:

## Page header

Here the user will be able to log in, if he is not logged in he can still watch the videos, but he won't be able to chat. The header has the name of the site and a hello message to the user.

## Brand header

Here Natalie has her Logo and her social networks

## Video

Here you can see the main video, this video is constantly updated by our backend (every 5 minutes, because of quota limits), the new video(s) are sent to the app via websocket. If the video has a new live video to show the main video will be replaced with the new live video.

## Video description and Chat

Below the video you will see the video description and the chat, the chat is an iframe that updates with the video on the top, when a new video is loaded in the top a new chat is loaded.

## Other videos

Natalie's fans can watch her last 8 streams directly in this page, select one and the video will change authomatically

## Social media

She wants you to follow her


# Functionality

Most of the functionality works in the back end, the front end when it loads chacks for user data in the local storage, if no data is found the user is not logged and the user must log with Google, from there a POST is sent to the server to authenticate, we get back an object with the user information and we save it in local for future use, with that information we get a login token, that token is sent every other time the user enters the site and it's validated in the back end, if the token is invalid the back end will let us know and the user is logged out.

We keep the state of the page at all times, if a video is live we bring it to the front and display it and the chat, we check for updates constantly via STOMP and we get an update from the server every 5 minutes.

On load we also ask the server via GET if there are old videos or something live that we could show while we get updates from the api service, we save in the db every video from Natalie, with the chat and other useful information.
