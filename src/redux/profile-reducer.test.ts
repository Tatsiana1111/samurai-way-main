import {addPost, deletePost, InitialStateType, profileReducer} from "./profileReducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        posts: [
            {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
            {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
            {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
        ],
        profile: null,
        status: '',
    }
})

test('new post should be added to array', () => {
    const post = {message: 'Test post', likeCount: 0, id: 5};
    const action = addPost(post.message)

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(4);
});
test('new post message should be "Test post"', () => {
    const post = {message: 'Test post', likeCount: 0, id: 5};
    const action = addPost(post.message)

    const endState = profileReducer(startState, action)

    expect(endState.posts[3].message).toBe(post.message);
});
test('new post likeCount should be 0', () => {
    const post = {message: 'Test post', likeCount: 0, id: 5};
    const action = addPost(post.message)

    const endState = profileReducer(startState, action)

    expect(endState.posts[3].likeCount).toBe(post.likeCount);
});
test('new post id should be 5', () => {
    const post = {message: 'Test post', likeCount: 0, id: 5};
    const action = addPost(post.message)

    const endState = profileReducer(startState, action)

    expect(endState.posts[3].id).toBe(post.id);
});
test('posts length must be decrement', () => {

    const action = deletePost(1)

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(2);
});