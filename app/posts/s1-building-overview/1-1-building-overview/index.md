---
title: Labeling notes
date: 2012-09-28
layout: post.html
---
## Building labeling

When drawing a bounding box (bbox) around buildings:

- Make sure the bbox includes the entire building.
- Only draw the bbox around the front face (or façade) of the building. (This is helps when linking the streetview properties to the building footprint map). Include the roof eave only if the material of construction is concrete, on other cases not include the roof eave in the bbox.
- After drawing the bbox, check *all* building properties.
- If you start labeling buildings in an image, be sure to complete labeling the other buildings in the image.

## Repetitive or difficult labels

If there are multiple images in a row that are the same or very similar, it's okay to skip images. This may happen if the car was moving slowly when taking pictures or driving past a very similar scene (e.g., a field, forest, or very long building).

If a building property is hard to label or you are not sure how to label it, open a ticket in [`housing-passports-labeling`](https://github.com/developmentseed/housing-passports-labeling/issues/new) and follow the pre-filled issue template. Be sure to tag a building expert in your ticket.

## Special cases

### 1. Far away buildings

If the buildings are too far away, skip them because it will be hard to figure out all the properties. The cutoff distance should be about 10-15 meters, but use your judgement.

Here is an example where the buildings are too far away across a double highway:

<div class="gallery">
    <figure >
        <img src="/housing-passports-labeling/assets/graphics/content_blogs/far_away_1.jpg">
        <figcaption> Example 1.</figcaption>
    </figure>
    <figure >
        <img src="/housing-passports-labeling/assets/graphics/content_blogs/far_away_2.jpg">
        <figcaption> Example 2.</figcaption>
    </figure>
</div>

### 2. Building corners

When the car drove around corners, the images will stop showing one face of a building and start showing another. In these cases, we should label only the images where the image contains a single face or façade, as you can see in the gif below:

![corner](/housing-passports-labeling/assets/graphics/content_blogs/building_corners.gif)

### 3. Images in which the building base is not seen

When in the images the building base is not seen, only skip labeling the buildings. Example: There are barrier, wall or other objects in front of the building that covers the building base and you can't know where start to draw the bbox.

![image](/housing-passports-labeling/assets/graphics/content_blogs/building_base_is_not_seen.jpg)

### 4. Images object block line of sight to a building

**Note:** `The occluded property within the CVAT labeling program was used only on the first projects for these cities: Bogota, Cartagena, Lima, Neiva, St. Maarten and Mexico cities, but in Padang we didn't use this property.` 

When a car, tree, or other object is in front of a building, we should still label it if you can still see where a building starts or ends. Do your best to draw a good bbox, and then mark the building or building part with the “occluded” property within the CVAT labeling program. But if the car or other objects covers almost the entire building, it is better to skip this image.

![image](/housing-passports-labeling/assets/graphics/content_blogs/images_object_block_line.jpg)

#### Some examples about consider occluded or not

**Consider like occluded**

When a fence or other objects cover 30% or all the building or building part. e.g 👇

<div class="gallery">
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/occluded_01.jpg"></a>
        <figcaption> Example 1, door occluded by pole</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/occluded_02.jpg"></a>
        <figcaption> Example 2, window occluded by tree</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/occluded_03.jpg"></a>
        <figcaption> Example 3, building occluded by cars</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/occluded_04.jpg"></a>
        <figcaption> Example 4, building occluded by tree</figcaption>  
    </figure>
</div>

**Consider like not occluded**


When the fence or other objects does not cover all the building or building part and it allows us to see the building. e.g 👇

<div class="gallery">
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/images/building_security/secure_cartagena_neiva_01.jpg"></a>
        <figcaption> Example 1, Protection barrier.</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/images/building_security/secure_cartagena_neiva_02.jpg"></a>
        <figcaption> Example 2, Protection barrier.</figcaption>
    </figure>
</div>

**Skip labeling:**

When the car or other objects covers almost the entire building or building part and it is difficult to recognize where the building starts or ends. e.g 👇

<div class="gallery">
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/skip_01.jpg"></a>
        <figcaption> Example 1</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/skip_02.jpg"></a>
        <figcaption> Example 2</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/skip_03.jpg"></a>
        <figcaption> Example 3</figcaption>
    </figure>
    <figure >
        <a class="modal-btn"><img src="/housing-passports-labeling/assets/graphics/content_blogs/skip_04.jpg"></a>
        <figcaption> Example 4</figcaption>  
    </figure>
</div>

### 5. Building openings

Only label building openings (windows, doors, garages) when those openings are part of a building. Openings that are part of a stand-alone wall should be skipped.