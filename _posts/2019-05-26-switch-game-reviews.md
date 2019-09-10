---
layout: post
title: "My Nintendo Switch Game Reviews"
date: 2019-05-26
author: Jeffrey Chan
pathname: "2019-05-26-switch-game-reviews"
permalink: notes/switch-game-reviews
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

<h1 class="game-title" id="1-2-switch">1-2-Switch</h1>
<div class="game-review-container">
<p class="game-review">1-2-Switch is considered a tech demo for the Nintendo Switch. It's like Wii Sports or Wii Play for the Wii - a compilation of mini-games meant to show off the capabilities of a new console. In 1-2-Switch, you start off with 4-5 mini-games and as you play, you unlock up to a total of 28 games. Each game is designed to utilize some feature of the Nintendo Switch and can be played with the Joycons that came with the Switch with 1-2 players.<span id="dots">...</span>

<div id="more" class="text">
The games are fun and can be replayed a bunch of times, but they aren't exactly games that keep you coming back. You invite some friends over just so they could play some of the games on 1-2-Switch. There are probably other games you'd rather play, and after playing the mini-games a couple times, you'll probably be like "Ok I get it, let's move on" and not come back to it again. It's full retail price of $60 also prevented me from giving it a higher rating. Developing and producing 28 games must've been expensive, but the value I got out of it as a player was worth more like $30 or less. Wouldn't recommend purchasing this game to play, unless you already know you'll enjoy the mini-games a lot.
</div>
</p>
<p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="the-legend-of-zelda-breath-of-the-wild">The Legend of Zelda: Breath of the Wild</h1>

<div class="game-review-container">
    <p class="game-review">BOTW is renowned as one of the must play games on the Switch. It features a beautiful and vast open world experience that could suck you in for hours just exploring every part of it. In the game, you take on the role of the hero Link,who's mission is to defeat Gannon and save the kingdom of Hyrule. Along the way,you face challenges and boss battles that progress the main storyline and provide youwith skills and experiences that are helpful in your travels. This game is justinsanely immense.<span id="dots">...</span>

<div id="more" class="text">
I thought the game was amazing, well-crafted, and a lot of fun, but there were also a couple things I didn't like about it. I wasn't a fan of how big the world is. I understand this could be a huge selling point for some fans of the game and is a huge reason for it's success, but I just felt like I was spending most of my time in the game just running from one destination to the next. The combat system was pretty challenging to master in the game. Because it was so challenging, I chose to just run around the monsters in the wild instead of kicking their butts. It just takes too many resources to bother with walking up to a group of monsters and trying to beat them, just to only be rewarded with their weapons and maybe some other small supplies.

The game doesn't hold the players hand as they discover everything they can do in the world, and they can pretty much do ANYTHING. In addition to this, the game has a very non-linear playing style, where it only gives you a couple of main objectives, but it's completely up to you whether you want to do them, or in what order you do them. You could even skip straight to the final boss battle at the beginning of the game and end early if you really wanted to. I think I would've preferred a more linear style of gameplay, that would make it easier for someone to follow through with the game. When getting lost or stuck, I would need to consult with some online guides on how to proceed. It doesn't annoy me that I need to rely on other's advice on how to proceed, I just wish I wouldn't need to have a walkthrough next to me the whole time. But that's probably just me being super bad at the game.

It took me approximately 40 hours to complete the game. I definitely rush through it so I could start playing some more games on the Switch, since BOTW was basically my first game. The game was well worth \$60. It makes good use of the Switch's rumble and motion controls to enrich the gameplay experience. It's challenging, but not so hard that I couldn't keep making progress through it. Because I rushed through the game, the thought of picking it up again and clocking some more hours in pops up now and then, but I don't think that'll happen. I definitely think the game is worth all the praise it's gotten, and would recommend it to any Switch owners.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="super-smash-bros-ultimate">Super Smash Bros. Ultimate</h1>

<div class="game-review-container">
    <p class="game-review">Right now I don't own a copy of this game. I borrowed it for a little bit and didn't feel like grinding through it. I still my thoughts might be helpful to those looking into what new games to buy.<span id="dots">...</span>

<div id="more" class="text">
First off, don't be pressured to buy it just because of all the hype it's getting from it's own community, or because you have a new Switch and your friends are asking you to get it so they could play with you. I think this decision should be based on how much value you'll actually get out of it. But don't get me wrong, if you're a big Smash fan and know you'll have a great time playing it yourself or with friends, it's a great game, worth the price, and you'll probably enjoy it, so it's probably worth getting. If you're like me who came from the Wii and Brawl, it's basically the same game but with new maps, characters, and items.

For me personally, I know that I won't play this game by myself. I'm pretty sure I'd only play this game on the rare chance that friends ended up at my place and asked to play this game (over the other crazy party games I could offer). I'm also someone who doesn't get a lot of joy or excitement playing this game. I used to grind Brawl a lot on the Wii training to get better at the game and beat my brother, but now I don't really have motivation to play, get better, and get competitive over the game. Overall, I felt like I'd get less fun out of this game than the other Switch games available, so forking over \$60 just to have it ready for party situations that might not happen didn't seem logical.

You might be disappointed in the single player mode of Ultimate. Smash Brawl had this really cool story/campaign mode you could play through, but in Ultimate they replaced that with something that I didn't find fun. Check it out to see what I mean.

I'm very impressed by the huge number of game characters that they've pulled into the game. There are so many game character references in that game. When I found that Xenoblade and Persona characters where in the game, I got pretty excited.

