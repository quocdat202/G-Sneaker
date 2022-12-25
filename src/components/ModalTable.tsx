import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from "../../hooks";
import React, { useState } from 'react';
import { deleteOrderTakeOuts } from 'slices/orderTakeOuts';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

    idDelete: string;
    setIdDelete: React.Dispatch<React.SetStateAction<string>>;

    // itemEdit: Array<string>;
    // setItemEdit: React.Dispatch<React.SetStateAction<Array<string>>>;
}
const ModalTable: React.FC<Props> = ({
    open,
    setOpen,

    idDelete,
    setIdDelete
}) => {
    const dispatch = useAppDispatch();
    const handleOk = () => {
        dispatch(deleteOrderTakeOuts({ id: idDelete }))
        setOpen(false);
    };

    return (
        <>
            <Modal
                className="modal-data-table NotoSansThin"
                okText="削除"
                style={{ fontSize: 20 }}
                closable={false}
                title={
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>削除</span>
                        <button onClick={() => setOpen(false)} style={{ cursor: 'pointer' }}>
                            <svg style={{ cursor: 'pointer' }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 1L1 13M1 1L13 13" stroke="#111927" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                }
                open={open}
                footer={
                    <div className="modal-button max-sm:!ml-0">
                        <button onClick={() => setOpen(false)} className="btn-cancel NotoSansRegular max-sm:!w-[148px]">キャンセル</button>
                        <button onClick={handleOk} className="btn-ok max-sm:!w-[148px] justify-center">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4M7.33333 7.75V11.9167M10.6667 7.75V11.9167" stroke="#F3F4F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>削除</span>
                        </button>
                    </div>
                }
            >
                {/* <p className="NotoSansThin">? </p> */}
                <p className="NotoSansThin">削除した後、元に回復できませんので、ご注意ください。
                </p>
            </Modal>
        </>
    );
};

export default ModalTable;