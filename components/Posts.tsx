'use client'

import { useQuery } from '@tanstack/react-query'
import { getPosts, Post } from '@/lib/get-posts'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'
import { useSearchStore } from '@/lib/search-store'

export default function Posts() {

  const searchQuery = useSearchStore((state)=> state.searchTerm)
  const [debouncedSearch, setDebouncedSearch] = useState<string>(searchQuery)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchQuery), 300)
    return () => clearTimeout(handler)
  }, [searchQuery])

    
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

    const filteredPosts = data?.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  if (isError) return <p className="text-red-500 p-4">Failed to load posts.</p>
  if(filteredPosts?.length === 0) return <p className="text-gray-900 dark:text-gray-300 p-4">No results found.</p>

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPosts?.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-4 space-y-1">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

