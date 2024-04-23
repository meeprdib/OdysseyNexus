import mods.create.MixingManager;
import mods.farmersdelight.CuttingBoard;
import mods.farmersdelight.CookingPot;
import mods.createtweaker.MixingRecipe;
import mods.createtweaker.BasinRecipe;
import mods.createtweaker.ProcessingRecipe;
import mods.create.HeatCondition;
import crafttweaker.api.fluid.FluidIngredient;
import mods.create.CrushingManager;
import mods.create.PressingManager;
import crafttweaker.api.recipe.SmithingRecipeManager;
import mods.create.MechanicalCrafterManager;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.fluid.Fluid;
import crafttweaker.api.recipe.Brewing;
import crafttweaker.api.recipe.IRecipeManager;
import crafttweaker.api.recipe.StoneCutterManager;
import mods.create.CompactingManager;
import mods.create.SequencedAssemblyManager;
import crafttweaker.api.recipe.CraftingTableRecipeManager;

# Refined Storage

craftingTable.remove(<item:refinedstorage:processor_binding>);
craftingTable.remove(<item:refinedstorage:raw_basic_processor>);
craftingTable.remove(<item:refinedstorage:raw_improved_processor>);
craftingTable.remove(<item:refinedstorage:raw_advanced_processor>);
furnace.remove(<item:refinedstorage:basic_processor>);
furnace.remove(<item:refinedstorage:improved_processor>);
furnace.remove(<item:refinedstorage:advanced_processor>);
craftingTable.remove(<item:refinedstorage:1k_storage_part>);
craftingTable.remove(<item:refinedstorage:4k_storage_part>);
craftingTable.remove(<item:refinedstorage:16k_storage_part>);
craftingTable.remove(<item:refinedstorage:64k_storage_part>);
craftingTable.remove(<item:refinedstorage:64k_fluid_storage_part>);
craftingTable.remove(<item:refinedstorage:256k_fluid_storage_part>);
craftingTable.remove(<item:refinedstorage:1024k_fluid_storage_part>);
craftingTable.remove(<item:refinedstorage:4096k_fluid_storage_part>);
craftingTable.remove(<item:refinedstorage:controller>);
craftingTable.remove(<item:refinedstorage:storage_housing>);
craftingTable.remove(<item:refinedstorage:1k_storage_disk>);
craftingTable.remove(<item:refinedstorage:4k_storage_disk>);
craftingTable.remove(<item:refinedstorage:16k_storage_disk>);
craftingTable.remove(<item:refinedstorage:64k_storage_disk>);
craftingTable.remove(<item:refinedstorage:1k_storage_block>);
craftingTable.remove(<item:refinedstorage:4k_storage_block>);
craftingTable.remove(<item:refinedstorage:16k_storage_block>);
craftingTable.remove(<item:refinedstorage:64k_storage_block>);
craftingTable.remove(<item:refinedstorage:256k_fluid_storage_block>);
craftingTable.remove(<item:refinedstorage:1024k_fluid_storage_block>);
craftingTable.remove(<item:refinedstorage:64k_fluid_storage_block>);
craftingTable.remove(<item:refinedstorage:4096k_fluid_storage_block>);
craftingTable.remove(<item:refinedstorage:64k_fluid_storage_disk>);
craftingTable.remove(<item:refinedstorage:256k_fluid_storage_disk>);
craftingTable.remove(<item:refinedstorage:1024k_fluid_storage_disk>);
craftingTable.remove(<item:refinedstorage:4096k_fluid_storage_disk>);
craftingTable.remove(<item:refinedstorage:crafting_grid>);

<recipetype:create:item_application>.addRecipe("rs_controller", [<item:refinedstorage:controller>], <item:refinedstorage:machine_casing>, <item:refinedstorage:advanced_processor>, false);
<recipetype:create:item_application>.addRecipe("crafting_grid", [<item:refinedstorage:crafting_grid>], <item:refinedstorage:grid>, <item:minecraft:crafting_table>, false);

<recipetype:create:pressing>.addRecipe("press_1k_storage_disk", [<item:refinedstorage:1k_storage_disk>], <item:refinedstorage:1k_storage_block>, 200);
<recipetype:create:pressing>.addRecipe("press_4k_storage_disk", [<item:refinedstorage:4k_storage_disk>], <item:refinedstorage:4k_storage_block>, 200);
<recipetype:create:pressing>.addRecipe("press_16k_storage_disk", [<item:refinedstorage:16k_storage_disk>], <item:refinedstorage:16k_storage_block>, 200);
<recipetype:create:pressing>.addRecipe("press_64k_storage_disk", [<item:refinedstorage:64k_storage_disk>], <item:refinedstorage:64k_storage_block>, 200);

craftingTable.addShapeless('1k_storage_disk', <item:refinedstorage:1k_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:1k_storage_part>]);
craftingTable.addShapeless('4k_storage_disk', <item:refinedstorage:4k_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:4k_storage_part>]);
craftingTable.addShapeless('16k_storage_disk', <item:refinedstorage:16k_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:16k_storage_part>]);
craftingTable.addShapeless('64k_storage_disk', <item:refinedstorage:64k_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:64k_storage_part>]);

