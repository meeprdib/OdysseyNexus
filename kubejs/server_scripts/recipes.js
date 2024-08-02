
// Removing recipes

// Misc

ServerEvents.recipes(event => {
    event.remove({
        output: [
            '@gateways',
            // '@industrialforegoing',
            '#vintagedelight:salt_lamp',
            'alexscaves:nuclear_bomb',
            'alexscaves:nuclear_furnace_component',
            'apotheosis:augmenting_table',
            'apotheosis:reforging_table',
            'apotheosis:sigil_of_socketing',
            'apotheosis:simple_reforging_table',
            'cataclysm:ignitium_upgrade_smithing_template',
            'minecraft:enchanted_golden_apple',
            'quark:chorus_fruit_block',
            'ends_delight:end_stone_knife',
            'ends_delight:purpur_knife',
            'spelunkery:sulfur_block',
            'vintagedelight:cheese_burger',
            'vintagedelight:deluxe_burger',
            'vintagedelight:salt_bucket',
        ]
    })
})

// ISS

ServerEvents.recipes(event => {
    event.remove({
        output: [
            'irons_spellbooks:arcane_salvage',
            'irons_spellbooks:blood_upgrade_orb',
            'irons_spellbooks:ender_upgrade_orb',
            'irons_spellbooks:evocation_upgrade_orb',
            'irons_spellbooks:fire_upgrade_orb',
            'irons_spellbooks:holy_upgrade_orb',
            'irons_spellbooks:ice_upgrade_orb',
            'irons_spellbooks:lightning_upgrade_orb',
            'irons_spellbooks:nature_upgrade_orb',
            'irons_spellbooks:upgrade_orb',
        ]
    })
})

// Storage Drawers

ServerEvents.recipes(event => {
    event.remove({
        output: [
            ['storagedrawers:controller_slave', 'storagedrawers:controller', 'storagedrawers:compacting_drawers_3'],
            ['storagedrawers:obsidian_storage_upgrade', 'storagedrawers:iron_storage_upgrade', 'storagedrawers:gold_storage_upgrade', 'storagedrawers:emerald_storage_upgrade', 'storagedrawers:upgrade_template', 'storagedrawers:diamond_storage_upgrade', 'storagedrawers:one_stack_upgrade'],
            ['storagedrawers:redstone_upgrade', 'storagedrawers:min_redstone_upgrade', 'storagedrawers:max_redstone_upgrade', 'storagedrawers:fill_level_upgrade'],
            'storagedrawers:drawer_key',
            'storagedrawers:illumination_upgrade',
            'storagedrawers:void_upgrade',
        ]
    })
})

// Sophisticated Backpacks

