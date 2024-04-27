// Adding or creating tags to give to items / materials
ServerEvents.tags('item', event => {
    event.add('forge:ingots/industrial_iron', 'createdeco:industrial_iron_ingot')
    event.add('forge:ingots/bronze', 'create_dd:bronze_ingot')
    event.add('forge:plates/industrial_iron', 'createdeco:industrial_iron_sheet')
    event.add('forge:dough', 'minecolonies:bread_dough')
    event.add('forge:raw_fishes', 'aquaculture:fish_fillet_raw')
    event.add('forge:cooked_fishes', 'aquaculture:fish_fillet_cooked')
    event.add('forge:salt', 'spelunkery:salt')
    event.add('forge:dusts/sulfur', 'spelunkery:sulfur')

    event.add('odysseynexus:netherite_tier_helmet', 'minecraft:netherite_helmet', 'deep_aether:stratus_helmet', 'aether:obsidian_helmet')
    event.add('odysseynexus:netherite_tier_chestplate', 'minecraft:netherite_chestplate', 'deep_aether:stratus_chestplate', 'aether:obsidian_chestplate')
    event.add('odysseynexus:netherite_tier_leggings', 'minecraft:netherite_leggings', 'deep_aether:stratus_leggings', 'aether:obsidian_leggings')
    event.add('odysseynexus:netherite_tier_boots', 'minecraft:netherite_boots', 'deep_aether:stratus_boots', 'aether:obsidian_boots')
    
    event.add('odysseynexus:diamond_tier_helmet', 'minecraft:diamond_helmet', 'twilightforest:steeleaf_helmet', 'twilightforest:knightmetal_helmet', 'aether:valkyrie_helmet', 'aether:phoenix_helmet', 'deep_aether:skyjade_helmet', 'aether:gravitite_helmet', 'undergarden:utherium_helmet', 'twilightforest:yeti_helmet', 'blue_skies:charoite_helmet', 'outer_end:cobalt_crystal_helmet', 'outer_end:mint_crystal_helmet', 'outer_end:rose_crystal_helmet')
    event.add('odysseynexus:diamond_tier_chestplate', 'minecraft:diamond_chestplate', 'twilightforest:yeti_chestplate', 'undergarden:utherium_chestplate', 'aether:gravitite_chestplate', 'deep_aether:skyjade_chestplate', 'aether:phoenix_chestplate', 'aether:valkyrie_chestplate', 'twilightforest:knightmetal_chestplate', 'twilightforest:steeleaf_chestplate', 'blue_skies:charoite_chestplate', 'outer_end:mint_crystal_chestplate', 'outer_end:cobalt_crystal_chestplate', 'outer_end:rose_crystal_chestplate')
    event.add('odysseynexus:diamond_tier_leggings', 'twilightforest:yeti_leggings', 'undergarden:utherium_leggings', 'aether:gravitite_leggings', 'deep_aether:skyjade_leggings', 'aether:phoenix_leggings', 'aether:valkyrie_leggings', 'twilightforest:knightmetal_leggings', 'twilightforest:steeleaf_leggings', 'blue_skies:charoite_leggings', 'outer_end:rose_crystal_leggings', 'outer_end:mint_crystal_leggings', 'outer_end:cobalt_crystal_leggings')
    event.add('odysseynexus:diamond_tier_boots', 'minecraft:diamond_boots', 'twilightforest:yeti_boots', 'undergarden:utherium_boots', 'aether:gravitite_boots', 'deep_aether:skyjade_boots', 'aether:phoenix_boots', 'aether:valkyrie_boots', 'twilightforest:knightmetal_boots', 'twilightforest:steeleaf_boots', 'blue_skies:charoite_boots', 'outer_end:mint_crystal_boots', 'outer_end:rose_crystal_boots', 'outer_end:cobalt_crystal_boots')

    event.add('odysseynexus:enderium_tier_helmet', 'twilightforest:fiery_helmet', 'majruszsdifficulty:enderium_helmet', 'born_in_chaos_v1:dark_metal_armor_helmet', 'deeperdarker:warden_helmet')
    event.add('odysseynexus:enderium_tier_chestplate', 'twilightforest:fiery_chestplate', 'majruszsdifficulty:enderium_chestplate', 'born_in_chaos_v1:dark_metal_armor_chestplate', 'deeperdarker:warden_chestplate')
    event.add('odysseynexus:enderium_tier_leggings', 'twilightforest:fiery_leggings', 'majruszsdifficulty:enderium_leggings', 'born_in_chaos_v1:dark_metal_armor_leggings', 'deeperdarker:warden_leggings')
    event.add('odysseynexus:enderium_tier_boots', 'twilightforest:fiery_boots', 'majruszsdifficulty:enderium_boots', 'born_in_chaos_v1:dark_metal_armor_boots', 'deeperdarker:warden_boots')

    event.add('odysseynexus:tier_1_material', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'create:zinc_ingot', 'create_dd:tin_ingot', 'undergarden:cloggrum_ingot', 'apotheosis:common_material', 'blue_skies:pyrope_gem', 'blue_skies:aquite', 'create:andesite_alloy', 'create_dd:lapis_alloy', 'destroy:nickel_ingot', 'majruszsdifficulty:cloth', 'aether:zanite_gemstone', 'aether_redux:veridium_ingot', 'minecraft:redstone_block', 'minecraft:copper_block', 'refinedstorage:quartz_enriched_iron')
    event.add('odysseynexus:tier_2_material', 'create:brass_ingot', 'minecraft:diamond', 'undergarden:froststeel_ingot', 'undergarden:utherium_crystal', 'outer_end:rose_crystal_shard', 'outer_end:mint_crystal_shard', 'outer_end:cobalt_crystal_shard', 'apotheosis:uncommon_material', 'irons_spellbooks:arcane_ingot', 'irons_spellbooks:magic_cloth')
    event.add('odysseynexus:tier_3_material', 'minecraft:netherite_ingot', 'twilightforest:fiery_ingot', 'create_dd:bronze_ingot', 'create_dd:steel_ingot', 'apotheosis:rare_material')
    event.add('odysseynexus:tier_4_material', 'ad_astra:ostrum_ingot', 'undergarden:forgotten_ingot', 'majruszsdifficulty:enderium_ingot', 'create_dd:mithril_ingot', 'apotheosis:epic_material', 'deeperdarker:reinforced_echo_shard', 'createutilities:void_steel_ingot')
    event.add('odysseynexus:tier_5_material', 'ad_astra:calorite_ingot', 'cataclysm:ignitium_ingot', 'apotheosis:mythic_material', 'cataclysm:witherite_block', 'cataclysm:gauntlet_of_guard', 'cataclysm:infernal_forge', 'cataclysm:tidal_claws', 'cataclysm:monstrous_horn')

    event.add('forge:ores/iron', ['spelunkery:diorite_iron_ore', 'spelunkery:granite_iron_ore', 'spelunkery:tuff_iron_ore', 'spelunkery:andesite_iron_ore'])
    event.add('forge:ores/gold', ['spelunkery:andesite_gold_ore', 'spelunkery:andesite_gold_ore', 'spelunkery:diorite_gold_ore', 'spelunkery:granite_gold_ore'])
    event.add('forge:ores/coal', ['spelunkery:andesite_coal_ore', 'spelunkery:diorite_coal_ore', 'spelunkery:granite_coal_ore', 'spelunkery:tuff_coal_ore'])
    event.add('forge:ores/zinc', ['spelunkery:andesite_zinc_ore', 'spelunkery:diorite_zinc_ore', 'spelunkery:granite_zinc_ore'])
    event.add('forge:ores/copper', ['spelunkery:andesite_copper_ore', 'spelunkery:diorite_copper_ore', 'spelunkery:granite_copper_ore', 'spelunkery:tuff_copper_ore'])
    event.add('forge:ores/redstone', ['spelunkery:andesite_redstone_ore', 'spelunkery:diorite_redstone_ore', 'spelunkery:tuff_redstone_ore', 'spelunkery:granite_redstone_ore', 'spelunkery:calcite_redstone_ore'])
    event.add('forge:ores/lapis', ['spelunkery:andesite_lapis_ore', 'spelunkery:diorite_lapis_ore', 'spelunkery:granite_lapis_ore', 'spelunkery:sandstone_lapis_ore', 'spelunkery:tuff_lapis_ore'])
    event.add('forge:ores/emerald', ['spelunkery:andesite_emerald_ore', 'spelunkery:diorite_emerald_ore', 'spelunkery:granite_emerald_ore', 'spelunkery:tuff_emerald_ore'])
    event.add('forge:ores/diamond', ['spelunkery:andesite_diamond_ore', 'spelunkery:diorite_diamond_ore', 'spelunkery:granite_diamond_ore', 'spelunkery:tuff_diamond_ore', 'spelunkery:smooth_basalt_diamond_ore'])

    event.add('forge:molten_zinc', 'kubejs:molten_zinc')
    event.add('forge:molten_brass', 'kubejs:molten_brass')

    event.add('')

})
ServerEvents.tags('fluid', event => {
    event.add('forge:fluids/lava', 'kubejs:molten_netherite')
})