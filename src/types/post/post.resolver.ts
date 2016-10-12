export const PostResolver = (_, args, context) => {
  return new Promise((resolve, reject) => {
      context.medium
        .getPosts(args).then(posts => {
        resolve(posts);
      })
  })
};
