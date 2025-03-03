import React from 'react';

const Modal = ({
    isOpen,
    onClose,
    addItem,
    newItemName,
    setNewItemName,
    newItemPrice,
    setNewItemPrice,
    newItemRating,
    setNewItemRating,
}) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>Close</button>
                <h2>Add New Item</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)}/>

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)}/>

                    <label htmlFor="rating">Rating:</label>
                    <input type="text" id="rating" name="rating" value={newItemRating} onChange={(e) => setNewItemRating(e.target.value)}/>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
