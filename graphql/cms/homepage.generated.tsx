import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HomePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', sections?: Array<{ __typename?: 'ComponentCommonCarousel', id: string, HeaderText?: string | null, Item?: Array<{ __typename?: 'ComponentCommonTwoColumnBlock', id: string, TitleText?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, size: number, hash: string, mime: string, name: string, provider: string } | null } | null } | null } | null> | null } | { __typename?: 'ComponentCommonHeader', id: string, Text?: string | null, Text_2?: string | null } | { __typename?: 'ComponentCommonTwoColumnBlock', id: string, TitleText?: string | null, Description?: string | null, ButtonText?: string | null, ImagePosition?: Types.Enum_Componentcommontwocolumnblock_Imageposition | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, size: number } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const HomePageDocument = gql`
    query HomePage {
  homePage {
    data {
      attributes {
        sections {
          ... on ComponentCommonHeader {
            id
            Text
            Text_2
          }
          ... on ComponentCommonCarousel {
            id
            HeaderText
            Item {
              id
              TitleText
              Image {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                    height
                    width
                    size
                    hash
                    mime
                    name
                    provider
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
            ImagePosition
            Image {
              data {
                attributes {
                  url
                  alternativeText
                  height
                  width
                  size
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