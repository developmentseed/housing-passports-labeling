---
title: Summary of labeled classes
date: 2019-05-17
layout: post.html
---

This page provides a summary of the labeled classes and the cities involved in the Housing Passport project. 

The tables below provide a breakdown of building property classes, building parts classes, and classes for rooftops labeling, along with the cities where have been done the labeling.

## Building properties

<table border cellpadding="5px">
	<tr>
		<th style="width: 25%;">Building properties</th> 
        <th style="width: 50%;">Classification</th> 
        <th style="width: 25%;">City</th>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Building use</td> 
        <td style="text-align: justify; vertical-align: middle;">- Mixed </br> - Residential </br> - Non_residential</td>
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </br> -  Padang </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Building completeness</td> 
        <td style="text-align: justify; vertical-align: middle;">- Complete </br> - Incomplete </br></td>
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </br> -  Padang </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Building material</td> 
        <td style="text-align: justify; vertical-align: middle;">- brick_or_cement-concrete_block </br> - plaster </br> - wood_polished </br> - wood_crude_plank </br> - adobe </br> - corrugated_metal </br> - stone_with_mud_ashlar_with_lime_or_cement</br> - container_trailer </br> - plant_material </br> - mix_other_unclear </br> </td>
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </br> -  Padang </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Building security</td> 
        <td style="text-align: justify; vertical-align: middle;">- Secured </br> - Unsecured </br></td>
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Building condition </td> 
        <td style="text-align: justify; vertical-align: middle;">- Poor </br> - Fair </br> - Good</td>
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Padang </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Building vintage</td> 
        <td style="text-align: justify; vertical-align: middle;">- not_defined </br> - pre_1940 </br> - 1941_1974 </br> - 1975_1999 </br> - 2000_now </td>
        <td style="text-align: justify; vertical-align: middle;">- Lima </td>
	</tr>
</table>

## Building parts

<table border cellpadding="5px">
	<tr>
		<th style="width: 50%;">Building parts</th> 
        <th style="width: 50%;">City</th>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Garage labels</td> 
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Window labels</td> 
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </td>
	</tr>
    	<tr>
		<td style="text-align: justify; vertical-align: middle;">Door labels</td> 
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </td>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Disaster_mitigation labels</td> 
        <td style="text-align: justify; vertical-align: middle;">- Lima </br> - Cartagena </br> - Neiva </br> - St. Maarten </br> - Juchitan </br> - Salina Cruz </br> - Paraguay </td>
	</tr>

</table>

### Labeling adjustments by city


- For LIMA, it is the unique city where there was annotated the vintage building property
- For PADANG, we annotated only building properties: 
    - Building completeness, 
    - Building material, 
    - Building use, 
    - Building condition, 
    - And we added additional property called Building type.
    In addition, the Building use property had additional items or the new classification was:
    - Residential: the buildings in construction should considerate by default as residential.
    - Mixed: shop on the bottom, residential on top.
    - Commercial: hotels, markets, marketplace, shops, and buildings (that it has ads that indicate it is commercial) attached to the gas station.
    - Critical infrastructure: education, government and public services, health care, religious, utilities and also consider the banks as this category.
- For ARMENIA, we ran inference using the existing models for both building parts and building properties that were trained with imagery from Peru and Colombia.

## Rooftops labeling

The rooftops labeling was done in Independencia District in Lima as a continuation of the Housing Passports work. 
The labeling was done using the Java OpenStreetMap tool and the properties considered on labeling were:

<table border cellpadding="5px">
	<tr>
		<th style="width: 30%;">Rooftop classes</th> 
        <th style="width: 40%;">Classification</th> 
        <th style="width: 30%;">City</th>
	</tr>
	<tr>
		<td style="text-align: justify; vertical-align: middle;">Rooftop material</td> 
        <td style="text-align: justify; vertical-align: middle;">- Concrete </br> - Metal </br> - Mixed </br> - Other </td>
        <td style="text-align: justify; vertical-align: middle;">Lima</td> 
	</tr>
		<tr>
		<td style="text-align: justify; vertical-align: middle;">Rooftop condition</td> 
        <td style="text-align: justify; vertical-align: middle;">- Good </br> - Fair </br> - Poor </br> - Under construction </td>
        <td style="text-align: justify; vertical-align: middle;">Lima</td> 
	</tr>
</table>
