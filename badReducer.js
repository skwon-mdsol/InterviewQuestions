export const defaultState = {
  items: [],
  loading: false
};

export function studiesReducer (state, action) {
  switch (action.type) {
    case 'studies/loading': {
      state.loading = false;
      return state;
    }
    case 'studies/loaded': {
      state.items = action.payload;
      state.loading = true;
      return state;
    }
    case 'studies/deleted': {
      break;
      // FIXME: not yet implemented
    }
    case 'studies/updated': {
      break;
      // FIXME: not yet implemented
    }
    default: return { items: [], loading: false };
  }
}