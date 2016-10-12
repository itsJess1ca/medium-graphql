export const PostResolver = (_, args, context) => {
  return new Promise((resolve, reject) => {
    if (!args.limit) {
      context.medium
        .getPosts(args.user).then(posts => {
        resolve(posts);
      })
    } else {
      context.medium
        .getPosts(args.user, args.limit).then(posts => {
        resolve(posts);
      })
    }
  })
};
