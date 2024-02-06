# Application Name

Briefly describe your application here. Include any pertinent information about its functionality or its purpose.

## Getting Started

These instructions will guide you through getting a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before starting, ensure you have npm installed. Verify your npm installation with the command:

```bash
npm -v
```

If npm is not installed, follow the instructions on [npm's official site](https://www.npmjs.com/get-npm) to install it.

### Installation

Follow these steps to set up your development environment:

1. **Clone the Repository**

   Clone the project repository to your local machine using:

   ```bash
   git clone <repository-url>
   ```

2. **Install Client Dependencies**

   Change into the client directory and install its dependencies:

   ```bash
   cd client
   npm install
   ```

3. **Install Server Dependencies**

   Then, navigate to the server directory and install its dependencies:

   ```bash
   cd ../server
   npm install
   ```

### Starting the Application

After installing the dependencies, here's how you can start both the client and server:

- **Start the Client**: Navigate to the client directory and run the start script:

  ```bash
  cd ../client 
  npm start
  ```

- **Start the Server**: Open a new terminal, navigate to the server directory, and run the start script:

  ```bash
  cd server 
  npm start
  ```

Now, your application should be running, and you can access it through the URLs provided by the start scripts (usually http://localhost:3000 for the client and http://localhost:8080 for the server, but this may vary depending on your configuration).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
