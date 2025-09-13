/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $condition: ModelAddressConditionInput
  $input: CreateAddressInput!
) {
  createAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const createPicture = /* GraphQL */ `mutation CreatePicture(
  $condition: ModelPictureConditionInput
  $input: CreatePictureInput!
) {
  createPicture(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePictureMutationVariables,
  APITypes.CreatePictureMutation
>;
export const createRoute = /* GraphQL */ `mutation CreateRoute(
  $condition: ModelRouteConditionInput
  $input: CreateRouteInput!
) {
  createRoute(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateRouteMutationVariables,
  APITypes.CreateRouteMutation
>;
export const createShift = /* GraphQL */ `mutation CreateShift(
  $condition: ModelShiftConditionInput
  $input: CreateShiftInput!
) {
  createShift(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateShiftMutationVariables,
  APITypes.CreateShiftMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $condition: ModelAddressConditionInput
  $input: DeleteAddressInput!
) {
  deleteAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const deletePicture = /* GraphQL */ `mutation DeletePicture(
  $condition: ModelPictureConditionInput
  $input: DeletePictureInput!
) {
  deletePicture(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePictureMutationVariables,
  APITypes.DeletePictureMutation
>;
export const deleteRoute = /* GraphQL */ `mutation DeleteRoute(
  $condition: ModelRouteConditionInput
  $input: DeleteRouteInput!
) {
  deleteRoute(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteRouteMutationVariables,
  APITypes.DeleteRouteMutation
>;
export const deleteShift = /* GraphQL */ `mutation DeleteShift(
  $condition: ModelShiftConditionInput
  $input: DeleteShiftInput!
) {
  deleteShift(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteShiftMutationVariables,
  APITypes.DeleteShiftMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $condition: ModelAddressConditionInput
  $input: UpdateAddressInput!
) {
  updateAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const updatePicture = /* GraphQL */ `mutation UpdatePicture(
  $condition: ModelPictureConditionInput
  $input: UpdatePictureInput!
) {
  updatePicture(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePictureMutationVariables,
  APITypes.UpdatePictureMutation
>;
export const updateRoute = /* GraphQL */ `mutation UpdateRoute(
  $condition: ModelRouteConditionInput
  $input: UpdateRouteInput!
) {
  updateRoute(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateRouteMutationVariables,
  APITypes.UpdateRouteMutation
>;
export const updateShift = /* GraphQL */ `mutation UpdateShift(
  $condition: ModelShiftConditionInput
  $input: UpdateShiftInput!
) {
  updateShift(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateShiftMutationVariables,
  APITypes.UpdateShiftMutation
>;