Online play doesn't seem interesting to me. When you 1v1 someone else, it just feels like you're playing against a really good NPC, so it feels pointless to have to pay for the Online service just to do this.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="stardew-valley">Stardew Valley</h1>

<div class="game-review-container">
    <p class="game-review">Stardew Valley is what's known as a "farming simulator". In the game, you take on the role of someone who inherits a piece of farmland. You spend the rest of the game exploring and performing numerous activities, such as growing and selling crops, creating relationships with the people in down, mining for materials in the mines, and much much more.<span id="dots">...</span>

<div class="text" id="more">
I came into this game completely blind. I had only heard of its name and that it had many positive reviews, so I bought it without any research. I guess you could say I was suprised... I did not expect to come into this game and literally just do nothing but... farm. Like IT'S JUST SO MUCH FARMING. I clocked in a good number of hours into this game (enough to get through the first year) but I didn't find it the most addicting game and put it down afterwards. But in the hours I spent, I definitely had fun playing. I've actually spent around 10 hours in it, which is more than I've had to give to some other games, so I think I was pretty sucked into it for a bit. The game is very relaxed, slow, and calming. It's a great game for anyone trying to shut their brain for the day and play a slow and peaceful game.

It has many great reviews, and is apparently accepted as best enjoyed on the Switch (Stardew is a port from a PC). It's also super cheap! So if this sorta game sounds like something you'd enjoy, I'd highly recommend giving it a try. It's just not my cup of tea.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="overcooked-2">Overcooked 2</h1>

