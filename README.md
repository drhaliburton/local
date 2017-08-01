# local

## About
Local is a travel itinerary builder with recommendations that don't suck. It allows you to plan your day based around tips from the people who live in the places you're going.

## Features
The Homepage is viewable to anyone - you can see all the resources organized by highest to lowest rated. You can filter them further by category. Each card has details about the location, description offered by the local, how many other travellers have rated it, and a recommendation for how long you should spend there. As a logged in user you can favorite cards which allows you to save them for later. There's a searchbar which allows you to filter by the place that you're visiting.

The Itinerary view allows you to build a daily itinerary from your favorited cards. You can drag and drop to reorganize and save the itinerary for later. You can also export it to your Google Calendar when you're done planning.

The Map view renders a Google map view of all your favorited cards. It makes it easy to see what you can fit into one day and how far each point is in relationship to another.

## Stack
local is built with Express, Postrgres, Node.js, and Javascript in the backend. We used ReactJS for front-end and Bulma and SASS for styling.

The Search function used Google's Geolocation API and the react-geosuggest library for the auto-complete.
For the Itinerary we used react-sortable for the drag and drop https://github.com/clauderic/react-sortable-hoc , Google Calendar API, and Google OAuth2.0.

For the cards we used Google Places to generate the images based off of the location.
We used Google Maps API for the rendering maps.

