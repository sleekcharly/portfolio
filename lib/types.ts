import { Timestamp } from "firebase-admin/firestore";

export type PostStatus = "draft" | "published" | "archived";

export type PostImage = {
  url: string
  path:string
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
  createdAt: string 
  updatedAt: string | null
  publishedAt: string | null
  deletedAt?: string | null
  deletedBy?: string | null
}