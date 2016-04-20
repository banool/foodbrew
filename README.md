# Food for Thought
Food for Thought is the project our team created in less than 48 hours for Codebrew 2016, codenamed foodbrew.
Have a look at the project here: http://foodforthought.xyz/

## Overview
This project was created for the topic of "Food and Innovation".
The main objective of our solution is to provide a platform that connects food suppliers that have edible, but unsellable, food left over at the end of the day, with charities who could redistribute the food to those in need.
This is in the hope that they can form long term agreements with each other.

### Basic functionality
The web service provides separate functionality for suppliers (thinkers) and collectors (charities). Each of these can then look for nearby users of the alternate type either with a list or using a Google Maps interface.
Once a user finds an organisation that they think could be appropriate for them, a chat interface is supplied so that they can organise an arrangement.
Each organisiation has a full size splash page that shows who they have an agreement with.
The splash page is designed such that it provides (specifically to a corporate supplier) an attractive demonstration of that company's social conscious.

### Directory structure
Considering that this project was made in under 48 hours, the directory structure is a bit of a mess. As such, some unused ideas and code have been dumped into folders instead of removed or repurposed.

- **www** Contains the HTML, JavaScript and [Foundation](http://foundation.zurb.com/) code for the front end, as well as all image assets.
- **scripts** Contains the Python script that handles incoming HTTP GET requests.
- **map_samples** Contains working files for the Google Maps geolocation component contributed by [ChrisLinn](https://github.com/ChrisLinn).
- **old_go_stuff** Contains files from an early attempt at coding the site with Go. In the end we went with a jQuery -> Python -> MySQL setup.

## Tech implementation
The website is composed of three main components.

- Foundation based HTML front end with jQuery.
- Python middleware that captures HTML requests, interacts with the database and returns useful responses.
- MySQL database containing information related to users, agreements, chatting, etc.

The database itself is not in the repo at this point, but the way it is interacted with can be seen in handler.py.
An early physical design can be seen [here](https://www.dropbox.com/s/ew08qykyukjhhqb/early_database_physical_design.jpg?dl=0).

## Viability
Ideologically, this solution has benefits for both parties.
From the charity side the benefits are obvious, namely being able to reliably collect edible food in order to redistribute it. This could be via homeless shelters, drop off points, etc. That part is up to the charity, we just help them get the food in the first place.
The service also offers benefits for the company. Standard procedure for most food suppliers (i.e. supermarkets) is to just throw food out at the end of the day.
From their perspective, redistributing the subpar food to those who might want it holds no real profit or exposure benefits.
However, if a charity were to instead come to pick up the food as they are going to throw it into the bins, this results in very little extra work on their behalf.
Furthermore, the supplier can demonstrate to their consumers, using our service, that they are living up to their corporate responsibility and that they have a social conscience.

As a service provider, down the track we could charge suppliers a small fee for the right to say that they subscribe to our program, similar to other food certification services like the [Heart Foundation Tick](http://heartfoundation.org.au/healthy-eating/heart-foundation-tick).

## More information
Feel free to contact [me](https://github.com/banool) or any of the contributors about the project :)
