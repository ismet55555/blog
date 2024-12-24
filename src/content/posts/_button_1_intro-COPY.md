---
title: 'Big Button - Part 1 - Introcution'
description: 'An introduction to the big button embedded project'
pubDate: 'Dec 23 2023'
tags: ['button', 'embedded', 'rust', 'programming']
---

<!-- markdownlint-disable MD033 -->

<img
   src="/src/assets/images/embedded-dream.png"
   alt="image not found"
   class="w-full mx-auto">

## Table of Contents

## The Embedded Fantasy
***

**Imagine the following scenerio:** You get a `call from a` good and respected
friend. After some informal conversation he switches his tone and prepares to
carefully ask you for an opinion on an idea he has. At this point you already
know what is going to happen next.

As a IT professional, you have experienced
this a hundred times. A friend or relative corners you at some event and
"confidentially" shares his/her genius industry disruptive idea. So you go
into autopilot-politly-interested mode, carefully scanning the conversation
for an exit. But something is different. The more you listen, the more your
friend's story and idea catches your attention.

You become more inspired.
You can tell he has done his homework. There are some basic questions that
need to be answered, but in all, this isn't just something he woke up with
today. This seems to be the real deal.

To be more specific, your friend's idea is a prototype of a physical device,
maybe even a Internet of Things (IoT) device. You are inspired, energized,
and want to help, however, it is obvious that you don't have any embedded
systems knowledge and would not know where to start.... that is, until you
find this blog series!

Alright, maybe this intro to embedded system rust programming is a little too
dramatic and too specific, but I do hope I got your attention to read further!

## About This Blog Series

### Project Backstory

Where I live, trash pick up is Tuesdays and Fridays. Or is it Mondays and
Thursdays? Well, maybe one of those days is Wednesday...? After 10 years
living in the same residence, I still question myself and still can
miss trash day. This can leave trash inside for too long or leave
trash outside for too long, depending on timing.

Now, I could do two very easy things to remediate this issue.

1. Stop being an idiot and just memorize the days.
2. Set a recurring alarm on my phone for the days.

Because, neither seems very reasonable, and because I am always looking
for a insightful side project to be inspired by. I opted to come up
with a much more complicated approach. I wanted a project to learn and
apply a embedded systems project. Furthermore, I wanted to be more
comfortable with Rust programming as well.

My initial goal was to create a button that when pressed, sends a
text message to my phone and monitors text message responses.
This allows me to snooze or silence the reminder to take out the trash.

I know, not very thought out, but I guess reason enough to
create some thing!

The project that we will be developing will be a large red button. This
button assembly will have a variety of features:

- Super large red glowing button
- Fully battery operated (rechargable, battery lasting for at least a week)
- Multiple fancy LEDs with a variety of light patterns
- Sound buzzer for audio signal feedback
- System On/Off toggle switch
- Internet access/interconetcitivy via REST API

So in short, and very basically, we are building and programming a big
glorified push button.

### Project Goal

Now obviously, you do not need to use this device for trash day reminders
or anything close to that. However, going through this blog series should
enable you to reuse this code and/or imporvise with these concepts in order to
develop your own idea. It is my hope that after working through this
project you yourself will be able to solve some problem that requires
embedded systems.

### Project Outline (Subject to Change)

At the time of writing this project introduction, I am not fully able to summerize
the specifics of the project, I am still working through details. However, I am
able to outline the general topics of this project. These general Topics include
the following:

- 3D CAD Design
- 3D Printing and Surface Finishing
- Electrical Diagrams and Circuits
- Rust Programming
- General Programming Concepts
- Embedded Design Concepts
- Fun (Potentially)

## Semi-Prerquisite Resources

Over the course of this project outline. I will try my very best to describe
and point out all the little weird gotchas I had to struggle with when
developing this project. However, before jumping into this project series,
I must say that you would be **far** better off to review or scan throught the
following resources. To the very least, click on each resource, understand
what it is and what its purpose is. If in doubt, you can always ask AI to
quickly summerize.

### 3D Design with Fustion 360

- TODO

### 3D Printing

- TODO

### Basic Electrical Circuits

- TODO

### Rust Programming

- TODO

### General Embedded Systems Info

- TODO

### Embedded System Programming in Rust

- TODO

## Rust Example

```rust
use embassy_rp::gpio::Output;
use embassy_time::Timer;

pub struct Led {
   pub item_info: [(u8, Output<'static>); 8],
}
```
