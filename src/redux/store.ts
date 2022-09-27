// import {addPost, onChangePost, profileReducer} from "./profileReducer";
// import {addMessageActionCreator, dialogsReducer, onChangeMessageActionCreator} from "./dialogsReducer";
//
//
// export type PostType = {
//     message: string
//     likeCount: number
//     id: number
// }
// type MessageType = {
//     message: string
//     id: number
// }
// type DialogsItemType = {
//     name: string
//     id: number
// }
// export type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
// export type DialogsPageType = {
//     dialogs: Array<DialogsItemType>
//     messages: Array<MessageType>
//     newMessageText: string
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     newsPage: object
//     musicPage: object
//     settingsPage: object
// }
// export type ActionsTypes =
//     ReturnType<typeof addPost>
//     | ReturnType<typeof addMessageActionCreator>
//     | ReturnType<typeof onChangePost>
//     | ReturnType<typeof onChangeMessageActionCreator>
//
// export type StoreType = {
//     _state: RootStateType
//     render: (_state: RootStateType) => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
//                 {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
//                 {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
//             ],
//             newPostText: 'SAMURAI',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {name: 'Tanya', id: 1},
//                 {name: 'Alex', id: 2},
//                 {name: 'Vika', id: 3},
//                 {name: 'Dima', id: 4},
//                 {name: 'Alena', id: 5},
//                 {name: 'Nick', id: 5},
//             ],
//             messages: [
//                 {message: 'Hello', id: 1},
//                 {message: 'Where are you now??', id: 2},
//                 {message: 'Good of you, baby))', id: 3},
//                 {message: 'What the bloody hell is this???', id: 4},
//                 {message: 'Okay, thanks', id: 5},
//                 {message: 'Very well!', id: 5},
//             ],
//             newMessageText: '',
//         },
//         newsPage: {},
//         musicPage: {},
//         settingsPage: {},
//     },
//     render(_state: RootStateType) {
//         console.log('hi')
//     },
//     subscribe(observer: () => void) {
//         this.render = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: any) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this.render(this._state)
//     }
// }
//
//
export default () => {
}