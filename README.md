# Removes Distracting Websites
Current blocks: 
  Twitter
  Youtube
  Reddit
  Instagram

# Clone and Add
If you want more/different websites clone it and add it to
the rules.json file in the same format that it is. Just change
links to match what you want.

# JS
The JS file is completely unnecessary since I used netRequests
but I want to keep it there in case I need it later on.

# If JS is wanted
If you want to use background.js (or any js file) you'll need
to add 
```
"background": {
    "service_worker": "background.js"
  },
```
to the manifest.json file

# Chrome Extension ID
jcdmohhnocpiglipicdkpenhekjnmbhc