ServerEvents.recipes(event => {
    event.remove({
        output: [
            'sophisticatedbackpacks:advanced_compacting_upgrade',
            'sophisticatedbackpacks:advanced_deposit_upgrade',
            'sophisticatedbackpacks:advanced_feeding_upgrade',
            'sophisticatedbackpacks:advanced_filter_upgrade',
            'sophisticatedbackpacks:advanced_magnet_upgrade',
            'sophisticatedbackpacks:advanced_pickup_upgrade',
            'sophisticatedbackpacks:advanced_pump_upgrade',
            'sophisticatedbackpacks:advanced_refill_upgrade',
            'sophisticatedbackpacks:advanced_restock_upgrade',
            'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
            'sophisticatedbackpacks:advanced_void_upgrade',
            'sophisticatedbackpacks:anvil_upgrade',
            'sophisticatedbackpacks:auto_blasting_upgrade',
            'sophisticatedbackpacks:auto_smelting_upgrade',
            'sophisticatedbackpacks:auto_smoking_upgrade',
            'sophisticatedbackpacks:backpack',
            'sophisticatedbackpacks:battery_upgrade',
            'sophisticatedbackpacks:blasting_upgrade',
            'sophisticatedbackpacks:compacting_upgrade',
            'sophisticatedbackpacks:copper_backpack',
            'sophisticatedbackpacks:crafting_upgrade',
            'sophisticatedbackpacks:deposit_upgrade',
            'sophisticatedbackpacks:diamond_backpack',
            'sophisticatedbackpacks:everlasting_upgrade',
            'sophisticatedbackpacks:feeding_upgrade',
            'sophisticatedbackpacks:filter_upgrade',
            'sophisticatedbackpacks:gold_backpack',
            'sophisticatedbackpacks:inception_upgrade',
            'sophisticatedbackpacks:iron_backpack',
            'sophisticatedbackpacks:jukebox_upgrade',
            'sophisticatedbackpacks:magnet_upgrade',
            'sophisticatedbackpacks:netherite_backpack',
            'sophisticatedbackpacks:netherite_backpack',
            'sophisticatedbackpacks:pickup_upgrade',
            'sophisticatedbackpacks:pump_upgrade',
            'sophisticatedbackpacks:refill_upgrade',
            'sophisticatedbackpacks:restock_upgrade',
            'sophisticatedbackpacks:smelting_upgrade',
            'sophisticatedbackpacks:smoking_upgrade',
            'sophisticatedbackpacks:stack_upgrade_starter_tier',
            'sophisticatedbackpacks:stack_upgrade_tier_1',
            'sophisticatedbackpacks:stack_upgrade_tier_2',
            'sophisticatedbackpacks:stack_upgrade_tier_3',
            'sophisticatedbackpacks:stack_upgrade_tier_4',
            'sophisticatedbackpacks:stonecutter_upgrade',
            'sophisticatedbackpacks:tank_upgrade',
            'sophisticatedbackpacks:tool_swapper_upgrade',
            'sophisticatedbackpacks:void_upgrade',
            'sophisticatedbackpacks:xp_pump_upgrade',
        ]
    })
})

// Create

ServerEvents.recipes(event => {
    event.remove({
        output: [
            'create:cart_assembler',
            'create_dd:kinetic_motor',
            'create_power_loader:andesite_chunk_loader',
            'create_power_loader:empty_andesite_chunk_loader',
            'createaddition:capacitor',
            'createaddition:modular_accumulator',
            'createdeco:industrial_iron_nugget',
            'createutilities:void_battery',
            'createutilities:void_chest',
            'createutilities:void_motor',
            'createutilities:void_steel_ingot',
            'createutilities:void_tank',
            'vintageimprovements:concave_curving_head',
            'vintageimprovements:convex_curving_head',
            'vintageimprovements:curving_press',
            'vintageimprovements:grinder_belt',
            'vintageimprovements:grinder_belt',
            'vintageimprovements:spring_coiling_machine',
            'vintageimprovements:v_shaped_curving_head',
            'vintageimprovements:vacuum_chamber',
            'vintageimprovements:w_shaped_curving_head',
            '#vintageimprovements:small_springs',
            '#vintageimprovements:springs',
            'createaddition:copper_spool',
            'createaddition:gold_spool',
            'createaddition:festive_spool'
        ]
    })
})

ServerEvents.recipes(event => {
    event.remove({ type: 'vintageimprovements:pressurizing' })
    event.remove({ type: 'vintageimprovements:vacuumizing' })
    event.remove({ type: 'vintageimprovements:coiling' })
    event.remove({ type: 'vintageimprovements:hammering' })
    event.remove({ type: 'create_dd:seething' })
})

