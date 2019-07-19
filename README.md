[![Build Status](https://travis-ci.org/j3ddesign/medium-graphql.svg?branch=master)](https://travis-ci.org/j3ddesign/medium-graphql)

[DEPRECATED] Due to no longer having time to work on this repo. Feel free to fork
----------------

An Unofficial wrapper for Medium.com

```
Run Dev
- yarn (or npm install if you don't use yarn)
- npm install -g nodemon
- npm start
- Go to http://localhost:4000/graphiql (For the GraphIQL UI)
- http://localhost:4000/graphql (for standard requests)
```

```
Run Production build
- npm run build
- node dist/server.js
```


Example
------------
```
query {
  posts(user: '@medium') {
    title
    url
  }
}
```
returns:
```
{
  "data": {
    "posts": [
      "title": "Earn Revenue on Medium",
      "url": "https://medium.com/@medium/revenue-on-medium-5e7e6218f70c"
    ]
  }
}
```
