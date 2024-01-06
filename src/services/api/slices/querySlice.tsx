import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const postStatuses = ['draft', 'published', 'pending_review'] as const;

export interface DocumentationType {
  name: string;
  description: string;
}

export interface Documentation {
  name: string;
  description: string;
}

interface DocumentationResponse {
  __schema: {
    types: DocumentationType[];
  };
}
export interface GetQueryResponse {
  data: string;
}

const baseQuery: BaseQueryFn = (...baseQueryArgs) => {
  const [args] = baseQueryArgs;
  const url = args.url;

  return graphqlRequestBaseQuery({
    url,
    prepareHeaders: async (headers) => {
      return headers;
    },
  })(...baseQueryArgs);
};

export const api = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getQueryResponse: builder.query<
      GetQueryResponse,
      { variables: { body: string; url: string } }
    >({
      query: (args) => ({
        url: args.variables.url || '',
        document: gql`
          ${args.variables.body}
        `,
        variables: {},
      }),
    }),
    getDocumentation: builder.query<DocumentationType[], string>({
      query: () => ({
        document: gql`
          query {
            __schema {
              types {
                name
                description
              }
            }
          }
        `,
      }),
      transformResponse: (response: DocumentationResponse) =>
        response.__schema.types,
    }),
  }),
});

export const { useGetQueryResponseQuery, useGetDocumentationQuery } = api;
