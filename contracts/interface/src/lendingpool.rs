use soroban_sdk::{contractclient, Address, Env};

#[contractclient(name = "LendingPool")]
pub trait ILendingPool {
    fn add_pricefeed(env: Env, asset: Address, pricefeed: Address);
    fn supply(env: Env, asset: Address, amount: u128, from: Address);
    fn borrow(env: Env, asset: Address, amount: u128, from: Address);
    fn repay(env: Env, asset: Address, amount: u128, from: Address);
    fn liquidate(
        env: Env,
        account: Address,
        collateral_asset: Address,
        borrow_asset: Address,
        amount_to_liquidate: u128,
        from: Address,
    );
}
