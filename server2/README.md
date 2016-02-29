To get this server up and running, do the following:

* Install [Node](http://nodejs.org)
* Type `npm install` the first time to get the server's dependencies
* Type `node index.js` to start the server
* Go to [http://localhost:3000](http://localhost:3000) in your browser. 

LocalHost server is hosted at port 3000. index.js file consist of API and server designed using node.js express. It contains all the CRUD functions , adding , editing and deleting archives.

Based on the solution designed the flow of HTML page is as mentioned below:

On top right corner of page click on CRUD . this directs us to a page index.html which has the following options:

title and text (to add a new blog) and "Post" to save the blog. 
list displaying the previously created blogs (text, title and time during which blog was created) with options to edit and delete.

The flow of data/information entered on the UI flows to the backend through an ajax call mentioned in script tag of index.html and crud.html file.