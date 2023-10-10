#![no_std]

use soroban_sdk::{contract, contractimpl};
use interface::ContractAInterface;

#[contract]
pub struct ContractA;

#[contractimpl]
impl ContractAInterface for ContractA {
    fn add(x: u32, y: u32) -> u32 {
        x.checked_add(y).expect("no overflow")
    }
}