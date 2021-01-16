import Web3 from 'web3';

declare global {
    interface Window {
        ethereum: any;
    }
}

export const connectWeb3 = async (fallback?: any, onError?: Function) => {
    try {
        // @ts-ignore 
        const ethereum = window.ethereum;
        // @ts-ignore 
        let web3 = window.web3;
        if (typeof ethereum !== 'undefined') {
            await ethereum.enable();
            web3 = new Web3(ethereum);
            // web3 = new Web3('HTTP://127.0.0.1:7545');
        } else if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:3000/'));
        }
        if (fallback) fallback(web3)
    } catch {
        if (onError) onError()
    }
}

/**
 * Get current account chain ID's
 * @param callback returns result of account else console.logs an error
 * @TODO Make transactions with multiple accounts
 */
export const getAccounts = async (callback: Function) => {
    await connectWeb3((web3: any) => {
        web3.eth.getAccounts((error: any, result: any) => {
            if (error) {
                console.log('error', error);
            } else {
                callback(result);
            }
        });
    })
}

/**
 * Get current account chain ID's
 * @param fromAddress Sender address
 * @param fromAddressPrivateKey Current logged in user his privateKey
 * @param toAddress Adress you want to send to
 * @param value Value you want to send
 * @param gas minValue - 21000
 */
export const sendTransaction = async (fromAddress: string, fromAddressPrivateKey: any, toAddress: string, value: number, gas: number = 21000, ) => {
    await connectWeb3((web3: any) => {
        // console.log('web3.utils.fromWei', web3.utils.fromWei('27353999999990000', 'ether'))
        // console.log('web3.utils.toWei', web3.utils.toWei('0.02735399999999', 'ether'))

        // Create Transaction
        web3.eth.accounts.signTransaction({
            from: fromAddress,
            to: toAddress,
            value: value,
            gas: gas
        }, fromAddressPrivateKey).then((transaction: any) => {
            console.log('transaction', transaction)
            // Receipt
            web3.eth.sendSignedTransaction(transaction.rawTransaction).then((res: any) => {
                console.log('res', res)
            })
        })
    })

}