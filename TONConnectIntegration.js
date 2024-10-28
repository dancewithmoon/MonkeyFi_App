let tonConnect;

window.initializeTonConnect = function() {
    try {
        console.log("init ton connect");
        tonConnect = new TonConnectSDK.TonConnect({
            title: "MonkeyFi",
            icon: "https://ton.vote/logo.png",
            network: 'testnet'
        });
        console.log(`ton connect: ${tonConnect}`);
    } catch (error) {
        console.error("Initialization error:", error);
    }
}

window.connectWallet = async function() {
    try {
        console.log("connect wallet call");
        const walletConnectionSource = {
            universalLink: 'https://app.tonkeeper.com/ton-connect',
            bridgeUrl: 'https://bridge.tonapi.io/bridge'
        }
        
        await tonConnect.connect(walletConnectionSource);
        const walletAddress = tonConnect.wallet?.address || "";
        if (walletAddress) {
            SendMessage("TonWalletBridge", "OnWalletConnected", walletAddress);
        }
    } catch (error) {
        console.error("Initialization error:", error);
    }
}
