import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HomePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', createdAt?: any | null, sections?: Array<{ __typename?: 'ComponentCommonCarousel', id: string, Item?: Array<{ __typename?: 'ComponentCommonTwoColumnBlock', id: string, TitleText?: string | null, ButtonUrl?: string | null, ButtonText?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | { __typename?: 'ComponentCommonHeader', id: string, Text?: string | null, ButtonText?: string | null, ButtonLink?: string | null } | { __typename?: 'ComponentCommonTwoColumnBlock', id: string, TitleText?: string | null, Description?: string | null, ButtonText?: string | null, ButtonUrl?: string | null, ImagePosition?: Types.Enum_Componentcommontwocolumnblock_Imageposition | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const HomePageDocument = gql`
    query HomePage {
  homePage {
    data {
      id
      attributes {
        createdAt
        sections {
          ... on ComponentCommonHeader {
            id
            Text
            ButtonText
            ButtonLink
          }
          ... on ComponentCommonCarousel {
            id
            Item {
              id
              TitleText
              ButtonUrl
              ButtonText
              Image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentCommonTwoColumnBlock {
            id
            TitleText
            Description
            ButtonText
            ButtonUrl
            ImagePosition
            Image {
              data {
                id
                attributes {
                  url
                  previewUrl
                }
              }
            }
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