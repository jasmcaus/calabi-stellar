default: build 

pythonSetup:
	pip install caer
	sudo apt-get update && sudo apt-get install ffmpeg libsm6 libxext6  -y

setup:
	rustup target add wasm32-unknown-unknown
	cargo install --locked --version 20.0.0-rc2 soroban-cli --features opt
	echo "source <(soroban completion --shell bash)" >> ~/.bashrc

sorobanInit:
	soroban config network add testnet --rpc-url https://soroban-testnet.stellar.org:443 --network-passphrase "Test SDF Network ; September 2015"
	soroban config identity generate alice

clean:
	cd contracts; cargo clean; cd ..

fmt:
	cd contracts; cargo fmt; cd ..

build:
	make fmt; cd contracts; soroban contract build && soroban contract optimize --wasm target/wasm32-unknown-unknown/release/core.wasm; cd .. 

deploy:
	soroban contract deploy --wasm contracts/target/wasm32-unknown-unknown/release/token.optimized.wasm --source alice --network testnet

optimize:
	cd contracts; soroban contract optimize --wasm target/wasm32-unknown-unknown/release/token.wasm; cd .. 

generate:
	soroban contract bindings typescript --network testnet --contract-id $(shell cat ./.contractId) --output-dir @amorphous-soroban-client --overwrite; python postGenerate.py