const initialState: any = {

}

export default function globalReducer(state = initialState, action: any) {
    let changes;
    switch (action.type) {
        // case HANDLE_LIST:
        //     changes = {
        //         ...state,
        //         ...action.payload
        //     };
        //     return changes;
        default:
            return state;
    }
}
