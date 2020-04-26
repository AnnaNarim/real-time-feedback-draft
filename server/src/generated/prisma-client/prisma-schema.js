module.exports = {
        typeDefs: /* GraphQL */ `type AggregateClass {
  count: Int!
}

type AggregateField {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Class {
  id: ID!
  name: String!
  post: Post!
  published: Boolean!
}

type ClassConnection {
  pageInfo: PageInfo!
  edges: [ClassEdge]!
  aggregate: AggregateClass!
}

input ClassCreateInput {
  name: String!
  post: PostCreateOneWithoutClassesInput!
  published: Boolean
}

input ClassCreateManyWithoutPostInput {
  create: [ClassCreateWithoutPostInput!]
  connect: [ClassWhereUniqueInput!]
}

input ClassCreateWithoutPostInput {
  name: String!
  published: Boolean
}

type ClassEdge {
  node: Class!
  cursor: String!
}

enum ClassOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassPreviousValues {
  id: ID!
  name: String!
  published: Boolean!
}

input ClassScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [ClassScalarWhereInput!]
  OR: [ClassScalarWhereInput!]
  NOT: [ClassScalarWhereInput!]
}

type ClassSubscriptionPayload {
  mutation: MutationType!
  node: Class
  updatedFields: [String!]
  previousValues: ClassPreviousValues
}

input ClassSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassWhereInput
  AND: [ClassSubscriptionWhereInput!]
  OR: [ClassSubscriptionWhereInput!]
  NOT: [ClassSubscriptionWhereInput!]
}

input ClassUpdateInput {
  name: String
  post: PostUpdateOneRequiredWithoutClassesInput
  published: Boolean
}

input ClassUpdateManyDataInput {
  name: String
  published: Boolean
}

input ClassUpdateManyMutationInput {
  name: String
  published: Boolean
}

input ClassUpdateManyWithoutPostInput {
  create: [ClassCreateWithoutPostInput!]
  delete: [ClassWhereUniqueInput!]
  connect: [ClassWhereUniqueInput!]
  disconnect: [ClassWhereUniqueInput!]
  update: [ClassUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [ClassUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [ClassScalarWhereInput!]
  updateMany: [ClassUpdateManyWithWhereNestedInput!]
}

input ClassUpdateManyWithWhereNestedInput {
  where: ClassScalarWhereInput!
  data: ClassUpdateManyDataInput!
}

input ClassUpdateWithoutPostDataInput {
  name: String
  published: Boolean
}

input ClassUpdateWithWhereUniqueWithoutPostInput {
  where: ClassWhereUniqueInput!
  data: ClassUpdateWithoutPostDataInput!
}

input ClassUpsertWithWhereUniqueWithoutPostInput {
  where: ClassWhereUniqueInput!
  update: ClassUpdateWithoutPostDataInput!
  create: ClassCreateWithoutPostInput!
}

input ClassWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  post: PostWhereInput
  published: Boolean
  published_not: Boolean
  AND: [ClassWhereInput!]
  OR: [ClassWhereInput!]
  NOT: [ClassWhereInput!]
}

input ClassWhereUniqueInput {
  id: ID
}

scalar DateTime

type Field {
  id: ID!
  label: String!
  type: String!
  post: Post!
}

type FieldConnection {
  pageInfo: PageInfo!
  edges: [FieldEdge]!
  aggregate: AggregateField!
}

input FieldCreateInput {
  label: String!
  type: String!
  post: PostCreateOneWithoutFieldsInput!
}

input FieldCreateManyWithoutPostInput {
  create: [FieldCreateWithoutPostInput!]
  connect: [FieldWhereUniqueInput!]
}

input FieldCreateWithoutPostInput {
  label: String!
  type: String!
}

type FieldEdge {
  node: Field!
  cursor: String!
}

enum FieldOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FieldPreviousValues {
  id: ID!
  label: String!
  type: String!
}

input FieldScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  AND: [FieldScalarWhereInput!]
  OR: [FieldScalarWhereInput!]
  NOT: [FieldScalarWhereInput!]
}

type FieldSubscriptionPayload {
  mutation: MutationType!
  node: Field
  updatedFields: [String!]
  previousValues: FieldPreviousValues
}

input FieldSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FieldWhereInput
  AND: [FieldSubscriptionWhereInput!]
  OR: [FieldSubscriptionWhereInput!]
  NOT: [FieldSubscriptionWhereInput!]
}

input FieldUpdateInput {
  label: String
  type: String
  post: PostUpdateOneRequiredWithoutFieldsInput
}

input FieldUpdateManyDataInput {
  label: String
  type: String
}

input FieldUpdateManyMutationInput {
  label: String
  type: String
}

input FieldUpdateManyWithoutPostInput {
  create: [FieldCreateWithoutPostInput!]
  delete: [FieldWhereUniqueInput!]
  connect: [FieldWhereUniqueInput!]
  disconnect: [FieldWhereUniqueInput!]
  update: [FieldUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [FieldUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [FieldScalarWhereInput!]
  updateMany: [FieldUpdateManyWithWhereNestedInput!]
}

input FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput!
  data: FieldUpdateManyDataInput!
}

input FieldUpdateWithoutPostDataInput {
  label: String
  type: String
}

input FieldUpdateWithWhereUniqueWithoutPostInput {
  where: FieldWhereUniqueInput!
  data: FieldUpdateWithoutPostDataInput!
}

input FieldUpsertWithWhereUniqueWithoutPostInput {
  where: FieldWhereUniqueInput!
  update: FieldUpdateWithoutPostDataInput!
  create: FieldCreateWithoutPostInput!
}

input FieldWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  post: PostWhereInput
  AND: [FieldWhereInput!]
  OR: [FieldWhereInput!]
  NOT: [FieldWhereInput!]
}

input FieldWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createClass(data: ClassCreateInput!): Class!
  updateClass(data: ClassUpdateInput!, where: ClassWhereUniqueInput!): Class
  updateManyClasses(data: ClassUpdateManyMutationInput!, where: ClassWhereInput): BatchPayload!
  upsertClass(where: ClassWhereUniqueInput!, create: ClassCreateInput!, update: ClassUpdateInput!): Class!
  deleteClass(where: ClassWhereUniqueInput!): Class
  deleteManyClasses(where: ClassWhereInput): BatchPayload!
  createField(data: FieldCreateInput!): Field!
  updateField(data: FieldUpdateInput!, where: FieldWhereUniqueInput!): Field
  updateManyFields(data: FieldUpdateManyMutationInput!, where: FieldWhereInput): BatchPayload!
  upsertField(where: FieldWhereUniqueInput!, create: FieldCreateInput!, update: FieldUpdateInput!): Field!
  deleteField(where: FieldWhereUniqueInput!): Field
  deleteManyFields(where: FieldWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String!
  answerType: String!
  author: User!
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field!]
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class!]
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  published: Boolean
  title: String!
  content: String!
  answerType: String!
  author: UserCreateOneWithoutPostsInput!
  fields: FieldCreateManyWithoutPostInput
  classes: ClassCreateManyWithoutPostInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutClassesInput {
  create: PostCreateWithoutClassesInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutFieldsInput {
  create: PostCreateWithoutFieldsInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  published: Boolean
  title: String!
  content: String!
  answerType: String!
  fields: FieldCreateManyWithoutPostInput
  classes: ClassCreateManyWithoutPostInput
}

input PostCreateWithoutClassesInput {
  published: Boolean
  title: String!
  content: String!
  answerType: String!
  author: UserCreateOneWithoutPostsInput!
  fields: FieldCreateManyWithoutPostInput
}

input PostCreateWithoutFieldsInput {
  published: Boolean
  title: String!
  content: String!
  answerType: String!
  author: UserCreateOneWithoutPostsInput!
  classes: ClassCreateManyWithoutPostInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  answerType_ASC
  answerType_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String!
  answerType: String!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  answerType: String
  answerType_not: String
  answerType_in: [String!]
  answerType_not_in: [String!]
  answerType_lt: String
  answerType_lte: String
  answerType_gt: String
  answerType_gte: String
  answerType_contains: String
  answerType_not_contains: String
  answerType_starts_with: String
  answerType_not_starts_with: String
  answerType_ends_with: String
  answerType_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
  answerType: String
  author: UserUpdateOneRequiredWithoutPostsInput
  fields: FieldUpdateManyWithoutPostInput
  classes: ClassUpdateManyWithoutPostInput
}

input PostUpdateManyDataInput {
  published: Boolean
  title: String
  content: String
  answerType: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
  answerType: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutClassesInput {
  create: PostCreateWithoutClassesInput
  update: PostUpdateWithoutClassesDataInput
  upsert: PostUpsertWithoutClassesInput
  connect: PostWhereUniqueInput
}

input PostUpdateOneRequiredWithoutFieldsInput {
  create: PostCreateWithoutFieldsInput
  update: PostUpdateWithoutFieldsDataInput
  upsert: PostUpsertWithoutFieldsInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutAuthorDataInput {
  published: Boolean
  title: String
  content: String
  answerType: String
  fields: FieldUpdateManyWithoutPostInput
  classes: ClassUpdateManyWithoutPostInput
}

input PostUpdateWithoutClassesDataInput {
  published: Boolean
  title: String
  content: String
  answerType: String
  author: UserUpdateOneRequiredWithoutPostsInput
  fields: FieldUpdateManyWithoutPostInput
}

input PostUpdateWithoutFieldsDataInput {
  published: Boolean
  title: String
  content: String
  answerType: String
  author: UserUpdateOneRequiredWithoutPostsInput
  classes: ClassUpdateManyWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithoutClassesInput {
  update: PostUpdateWithoutClassesDataInput!
  create: PostCreateWithoutClassesInput!
}

input PostUpsertWithoutFieldsInput {
  update: PostUpdateWithoutFieldsDataInput!
  create: PostCreateWithoutFieldsInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  answerType: String
  answerType_not: String
  answerType_in: [String!]
  answerType_not_in: [String!]
  answerType_lt: String
  answerType_lte: String
  answerType_gt: String
  answerType_gte: String
  answerType_contains: String
  answerType_not_contains: String
  answerType_starts_with: String
  answerType_not_starts_with: String
  answerType_ends_with: String
  answerType_not_ends_with: String
  author: UserWhereInput
  fields_every: FieldWhereInput
  fields_some: FieldWhereInput
  fields_none: FieldWhereInput
  classes_every: ClassWhereInput
  classes_some: ClassWhereInput
  classes_none: ClassWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  class(where: ClassWhereUniqueInput!): Class
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class]!
  classesConnection(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassConnection!
  field(where: FieldWhereUniqueInput!): Field
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field]!
  fieldsConnection(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  class(where: ClassSubscriptionWhereInput): ClassSubscriptionPayload
  field(where: FieldSubscriptionWhereInput): FieldSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    