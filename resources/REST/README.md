---
sidebar: auto
---

# Introduction

## What is REST?

Representational state transfer, also known as REST, is a software architectural style that defines a set of constraints to be used for creating Web services. By using a uniform and predefined set of stateless operations, it allows any system to request and access the web resources.

![An Image](https://www.astera.com/wp-content/uploads/2020/01/rest.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-BpqyOT3a8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why use REST

REST allows web services to have faster performance, reliability and ease of access. This is all achieved by using a stateless protocol and standard operations.

The API also enables systems to easily communicate with each other, as long as they are connected to the web. This can include: 2 different computer systems communicating with each other, or a system communicating and retrieving data from a database

One of the most important uses of REST is that it allows the use of microservice, which is a very important concept as we start working with larger web services.

# Learning REST

## How it works

The REST API is mainly composed of requests which is a way for the web service to communicate with the servers or other web services. Once a request has been initialized by the web service, the request is then sent to the server, which will then act accordingly to the request method that was sent. Once the server has finished the request, it will then return a service code and a response body if needed.

A regular REST request will consist of four things: the endpoint, the method, the headers, and the data.
- The endpoint is the URL you are requesting for.
- The method is the action you wish the server to act upon, the commonly used methods are the HTTP methods.
-  The headers are used to provide information to both the client and the server.
- The data is the request body,  and it contains the information you wish to send to the server

Commonly used HTTP methods are:
- POST: Creates a new resource at the end point.

- GET: Retrieves a representation of the data in the response body.

- PUT: Updates known resources with the new data from the request body. If the resource does not exist, it will create a resource with the data from the request body.

- PATCH: Modifies a known resource with a set of instructions.

- DELETE: Deletes a known resource.

![An Image](https://miro.medium.com/max/2800/0*WQZTR7gIwhiIIbnh.png)

### HTTP Methods

<LevelWithButton :imageRight="false" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/1200px-HTTP_logo.svg.png" link="https://www.restapitutorial.com/lessons/httpmethods.html" button="Check it out!" desc="A further in-depth explanation of the individual HTTP Methods"/>


## Online Tutorials 

### A Guide to REST using Nodejs and Javascript

<LevelWithButton  image="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/rest-api-code-main.png" link="https://www.youtube.com/watch?v=pKd0Rpw7O48" button="Check it out!" desc="Learn to imeplement the REST API with NodeJS and Javascript"/>

### The Complete Guide to Build RESTFful APIS - Udemy

<LevelWithButton :imageRight="false" image="https://adrianmejia.com/images/RESTfulAPIs_NodeJS__mongodb_large.png" link="https://www.udemy.com/course/nodejs-master-class/" button="Check it out!" desc="Follow a complete guide offered by Udemy to build a RESTful API using NodeJS"/>

### Learn Rest with LinkedIn

<LevelWithButton image="https://cdn.lynda.com/course/651230/651230-637199637396278584-16x9.jpg" link="https://www.linkedin.com/learning/topics/apis" button="Check it out!" desc="Learn how to use the REST API on LinkedIn Learning. LinkedIn Learning is accessible to all UofT students!"/>

### Using Rest with Spring

<LevelWithButton :imageRight="false" image="https://spring.io/images/OG-Spring.png" link="https://spring.io/guides/tutorials/rest/" button="Check it out!" desc="Learn to create a RESTful service with the Spring framework!"/>

## Testing 

There are multiple ways to test your RESTful program. Here are some suggestions:

### Postman
<LevelWithButton image="https://blog.qualys.com/wp-content/uploads/2020/10/postman.jpg" link="https://www.postman.com/" button="Check it out!" desc="Postman will allow developers to freely test their APIs with an easy-to-use interface."/>

### Using Curl

<LevelWithButton :imageRight="false" image="https://daniel.haxx.se/blog/wp-content/uploads/2016/05/curl-symbol.png" link="https://idratherbewriting.com/learnapidoc/docapis_understand_curl.html" button="Check it out!" desc="CURL allows users to simply test APIs using the command line"/>
