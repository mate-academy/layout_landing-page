#!/usr/bin/env python3
"""Generate placeholder images for the landing page."""

from PIL import Image, ImageDraw, ImageFont
import os

# Define image sizes based on the design
images = {
    'logo.png': (150, 50, 'MET'),
    'logo-favicon.png': (32, 32, 'M'),
    'phone-icon.png': (24, 24, '📞'),
    'email-icon.png': (24, 24, '✉'),
    'location-icon.png': (24, 24, '📍'),
    'hero.jpg': (1920, 1080, 'HERO'),
    'about.jpg': (600, 400, 'ABOUT'),
    'hours.jpg': (400, 200, 'HOURS'),
    'tickets.jpg': (400, 200, 'TICKETS'),
    'location.jpg': (400, 200, 'LOCATION'),
    'gallery-1.jpg': (400, 300, 'GALLERY 1'),
    'gallery-2.jpg': (400, 300, 'GALLERY 2'),
    'gallery-3.jpg': (400, 300, 'GALLERY 3'),
    'gallery-4.jpg': (400, 300, 'GALLERY 4'),
    'gallery-5.jpg': (400, 300, 'GALLERY 5'),
    'gallery-6.jpg': (400, 300, 'GALLERY 6'),
}

output_dir = 'src/images'
os.makedirs(output_dir, exist_ok=True)

# Colors
colors = {
    'red': (196, 18, 48),
    'black': (0, 0, 0),
    'gray': (229, 229, 229),
    'white': (255, 255, 255),
}

for filename, (width, height, text) in images.items():
    # Determine background color based on image type
    if 'logo' in filename or 'icon' in filename:
        bg_color = colors['red']
        text_color = colors['white']
    elif 'hero' in filename:
        bg_color = colors['black']
        text_color = colors['white']
    elif 'gallery' in filename:
        bg_color = colors['gray']
        text_color = colors['black']
    else:
        bg_color = colors['gray']
        text_color = colors['black']
    
    # Create image
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw text
    try:
        font = ImageFont.truetype("arial.ttf", min(width, height) // 4)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Center text
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=text_color, font=font)
    
    # Save image
    filepath = os.path.join(output_dir, filename)
    img.save(filepath)
    print(f'Created: {filepath}')

print('\nAll placeholder images created!')