// Misc and Ore Processing

ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:lodestone' })
    event.remove({ id: 'spelunkery:copper_ore_blasting' })
    event.remove({ id: 'spelunkery:copper_ore_smelting' })
    event.remove({ id: 'spelunkery:diamond_ore_blasting' })
    event.remove({ id: 'spelunkery:emerald_ore_smelting' })
    event.remove({ id: 'spelunkery:gold_ore_blasting' })
    event.remove({ id: 'spelunkery:gold_ore_smelting' })
    event.remove({ id: 'spelunkery:iron_ore_blasting' })
    event.remove({ id: 'spelunkery:iron_ore_smelting' })
    event.remove({ id: 'spelunkery:redstone_ore_blasting' })
    event.remove({ id: 'spelunkery:redstone_ore_smelting' })
    event.remove({ id: 'spelunkery:zinc_ore_blasting' })
    event.remove({ id: 'spelunkery:zinc_ore_smelting' })
    event.remove({ id: 'vintagedelight:salt_bucket_to_salt' })
    event.remove({ id: 'autumnity:sappy_maple_log_from_sap_bottle'})
    event.remove({ id: 'autumnity:sappy_maple_wood_from_sap_bottle'})
})

ServerEvents.recipes(event => {
    event.remove({
        type: 'create:crushing', output: [
            'create:crushed_raw_copper',
            'create:crushed_raw_gold',
            'create:crushed_raw_iron',
            'create:crushed_raw_silver',
            'create:crushed_raw_zinc',
            'minecraft:coal',
            'minecraft:lapis_lazuli',
            'minecraft:redstone',
            'spelunkery:rough_cinnabar',
            'spelunkery:rough_diamond_shard',
            'spelunkery:rough_diamond',
            'spelunkery:rough_emerald',
            'spelunkery:rough_lazurite',
        ]
    })
})
ServerEvents.recipes(event => {
    event.remove({ not: { output: ['ae2:dark_monitor', 'ae2:semi_dark_monitor', 'ae2:monitor', 'ae2:inverted_toggle_bus', 'ae2:quantum_entangled_singularity', 'ae2:ender_dust', 'ae2:fluix_dust', 'ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal', 'ae2:crafting_monitor', 'ae2:16k_crafting_storage', 'ae2:quartz_fixture', 'ae2:light_p2p_tunnel', 'ae2:fe_p2p_tunnel', 'ae2:fluid_p2p_tunnel', 'ae2:item_p2p_tunnel', 'ae2:redstone_p2p_tunnel', 'ae2:cable_energy_acceptor', 'ae2:cable_interface', 'ae2:cable_pattern_provider', 'ae2:cut_quartz_slab', 'ae2:smooth_quartz_slab', 'ae2:quartz_brick_slab', 'ae2:chiseled_quartz_slab', 'ae2:quartz_pillar_slab', 'ae2:flawless_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:damaged_budding_quartz', 'ae2:small_quartz_bud', 'ae2:medium_quartz_bud', 'ae2:large_quartz_bud', 'ae2:quartz_cluster', 'ae2:quartz_block', 'ae2:cut_quartz_block', 'ae2:smooth_quartz_block', 'ae2:quartz_bricks', 'ae2:quartz_pillar', 'ae2:chiseled_quartz_block', 'ae2:quartz_stairs', 'ae2:cut_quartz_stairs', 'ae2:smooth_quartz_stairs', 'ae2:quartz_brick_stairs', 'ae2:chiseled_quartz_stairs', 'ae2:quartz_pillar_stairs', 'ae2:quartz_wall', 'ae2:cut_quartz_wall', 'ae2:smooth_quartz_wall', 'ae2:quartz_brick_wall', 'ae2:chiseled_quartz_wall', 'ae2:quartz_pillar_wall', 'ae2:quartz_slab', 'ae2:fluix_block', 'ae2:fluix_stairs', 'ae2:fluix_wall', 'ae2:fluix_slab', 'ae2:fluix_smart_dense_cable'] }, mod: 'ae2' })
    // event.remove({ not: { output: ['vintageimprovements:belt_grinder'] }, mod: 'vintageimprovements' })
    console.log('Not-recipes done!')
})

ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'createaddition:capacitor' },
        'createaddition:capacitor',
        'create:electron_tube')
    event.replaceInput(
        { input: 'createaddition:copper_spool' },
        'createaddition:copper_spool',
        'createaddition:electrum_spool')
    event.replaceInput(
        { input: 'createaddition:gold_spool' },
        'createaddition:gold_spool',
        'createaddition:electrum_spool')
    console.log('Item replacement recipes finished!')
})

