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







