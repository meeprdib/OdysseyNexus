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

# Misc

<recipetype:create_dd:superheating>.removeAll();
<recipetype:estrogen:centrifuging>.removeAll();
<recipetype:vintageimprovements:hammering>.removeByName("vintageimprovements:hammering/netherite_ingot");
<recipetype:vintageimprovements:vacuumizing>.removeAll();
<recipetype:vintageimprovements:pressurizing>.removeAll();
<recipetype:vintageimprovements:coiling>.removeAll();

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

craftingTable.remove(<item:cataclysm:ignitium_upgrade_smithing_template>);

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

<recipetype:create:mixing>.remove(<item:createutilities:void_steel_ingot>);
<recipetype:create:mixing>.addRecipe("void_steel_void_core", <constant:create:heat_condition:heated>, [<item:createutilities:void_steel_ingot> * 4], [<item:cataclysm:void_core>, <tag:items:forge:ingots/steel> * 4], [], 200);

<recipetype:create:compacting>.remove(<item:createdeco:industrial_iron_ingot>);
<recipetype:create:compacting>.remove(<item:create_dd:industrial_iron_ingot>);
<recipetype:create:compacting>.remove(<item:create_dd:steel_ingot>);
<recipetype:create:compacting>.addRecipe("industrial_iron_ingot", <constant:create:heat_condition:heated>, [<item:create_dd:industrial_iron_ingot>], [<item:minecraft:iron_ingot>], [], 200);
<recipetype:create:compacting>.addRecipe("steel_ingot", <constant:create:heat_condition:heated>, [<item:create_dd:steel_ingot> * 4], [<item:create_dd:industrial_iron_ingot> * 4, <tag:items:minecraft:coals>], [], 200);

<recipetype:create_dd:superheating>.remove(<item:create_dd:diamond_shard>);

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("abstruse_mechanism")
.transitionTo(<item:create_dd:incomplete_abstruse_mechanism>)
.require(<item:create_dd:shadow_steel_sheet>)
.loops(3)
.addOutput(<item:create_dd:abstruse_mechanism> * 1, 1)
.addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:kubejs:polished_fluix>))
.addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:ender_pearl>))
.addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createutilities:graviton_tube>)));

craftingTable.addShaped("void_motor", <item:createutilities:void_motor>, [[<item:create_dd:abstruse_mechanism>], [<item:createutilities:void_casing>], [<item:create:shaft>]]);
craftingTable.addShaped("void_chest", <item:createutilities:void_chest>, [[<item:create_dd:abstruse_mechanism>], [<item:minecraft:chest>], [<item:createutilities:void_casing>]]);
craftingTable.addShaped("void_tank", <item:createutilities:void_tank>, [[<item:create_dd:abstruse_mechanism>], [<item:minecraft:barrel>], [<item:createutilities:void_casing>]]);
craftingTable.addShaped("void_battery", <item:createutilities:void_battery>, [[<item:create_dd:abstruse_mechanism>], [<item:createaddition:modular_accumulator>], [<item:createutilities:void_casing>]]);

<recipetype:create:mixing>.addRecipe("shadow_steel", <constant:create:heat_condition:none>, [<item:create_dd:shadow_steel>], [<item:create_dd:steel_ingot>], [<fluid:spelunkery:portal_fluid> * 1000], 200);

# Ore/material processing

<recipetype:create:crushing>.addRecipe("crushed_pink_salt_shard", [<item:spelunkery:salt> * 2, (<item:spelunkery:salt>) % 50], <item:galosphere:pink_salt_shard>, 200);

furnace.removeByName("spelunkery:iron_ore_smelting");
furnace.removeByName("spelunkery:gold_ore_smelting");
furnace.removeByName("spelunkery:zinc_ore_smelting");
furnace.removeByName("spelunkery:emerald_ore_smelting");
furnace.removeByName("spelunkery:redstone_ore_smelting");
furnace.removeByName("spelunkery:copper_ore_smelting");
furnace.removeByName("spelunkery:diamond_ore_smelting");
blastFurnace.removeByName("spelunkery:iron_ore_blasting");
blastFurnace.removeByName("spelunkery:gold_ore_blasting");
blastFurnace.removeByName("spelunkery:emerald_ore_blasting");
blastFurnace.removeByName("spelunkery:zinc_ore_blasting");
blastFurnace.removeByName("spelunkery:redstone_ore_blasting");
blastFurnace.removeByName("spelunkery:diamond_ore_blasting");
blastFurnace.removeByName("spelunkery:copper_ore_blasting");
<recipetype:create:crushing>.remove(<item:create:crushed_raw_copper>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_gold>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_iron>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_silver>);
<recipetype:create:crushing>.remove(<item:create:crushed_raw_zinc>);
<recipetype:create:crushing>.remove(<item:minecraft:redstone>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_cinnabar>);
<recipetype:create:crushing>.remove(<item:minecraft:lapis_lazuli>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_lazurite>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_diamond>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_diamond_shard>);
<recipetype:create:crushing>.remove(<item:spelunkery:rough_emerald>);

