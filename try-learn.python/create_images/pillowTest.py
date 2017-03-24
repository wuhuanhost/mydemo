from PIL import Image, ImageDraw

im = Image.new("RGB", (640, 240))
dr = ImageDraw.Draw(im)

def circle(draw, center, radius, fill):
    dr.ellipse((center[0] - radius + 1, center[1] - radius + 1, center[0] + radius - 1, center[1] + radius - 1), fill=fill, outline=None)

W = 40
COLOR = (255, 255, 255)

coords = (40, 40, 600, 200)

dr.line(coords, width=W, fill=COLOR)
circle(dr, (coords[0], coords[1]), W / 2, COLOR)
circle(dr, (coords[2], coords[3]), W / 2, COLOR)

im.show()