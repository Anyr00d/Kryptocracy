# Kryptocracy

Our platform revolutionizes democracy by empowering citizens to vote on every decision, fostering inclusivity and transparency. Utilizing Ethereum blockchain and Solidity smart contracts, we enable customized polls for diverse demographics, incentivizing participation with tokens. A robust chat system encourages open discussions, while premium features support localized polls. Our innovative bond concept allows citizens to invest in public welfare, earning interest through liquidity pools. Welcome to a democracy where every voice counts, driving meaningful change through citizen engagement.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jmt-genius/Kryptocracy.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Hardhat:
   ```sh
   npm install --save-dev hardhat
   ```
   Verify installation:
   ```sh
   hardhat --version
   ```

## Usage

### Deploy Smart Contracts

To deploy smart contracts using Hardhat:

```sh
npx hardhat scripts/deploy.cjs --network localhost
```

### Start Server

To start the server:

```sh
node app.cjs
```
### Initiate Local Chain

To initiate a local Ethereum chain using Hardhat:

```sh
npx hardhat node
```


