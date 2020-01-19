# twitchplaystoaster

**PICTURES OF THE PROCESS**
https://photos.google.com/share/AF1QipPq0WwM0UsPSEr4gR-eUclu_fXumJ3FxG-lyGoQsqqtLmc5XtspDKD9tBdJEkG4KA?key=Y3dUTUVSWnB0LVBvd1BOellvcWE4SWo4Z2x3WS1R

# Inspiration
We love toasters. We love Twitch.tv. We love coding.

**What better way to combine them?**

# What it does
Inspired by TwitchPlaysPokemon and its unique method of viewer interaction (a mass of users controlling one player character), we decided to bring the concept into the real world and create TwitchPlaysToaster! We’ve connected a couple of Raspberry Pis mounted inside upcycled toasters to a Twitch.tv chatbot that listens for specific commands, and translates that into real movement. With our built in TabForACause functionality, you can raise money just by making the toaster move.

# How we built it
-An Azure Cloud VM running a Node.js server monitors data taken in from a Twitch.tv chatbot listening on our Twitch.tv channel and sends the appropriate detected commands to 2 Raspberry Pis (one in each toaster) to be executed (i.e. go left, go right, etc.), while another device listens for these commands and opens a tab in a browser with TabForACause installed so we can passively raise money for charity while driving the toaster.

# Challenges we ran into
-Having to hack together wheels from whatever we could find at the stores we visited and making that compatible with the DC motors we used -Creating the architecture that allows data to flow from the cloud to the Raspberry Pis

# Accomplishments that we're proud of
Learning how to use Azure Cloud and creating Virtual Machines inside it, Learning to use Twitch.tv’s chatbot API, Learning how to gut a toaster like a fish, Hacking together the insides of an RC from scratch with minimal resources

# What's next for TwitchPlaysToaster
TwitchPlaysToaster has a lot of applications in the charity stream genre on Twitch.tv. Because of integration with TabForACause, our framework natively raises money for charity in a passive manner. So when coupled with a charity event like a race where each toaster is racing for a charity and the money raised goes to the winner’s charity, the code behind the scenes is supplementing the amount raised.

In addition, due the humor factor of the racers being toasters, they can be decorated and given personalities which can allow for viewers to become fans of certain toasters. This fandom and personal buy-in that comes from that can be used to leverage donations for their toaster of choice.

Since the toasters can move in pretty much any way, the only limit on the events that can be held is whatever the person running the stream can think of. Since the number of toasters is only limited by the amount of hardware a streamer has, events of any number of toasters (5,10,even 100) could be created since our framework can handle sending POST requests to any number of devices.
