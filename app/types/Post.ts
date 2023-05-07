export type PostType = {
    title: string
    id: string
    updatedAt?: string
    User: {
        email: string
        id: string
        image: string
        name: string
    }
    comments?: {
        createdAt?: string
        id: string
        postId: string
        userId: string
        title: string
        user:{ 
            name: string
            image: string
            id: string
            email: string
        }
    }[]
}