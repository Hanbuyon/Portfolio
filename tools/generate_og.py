"""Create a compact social sharing image from Ahmed's approved portrait cutout."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
portrait = Image.open(root / "public/images/ahmed-cutout.webp").convert("RGBA")
canvas = Image.new("RGB", (1200, 630), "#0b0f14")
draw = ImageDraw.Draw(canvas)

for y in range(630):
    amount = y / 630
    draw.line((630, y, 1200, y), fill=(14 + int(9 * amount), 33 + int(17 * amount), 39 + int(16 * amount)))

for x in range(670, 1201, 45):
    draw.line((x, 0, x, 630), fill="#214348", width=1)
for y in range(0, 631, 45):
    draw.line((670, y, 1200, y), fill="#214348", width=1)

draw.rounded_rectangle((49, 50, 106, 107), radius=11, outline="#50d6c8", width=2)
font_logo = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 25)
draw.text((58, 63), "AN", font=font_logo, fill="#eaf6f3")
draw.rectangle((50, 154, 105, 158), fill="#50d6c8")

title_font = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 78)
subtitle_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 31)
tiny_font = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 17)
draw.text((50, 203), "AHMED", font=title_font, fill="#f3f7f6")
draw.text((50, 292), "NAZEEH", font=title_font, fill="#f3f7f6")
draw.text((53, 410), "IT GRADUATE  /  APPLICATION DEVELOPER", font=subtitle_font, fill="#50d6c8")
draw.text((53, 546), "PORTFOLIO  /  2026", font=tiny_font, fill="#a9b6b8")

portrait.thumbnail((525, 590))
canvas.paste(portrait, (710, 65), portrait)
draw.line((0, 627, 1200, 627), fill="#50d6c8", width=3)
canvas.save(root / "public/og-cover.jpg", quality=86, optimize=True)
