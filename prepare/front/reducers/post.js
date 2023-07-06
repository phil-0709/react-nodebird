export const initialState = {
  mainPost: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'phil choi',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        { src: 'https://www.pexels.com/search/tokyo/' },
        { src: 'https://www.klook.com/en-PH/city/28-tokyo-things-to-do/' },
        { src: 'https://www.lonelyplanet.com/japan/tokyo' },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '안녕하세요',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: 'hello~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터 입니다',
  User: {
    id: 1,
    nickname: 'phil choi',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPost: [dummyPost, ...state.mainPost],
      };
    default:
      return state;
  }
};

export default reducer;