<recipetype:create:pressing>.addRecipe("press_64k_fluid_storage_disk", [<item:refinedstorage:64k_fluid_storage_disk>], <item:refinedstorage:64k_fluid_storage_block>, 200);
<recipetype:create:pressing>.addRecipe("press_256k_fluid_storage_disk", [<item:refinedstorage:256k_fluid_storage_disk>], <item:refinedstorage:256k_fluid_storage_block>, 200);
<recipetype:create:pressing>.addRecipe("press_1024k_fluid_storage_disk", [<item:refinedstorage:1024k_fluid_storage_disk>], <item:refinedstorage:1024k_fluid_storage_block>, 200);
<recipetype:create:pressing>.addRecipe("press_4096k_fluid_storage_disk", [<item:refinedstorage:4096k_fluid_storage_disk>], <item:refinedstorage:4096k_fluid_storage_block>, 200);

craftingTable.addShapeless('64k_fluid_storage_disk', <item:refinedstorage:64k_fluid_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:64k_fluid_storage_part>]);
craftingTable.addShapeless('256k_fluid_storage_disk', <item:refinedstorage:256k_fluid_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:256k_fluid_storage_part>]);
craftingTable.addShapeless('1024k_fluid_storage_disk', <item:refinedstorage:1024k_fluid_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:1024k_fluid_storage_part>]);
craftingTable.addShapeless('4096k_fluid_storage_disk', <item:refinedstorage:4096k_fluid_storage_disk>, [<item:refinedstorage:storage_housing>, <item:refinedstorage:4096k_fluid_storage_part>]);

craftingTable.addShaped('1k_storage_part', <item:refinedstorage:1k_storage_part>, [
	[<item:refinedstorage:silicon>, <tag:items:odysseynexus:tier_2_material>, <item:refinedstorage:silicon>],
	[<tag:items:odysseynexus:tier_2_material>, <item:minecraft:redstone>, <tag:items:odysseynexus:tier_2_material>],
	[<item:refinedstorage:silicon>, <tag:items:odysseynexus:tier_2_material>, <item:refinedstorage:silicon>]]);
craftingTable.addShaped('4k_storage_part', <item:refinedstorage:4k_storage_part>, [
	[<item:refinedstorage:basic_processor>, <tag:items:odysseynexus:tier_3_material>, <item:refinedstorage:basic_processor>],
	[<item:refinedstorage:1k_storage_part>, <item:minecraft:redstone>, <item:refinedstorage:1k_storage_part>],
	[<item:refinedstorage:basic_processor>, <item:refinedstorage:1k_storage_part>, <item:refinedstorage:basic_processor>]]);
craftingTable.addShaped('16k_storage_part', <item:refinedstorage:16k_storage_part>, [
	[<item:refinedstorage:improved_processor>, <tag:items:odysseynexus:tier_4_material>, <item:refinedstorage:improved_processor>],
	[<item:refinedstorage:4k_storage_part>, <item:minecraft:redstone>, <item:refinedstorage:4k_storage_part>],
	[<item:refinedstorage:improved_processor>, <item:refinedstorage:4k_storage_part>, <item:refinedstorage:improved_processor>]]);
craftingTable.addShaped('64k_storage_part', <item:refinedstorage:64k_storage_part>, [
	[<item:refinedstorage:advanced_processor>, <tag:items:odysseynexus:tier_5_material>, <item:refinedstorage:advanced_processor>],
	[<item:refinedstorage:4k_storage_part>, <item:minecraft:redstone>, <item:refinedstorage:4k_storage_part>],
	[<item:refinedstorage:advanced_processor>, <item:refinedstorage:4k_storage_part>, <item:refinedstorage:advanced_processor>]]);

craftingTable.addShaped('64k_fluid_storage_part', <item:refinedstorage:64k_fluid_storage_part>, [
	[<item:refinedstorage:silicon>, <tag:items:odysseynexus:tier_2_material>, <item:refinedstorage:silicon>],
	[<tag:items:odysseynexus:tier_2_material>, <item:minecraft:bucket>, <tag:items:odysseynexus:tier_2_material>],
	[<item:refinedstorage:silicon>, <tag:items:odysseynexus:tier_2_material>, <item:refinedstorage:silicon>]]);
craftingTable.addShaped('256k_fluid_storage_part', <item:refinedstorage:256k_fluid_storage_part>, [
	[<item:refinedstorage:basic_processor>, <tag:items:odysseynexus:tier_3_material>, <item:refinedstorage:basic_processor>],
	[<item:refinedstorage:64k_fluid_storage_part>, <item:minecraft:bucket>, <item:refinedstorage:64k_fluid_storage_part>],
	[<item:refinedstorage:basic_processor>, <item:refinedstorage:64k_fluid_storage_part>, <item:refinedstorage:basic_processor>]]);
	craftingTable.addShaped('1024k_fluid_storage_part', <item:refinedstorage:1024k_fluid_storage_part>, [
	[<item:refinedstorage:improved_processor>, <tag:items:odysseynexus:tier_4_material>, <item:refinedstorage:improved_processor>],
	[<item:refinedstorage:256k_fluid_storage_part>, <item:minecraft:bucket>, <item:refinedstorage:256k_fluid_storage_part>],
	[<item:refinedstorage:improved_processor>, <item:refinedstorage:256k_fluid_storage_part>, <item:refinedstorage:improved_processor>]]);
	craftingTable.addShaped('4096k_fluid_storage_part', <item:refinedstorage:4096k_fluid_storage_part>, [
	[<item:refinedstorage:advanced_processor>, <tag:items:odysseynexus:tier_5_material>, <item:refinedstorage:advanced_processor>],
	[<item:refinedstorage:1024k_fluid_storage_part>, <item:minecraft:bucket>, <item:refinedstorage:1024k_fluid_storage_part>],
	[<item:refinedstorage:advanced_processor>, <item:refinedstorage:1024k_fluid_storage_part>, <item:refinedstorage:advanced_processor>]]);

