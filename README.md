This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description

This application take a URL of a publicly accessibly VTT file and parses it out to be easily readable for the user. The user can then modify the text of the captions and download the edited file to save to their computer. 

## Technologies used
 - React
 - React Hooks
 - React Testing Library
 - [JS file download library](https://github.com/kennethjiang/js-file-download/issues)

 ## Obstacles and considerations

 I debated using an external parsing library instead of manually parsing incoming data. I decided to avoid using a library since I was able to write a parsing function with relatively few lines of code (<20 lines). Parsing the data into an object to allow for data manipulation gave me a greater understanding of the VTT file structure.  

On the other hand, I decided in favor using an external library to manage the downloading of the data present. I explored the option of using blobs to trigger downloads, but I decided that using the package would allow me to complete the project more efficiently and would lend itself to more readable code in the CueContainer component.

## Installation instructions
- Clone repository
- Run npm install
- Run npm start