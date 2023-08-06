import React from "react";

const Modal = ({ children,isVisible, onClose }) => {
    if( !isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20
         backdrop-blur-sm flex justify-center items-center'>
            <div className="w-[600px]">
                <div className="bg-white p-2 rounded flex flex-col">
                    <button 
                    onClick={onClose}
                    className="text-xl place-self-end">
                        X
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal;