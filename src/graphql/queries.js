/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncMyModel1s = /* GraphQL */ `
  query SyncMyModel1s(
    $filter: ModelMyModel1FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMyModel1s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMyModel1 = /* GraphQL */ `
  query GetMyModel1($id: ID!) {
    getMyModel1(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMyModel1s = /* GraphQL */ `
  query ListMyModel1s(
    $filter: ModelMyModel1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyModel1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMyModel2s = /* GraphQL */ `
  query SyncMyModel2s(
    $filter: ModelMyModel2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMyModel2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMyModel2 = /* GraphQL */ `
  query GetMyModel2($id: ID!) {
    getMyModel2(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMyModel2s = /* GraphQL */ `
  query ListMyModel2s(
    $filter: ModelMyModel2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyModel2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
