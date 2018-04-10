# gm-x-platform
A simple shim to simplify handling different binary builds of imagemagick
that back the [gm](https://www.npmjs.com/package/gm) package.
Specifically, a imagemagick version 7 build for AWS Lambda.

# Installation
```bash
npm install --save forforf/gm-x-platform
```

Or manually add to your `package.json`
```
"dependencies": {
    "gm-x-platform": "forforf/gm-x-platform"
  }

```

# Usage
Just require `gm-x-platform` instead of `gm`
```javascript
const gm = require('gm-x-platform');
```

And then use `gm` as you normally would.

# Extending to Other Platforms

The current version of this package only supports shimming between MacOS and AWS Lambda.
However, it's a pretty simple package, and can easily be extended.
You'll just need to create a folder with the statically compiled
files, and then add the condition for that platform.

