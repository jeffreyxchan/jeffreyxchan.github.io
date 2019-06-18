---
layout: post
title: "My Nintendo Switch Game Reviews"
date: 2019-05-26
author: Jeffrey Chan
permalink: notes/switch-game-reviews
pathname: "2019-05-26-switch-game-reviews"
jquery: true
css:
  - tier.css
js:
  - show-more.js
---

<!-- TIER LIST -->

{% for tier in site.data.switch_game_tier.tiers %}

<div class="tier">
    <div class="tier-label">{{ tier.title }}</div>

    <div class="item-list">
      {% for item in tier.items %}
          <a href="#{{ item.name | slugify }}">
              <img class="game" src="{{ item.image }}" alt="{{ item.name }}" title="{{ item.name }}" />
          </a>
      {% endfor %}
    </div>

</div>
{% endfor %}

At the end of the Winter Quarter of my senior year, I bought a Nintendo Switch
for myself. I spent my abundance of free time playing games and wanted to share
my thoughts on them. Games ordered by when I played/completed them with oldest
game on top.

<!-- REVIEWS -->

{% for item in site.data.switch_game_tier.reviews %}

<h1 class="game-title" id="{{ item.name | slugify }}">{{ item.name }}</h1>

{% if item.review %}

<div class="game-review-container">
    <p class="game-review" style="white-space: pre-wrap;">{% include_relative reviews/{{ item.review }} %}</p>
    <p id="show-more-button">Read more...</p>
</div>
{% endif %}

{% endfor %}

<!-- OTHER COMMENTS -->

# A Reflection of My Gaming Background...

When I was super young, my older cousins would pass down their gaming consoles,
which would be the Nintendo GameBoy Pocket, Color, Advanced, and N64. Then consoles
like the DS Lite and Wii came to the market and we bought them and played a
couple of games on those. It was mostly the Pokemon games and other games we found
shiny and interesting at our local GameStop.

Going into high school and college. I basically stopped gaming. I had to focus on
school and being productive. Whenever I could game, I would play League of Legends
(heavily, which caused it's own problems). But overall, gaming was
not really in my life at this time.

I completely skipped over the period of the Nintendo 3DS, 2DS, and WiiU which I heard
weren't great. The hype of the Switch (and Overcooked 2) found its way over to
me, and the timing felt right to get myself one. I found myself dealing with
a huge culture shock due to the console gaming scene changing so much from how
I once knew it. A big part of it has to do with the fact that I'm now an independent
individual with my own money, so I could make all the reckless and uncontrollable
gaming purchases I wanted. It's actually a little worrisome. In
my first quarter of having the Switch, I was throwing down so much money for games
and accessories just because I now could when before, I was limited by my parents.
Another reason I was hit with this culture shock is that internet culture grew so
much more prevalent in my generation. Games are bought in something like
the Nintendo e-Shop instead of in a "GameStop". Instead of the limited selection
of physical games at our local GameStop, the number of games available to me exploded
because they were all available a huge catalog in the e-Shop. Content creators
all over the internet were able to voice their reviews about games, which also
helped me discover and get excited about so many games.

I came into the Switch
with a huge number of my games on my list, and this led me to rush through my
first couple of games just to get through them and start another one.
I felt like I forgot how to sit down and give a game its
due diligence before putting it down. I forgot how to be patient with a game
and take my time completing it. Back when I was small, I would only be allotted
one game every fixed (long) time period, which led me to squeeze out as much
entertainment from a game as possible, because each decision/purchase would determine
my happiness for that period of time. Nowadays, if I get even slightly bored of a game
or frustrated by how hard it is, I'm heavily tempted by
the huge number of games I could download off the e-Shop and start immediately.
As of right now, I think that's an unhealthy way for me to consume games.
I really think I should try my best to enjoy the quality of each game and taking my
time enjoying it. However, I also think the point of gaming is to just have fun,
so maybe I shouldn't overthink this too much. I'm also way older now so maybe my
perspective overall on playing games is way different from before.

# My Reviews...

I'm not someone who plays and reviews games for a living. Because of this,
the number of tiers I have is small, and the distribution might be skewed on the
higher side. This is because, ideally, I should have the opportunity to do
a good amount of research on a game before I decide to play it, and thus any game
I play would be more likely to have a higher rating.

Also please forgive me for the boring walls of text that are my game reviews.
I also suck at English. I'm a fan of YouTube channels like Wulff Den and BeatEmUps
that have some pretty entertaining reviews of games that even include
footage of actual gameplay. For now, I'm only capable of large blocks of text.
