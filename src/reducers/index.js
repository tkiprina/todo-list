import {SELECT_ITEM, REMOVE_ITEM, ADD_ITEM, EDIT_ITEM, OPEN_MODAL_EDIT, OPEN_MODAL_CREATE, CHANGE_MODE, CLOSE_MODAL} from '../consts';

const inintialState = {
    items: [],
    editItem: null,
    modalCreateIsOpen: false,
    modalEditIsOpen: false,
    editItemMode: false,
    currentId: 0
};

const reducer = (state = inintialState, action) => {

    switch (action.type) {
        case SELECT_ITEM:
        {
            const id = action.payload;

            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === id) {
                        item.selected = !item.selected;
                    }
                    return item;
                })
            }
        }

        case ADD_ITEM: 
        {
            const text = action.payload,
                  id = state.currentId++;

            const newItem = {
                text,
                id,
                selected: false
            };

            return {
                ...state,
                currentId: id,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        }

        case REMOVE_ITEM: 
        {
            const id = action.payload;
            const itemIdx = state.items.findIndex(item => item.id === id);

            if (itemIdx > -1){
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIdx),
                        ...state.items.slice(itemIdx+1)
                    ]
                }
            }
            
            return state;
        }

        case EDIT_ITEM:
        {
            const {id, text} = action.payload;

            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === id) {
                        item.text = text
                    }
                    return item;
                })
            }
        }    
        
        case OPEN_MODAL_EDIT:
            return {
                ...state,
                editItem: action.payload,
                modalEditIsOpen: true
            }
        
        case OPEN_MODAL_CREATE:
            return {
                ...state,
                modalCreateIsOpen: true
            }

        case CLOSE_MODAL:
            return {
                ...state,
                editItem: null,
                modalEditIsOpen: false,
                modalCreateIsOpen: false
            }
            
        
        case CHANGE_MODE:
            return {
                ...state,
                editItemMode: !state.editItemMode
            }

        default:
            return state;
    }
}

export default reducer;