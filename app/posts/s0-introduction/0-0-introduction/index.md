---
title: Introduction
date: 2019-05-17
layout: post.html
permalink: /
---

This guide describes how to label street view images with building properties and parts. It focuses on how to find and label feature that are relevant when assessing a building's resiliency.

The features we want to label are all listed in the left navigation panel. There is a description and example images for each. They labeling is roughly broken up into building properties (material, completeness, vintage, etc.) and building parts (windows, doors, garages, etc.).

## Computer Vision Annotation Tool (CVAT)

We're using the CVAT labeling platform to perform the annotations. The [CVAT](https://github.com/opencv/cvat) tools have extensively documented the annotation process. See their tool's [readme guide](https://github.com/opencv/cvat/blob/develop/README.md) or their [youtube video](https://www.youtube.com/watch?v=L9_IvUIHGwM&feature=youtu.be).

## CVAT Tips

- Each task should only have one annotator working on it at a time. If 2 or more annotators are working on the same task, there might be problems with labels getting overwritten.

- To expose all of the CVAT buttons/tools in the bottom pane, you may want to zoom out one level in your browser. Here's an example of how to do this in Google Chrome.

![cvat_chrome_](/housing-passports-labeling/assets/graphics/content_blogs/cvat_tips1.gif)


- In the CVAT tool you can use shortcuts, for instance:
    - "N" --> create a shape
    - "F" --> move to the next image
    - "D" --> move to the previous image or
    - "CTRL + S" --> save the work 

Also, you can find the full shortcuts in this [web page.](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#shortcuts)