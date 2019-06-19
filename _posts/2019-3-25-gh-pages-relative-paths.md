---
layout: post
title: "Dealing with Relative Paths on gh-pages"
date: 2019-03-25
author: Jeffrey Chan
---

If I'm working on a static website and need a quick static hosting service,
gh-pages on GitHub is one of the first options I think about. I create a new repository named `my-website` and start throwing some HTML and
CSS files in there.

The problem occurs when trying to link my CSS stylesheets to my HTML pages.
For example, in my index.html file, I would like to do

```
<link ... href="/public/css/style.css" />
```

When developing locally (and serving with something like Python SimpleHTTPServer), this works just fine. I then push everything to my repository
on GitHub. When trying to view the website, the CSS isn't loading. This is because the project's hosted at `jeffreyxchan.github.io/my-website`, and
linking to `/public/css/style.css` in index.html would make a request to
`jeffreyxchan.github.io/public/css/style.css`, which will not grab the correct
stylesheet. But if we instead use `href="/my-website/public/css/style.css"`,
then it will request the correct stylesheet in production, but will not
grab the correct file when developing locally.

We want to achieve a situation where working locally means. the website will
work in production static hosting on GitHub.
What is the solution? In this note I discuss two solutions I found useful.

# Requesting "Both" Resources (HACK)

A super quick and hacky solution would be to request both resources.

```
<link ... href="/public/css/style.css" />
<link ... href="/my-website/public/css/style.css" />
```

and repeating the above for any relative resources you'll need. Basically have
the correct href URL for local development and for production.

## Pros

- It . . . works. The website will behave the same whether working locally or
  viewing in production.

## Cons

- Have to enforce this across the website and remember that it's necessary,
  which isn't that great for working in teams, or coming back to the website
  later.

- You'll have 1/2 requests that fail and 1/2 requests that succeed. You'll have
  2x the number of usual requests for these resources.

- Isn't portable. Changing the repository name on GitHub will break all the
  links since they're hard-coded with the project name.

# Using Jekyll (Better Solution)

gh-pages supports Jekyll, a static site generator. Normally creating a Jekyll
website means having a completely unique code layout and file structure than
the simple static website, but I think I've found the minimal number of changes
you need to do to your website to make it work with Jekyll without having to do
everything else.

Create a `_config.yml` file in the root directory of your website, and include
the following with the name of your GitHub repo.

```
baseurl: /my-website
```

In your HTML pages, you can change your `<link>` tags to look like:

```
<link ... href="{% raw %}{{ site.baseurl }}{% endraw %}/public/css/style.css" />
```

Finally, I believe Jekyll will only process a page and regenerate it if it has
the dashed lines on the top of the page. So you will have to change your HTML
pages to look like the following.

```
---
---

<!DOCTYPE HTML>
< rest of HTML here >
```

Now, if you push your website to GitHub and try to view it in production, it
should be requesting the correct URL by pre-pending the name of your GitHub
repo to the rest of the relative URL.

The catch is that when developing locally, you'll need to serve the website
with Jekyll instead of something like Python SimpleHTTPServer.

After downloading and setting up Jekyll, the commands to start the server
locally might look something like:

```
cd my-website // navigate to root of your website

jekyll serve --baseurl ''
```

When developing locally, you want to explicitly tell Jekyll to not use the
`_config.yml` file and instead replace `site.baseurl` with the empty string
so that all the relative paths are correct.

## Pros

- It works. Developing locally should be the same behavior as in production.
- Uses Jekyll, which is an officially supported technology on gh-pages.
- Uses Jekyll to generate the correct `<link>` tag, which will avoid the 2x
  number of requests and the failing requests in the previous method.

## Cons

- Adds Jekyll as a dependency to your website.
- Still not very portable. If the name of your GitHub repo changes, you'll
  have to also update `_config.yml`.
- The triple dashed lines on top of all your HTML pages is pretty annoying.
