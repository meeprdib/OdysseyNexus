JEIEvents.hideItems(event => {
  event.hide([
    //'@ae2',
    // '#ae2:covered_cable',
    // '#ae2:covered_dense_cable',
    // '#ae2:glass_cable',
    // '#ae2:lumen_paint_balls',
    // '#ae2:paint_balls',
    // '#ae2:smart_cable',
    // '#ae2:smart_dense_cable',
    // '#ae2:smart_dense_cable',
    // 'ae2:1k_crafting_storage',
    // 'ae2:256k_crafting_storage',
    // 'ae2:4k_crafting_storage',
    // 'ae2:64k_crafting_storage',
    // 'ae2:cell_component_1k',
    // 'ae2:cell_component_256k',
    // 'ae2:cell_component_4k',
    // 'ae2:cell_component_64k',
    // 'ae2:certus_quartz_wrench',
    // 'ae2:charger',
    // 'ae2:crank',
    // 'ae2:dense_energy_cell',
    // 'ae2:energy_cell',
    // 'ae2:facade',
    // 'ae2:fluid_storage_cell_1k',
    // 'ae2:fluid_storage_cell_256k',
    // 'ae2:fluid_storage_cell_4k',
    // 'ae2:fluid_storage_cell_64k',
    // 'ae2:growth_accelerator',
    // 'ae2:inscriber',
    // 'ae2:item_storage_cell_1k',
    // 'ae2:item_storage_cell_256k',
    // 'ae2:item_storage_cell_4k',
    // 'ae2:item_storage_cell_64k',
    // 'ae2:matter_cannon',
    // 'ae2:nether_quartz_wrench',
    // 'ae2:portable_item_cell_1k',
    // 'ae2:portable_item_cell_256k',
    // 'ae2:portable_item_cell_4k',
    // 'ae2:portable_item_cell_64k',
    // 'ae2:printed_calculation_processor',
    // 'ae2:printed_engineering_processor',
    // 'ae2:printed_logic_processor',
    // 'ae2:sky_stone_chest',
    // 'ae2:sky_stone_tank',
    // 'ae2:smooth_sky_stone_chest',
    // 'ae2:spatial_anchor',
    // 'ae2:spatial_cell_component_128',
    // 'ae2:spatial_cell_component_2',
    // 'ae2:spatial_storage_cell_128',
    // 'ae2:spatial_storage_cell_2',
    // 'ae2:vibration_chamber',
    'computercraft:computer_normal',
    'computercraft:monitor_normal',
    'computercraft:pocket_computer_normal',
    'computercraft:pocket_computer_normal',
    'computercraft:turtle_advanced',
    'computercraft:turtle_normal',
    'create_dd:accelerator_motor',
    'create_dd:copycat_block',
    'create_dd:copycat_slab',
    'create_dd:infaandesite',
    'create_dd:infacalcite',
    'create_dd:infacoarse_dirt',
    'create_dd:infacobbled_deepslate',
    'create_dd:infacobblestone',
    'create_dd:infadiorite',
    'create_dd:infadirt',
    'create_dd:infadripstone_block',
    'create_dd:infaend_stone',
    'create_dd:infagranite',
    'create_dd:infagravel',
    'create_dd:infaice',
    'create_dd:infamagma_block',
    'create_dd:infamoss_block',
    'create_dd:infamud',
    'create_dd:infanetherrack',
    'create_dd:infared_sand',
    'create_dd:infasand',
    'create_dd:infasnow_block',
    'create_dd:infasoul_sand',
    'create_dd:infastone',
    'create_dd:infatuff',
    'create_dd:kinetic_motor',
    'create_power_loader:andesite_chunk_loader',
    'create_power_loader:empty_andesite_chunk_loader',
    'ends_delight:end_stone_knife',
    'ends_delight:purpur_knife',
    'iceandfire:armor_copper_metal_boots',
    'iceandfire:armor_copper_metal_chestplate',
    'iceandfire:armor_copper_metal_helmet',
    'iceandfire:armor_copper_metal_leggings',
    'iceandfire:copper_axe',
    'iceandfire:copper_hoe',
    'iceandfire:copper_pickaxe',
    'iceandfire:copper_shovel',
    'iceandfire:copper_sword',
    'vintagedelight:cheese_burger',
    'vintagedelight:deluxe_burger',
    'sophisticatedbackpacks:pickup_upgrade',
    'sophisticatedbackpacks:void_upgrade',
    'sophisticatedbackpacks:restock_upgrade',
    'sophisticatedbackpacks:stack_upgrade_starter_tier',
    'sophisticatedbackpacks:stack_upgrade_tier_1',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_3',
    'sophisticatedbackpacks:magnet_upgrade',
    'sophisticatedbackpacks:advanced_magnet_upgrade',
    'sophisticatedbackpacks:feeding_upgrade',
    'sophisticatedbackpacks:pump_upgrade',
    'sophisticatedbackpacks:upgrade_base',
    'sophisticatedbackpacks:tool_swapper_upgrade',
    'sophisticatedbackpacks:blasting_upgrade',
    'sophisticatedbackpacks:smoking_upgrade',
    'sophisticatedbackpacks:smelting_upgrade',
    'sophisticatedbackpacks:refill_upgrade',
    'sophisticatedbackpacks:compacting_upgrade',
    'sophisticatedbackpacks:filter_upgrade',
    'sophisticatedbackpacks:deposit_upgrade',
    'sophisticatedbackpacks:anvil_upgrade',
    'sophisticatedbackpacks:auto_blasting_upgrade',
    'sophisticatedbackpacks:auto_smoking_upgrade',
    'create:refined_radiance_casing',
    'create:shadow_steel_casing',
    'iceandfire:armor_silver_metal_helmet',
    'iceandfire:armor_silver_metal_chestplate',
    'iceandfire:armor_silver_metal_leggings',
    'iceandfire:armor_silver_metal_boots',
    ['create_dd:hot_chocolate', 'create_dd:tin_ingot', 'create_dd:raw_tin', 'create_dd:tin_sheet', 'create_dd:compound_base', 'create_dd:caramel_milkshake', 'create_dd:glowberry_milkshake', 'create_dd:shimmer_bucket', 'create_dd:diamond_shard', 'create_dd:chocolate_milkshake_bucket', 'create_dd:hot_chocolate_bucket', 'create_dd:furnace_engine', 'create_dd:flywheel', 'create_dd:radiant_drill', 'create_dd:infaobsidian', 'create_dd:coal_piece','create_dd:forest_ravager', 'create_dd:deforester_saw', 'create_dd:chocolate_milkshake', 'create_dd:strawberry_milkshake', 'create_dd:condense_milk_bucket', 'create_dd:cream_bucket', 'create_dd:strawberry_bucket', 'create_dd:vanilla_milkshake', 'create_dd:vanilla_bucket', 'create_dd:strawberry_milkshake_bucket', 'create_dd:vanilla_milkshake_bucket']
    ])
})

JEIEvents.addItems(event => {
  event.add([
  'ae2:fluix_smart_cable',
  'ae2:fluix_smart_dense_cable',
  'ae2:white_paint_ball',
  'ae2:white_lumen_paint_ball',
  '@architects_palette'
  ])
})