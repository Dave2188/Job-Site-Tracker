# Application Name

The application was created to help crews out in the field to better keep track of materials and progress. Features include site wide material tracking, daily material lists, Location tracking and Qr print out for site details directions, local weather, and Driving conditions. 

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
   git clone https://github.com/Dave2188/Job-Site-Tracker
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

4. **Create Env Files**

    Create env files for both client and server directories. (Examples available)

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

- **Alt Start Full App**: Navigate to the client directory and run the start script:

  ```bash
  cd ../client 
  npm start-full
  ```

Now, your application should be running, and you can access it through the URLs provided by the start scripts (usually http://localhost:3000 for the client and http://localhost:4000 for the server, but this may vary depending on your configuration).


