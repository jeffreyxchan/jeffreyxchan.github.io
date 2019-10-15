---
layout: post
title: "My First Freelance Website"
date: 2019-10-14
author: Jeffrey Chan
---

1 year ago, I got an email from UCLA HKN which included a posting from a
professor describing how they were looking for someone to develop a website
for a conference happening in 2019. Looking at the opportunity, a lot of
benefits were checked off on my mental checklist: some extra money, more
practice, a chance to work with a professor, and most importantly, my first
freelance web development gig. Plus, I was a senior and had the time to do it,
so why not?

I immediately reached out to the professor and we immediately started talking
about my qualifications, how the website would be setup, how difficult it would
be to edit and maintain without my assistance, and a general plan for how the
whole development was going to work out. After some thought, they decided to
hire me, and I officially had my first client.

The requirements for the site was pretty simple - just a couple of pages that
would contain textual information, some pictures, and probably a navigation
bar that would lead users to different pages. Any other technology would be
handled by other services, such as Google Drive for uploading files.

My plan was pretty straightforward and simple:
- Mock up some designs on Figma and have my client pick which one they liked.
- Obtain all the initial website content from my client.
- Obtain a cheap shared hosting service plan from Namecheap.
- Incrementally build the website as content kept coming.
- Hand off the webstie to my client for them to maintain, occasionally with my
assistance.

The plan was executed rather flawlessly so there's not much to elaborate on.
I just knocked down the tasks as they came. Stuff was delivered on time, there
were little to no technical issues, and I would like to believe that my client
was satisfied with the end product. I consider this project a success.

## What is the website written in?
HTML, PHP, CSS, and Javascript. PHP for the sole purpose of not having to copy
and paste the navigation bar on each page, and instead having it in a separate
HTML file and using a PHP `include` statement.

## How was deployment handled?
So the code was version controlled and pushed to GitHub. I REALLY wanted to
setup a fancy webhook service on the Namecheap server that would detect when
pushes are made to the repository, and go ahead and pull the new changes to
the server (essentially continuous deployment). This would make deployment much
easier for my client.

Unfortunately I was running into some issues that I could never solve, so I had
to drop it. Instead, I created a Makefile with a single command that would
SSH into the server and pull the changes, as long as the user can provide
the password to the server.

## Challenges
The biggest challenge was just designing an easy way for my client to maintain
the website with minimal assistance from me. The end result was that they had
to know how to edit the website through a the Atom text editor and know how to
push changes to GitHub. Then they had to run a single Makefile command to deploy
the changes. Simple, never failed, but a horrible abstraction.

I remember asking my client to run the Makefile command, and it not working
because `make` is not supported on Windows. I remember thinking "wow this is
definitely a huge failure". It pains me to know I couldn't implement a better
abstraction for maintaining the website.

## Closing Remarks
The money probably wasn't very close to the market value of similar websites
developed by freelance developers, but I wasn't too concerned with getting rich
off this one job. The learning opportunity carried way more weight.

Overall, I felt like this was one fantastic opportunity. After the conference
ended, my client uploaded a picture of all the guests at the conference. This
picture means a lot to me. It was essentially proof that a number of strangers
around the world had interacted with my work in some way. In the very beginning
of my web development journey, I wasn't even sure if anyone else other than me
would visit my websites. The completion of this website was a huge milestone
in my growth and career, and I'm super proud of it.

Since I haven't asked for my client's permission, I have decided to keep
most of the information private, such as the address of the website. This also
leads to a lack of pictures, so sorry for the large wall of text.