<recipetype:create:crushing>.addRecipe("crushed_copper_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_copper> * 4], <tag:items:forge:ores/copper>, 200);
<recipetype:create:crushing>.addRecipe("crushed_iron_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_iron> * 3], <tag:items:forge:ores/iron>, 200);
<recipetype:create:crushing>.addRecipe("crushed_gold_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_gold> * 3], <tag:items:forge:ores/gold>, 200);
<recipetype:create:crushing>.addRecipe("crushed_silver_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_silver> * 3], <tag:items:forge:ores/silver>, 200);
<recipetype:create:crushing>.addRecipe("crushed_zinc_ore", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_zinc> * 3], <tag:items:forge:ores/zinc>, 200);
<recipetype:create:crushing>.addRecipe("crushed_diamond_ore", [<item:create:experience_nugget> % 75, <item:spelunkery:rough_diamond> * 3], <tag:items:forge:ores/diamond>, 200);
<recipetype:create:crushing>.addRecipe("crushed_redstone_ore", [<item:spelunkery:rough_cinnabar> * 5], <tag:items:forge:ores/redstone>, 200);
<recipetype:create:crushing>.addRecipe("crushed_lapis_ore", [<item:create:experience_nugget> % 75, <item:spelunkery:rough_lazurite> * 4], <tag:items:forge:ores/lapis>, 200);
<recipetype:create:crushing>.addRecipe("crushed_emerald_ore", [<item:create:experience_nugget> % 75, <item:spelunkery:rough_emerald> * 4], <tag:items:forge:ores/emerald>, 200);

<recipetype:create:crushing>.addRecipe("crushed_copper_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_copper> * 18], <item:minecraft:raw_copper_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_iron_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_iron> * 18], <item:minecraft:raw_iron_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_magnetite_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_iron> * 27], <item:spelunkery:raw_magnetite_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_gold_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_gold> * 18], <item:minecraft:raw_gold_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_silver_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_silver> * 18], <item:galosphere:raw_silver_block>, 1800);
<recipetype:create:crushing>.addRecipe("crushed_zinc_block", [(<item:create:experience_nugget> * 9) % 75, <item:create:crushed_raw_zinc> * 18], <item:create:raw_zinc_block>, 1800);

<recipetype:create:crushing>.addRecipe("crushed_copper_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_copper> * 2], <item:minecraft:raw_copper>, 200);
<recipetype:create:crushing>.addRecipe("crushed_iron_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_iron> * 2], <item:minecraft:raw_iron>, 200);
<recipetype:create:crushing>.addRecipe("crushed_magnetite_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_iron> * 3], <item:spelunkery:raw_magnetite>, 200);
<recipetype:create:crushing>.addRecipe("crushed_gold_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_gold> * 2], <item:minecraft:raw_gold>, 200);
<recipetype:create:crushing>.addRecipe("crushed_silver_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_silver> * 2], <item:galosphere:raw_silver>, 200);
<recipetype:create:crushing>.addRecipe("crushed_zinc_raw", [<item:create:experience_nugget> % 75, <item:create:crushed_raw_zinc> * 2], <item:create:raw_zinc>, 200);
<recipetype:create:crushing>.addRecipe("crushed_cinnibar", [<item:create:experience_nugget> % 75, <item:minecraft:redstone> * 2], <item:spelunkery:rough_cinnabar>, 200);

<recipetype:create:crushing>.addRecipe("crushed_raw_redstone_block", [<item:minecraft:redstone> * 3], <item:regions_unexplored:raw_redstone_block>, 200);
<recipetype:create:crushing>.addRecipe("crushed_redstone_bud", [<item:create:experience_nugget> % 25, <item:minecraft:redstone>], <item:regions_unexplored:redstone_bud>, 200);
<recipetype:create:crushing>.addRecipe("crushed_redstone_bulb", [<item:create:experience_nugget> % 50, <item:minecraft:redstone> * 3], <item:regions_unexplored:redstone_bulb>, 200);
<recipetype:create:crushing>.addRecipe("crushed_pointed_redstone", [<item:create:experience_nugget> % 25, <item:minecraft:redstone> * 1], <item:regions_unexplored:pointed_redstone>, 200);
