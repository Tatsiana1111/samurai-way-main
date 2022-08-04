export let store = {
    _state: <RootStateType>{
        profilePage: {
            posts: [
                {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
                {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
                {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
            ],
            newPostText: 'SAMURAI',
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
            newMessageText: 'How are you??',
        },
    },
    render() {
        console.log('hi')
    },
    subscribe(observer: () => void) {
        this.render = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                message: this._state.profilePage.newPostText,
                likeCount: 0,
                id: 5
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''

            this.render()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                message: this._state.dialogsPage.newMessageText,
                id: 5
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this.render()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this.render()
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.messageText
            this.render()
        }
    },
}

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
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


// export const addPost = () => {
//     const newPost: PostType = {
//         message: state.profilePage.newPostText,
//         likeCount: 0,
//         id: 5
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//
//     render()
// }

// export const addMessage = (messageText: string) => {
//     const newMessage: MessageType = {
//         message: messageText,
//         id: 5
//     }
//     state.dialogsPage.messages.push(newMessage)
//
//     render()
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     render()
// }

// export const subscribe = (observer: () => void) => {
//     render = observer
// }
