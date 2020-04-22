export const initialState = {
	gameId: null,
	pinCode: null,
	owner: false
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_GAME':
			return {
				...state,
				gameId: action.payload.gameId,
				pinCode: action.payload.pinCode,
				owner: action.payload.owner
			};
		default:
			return state;
	}
};