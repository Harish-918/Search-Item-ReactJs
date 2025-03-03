import { useEffect, useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemRating, setNewItemRating] = useState('');
  
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItemName.trim() === '' || newItemPrice.trim() === '' || newItemRating.trim() === '') return;

    const item = {
      id: Date.now(),
      name: newItemName,
      price: newItemPrice,
      rating: newItemRating,
    };

    setItems((prevItems) => [...prevItems, item]);
    setNewItemName('');
    setNewItemPrice('');
    setNewItemRating('');
    closeModal(); 
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filtering items based on search query
  const filteredItems = items.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.rating.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='App'>
      <button className="add-btn" onClick={openModal}>Add Item</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} addItem={addItem} 
        newItemName={newItemName} setNewItemName={setNewItemName}
        newItemPrice={newItemPrice} setNewItemPrice={setNewItemPrice}
        newItemRating={newItemRating} setNewItemRating={setNewItemRating}
      />
      
      {/* Search Box */}
      <input 
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Display filtered items */}
      <div className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="item-container">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default App;
