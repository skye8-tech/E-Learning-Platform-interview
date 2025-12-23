
export interface course{
    id: string,
    title: string,
    description: string,
    instructorId: string,
    instructor: {
        id: string,
        email: string,
        role: string
    },
    createdAt: string
}

export interface UserData{
    email: string,
    password?: string
    username: string,
    className: string,
    id?: string
}