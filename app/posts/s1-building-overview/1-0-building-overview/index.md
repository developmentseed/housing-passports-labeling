---
title: Building overview
date: 2012-09-28
layout: post.html
---
## Building labeling
<p align="justify">
When you area drawing a bounding box (bbox) around buildings:
</p>
<p align="justify">
    <ol align="justify">
        <li>Make sure the bbox includes the entire building.</li>
        <li>Only draw the bbox around the front face (or façade) of the building. (This is helps when linking the streetview properties to the building footprint map).</li>
        <li>After drawing the bbox, check *all* building properties.</li>
        <li>If you start labeling buildings in an image, be sure to complete labeling the other buildings in the image.</li>
    </ol>
</p>

## Repetitive or difficult labels

<p align="justify">
If there are multiple images in a row that are the same or very similar, it's okay to skip images. This may happen if the car was moving slowly when taking pictures or driving past a very similar scene (e.g., a field, forest, or very long building).
</p>
<p align="justify">
If a building property is hard to label or you are not sure how to label it, open a ticket in [`housing-passports-labeling`](https://github.com/developmentseed/housing-passports-labeling/issues/new) and follow the pre-filled issue template. Be sure to tag a building expert in your ticket.
</p>

## Special cases

### 1. Far away buildings
<p align="justify">
If the buildings are too far away, skip them because it will be hard to figure out all the properties. The cutoff distance should be about 10-15 meters, but use your judgement. 
</p>
<p align="justify">
Here is an example where the buildings are too far away across a double highway:
</p>

<div class="gallery">
    <figure >
        <img src="/assets/graphics/content_blogs/far_away_1.png">
        <figcaption> Example 1.</figcaption>
    </figure>
    <figure >
        <img src="/assets/graphics/content_blogs/far_away_2.png">
        <figcaption> Example 2.</figcaption>
    </figure>
</div>

### 2. Building corners
<p align="justify">
When the car drove around corners, the images will stop showing one face of a building and start showing another. In these cases, we should label only the images where the image contains a single face or façade, as you can see in the gif below:
</p>

![corner](/assets/graphics/content_blogs/building_corners.gif)

### 3. Images object block line of sight to a building
<p align="justify">
When a car, tree, or other object is in front of a building, we should still label it if you can still see where a building starts or ends. Do your best to draw a good bbox, and then mark the building or building part with the “occluded” property within the CVAT labeling program. But if the car or other objects covers almost the entire building, it is better to skip this image. Do your best to draw a good bbox, and then mark the building with the “occluded” property within the CVAT labeling program.
</p>

![image](/assets/graphics/content_blogs/images_object_block_line.png)

#### Some examples about consider occluded or not

**Consider like occluded**

When the fence or other objects cover 30% or all the building or building part. Some examples:

<div class="gallery">
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/occluded_01.png"></a>
        <figcaption> Example 1, door occluded by pole</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/occluded_02.png"></a>
        <figcaption> Example 2, window occluded by tree</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/occluded_03.png"></a>
        <figcaption> Example 3, building occluded by cars</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/occluded_04.png"></a>
        <figcaption> Example 4, building occluded by tree</figcaption>  
    </figure>
</div>

**Consider like not occluded**

<p align="justify">
When the fence or other objects does not cover all the building or building part and it allows us to see the building. Some examples:
</p>
<div class="gallery">
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/images/building_security/secure_cartagena_neiva_01.png"></a>
        <figcaption> Example 1, Protection barrier.</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/images/building_security/secure_cartagena_neiva_02.png"></a>
        <figcaption> Example 2, Protection barrier.</figcaption>
    </figure>
</div>

**Skip labeling:**

<p>
    When the car or other objects covers almost the entire building or building part and it is difficult to recognize where the building starts or ends. Some example:
</p>

<div class="gallery">
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/skip_01.png"></a>
        <figcaption> Example 1</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/skip_02.png"></a>
        <figcaption> Example 2</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/skip_03.png"></a>
        <figcaption> Example 3</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/assets/graphics/content_blogs/skip_04.png"></a>
        <figcaption> Example 4</figcaption>  
    </figure>
</div>


### 4. Building openings
<p align="justify">
Only label building openings (windows, doors, garages) when those openings are part of a building. Openings that are part of a stand-alone wall should be skipped.
</p>