<recipetype:create:item_application>.addRecipe("1k_storage_block", [<item:refinedstorage:1k_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:1k_storage_part>, false);
<recipetype:create:item_application>.addRecipe("4k_storage_block", [<item:refinedstorage:4k_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:4k_storage_part>, false);
<recipetype:create:item_application>.addRecipe("16k_storage_block", [<item:refinedstorage:16k_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:16k_storage_part>, false);
<recipetype:create:item_application>.addRecipe("64k_storage_block", [<item:refinedstorage:64k_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:64k_storage_part>, false);
<recipetype:create:item_application>.addRecipe("64k_fluid_storage_block", [<item:refinedstorage:64k_fluid_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:64k_fluid_storage_part>, false);
<recipetype:create:item_application>.addRecipe("256k_fluid_storage_block", [<item:refinedstorage:256k_fluid_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:256k_fluid_storage_part>, false);
<recipetype:create:item_application>.addRecipe("1024k_fluid_storage_block", [<item:refinedstorage:1024k_fluid_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:1024k_fluid_storage_part>, false);
<recipetype:create:item_application>.addRecipe("4096k_fluid_storage_block", [<item:refinedstorage:4096k_fluid_storage_block>], <item:refinedstorage:machine_casing>, <item:refinedstorage:4096k_fluid_storage_part>, false);

craftingTable.addShapeless("new_basic_processor", <item:refinedstorage:basic_processor>,
[<item:refinedstorage:silicon>, <item:create_dd:integrated_circuit>, <tag:items:odysseynexus:tier_1_material>]);
craftingTable.addShapeless("new_improved_processor", <item:refinedstorage:improved_processor>,
[<item:refinedstorage:silicon>, <item:create_dd:integrated_circuit>, <tag:items:odysseynexus:tier_2_material>]);
craftingTable.addShapeless("new_advanced_processor", <item:refinedstorage:advanced_processor>,
[<item:refinedstorage:silicon>, <item:create_dd:integrated_circuit>, <tag:items:odysseynexus:tier_3_material>]);

craftingTable.remove(<item:refinedstorage:machine_casing>);
<recipetype:create:item_application>.addRecipe("machine_casing", [<item:refinedstorage:machine_casing>], <item:create_dd:steel_block>, <item:refinedstorage:quartz_enriched_iron>, false);

# Storage Drawers

craftingTable.remove(<item:storagedrawers:compacting_drawers_3>);
craftingTable.remove(<item:storagedrawers:controller_slave>);
craftingTable.remove(<item:storagedrawers:controller>);

craftingTable.remove(<item:storagedrawers:obsidian_storage_upgrade>);
craftingTable.remove(<item:storagedrawers:iron_storage_upgrade>);
craftingTable.remove(<item:storagedrawers:gold_storage_upgrade>);
craftingTable.remove(<item:storagedrawers:diamond_storage_upgrade>);
craftingTable.remove(<item:storagedrawers:emerald_storage_upgrade>);
craftingTable.remove(<item:storagedrawers:upgrade_template>);

craftingTable.addShapeless("drawer_upgrade_1", <item:storagedrawers:obsidian_storage_upgrade>, [<item:sophisticatedbackpacks:upgrade_base>, <tag:items:odysseynexus:tier_1_material>]);
craftingTable.addShapeless("drawer_upgrade_2", <item:storagedrawers:iron_storage_upgrade>, [<item:sophisticatedbackpacks:upgrade_base>, <tag:items:odysseynexus:tier_2_material>]);
craftingTable.addShapeless("drawer_upgrade_3", <item:storagedrawers:gold_storage_upgrade>, [<item:sophisticatedbackpacks:upgrade_base>, <tag:items:odysseynexus:tier_3_material>]);
craftingTable.addShapeless("drawer_upgrade_4", <item:storagedrawers:diamond_storage_upgrade>, [<item:sophisticatedbackpacks:upgrade_base>, <tag:items:odysseynexus:tier_4_material>]);
craftingTable.addShapeless("drawer_upgrade_5", <item:storagedrawers:emerald_storage_upgrade>, [<item:sophisticatedbackpacks:upgrade_base>, <tag:items:odysseynexus:tier_5_material>]);

<recipetype:create:item_application>.addRecipe("compacting_drawers", [<item:storagedrawers:compacting_drawers_3>], <item:refinedstorage:machine_casing>, <item:minecraft:piston>, false);
<recipetype:create:item_application>.addRecipe("sd_controller", [<item:storagedrawers:controller>], <tag:items:forge:stripped_logs>, <item:refinedstorage:advanced_processor>, false);
<recipetype:create:item_application>.addRecipe("controller_slave", [<item:storagedrawers:controller_slave>], <tag:items:forge:stripped_logs>, <item:refinedstorage:improved_processor>, false);

craftingTable.remove(<item:storagedrawers:void_upgrade>);
craftingTable.addShapeless("sd_void_upgrade", <item:storagedrawers:void_upgrade>, [<item:sophisticatedbackpacks:upgrade_base>, <item:createutilities:void_steel_ingot>]);

# Misc

craftingTable.remove(<item:undergardendelight:cloggrum_knife>);
craftingTable.remove(<item:undergardendelight:frosteel_knife>);
craftingTable.remove(<item:undergardendelight:utherium_knife>);
craftingTable.remove(<item:undergardendelight:forgotten_knife>);
craftingTable.remove(<item:aetherdelight:holystone_knife>);
craftingTable.remove(<item:aetherdelight:zanite_knife>);
craftingTable.remove(<item:aetherdelight:gravitite_knife>);
craftingTable.remove(<item:aetherdelight:skyjade_knife>);
craftingTable.remove(<item:aetherdelight:stratus_knife>);
craftingTable.remove(<item:aetherdelight:veridium_knife>);
craftingTable.remove(<item:aquaculture:wooden_fillet_knife>);
craftingTable.remove(<item:aquaculture:stone_fillet_knife>);
craftingTable.remove(<item:aquaculture:iron_fillet_knife>);
craftingTable.remove(<item:aquaculture:gold_fillet_knife>);
craftingTable.remove(<item:aquaculture:diamond_fillet_knife>);
craftingTable.remove(<item:ends_delight:purpur_knife>);
craftingTable.remove(<item:ends_delight:end_stone_knife>);

//craftingTable.remove(<item:explorerscompass:explorerscompass>);
//craftingTable.remove(<item:naturescompass:naturescompass>);

craftingTable.remove(<item:createaddition:iron_rod>);
blastFurnace.remove(<item:create_dd:steel_ingot>);

craftingTable.addShaped("bundle_with_leather", <item:minecraft:bundle>, [
	[<item:minecraft:string>, <item:minecraft:leather>, <item:minecraft:string>], 
	[<item:minecraft:leather>, <item:minecraft:air>, <item:minecraft:leather>], 
	[<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>]]);
craftingTable.addShaped("bundle_with_rabbit", <item:minecraft:bundle>, [
	[<item:minecraft:string>, <item:minecraft:rabbit_hide>, <item:minecraft:string>], 
	[<item:minecraft:rabbit_hide>, <item:minecraft:air>, <item:minecraft:rabbit_hide>], 
	[<item:minecraft:rabbit_hide>, <item:minecraft:rabbit_hide>, <item:minecraft:rabbit_hide>]]);

craftingTable.addShaped("depthrock_furnace", <item:minecraft:furnace>, [
	[<item:undergarden:depthrock>, <item:undergarden:depthrock>, <item:undergarden:depthrock>], 
	[<item:undergarden:depthrock>, <item:minecraft:air>, <item:undergarden:depthrock>], 
	[<item:undergarden:depthrock>, <item:undergarden:depthrock>, <item:undergarden:depthrock>]]);

craftingTable.remove(<item:cataclysm:ignitium_upgrade_smithing_template>);

smithing.remove(<item:cataclysm:ignitium_helmet>);
smithing.remove(<item:cataclysm:ignitium_chestplate>);
smithing.remove(<item:cataclysm:ignitium_leggings>);
smithing.remove(<item:cataclysm:ignitium_boots>);

smithing.addTransformRecipe("enderium_tier_to_ignitium_helmet", <item:cataclysm:ignitium_helmet>, <item:cataclysm:ignitium_upgrade_smithing_template>, <tag:items:odysseynexus:enderium_tier_helmet>, <item:cataclysm:ignitium_ingot>);
smithing.addTransformRecipe("enderium_tier_to_ignitium_chestplate", <item:cataclysm:ignitium_chestplate>, <item:cataclysm:ignitium_upgrade_smithing_template>, <tag:items:odysseynexus:enderium_tier_chestplate>, <item:cataclysm:ignitium_ingot>);
smithing.addTransformRecipe("enderium_tier_to_ignitium_leggings", <item:cataclysm:ignitium_leggings>, <item:cataclysm:ignitium_upgrade_smithing_template>, <tag:items:odysseynexus:enderium_tier_leggings>, <item:cataclysm:ignitium_ingot>);
smithing.addTransformRecipe("enderium_tier_to_ignitium_boots", <item:cataclysm:ignitium_boots>, <item:cataclysm:ignitium_upgrade_smithing_template>, <tag:items:odysseynexus:enderium_tier_boots>, <item:cataclysm:ignitium_ingot>);

smithing.remove(<item:minecraft:netherite_helmet>);
smithing.remove(<item:minecraft:netherite_chestplate>);
smithing.remove(<item:minecraft:netherite_leggings>);
smithing.remove(<item:minecraft:netherite_boots>);

smithing.addTransformRecipe("diamond_tier_to_netherite_helmet", <item:minecraft:netherite_helmet>, <item:minecraft:netherite_upgrade_smithing_template>, <tag:items:odysseynexus:diamond_tier_helmet>, <item:minecraft:netherite_ingot>);
smithing.addTransformRecipe("diamond_tier_to_netherite_chestplate", <item:minecraft:netherite_chestplate>, <item:minecraft:netherite_upgrade_smithing_template>, <tag:items:odysseynexus:diamond_tier_chestplate>, <item:minecraft:netherite_ingot>);
smithing.addTransformRecipe("diamond_tier_to_netherite_leggings", <item:minecraft:netherite_leggings>, <item:minecraft:netherite_upgrade_smithing_template>, <tag:items:odysseynexus:diamond_tier_leggings>, <item:minecraft:netherite_ingot>);
smithing.addTransformRecipe("diamond_tier_to_netherite_boots", <item:minecraft:netherite_boots>, <item:minecraft:netherite_upgrade_smithing_template>, <tag:items:odysseynexus:enderium_tier_boots>, <item:minecraft:netherite_ingot>);

craftingTable.remove(<item:vintagedelight:cheese_burger>);
craftingTable.remove(<item:vintagedelight:deluxe_burger>);

craftingTable.removeByName("minecraft:lodestone");

craftingTable.remove(<item:alexscaves:nuclear_bomb>);
<recipetype:create:mechanical_crafting>.addRecipe("nuclear_bomb", <item:alexscaves:nuclear_bomb>, [
	[<item:create_dd:steel_block>, <item:create_dd:steel_block>, <item:create_dd:steel_block>, <item:create_dd:steel_block>, <item:create_dd:steel_block>], 
	[<item:create_dd:steel_block>, <item:alexscaves:block_of_uranium>, <item:alexscaves:fissile_core>, <item:alexscaves:block_of_uranium>, <item:create_dd:steel_block>], 
	[<item:create_dd:steel_block>, <item:alexscaves:uranium_rod>, <item:minecraft:nether_star>, <item:alexscaves:uranium_rod>, <item:create_dd:steel_block>], 
	[<item:create_dd:steel_block>, <item:alexscaves:block_of_uranium>, <item:alexscaves:fissile_core>, <item:alexscaves:block_of_uranium>, <item:create_dd:steel_block>], 
	[<item:create_dd:steel_block>, <item:create_dd:steel_block>, <item:create_dd:steel_block>, <item:create_dd:steel_block>, <item:create_dd:steel_block>]]);

<recipetype:create:mixing>.addRecipe("rusty_scrap_metal", <constant:create:heat_condition:none>, [<item:alexscaves:rusty_scrap_metal>], [<item:alexscaves:scrap_metal>], [<fluid:alexscaves:acid> * 100], 200);
<recipetype:create:mixing>.addRecipe("rusty_scrap_metal_plate", <constant:create:heat_condition:none>, [<item:alexscaves:rusty_scrap_metal_plate>], [<item:alexscaves:scrap_metal_plate>], [<fluid:alexscaves:acid> * 100], 200);
<recipetype:create:mixing>.addRecipe("rusty_rebar", <constant:create:heat_condition:none>, [<item:alexscaves:rusty_rebar>], [<item:alexscaves:metal_rebar>], [<fluid:alexscaves:acid> * 100], 200);
<recipetype:create:mixing>.addRecipe("rusty_scaffolding", <constant:create:heat_condition:none>, [<item:alexscaves:rusty_scaffolding>], [<item:alexscaves:metal_scaffolding>], [<fluid:alexscaves:acid> * 100], 200);
<recipetype:create:mixing>.addRecipe("rusty_barrel", <constant:create:heat_condition:none>, [<item:alexscaves:rusty_barrel>], [<item:alexscaves:metal_barrel>], [<fluid:alexscaves:acid> * 100], 200);

//<recipetype:farmersdelight:cutting>.addRecipe("kiwano_fiber", <item:nethers_exoticism:kiwano_peel>, [<item:kubejs:kiwano_fiber>], <tag:items:farmersdelight:tools/knives>, "farmersdelight:block.cutting_board.knife");

craftingTable.removeByName("alexscaves:glass_from_sea_glass_shards");

<recipetype:farmersdelight:cutting>.addRecipe("you_monster", <item:undergarden:gronglet>, [<item:farmersdelight:minced_beef>], <item:born_in_chaos_v1:skullbreaker_hammer>, "undergarden:block.gronglet.burn");
<recipetype:farmersdelight:cutting>.addRecipe("i_hate_turtles", <item:minecraft:turtle_egg>, [<item:aquaculturedelight:small_turtle_meat>], <item:born_in_chaos_v1:skullbreaker_hammer>, "undergarden:block.gronglet.burn");

craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:basic/blaze"}));
craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:basic/enderman"}));
craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:basic/slime"}));
craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:emerald_grove"}));
craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:endless/blaze"}));
craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:overworldian_nights"}));
craftingTable.remove(<item:gateways:gate_pearl>.withTag({gateway: "gateways:hellish_fortress"}));

craftingTable.remove(<item:iceandfire:armor_copper_metal_helmet>);
craftingTable.remove(<item:iceandfire:armor_copper_metal_chestplate>);
craftingTable.remove(<item:iceandfire:armor_copper_metal_leggings>);
craftingTable.remove(<item:iceandfire:armor_copper_metal_boots>);
craftingTable.remove(<item:iceandfire:copper_sword>);
craftingTable.remove(<item:iceandfire:copper_shovel>);
craftingTable.remove(<item:iceandfire:copper_pickaxe>);
craftingTable.remove(<item:iceandfire:copper_axe>);
craftingTable.remove(<item:iceandfire:copper_hoe>);

//craftingTable.remove(<item:wrd:magic_cauldron>);
//craftingTable.remove(<item:wrd:magic_cauldron_desert>);
//craftingTable.remove(<item:wrd:magic_cauldron_ice>);
//craftingTable.remove(<item:wrd:magic_cauldron_jungle>);
//craftingTable.remove(<item:wrd:magic_cauldron_nether>);

//craftingTable.remove(<item:qualitycrops:iron_fertilizer>);
//craftingTable.remove(<item:qualitycrops:gold_fertilizer>);
//craftingTable.remove(<item:qualitycrops:diamond_fertilizer>);

# Sophisticated Backpack

craftingTable.remove(<item:sophisticatedbackpacks:stack_upgrade_starter_tier>);
craftingTable.remove(<item:sophisticatedbackpacks:stack_upgrade_tier_1>);
craftingTable.remove(<item:sophisticatedbackpacks:stack_upgrade_tier_2>);
craftingTable.remove(<item:sophisticatedbackpacks:stack_upgrade_tier_3>);
craftingTable.remove(<item:sophisticatedbackpacks:stack_upgrade_tier_4>);
craftingTable.remove(<item:sophisticatedbackpacks:tank_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:battery_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:compacting_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:filter_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_refill_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_deposit_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_restock_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_void_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_compacting_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_feeding_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_magnet_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_filter_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_pickup_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:auto_smelting_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:auto_smoking_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:auto_blasting_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_tool_swapper_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:advanced_pump_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:magnet_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:pickup_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:void_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:crafting_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:stonecutter_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:jukebox_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:pump_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:anvil_upgrade>);
craftingTable.remove(<item:sophisticatedbackpacks:copper_backpack>);
craftingTable.remove(<item:sophisticatedbackpacks:iron_backpack>);
craftingTable.remove(<item:sophisticatedbackpacks:gold_backpack>);
craftingTable.remove(<item:sophisticatedbackpacks:diamond_backpack>);
smithing.remove(<item:sophisticatedbackpacks:netherite_backpack>);

craftingTable.addShaped("stack_upgrade_tier_1", <item:sophisticatedbackpacks:stack_upgrade_starter_tier>, [
	[<tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>],
	[<tag:items:odysseynexus:tier_1_material>, <item:sophisticatedbackpacks:upgrade_base>, <tag:items:odysseynexus:tier_1_material>],
	[<tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>]]);
craftingTable.addShaped("stack_upgrade_tier_2", <item:sophisticatedbackpacks:stack_upgrade_tier_1>, [
	[<tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>],
	[<tag:items:odysseynexus:tier_2_material>, <item:sophisticatedbackpacks:stack_upgrade_starter_tier>, <tag:items:odysseynexus:tier_2_material>],
	[<tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>]]);
craftingTable.addShaped("stack_upgrade_tier_3", <item:sophisticatedbackpacks:stack_upgrade_tier_2>, [
	[<tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>],
	[<tag:items:odysseynexus:tier_3_material>, <item:sophisticatedbackpacks:stack_upgrade_tier_1>, <tag:items:odysseynexus:tier_3_material>],
	[<tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>]]);
craftingTable.addShaped("stack_upgrade_tier_4", <item:sophisticatedbackpacks:stack_upgrade_tier_3>, [
	[<tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>],
	[<tag:items:odysseynexus:tier_4_material>, <item:sophisticatedbackpacks:stack_upgrade_tier_2>, <tag:items:odysseynexus:tier_4_material>],
	[<tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>]]);
craftingTable.addShaped("stack_upgrade_tier_5", <item:sophisticatedbackpacks:stack_upgrade_tier_4>, [
	[<tag:items:odysseynexus:tier_5_material>, <tag:items:odysseynexus:tier_5_material>, <tag:items:odysseynexus:tier_5_material>],
	[<tag:items:odysseynexus:tier_5_material>, <item:sophisticatedbackpacks:stack_upgrade_tier_3>, <tag:items:odysseynexus:tier_5_material>],
	[<tag:items:odysseynexus:tier_5_material>, <tag:items:odysseynexus:tier_5_material>, <tag:items:odysseynexus:tier_5_material>]]);
craftingTable.addShaped("tank_upgrade", <item:sophisticatedbackpacks:tank_upgrade>, [
	[<item:create:fluid_tank>, <item:create:fluid_tank>, <item:create:fluid_tank>],
	[<item:create:fluid_tank>, <item:sophisticatedbackpacks:upgrade_base>, <item:create:fluid_tank>],
	[<item:create:fluid_tank>, <item:create:fluid_tank>, <item:create:fluid_tank>]]);
craftingTable.addShaped("battery_upgrade", <item:sophisticatedbackpacks:battery_upgrade>, [
	[<item:createaddition:modular_accumulator>, <item:createaddition:modular_accumulator>, <item:createaddition:modular_accumulator>],
	[<item:createaddition:modular_accumulator>, <item:sophisticatedbackpacks:upgrade_base>, <item:createaddition:modular_accumulator>],
	[<item:createaddition:modular_accumulator>, <item:createaddition:modular_accumulator>, <item:createaddition:modular_accumulator>]]);
craftingTable.addShapeless("compacting_upgrade", <item:sophisticatedbackpacks:compacting_upgrade>, [<item:storagedrawers:compacting_drawers_3>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("filtering_upgrade", <item:sophisticatedbackpacks:filter_upgrade>, [<item:refinedstorage:filter>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("magnet_upgrade_copper", <item:sophisticatedbackpacks:magnet_upgrade>, [<item:spelunkery:item_magnet>, <item:sophisticatedbackpacks:pickup_upgrade>]);
craftingTable.addShapeless("magnet_upgrade_scarlet", <item:sophisticatedbackpacks:magnet_upgrade>, [<item:alexscaves:scarlet_magnet>, <item:sophisticatedbackpacks:pickup_upgrade>]);
craftingTable.addShapeless("magnet_upgrade_azure", <item:sophisticatedbackpacks:magnet_upgrade>, [<item:alexscaves:azure_magnet>, <item:sophisticatedbackpacks:pickup_upgrade>]);
craftingTable.addShapeless("pickup_upgrade", <item:sophisticatedbackpacks:pickup_upgrade>, [<item:minecraft:hopper>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("void_upgrade", <item:sophisticatedbackpacks:void_upgrade>, [<item:createutilities:void_steel_ingot>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("crafting_upgrade", <item:sophisticatedbackpacks:crafting_upgrade>, [<item:minecraft:crafting_table>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("stonecutter_upgrade", <item:sophisticatedbackpacks:stonecutter_upgrade>, [<item:minecraft:stonecutter>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("pump_upgrade", <item:sophisticatedbackpacks:pump_upgrade>, [<item:create:mechanical_pump>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("jukebox_upgrade", <item:sophisticatedbackpacks:jukebox_upgrade>, [<item:minecraft:jukebox>, <item:sophisticatedbackpacks:upgrade_base>]);
craftingTable.addShapeless("anvil_upgrade", <item:sophisticatedbackpacks:anvil_upgrade>, [<item:minecraft:anvil>, <item:sophisticatedbackpacks:upgrade_base>]);

craftingTable.addShapeless("advanced_magnet_upgrade_copper", <item:sophisticatedbackpacks:advanced_magnet_upgrade>, [<item:spelunkery:item_magnet>, <item:sophisticatedbackpacks:advanced_pickup_upgrade>]);
craftingTable.addShapeless("advanced_magnet_upgrade_scarlet", <item:sophisticatedbackpacks:advanced_magnet_upgrade>, [<item:alexscaves:scarlet_magnet>, <item:sophisticatedbackpacks:advanced_pickup_upgrade>]);
craftingTable.addShapeless("advanced_magnet_upgrade_azure", <item:sophisticatedbackpacks:advanced_magnet_upgrade>, [<item:alexscaves:azure_magnet>, <item:sophisticatedbackpacks:advanced_pickup_upgrade>]);
craftingTable.addShapeless("advanced_pickup_upgrade", <item:sophisticatedbackpacks:advanced_pickup_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:pickup_upgrade>]);
craftingTable.addShapeless("advanced_refill_upgrade", <item:sophisticatedbackpacks:advanced_refill_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:refill_upgrade>]);
craftingTable.addShapeless("advanced_filter_upgrade", <item:sophisticatedbackpacks:advanced_filter_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:filter_upgrade>]);
craftingTable.addShapeless("advanced_deposit_upgrade", <item:sophisticatedbackpacks:advanced_deposit_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:deposit_upgrade>]);
craftingTable.addShapeless("advanced_compacting_upgrade", <item:sophisticatedbackpacks:advanced_compacting_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:compacting_upgrade>]);
craftingTable.addShapeless("advanced_void_upgrade", <item:sophisticatedbackpacks:advanced_void_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:void_upgrade>]);
craftingTable.addShapeless("advanced_feeding_upgrade", <item:sophisticatedbackpacks:advanced_feeding_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:feeding_upgrade>]);
craftingTable.addShapeless("advanced_restock_upgrade", <item:sophisticatedbackpacks:advanced_restock_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:restock_upgrade>]);
craftingTable.addShapeless("advanced_tool_swapper_upgrade", <item:sophisticatedbackpacks:advanced_tool_swapper_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:tool_swapper_upgrade>]);
craftingTable.addShapeless("advanced_magnet_upgrade", <item:sophisticatedbackpacks:advanced_magnet_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:magnet_upgrade>]);
craftingTable.addShapeless("auto_blasting_upgrade", <item:sophisticatedbackpacks:auto_blasting_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:blasting_upgrade>]);
craftingTable.addShapeless("auto_smelting_upgrade", <item:sophisticatedbackpacks:auto_smelting_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:smelting_upgrade>]);
craftingTable.addShapeless("auto_smoking_upgrade", <item:sophisticatedbackpacks:auto_smoking_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:smoking_upgrade>]);
craftingTable.addShapeless("advanced_pump_upgrade", <item:sophisticatedbackpacks:advanced_pump_upgrade>, [<item:refinedstorage:advanced_processor>, <item:sophisticatedbackpacks:pump_upgrade>]);

craftingTable.addShaped("backpack_1", <item:sophisticatedbackpacks:iron_backpack>, [
	[<tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>],
	[<tag:items:odysseynexus:tier_1_material>, <item:sophisticatedbackpacks:backpack>, <tag:items:odysseynexus:tier_1_material>],
	[<tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>, <tag:items:odysseynexus:tier_1_material>]]);
craftingTable.addShaped("backpack_2", <item:sophisticatedbackpacks:gold_backpack>, [
	[<tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>],
	[<tag:items:odysseynexus:tier_2_material>, <item:sophisticatedbackpacks:iron_backpack>, <tag:items:odysseynexus:tier_2_material>],
	[<tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>, <tag:items:odysseynexus:tier_2_material>]]);
	craftingTable.addShaped("backpack_3", <item:sophisticatedbackpacks:diamond_backpack>, [
	[<tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>],
	[<tag:items:odysseynexus:tier_3_material>, <item:sophisticatedbackpacks:gold_backpack>, <tag:items:odysseynexus:tier_3_material>],
	[<tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>, <tag:items:odysseynexus:tier_3_material>]]);
	craftingTable.addShaped("backpack_4", <item:sophisticatedbackpacks:netherite_backpack>, [
	[<tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>],
	[<tag:items:odysseynexus:tier_4_material>, <item:sophisticatedbackpacks:diamond_backpack>, <tag:items:odysseynexus:tier_4_material>],
	[<tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>, <tag:items:odysseynexus:tier_4_material>]]);

# Potions

<recipetype:create:mechanical_crafting>.remove(<item:minecraft:enchanted_golden_apple>);

brewing.removeRecipe(<item:minecraft:potion>.withTag({Potion: "apotheosis:flying"}), <item:minecraft:popped_chorus_fruit>, <item:minecraft:potion>.withTag({Potion: "apotheosis:levitation"}));

# Create

<recipetype:create:item_application>.remove(<item:create_dd:steel_casing>);
<recipetype:create:item_application>.addRecipe("steel_casing", [<item:create_dd:steel_casing>], <item:create_dd:steel_block>, <item:create_dd:steel_ingot>, false);

craftingTable.remove(<item:create_dd:industrial_iron_block>);
craftingTable.remove(<item:create:industrial_iron_block>);
stoneCutter.remove(<item:create:industrial_iron_block>);
<recipetype:create:compacting>.remove(<item:create:industrial_iron_block>);

craftingTable.remove(<item:create_power_loader:empty_andesite_chunk_loader>);
<recipetype:create:mechanical_crafting>.remove(<item:create_power_loader:empty_brass_chunk_loader>);
<recipetype:create:mechanical_crafting>.addRecipe("brass_chunk_loader", <item:create_power_loader:empty_brass_chunk_loader>, [
	[<item:alexscaves:depth_glass>, <item:alexscaves:depth_glass>, <item:alexscaves:depth_glass>, <item:alexscaves:depth_glass>, <item:alexscaves:depth_glass>], 
	[<item:alexscaves:depth_glass>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:alexscaves:depth_glass>], 
	[<item:alexscaves:depth_glass>, <item:minecraft:air>, <item:minecraft:respawn_anchor>, <item:minecraft:air>, <item:alexscaves:depth_glass>], 
	[<item:create:brass_block>, <item:create_compressed:mechanism_block>, <item:create_compressed:mechanism_block>, <item:create_compressed:mechanism_block>, <item:create:brass_block>], 
	[<item:create:brass_block>, <item:createutilities:void_casing>, <item:create:shaft>, <item:createutilities:void_casing>, <item:create:brass_block>]]);

<recipetype:create:mixing>.remove(<item:createutilities:void_steel_ingot>);
<recipetype:create:mixing>.addRecipe("void_steel_void_core", <constant:create:heat_condition:heated>, [<item:createutilities:void_steel_ingot> * 2], [<item:cataclysm:void_core>, <tag:items:forge:ingots/steel> * 2], [], 200);

<recipetype:create:compacting>.remove(<item:createdeco:industrial_iron_ingot>);
<recipetype:create:compacting>.remove(<item:create_dd:industrial_iron_ingot>);
<recipetype:create:compacting>.remove(<item:create_dd:steel_ingot>);
<recipetype:create:compacting>.addRecipe("industrial_iron_ingot", <constant:create:heat_condition:heated>, [<item:create_dd:industrial_iron_ingot>], [<item:minecraft:iron_ingot>], [], 200);
<recipetype:create:compacting>.addRecipe("steel_ingot", <constant:create:heat_condition:heated>, [<item:create_dd:steel_ingot> * 4], [<item:create_dd:industrial_iron_ingot> * 4, <tag:items:minecraft:coals>], [], 200);

<recipetype:create:deploying>.remove(<item:create_dd:infadirt>);
<recipetype:create:deploying>.remove(<item:create_dd:infadripstone_block>);
<recipetype:create:deploying>.remove(<item:create_dd:infatuff>);
<recipetype:create:deploying>.remove(<item:create_dd:infacalcite>);
<recipetype:create:deploying>.remove(<item:create_dd:infacobbled_deepslate>);
<recipetype:create:deploying>.remove(<item:create_dd:infaandesite>);
<recipetype:create:deploying>.remove(<item:create_dd:infadiorite>);
<recipetype:create:deploying>.remove(<item:create_dd:infagranite>);
<recipetype:create:deploying>.remove(<item:create_dd:infastone>);
<recipetype:create:deploying>.remove(<item:create_dd:infasnow_block>);
<recipetype:create:deploying>.remove(<item:create_dd:infaice>);
<recipetype:create:deploying>.remove(<item:create_dd:infaobsidian>);
<recipetype:create:deploying>.remove(<item:create_dd:infagravel>);
<recipetype:create:deploying>.remove(<item:create_dd:infared_sand>);
<recipetype:create:deploying>.remove(<item:create_dd:infacobblestone>);
<recipetype:create:deploying>.remove(<item:create_dd:infamud>);
<recipetype:create:deploying>.remove(<item:create_dd:infacoarse_dirt>);
<recipetype:create:deploying>.remove(<item:create_dd:infasoul_sand>);
<recipetype:create:deploying>.remove(<item:create_dd:infaend_stone>);
<recipetype:create:deploying>.remove(<item:create_dd:infanetherrack>);
<recipetype:create:deploying>.remove(<item:create_dd:infamagma_block>);
<recipetype:create:deploying>.remove(<item:create_dd:infamoss_block>);
<recipetype:create:deploying>.remove(<item:create_dd:infasand>);

<recipetype:create_dd:superheating>.remove(<item:create_dd:diamond_shard>);

craftingTable.remove(<item:create_dd:kinetic_motor>);
craftingTable.remove(<item:create_dd:accelerator_motor>);

# Enchanting

craftingTable.remove(<item:minecraft:enchanting_table>);
craftingTable.remove(<item:create_enchantment_industry:printer>);
craftingTable.remove(<item:create_enchantment_industry:enchanting_guide>);