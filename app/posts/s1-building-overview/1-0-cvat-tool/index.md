---
title: Computer Vision Annotation Tool (CVAT)
date: 2019-05-17
layout: post.html
---

We're using the CVAT labeling platform to perform the annotations. The [CVAT](https://github.com/opencv/cvat) tools have extensively documented the annotation process. See their tool's [readme guide](https://github.com/opencv/cvat/blob/develop/README.md) or their [youtube video](https://www.youtube.com/watch?v=L9_IvUIHGwM&feature=youtu.be).

![image](/housing-passports-labeling/assets/graphics/content_blogs/cvat_dashboard_1.jpg)

## CVAT Tips

- Each task should only have one annotator working on it at a time. If 2 or more annotators are working on the same task, there might be problems with labels getting overwritten.

- In the CVAT tool you can use shortcuts, for instance:
    - "N" --> create a shape
    - "F" --> move to the next image
    - "D" --> move to the previous image or
    - "CTRL + S" --> save the work 

Also, you can find the full shortcuts in this [web page.](https://opencv.github.io/cvat/docs/manual/advanced/shortcuts/)