# WebScraping
WebScraping NodeJS Application for all your web-scraping needs! 

### Usage
Download and extract .zip code, then I prefer to open with VS Code.
Run SETUP.bat to automatically install required prequisities (npm packages)

1. Change the final console.log function to log html variable. Input your chosen URL and start the program. This will show you what you need to search for. Control+F to find and search for the information you want from the website.

2. Change variable "startSearch" to the text (from previous result) JUST BEFORE the information you wish to scrape.

3. Change variable "endSearch" to the text RIGHT AFTER the information you wish to scrape.

The longer the search variables are, the more accurate the search will be (on larger or complex websites). This is to prevent getting two results on an indexOf search.
