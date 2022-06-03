import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HomePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', sections?: Array<{ __typename?: 'ComponentCommonCarousel', id: string, Item?: Array<{ __typename?: 'ComponentCommonTwoColumnBlock', id: string, ButtonText?: string | null, ButtonUrl?: string | null, Description?: string | null, ImagePosition?: Types.Enum_Componentcommontwocolumnblock_Imageposition | null, TitleText?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, mime: string, name: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, size: number, updatedAt?: any | null, url: string, width?: number | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentCommonHeader', id: string, ButtonLink?: string | null, ButtonText?: string | null, Text?: string | null } | { __typename?: 'ComponentCommonTwoColumnBlock', id: string, ButtonText?: string | null, ButtonUrl?: string | null, Description?: string | null, ImagePosition?: Types.Enum_Componentcommontwocolumnblock_Imageposition | null, TitleText?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, mime: string, name: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, size: number, updatedAt?: any | null, url: string, width?: number | null } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const HomePageDocument = gql`
    query HomePage {
  homePage {
    data {
      attributes {
        sections {
          ... on ComponentCommonHeader {
            id
            ButtonLink
            ButtonText
            Text
          }
          ... on ComponentCommonCarousel {
            id
            Item {
              id
              ButtonText
              ButtonUrl
              Description
              Image {
                data {
                  attributes {
                    alternativeText
                    caption
                    createdAt
                    ext
                    formats
                    hash
                    height
                    mime
                    name
                    previewUrl
                    provider
                    provider_metadata
                    size
                    updatedAt
                    url
                    width
                  }
                }
              }
              ImagePosition
              TitleText
            }
          }
          ... on ComponentCommonTwoColumnBlock {
            id
            ButtonText
            ButtonUrl
            Description
            Image {
              data {
                attributes {
                  alternativeText
                  caption
                  createdAt
                  ext
                  formats
                  hash
                  height
                  mime
                  name
                  previewUrl
                  provider
                  provider_metadata
                  size
                  updatedAt
                  url
                  width
                }
              }
            }
            ImagePosition
            TitleText
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;