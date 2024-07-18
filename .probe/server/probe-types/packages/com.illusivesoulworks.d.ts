declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTrimRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTrimRecipe {

 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
 "getBase"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTrimRecipe$Type = ($AccessorSmithingTrimRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTrimRecipe_ = $AccessorSmithingTrimRecipe$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorInventoryMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResultContainer, $ResultContainer$Type} from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $AccessorInventoryMenu {

 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
 "getOwner"(): $Player
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorInventoryMenu$Type = ($AccessorInventoryMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorInventoryMenu_ = $AccessorInventoryMenu$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTransformRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTransformRecipe {

 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
 "getBase"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTransformRecipe$Type = ($AccessorSmithingTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTransformRecipe_ = $AccessorSmithingTransformRecipe$Type;
}}
declare module "packages/com/illusivesoulworks/veinmining/common/veinmining/enchantment/$VeinMiningEnchantment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $VeinMiningEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public static "canEnchant"(arg0: $Item$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "getRarity"(): $Enchantment$Rarity
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isTradeable"(): boolean
public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
get "rarity"(): $Enchantment$Rarity
get "tradeable"(): boolean
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinMiningEnchantment$Type = ($VeinMiningEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeinMiningEnchantment_ = $VeinMiningEnchantment$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorCraftingMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResultContainer, $ResultContainer$Type} from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $AccessorCraftingMenu {

 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
 "getPlayer"(): $Player
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCraftingMenu$Type = ($AccessorCraftingMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCraftingMenu_ = $AccessorCraftingMenu$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorAbstractFurnaceBlockEntity" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessorAbstractFurnaceBlockEntity {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList<($ItemStack)>
}

export namespace $AccessorAbstractFurnaceBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractFurnaceBlockEntity$Type = ($AccessorAbstractFurnaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorAbstractFurnaceBlockEntity_ = $AccessorAbstractFurnaceBlockEntity$Type;
}}
