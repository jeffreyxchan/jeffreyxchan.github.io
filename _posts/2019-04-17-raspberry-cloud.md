---
layout: post
title: "Making a Cloud Out of Raspberry Pi's"
date: 2019-04-17
author: Jeffrey Chan
---

In my senior year at UCLA, my friends and I had this idea to build a cloud by
hooking up all the RPI's in the lab and using them as nodes in a distributed
system. This blog posts shares some of my experiences on this venture.

Disclaimer: What we achieved probably cannot be considered an actual cloud or cloud
service (when compared to services like AWS, Azure, and GCloud). 'Cloud'
was just a buzzword we liked throwing around to get ourselves hyped.

# Hardware and Resource Setup

### Step 1: Flashing your RPI's with an OS
All the RPI's in your system have to be flashed with an operating system so that
they can function as computers. There are plenty of resources on how to do
this, such as on the RPI website where you can download and image of Raspbian.
We chose to use a release from Google that included some Python/ML toolchains
that were completely unnecessary.

### Step 2: The Network and Port Forwarding
For our situation, we requested a private IP address from UCLA. This request
came with the IP address and the address of some DNS servers, which we plugged
into the admin console of our router (that we bought). So now we have a router
that has it's own public IP address, and any device connected to it would have
a local IP address (behind a NAT) that's not available to the public.

**_This is an important constraint to note._** Instead of provisioning each RPI node
with their own IP address, we were limited to providing them local IP addresses
behind the public IP address of the router.

This required us to learn how to setup port forwarding on the router. Basically
when the router receives requests on its port 80, it can forward that request
to the port of one of the devices connected to it. A simple example would be to
forward request from `<ROUTER>:80` to `<RPI>:80`. The RPI could be running a web server
listening on port 80 and would be able to respond to that request.

This port forwarding mappings
had to be done manually via the admin console on the router. Setting up all this
network stuff was a pretty neat and useful thing to learn and work through.

### Step 3: Setting up SSH
SSH on the RPI was super straightforward in that it was built in and all I had
to run was `ssh pi@{IP_ADDR}` and typed in the default password.

As a security measure, it was also nice to learn how to use `ssh-agent` to generate
ssh keys that can be used to SSH into the RPI without having to input a password.
It was also a good idea to figure out how to disable password SSH onto the RPI and use
just the SSH keys.

### Step 4 (OPTIONAL): RPI Ethernet to WiFi
It is possible to connect your RPI to your router via WiFi. This helps free up
ethernet ports on your router (if that's even an issue). The problem is that the
network bandwidth and speed received by your RPI might suffer a little.

# All the Possibilities

With a couple of RPI's that we could use as nodes in a cluster, we suddenly felt
an endless number of opportunities to build cool things and learn/review concepts.

Some of the ideas that went through our minds:
- Our own CI/CD pipelines using TravisCI and DockerHub
- Building Kubernetes from scratch
- Building a distributed liveness monitoring service that would ping endpoints
- Mining bitcoin
- Allocating compute power to clients just like AWS and other cloud services
- and much more

# Lesson 1: The SSH Protocol
As previous mentioned, getting SSH to work on the RPI was trivial. However, prior
to this I actually didn't know what exactly SSH was and how it worked under the hood,
so I took this opportunity to learn.

After taking a couple of minutes reading online resources, I was able to make sense
of it. I figured it was like any other internet communication protocol, such as HTTP,
except that the communication was encrypted and that shell commands were sent from
one node and executed by the other.

# Project 1: Kubernetes from Scratch
During Fall 2018, I interned at Blend. They built their infrastructure off of Kubernetes,
a piece of container orchestration software developed by Google. I only had a vague
familiarity with what it was doing and why it was desirable for the infrastructure team
to use. I decided to use our cluster of RPI's to see if I could build something
similar to Kubernetes that would at least try to achieve some of the basic functionalities,
such as automatically deploying a set of Docker containers on separate nodes without the
developer having to worry about which nodes their service is running on.

I spent many hours going through several tutorials to learn the guts of Kubernetes and learn
about how it did things. Through this venture, I learned how to operate etcd, the common
key-value store used with Kubernetes.

# Lesson 2: Docker Networks
Kubernetes achieves a third layer of network abstraction that gives each Docker container its
own virtual IP address, allowing containers to communicate with each other across nodes.
I read that this could be achieved by using a third party network fabric such as Flannel.

When trying to achieve something similar, I happened to learn that Docker can provide a
network between containers. All I needed to do was connect the Docker daemons of the
two RPI nodes, run a couple of commands, and it would just work for me.

With the containers having their own IP addresses and being able to communicate with each other,
I was able to sketch out a design that would string together a couple of modules
similar to the actual architecture of Kubernetes. I wanted to take the time to implement it,
but ultimately started to lose interest in grinding on this project and focused on other things.

Hopefully one day, I'll pick this project back up again.

# Helpful Resources
A set of posts and tutorials that were really helpful to me.

[Kubernetes the Hard Way](https://github.com/robertojrojas/kubernetes-the-hard-way-raspberry-pi)

[Kubernetes from Scratch](https://ulam.io/blog/kubernetes-scratch/)

[A blog post on Docker overlay networks](https://luppeng.wordpress.com/2016/05/03/setting-up-an-overlay-network-on-docker-without-swarm/)

[Official Docker documentation on networks](https://docs.docker.com/network/)
