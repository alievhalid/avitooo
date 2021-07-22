const initialState = {
  loading: false,
  modalImage: {},
  comments: [],
  deleting: false,
  date: []
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "modal/load/start":
      return {
        ...state,
        loading: true,
      };

    case "modal/load/success":
      return {
        ...state,
        modalImage: {
          url: action.payload.url
        },
        comments: action.comments,
        loading: false,
      };

    case 'add/comment/start':
      return {
        ...state,
        deleting: true
      }
    case 'add/comment/success':
      return {
        ...state,
        comments: [...state.comments, action.payload],
        deleting: false
      }


    default:
      return state;
  }
};

export default modal;
