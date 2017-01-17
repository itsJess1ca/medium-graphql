///<reference path="medium.connector.d.ts"/>
import * as fetch from 'node-fetch';
import { GraphQLEnumType } from 'graphql';

class MediumConnector {
  feedUrl: string = "https://medium.com";
  token: string;
  fetchOptions: FetchOptions = {
    headers: {
      "Authorization": `Bearer ${this.token}`
    }
  };

  constructor() {
    console.log("[Medium] Now Running");
  }

  getPosts({user, limit, to, source, collectionId}: { user: string, limit?: string, to?: string, source?: string, collectionId?: string }): Promise<Post[]> {

    const params: any = Object.assign({}, arguments['0']);
    delete params.user;
    const requestUrl = `${this.feedUrl}/${user}/latest?${serialize(params)}`;

    console.log("[Medium] Getting posts for " + user + ` from ${requestUrl}`);

    return new Promise((resolve, reject) => {
      fetch(requestUrl, {
        headers: {
          "Accept": "application/json"
        }
      })
        .then(stripJSONPrefix)
        .then(JSON.parse)
        .then(data => {
          const PostObject = data.payload.references.Post;
          const posts = [];

          // Split the Post object into an array of posts
          // todo: Is there a better way to do this?
          for (const postId in PostObject) {
            if (PostObject.hasOwnProperty(postId)) {
              const post = PostObject[postId];
              if (!collectionId || post.homeCollectionId === collectionId) {
                // appending accountName to post object to ease generation of post url
                posts.push(Object.assign({}, post, { accountName: user }));
              }
            }
          }
          resolve(posts);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    })
  }

}

function stripJSONPrefix(response: any): Promise<any> {
  return new Promise((resolve, reject) => {
    response.text()
      .then(prefixedString => prefixedString.replace("])}while(1);</x>", ""))
      .then(resolve);
  })
}
function serialize(obj: any): string {
  const str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}


interface FetchOptions {
  headers: any;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  redirect?: 'follow' | 'manual' | 'error';
  body?: any;
}
export default MediumConnector;
