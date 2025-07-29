'use client'

import { useQuery } from '@tanstack/react-query'
import { getPosts, Post } from '@/lib/get-posts'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Posts() {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  if (isLoading) {
    return (
      <div className="p-4 grid gap-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-full h-24" />
        ))}
      </div>
    )
  }

  if (isError) return <p className="text-red-500 p-4">Failed to load posts.</p>

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((post) => (
        <Card key={post.id} className="shadow-sm">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground">{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

