
# Pixel GIF

[![Build & Deploy](https://github.com/shoonia/pixel-gif/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/shoonia/pixel-gif/actions/workflows/build-deploy.yml)
[![Stand with Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua/)

Generate a 1x1 GIF image (35 bytes) instantly — download the GIF file, copy a Base64 data URI, or get raw bytes for embedding in HTML, CSS, or tiny payloads.

## Usage

1. Visit the live demo: https://shoonia.github.io/pixel-gif/
2. Pick a color or enter an RGB/hex value.
3. Choose an output mode: GIF file, Base64 (data URI), or raw bytes.
4. Copy or download the result and use it in your project.

### Example: Using the GIF as a data URI in HTML/CSS

The tool can produce a compact Base64 data URI you can use directly in HTML or CSS. Example of a 1x1 transparent GIF:

```html
<img src="data:image/gif;base64,R0lGODdhAQABAIABAAAAACrNyCwAAAAAAQABAAACAkwBADs=" alt="1x1 GIF">
```

In CSS you can use it as a background-image:

```css
.pixel-bg {
  background-image: url('data:image/gif;base64,R0lGODdhAQABAIABAAAAACrNyCwAAAAAAQABAAACAkwBADs=');
}
```

## Related projects

- 1x1 Pixel PNG Generator — https://shoonia.github.io/1x1/ (PNG output)

## License

[MIT](./LICENSE)

---

## Stand with Ukraine 🇺🇦
[Support Ukraine](https://stand-with-ukraine.pp.ua/)
