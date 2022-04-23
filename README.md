# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Namya Radesh**

Time spent: **7** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ x] Game buttons each light up and play a sound when clicked. 
* [ x] Computer plays back sequence of clues including sound and visual cue for each button
* [ x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ x] User wins the game after guessing a complete pattern
* [ x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x ] More than 4 functional game buttons
* [x ] Playback speeds up on each turn
* [x ] Computer picks a different pattern each time the game is played
* [ x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)


If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
* losing gif ![](https://i.imgur.com/74InzBg.gif)

* winning gif ![](https://i.imgur.com/1GKnbka.gif)

![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used the website https://www.w3schools.com/ as a resource to read up on HTML, CSS, and Javascript concepts. 
I also used the website https://developer.mozilla.org/ as a resource to look up specific Javascript methods.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  A challenge I encountered in creating this submission was with completing optional feature 5, and attempting to complete optional feature 6. When adding images to the buttons I got stuck because although I understood how to add the image inside of the button, I was confused on how to use CSS to hide and show the image when the button was clicked. I originally thought I might have to use javascript to code a function that would hide and show the image on click. After realizing I needed to use CSS to code it, I looked over the hidden class that we used for the Stop and Start buttons and attempted to recreate something similar. However, this did not end up working out because I only wanted to hide the image and not the entire button. I ended up researching CSS selectors for a while because I did not understand how to reference just the image inside of the button and not the entire button itself. After researching for a bit and some trial and error with syntax, I was able to complete the fifth optional feature. 
	I was also very challenged by the sixth optional feature of adding a ticking clock, and ultimately was not able to complete it in time. I feel that if given more time, I may have been able to complete this feature but I was feeling physically unwell the past week which added an additional challenge to finishing the app. I had to learn to search concepts and methods I needed to understand using the write keywords and phrases so that the most modern and relevant results would come up. Although I wasn’t able to overcome the challenge of completing the sixth feature, I feel I learned a lot from attempting it about searching for terms and concepts optimally. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  The main question I have about web development after completing my submission is about how the webpage interacts with the server. Although I understand how the website uses HTML, CSS, and Javascript to respond to user input and how the webpage is responsive to resizing, I do not understand how user information interacts with the server and how a webpage pulls from a database. For example, if a website that sells tickets for a concert needs to update constantly how many tickets are left and redirect users to different webpages as well as be able to send confirmation emails, it has to pull information from a different source and constantly interact with the server. I would like to learn more about how that happens and more about networking. I am most curious about back-end web development rather than front-end web development, although it was definitely a cool first web-development experience to work on the light and sound memory game. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  If I had a few more hours to work on this project, I would try to increase the difficulty of the game, make the webpage more aesthetically pleasing, and add different modes of game play. 
	The game at its current state is very simplistic and wouldn’t be engaging for players to play more than once. I would like to increase the difficulty of the game by making it speed up sequentially, so that the first few clues always play slowly but as more and more clues are revealed they become faster and faster. I think this would make the game more difficult as the player is unlikely to mess up on the first few clues since they have been consistently putting them in since the beginning of the game, but if the last few clues played faster than the first few, they would be thrown off and more likely to mess up. Another way to increase difficulty would be to switch around the placement of the buttons so that the player would have to memorize color only for the pattern. 
	The webpage is also not very easy on the eyes, the colors clash and the font is not very aesthetically pleasing. If I had more time I would make the buttons and background prettier and add more pictures and visual effects. I would also do a better job of making the colors friendlier for color blind people, as currently they may have difficulty playing the version with just the colors. I would include different color versions for different kinds of color blindness, for example red-green color blindness, so that the colors look distinct enough from each other. 
	I think the game would also benefit from different modes of game play, for example, an endless mode where the player continues replicating the pattern until failure to recreate the correct pattern. This could also involve leaderboards where data from all players was incorporated to make the game more of a competition. Another mode could be just sounds instead of lighting up the button, so the player would have to memorize which buttons made which sounds, or a mode where the sounds the button makes are randomized each time instead of consistent so they would have to rely entirely on sight instead of sound. 




## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.youtube.com/watch?v=kAE3Trpe7qc


## License

    Copyright [Namya Radesh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
