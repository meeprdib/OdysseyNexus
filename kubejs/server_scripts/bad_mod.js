    NetworkEvents.dataReceived('optifine_bad', event => {
    event.server.runCommandSilent(`kick ${event.player.username} This modpack contains mods that are incompatible with Optifine. All relevant features that Optifine provides, including performance and shader support are included in this modpack. However, if you feel so inclined to do so, you can disable this kicking script in the modpack files.`)
  })

    NetworkEvents.dataReceived('essential_bad', event => {
    event.server.runCommandSilent(`kick ${event.player.username} This modpack contains mods that replace the features of the Essential mod without microtransactions and world corruption. If you want to play with friends, press pause and click "Open to LAN" to get the e4mc link. However, if you feel so inclined to do so, you can disable this kicking script in the modpack files.`)
  })

    NetworkEvents.dataReceived('tlauncher_bad', event => {
    event.server.runCommandSilent(`kick ${event.player.username} Error Code: Whooky Sack`)
  })

// Ah! You caught me! Yeah, I made some scripts to get rid of some mods I don't like. I guess that makes me a POS.
// I just gotta ask though, if you're here to disable these scripts, why?

// Essential is just scummy and bad, I don't know why you'd willingly use it over the alternatives I've provided in this pack.

// Optifine I can kinda get, maybe you installed another mod that wants it as a dependency or something.
// But there's Optifine feature alternatives out there on CF, why not install those instead?

// As for TLauncher, I get it. Why pay for something when you can just get it for free?
// Just buy Minecraft if it's affordable where you live, it'll save you a lot of trouble.

// I just don't want to deal with bug reports from people who've modified the modpack with things that are known to cause issues.
// If you wanna use this modpack with these mods that I've blacklisted, go ahead. Just don't expect to receive any support from me, or anyone else really.
// There's a reason these are blacklisted, just keep that in mind.