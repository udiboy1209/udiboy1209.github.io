# Intern Blog

As I sit on my desk in Amazon Bangalore Office, with two widescreen monitors and a Macbook pro,
I wonder what am I doing.
I mean it's 12:30 in the afternoon here, I just walked in half an hour ago, and I'm writing my intern blog.
What I'm really doing is waiting for a review on a wiki I wrote describing two possible approaches to the
problem given to me to solve for the duration of my internship.
It's the third time I have reminded my mentor to review it, but he doesn't seem interested at all
and is busy in back to back meetings since yesterday.
Maybe that's what its like to work in large MNCs, lots of planning and little implementation. 
Here goes my two cents on the Great Customer-centric Amazon Company summer internship.


## Selection process

Amazon has been on a hiring spree in India for the last year! They are really very keen on quick expansion in this country.
I am with 40 other interns at Bangalore center alone. And they have centers in Hyderabad and Delhi too.
And not just interns, they are hiring Full-time Employees with the same enthu.
Most people in my team have joined a few months back. 
Naturally, they came to PT-cell IITB and took 6 interns 
(which I think is too less for IIT Bombay because people here deserve this oppurtunity
more than the most of my co-interns, but I'm not gonna rant about that here).

Amazon comes to IITB one, two months into the season when the intern fever has settled down.
It was open for all departments and had no CPI cut-off, which is how an EE Dual 7-pointer got in :P.
For a person like me, that was enough to make me apply for the intern.
The interview was like any other Software Dev interview would be - an online selection test on DSA
and multiple one-on-one rounds of DSA questions. The interviewers we had were pretty indulgent and
interactive while asking questions, up to the point where it almost felt like a discussion.

In my case, I had no idea going into the one-on-one round that a Depth-first Search uses stacks
and also how it is implemented with stacks (I can hear you laughing at me). The interviewer wasn't bothered much
by the fact and he helped me derive the whole implementation by asking me the correct questions.
The next round was a similar set of questions, and went well for me and I eventually got selected! Yay!

## Pre-Internship Time

Cutting to pre-summer time, conveniently skipping the infi requests of unlimited Prime menmberships
and free gift vouchers from friends and family, it's a very big wait till Amazon HR people will first contact you.
Atleast that's what happened with all the people going to Bangalore. I wouldn't blame them though, because
Amazon is probably overworking their HR team with the hiring spree this year. In the end, they did
get everything done though - Flight tickets, Hotel accomodation for 15 days, Airport pickup.

The internship starts a bit late into the summer holidays, so you get about 2 weeks of free time after your endsems.
All you are expected to do in this time is be in email contact with the HR team.
We waited too long to contact the HR team and found out about these 2 weeks of free time pretty late.

## It's still Day 1

They throw around this phrase here like CO<sub>2</sub> from their mouths. All it means is every employee is expected to work
everyday like it's their Day 1, and they have a long way to go still.
My day 1 was pretty bummed out, actually :P. I hadn't expected anything better though, with multiple boring HR sessions,
getting your ID card photo clicked, and what not. It wasn't all bad because we did each get a Macbook as our
work laptop.

Well, then came the development environment setup. They never make that one an easy job.
It took two long days to install all the tools, acquire permissions in multiple groups (Unix groups),
set up a cloud desktop, and get it all working together. It actually seems pretty impressive,
because when you think about it they have set up a pretty robust system which any company of
this scale would require. In the first week we found out about how development actually gets done
in Amazon. We found out about what pipelines they use for stage-by-stage deployment, how they 
test at every stage, and how mishaps are handled. Yea, its not as simple as just pushing code to the
server. There's Alpha and Beta stages in between which every code change has to pass through. And they have
automated tests hooked up to every stage, which if they fail will stop the deployment automatically!

It all feels surreal when you think about the shear scale any single piece of code will be affecting.
As an example, let me tell you about my team.
