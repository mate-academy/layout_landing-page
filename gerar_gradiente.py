import sass
import os

# Lista de cores
colors = ["#74B087", "#DE7300", "#74B087"]

def shade_color(hex_color, percent=-30):
    f = int(hex_color[1:], 16)
    t = 0 if percent < 0 else 255
    p = abs(percent) / 100
    R = f >> 16
    G = (f >> 8) & 0x00FF
    B = f & 0x0000FF
    return "#%02x%02x%02x" % (
        round((t - R) * p + R),
        round((t - G) * p + G),
        round((t - B) * p + B),
    )

base_color = colors[0]
dark_color = shade_color(base_color)

scss_content = f"""
.rect {{
  width: 200px;
  height: 200px;
  border-radius: 12px;
  transition: background 1s ease;
  background: linear-gradient(-119deg, {base_color} 0%, {dark_color} 100%);
}}
"""

scss_path = "src/styles/rect.scss"
css_path = "dist/styles/rect.css"

# Garante que a pasta de destino exista
os.makedirs(os.path.dirname(css_path), exist_ok=True)

# Salva o SCSS
with open(scss_path, "w", encoding="utf-8") as f:
    f.write(scss_content)

# Compila para CSS com libsass
compiled = sass.compile(filename=scss_path)

# Salva o CSS gerado
with open(css_path, "w", encoding="utf-8") as f:
    f.write(compiled)

print(f"✅ CSS gerado com sucesso em: {css_path}")

