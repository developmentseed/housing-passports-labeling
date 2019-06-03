---
title: Building overview
date: 2012-09-28
layout: post.html
---
### 1. Images where the buildings are far away
There are some cases where the highways have double via, and the buildings are away, as you can see in the images below. In these cases, we skip them when labeling.

![image](https://user-images.githubusercontent.com/19536044/58639451-8f3b4700-82bc-11e9-96f2-71df914023b5.png)

### 2. Images where the buildings are in the corner
When the car drove for the corners, the images of the buildings show us in this way, in these cases, we should labeling only the images where the buildings are in front, as you can see in the gif below. 
![corner](https://user-images.githubusercontent.com/19536044/58818834-6b496f80-85f4-11e9-956b-18046b73569c.gif)

### 3. Images where the buildings are covered in large part by car (or other object)
When the car (or other object) is in front of a building, we are labeling the building, but marking it property as “occluded” within our labeling program.

![image](https://user-images.githubusercontent.com/19536044/58819698-65ed2480-85f6-11e9-9f52-e753899dad76.png)
