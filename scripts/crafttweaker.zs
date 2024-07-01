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
import crafttweaker.api.recipe.IRecipeManager;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import mods.create.SplashingManager;
import crafttweaker.api.recipe.FurnaceRecipeManager;
import mods.create.SandPaperPolishingManager;

# Misc

craftingTable.addShaped("bundle_with_leather", <item:minecraft:bundle>, [
	[<item:minecraft:string>, <item:minecraft:leather>, <item:minecraft:string>], 
	[<item:minecraft:leather>, <item:minecraft:air>, <item:minecraft:leather>], 
	[<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>]
]);
craftingTable.addShaped("bundle_with_rabbit", <item:minecraft:bundle>, [
	[<item:minecraft:string>, <item:minecraft:rabbit_hide>, <item:minecraft:string>], 
	[<item:minecraft:rabbit_hide>, <item:minecraft:air>, <item:minecraft:rabbit_hide>], 
	[<item:minecraft:rabbit_hide>, <item:minecraft:rabbit_hide>, <item:minecraft:rabbit_hide>]
]);

craftingTable.addShaped("item_cell_housing", <item:ae2:item_cell_housing>, [
	[<item:kubejs:silicon_sheet>, <item:kubejs:silicon_sheet>, <item:kubejs:silicon_sheet>],
	[<item:ae2:silicon>, <item:minecraft:air>, <item:ae2:silicon>],
	[<item:kubejs:silicon_sheet>, <item:kubejs:silicon_sheet>, <item:kubejs:silicon_sheet>]
]);
craftingTable.addShaped("fluid_cell_housing", <item:ae2:fluid_cell_housing>, [
	[<item:create:copper_sheet>, <item:create:copper_sheet>, <item:create:copper_sheet>],
	[<item:minecraft:copper_ingot>, <item:minecraft:air>, <item:minecraft:copper_ingot>],
	[<item:create:copper_sheet>, <item:create:copper_sheet>, <item:create:copper_sheet>]
]);
craftingTable.addShaped("blank_pattern", <item:ae2:blank_pattern>, [
	[<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>],
	[<item:ae2:charged_certus_quartz_crystal>, <item:minecraft:air>, <item:ae2:charged_certus_quartz_crystal>],
	[<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>]
]);

craftingTable.removeByName("minecraft:lodestone");

# Potions

brewing.removeRecipe(<item:minecraft:potion>.withTag({Potion: "apotheosis:flying"}), <item:minecraft:popped_chorus_fruit>, <item:minecraft:potion>.withTag({Potion: "apotheosis:levitation"}));

# Create

// <recipetype:create:item_application>.remove(<item:create_dd:steel_casing>);
// <recipetype:create:item_application>.addRecipe("steel_casing", [<item:create_dd:steel_casing>], <item:create_dd:steel_block>, <item:create_dd:steel_ingot>, false);
<recipetype:create:item_application>.addRecipe("silicon_casing", [<item:kubejs:silicon_casing>], <item:minecraft:quartz_block>, <item:kubejs:silicon_sheet>, false);

// <recipetype:create:mixing>.addRecipe("void_steel", <constant:create:heat_condition:heated>, [<item:createutilities:void_steel_ingot> * 4], [<item:cataclysm:void_core>, <tag:items:forge:ingots/steel> * 4], [], 200);

<recipetype:create:compacting>.addRecipe("steel_ingot", <constant:create:heat_condition:heated>, [<item:kubejs:steel_ingot> * 4], [<tag:items:forge:ingots/industrial_iron> * 4, <tag:items:minecraft:coals>], [], 200);
// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int)

craftingTable.addShaped("void_motor", <item:createutilities:void_motor>, [[<item:create_dd:abstruse_mechanism>], [<item:createutilities:void_casing>], [<item:create:shaft>]]);
craftingTable.addShaped("void_chest", <item:createutilities:void_chest>, [[<item:create_dd:abstruse_mechanism>], [<item:minecraft:chest>], [<item:createutilities:void_casing>]]);
craftingTable.addShaped("void_tank", <item:createutilities:void_tank>, [[<item:create_dd:abstruse_mechanism>], [<item:minecraft:barrel>], [<item:createutilities:void_casing>]]);
craftingTable.addShaped("void_battery", <item:createutilities:void_battery>, [[<item:create_dd:abstruse_mechanism>], [<item:createaddition:modular_accumulator>], [<item:createutilities:void_casing>]]);

# Ore/material processing

<recipetype:create:crushing>.addRecipe("crushed_pink_salt_shard", [<item:spelunkery:salt> * 2, (<item:spelunkery:salt>) % 50], <item:galosphere:pink_salt_shard>, 200);
craftingTable.removeByName("vintagedelight:salt_bucket_to_salt");

blastFurnace.removeByName("spelunkery:copper_ore_blasting");
blastFurnace.removeByName("spelunkery:diamond_ore_blasting");
blastFurnace.removeByName("spelunkery:emerald_ore_blasting");
blastFurnace.removeByName("spelunkery:gold_ore_blasting");
blastFurnace.removeByName("spelunkery:iron_ore_blasting");
blastFurnace.removeByName("spelunkery:redstone_ore_blasting");
blastFurnace.removeByName("spelunkery:zinc_ore_blasting");
furnace.removeByName("spelunkery:copper_ore_smelting");
furnace.removeByName("spelunkery:diamond_ore_smelting");
furnace.removeByName("spelunkery:emerald_ore_smelting");
furnace.removeByName("spelunkery:gold_ore_smelting");
furnace.removeByName("spelunkery:iron_ore_smelting");
furnace.removeByName("spelunkery:redstone_ore_smelting");
furnace.removeByName("spelunkery:zinc_ore_smelting");

