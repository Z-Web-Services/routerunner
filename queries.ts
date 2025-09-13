/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    createdAt
    fullAddress
    id
    notes
    owner
    pictures {
      nextToken
      __typename
    }
    route {
      createdAt
      id
      name
      owner
      shiftId
      updatedAt
      __typename
    }
    routeId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const getPicture = /* GraphQL */ `query GetPicture($id: ID!) {
  getPicture(id: $id) {
    address {
      createdAt
      fullAddress
      id
      notes
      owner
      routeId
      updatedAt
      __typename
    }
    addressId
    createdAt
    description
    id
    owner
    updatedAt
    url
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPictureQueryVariables,
  APITypes.GetPictureQuery
>;
export const getRoute = /* GraphQL */ `query GetRoute($id: ID!) {
  getRoute(id: $id) {
    addresses {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    shift {
      createdAt
      id
      name
      owner
      start
      stop
      updatedAt
      __typename
    }
    shiftId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRouteQueryVariables, APITypes.GetRouteQuery>;
export const getShift = /* GraphQL */ `query GetShift($id: ID!) {
  getShift(id: $id) {
    createdAt
    id
    name
    owner
    routes {
      nextToken
      __typename
    }
    start
    stop
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetShiftQueryVariables, APITypes.GetShiftQuery>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      fullAddress
      id
      notes
      owner
      routeId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const listPictures = /* GraphQL */ `query ListPictures(
  $filter: ModelPictureFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      addressId
      createdAt
      description
      id
      owner
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPicturesQueryVariables,
  APITypes.ListPicturesQuery
>;
export const listRoutes = /* GraphQL */ `query ListRoutes(
  $filter: ModelRouteFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      owner
      shiftId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoutesQueryVariables,
  APITypes.ListRoutesQuery
>;
export const listShifts = /* GraphQL */ `query ListShifts(
  $filter: ModelShiftFilterInput
  $limit: Int
  $nextToken: String
) {
  listShifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      owner
      start
      stop
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShiftsQueryVariables,
  APITypes.ListShiftsQuery
>;
