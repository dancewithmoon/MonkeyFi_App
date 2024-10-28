let tonConnect;

function initializeTonConnect() {
    console.log("init ton connect")
    tonConnect = new TonConnect();
}

window.connectWallet = function() {
    try {
        console.log("connect wallet call")
        await tonConnect.connectWallet();
        const walletAddress = tonConnect.wallet?.address || "";
        if (walletAddress) {
            SendMessage("TonWalletBridge", "OnWalletConnected", walletAddress);
        }
    } catch (error) {
        console.error("Initialization error:", error);
    }
}

window.addEventListener('load', initializeTonConnect);
