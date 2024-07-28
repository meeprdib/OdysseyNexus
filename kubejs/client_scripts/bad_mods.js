ClientEvents.loggedIn(event => {
    if(Platform.isLoaded("optifine")) event.player.sendData('optifine_bad')
    if(Platform.isLoaded("essential")) event.player.sendData('essential_bad')
    if(Platform.isLoaded("tlskincape")) event.player.sendData('tlauncher_bad')
    })