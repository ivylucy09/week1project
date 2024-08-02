# Bank Transactions App

A simple React application to manage and track your recent bank transactions. This app allows you to view, add, search, sort, and delete transactions.

## Table of Contents

- [Features](#features)
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **View Transactions:** See a table of all transactions.
- **Add Transaction:** Fill out and submit a form to add a new transaction.
- **Search Transactions:** Filter transactions by typing into the search bar.
- **Sort Transactions:** Sort transactions alphabetically by category or description (bonus).
- **Delete Transaction:** Remove a transaction from the table.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/bank-transactions-app.git
    cd bank-transactions-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the JSON server:**

    Create a `db.json` file in the project root with the following content:

    ```json
    {
      "transactions": []
    }
    ```

4. **Start the JSON server:**

    ```bash
    npx json-server --watch db.json --port 8001
    ```

## Running the Project

1. **Start the React development server:**

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a Transaction

- Fill in the form with the transaction details (date, description, category, and amount).
- Click the "Add Transaction" button to add the transaction to the table.

### Searching for Transactions

- Type a keyword into the search bar.
- The table will automatically filter to show only the transactions that match the keyword in the description.

### Sorting Transactions (Bonus)

- Click on the column headers to sort the transactions alphabetically by category or description.

### Deleting a Transaction

- Click the "Delete" button next to the transaction you want to remove.
- The transaction will be removed from the table.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JSON Server**: A simple, lightweight server to create a REST API with a `db.json` file.
- **CSS**: Styling for the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure your changes are well-documented and tested.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.