<recipetype:create:crushing>.remove(<item:create:crushed_raw_copper>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_gold>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_iron>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_silver>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_zinc>);
<recipetype:create:crushing>.remove(<item:minecraft:lapis_lazuli>);
<recipetype:create:crushing>.remove(<item:minecraft:redstone>);
<recipetype:create:crushing>.remove(<item:minecraft:coal>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_cinnabar>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_diamond_shard>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_diamond>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_emerald>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_lazurite>);

<recipetype:create:splashing>.addRecipe("washed_silver", [(<item:galosphere:silver_nugget> * 9), <item:spelunkery:sulfur> % 75], <item:create:crushed_raw_silver>, 200);

<recipetype:create:crushing>.addRecipe("crushed_copper_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_copper> * 4], <tag:items:forge:ores/copper>, 200);
<recipetype:create:crushing>.addRecipe("crushed_diamond_ore", [<item:create:experience_nugget> % 75, <item:spelunkery:rough_diamond> * 3], <tag:items:forge:ores/diamond>, 200);
<recipetype:create:crushing>.addRecipe("crushed_emerald_ore", [<item:create:experience_nugget> % 75, <item:spelunkery:rough_emerald> * 4], <tag:items:forge:ores/emerald>, 200);
<recipetype:create:crushing>.addRecipe("crushed_gold_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_gold> * 3], <tag:items:forge:ores/gold>, 200);
<recipetype:create:crushing>.addRecipe("crushed_iron_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_iron> * 3], <tag:items:forge:ores/iron>, 200);
<recipetype:create:crushing>.addRecipe("crushed_lapis_ore", [<item:create:experience_nugget> % 75, <item:spelunkery:rough_lazurite> * 4], <tag:items:forge:ores/lapis>, 200);
<recipetype:create:crushing>.addRecipe("crushed_redstone_ore", [<item:spelunkery:rough_cinnabar> * 5], <tag:items:forge:ores/redstone>, 200);
<recipetype:create:crushing>.addRecipe("crushed_silver_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_silver> * 3], <tag:items:forge:ores/silver>, 200);
<recipetype:create:crushing>.addRecipe("crushed_zinc_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_zinc> * 3], <tag:items:forge:ores/zinc>, 200);
<recipetype:create:crushing>.addRecipe("crushed_coal_ore", [<item:create:experience_nugget> % 75, <item:minecraft:coal> * 3], <tag:items:forge:ores/coal>, 200);

<recipetype:create:crushing>.addRecipe("crushed_copper_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_copper> * 18], <item:minecraft:raw_copper_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_gold_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_gold> * 18], <item:minecraft:raw_gold_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_iron_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_iron> * 18], <item:minecraft:raw_iron_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_magnetite_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_iron> * 27], <item:spelunkery:raw_magnetite_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_silver_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_silver> * 18], <item:galosphere:raw_silver_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_zinc_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_zinc> * 18], <item:create:raw_zinc_block>, 1800);

<recipetype:create:crushing>.addRecipe("crushed_cinnibar", [<item:create:experience_nugget> % 75, <item:minecraft:redstone> * 2], <item:spelunkery:rough_cinnabar>, 200);
<recipetype:create:crushing>.addRecipe("crushed_copper_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_copper> * 2], <item:minecraft:raw_copper>, 200);
<recipetype:create:crushing>.addRecipe("crushed_gold_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_gold> * 2], <item:minecraft:raw_gold>, 200);
<recipetype:create:crushing>.addRecipe("crushed_iron_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_iron> * 2], <item:minecraft:raw_iron>, 200);
<recipetype:create:crushing>.addRecipe("crushed_magnetite_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_iron> * 3], <item:spelunkery:raw_magnetite>, 200);
<recipetype:create:crushing>.addRecipe("crushed_silver_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_silver> * 2], <item:galosphere:raw_silver>, 200);
<recipetype:create:crushing>.addRecipe("crushed_zinc_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_zinc> * 2], <item:create:raw_zinc>, 200);

<recipetype:create:crushing>.addRecipe("crushed_pointed_redstone", [<item:create:experience_nugget> % 25, <item:minecraft:redstone> * 1], <item:regions_unexplored:pointed_redstone>, 200);
<recipetype:create:crushing>.addRecipe("crushed_raw_redstone_block", [<item:minecraft:redstone> * 3], <item:regions_unexplored:raw_redstone_block>, 200);
<recipetype:create:crushing>.addRecipe("crushed_redstone_bud", [<item:create:experience_nugget> % 25, <item:minecraft:redstone>], <item:regions_unexplored:redstone_bud>, 200);
<recipetype:create:crushing>.addRecipe("crushed_redstone_bulb", [<item:create:experience_nugget> % 50, <item:minecraft:redstone> * 3], <item:regions_unexplored:redstone_bulb>, 200);

craftingTable.addShaped("diamond_grinder_belt", <item:vintageimprovements:grinder_belt>, 
[
	[<item:createaddition:diamond_grit_sandpaper>, <item:createaddition:diamond_grit_sandpaper>, <item:createaddition:diamond_grit_sandpaper>],
	[<item:createaddition:diamond_grit_sandpaper>, <item:minecraft:air>, <item:createaddition:diamond_grit_sandpaper>],
	[<item:createaddition:diamond_grit_sandpaper>, <item:createaddition:diamond_grit_sandpaper>, <item:createaddition:diamond_grit_sandpaper>]
]);