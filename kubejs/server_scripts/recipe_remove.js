ServerEvents.recipes(event => {
    event.remove({
        output: [
            // '@ae2',
            //'@create_dd',
            '@waystones',
            '@create_mechanical_spawner',
            'alexscaves:nuclear_bomb',
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
            // 'ratatouille:irrigation_tower',
            // 'ratatouille:mechanical_demolder',
            // 'ratatouille:squeeze_basin',
            // 'ratatouille:thresher',
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
            'sophisticatedbackpacks:upgrade_base',
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
            // 'aether:iron_ring',
            event.remove([{ type: 'vintageimprovements:coiling' }]),
            event.remove([{ type: 'vintageimprovements:hammering' }]),
            event.remove([{ type: 'vintageimprovements:pressurizing' }]),
            event.remove([{ type: 'vintageimprovements:vacuumizing' }]),
            console.log('Recipes nuked!')
        ]
    })
})
ServerEvents.recipes(event => {
    // event.remove({ not: { output: ['ae2:flawed_budding_quartz', 'ae2:damaged_budding_quartz', 'ae2:small_quartz_bud', 'ae2:quartz_block', 'ae2:quartz_cluster', 'ae2:large_quartz_bud', 'ae2:medium_quartz_bud', 'ae2:chipped_budding_quartz', 'ae2:flawless_budding_quartz', 'ae2:fluix_slab', 'ae2:chiseled_quartz_wall', 'ae2:smooth_quartz_slab', 'ae2:quartz_brick_slab', 'ae2:cut_quartz_wall', 'ae2:quartz_wall', 'ae2:quartz_stairs', 'ae2:cut_quartz_stairs', 'ae2:smooth_quartz_stairs', 'ae2:fluix_wall', 'ae2:quartz_pillar_stairs', 'ae2:chiseled_quartz_stairs', 'ae2:quartz_brick_stairs', 'ae2:smooth_quartz_wall', 'ae2:quartz_brick_wall', 'ae2:quartz_pillar_wall', 'ae2:quartz_slab', 'ae2:cut_quartz_slab', 'ae2:fluix_stairs', 'ae2:fluix_block', 'ae2:quartz_vibrant_glass', 'ae2:quartz_glass', 'ae2:chiseled_quartz_block', 'ae2:quartz_pillar', 'ae2:quartz_bricks', 'ae2:smooth_quartz_block', 'ae2:cut_quartz_block', 'ae2:quartz_pillar_slab', 'ae2:chiseled_quartz_slab', 'ae2:light_gray_smart_cable', 'ae2:gray_smart_cable', 'ae2:pink_smart_cable', 'ae2:lime_smart_cable', 'ae2:yellow_smart_cable', 'ae2:light_blue_smart_cable', 'ae2:magenta_smart_cable', 'ae2:orange_smart_cable', 'ae2:white_smart_cable', 'ae2:purple_smart_dense_cable', 'ae2:blue_smart_dense_cable', 'ae2:brown_smart_dense_cable', 'ae2:green_smart_dense_cable', 'ae2:red_smart_dense_cable', 'ae2:black_smart_dense_cable', 'ae2:fluix_smart_dense_cable', 'ae2:cyan_smart_dense_cable', 'ae2:light_gray_smart_dense_cable', 'ae2:gray_smart_dense_cable', 'ae2:pink_smart_dense_cable', 'ae2:lime_smart_dense_cable', 'ae2:yellow_smart_dense_cable', 'ae2:light_blue_smart_dense_cable', 'ae2:magenta_smart_dense_cable', 'ae2:orange_smart_dense_cable', 'ae2:cyan_smart_cable', 'ae2:purple_smart_cable', 'ae2:blue_smart_cable', 'ae2:brown_smart_cable', 'ae2:green_smart_cable', 'ae2:red_smart_cable', 'ae2:black_smart_cable', 'ae2:fluix_smart_cable', 'ae2:white_smart_dense_cable'] }, mod: 'ae2' })
    // event.remove({ not: { output: ['vintageimprovements:belt_grinder'] }, mod: 'vintageimprovements' })
    console.log('KubeJS not-recipes done!')
})

ServerEvents.recipes(event => {
event.replaceInput(
    { input: 'createaddition:capacitor' },
    'createaddition:capacitor',
    'create:electron_tube')
    console.log('KubeJS item replacement recipes finished!')
})
