# WebScraping
WebScraping NodeJS Application for all your web-scraping needs! 

### Usage
Download and install NodeJS for PATH, found here: https://nodejs.org/dist/v12.19.0/node-v12.19.0-x64.msi

Download and extract .zip code, then I prefer to open with VS Code.
Run SETUP.bat to automatically install required prequisities (npm packages)

1. Change the final console.log function to log html variable. Input your chosen URL and start the program. This will show you what you need to search for. Control+F to find and search for the information you want from the website.

2. Change variable "startSearch" to the text (from previous result) JUST BEFORE the information you wish to scrape.

3. Change variable "endSearch" to the text RIGHT AFTER the information you wish to scrape.

The longer the search variables are, the more accurate the search will be (on larger or complex websites). This is to prevent getting two results on an indexOf search.


#### Execution
Open a terminal or command prompt window in the directory of the **index.js** file, then run command *node index.js* to start the application.
