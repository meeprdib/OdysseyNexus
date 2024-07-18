
// Removing recipes

ServerEvents.recipes(event => {
    event.remove({
        output: [
            // '@ae2',
            // '@create_dd',
            // '@waystones',
            '@create_mechanical_spawner',
            '@gateways',
            'apotheosis:reforging_table',
            'apotheosis:augmenting_table',
            'alexscaves:nuclear_bomb',
            'alexscaves:nuclear_furnace_component',
            'apotheosis:sigil_of_socketing',
            'apotheosis:simple_reforging_table',
            'cataclysm:ignitium_upgrade_smithing_template',
            'create_power_loader:andesite_chunk_loader',
            'create_power_loader:empty_andesite_chunk_loader',
            'createaddition:capacitor',
            'createdeco:industrial_iron_nugget',
            'createutilities:void_battery',
            'createutilities:void_chest',
            'createutilities:void_motor',
            'createutilities:void_steel_ingot',
            'createutilities:void_tank',
            'ends_delight:end_stone_knife',
            'ends_delight:purpur_knife',
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
            'minecraft:enchanted_golden_apple',
            'quark:chorus_fruit_block',
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
            // 'sophisticatedbackpacks:upgrade_base',
            'sophisticatedbackpacks:void_upgrade',
            'sophisticatedbackpacks:xp_pump_upgrade',
            'spelunkery:sulfur_block',
            'vintagedelight:cheese_burger',
            'vintagedelight:deluxe_burger',
            'vintagedelight:salt_bucket',
            'vintageimprovements:concave_curving_head',
            'vintageimprovements:convex_curving_head',
            'vintageimprovements:curving_press',
            'vintageimprovements:grinder_belt',
            'vintageimprovements:grinder_belt',
            'vintageimprovements:spring_coiling_machine',
            'vintageimprovements:v_shaped_curving_head',
            'vintageimprovements:vacuum_chamber',
            'vintageimprovements:w_shaped_curving_head',
            'create_dd:kinetic_motor',
            ['storagedrawers:redstone_upgrade', 'storagedrawers:min_redstone_upgrade', 'storagedrawers:max_redstone_upgrade', 'storagedrawers:fill_level_upgrade'],
            ['storagedrawers:obsidian_storage_upgrade', 'storagedrawers:iron_storage_upgrade', 'storagedrawers:gold_storage_upgrade', 'storagedrawers:emerald_storage_upgrade', 'storagedrawers:upgrade_template', 'storagedrawers:diamond_storage_upgrade', 'storagedrawers:one_stack_upgrade'],
            // 'aether:iron_ring',
            // 'iceandfire:armor_copper_metal_boots',
            // 'iceandfire:armor_copper_metal_chestplate',
            // 'iceandfire:armor_copper_metal_helmet',
            // 'iceandfire:armor_copper_metal_leggings',
            // 'iceandfire:armor_silver_metal_boots',
            // 'iceandfire:armor_silver_metal_chestplate',
            // 'iceandfire:armor_silver_metal_helmet',
            // 'iceandfire:armor_silver_metal_leggings',
            // 'iceandfire:copper_axe',
            // 'iceandfire:copper_hoe',
            // 'iceandfire:copper_pickaxe',
            // 'iceandfire:copper_shovel',
            // 'iceandfire:copper_sword',
            // 'iceandfire:dragonforge_fire_core_disabled',
            // 'iceandfire:dragonforge_fire_core',
            // 'iceandfire:dragonforge_ice_core_disabled',
            // 'iceandfire:dragonforge_ice_core',
            // 'iceandfire:dragonforge_lightning_core_disabled',
            // 'iceandfire:dragonforge_lightning_core',
            // 'ratatouille:irrigation_tower',
            // 'ratatouille:mechanical_demolder',
            // 'ratatouille:squeeze_basin',
            // 'ratatouille:thresher',
            '#vintagedelight:salt_lamp',
            ['storagedrawers:controller_slave', 'storagedrawers:controller', 'storagedrawers:compacting_drawers_3'],
            'storagedrawers:illumination_upgrade',
            'storagedrawers:drawer_key',
            'storagedrawers:void_upgrade',
            event.remove([{ type: 'vintageimprovements:coiling'}]),
            event.remove([{ type: 'vintageimprovements:hammering'}]),
            event.remove([{ type: 'vintageimprovements:pressurizing'}]),
            event.remove([{ type: 'vintageimprovements:vacuumizing'}]),
            event.remove([{ type: 'create_dd:seething'}]),
            event.remove([{ type: 'create:crushing', output: 'create:crushed_raw_copper'}]),
            event.remove([{ type: 'create:crushing', output: 'create:crushed_raw_gold'}]),
            event.remove([{ type: 'create:crushing', output: 'create:crushed_raw_iron'}]),
            event.remove([{ type: 'create:crushing', output: 'create:crushed_raw_silver'}]),
            event.remove([{ type: 'create:crushing', output: 'create:crushed_raw_zinc'}]),
            event.remove([{ type: 'create:crushing', output: 'minecraft:lapis_lazuli'}]),
            event.remove([{ type: 'create:crushing', output: 'minecraft:redstone'}]),
            event.remove([{ type: 'create:crushing', output: 'minecraft:coal'}]),
            event.remove([{ type: 'create:crushing', output: 'spelunkery:rough_cinnabar'}]),
            event.remove([{ type: 'create:crushing', output: 'spelunkery:rough_diamond_shard'}]),
            event.remove([{ type: 'create:crushing', output: 'spelunkery:rough_diamond'}]),
            event.remove([{ type: 'create:crushing', output: 'spelunkery:rough_emerald'}]),
            event.remove([{ type: 'create:crushing', output: 'spelunkery:rough_lazurite'}]),
            event.remove([{ output: '#vintageimprovements:springs'}]),
            event.remove([{ output: '#vintageimprovements:small_springs'}]),
            event.remove({id: 'minecraft:lodestone'}),
            event.remove({id: 'spelunkery:copper_ore_blasting'}),
            event.remove({id: 'spelunkery:copper_ore_smelting'}),
            event.remove({id: 'spelunkery:diamond_ore_blasting'}),
            event.remove({id: 'spelunkery:diamond_ore_smelting'}),
            event.remove({id: 'spelunkery:emerald_ore_blasting'}),
            event.remove({id: 'spelunkery:emerald_ore_smelting'}),
            event.remove({id: 'spelunkery:gold_ore_blasting'}),
            event.remove({id: 'spelunkery:gold_ore_smelting'}),
            event.remove({id: 'spelunkery:iron_ore_blasting'}),
            event.remove({id: 'spelunkery:iron_ore_smelting'}),
            event.remove({id: 'spelunkery:redstone_ore_blasting'}),
            event.remove({id: 'spelunkery:redstone_ore_smelting'}),
            event.remove({id: 'spelunkery:zinc_ore_blasting'}),
            event.remove({id: 'spelunkery:zinc_ore_smelting'}),
            event.remove({id: 'vintagedelight:salt_bucket_to_salt'}),
            ['createaddition:copper_spool', 'createaddition:gold_spool', 'createaddition:festive_spool'],
            'ae2:portable_item_cell_16k',
            console.log('Recipes nuked!')
        ]
    })
})
ServerEvents.recipes(event => {
    // event.remove({ not: { output: ['ae2:flawed_budding_quartz', 'ae2:damaged_budding_quartz', 'ae2:small_quartz_bud', 'ae2:quartz_block', 'ae2:quartz_cluster', 'ae2:large_quartz_bud', 'ae2:medium_quartz_bud', 'ae2:chipped_budding_quartz', 'ae2:flawless_budding_quartz', 'ae2:fluix_slab', 'ae2:chiseled_quartz_wall', 'ae2:smooth_quartz_slab', 'ae2:quartz_brick_slab', 'ae2:cut_quartz_wall', 'ae2:quartz_wall', 'ae2:quartz_stairs', 'ae2:cut_quartz_stairs', 'ae2:smooth_quartz_stairs', 'ae2:fluix_wall', 'ae2:quartz_pillar_stairs', 'ae2:chiseled_quartz_stairs', 'ae2:quartz_brick_stairs', 'ae2:smooth_quartz_wall', 'ae2:quartz_brick_wall', 'ae2:quartz_pillar_wall', 'ae2:quartz_slab', 'ae2:cut_quartz_slab', 'ae2:fluix_stairs', 'ae2:fluix_block', 'ae2:quartz_vibrant_glass', 'ae2:quartz_glass', 'ae2:chiseled_quartz_block', 'ae2:quartz_pillar', 'ae2:quartz_bricks', 'ae2:smooth_quartz_block', 'ae2:cut_quartz_block', 'ae2:quartz_pillar_slab', 'ae2:chiseled_quartz_slab', 'ae2:light_gray_smart_cable', 'ae2:gray_smart_cable', 'ae2:pink_smart_cable', 'ae2:lime_smart_cable', 'ae2:yellow_smart_cable', 'ae2:light_blue_smart_cable', 'ae2:magenta_smart_cable', 'ae2:orange_smart_cable', 'ae2:white_smart_cable', 'ae2:purple_smart_dense_cable', 'ae2:blue_smart_dense_cable', 'ae2:brown_smart_dense_cable', 'ae2:green_smart_dense_cable', 'ae2:red_smart_dense_cable', 'ae2:black_smart_dense_cable', 'ae2:fluix_smart_dense_cable', 'ae2:cyan_smart_dense_cable', 'ae2:light_gray_smart_dense_cable', 'ae2:gray_smart_dense_cable', 'ae2:pink_smart_dense_cable', 'ae2:lime_smart_dense_cable', 'ae2:yellow_smart_dense_cable', 'ae2:light_blue_smart_dense_cable', 'ae2:magenta_smart_dense_cable', 'ae2:orange_smart_dense_cable', 'ae2:cyan_smart_cable', 'ae2:purple_smart_cable', 'ae2:blue_smart_cable', 'ae2:brown_smart_cable', 'ae2:green_smart_cable', 'ae2:red_smart_cable', 'ae2:black_smart_cable', 'ae2:fluix_smart_cable', 'ae2:white_smart_dense_cable'] }, mod: 'ae2' })
    // event.remove({ not: { output: ['vintageimprovements:belt_grinder'] }, mod: 'vintageimprovements' })
    console.log('Not-recipes done!')
})

ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'createaddition:capacitor' },
        'createaddition:capacitor',
        'create:electron_tube')
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
	    ['#forge:fruits/chorus', 'minecraft:honey_bottle', 'minecraft:kelp', '#forge:sugar'],
	    'kubejs:chorus_gummy',
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
    event.recipes.create.item_application('ae2:quantum_link', ['#forge:glass', 'ae2:fluix_crystal'])


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

    event.shapeless('ae2:basic_card', ['kubejs:silicon_sheet', 'kubejs:certus_quartz_sheet'])

    event.recipes.create.sequenced_assembly([
        ('kubejs:computational_mechanism')
    ], 'kubejs:silicon_sheet', [
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'kubejs:polished_certus_quartz']),
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'kubejs:polished_fluix']),
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'create_dd:integrated_circuit']),
		event.recipes.createPressing('kubejs:incomplete_computational_mechanism','kubejs:incomplete_computational_mechanism'),
    ]).transitionalItem('kubejs:incomplete_computational_mechanism').loops(3)

    event.recipes.create.mechanical_crafting('8x ae2:quantum_ring', [
    'ABA',
    'C C',
    'DED'
    ], {
        A: 'kubejs:computational_mechanism',
        B: 'create_dd:abstruse_mechanism',
        C: 'kubejs:fluix_sheet',
        D:  'minecraft:diamond_block',
        E: 'kubejs:silicon_casing'
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

    event.shapeless('ae2:drive', ['#storagedrawers:drawers', 'kubejs:silicon_casing'])
    event.shapeless('ae2:chest', ['#forge:chests', 'kubejs:silicon_casing'])
    event.shapeless('ae2:portable_item_cell_16k', ['ae2:chest', 'ae2:cell_component_16k', 'createaddition:modular_accumulator', 'ae2:item_cell_housing'])
    event.shapeless('ae2:portable_fluid_cell_16k', ['ae2:chest', 'ae2:cell_component_16k', 'createaddition:modular_accumulator', 'ae2:fluid_cell_housing'])
    event.shapeless('ae2:cell_workbench', ['kubejs:silicon_casing', '#forge:workbench'])

    event.shaped('6x ae2:fluix_smart_cable', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'kubejs:silicon_sheet',
        B: 'ae2:quartz_fiber'
    })

    event.shaped('12x ae2:quartz_fiber', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: '#forge:plates/electrum',
        B: 'minecraft:redstone'
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
        A: 'kubejs:polished_fluix',
        B: 'ae2:fluix_smart_dense_cable',
        C: 'kubejs:silicon_casing'
    })

    event.shaped('ae2:crafting_unit', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:silicon_sheet',
        B: '#forge:workbench',
        C: 'kubejs:silicon_casing'
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
        A: '#forge:gems/fluix',
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

    event.shapeless('ae2:cable_anchor', ['#forge:rods/wooden', 'ae2:silicon'])
    event.shapeless('ae2:toggle_bus', ['minecraft:lever', 'ae2:fluix_smart_cable'])
    event.shapeless('ae2:crafting_accelerator', ['ae2:crafting_unit', 'create_dd:integrated_circuit'])
    event.shapeless('ae2:pattern_provider', ['ae2:crafting_unit', 'ae2:blank_pattern'])
    event.shapeless('ae2:memory_card', ['kubejs:silicon_sheet', '#forge:plates/electrum'])

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
    ]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(4)

    event.recipes.create.mixing('4x createutilities:void_steel_ingot', [
        '4x #forge:ingots/steel',
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
        'ABA',
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
    event.shapeless('4x storagedrawers:void_upgrade', ['createutilities:void_steel_ingot', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:redstone_upgrade', ['minecraft:redstone', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:min_redstone_upgrade', 'storagedrawers:redstone_upgrade')
    event.shapeless('storagedrawers:max_redstone_upgrade', 'storagedrawers:min_redstone_upgrade')
    event.shapeless('storagedrawers:fill_level_upgrade', 'storagedrawers:min_redstone_upgrade')
    event.shapeless('storagedrawers:redstone_upgrade', 'storagedrawers:fill_level_upgrade')
    event.shapeless('storagedrawers:illumination_upgrade', ['#ae2:p2p_attunements/light_p2p_tunnel', 'sophisticatedbackpacks:upgrade_base'])
    

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

