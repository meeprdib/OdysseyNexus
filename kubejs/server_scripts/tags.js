// Adding or creating tags to give to items / materials
ServerEvents.tags('item', event => {
    event.add('ae2:can_remove_color', 'supplementaries:soap')
    event.add('ae2:lumen_paint_balls', ['ae2:cyan_lumen_paint_ball', 'ae2:purple_lumen_paint_ball', 'ae2:blue_lumen_paint_ball', 'ae2:brown_lumen_paint_ball', 'ae2:green_lumen_paint_ball', 'ae2:red_lumen_paint_ball', 'ae2:black_lumen_paint_ball', 'ae2:white_lumen_paint_ball', 'ae2:orange_lumen_paint_ball', 'ae2:magenta_lumen_paint_ball', 'ae2:light_blue_lumen_paint_ball', 'ae2:yellow_lumen_paint_ball', 'ae2:lime_lumen_paint_ball', 'ae2:pink_lumen_paint_ball', 'ae2:gray_lumen_paint_ball', 'ae2:light_gray_lumen_paint_ball'])

    event.add('forge:dusts/sulfur', 'spelunkery:sulfur', 'vintageimprovements:sulfur')
    event.add('forge:ingots/bronze', 'create_dd:bronze_ingot')
    event.add('forge:ingots/industrial_iron', 'createdeco:industrial_iron_ingot')
    event.add('forge:molten_brass', 'kubejs:molten_brass')
    event.add('forge:molten_zinc', 'kubejs:molten_zinc')
    event.add('forge:ores/coal', ['spelunkery:andesite_coal_ore', 'spelunkery:diorite_coal_ore', 'spelunkery:granite_coal_ore', 'spelunkery:tuff_coal_ore'])
    event.add('forge:ores/copper', ['spelunkery:andesite_copper_ore', 'spelunkery:diorite_copper_ore', 'spelunkery:granite_copper_ore', 'spelunkery:tuff_copper_ore'])
    event.add('forge:ores/diamond', ['spelunkery:andesite_diamond_ore', 'spelunkery:diorite_diamond_ore', 'spelunkery:granite_diamond_ore', 'spelunkery:tuff_diamond_ore', 'spelunkery:smooth_basalt_diamond_ore'])
    event.add('forge:ores/emerald', ['spelunkery:andesite_emerald_ore', 'spelunkery:diorite_emerald_ore', 'spelunkery:granite_emerald_ore', 'spelunkery:tuff_emerald_ore'])
    event.add('forge:ores/gold', ['spelunkery:andesite_gold_ore', 'spelunkery:andesite_gold_ore', 'spelunkery:diorite_gold_ore', 'spelunkery:granite_gold_ore'])
    event.add('forge:ores/iron', ['spelunkery:diorite_iron_ore', 'spelunkery:granite_iron_ore', 'spelunkery:tuff_iron_ore', 'spelunkery:andesite_iron_ore'])
    event.add('forge:ores/lapis', ['spelunkery:andesite_lapis_ore', 'spelunkery:diorite_lapis_ore', 'spelunkery:granite_lapis_ore', 'spelunkery:sandstone_lapis_ore', 'spelunkery:tuff_lapis_ore'])
    event.add('forge:ores/redstone', ['spelunkery:andesite_redstone_ore', 'spelunkery:diorite_redstone_ore', 'spelunkery:tuff_redstone_ore', 'spelunkery:granite_redstone_ore', 'spelunkery:calcite_redstone_ore'])
    event.add('forge:ores/zinc', ['spelunkery:andesite_zinc_ore', 'spelunkery:diorite_zinc_ore', 'spelunkery:granite_zinc_ore'])
    event.add('forge:plates/industrial_iron', 'createdeco:industrial_iron_sheet')
    event.add('forge:nuggets/industrial_iron', 'createdeco:industrial_iron_nugget')

    event.add('on:cubable_raw_dragon_meat', 'ends_delight:raw_dragon_meat', 'iceandfire:ice_dragon_flesh', 'iceandfire:fire_dragon_flesh', 'iceandfire:lightning_dragon_flesh')
    event.add('on:raw_dragon_meat', 'ends_delight:raw_dragon_meat', 'ends_delight:raw_dragon_meat_cuts', 'ends_delight:dragon_leg', 'iceandfire:ice_dragon_flesh', 'iceandfire:fire_dragon_flesh', 'iceandfire:lightning_dragon_flesh')

    event.add('aether:treated_as_aether_item', '#forge:tools')
    event.add('aether:AetherItemTagData', '#forge:tools')

    event.add('on:cake_base', 'ratatouille:cake_base', 'createaddition:cake_base')
    event.add('c:salt_dust', 'vintagedelight:salt_dust', 'ratatouille:salt', 'vintagedelight:salt')
    event.add('on:salt_bucket', 'spelunkery:salt_bucket', 'vintagedelight:salt_bucket')
    event.add('forge:storage_blocks/apple', 'fruitsdelight:apple_crate')
    event.add('forge:storage_blocks/carrot', 'farmersdelight:carrot_crate')
    event.add('forge:storage_blocks/beetroot', 'farmersdelight:beetroot_crate')

    event.add('forge:plates/netherite', 'createdeco:netherite_sheet')
})