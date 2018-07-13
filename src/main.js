function main() {
    Logger.log(payload.ref)
    Logger.log(`${strftime('%a, %d %b %Y', new Date())}`)
    Logger.log(sendEmail(
        {
            name: "Sender", 
            address: "from@sender.org"
        }, [
            "to@recipient.org"
        ], 
        payload
    ))
}