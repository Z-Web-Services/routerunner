/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Address = {
  __typename: "Address",
  createdAt: string,
  fullAddress?: string | null,
  id: string,
  notes?: string | null,
  owner?: string | null,
  pictures?: ModelPictureConnection | null,
  route?: Route | null,
  routeId?: string | null,
  updatedAt: string,
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection",
  items:  Array<Picture | null >,
  nextToken?: string | null,
};

export type Picture = {
  __typename: "Picture",
  address?: Address | null,
  addressId?: string | null,
  createdAt: string,
  description?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
  url?: string | null,
};

export type Route = {
  __typename: "Route",
  addresses?: ModelAddressConnection | null,
  createdAt: string,
  id: string,
  name?: string | null,
  owner?: string | null,
  shift?: Shift | null,
  shiftId?: string | null,
  updatedAt: string,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type Shift = {
  __typename: "Shift",
  createdAt: string,
  id: string,
  name?: string | null,
  owner?: string | null,
  routes?: ModelRouteConnection | null,
  start?: string | null,
  stop?: string | null,
  updatedAt: string,
};

export type ModelRouteConnection = {
  __typename: "ModelRouteConnection",
  items:  Array<Route | null >,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  and?: Array< ModelAddressFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  fullAddress?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelAddressFilterInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  owner?: ModelStringInput | null,
  routeId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPictureFilterInput = {
  addressId?: ModelStringInput | null,
  and?: Array< ModelPictureFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPictureFilterInput | null,
  or?: Array< ModelPictureFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type ModelRouteFilterInput = {
  and?: Array< ModelRouteFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelRouteFilterInput | null,
  or?: Array< ModelRouteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  shiftId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelShiftFilterInput = {
  and?: Array< ModelShiftFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelShiftFilterInput | null,
  or?: Array< ModelShiftFilterInput | null > | null,
  owner?: ModelStringInput | null,
  start?: ModelStringInput | null,
  stop?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelShiftConnection = {
  __typename: "ModelShiftConnection",
  items:  Array<Shift | null >,
  nextToken?: string | null,
};

export type ModelAddressConditionInput = {
  and?: Array< ModelAddressConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  fullAddress?: ModelStringInput | null,
  not?: ModelAddressConditionInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  owner?: ModelStringInput | null,
  routeId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAddressInput = {
  fullAddress?: string | null,
  id?: string | null,
  notes?: string | null,
  routeId?: string | null,
};

export type ModelPictureConditionInput = {
  addressId?: ModelStringInput | null,
  and?: Array< ModelPictureConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelPictureConditionInput | null,
  or?: Array< ModelPictureConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type CreatePictureInput = {
  addressId?: string | null,
  description?: string | null,
  id?: string | null,
  url?: string | null,
};

export type ModelRouteConditionInput = {
  and?: Array< ModelRouteConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelRouteConditionInput | null,
  or?: Array< ModelRouteConditionInput | null > | null,
  owner?: ModelStringInput | null,
  shiftId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRouteInput = {
  id?: string | null,
  name?: string | null,
  shiftId?: string | null,
};

export type ModelShiftConditionInput = {
  and?: Array< ModelShiftConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelShiftConditionInput | null,
  or?: Array< ModelShiftConditionInput | null > | null,
  owner?: ModelStringInput | null,
  start?: ModelStringInput | null,
  stop?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateShiftInput = {
  id?: string | null,
  name?: string | null,
  start?: string | null,
  stop?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type DeletePictureInput = {
  id: string,
};

export type DeleteRouteInput = {
  id: string,
};

export type DeleteShiftInput = {
  id: string,
};

export type UpdateAddressInput = {
  fullAddress?: string | null,
  id: string,
  notes?: string | null,
  routeId?: string | null,
};

export type UpdatePictureInput = {
  addressId?: string | null,
  description?: string | null,
  id: string,
  url?: string | null,
};

export type UpdateRouteInput = {
  id: string,
  name?: string | null,
  shiftId?: string | null,
};

export type UpdateShiftInput = {
  id: string,
  name?: string | null,
  start?: string | null,
  stop?: string | null,
};

export type ModelSubscriptionAddressFilterInput = {
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  fullAddress?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  owner?: ModelStringInput | null,
  routeId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPictureFilterInput = {
  addressId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPictureFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPictureFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRouteFilterInput = {
  and?: Array< ModelSubscriptionRouteFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionRouteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  shiftId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionShiftFilterInput = {
  and?: Array< ModelSubscriptionShiftFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionShiftFilterInput | null > | null,
  owner?: ModelStringInput | null,
  start?: ModelSubscriptionStringInput | null,
  stop?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPictureQueryVariables = {
  id: string,
};

export type GetPictureQuery = {
  getPicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type GetRouteQueryVariables = {
  id: string,
};

export type GetRouteQuery = {
  getRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetShiftQueryVariables = {
  id: string,
};

export type GetShiftQuery = {
  getShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicturesQuery = {
  listPictures?:  {
    __typename: "ModelPictureConnection",
    items:  Array< {
      __typename: "Picture",
      addressId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutesQuery = {
  listRoutes?:  {
    __typename: "ModelRouteConnection",
    items:  Array< {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListShiftsQueryVariables = {
  filter?: ModelShiftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShiftsQuery = {
  listShifts?:  {
    __typename: "ModelShiftConnection",
    items:  Array< {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: CreateAddressInput,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePictureMutationVariables = {
  condition?: ModelPictureConditionInput | null,
  input: CreatePictureInput,
};

export type CreatePictureMutation = {
  createPicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type CreateRouteMutationVariables = {
  condition?: ModelRouteConditionInput | null,
  input: CreateRouteInput,
};

export type CreateRouteMutation = {
  createRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateShiftMutationVariables = {
  condition?: ModelShiftConditionInput | null,
  input: CreateShiftInput,
};

export type CreateShiftMutation = {
  createShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: DeleteAddressInput,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePictureMutationVariables = {
  condition?: ModelPictureConditionInput | null,
  input: DeletePictureInput,
};

export type DeletePictureMutation = {
  deletePicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type DeleteRouteMutationVariables = {
  condition?: ModelRouteConditionInput | null,
  input: DeleteRouteInput,
};

export type DeleteRouteMutation = {
  deleteRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteShiftMutationVariables = {
  condition?: ModelShiftConditionInput | null,
  input: DeleteShiftInput,
};

export type DeleteShiftMutation = {
  deleteShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: UpdateAddressInput,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePictureMutationVariables = {
  condition?: ModelPictureConditionInput | null,
  input: UpdatePictureInput,
};

export type UpdatePictureMutation = {
  updatePicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type UpdateRouteMutationVariables = {
  condition?: ModelRouteConditionInput | null,
  input: UpdateRouteInput,
};

export type UpdateRouteMutation = {
  updateRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateShiftMutationVariables = {
  condition?: ModelShiftConditionInput | null,
  input: UpdateShiftInput,
};

export type UpdateShiftMutation = {
  updateShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
  owner?: string | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePictureSubscriptionVariables = {
  filter?: ModelSubscriptionPictureFilterInput | null,
  owner?: string | null,
};

export type OnCreatePictureSubscription = {
  onCreatePicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnCreateRouteSubscriptionVariables = {
  filter?: ModelSubscriptionRouteFilterInput | null,
  owner?: string | null,
};

export type OnCreateRouteSubscription = {
  onCreateRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateShiftSubscriptionVariables = {
  filter?: ModelSubscriptionShiftFilterInput | null,
  owner?: string | null,
};

export type OnCreateShiftSubscription = {
  onCreateShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePictureSubscriptionVariables = {
  filter?: ModelSubscriptionPictureFilterInput | null,
  owner?: string | null,
};

export type OnDeletePictureSubscription = {
  onDeletePicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnDeleteRouteSubscriptionVariables = {
  filter?: ModelSubscriptionRouteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRouteSubscription = {
  onDeleteRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteShiftSubscriptionVariables = {
  filter?: ModelSubscriptionShiftFilterInput | null,
  owner?: string | null,
};

export type OnDeleteShiftSubscription = {
  onDeleteShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    createdAt: string,
    fullAddress?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    pictures?:  {
      __typename: "ModelPictureConnection",
      nextToken?: string | null,
    } | null,
    route?:  {
      __typename: "Route",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      shiftId?: string | null,
      updatedAt: string,
    } | null,
    routeId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePictureSubscriptionVariables = {
  filter?: ModelSubscriptionPictureFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePictureSubscription = {
  onUpdatePicture?:  {
    __typename: "Picture",
    address?:  {
      __typename: "Address",
      createdAt: string,
      fullAddress?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      routeId?: string | null,
      updatedAt: string,
    } | null,
    addressId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnUpdateRouteSubscriptionVariables = {
  filter?: ModelSubscriptionRouteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRouteSubscription = {
  onUpdateRoute?:  {
    __typename: "Route",
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    shift?:  {
      __typename: "Shift",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      start?: string | null,
      stop?: string | null,
      updatedAt: string,
    } | null,
    shiftId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateShiftSubscriptionVariables = {
  filter?: ModelSubscriptionShiftFilterInput | null,
  owner?: string | null,
};

export type OnUpdateShiftSubscription = {
  onUpdateShift?:  {
    __typename: "Shift",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    routes?:  {
      __typename: "ModelRouteConnection",
      nextToken?: string | null,
    } | null,
    start?: string | null,
    stop?: string | null,
    updatedAt: string,
  } | null,
};
