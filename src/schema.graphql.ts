/// <reference path="./typings.d.ts" />
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { PostsQuery } from './types/post/post.query';



const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query the server',
  fields: () => ({
    posts: PostsQuery
  })
});


export default new GraphQLSchema({
  query: QueryType
})
