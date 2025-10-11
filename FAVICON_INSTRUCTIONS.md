# Favicon Creation Instructions

## What is a Favicon?
A favicon is the small icon that appears in the browser tab next to your website title. For best compatibility, you need a 32x32 pixel `.ico` file.

## How to Create Your Favicon

### Option 1: Use Your Logo Image
1. Take your `logo.jpg` file
2. Resize it to 32x32 pixels using an image editor
3. Convert it to `.ico` format

### Option 2: Use an Online Favicon Generator
1. Visit [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload your logo.jpg
3. Download the generated favicon.ico
4. Place it in your website root directory

### Option 3: Use Image Editing Software
1. Open `logo.jpg` in Photoshop, GIMP, or similar
2. Resize to 32x32 pixels
3. Export/Save as `.ico` format
4. Save as `favicon.ico`

## Installation

Once you have your `favicon.ico` file:

1. Place it in the root directory of your website (same folder as index.html)

2. The HTML already includes the link tag:
   ```html
   <link rel="icon" type="image/jpeg" href="logo.jpg">
   ```

3. For better cross-platform support, you can add:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
   <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
   ```

## Current Status

✅ The website currently uses `logo.jpg` as the favicon (works in most browsers)
❌ A dedicated `favicon.ico` file should be created for better compatibility
📝 Follow the instructions above to create and add the proper favicon files

## Recommended Sizes for All Devices

- **favicon.ico** - 32x32px (for browsers)
- **favicon-32x32.png** - 32x32px 
- **favicon-16x16.png** - 16x16px
- **apple-touch-icon.png** - 180x180px (for iOS)
- **android-chrome-192x192.png** - 192x192px
- **android-chrome-512x512.png** - 512x512px

For now, using logo.jpg works fine. Create proper favicons before final deployment for production.
