import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  cats: Array<Cat>;
  currentUser: User;
  getServerVersion?: Maybe<Scalars['String']>;
  isUserOccupied: Scalars['Boolean'];
  notes: NoteOffsetResponse;
  todos: TodoResponse;
  users: Array<User>;
};


export type QueryIsUserOccupiedArgs = {
  username: Scalars['String'];
};


export type QueryNotesArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};


export type QueryTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  due?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<ColumnOrder>;
  orderBy?: InputMaybe<FilterTodoColumn>;
};

export type Cat = {
  __typename?: 'Cat';
  _id: Scalars['String'];
  breed: Scalars['String'];
  characteristics: Characteristics;
  filenames: Array<Scalars['String']>;
};

export type Characteristics = {
  __typename?: 'Characteristics';
  coat: Scalars['String'];
  color: Scalars['String'];
  lifespan: Scalars['String'];
  size: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  admin: Scalars['Boolean'];
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type NoteOffsetResponse = {
  __typename?: 'NoteOffsetResponse';
  /** Note count */
  count: Scalars['Float'];
  notes: Array<Note>;
};

export type Note = {
  __typename?: 'Note';
  author?: Maybe<User>;
  authorId: Scalars['String'];
  id: Scalars['Float'];
  markdownContent: Scalars['String'];
  title: Scalars['String'];
};

export enum ColumnOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum FilterTodoColumn {
  Id = '_id',
  Description = 'description',
  Due = 'due'
}

export type TodoResponse = {
  __typename?: 'TodoResponse';
  page: TodoConnection;
  pageData?: Maybe<PageData>;
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  edges?: Maybe<Array<TodoEdge>>;
  pageInfo?: Maybe<TodoPageInfo>;
};

export type TodoEdge = {
  __typename?: 'TodoEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  _id: Scalars['String'];
  archived: Scalars['Boolean'];
  completed_percentage?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  due: Scalars['String'];
  items: Array<TodoItem>;
  locked: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
};

export type TodoPageInfo = {
  __typename?: 'TodoPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageData = {
  __typename?: 'PageData';
  count?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat: Cat;
  createNote: Note;
  createTodo: Todo;
  createUser: User;
  deleteCat: Cat;
  deleteNote: Note;
  deleteTodo: Todo;
  login: AccessToken;
  updateCat: Cat;
  updateNote: Note;
  updateTodo: Todo;
  updateUser: User;
  uploadCatPhotos: Scalars['Boolean'];
  uploadFile: Scalars['Boolean'];
};


export type MutationCreateCatArgs = {
  catInput: CatInput;
  files: Array<Scalars['Upload']>;
};


export type MutationCreateNoteArgs = {
  noteInput: NoteInput;
};


export type MutationCreateTodoArgs = {
  todoInput: TodoInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationDeleteCatArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteTodoArgs = {
  _id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationUpdateCatArgs = {
  _id: Scalars['String'];
  catInput: CatInput;
  filenames: Array<Scalars['String']>;
  files: Array<Scalars['Upload']>;
};


export type MutationUpdateNoteArgs = {
  id: Scalars['Float'];
  noteInput: NoteInput;
};


export type MutationUpdateTodoArgs = {
  _id: Scalars['String'];
  todoInput: TodoInput;
};


export type MutationUpdateUserArgs = {
  _id: Scalars['String'];
  userInput: UserInput;
};


export type MutationUploadCatPhotosArgs = {
  _id: Scalars['String'];
  files: Array<Scalars['Upload']>;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
  userId: Scalars['String'];
};

export type CatInput = {
  breed: Scalars['String'];
  characteristics: CharacteristicsInput;
};

export type CharacteristicsInput = {
  coat: Scalars['String'];
  color: Scalars['String'];
  lifespan: Scalars['String'];
  size: Scalars['String'];
};

export type NoteInput = {
  markdownContent: Scalars['String'];
  title: Scalars['String'];
};

export type TodoInput = {
  archived: Scalars['Boolean'];
  description: Scalars['String'];
  due: Scalars['String'];
  items: Array<TodoItemInput>;
  locked: Scalars['Boolean'];
};

export type TodoItemInput = {
  completed: Scalars['Boolean'];
  description: Scalars['String'];
};

export type UserInput = {
  admin: Scalars['Boolean'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  todo: Todo;
};


export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    username
    _id
    admin
    avatar
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export function refetchCurrentUserQuery(variables?: CurrentUserQueryVariables) {
      return { query: CurrentUserDocument, variables: variables }
    }
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    _id
    username
    admin
    avatar
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }
export const IsUserOccupiedDocument = gql`
    query IsUserOccupied($username: String!) {
  isUserOccupied(username: $username)
}
    `;

/**
 * __useIsUserOccupiedQuery__
 *
 * To run a query within a React component, call `useIsUserOccupiedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUserOccupiedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUserOccupiedQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useIsUserOccupiedQuery(baseOptions: Apollo.QueryHookOptions<IsUserOccupiedQuery, IsUserOccupiedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsUserOccupiedQuery, IsUserOccupiedQueryVariables>(IsUserOccupiedDocument, options);
      }
export function useIsUserOccupiedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsUserOccupiedQuery, IsUserOccupiedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsUserOccupiedQuery, IsUserOccupiedQueryVariables>(IsUserOccupiedDocument, options);
        }
export type IsUserOccupiedQueryHookResult = ReturnType<typeof useIsUserOccupiedQuery>;
export type IsUserOccupiedLazyQueryHookResult = ReturnType<typeof useIsUserOccupiedLazyQuery>;
export type IsUserOccupiedQueryResult = Apollo.QueryResult<IsUserOccupiedQuery, IsUserOccupiedQueryVariables>;
export function refetchIsUserOccupiedQuery(variables: IsUserOccupiedQueryVariables) {
      return { query: IsUserOccupiedDocument, variables: variables }
    }
export const LoginDocument = gql`
    mutation Login($loginInput: loginInput!) {
  login(loginInput: $loginInput) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($userInput: userInput!) {
  createUser(userInput: $userInput) {
    username
    _id
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $userInput: userInput!) {
  updateUser(_id: $id, userInput: $userInput) {
    username
    _id
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!, $userId: String!) {
  uploadFile(file: $file, userId: $userId)
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const GetCatsDocument = gql`
    query GetCats {
  cats {
    _id
    breed
    filenames
    characteristics {
      color
      coat
      lifespan
      size
    }
  }
}
    `;

/**
 * __useGetCatsQuery__
 *
 * To run a query within a React component, call `useGetCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCatsQuery(baseOptions?: Apollo.QueryHookOptions<GetCatsQuery, GetCatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatsQuery, GetCatsQueryVariables>(GetCatsDocument, options);
      }
export function useGetCatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatsQuery, GetCatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatsQuery, GetCatsQueryVariables>(GetCatsDocument, options);
        }
export type GetCatsQueryHookResult = ReturnType<typeof useGetCatsQuery>;
export type GetCatsLazyQueryHookResult = ReturnType<typeof useGetCatsLazyQuery>;
export type GetCatsQueryResult = Apollo.QueryResult<GetCatsQuery, GetCatsQueryVariables>;
export function refetchGetCatsQuery(variables?: GetCatsQueryVariables) {
      return { query: GetCatsDocument, variables: variables }
    }
export const DeleteCatDocument = gql`
    mutation DeleteCat($id: String!) {
  deleteCat(_id: $id) {
    breed
  }
}
    `;
export type DeleteCatMutationFn = Apollo.MutationFunction<DeleteCatMutation, DeleteCatMutationVariables>;

/**
 * __useDeleteCatMutation__
 *
 * To run a mutation, you first call `useDeleteCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCatMutation, { data, loading, error }] = useDeleteCatMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCatMutation, DeleteCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCatMutation, DeleteCatMutationVariables>(DeleteCatDocument, options);
      }
export type DeleteCatMutationHookResult = ReturnType<typeof useDeleteCatMutation>;
export type DeleteCatMutationResult = Apollo.MutationResult<DeleteCatMutation>;
export type DeleteCatMutationOptions = Apollo.BaseMutationOptions<DeleteCatMutation, DeleteCatMutationVariables>;
export const UpdateCatDocument = gql`
    mutation UpdateCat($id: String!, $catInput: CatInput!, $files: [Upload!]!, $filenames: [String!]!) {
  updateCat(_id: $id, catInput: $catInput, filenames: $filenames, files: $files) {
    breed
  }
}
    `;
export type UpdateCatMutationFn = Apollo.MutationFunction<UpdateCatMutation, UpdateCatMutationVariables>;

/**
 * __useUpdateCatMutation__
 *
 * To run a mutation, you first call `useUpdateCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCatMutation, { data, loading, error }] = useUpdateCatMutation({
 *   variables: {
 *      id: // value for 'id'
 *      catInput: // value for 'catInput'
 *      files: // value for 'files'
 *      filenames: // value for 'filenames'
 *   },
 * });
 */
export function useUpdateCatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCatMutation, UpdateCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCatMutation, UpdateCatMutationVariables>(UpdateCatDocument, options);
      }
export type UpdateCatMutationHookResult = ReturnType<typeof useUpdateCatMutation>;
export type UpdateCatMutationResult = Apollo.MutationResult<UpdateCatMutation>;
export type UpdateCatMutationOptions = Apollo.BaseMutationOptions<UpdateCatMutation, UpdateCatMutationVariables>;
export const CreateCatDocument = gql`
    mutation CreateCat($catInput: CatInput!, $files: [Upload!]!) {
  createCat(catInput: $catInput, files: $files) {
    breed
  }
}
    `;
export type CreateCatMutationFn = Apollo.MutationFunction<CreateCatMutation, CreateCatMutationVariables>;

/**
 * __useCreateCatMutation__
 *
 * To run a mutation, you first call `useCreateCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCatMutation, { data, loading, error }] = useCreateCatMutation({
 *   variables: {
 *      catInput: // value for 'catInput'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useCreateCatMutation(baseOptions?: Apollo.MutationHookOptions<CreateCatMutation, CreateCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCatMutation, CreateCatMutationVariables>(CreateCatDocument, options);
      }
export type CreateCatMutationHookResult = ReturnType<typeof useCreateCatMutation>;
export type CreateCatMutationResult = Apollo.MutationResult<CreateCatMutation>;
export type CreateCatMutationOptions = Apollo.BaseMutationOptions<CreateCatMutation, CreateCatMutationVariables>;
export const UploadCatPhotosDocument = gql`
    mutation UploadCatPhotos($id: String!, $files: [Upload!]!) {
  uploadCatPhotos(_id: $id, files: $files)
}
    `;
export type UploadCatPhotosMutationFn = Apollo.MutationFunction<UploadCatPhotosMutation, UploadCatPhotosMutationVariables>;

/**
 * __useUploadCatPhotosMutation__
 *
 * To run a mutation, you first call `useUploadCatPhotosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadCatPhotosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadCatPhotosMutation, { data, loading, error }] = useUploadCatPhotosMutation({
 *   variables: {
 *      id: // value for 'id'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useUploadCatPhotosMutation(baseOptions?: Apollo.MutationHookOptions<UploadCatPhotosMutation, UploadCatPhotosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadCatPhotosMutation, UploadCatPhotosMutationVariables>(UploadCatPhotosDocument, options);
      }
export type UploadCatPhotosMutationHookResult = ReturnType<typeof useUploadCatPhotosMutation>;
export type UploadCatPhotosMutationResult = Apollo.MutationResult<UploadCatPhotosMutation>;
export type UploadCatPhotosMutationOptions = Apollo.BaseMutationOptions<UploadCatPhotosMutation, UploadCatPhotosMutationVariables>;
export const GetNotesDocument = gql`
    query GetNotes($offset: Float, $limit: Float) {
  notes(limit: $limit, offset: $offset) {
    count
    notes {
      id
      title
      markdownContent
      author {
        username
        _id
      }
    }
  }
}
    `;

/**
 * __useGetNotesQuery__
 *
 * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetNotesQuery(baseOptions?: Apollo.QueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
      }
export function useGetNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export type GetNotesQueryHookResult = ReturnType<typeof useGetNotesQuery>;
export type GetNotesLazyQueryHookResult = ReturnType<typeof useGetNotesLazyQuery>;
export type GetNotesQueryResult = Apollo.QueryResult<GetNotesQuery, GetNotesQueryVariables>;
export function refetchGetNotesQuery(variables?: GetNotesQueryVariables) {
      return { query: GetNotesDocument, variables: variables }
    }
export const CreateNoteDocument = gql`
    mutation CreateNote($noteInput: NoteInput!) {
  createNote(noteInput: $noteInput) {
    title
  }
}
    `;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      noteInput: // value for 'noteInput'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, options);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const UpdateNoteDocument = gql`
    mutation UpdateNote($id: Float!, $noteInput: NoteInput!) {
  updateNote(id: $id, noteInput: $noteInput) {
    title
  }
}
    `;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      noteInput: // value for 'noteInput'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation DeleteNote($id: Float!) {
  deleteNote(id: $id) {
    title
  }
}
    `;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, options);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const GetTodosDocument = gql`
    query GetTodos($archived: Boolean, $completed: Boolean, $limit: Float, $after: String, $before: String, $due: String, $orderBy: FilterTodoColumn, $order: ColumnOrder) {
  todos(archived: $archived, completed: $completed, limit: $limit, after: $after, before: $before, due: $due, order: $order, orderBy: $orderBy) {
    page {
      edges {
        cursor
        node {
          _id
          description
          due
          locked
          completed_percentage
          archived
          user {
            _id
            username
          }
          items {
            description
            completed
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    pageData {
      count
      limit
      offset
    }
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      archived: // value for 'archived'
 *      completed: // value for 'completed'
 *      limit: // value for 'limit'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      due: // value for 'due'
 *      orderBy: // value for 'orderBy'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export function refetchGetTodosQuery(variables?: GetTodosQueryVariables) {
      return { query: GetTodosDocument, variables: variables }
    }
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: String!) {
  deleteTodo(_id: $id) {
    description
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: String!, $todoInput: TodoInput!) {
  updateTodo(_id: $id, todoInput: $todoInput) {
    description
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      todoInput: // value for 'todoInput'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($todoInput: TodoInput!) {
  createTodo(todoInput: $todoInput) {
    description
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      todoInput: // value for 'todoInput'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const TodoDocument = gql`
    subscription Todo {
  todo {
    description
  }
}
    `;

/**
 * __useTodoSubscription__
 *
 * To run a query within a React component, call `useTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TodoSubscription, TodoSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoSubscription, TodoSubscriptionVariables>(TodoDocument, options);
      }
export type TodoSubscriptionHookResult = ReturnType<typeof useTodoSubscription>;
export type TodoSubscriptionResult = Apollo.SubscriptionResult<TodoSubscription>;
export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', username: string, _id: string, admin: boolean, avatar?: string | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string, username: string, admin: boolean, avatar?: string | null }> };

export type IsUserOccupiedQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUserOccupiedQuery = { __typename?: 'Query', isUserOccupied: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessToken', accessToken: string } };

export type SignInMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username: string, _id: string } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  userInput: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', username: string, _id: string } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
  userId: Scalars['String'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: boolean };

export type GetCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatsQuery = { __typename?: 'Query', cats: Array<{ __typename?: 'Cat', _id: string, breed: string, filenames: Array<string>, characteristics: { __typename?: 'Characteristics', color: string, coat: string, lifespan: string, size: string } }> };

export type DeleteCatMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCatMutation = { __typename?: 'Mutation', deleteCat: { __typename?: 'Cat', breed: string } };

export type UpdateCatMutationVariables = Exact<{
  id: Scalars['String'];
  catInput: CatInput;
  files: Array<Scalars['Upload']> | Scalars['Upload'];
  filenames: Array<Scalars['String']> | Scalars['String'];
}>;


export type UpdateCatMutation = { __typename?: 'Mutation', updateCat: { __typename?: 'Cat', breed: string } };

export type CreateCatMutationVariables = Exact<{
  catInput: CatInput;
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type CreateCatMutation = { __typename?: 'Mutation', createCat: { __typename?: 'Cat', breed: string } };

export type UploadCatPhotosMutationVariables = Exact<{
  id: Scalars['String'];
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UploadCatPhotosMutation = { __typename?: 'Mutation', uploadCatPhotos: boolean };

export type GetNotesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Float']>;
}>;


export type GetNotesQuery = { __typename?: 'Query', notes: { __typename?: 'NoteOffsetResponse', count: number, notes: Array<{ __typename?: 'Note', id: number, title: string, markdownContent: string, author?: { __typename?: 'User', username: string, _id: string } | null }> } };

export type CreateNoteMutationVariables = Exact<{
  noteInput: NoteInput;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote: { __typename?: 'Note', title: string } };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['Float'];
  noteInput: NoteInput;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote: { __typename?: 'Note', title: string } };

export type DeleteNoteMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', deleteNote: { __typename?: 'Note', title: string } };

export type GetTodosQueryVariables = Exact<{
  archived?: InputMaybe<Scalars['Boolean']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<FilterTodoColumn>;
  order?: InputMaybe<ColumnOrder>;
}>;


export type GetTodosQuery = { __typename?: 'Query', todos: { __typename?: 'TodoResponse', page: { __typename?: 'TodoConnection', edges?: Array<{ __typename?: 'TodoEdge', cursor?: string | null, node?: { __typename?: 'Todo', _id: string, description: string, due: string, locked: boolean, completed_percentage?: string | null, archived: boolean, user?: { __typename?: 'User', _id: string, username: string } | null, items: Array<{ __typename?: 'TodoItem', description: string, completed: boolean }> } | null }> | null, pageInfo?: { __typename?: 'TodoPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } | null }, pageData?: { __typename?: 'PageData', count?: number | null, limit?: number | null, offset?: number | null } | null } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'Todo', description: string } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['String'];
  todoInput: TodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', description: string } };

export type CreateTodoMutationVariables = Exact<{
  todoInput: TodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', description: string } };

export type TodoSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TodoSubscription = { __typename?: 'Subscription', todo: { __typename?: 'Todo', description: string } };

export const namedOperations = {
  Query: {
    CurrentUser: 'CurrentUser',
    GetUsers: 'GetUsers',
    IsUserOccupied: 'IsUserOccupied',
    GetCats: 'GetCats',
    GetNotes: 'GetNotes',
    GetTodos: 'GetTodos'
  },
  Mutation: {
    Login: 'Login',
    SignIn: 'SignIn',
    UpdateUser: 'UpdateUser',
    UploadFile: 'UploadFile',
    DeleteCat: 'DeleteCat',
    UpdateCat: 'UpdateCat',
    CreateCat: 'CreateCat',
    UploadCatPhotos: 'UploadCatPhotos',
    CreateNote: 'CreateNote',
    UpdateNote: 'UpdateNote',
    DeleteNote: 'DeleteNote',
    DeleteTodo: 'DeleteTodo',
    UpdateTodo: 'UpdateTodo',
    CreateTodo: 'CreateTodo'
  },
  Subscription: {
    Todo: 'Todo'
  }
}