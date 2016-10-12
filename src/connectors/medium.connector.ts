///<reference path="medium.connector.d.ts"/>
import * as fetch from 'node-fetch';
import { GraphQLEnumType } from 'graphql';

class MediumConnector {
  apiUrl: string = "https://api.thetvdb.com";
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

  getPosts(user: string, limit?: string): Promise<Post[]> {
    console.log("[Medium] Getting posts for " + user + ` from ${`${this.feedUrl}/${user}/latest${limit ? '?limit=' + limit : ''}`}`);
    return new Promise((resolve, reject) => {
      fetch(`${this.feedUrl}/${user}/latest${limit ? '?count=' + limit : ''}`, {
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
          for (let post in PostObject) {
            if (PostObject.hasOwnProperty(post)) {
              posts.push(Object.assign({}, PostObject[post], {accountName: user}));
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

function stripJSONPrefix(response): any {
  return new Promise((resolve, reject) => {
    response.text()
      .then(prefixedString => prefixedString.replace("])}while(1);</x>", ""))
      .then(resolve);
  })
}

interface FetchOptions {
  headers: any;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  redirect?: 'follow' | 'manual' | 'error';
  body?: any;
}
export default MediumConnector;
