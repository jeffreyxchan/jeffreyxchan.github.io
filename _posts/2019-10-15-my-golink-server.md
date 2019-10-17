---
layout: post
title: "My GoLink Server"
date: 2019-10-15
author: Jeffrey Chan
pathname: "2019-10-15-my-golink-server"
permalink: notes/golink
---

One day I found out that the free tier of Google Cloud Platform includes a
free micro Google Compute Engine (GCE) instance. At the time, I was getting
acquainted with the concept of GoLinks and how useful they are, so I decided
I would claim my free instance and use it to build my own GoLink server, just
for the heck of it.

# What is a GoLink?

In a few words, a GoLink is a conveniently shortened URL that's easy to
memorize and used to redirect to some other link. Some examples might look like:

- Entering `go/mail` in your browser address bar takes you to GMail.
- Entering `go/help-doc` takes you to some Google Doc you need for help.
- Entering `go/gcp` takes you to GCP's console.

Essentially, these easy to memorize and read strings can be mapped to the
long and complicated URL's you don't want to remember.

The concept of a GoLink isn't very novel. Many companies have internal
implementations, or purchase GoLink capability from some vendor.

# Development

I'm not very familiar with the implementation of GoLinks in the market as a
service. Typing `go/<some_string>` in your browser and having it redirected
to the correct URL looks like it might depend on browser extensions or special
DNS settings on a corp network. Without doing any digging on how it's done
professionally, I decided I would make something super simple that would
come close to actually having GoLinks.

The idea is that I have a simple web server hosted on my GCE instance, and
hitting the server at an endpoint such as `/go/<some_string>` would redirect to
the desired endpoint. The server would have some sort of POST endpoint to create
new link mappings. The server would also write these mappings to a database.

I chose to write the server is Node, using the Express framework because
I didn't want to go through the trouble of writing and HTTP server in Go when
I could do it extremely fast in Express. I also chose to use a Mongo database
hosted on mLab because I'm familiar with their product from past projects, and
because I really didn't want to deal with hosting a Postgres docker container
on the GCE instance and figuring out how to use an appropriate driver/ORM.

With this setup, I essentially achieved the following functionality:
- visiting `<IP_ADDR>/go/<SLUG>` would be able to redirect me to wherever I
wanted to go.
- visiting `<IP_ADDR>` or any unrecognized GoLink would take me to an ugly HTML
form where I could make a new GoLink.

This essentially achieves link shortening, but not quite replicating an actual
GoLink.

# The Finishing Piece

To make this product look like GoLinks, I took advantage of Google Chrome's
Search Engine feature built into their browser. At least I think this feature
is specific to Chrome.

This feature is found in Chrome's settings under Search Engine. I'm not going
to explain how it works, but basically I can type `go<SPACE>mail` and it will
map that to `<IP_ADDR>/go/mail` which will hit my server and then the product
does the redirect from there. Essentially the end product looks like GoLinks
but uses a space character instead of a slash.

Ta-da, that's basically it. Now I can make whatever GoLinks I want, and have
a convenient way to type it into the address bar and have it properly hit my
server at the right URL.

# Sharing my GoLink Server

Source code found at [go/golink](https://github.com/jeffreyxchan/golink).

It's kinda lonely using this GoLink server for myself. I've had thoughts about
sharing it with my friends so that they could shorten their own URLs. Maybe
we could use it as a group, and shorten URLs that are continually relevant to
all of us. Then typing `go/<slug>` in our chat would actually mean something
and people would just know what to do. This would be especially useful for when
we use Google Docs or Sheets to plan out events or ideas, but never remember
where these docs are and don't want to scroll up, so we end up asking the chat
to post the link again, and they end up having to go and dig for it.

Sharing this server comes with several EXCITING problems to think about.
- What if my friends want to keep their links private?
- How do you create public GoLinks if GoLinks are scoped to a specific user?
- How do you prevent bots or other people from making GoLinks?

All are pretty interesting questions :)
