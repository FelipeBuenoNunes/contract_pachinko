# contract_pachinko

## Run locally:

1 - On project root run the followings commands:
```
npm i
```

```
npx hardhat node
```
in another terminal:
```
npx hardhat run --network localhost scripts/deploy.ts 
```
The last command returns `Deployed with success: 'here is the contract address'`, you need to save the contract address to connect later.