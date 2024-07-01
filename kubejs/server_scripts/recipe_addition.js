ServerEvents.recipes(event => {

    // AE2

    event.smelting('ae2:silicon', '#ae2:all_quartz')
    event.recipes.create.pressing('kubejs:silicon_sheet', 'ae2:silicon')
    event.recipes.create.pressing('kubejs:certus_quartz_sheet', 'kubejs:polished_certus_quartz')
    event.recipes.create.pressing('kubejs:fluix_sheet', 'kubejs:polished_fluix')
    event.recipes.create.sandpaper_polishing('kubejs:polished_fluix', '#forge:gems/fluix')
    event.recipes.create.sandpaper_polishing('kubejs:polished_certus_quartz', '#forge:gems/certus_quartz')
    event.shapeless('ae2:network_tool', ['minecraft:stick', 'create_dd:kinetic_mechanism'])

    // Create DD

    event.recipes.create.sequenced_assembly([
		('create_dd:integrated_circuit')
	], 'create:copper_sheet', [
		event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'ae2:silicon']),
		event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'create_dd:bury_blend']),
		event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'createaddition:electrum_nugget'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5)

    event.recipes.create.sequenced_assembly([
		('create_dd:abstruse_mechanism')
	], '#forge:plates/shadow_steel', [
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', 'kubejs:polished_fluix']),
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', '#forge:ender_pearls']),
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', 'createutilities:graviton_tube'])
	]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(3)


    console.log('KubeJS recipes added!')
})