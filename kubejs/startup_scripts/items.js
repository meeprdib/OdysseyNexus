StartupEvents.registry('item', event => {
    event.create('estrogen_burger').displayName('Estrogen Burger').food(food => {
        food
        .hunger(10)
        .saturation(.6)
        .effect('estrogen:estrogen',9600,2,1)
        .alwaysEdible()
    })
    event.create('polished_certus_quartz').displayName('Polished Certus Quartz')
    event.create('certus_quartz_sheet').displayName('Certus Quartz Sheet')
    event.create('polished_fluix').displayName('Polished Fluix')
    event.create('fluix_sheet').displayName('Fluix Sheet')
})