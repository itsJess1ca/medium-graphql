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
      type: GraphQLString,
      resolve: (root) => handleDate(root.createdAt)
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (root) => handleDate(root.updatedAt)
    },
    firstPublishedAt: {
      type: GraphQLString,
      resolve: (root) => handleDate(root.firstPublishedAt)
    },
    latestPublishedAt: {
      type: GraphQLString,
      resolve: (root) => handleDate(root.latestPublishedAt)
    }
  })
});

const handleDate = (date) => date ? new Date(date).toISOString() : null;