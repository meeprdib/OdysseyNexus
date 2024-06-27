StartupEvents.registry('block', event => {
    event.create('ruined_controller')
    .displayName('Ruined Controller')
    .soundType('metal')
    .hardness(5)
    .resistance(5)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(true),

    event.create('silicon_casing')
    .displayName('Silicon Casing')
    .soundType('stone')
    .hardness(5)
    .resistance(5)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(false)
})