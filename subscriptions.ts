/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress(
  $filter: ModelSubscriptionAddressFilterInput
  $owner: String
) {
  onCreateAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onCreatePicture = /* GraphQL */ `subscription OnCreatePicture(
  $filter: ModelSubscriptionPictureFilterInput
  $owner: String
) {
  onCreatePicture(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePictureSubscriptionVariables,
  APITypes.OnCreatePictureSubscription
>;
export const onCreateRoute = /* GraphQL */ `subscription OnCreateRoute(
  $filter: ModelSubscriptionRouteFilterInput
  $owner: String
) {
  onCreateRoute(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRouteSubscriptionVariables,
  APITypes.OnCreateRouteSubscription
>;
export const onCreateShift = /* GraphQL */ `subscription OnCreateShift(
  $filter: ModelSubscriptionShiftFilterInput
  $owner: String
) {
  onCreateShift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShiftSubscriptionVariables,
  APITypes.OnCreateShiftSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress(
  $filter: ModelSubscriptionAddressFilterInput
  $owner: String
) {
  onDeleteAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onDeletePicture = /* GraphQL */ `subscription OnDeletePicture(
  $filter: ModelSubscriptionPictureFilterInput
  $owner: String
) {
  onDeletePicture(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePictureSubscriptionVariables,
  APITypes.OnDeletePictureSubscription
>;
export const onDeleteRoute = /* GraphQL */ `subscription OnDeleteRoute(
  $filter: ModelSubscriptionRouteFilterInput
  $owner: String
) {
  onDeleteRoute(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRouteSubscriptionVariables,
  APITypes.OnDeleteRouteSubscription
>;
export const onDeleteShift = /* GraphQL */ `subscription OnDeleteShift(
  $filter: ModelSubscriptionShiftFilterInput
  $owner: String
) {
  onDeleteShift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShiftSubscriptionVariables,
  APITypes.OnDeleteShiftSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress(
  $filter: ModelSubscriptionAddressFilterInput
  $owner: String
) {
  onUpdateAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onUpdatePicture = /* GraphQL */ `subscription OnUpdatePicture(
  $filter: ModelSubscriptionPictureFilterInput
  $owner: String
) {
  onUpdatePicture(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePictureSubscriptionVariables,
  APITypes.OnUpdatePictureSubscription
>;
export const onUpdateRoute = /* GraphQL */ `subscription OnUpdateRoute(
  $filter: ModelSubscriptionRouteFilterInput
  $owner: String
) {
  onUpdateRoute(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRouteSubscriptionVariables,
  APITypes.OnUpdateRouteSubscription
>;
export const onUpdateShift = /* GraphQL */ `subscription OnUpdateShift(
  $filter: ModelSubscriptionShiftFilterInput
  $owner: String
) {
  onUpdateShift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShiftSubscriptionVariables,
  APITypes.OnUpdateShiftSubscription
>;
