---
date: 2017-11-01
description: "Subdivision of the Utah teapot using my Loop implementation"
description1: ""
img: teapots_plain.jpg
img1: ""
layout: default
modal-id: loop
project-date: "nov. 2017"
project-tags: "geometry, mesh subdivision, loop"
thumbnail: teapots_plain-thumbnail.jpg
title: Loop subdivision
type: master 2 laboratory class
subtitle: Geometry laboratory class
---

I implemented this algorithm using C++ and OpenMesh for the half-edge structure.

Loop subdivision is an algorithm that can be applied to triangle meshes only. Its counterpart for quad meshes is the Catmull-Clark subdivision. Both are primal methods, which means that we will split the faces of the mesh, unlike dual methods that split the vertices of the mesh.
Also, it is an approximation method, as opposed to interpolation methods (such as the Butterfly subdivision). It is called that way because we need to compute the position of all the vertices of the mesh. To compute them, there are subdivision rules with special cases at the boundaries of the mesh.

There are two main steps to perform Loop subdivision on a mesh:

First, we have to compute the positions of the newly added vertices. We will call them odd vertices. They are located on the edges of the mesh.
Then, we have to compute the new positions of the old vertices of the mesh. We will call them even vertices.

<html>
<figure>
  <a href="#loop_subdivision">
    <img src="/res/geometry/loop_subdivision.jpg"/>
  </a>
  <figcaption>In yellow, the old vertices of the mesh. In green and red the new vertices after respectively one and two steps of subdivision</figcaption>
</figure>
<a href="#_">
  <div class="lightbox" id="loop_subdivision">
    <img src="/res/geometry/loop_subdivision_full.jpg"/>
    <div class="caption-container">
      <div>In yellow, the old vertices of the mesh. In green and red the new vertices after respectively one and two steps of subdivision</div>
    </div>
  </div>
</a>
</html>

When all the new positions of the vertices have been computed we need to correctly link them to create the new mesh topology. So we split each edge in two, and therefore each face in four smaller faces.
