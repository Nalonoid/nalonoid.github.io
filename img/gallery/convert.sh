#!/bin/bash

for file in *".jpg"; do
	convert $file -resize 3840x2160 $file
done
