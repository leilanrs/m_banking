const simulateGetAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const success = Math.random() > 0.5
            const success = true
            if (success) {
                resolve(
                    {
                        name: 'Nurleila Rahmawati',
                        balance: '2.000.000',
                        poin: '3000',
                        accountNo: '123445666445'
                    }
                )
            } else {
                reject('Error karena tidak berhasil')
            }
        }, 3000);
    })
}
export default simulateGetAccount