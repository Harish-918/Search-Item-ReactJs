# Item Manager with Search Functionality

This is a simple React app where users can add items with details such as `name`, `price`, and `rating`. The app stores the items locally and allows users to search for items dynamically as they type in a search box. It uses local storage to persist the items even after the page is refreshed.

## Features

- Add items with `name`, `price`, and `rating`.
- Dynamically search and filter items based on the input text.
- Persistent storage using local storage, so items remain even after a page reload.
- Simple modal to input new items.

## Installation

To run this project locally, follow the steps below:

### Prerequisites

- Make sure you have `Node.js` and `npm` installed on your machine.

### Navigate to the project directory

```bash
cd item-manager-with-search
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

This will start the development server and open the app in your browser at `http://localhost:3000`.

### Adding Items

- Click the "Add Item" button to open a modal.
- In the modal, enter the item `name`, `price`, and `rating`.
- After submitting the form, the item is added to the list and saved in the local storage.

### Searching Items

- There's a search bar at the top that allows users to filter the displayed items dynamically.
- As the user types in the search box, the displayed items are filtered by their `name`, `price`, or `rating`.

### Data Persistence

- All items are saved to the browser's local storage so that the data is retained across page reloads.

## Libraries and Tools Used

- **React** - A JavaScript library for building user interfaces.
- **React Hooks** - For managing component state and side-effects (`useState`, `useEffect`).
- **CSS** - For styling the app.

## Future Improvements

- Validation for price and rating inputs (e.g., ensuring the price is a positive number).
- Ability to edit and delete items.
- Add a feature to sort items by price or rating.
- Use a backend server (e.g., Node.js + Express) for storing items if you want more advanced data persistence beyond local storage.
