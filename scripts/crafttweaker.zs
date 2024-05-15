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

# Misc

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
<recipetype:create:mixing>.addRecipe("void_steel_void_core", <constant:create:heat_condition:heated>, [<item:createutilities:void_steel_ingot> * 2], [<item:cataclysm:void_core>, <tag:items:forge:ingots/steel> * 2], [], 200);

<recipetype:create:compacting>.remove(<item:createdeco:industrial_iron_ingot>);
<recipetype:create:compacting>.remove(<item:create_dd:industrial_iron_ingot>);
<recipetype:create:compacting>.remove(<item:create_dd:steel_ingot>);
<recipetype:create:compacting>.addRecipe("industrial_iron_ingot", <constant:create:heat_condition:heated>, [<item:create_dd:industrial_iron_ingot>], [<item:minecraft:iron_ingot>], [], 200);
<recipetype:create:compacting>.addRecipe("steel_ingot", <constant:create:heat_condition:heated>, [<item:create_dd:steel_ingot> * 4], [<item:create_dd:industrial_iron_ingot> * 4, <tag:items:minecraft:coals>], [], 200);

<recipetype:create_dd:superheating>.remove(<item:create_dd:diamond_shard>);
