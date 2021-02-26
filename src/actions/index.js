import {SELECT_ITEM, REMOVE_ITEM, ADD_ITEM, EDIT_ITEM, OPEN_MODAL_EDIT, OPEN_MODAL_CREATE, CHANGE_MODE, CLOSE_MODAL} from '../consts';

const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        payload: item.id
    };
};

const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    };
};

const addItem = (text) => {
    return {
        type: ADD_ITEM,
        payload: text
    };
}

const editItem = (item) => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}

const openModalCreate = () => {
    return {
        type: OPEN_MODAL_CREATE,
    }
}

const openModalEdit = (item) => {
    return {
        type: OPEN_MODAL_EDIT,
        payload: item
    }
}

const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
}

const changeMode = () => {
    return {
        type: CHANGE_MODE,
    }
}

export {selectItem, removeItem, addItem, editItem, openModalCreate, openModalEdit, changeMode, closeModal};