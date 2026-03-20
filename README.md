# A-Frame: Image Targets

This example uses image targets to display information about jellyfish on a flyer. It uses the xrextras-named-image-target component to connect an <a-entity> to an image target by name while the xrextras-play-video component enables video playback. 

![artgallery-screenshot](./src/assets/screenshot-flyer.jpg)

![flyer](./src/assets/flyer.jpg)

### Preparing Target Images (macOS)

If you're on macOS, you can batch resize and preprocess the target images with **ImageMagick**.

Install ImageMagick:

```bash
brew install imagemagick
```

Then run this inside src/targets:

```bash
# Backup originals
for f in *.jpg; do cp "$f" "${f%.jpg}-original.jpg"; done

# Process images (modifies only the non -original files)
mogrify -resize 480x640^ -gravity center -extent 480x640 -colorspace Gray *.jpg
```

This keeps a -original.jpg copy of each image, while applying the resize, crop, and grayscale transformation to the working files.