// Adding recipes

ServerEvents.recipes(event => {

    // Misc

    event.shaped('minecraft:bundle', [
        'SLS',
        'L L',
        'LLL'
    ], {
        S: 'minecraft:string',
        L: '#on:leather'
    })

    event.smelting('create:andesite_alloy', 'kubejs:mycelial_blend')

    event.shapeless('2x kubejs:mycelial_blend', ['kubejs:mushroom_paste', 'supplementaries:flax', 'kubejs:mushroom_paste', 'supplementaries:flax'])
    event.recipes.farmersdelight.cutting('#on:small_mushroom', '#forge:tools/knives', ['kubejs:mushroom_paste'])
    event.recipes.farmersdelight.cutting('#on:big_mushroom', '#forge:tools/knives', ['4x kubejs:mushroom_paste'])

    event.recipes.farmersdelight.cooking(
	    ['#on:chorus', 'minecraft:honey_bottle', 'minecraft:kelp', '#forge:sugar'],
	    'kubejs:chorus_gummy',
	    30,
	    10,
	)

    event.recipes.farmersdelight.cooking(
	    ['#forge:vegetables/spicy', 'minecraft:honey_bottle', 'minecraft:kelp', '#forge:sugar'],
	    'kubejs:spicy_gummy',
	    30,
	    10,
	)

    // AE2

    event.smelting('ae2:silicon', '#ae2:all_quartz')
    event.recipes.create.pressing('kubejs:silicon_sheet', 'ae2:silicon')
    event.recipes.create.pressing('kubejs:certus_quartz_sheet', 'kubejs:polished_certus_quartz')
    event.recipes.create.pressing('kubejs:fluix_sheet', 'kubejs:polished_fluix')
    event.recipes.create.sandpaper_polishing('kubejs:polished_fluix', '#forge:gems/fluix')
    event.recipes.create.sandpaper_polishing('kubejs:polished_certus_quartz', 'ae2:charged_certus_quartz_crystal')
    event.shapeless('ae2:network_tool', ['minecraft:stick', 'create_dd:kinetic_mechanism'])
    event.recipes.create.item_application('kubejs:silicon_casing', ['minecraft:quartz_block', 'kubejs:silicon_sheet'])
    event.recipes.create.item_application('ae2:quantum_link', ['#forge:glass', 'kubejs:chorus_gummy'])
    event.recipes.create.item_application('ae2:molecular_assembler', ['#forge:glass', 'kubejs:silicon_sheet'])


    event.recipes.create.mixing('ae2:fluix_crystal', [
        Fluid.water(250),
        '8x #on:red_stuff',
        'ae2:charged_certus_quartz_crystal'
    ]).heated()
    
    event.shaped('ae2:item_cell_housing', [
        'SSS',
        'I I',
        'SSS'
    ], {
        S: 'kubejs:silicon_sheet',
        I: 'ae2:silicon'
    })

    event.shaped('ae2:fluid_cell_housing', [
        'CCC',
        'O O',
        'CCC'
    ], {
        C: 'create:copper_sheet',
        O: 'minecraft:copper_ingot'
    })

    event.shaped('ae2:blank_pattern', [
        'III',
        'C C',
        'III'
    ], {
        I: 'create:iron_sheet',
        C: 'ae2:charged_certus_quartz_crystal'
    })

    event.shaped('ae2:controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:polished_fluix',
        B: 'kubejs:computational_mechanism',
        C: 'kubejs:silicon_casing'
    })

    event.recipes.create.sequenced_assembly([
        ('kubejs:computational_mechanism')
    ], 'kubejs:silicon_sheet', [
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'kubejs:polished_certus_quartz']),
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'kubejs:polished_fluix']),
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'create_dd:integrated_circuit']),
		event.recipes.createPressing('kubejs:incomplete_computational_mechanism','kubejs:incomplete_computational_mechanism'),
    ]).transitionalItem('kubejs:incomplete_computational_mechanism').loops(3)

    event.recipes.create.mechanical_crafting('8x ae2:quantum_ring', [
    'ACBCA',
    'C   C',
    'B   B',
    'C   C',
    'ACBCA'
    ], {
        A: 'kubejs:computational_mechanism',
        B: 'create_dd:abstruse_mechanism',
        C: 'ae2:spatial_pylon',
    })

    event.recipes.create.mechanical_crafting('ae2:spatial_anchor', [
        ' BBB ',
        'BCACB',
        'BAEAB',
        'BCACB',
        ' BBB '
        ], {
            A: 'kubejs:computational_mechanism',
            B: 'ae2:spatial_pylon',
            C: 'create_dd:integrated_circuit',
            E: 'createutilities:void_casing'
        })

