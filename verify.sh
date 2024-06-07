#!/bin/bash

# Set the contract address and ABI
contract_address="your token address"
args="./scripts/arg.js"

# Set the network and Hardhat executable path
network="bscMain"
hardhat_executable="npx hardhat"

# Verify the contract using Hardhat
$hardhat_executable verify --network $network --constructor-args $args  $contract_address