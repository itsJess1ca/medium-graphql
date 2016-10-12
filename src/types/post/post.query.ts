import { PostType } from './post.type';
import { GraphQLList } from 'graphql';
import { GraphQLString } from 'graphql';
import { PostResolver } from './post.resolver';
import { GraphQLNonNull } from 'graphql';

export const PostsQuery = {
  type: new GraphQLList(PostType),
  args: {
    user: {
      type: new GraphQLNonNull(GraphQLString)
    },
    limit: {
      type: GraphQLString
    },
    to: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    collectionId: {
      type: GraphQLString
    },
  },
  resolve: PostResolver
};
