1. Introduction to Node.js
🌟 What is Node.js?
Node.js is an open-source, cross-platform runtime environment.
It allows you to run JavaScript code outside a web browser, mainly on the server side.
Built on Chrome’s V8 JavaScript Engine (very fast engine).
Run the JavaScript Code outside the Browser.



2. Key Features of Node.js
a. Asynchronous and Event-Driven
   ->Node.js uses a non-blocking I/O model.
   ->It can handle many requests at the same time without waiting for one to finish before starting another.


b. Single-Threaded but Highly Scalable
    -> It uses a single thread with an event loop.
    -> It can manage thousands of connections without creating new threads.


c. Very Fast
     -> Built on the V8 engine → Compiles JavaScript to machine code.


d. Cross-Platform
    -> Works on Windows, Linux, and Mac OS.




3. Where Node.js is Used?
Web servers and APIs
Real-time applications (like chat apps, games)
Streaming apps (like Netflix)
Microservices
Command-line tools



4. Understanding the Event Loop.
   What is the Event Loop?
       -> The Event Loop is the heart of Node.js.
       -> It allows Node.js to perform non-blocking I/O operations (like reading files, talking to databases) even though it runs on a single thread.
       -> It handles multiple operations without waiting for any one of them to finish.

    Why is the Event Loop Powerful?
      -> Handles thousands of requests at once without creating thousands of threads.
      -> Efficient for real-time apps (chat apps, live updates, multiplayer games).
      -> Fast and memory-efficient.



Shorthand:- 
Concept             | Meaning
Event Loop         | A mechanism that helps Node.js handle many operations without blocking
Single Thread     | Node.js uses one thread for executing JavaScript code
Non-blocking      | Node.js doesn't wait for operations to complete
Async Prog.        | Code continues executing without waiting




Node.js Architecture[Sync and Async Function ]
========================================
Architecture of Node js
=========================================
Two Functions:- [Blocking Operation means Sync ] & [Non Blocking Operation means Async]


Non Blocking Operation means Async[Event loop Check which type of Operation]
User sent the request , then request go to the Event Queue and from the event queue access the request by the event loop(it is a machine, it will watch on the event queue if a request is coming then it will pick up the request based on the FIFO principle, which user sent the request first) and process and respond to the user.
—--------------------------------------------

Blocking Operation means Sync[Event loop Check which type of Operation]
:- User sent the request , the request go to the thread pool where all thread will store , if we are sending the request then request means(thread means as a worker) then thread is responsible for the fulfil the operation.[If we have Thread/worker is available then we will give the work to worker after completing of the work it will response to the use ].
IDEA:- If we have 4 worker is there and we sent the request the 5 request by user then starting 4 request is take by the worker and 5th request handle after completing of the any request suppose 1st worker is free firstly then handle 5th request.


For Example[S]:- If we are Creating the web application /server then in the website n number of users is coming and our code is written through blocking  operation then that is not a better way to use blocking operation please always use the unblocking operation(Async).


                                        request queue            request loop
 Non Blocking :- request -----------> |----------------| ------> 1, 2,3,4    ----> response
                                      |_1__2___3__4____|


                      I need a thread/worker    _____________
 Blocking Operation -------------------------->|Thread Pool |
                     Assign a worker and make  |            |
                      him work                 |            |
                                               |____________|
    <-----------------------------------------<|
          return the result




====================================================================



Rough Work:- 



inside the browser
outside the browser : nodejs


Node js : 
Open source 
run time enviornment 
js code outside the broswer 
chrome v8 JavaScript engine



Node js :- 
Key features :- 
1. Asynchronous :- node js use non-blocking model 
   it can handle n number same time handle on finish 
2. single threaded - execution single thread 
3. very fast :- v8 chrome -> compile js code into machine code 
4. cross platfrom :- it can run on various operating systems like Windows, macOS, and Linux


where we use  nodejs 

1. web server and API (Application programming interface)
2. realtime appilcatiion(like chatapp , games)
3. streaming app(netflix)
4. command line tools 
<!-- ================================================== -->

Installing nodejs

<!-- ========================================= -->

Event Loop :- heart of nodejs
allow nodejs to perform non-blocking i/o [Asychronous operation] like reading file , talking to database ) it runs on the single thread.

-> it handle multiple operation without waiting for any of them to finish

why event loop powerful :- 
:- handled thousands of req without creating of thousand  thread
:- efficinet real time app chat app , multiplayer games 
:- fast and memory- efficient

for 

Event-loop :-A mechanism  that helps nodejs handle many operation without blocking .

Single Thread :- Nodejs uses one thread for executing js code

Non-blocking :- Node js doesn't wait for operation to complete

Aysnc Prog. :- code continues exeecuting without waiting 


<!-- ============================================= -->

Node js Architecture
[sync and Async ]

Tow function :- Blocking operation means sync
                 Non blocking means Async

Non blocking means Async :- 


<!-- ======================================= -->


Module  : import export 
module is file in nodejs
it contains code(function ,variables, classes) tha we can reuse
help clean or organized 

Type of module :- 

provide by nodejs 
fs(file system), http, path 

third party module :-
express

let demo = require("fs")







