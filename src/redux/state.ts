export type PostType = {
    message: string
    likeCount: number
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export type DialogsItemType = {
    name: string
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
            {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
            {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
        ],
    },
    dialogsPage: {
        dialogs: [
            {name: 'Tanya', id: 1},
            {name: 'Alex', id: 2},
            {name: 'Vika', id: 3},
            {name: 'Dima', id: 4},
            {name: 'Alena', id: 5},
            {name: 'Nick', id: 5},
        ],
        messages: [
            {message: 'Hello', id: 1},
            {message: 'Where are you now??', id: 2},
            {message: 'Good of you, baby))', id: 3},
            {message: 'What the bloody hell is this???', id: 4},
            {message: 'Okay, thanks', id: 5},
            {message: 'Very well!', id: 5},
        ],
    },
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        message: postMessage,
        likeCount: 0,
        id: 5
    }
    state.profilePage.posts.push(newPost)
}

