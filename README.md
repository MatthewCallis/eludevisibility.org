# Welcome to eludevisibility.org

## Posting

Add a markdown with the format of `YYYY-MM-DD-slug` to the `_posts/` folder.

### Post Configuration

```
---
layout: post
title: Pikiinya! (Japan) (Sample)
date: 2016-04-21 19:00:00
slug: pikiinya-japan-sample
category: Super Famicom
author: matthew_callis
download:
 title: Pikiinya! (Japan) (Sample)
 filename: sfc/pikiinya-japan-sample.7z
---
```

`layout` is `post` unless you're adding a new page.

`title` is the title used on the page and main heading.

`date` is the date it was written.

`slug` is the slug, again.

`category` is the system the post is for.

`author` needs to match the key from `_data/authors.yml`, so add yourself to that as well.

`download` has `title` and `filename`.

### Image Comparison

Useful for direct image comparison.

```
{% include compare_local.html
    name_1='Image 1'
    image_1='image-1.png'
    name_2='Image 2'
    image_2='image-2.png'
%}
```

## Running Locally
```
bundle install
bundle exec jekyll serve --trace
```

## Building for Release
```
JEKYLL_ENV=production bundle exec jekyll build --trace --config _config_production.yml
```
