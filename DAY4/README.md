1. Working with Modules (require, import/export).
 What are Modules?
   -> A module is simply a file in Node.js.
   -> It contains code (functions, variables, classes) that you can reuse in other files.
   -> Helps keep code clean and organized by dividing it into small parts.


 Types of Modules
  1. Built-in Modules
   -> Provided by Node.js itself. Example: fs, http, path, os, etc.


  2. User-defined Modules
    -> Files you create yourself.

  3. Third-party Modules
    -> Installed using NPM (Node Package Manager). Example: express, lodash, etc.



How to Work with Modules
1. Using require() — (CommonJS System)
 -> Import a module using require().
 -> Export things using module.exports.
 
==================================================================


2. File System (fs module) & Path Module.
What is the fs (File System) Module?
fs stands for File System.
It allows us to work with files and folders — like reading, writing, creating, deleting, and updating files.
Common fs Methods
Operation                    |      Method
Read a file                   |     fs.readFile()
Write to a file               |    fs.writeFile()
Append to a file           |    fs.appendFile()
Delete a file                  |    fs.unlink()
Create a folder             |    fs.mkdir()
Delete a folder             |    fs.rmdir()


Example :- Working with directories and file paths 
// Creating a directory //  it will create the folder 
 // Reading the directory // it will print all the file inside the directory
Module :- ....

// we can create the server
const http = require("http)

// we can file handling // create , copy , write , read , append
const file = require("fs)

// we path
const path = require("path)




<!-- =============================================== -->

Rough Work 

File handling :-

-> create file
writeFileSync
writeFile
