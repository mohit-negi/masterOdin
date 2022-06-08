# How does internet works 

##### First we understand what internet is

Internet is not the cloud what you see images of it is infact a wire or a connection between two clients 

##### so In layman terms it is the just you connecting with your aunt
- suppose you want to send a mail to your aunt 
- first what happens is your web browser search in the DNS for the IP address or webpage information to connect to
- Then your browser will send HTTP request to the server 
- then the information that is to be sent will be split into packets
- and then the packets will be sent be distributed with tcp/ip protocol
- the protocol will ensure the safe delivery of the information

### Road analogy
- Think of internet as a road, one end of road is clients (your) address and the other end is the server address
- TCP/IP are the traffic police which ensures the safety of the users(which is analogous to packets)
- DNS is like your Google maps which will help you find your location, the browser need to know the websites ip address so as to send HTTP messages
- HTTP is an application protocol which is the medium in which client and the server communicates

#### Now we will look at the transception the information with the  browsers perspective 
First a webpage is just markup of components such as css,javascript and other frameworks of javascript to give a webpage its look

- The browser first parses the HTML which will further help parsing the css and javascript 
- Then the browser will generate the DOM tree which is just a fancy name of a tree which hold the information of how the components in a webpage is managed
- The DOM is generated from the parsing of the HTML,The CSS will be parsed and CSSOM structure will be created and the javascript will compiled and executed
- As the information is being parsed and structures are created by browser the webpage will be generated in the screen

Packets are just an fancy name for chunks of information, it will be very slow process if the information is just a string of bits, it sort of is but breaking it in chunks reduces the transmission time