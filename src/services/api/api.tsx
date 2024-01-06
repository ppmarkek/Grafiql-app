import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  retry,
} from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
// import { GraphQLClient } from 'graphql-request'

// export const client = new GraphQLClient('/graphql')

// export const api = createApi({
//   baseQuery: graphqlRequestBaseQuery({ url: process.env.REACT_APP_DEFAULT_GQL_API || ''}),
//   endpoints: () => ({})
// })
// import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

// const BASE_URL = 'https://api.magicthegathering.io/v1/';

const baseQuery: BaseQueryFn = (...baseQueryArgs) => {
  const [args] = baseQueryArgs;
  const url = args.url;
  return graphqlRequestBaseQuery({
    url,
    prepareHeaders: args.body,
  });
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

//
const baseQuery: BaseQueryFn = (...baseQueryArgs) => {
  const [args] = baseQueryArgs;

  // Set base URL based on the fetch args URL.
  const baseUrl = args.url?.endsWith('/getPosts') ? '/v2' : '/v1';

  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers) => {
      // Set headers based on the fetch args URL.
      if (args.url?.endsWith('/getPosts')) {
        // ...
      }
      return headers;
    },
  })(...baseQueryArgs);
};

export const myApiDynamic = createApi({
  reducerPath: 'apiDynamic',
  baseQuery,
  endpoints: (builder) => ({
    // Uses /v1
    checkout: builder.query({
      query: () => ({
        url: '/getComments',
        method: 'GET',
      }),
    }),
    // Uses /v2
    getPosts: builder.query({
      query: () => ({
        url: '/getPosts',
        method: 'GET',
      }),
    }),
  }),
});
//
export const cardMTGsApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getMTGCards: builder.query<
      Record<'cards', MTGModel[] | never[]>,
      { name: string; page: string; pageSize: string }
    >({
      query(arg) {
        const { name = '', page = '1', pageSize = '3' } = arg;
        return {
          url: 'cards',
          params: { name, page, pageSize },
        };
      },
    }),
    getMTGCard: builder.query<Record<'card', MTGModel | never>, { id: string }>(
      {
        query(arg) {
          const { id } = arg;
          return {
            url: `cards/${id}`,
          };
        },
      }
    ),
  }),
});

export const { useGetMTGCardsQuery, useGetMTGCardQuery } = cardMTGsApi;
export const { getMTGCards, getMTGCard } = cardMTGsApi.endpoints;
