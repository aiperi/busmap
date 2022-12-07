import React from 'react';
import {ColorActionButton} from "./style";
import {useDispatch} from "react-redux";
import {useClickOutside} from "../../../hooks/useClickOutside";

const ActionModal = ({isOpenModal, setOpenModal}) => {
    const dispatch = useDispatch()
    const [ref] = useClickOutside(() => setOpenModal(true))

    // const closeModal = () => {
    //     dispatch(setIsOpenModal())
    // }

    return (
        <div ref={ref}>
        <div style={{width:'300px', height: '250px', backgroundColor:'grey', padding:"20px"}} isOpenModal={isOpenModal}>
            <ColorActionButton variant={"contained"}>Отменить</ColorActionButton>
            <ColorActionButton variant={"contained"}>Сохранить</ColorActionButton>
        </div>
        </div>
    );
};

export default ActionModal;