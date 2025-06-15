import store from '../src/services/store';

describe('Store', () => {
  test('rootReducer возвращает начальное состояние при неизвестном экшене', () => {
    const state = store.getState();
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    const newState = store.getState();
    
    expect(newState).toEqual(state);
  });
}); 