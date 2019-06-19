---
title: Building overview
date: 2012-09-28
layout: post.html
---
## Building labeling
When drawing a bounding box (bbox) around buildings:
1. Make sure the bbox includes the entire building.
2. Only draw the bbox around the front face (or façade) of the building. (This is helps when linking the streetview properties to the building footprint map).
3. After drawing the bbox, check *all* building properties.
4. If you start labeling buildings in an image, be sure to completely label the image.

## Repetitive or difficult labels
If there are multiple images in a row that are the same or very similar, it's okay to skip images. This may happen if the car was moving slowly when taking pictures or driving past a very similar scene (e.g., a field, forest, or very long building).

If a building property is hard to label or you are not sure how to label it, open a ticket in `housing-passports-labeling` and follow the pre-filled issue template. Be sure to tag a building expert in your ticket.

## Special cases
### 1. Far away buildings
If the buildings are too far away, skip them because it will be hard to figure out all the properties. The cutoff distance should be about 10-15 meters, but use your judgement. 

Here is an example where the buildings are too far away across a double highway:
![image](https://user-images.githubusercontent.com/19536044/58639451-8f3b4700-82bc-11e9-96f2-71df914023b5.png)

### 2. Building corners
When the car drove around corners, the images will stop showing one face of a building and start showing another. In these cases, we should label only the images where the image contains a single face or façade, as you can see in the gif below:
![corner](https://user-images.githubusercontent.com/19536044/58818834-6b496f80-85f4-11e9-956b-18046b73569c.gif)

### 3. Images object block line of sight to a building
When a car, tree, or other object is in front of a building, we should still label it. Do your best to draw a good bbox, and then mark the building with the “occluded” property within the CVAT labeling program.
![image](https://user-images.githubusercontent.com/19536044/58819698-65ed2480-85f6-11e9-9f52-e753899dad76.png)

### 4. Building openings
Only label building openings (windows, doors, garages) when those openings are part of a building. Openings that are part of a stand-alone wall should be skipped.