import { Timestamp } from "firebase-admin/firestore";

export type PostStatus = "draft" | "published" | "archived";

export type PostImage = {
  url: string
  path:string
}

export type FirestoreCategory = {
  name:string;
  slug: string;
  createdAt: Timestamp
}

export type BlogCategory = {
  id:string
  name:string;
  slug: string;
  createdAt: string | null
}

export type FirestorePost = {
  title: string
  slug: string
  content: unknown
  excerpt: string
  tags: string[]
  categories: string[]
  images: PostImage[]
  status: PostStatus
  random:number
  createdAt: Timestamp
  updatedAt: Timestamp
  publishedAt: Timestamp
  deletedAt?: Timestamp | null
  deletedBy?: string | null
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  content: unknown
  excerpt: string
  tags: string[]
  categories: string[]
  images: PostImage[]
  status: PostStatus
  random:number
  createdAt: string | null
  updatedAt: string | null
  publishedAt: string | null
  deletedAt?: string | null
  deletedBy?: string | null
}

export type FirestoreComment = {
  id: string;
  postSlug: string;
  name: string;
  email?: string;
  website?: string;
  message: string;
  createdAt: string;
  createsAtTimestamp?: Timestamp
  approved: boolean;
  parentId?: string | null;
}

export type Comment = {
  id: string;
  postSlug: string;
  name: string;
  email?: string;
  website?: string;
  message: string;
  createdAt: string;
  createsAtTimestamp?: string
  approved: boolean;
  parentId?: string | null;
}

export type CreateCommentInput = {
  postSlug: string;
  name: string;
  email?: string;
  website?: string;
  message: string;
  parentId?: string | null;
}