<div class="game-review-container">
    <p class="game-review">Overcooked 2 is an AMAZING multiplayer party game to have on your switch (it's digital only). In the game, you take on the role of a chef in a kitchen that has to prepare and deliver a set of dishes under a certain amount of time to pass the level. The most consistently you're able to deliver overs on time, the higher the score you receive for each dish, and the higher the chance of you receiving the almighty 3 star rating at the end of the level. But if you take too long, you risk dropping orders and harming your score.<span id="dots">...</span>

<div id="more" class="text">
The game can be played with 1-4 players at a time, getting a little more chaotic the more chefs you have in the kitchen. You'll have to skillfully balance the challenging mechanics between each player in order to keep the kitchen efficiently running, which can cause a bit of chaotic shouting among players as they bump into each other or fail to deliver and ingredient in time.

The game features around many different "worlds" that are part of a map, and there are about 6 levels per world. I'm very satisfied with the level designs. Progressing through the levels gives you new recipes to cook which have more demanding preparation instructions. The layout of the kitchen changes which add to the difficulty of finding your way around and optimizing your routine. The combination of these designs keep the game interesting and challenging enough so that you don't get bored of it and think about when the next time you'll be able get back into the kitchen. It can be a tiring game though (from all the shouting) and it's pretty easy to put down and pick up again. The controls are super simple and each player can play with a single Joycon just fine.

If you're looking for a 4 player game to scream and shout with your friends over, I would say Overcooked 2 is a must have.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="nine-parchments">Nine Parchments</h1>

<div class="game-review-container">
    <p class="game-review">Nine Parchments is a multiplayer, role-playing, shoot 'em up game where the players take on the roles of a group of apprentice wizards seeking out the lost nine parchments in order to complete their spellbooks. It contains real-time magic shooting action that requires cooperation from each player in order to successfully progress through the game, making it great to play with a group of friends.<span id="dots">...</span>

<div id="more" class="text">
I think Nine Parchments is a HIDDEN GEM in the eShop. I got it on sale for only $6 and it has brought way more value to me than its cost. I've played this game more than I have the more expensive games. Id doesn't really have too much plot to it, only the notion that you're wizards traveling the world looking for some spells. In order to do so, you progress through levels of the game, each with several challenging encounters with enemies. After a certain number of levels, you face a boss battle, and beating the boss rewards you with a new spell in your arsenal that you can use. The maps in each level are very aesthetically pleasing, which keeps me interested in exploring the world Frozenbyte has built, and the changes in the map also give clues into events in the actual story. I love it when a game lets the players discern details for themselves to figure out what's happening on their own instead of just straight up telling us. As you go through the levels, you get to unlock new playable characters, spend skill points to make your characters stronger, and find staves that you can equip. Boss battles are SUPER fun and I love how it's an interesting and different challenge each time instead of just hitting a giant monster with a lot of OP spells.

This game is... a bit of a commitment. You don't get to choose which levels you want to play. Each "runthrough" of the game requires you to go through all the levels in order, and the characters you've chosen for that run cannot be swapped out unless you start a new run which might be annoying because you start off with only 2 characters (however you can have multiple copies of a character in a run). I did my first run with just me and my roommate, and we took a couple days to finish the whole game. Later, I started another run with 3 of my friends and hope to finish it again some day.

To me, this game has a lot of replayability. Unlocking new characters makes me want to play them (which can only be done on new runs) and test out all the spells that they're able to learn. Different combinations of wizards on your team have different strengths and weaknesses in battle. There are multiple difficulty levels you can choose, one of which looks SUPER crazy in that if your entire team gets wiped out even once, you have to restart the entire game from the beginning, which seems SO STRESSFUL but probably super satisfying to beat. And for every small group of friends I have, I'm excited to think I can go on an adventure with them. The beauty of the maps never get old to me.

Issues. Some people find the friendly fire super annoying, but I think it's great. It makes you cooperate with your teammates a little, otherwise it would be very close to just playing solo and having bots on your team. It's a bit of a commitment which not everyone is into, and having to grind and progress through so many levels might bore some people out after a while. But that's about it IMO.

If you find this game on sale, I'd highly recommend grabbing it and giving it a try. Definitely one of my personal favorites that I feel strongly about.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="puyo-puyo-tetris">Puyo Puyo Tetris</h1>

<div class="game-review-container">
    <p class="game-review">I've been using PPT as a means of getting a game of Tetris started anytime I want. This game features a multiplayer setting that allows up to four players to go head to head against each other in Tetris and try to knock each other out by sending garbage blocks over to your opponents. This game got pretty competitive amongst my group of friends, so we were easily able to pour hours of gameplay into this game just playing multiplayer Tetris. This game is priced at $30 and I think we were able to play enough to get that value.<span id="dots">...</span>

<div id="more" class="text">
But the game is not just a multiplayer Tetris engine. The full version of this game supports a story mode that contains some plot and dialogue among the in game characters, and some challenges you need to clear before you proceed (like playing Tetris or Puyo Puyo against a computer). In addition to the story mode, the game includes many other single player feature such as a marathon mode where keep playing Tetris/PP forever while the blocks get faster, and also includes an endurance mode, where you play Tetris/PP as many NPC's you can beat until you can't win anymore.

IF you're bored of just regular multiplayer Tetris with your friends, the game supports so many other crazy modes that you could try. There's a swap mode, where you can start off playing Tetris against each other, but in the middle of the game, you swap out to a Puyo Puyo board and start playing that for a little bit before swapping over and over. There's also a mode where apparently clearing certain blocks can give you power ups that you can use to mess up your friends progress.

I'm a big fan of how many control settings this game has for Tetris. You're not able to map your own custom controls, but there's a wide variety of choices to choose from. I currently play with the Table 1 controls, which is the most similar to Tetris played on the computer via TetrisFriends etc. I'm very happy that the controls fit on one Joycon so the fun can be split amongst more players. I'm very bummed that this selection of controls is not available in Tetris 99.

In conclusion, Puyo Puyo Tetris is Tetris and Puyo Puyo puzzle game that features a wide range of variations of the game to keep you entertained for a long time. If you're hesitant because you don't trust my review or don't know if you like playing Tetris at all, try the demo! It's pretty limited and you can't switch controls, but I have friends who have refused to buy the full version and just live off of playing multiplayer on the demo. IMO if you get even around 15 hours of gameplay on this game, it's super worth the \$30.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="xenoblade-chronicles-2">Xenoblade Chronicles 2</h1>

<div class="game-review-container">
    <p class="game-review">Xenoblade Chronicles 2 is a beautiful open world JRPG and one of those massive game that you could sink a hundred hours into. It features 13 hours of cutscenes alone, making it just as long as a 25 episode anime. Despite the pains in the beginning of the game, I got hooked onto the story and was determined to see it through to learn what happens on the characters journey. After finishing the game, I was left feeling super empty inside hungry for more. Really glad that I gave this game a chance, and I hope to play more JRPG's like it in the future!<span id="dots">...</span>

<div id="more" class="text">
I didn't play this game very much for the actual gameplay, just the 13 hour long anime. The world that the game built was pretty impressive and beautiful. I played the English version of the game and I can admit that the voice acting had its faults here and there, but I liked it for the most part. The story had me with so many chaotic emotions at the end and I think I cried a little. The soundtrack complimented the story and the gameplay pretty well, leading me to purchase the soundtrack of this game as well.

The combat is pretty boring. It's deep, but the game keeps throwing tutorial screens at you to learn about everything you can do in the combat system, but in the end you're sorta just standing in front of enemies AA'ing until you can press a button to perform a special move or combo. The complexity of the combat system definitely worked against itself.

Monolith stuffed way too many features into this game. There's a gatcha system which is the only way you can upgrade Poppy. There's a gatcha system with unlocking all the rare blades in the game, and having all those blades in the game seems to serve no point other than a cheap way of adding more addicting content to the game for those that care about collecting them all. There are so many side quests that I didn't really care about to do, but probably would've unlocked even more story and features from there. Monolith really lived up to their name because this game is HUGE and some of the stuff they put in here is the reason why I didn't like this game as much as XC2 TTGC.

This game seems to contain a couple of anime troupes in it. For example, the main character Rex is younger and shorter compared to the girl(s) that he falls in love with. And omg he gets TWO girls... like they really had to give him two girls that were both taller and older than him. I'm used to this garbage so it's fine, it's just a little funny how I can identify these sort of recurring themes in the game.

I had a lot of fun playing this game and constantly think about using that NG+ feature and replaying it with an attempt of playing out more of the features they placed in the game. In order to like this game, you'd probably have to be interested in the story/cutscenes somewhat, or else the rest of the gameplay might bore you.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="boxboy-boxgirl">BOXBOY! + BOXGIRL!</h1>

<div class="game-review-container">
    <p class="game-review">I bought this because I had seen its promotion on the cover of the e-Shop so many times leading up to it's release, and it seemed like a nice puzzle game. At only $10 for so many puzzles, I made the purchase not too long after it came out.<span id="dots">...</span>

<div id="more" class="text">
In single player mode, you basically use your abilities to get from one end of a level to the other. You get scored based on how many boxes you had to use in order to reach the goal. The game also features two player mode, where you can play as both BOXBOY and BOXGIRL and solve some puzzles that require two players to be present. The Switch promotes itself as a console always ready for multiplayer, and I'm happy to see that this game prepared for that as well. A friend can always jump in and start solving puzzles with you.

I wish the puzzles were a little bit harder though. It's super easy to actually get from one end of a puzzle to the other. It gets a little more challenging when you try to minimize your usage of blocks to get the three star score, but they weren't super difficult. I could go through multiple levels and score three stars on the first try, although I will admit some levels made really have to look at the puzzle a different way to get the full score.

I'm haven't finished playing this game. There's just so much more content to go and so many mechanics and plot points that I have yet to discover. I think this game is an excellent choice if you're looking to sit back, relax, and solve a couple of cute looking puzzles in you free time. I would find myself rushing back to my desk multiple times looking to make more progress on solving all these puzzles, and looking forward to doing it again!

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="octopath-traveler">Octopath Traveler</h1>

<div class="game-review-container">
    <p class="game-review">Octopath Traveler is an indie, turn-based JRPG. The basis of the game is that there are eight travelers in the game each with their own unique storyline. You go around meeting these travelers and forming a party with them, and you get to play all four chapters of their individual timelines. Octopath Traveler is definitely within my top three switch games. My switch tells me I've spent around 75 hours playing it, and that's actually insane. I haven't come near that amount of time with other games I've really liked.<span id="dots">...</span>

<div id="more" class="text">
What I enjoyed the most from this game is the complex battle system. It's a turned based system, kind of like Pokemon battles, but it's so much more. For one thing, you can see the order in which your characters and the enemy receive their turn. This ordering is pretty important to the strategy of the game, and there are even abilities that manipulate the order in which players move, which changes up the strategy you'll want to use. The break system is also pretty cool and provides an advantage to you if you master use it effective. Basically by using attacks and abilities that the enemies are weak against, you can break their defenses and stun them for a turn, which opens you up to just throw a bunch of damage onto the enemy without worrying about defending. There are eight different characters in the game, and each character has unique abilities that are totally useful in battle. This allows the player to have a pretty open approach to playing the game, allowing you to experiment with different play styles and strategies.

The map and art in this game are stunning. Very happy with the level of detail and care they put into this game.

The stories are pretty good. I'll admit, sometimes they got a little boring and I would try to speed through the dialogue. But if you're not into one story, there are like seven more for you to like so it's ok. Playing through the chapters of each character is some pretty good character development and you begin to really like the characters you're playing as.

The soundtrack is amazing. It just makes going through the game so much more exciting. I purchased the soundtrack on iTunes and it just brings me back to the time I spent playing this game and it feels great.

This game is BEAUTIFUL and I highly recommend playing it.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="tetris-99">Tetris 99</h1>

<div class="game-review-container">
    <p class="game-review">Tetris 99 is an interesting battle royal take on the classic game of Tetris.
The game is super simple in that the only supported (as of this writing) game mode is to put you up against 98 other players online. It's pretty fun to see yourself go up against so many people and to see your final ranking among everyone else.<span id="dots">...</span>

<div id="more" class="text">
It's actually very hard to get 1st place; there are a lot of super skilled individuals playing the game that are probably way better than you. The game also features an interesting targeting system that allows you to choose who you send your garbage blocks to, as well as some sort of multiplier system. idk I haven't done a lot of research into the mechanics of the game.

This game requires you to have the Nintendo Online Service in order to play. That's super annoying if you don't already have the service. Despite being free, I don't think this game is worth getting the online service for.

The game has only one supported mode. The developers have announced (as of this writing) that they are planning to implement different modes, but I haven't been impressed with the modes they are thinking of.

There is only one controller setting for this game. In order to play this game, you need a "full" controller which means both Joycons, or a Pro Controller. I feel like that's super unnecessary, and doesn't leave enough room for 4 player multiplayer like PPT. I'm also pretty disappointed they don't have as many controller settings as PPT. Using UP on the D-Pad to hard drop your piece may work for some people, but I highly prefer playing with different settings. I feel like it wouldn't be too hard to support more control mappings, or allow users to map controls for themselves.

I've shared many complaints with this game, but overall it's a pretty enjoyable and fun game, especially for fans of Tetris that want to destroy other players online with their skills. Despite having many shortcomings IMO when compared to PPT, it is free after all, and provides a good amount of value for it. I don't think I'll be picking it back up until new control mappings are introduced.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="warframe">Warframe</h1>

<div class="game-review-container">
    <p class="game-review">TL;DR: It's a great looking action RPG that features first person combat, an extensive campaign system, and the ability to team up with other players in the community. It's just not the game for me right now.<span id="dots">...</span>

<div id="more" class="text">
Warframe is a pretty graphically intensive game that got ported over to the Switch through the amazing effort of the Panic Button team. Although probably not as crisp as it is on beefier platforms, it still looks great and runs super smoothly, redefining what is possible for the Switch.

The game isn't too beginner friendly, and my brother seems to agree with me on this. They sorta just throw you into this huge world and you get overwhelmed with everything you could do. I just wanted someone to explain to me what the heck was going on as I played for the first time. I'm sure this game is amazing, it's just not the game for me. Luckily it's FREE which is amazing. I've heard the Warframe community is also super welcoming and helpful, so reaching out to them would also be helpful.

Check out the reviews made by Wulff Den and BeatEmUps. They love the game and can possibly get you excited about playing it. Despite all the complaints I had about it, I genuinely think it could be a super fun game that you could sink your life into.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="xenoblade-chronicles-2-torna-the-golden-country">Xenoblade Chronicles 2: Torna the Golden Country</h1>

<div class="game-review-container">
    <p class="game-review">Torna the Golden Country is a standalone game that came after the release of XC2 and acts as a prequel to the original game. In this game, you get to follow Lora and Jin's adventure as they meet Addam and Mythra and go on a journey to defeat Malos. The gameplay in this game was way better than that of the original, and I wished the original game could've been like this one.<span id="dots">...</span>

<div id="more" class="text">
I found the story to be just as great as the original game. It was super exciting to see how the plot points from the original game connected back to this game; the flashbacks from XC2 literally matched up 1:1 in its prequel. It was really cool being able to walk around witness the events they only alluded to in XC2.

The combat system was so much better. It felt super intuitive switching between a driver and their blades, and switching from blade to blade. I really liked their new mechanic where you could recover a portion of your health by switching characters, because that forces you to actually play the game and think about what you need to do in combat. I really like how drivers and blades BOTH participate in battle, like your blade won't just stand there doing nothing like in XC2.

The cast was great, and I enjoyed following along the main characters of the story. I loved how your entire party throughout the whole game is limited to 9 characters (3 drivers plus their 6 blades). In XC2, there were like 1000 unlockable blades, and a total of 5 drivers in your party that it got really hard to care about some members of the group. in TTGC, there are only 9 people you can care about leveling up and growing, so it's easier to invest in them. Because there are only 9 characters in the game, the game gives you everything you need in those 9 characters. That means all the necessary field skills and driver/blade combo moves are all vested into these 9 characters instead of having to unlock blades to get what you need.

This game is great and I definitely recommend playing it. I think you'd want to play the original game, just so you can appreciate the story of this game a little more, but I understand if you just want to play this game because it's a little cheaper and the gameplay is better than the original.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="katana-zero">Katana ZERO</h1>

<div class="game-review-container">
    <p class="game-review">Katana ZERO is a 2D action RPG that features an interesting combat mechanic: each enemy only takes one hit to kill, but so do you. The game is split up into levels where you clear levels by defeating every enemy in the area or completing some other related task. When this game was announced and released, there seemed to be a lot of hype around it (or maybe that was just me getting sucked into marketing) and I bought it off that.

<div id="more" class="text">
The main combat gameplay was pretty fun. It was pretty fun to try and clear maps with your abilities to jump and dash around. Being able to fly around the map killing enemies is pretty cool.

The story was hard to make out. It's one of those games where the game doesn't tell you what's going on - you just have to figure it out from the clues that are thrown around between the characters in vague dialogue, or other interactions in the game. The story is DARK. This is not a slice of life game with a mellow theme and mood. This game has a lot of gore and death in it, and even touches upon psychological issues, which is the complete opposite of sunshine and rainbows. I felt there could've been more to the story. It's a pretty short game, and the game ended on a cliffhanger. I felt like the game had so much more potential to expand on the short gameplay we were given, but I guess this is just what you get for a low price point.

Nah, I wouldn't recommend this game. It has a low price, looks well developed, and the 1-hit combat was pretty enjoyable. I just think there coulda been so much more to the game had they decided to write out the plot more, or introduce more combat mechanics to the game to keep it new.

</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="super-mario-odyssey">Super Mario Odyssey</h1>

<div class="game-review-container">
    <p class="game-review">Like BOTW, Super Mario Odyssey is revered as one of the top must play games on the Nintendo Switch. I finally got the chance to play it and I it definitely met my expectations. It wasn't the one of the greatest games I've ever played, but it was super well crafted and I had a lot of fun exploring the worlds the creator built and solving all the puzzles and challenges.<span id="dots">...</span>

<div id="more" class="text">
The plot of the game hasn't changed much from the usual Mario plot - Princess Peach has been captured by Bowser and Mario intends on rescuing her. This time, Mario is accompanied by a new partner, Cappy. In the game, Cappy can be throw to defeat enemies as well as manifest Mario into other objects in the game which you can use to get around obstacles. Cappy adds some pretty cool and interesting mechanics to the game and was pretty fun to play with.

The most preferable way to play the game is with detached Joycons. I actually really like this, because it feels so right, and it's a game that makes use of the Switch hardware instead of just treating is as another GameBoy. It also makes the game a lot more immerseive and makes it feel like you're actualy throwing Cappy yourself. Playing it any way other than with detached Joycons feels wrong and even puts you at a slight disadvantage.

I ended up spending around 15 hours in the game and collected about 200 moons. They weren't too challenging to collect. I really enjoyed all the puzzles and challenges you had to go through to find them because it made finding each star very rewarding, and also makes exploring random parts of the world fun. Mario is a pretty linear game in the sense that there's a plot and an ending to it, but these moons encourage the player to take a break from the story and explore more of the world the developers built. It's crazy how there are a total of 999 moons built into this game, and you continuously get rewarded for finding new moons, such as unlocking new worlds post game.

The ending is super satisfying. I don't want to spoil it, but I thought the music at the end was absolutely BOMB and put a smile on my face as I was finishing up the game.

I wasn't able to put as many hours into this as BOTW, XC2, or Octopath, but I think this game is super worth it and is super fun. It can be the perfect game to take out on long commutes or random idle periods in life when you just want to go collect some moons and chill out.
</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="mario-rabbids-kingdom-battle">Mario + Rabbids: Kingdom Battle</h1>

<div class="game-review-container">
    <p class="game-review">I dropped this game within the first two hours of playing it. Some people loved it, but it's just not my game.<span id="dots">...</span>

<div id="more" class="text">
The characters aren't charming to me. I've never encountered the Rabbids until this game, and while they did give me a small chuckle now and then, they overall weren't attractive to me. The Mario characters are just Mario sprites put in a different setting. It didn't really draw me in. The cast of characters and their super minimal interactions with each other bored me.

From this game, I learned that I'm just not into this sort of combat system. You have to take advantage of the geography of the map as well as the positioning of your characters and the enemies. I can definitely see how this combat system would need a good amount of strategy and thinking in order to be successful, which is just fine. I'm just unsatisfied with how slow everything went. Like having to wait for all the animations, and then waiting for the enemy to complete their turn, was too painful for me. They even have an option to speed up the enemies turn, but that still didn't feel fast enough for me. I guess I just wanted it to end faster. I've seen a couple of JRPG's use a similar combat system, which is making me question whether I should give those a try, or just stay away completely because I already know I might not like them.

Overall advice: This game can be very good (not too sure about the price). Just do your research and know what type of game it is before making this purchase. I'm just glad I was able to get it on sale.
</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<h1 class="game-title" id="dead-cells">Dead Cells</h1>

<div class="game-review-container">
    <p class="game-review">Dead Cells is a game with a lot of hype around it which initially drew me to buy it. Playing it for the first time I was actually pretty disappointed in it and after putting it down for the night. I wasn't too sure if I was going to pick it back up. After finishing my stuff with Hollow Knight, I circled back to Dead Cells and finally finished it and wow I actually had a lot of fun and really enjoyed it.<span id="dots">...</span></p>

    <div id="more" class="text">

Dead Cells is a 2D metroidvania type game with rogue-like elements to it. You start off as this sort of infected warrior and are thrown into a set of dungeons where you'll need to find the exit to proceed to the next map. If you die, you have to start all over from the beginning. However it's not too hopeless because during each run, you collect "cells" and get to spend those cells on permanent upgrades that persist through every run so you'll be a little stronger each time. During your journey, you also find the "blueprints" for all different types of weapons, and spending cells to unlock them will allow you to start picking up these weapons in the dungeons when you fight. Each map in the game is randomly generated (thus rogue-like) and unique for every run that you do.

The game graphics are in bit art and it looks super cool if you're into that. The combat mechanics feels SUPER smooth and satisfying. They included the dodge roll mechanic that allows you to roll pass enemies and attacks without taking damage and it feels super smooth. They also have this smash drop mechanic where you can drop on enemies and deal damage to them. You're capable of wielding four weapons at a time, and making them all work together to do as much damage as possible makes the combat satisfying to master. The combination of all these mechanics and visuals make the gameplay super satisfying.

My favorite weapons in the game is the Broadsword. It's just this huge sword that has a very slow attack speed, but hits super hard. The animation that they gave this sword and how it just slams into everything is super satisfying. Although it swings slow, you can combine it with your dodge roll or jumps to cancel mid-attack, or even continue your attack where you left off if your cancel is short enough. I think because of this weapon alone, I'll be pulling out Dead Cells during my long downtimes and just try to bust enemies with the big sword.

I got this game on sale, but otherwise I think it's definitely worth the price. I gave this game and A rating, and the only reason why it's no an S is because it's actually a pretty small game, and I don't think that can stand in the same tier as the giants in S tier, but Dead Cells is still a super great game.
</div>

    <p id="show-more-button">Read more...</p>

</div>

<h1 class="game-title" id="hollow-knight">Hollow Knight</h1>

<div class="game-review-container">
    <p class="game-review">Hollow Knight is a 2D action RPG platformer. When playing this game, I was challenged with challenging platforming tasks that made me slam my desk, challenging enemies that pissed me off, and hard AF boss fights that I had to attempt multiple times. This game is absolutely insane and I LOVED PLAYING IT.<span id="dots">...</span>

<div id="more" class="text">
The part I enjoyed the most was the platforming and the exploring. Team Cherry developed this immense and beautiful world and starts off with zero hints or clues as to what's going on in the game for themselves. I happen to be super dumb, so figuring out the plot from the events around me was near impossible. However, traveling around the world was super rewarding every single time. Instead of rushing towards what I thought was the next objective, I would frequently take small moments to identify parts of the map I haven't explored and head there instead. Every time, I was rewarded with new hidden experiences as well as possibly new items or currency that would help me overcome more enemies. I would even get chills down my spine exploring certain areas because the game was that good at setting the mood and making exploring so mysterious and unpredictable.

The game is SUPER CHALLENGING and it was a struggle for me to get through most of it. There were multiple times I thought I would never be able to progress in the game until I searched up guides on how to defeat certain enemies and also invested in some more items that would make me stronger. The small enemies you find along your travels are also super annoying. The game has this system where if you die, you're sent back to the nearest save point with NO MONEY. In order to get your money back, you'll have to head back to where you died. This mechanic can get really frustrating because if you die before you can get back to your other corpse, you'll permanently lose the money that you had.

The boss battles were HARD, but I had a lot of fun playing them. There's something about overcoming such a difficult enemy in the game after so many tries that makes it so rewarding. All the bosses have unique and interesting designs with their own unique attack patterns. This made each experience different and required me to adapt in my reaction time and strategy.

While playing this game, I searched up a walkthrough of the game, which I take no shame in because being able to find my way through the game makes it much more enjoyable instead of me having to quit and never finish it. I would put down the walkthrough when I wanted to play the game myself though.

This game is worth WAY more than its \$15 retail price. The length, depth, challenge, and rewards in this game are just so deep and vast. Similar games go for a much higher price. I put around 25 hours into this game, and there's still so much more of the game to be played. There's even a bunch of DLC you can dive into if you're absolutely in love with the game. It is a pretty DIFFICULT game though, so you need to have a certain level of patience and affinity for hard games for me to suggest this game to you. But for those of you that can handle it, I'd say this is an absolutely amazing game worth trying.
</div>
</p>
    <p id="show-more-button">Read more...</p>
</div>

<!-- Moonlighter -->
<h1 class="game-title" id="moonlighter">Moonlighter</h1>
<div class="game-review-container">
<p class="game-review">In Moonlighter, you take on the role of Will, the merchant owner of a store called Moonlighter in a small town next to five dungeons. The town used to be filled with heroes who would explore the dungeons, and merchants who would sell equipment to them. But numerous deaths in the dungeons caused them to close down and city to slowly dwindle. Will has a dream of one day exploring the fifth dungeon. The concept of this game is to help will explore the dungeons, and while doing so, bring back found artifacts to sell in your store. As you gain more gold, you can buy upgrades to your town, store, equipment, etc. that'll make you stronger and help you progress further in the dungeons.<span id="dots">...</span>
</p>

<div id="more" class="text">

When I first started playing this game, I fell in love with the concept. The concept of the game, and the pixelated art reminds me of Stardew Valley. Moonlighter is more of a linear game where aside from the shopkeeping, you have a main goal of clearing all of the dungeons and helping Will enter the fifth dungeon. When you're not fighting in the dungeon, you come back to down and strategize about how you're going to profit on your collected artifacts, and what upgrades you should spend your money on. It's a super fun concept to play and I just loved it.

I guess going further into the game, there were a couple of things that started to annoy me. I got a little bored of the rogue-like structure of the game... maybe rogue-likes like this one just aren't for me. Entering the dungeons and fighting monsters all the time started to get a little boring. The combat mechanics never really evolve, so going in the dungeons and using the same combat mechanics over and over got boring. There are different weapons to explore, leading to different combat styles you can choose from, but weapons are expensive so I didn't want to change it up when I found something that worked.

There were also a couple of bugs and glitches in the game that annoyed me. I was able to "dodge roll" out of my own store walls, and there was no quick way for me to get back in and serve my customers, so I had to reload the game. In the game, there's a "popularity" mechanic where the price of your goods change based on how much your customers value it, but that has literally never shown up. All items seem to always sell at a single price in my game and never change popularity. There are indeed a couple times the game has experience frame drops, which boggles me because this definitely shouldn't be a high power game.

There are different types of weapons to choose from. However within each weapon class, there are different types of weapons you can choose from. I feel like these different types... literally make no difference at all. For example, there are three type of short sword in the game you can buy, two of which are actually different and unique, while the third is just a re-skin of the first one... so it's just repetitive content with no purpose.

Despite all the negative things I've said about this game, I still love the concept and have been having a lot of fun playing it. I intend on finishing it and seeing the end of this story. This game is priced at $20, and I got it on sale which is an even better deal. My negative comments and low rating shouldn't discourage you from giving this game a try. I just think that a game with this many technical issues cannot stand with the games in my S and A tier.
</div>

<p id="show-more-button">Read more...</p>
</div>

<!-- Mario Kart 8 Deluxe -->
<h1 class="game-title" id="mario-kart-8-deluxe">Mario Kart 8 Deluxe</h1>
<div class="game-review-container">
<p id="game-review">
Mario Kart 8 Deluxe is the most up-to-date version of Mario kart that Nintendo has to offer. It's a re-release for the original Mario Kart 8 release for the WiiU that probably did poorly in proportion to the performance of the WiiU in the market. For this re-release, they did include some switch-exclusive content to try and make it seem like a better value as well as motive owners of the original game to upgrade to this version. I got this game on sale for $40 (originally $60 during E3 sales). Luckily it was on sale because IMO This game might not be worth $60.<span id="dots">...</span>
</p>

<div id="more" class="text">

My main disappointment in the game... is that it's JUST Mario Kart. The game really hasn't changed at all from the DS, Wii, and N64 days (all of which I've played before and are probably just super used to). I think after all these years, the only immediate differences are the newly designed courses, the skins on the karts, and the number of playable characters. But despite those content changes, the game just feels completely the same. It brings back a lot of nostalgia, but there's nothing new or exciting to draw me in. When purchasing the game, all tracks, characters, and karts are released, which is a total downer for me because there's no reason for me to play this single player. It's literally just a means of playing Mario Kart with your friends.

But another thing that disappoints me is the online multiplayer. If you want to play with your friends across switches, everyone will need a Nintendo Online subscription, which is super annoying. If you and all your friends already have Online, then this is probably not a problem and probably a huge benefit for you because you could hop into a game with your friends no matter where they are. I just graduate college and won't be seeing my friends in person too often anymore, and can't replicate this because no one else has Online.

That being said, this game is indeed the best Mario Kart ever made. It's combined all the best aspects of all the Mario Kart games in the past. The online multiplayer is great because it gives you the opportunity to race against your friends whenever you want. I believe there's motion control steering on the Joycons but you can also just steer with the Joystick. If you're super into the game and get a lot of joy from racing with you friends or the computer on varying difficulties, then this is still one of the best racing games out in the market right now and you should definitely get it. Mario Kart is still a great game to break out among you friends to immediately have a good time and is the game everyone's most familiar with or can learn super quickly because of its simplicity and popularity. It has infinite replayability, which is probably the one thing holding it in my A tier instead of dropping down to B.
</div>
<p id="show-more-button">Read more...</p>
</div>

<!-- Wolfenstein II -->
<h1 class="game-title" id="wolfenstein-ii-the-new-colossus">Wolfenstein II: The New Colossus</h1>
<div class="game-review-container">
<p id="game-review">
This game is a pretty intense power fantasy. In a couple words, the game is a FPS centered around killing a bunch of Nazis to liberate America. It contains pretty mature content, including cursing and a lot of blood and gore. So if you're not ready for those themes, I wouldn't recommend this game. Other than that, I found the game pretty fun. It's my first console FPS game, I had a lot of fun getting used to the traditional FPS controller mechanics. I liked that they had many difficulty settings because I set it pretty low in order to get through the game and not die as often. The game is pretty well crafted, and Panic Button did an amazing job porting it to the Switch. I got it on sale and it took me around 15 hours to complete the game. The game contains extra missions in the end to extend your gamplay. Overall, I think this is a pretty great game and I had fun.
</p>
</div>

<!-- Atelier Rorona -->
<h1 class="game-title" id="atelier-rorona-the-alchemist-of-arland">Atelier Rorona The Alchemist of Arland</h1>
<div class="game-review-container">
<p id="game-review">
At this point I've just accepted that RPG's (mostly JRPG's) are just my type of game. I like them because they usually include a set of charming characters, and there's an actual linear story and ending to the game. Atelier Rorona is a pretty chill slice of life game where Rorona tries to save her alchemy shop from closing down. In order to do this, she performs alchemy for the government to prove her worth.
</p>

<div id="more" class="text">

The story is SUPER chill and shallow. There isn't a huge difficulty or problem the main character faces other than the assignments she has to complete. This makes the story less interesting, but I wasn't very bothered by it because I still wanted to complete it. I found the synthesis (alchemy) system pretty fun. It's similar to crafting materials in Minecraft. Whenever you gather the materials you need, or synthesize something, there's a cost to doing so, and the objective is to strategically manage your decisions so that you can complete the assignments on time. I found that pretty fun and just a tiny bit stressful.

The artwork, flow, and mechanics of the game felt pretty nice. The battle system wasn't very deep but that was fine to me.

This game has MANY multiple endings, and you can probably find all the endings on Youtube. They vary based off of your choices and performance in the game. This is probably my least favorite thing in the game - that I can't experience all the content in the game with reasonable effort. I think if you're away from your shop for long periods of time, you risk missing out on some cutscenes and small story content too and you'd have to replay the game to try to catch those small differences. I really wish there was a way to give each player a more unified experiences (but I'm fine with getting one out of multiple endings).

Overall I'm a huge weeb and I'm willing to forgo certain game elements to play a nice JRPG. This game is the first in a trilogy (that also now has a fourth game) and I look forward to playing those games and seeing how they upgrade systems such as the battle system. I had fun!
</div>
<p id="show-more-button">Read more...</p>
</div>

<!-- Astral Chain -->
<h1 class="game-title" id="astral-chain">ASTRAL CHAIN</h1>
<div class="game-review-container">
<p id="game-review">
Astral Chain is a 3D action-based JRPG produced by Platinum Games. It was my first time ever playing any of Platinum's games, and I was super impressed. In short, this game was just super cool. The choice of music complimented the art style and mood of the game very well. The action/combat mechanics were very complex, but were well thought out and add a lot of value and skill to the game. I've heard it can only run at 30FPS, but it looks really smooth and I never noticed it one bit during my playthrough. I actually really enjoyed the story aspect of the game too, and was impressed they were able to construct a good story when they already developed a solid combat system. I guess that's expected since previous Platinum games have similar 3D combat systems. I had an amazing time and would definitely recommend this to anyone who is looking for a challenge with the combat system.
</p>

<div id="more" class="text">

In the game, you play as a character who is chained to a creature called a Legion, and you're able to control it and use its unique abilities. In combat, you have control over your Legion's actions and there are cool interactions and attacks you can perform alongside them.

I thought the puzzles in the game were fun and rewarding. It's really cool how they applied the legion mechanics to some pretty challenging puzzles. Some of the puzzles include motion control, and I'm always a fan of games taking advantage of the Switch's hardware. In addition to puzzles, there are a ton of side missions and post-game missions that you could sink time into. I'm impressed that these game extras aren't super boring and repetitive. Each one has a pretty nice design and can utilize a unique mechanic of the game.

The protagonist of the game doesn't speak at all during the game, and I always think that's a downside to any RPG, but Platinum has found other ways to bring in character development for both the protagonist and other members of the cast. I wouldn't say the development of any character in this game is deep, but it's enough to make them quirky and attractive. Definitely not a boring cast to play with.

This part might spoil the story a little bit so skip if you don't want to have any of it spoiled. But at the climax of the game, you unlock one final ability you can perform between you and your legions. It was during a cutscene when they were showing the player what it would look like, and I remember mentally screaming "WOAH DO I GET TO PLAY THAT??" and was extremely satisfied when I was taken into combat with that new ability. That was probably the most memorable moment of the game for me, and it was at that point I decided this game was top-tier.
</div>
<p id="show-more-button">Read more...</p>
</div>

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