event.shaped('ae2:dense_energy_cell', [
    'ABA',
    'BCB',
    'ABA'
], {
    A: 'ae2:fluix_block',
    B: 'kubejs:fluix_sheet',
    C: 'createaddition:modular_accumulator'
})

event.shaped('ae2:wireless_booster', [
    'A',
    'B',
    'C'
], {
    A: 'createutilities:void_steel_sheet',
    B: 'kubejs:computational_mechanism',
    C: '#forge:plates/iron'
})

event.shaped('ae2:export_bus', [
    ' A ',
    'BCB',
    ' D '
], {
    A: 'create:chute',
    B: '#forge:wires/copper',
    C: 'ae2:silicon',
    D: 'ae2:fluix_smart_cable'
})

event.shaped('ae2:import_bus', [
    ' D ',
    'BCB',
    ' A '
], {
    A: 'create:chute',
    B: '#forge:wires/copper',
    C: 'ae2:silicon',
    D: 'ae2:fluix_smart_cable'
})

event.shaped('ae2:interface', [
    'ABA',
    'CDE',
    'ABA'
], {
    A: 'kubejs:silicon_sheet',
    B: 'create_dd:integrated_circuit',
    C: 'ae2:import_bus',
    D: 'kubejs:silicon_casing',
    E: 'ae2:export_bus'
})

    event.shapeless('ae2:drive', ['#storagedrawers:drawers', 'kubejs:silicon_casing'])
    event.shapeless('ae2:chest', ['#forge:chests', 'kubejs:silicon_casing'])
    event.shapeless('ae2:portable_item_cell_16k', ['ae2:chest', 'ae2:cell_component_16k', 'ae2:dense_energy_cell', 'ae2:item_cell_housing'])
    event.shapeless('ae2:portable_fluid_cell_16k', ['ae2:chest', 'ae2:cell_component_16k', 'ae2:dense_energy_cell', 'ae2:fluid_cell_housing'])
    event.shapeless('ae2:cell_workbench', ['kubejs:silicon_casing', '#forge:workbench'])
    event.shapeless('ae2:spatial_storage_cell_128', ['ae2:item_cell_housing', 'ae2:spatial_cell_component_128'])

    event.shaped('4x ae2:fluix_smart_cable', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create_dd:rubber',
        B: '#forge:wires/copper',
        C: 'ae2:silicon'
    })

    event.shaped('4x ae2:quartz_fiber', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create_dd:rubber',
        B: '#forge:wires/electrum',
        C: 'ae2:silicon'
    })

    event.shaped('ae2:energy_acceptor', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:ingots/electrum',
        B: 'kubejs:silicon_casing'
    })

    event.shaped('ae2:spatial_pylon', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'kubejs:chorus_gummy',
        B: 'ae2:fluix_smart_dense_cable',
        C: 'kubejs:silicon_casing'
    })

    event.shaped('ae2:crafting_unit', [
        'ADA',
        'DCD',
        'ABA'
    ], {
        A: 'kubejs:silicon_sheet',
        B: '#forge:workbench',
        C: 'kubejs:silicon_casing',
        D: 'ae2:fluix_smart_dense_cable'
    })

    event.shaped('ae2:cell_component_16k', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: '#forge:gems/certus_quartz',
        B: 'ae2:silicon'
    })

    event.shaped('ae2:spatial_cell_component_128', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'kubejs:chorus_gummy',
        B: 'ae2:silicon'
    })

    event.shaped('ae2:io_port', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'kubejs:computational_mechanism',
        C: 'ae2:io_port'
    })

    event.shaped('ae2:formation_plane', [
        'AB',
        'CB',
        'AB'
    ], {
        A: 'kubejs:chorus_gummy',
        B: 'ae2:charged_certus_quartz_crystal',
        C: 'ae2:silicon'
    })

    event.shaped('ae2:annihilation_plane', [
        'AB',
        'CB',
        'AB'
    ], {
        A: 'kubejs:spicy_gummy',
        B: 'ae2:charged_certus_quartz_crystal',
        C: 'ae2:silicon'
    })

    event.shaped('ae2:semi_dark_monitor', [
        'AB',
        'CB',
        'AB'
    ], {
        A: '#forge:wires/electrum',
        B: 'minecraft:redstone_lamp',
        C: 'ae2:silicon'
    })
    
    event.shaped('ae2:spatial_io_port', [
        'AAA',
        'ABA',
        'CDC'
    ], {
        A: '#forge:ingots/steel',
        B: 'kubejs:silicon_casing', 
        C: 'kubejs:chorus_gummy', 
        D: '#forge:gems/fluix'
    })

    event.shaped('ae2:color_applicator', [
        'AB ',
        'BB ',
        '  B'
    ], {
        A: '#forge:gems/certus_quartz',
        B: 'minecraft:stick'
    })

    event.shapeless('ae2:cable_anchor', ['#forge:rods/wooden', 'ae2:silicon'])
    event.shapeless('ae2:toggle_bus', ['minecraft:lever', 'ae2:fluix_smart_cable'])
    event.shapeless('ae2:crafting_accelerator', ['ae2:crafting_unit', 'create_dd:integrated_circuit'])
    event.shapeless('ae2:pattern_provider', ['ae2:crafting_unit', 'ae2:blank_pattern'])
    event.shapeless('ae2:memory_card', ['kubejs:silicon_sheet', '#forge:plates/copper'])
    event.shapeless('ae2:crafting_terminal', ['ae2:terminal', '#forge:workbench'])
    event.shapeless('ae2:pattern_encoding_terminal', ['ae2:crafting_terminal', 'ae2:blank_pattern'])
    event.shapeless('ae2:terminal', ['#ae2:illuminated_panel', 'create_dd:integrated_circuit'])
    event.shapeless('ae2:storage_monitor', ['#ae2:illuminated_panel', '#storagedrawers:drawers'])
    event.shapeless('ae2:storage_monitor', ['#ae2:illuminated_panel', '#forge:chests'])
    event.shapeless('ae2:conversion_monitor', ['ae2:storage_monitor', 'kubejs:spicy_gummy', 'kubejs:chorus_gummy'])
    event.shapeless('ae2:pattern_access_terminal', ['#ae2:illuminated_panel', '#ae2:pattern_provider'])
    event.shapeless('ae2:wireless_access_point', ['ae2:fluix_smart_cable', 'createutilities:graviton_tube'])
    event.shapeless('ae2:level_emitter', ['ae2:cable_anchor', 'minecraft:redstone_torch'])
    event.shapeless('ae2:energy_level_emitter', ['ae2:energy_level_emitter', '#forge:gems/fluix'])
    event.shapeless('ae2:wireless_terminal', ['minecraft:stick', 'createutilities:void_steel_sheet', 'ae2:terminal'])
    event.shapeless('ae2:wireless_crafting_terminal', ['minecraft:stick', 'createutilities:void_steel_sheet', 'ae2:crafting_terminal'])
    event.shapeless('ae2:wireless_crafting_terminal', ['minecraft:stick', 'createutilities:void_steel_sheet', 'ae2:terminal', '#forge:workbench'])

    event.stonecutting('ae2:redstone_card', '#on:card')
    event.stonecutting('ae2:capacity_card', '#on:card')
    event.stonecutting('ae2:void_card', '#on:card')
    event.stonecutting('ae2:advanced_card', '#on:card')
    event.stonecutting('ae2:fuzzy_card', '#on:card')
    event.stonecutting('ae2:speed_card', '#on:card')
    event.stonecutting('ae2:inverter_card', '#on:card')
    event.stonecutting('ae2:basic_card', '#on:card')
    event.stonecutting('ae2:equal_distribution_card', '#on:card')
    event.stonecutting('ae2:energy_card', '#on:card')

    // Create + Create Addons

    event.remove({ id: 'create:crafting/materials/andesite_alloy' })
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
    event.remove({ id: 'create:mixing/andesite_alloy' })
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })

    event.recipes.create.sequenced_assembly([
        ('create_dd:integrated_circuit')
    ], 'create:copper_sheet', [
        event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'ae2:silicon']),
        event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'create_dd:bury_blend']),
        event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', '#forge:nuggets/electrum'])
    ]).transitionalItem('create_dd:incomplete_integrated_circuit').loops(5)

    event.recipes.create.sequenced_assembly([
        ('create_dd:abstruse_mechanism')
    ], '#forge:plates/shadow_steel', [
        event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', 'kubejs:polished_fluix']),
        event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', '#forge:ender_pearls']),
        event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', 'createutilities:graviton_tube'])
    ]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(3)

    event.recipes.create.sequenced_assembly([
        ('ae2:advanced_card')
    ], 'kubejs:silicon_sheet', [
        event.recipes.createDeploying('kubejs:incomplete_card', ['kubejs:incomplete_card', 'kubejs:certus_quartz_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_card', ['kubejs:incomplete_card', 'kubejs:fluix_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_card', ['kubejs:incomplete_card', 'create_dd:integrated_circuit']),
    ]).transitionalItem('kubejs:incomplete_card').loops(3)

    event.recipes.create.mixing('4x createutilities:void_steel_ingot', [
        '4x #forge:ingots/steel',
        '2x ae2:ender_dust',
        'cataclysm:void_core'
    ]).superheated()

    event.recipes.create.mixing('4x kubejs:steel_ingot', [
        '4x createdeco:industrial_iron_ingot',
        '#minecraft:coals'
    ]).heated()

    event.shaped('createutilities:void_motor', [
        'A',
        'V',
        'S'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        S: 'create:shaft'
    })

    event.shaped('createutilities:void_chest', [
        'A',
        'V',
        'C'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        C: 'minecraft:chest'
    })

    event.shaped('createutilities:void_tank', [
        'A',
        'V',
        'F'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        F: 'create:fluid_tank'
    })

    event.shaped('createutilities:void_battery', [
        'A',
        'V',
        'M'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        M: 'createaddition:modular_accumulator'
    })

    event.shaped('vintageimprovements:grinder_belt', [
        'DDD',
        'D D',
        'DDD'
    ], {
        D: 'createaddition:diamond_grit_sandpaper'
    })

    event.shaped('4x createaddition:modular_accumulator', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: '#forge:wires/electrum',
        B: '#forge:ingots/electrum',
        C: 'create:electron_tube',
        D: 'create:brass_casing',
        E: '#forge:ingots/brass'
    })

// Storage Drawers

    event.shaped('storagedrawers:compacting_drawers_3', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: '#on:piston',
        C: '#storagedrawers:drawers'
    })

    event.shaped('storagedrawers:controller', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'create_dd:integrated_circuit',
        C: '#storagedrawers:drawers'
    })

    event.shaped('storagedrawers:controller_slave', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'minecraft:comparator',
        C: '#storagedrawers:drawers'
    })

    event.shaped('storagedrawers:diamond_storage_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:gems/certus_quartz',
        B: 'sophisticatedbackpacks:upgrade_base',
    })

    event.shaped('storagedrawers:drawer_key', [
        'AA ',
        ' A ',
        ' A '
    ], {
        A: '#forge:nuggets/gold'
    })

    event.shapeless('storagedrawers:one_stack_upgrade', ['minecraft:flint', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:void_upgrade', ['kubejs:spicy_gummy', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:redstone_upgrade', ['minecraft:redstone', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:min_redstone_upgrade', 'storagedrawers:redstone_upgrade')
    event.shapeless('storagedrawers:max_redstone_upgrade', 'storagedrawers:min_redstone_upgrade')
    event.shapeless('storagedrawers:fill_level_upgrade', 'storagedrawers:min_redstone_upgrade')
    event.shapeless('storagedrawers:redstone_upgrade', 'storagedrawers:fill_level_upgrade')
    event.shapeless('storagedrawers:illumination_upgrade', ['#ae2:p2p_attunements/light_p2p_tunnel', 'sophisticatedbackpacks:upgrade_base'])
    
// Industrial Foregoing

    event.shaped('industrialforegoing:fluid_extractor', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'create:mechanical_pump',
        C: 'kubejs:silicon_casing'
    })

// Ore / material processing

    event.recipes.create.splashing(['9x galosphere:silver_nugget', Item.of('spelunkery:sulfur').withChance(0.75)], 'create:crushed_raw_silver')

    event.recipes.create.crushing(['2x spelunkery:salt', Item.of('spelunkery:salt').withChance(0.5)], 'galosphere:pink_salt_shard')

    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '4x create:crushed_raw_copper'], '#forge:ores/copper')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '4x spelunkery:rough_lazurite'], '#forge:ores/lapis')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x create:crushed_raw_iron'], '#forge:ores/iron')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x create:crushed_raw_silver'], '#forge:ores/silver')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '5x spelunkery:rough_cinnabar'], '#forge:ores/redstone')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x create:crushed_raw_gold'], '#forge:ores/gold')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x create:crushed_raw_zinc'], '#forge:ores/zinc')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x minecraft:coal'], '#forge:ores/coal')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x spelunkery:rough_emerald'], '#forge:ores/emerald')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x spelunkery:rough_diamond'], '#forge:ores/diamond')

    event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), '18x create:crushed_raw_copper'], 'minecraft:raw_copper_block')
    event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), '18x create:crushed_raw_iron'], 'minecraft:raw_iron_block')
    event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), '27x create:crushed_raw_iron'], 'spelunkery:raw_magnetite_block')
    event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), '18x create:crushed_raw_silver'], 'galosphere:raw_silver_block')
    event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), '18x create:crushed_raw_gold'], 'minecraft:raw_gold_block')
    event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), '18x create:crushed_raw_zinc'], 'create:raw_zinc_block')

    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '2x minecraft:redstone'], 'spelunkery:rough_cinnabar')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '2x create:crushed_raw_copper'], 'minecraft:raw_copper')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '2x create:crushed_raw_gold'], 'minecraft:raw_gold')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '2x create:crushed_raw_iron'], 'minecraft:raw_iron')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '3x create:crushed_raw_iron'], 'spelunkery:raw_magnetite')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '2x create:crushed_raw_silver'], 'galosphere:raw_silver')
    event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), '2x create:crushed_raw_zinc'], 'create:raw_zinc')

    event.recipes.create.crushing(['2x minecraft:redstone', Item.of('create:experience_nugget').withChance(0.25)], 'regions_unexplored:pointed_redstone')
    event.recipes.create.crushing(['3x minecraft:redstone'], 'regions_unexplored:raw_redstone_block')
    event.recipes.create.crushing(['minecraft:redstone'], 'regions_unexplored:redstone_bud')
    event.recipes.create.crushing(['2x minecraft:redstone', Item.of('create:experience_nugget').withChance(0.50)], 'regions_unexplored:redstone_bulb')

    console.log('Recipes added!')
})