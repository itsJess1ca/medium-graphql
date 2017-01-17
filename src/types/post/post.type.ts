import { GraphQLObjectType } from 'graphql';
import { GraphQLString } from 'graphql';
import { GraphQLInt } from 'graphql';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'A Medium Post',

  fields: () => ({
    id: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString,
      resolve: (root, args) => `https://medium.com/${root.accountName}/${root.uniqueSlug}`
    },
    title: {
      type: GraphQLString
    },
    subtitle: {
      type: GraphQLString,
      resolve: (root) => root.content.subtitle
    },
    excerpt: {
      type: GraphQLString,
      resolve: (root) => root.virtuals.emailSnippet
    },
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  })
});
