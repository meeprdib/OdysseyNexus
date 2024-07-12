declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BackpackUpgradeRecipe, $BackpackUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Serializer$Type = ($BackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe$Serializer_ = $BackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade"
import {$CompactingUpgradeItem, $CompactingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CompactingUpgradeWrapper extends $UpgradeWrapperBase<($CompactingUpgradeWrapper), ($CompactingUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "shouldWorkInGUI"(): boolean
public "getFilterLogic"(): $FilterLogic
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
public "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "shouldCompactNonUncraftable"(): boolean
public "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void
public "setCompactNonUncraftable"(arg0: boolean): void
public "setShouldWorkdInGUI"(arg0: boolean): void
get "filterLogic"(): $FilterLogic
set "compactNonUncraftable"(value: boolean)
set "shouldWorkdInGUI"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeWrapper$Type = ($CompactingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeWrapper_ = $CompactingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DepositFilterType extends $Enum<($DepositFilterType)> implements $StringRepresentable {
static readonly "ALLOW": $DepositFilterType
static readonly "BLOCK": $DepositFilterType
static readonly "INVENTORY": $DepositFilterType


public "getSerializedName"(): string
public static "fromName"(arg0: string): $DepositFilterType
public static "values"(): ($DepositFilterType)[]
public static "valueOf"(arg0: string): $DepositFilterType
public "next"(): $DepositFilterType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterType$Type = (("allow") | ("block") | ("inventory")) | ($DepositFilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositFilterType_ = $DepositFilterType$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CraftingUpgradeItem, $CraftingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CraftingUpgradeWrapper extends $UpgradeWrapperBase<($CraftingUpgradeWrapper), ($CraftingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getInventory"(): $ItemStackHandler
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
get "inventory"(): $ItemStackHandler
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeWrapper$Type = ($CraftingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeWrapper_ = $CraftingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $SmithingBackpackUpgradeRecipe extends $SmithingTransformRecipe implements $IWrapperRecipe<($SmithingTransformRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $SmithingTransformRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Type = ($SmithingBackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe_ = $SmithingBackpackUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStackableContentsUpgrade {

 "getMinimumMultiplierRequired"(): integer

(): integer
}

export namespace $IStackableContentsUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackableContentsUpgrade$Type = ($IStackableContentsUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackableContentsUpgrade_ = $IStackableContentsUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$AutoSmeltingUpgradeItem, $AutoSmeltingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmeltingUpgradeItem"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"

export class $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper), ($AutoSmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$PrimaryMatch" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PrimaryMatch extends $Enum<($PrimaryMatch)> implements $StringRepresentable {
static readonly "ITEM": $PrimaryMatch
static readonly "MOD": $PrimaryMatch
static readonly "TAGS": $PrimaryMatch


public "getSerializedName"(): string
public static "fromName"(arg0: string): $PrimaryMatch
public static "values"(): ($PrimaryMatch)[]
public static "valueOf"(arg0: string): $PrimaryMatch
public "next"(): $PrimaryMatch
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimaryMatch$Type = (("item") | ("mod") | ("tags")) | ($PrimaryMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimaryMatch_ = $PrimaryMatch$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler" {
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ITrackedContentsItemHandler extends $IItemHandlerSimpleInserter {

 "getTrackedStacks"(): $Set<($ItemStackKey)>
 "hasEmptySlots"(): boolean
 "registerTrackingListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
 "unregisterStackKeyListeners"(): void
 "getInternalSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getSlots"(): integer
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "isMutable"(): boolean
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getSlots"(): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getStackInSlot"(i: integer): $ItemStack
 "getSlotLimit"(i: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
 "getAllItems"(): $List<($ItemStack)>
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "isEmpty"(): boolean
 "getHeight"(): integer
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "setChanged"(): void
 "asContainer"(): $Container
 "getWidth"(): integer
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
}

export namespace $ITrackedContentsItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedContentsItemHandler$Type = ($ITrackedContentsItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackedContentsItemHandler_ = $ITrackedContentsItemHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$MainSetting" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $MainSetting<T> {

constructor(arg0: string, arg1: $BiFunction$Type<($CompoundTag$Type), (string), ($Optional$Type<(T)>)>, arg2: $TriConsumer$Type<($CompoundTag$Type), (string), (T)>, arg3: T)

public "removeFrom"(arg0: $CompoundTag$Type): void
public "getName"(): string
public "getValue"(arg0: $CompoundTag$Type): $Optional<(T)>
public "setValue"(arg0: $CompoundTag$Type, arg1: T): void
public "getDefaultValue"(): T
get "name"(): string
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSetting$Type<T> = ($MainSetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSetting_<T> = $MainSetting$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$PickupUpgradeWrapper, $PickupUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeWrapper"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PickupUpgradeItem extends $UpgradeItemBase<($PickupUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($PickupUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($PickupUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($PickupUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeItem$Type = ($PickupUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeItem_ = $PickupUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IRenderedTankUpgrade$TankRenderInfo {

constructor(arg0: $FluidStack$Type, arg1: float)
constructor()

public static "deserialize"(arg0: $CompoundTag$Type): $IRenderedTankUpgrade$TankRenderInfo
public "serialize"(): $CompoundTag
public "getFluid"(): $Optional<($FluidStack)>
public "setFillRatio"(arg0: float): void
public "setFluid"(arg0: $FluidStack$Type): void
public "getFillRatio"(): float
get "fluid"(): $Optional<($FluidStack)>
set "fillRatio"(value: float)
set "fluid"(value: $FluidStack$Type)
get "fillRatio"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$TankRenderInfo$Type = ($IRenderedTankUpgrade$TankRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade$TankRenderInfo_ = $IRenderedTankUpgrade$TankRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeWrapper" {
import {$IOverflowResponseUpgrade, $IOverflowResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IOverflowResponseUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISlotLimitUpgrade, $ISlotLimitUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ISlotLimitUpgrade"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$VoidUpgradeItem, $VoidUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $VoidUpgradeWrapper extends $UpgradeWrapperBase<($VoidUpgradeWrapper), ($VoidUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade, $IOverflowResponseUpgrade, $ISlotLimitUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "setShouldVoidOverflowDefaultOrLoadFromNbt"(arg0: boolean): void
public "shouldWorkInGUI"(): boolean
public "getFilterLogic"(): $FilterLogic
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
public "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "setShouldVoidOverflow"(arg0: boolean): void
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "isVoidAnythingEnabled"(): boolean
public "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "onOverflow"(arg0: $ItemStack$Type): $ItemStack
public "stackMatchesFilter"(arg0: $ItemStack$Type): boolean
public "worksInGui"(): boolean
public "getSlotLimit"(): integer
public "shouldVoidOverflow"(): boolean
public "stackMatchesFilterStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
set "shouldVoidOverflowDefaultOrLoadFromNbt"(value: boolean)
get "filterLogic"(): $FilterLogic
get "voidAnythingEnabled"(): boolean
set "shouldWorkdInGUI"(value: boolean)
get "slotLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeWrapper$Type = ($VoidUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeWrapper_ = $VoidUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InventoryOrder" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $InventoryOrder extends $Enum<($InventoryOrder)> implements $StringRepresentable {
static readonly "MAIN_FIRST": $InventoryOrder
static readonly "INCEPTED_FIRST": $InventoryOrder


public "getSerializedName"(): string
public static "fromName"(arg0: string): $InventoryOrder
public static "values"(): ($InventoryOrder)[]
public static "valueOf"(arg0: string): $InventoryOrder
public "next"(): $InventoryOrder
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryOrder$Type = (("main_first") | ("incepted_first")) | ($InventoryOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryOrder_ = $InventoryOrder$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DisplaySide, $DisplaySide$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$DisplaySide"

export class $RenderInfo$DisplayItem {

constructor(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $DisplaySide$Type)

public "getSlotIndex"(): integer
public "getRotation"(): integer
public "getDisplaySide"(): $DisplaySide
public "getItem"(): $ItemStack
get "slotIndex"(): integer
get "rotation"(): integer
get "displaySide"(): $DisplaySide
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$DisplayItem$Type = ($RenderInfo$DisplayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$DisplayItem_ = $RenderInfo$DisplayItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AnvilUpgradeWrapper, $AnvilUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnvilUpgradeItem extends $UpgradeItemBase<($AnvilUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($AnvilUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($AnvilUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeItem$Type = ($AnvilUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeItem_ = $AnvilUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BatteryUpgradeWrapper, $BatteryUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$BatteryUpgradeConfig, $BatteryUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeConfig"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BatteryUpgradeItem extends $UpgradeItemBase<($BatteryUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($BatteryUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $BatteryUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getMaxEnergyBase"(arg0: $IStorageWrapper$Type): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
public "getInventoryColumnsTaken"(): integer
public "getBatteryUpgradeConfig"(): $BatteryUpgradeConfig
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "getMaxEnergyStored"(arg0: $IStorageWrapper$Type): integer
public "getType"(): $UpgradeType<($BatteryUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "inventoryColumnsTaken"(): integer
get "batteryUpgradeConfig"(): $BatteryUpgradeConfig
get "type"(): $UpgradeType<($BatteryUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeItem$Type = ($BatteryUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeItem_ = $BatteryUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner$SlotRange" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $InventoryPartitioner$SlotRange extends $Record {

constructor(firstSlot: integer, numberOfSlots: integer)

public "numberOfSlots"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "firstSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$SlotRange$Type = ($InventoryPartitioner$SlotRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPartitioner$SlotRange_ = $InventoryPartitioner$SlotRange$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FilterLogicBase, $FilterLogicBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogicBase"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FilterLogic$ObservableFilterItemStackHandler, $FilterLogic$ObservableFilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic$ObservableFilterItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterLogic extends $FilterLogicBase {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Predicate$Type<($ItemStack$Type)>)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Predicate$Type<($ItemStack$Type)>, arg4: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer)

public "getFilterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setEmptyAllowListMatchesEverything"(): void
get "filterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$Type = ($FilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic_ = $FilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IUpgradeRenderData {

 "serializeNBT"(): $CompoundTag

(): $CompoundTag
}

export namespace $IUpgradeRenderData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeRenderData$Type = ($IUpgradeRenderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeRenderData_ = $IUpgradeRenderData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IUpgradeWrapperAccessor {

 "clearCache"(): void
 "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$Type<(T)>): $List<(T)>
 "getWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
 "onBeforeDeconstruct"(): void
}

export namespace $IUpgradeWrapperAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapperAccessor$Type = ($IUpgradeWrapperAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapperAccessor_ = $IUpgradeWrapperAccessor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $BasicBackpackRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Type = ($BasicBackpackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe_ = $BasicBackpackRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AutoSmokingUpgradeItem, $AutoSmokingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmokingUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$SmokingRecipe, $SmokingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmokingRecipe"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"

export class $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper), ($AutoSmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$ToolSwapperUpgradeWrapper, $ToolSwapperUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolSwapperUpgradeItem extends $UpgradeItemBase<($ToolSwapperUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: boolean)

public "hasSettingsTab"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "shouldSwapToolOnKeyPress"(): boolean
public "getType"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeItem$Type = ($ToolSwapperUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeItem_ = $ToolSwapperUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe" {
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IWrapperRecipe<T extends $Recipe<(any)>> {

 "getCompose"(): T

(): T
}

export namespace $IWrapperRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrapperRecipe$Type<T> = ($IWrapperRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrapperRecipe_<T> = $IWrapperRecipe$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AutoBlastingUpgradeItem, $AutoBlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoBlastingUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"
import {$BlastingRecipe, $BlastingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$BlastingRecipe"

export class $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper), ($AutoBlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeConfig" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$FilteredUpgradeConfigBase, $FilteredUpgradeConfigBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilteredUpgradeConfigBase"

export class $VoidUpgradeConfig extends $FilteredUpgradeConfigBase {
readonly "voidAnythingEnabled": $ForgeConfigSpec$BooleanValue
readonly "filterSlots": $ForgeConfigSpec$IntValue
readonly "slotsInRow": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeConfig$Type = ($VoidUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeConfig_ = $VoidUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEnergyStorageUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"

export interface $IEnergyStorageUpgradeWrapper {

 "wrapStorage"(arg0: $IEnergyStorage$Type): $IEnergyStorage

(arg0: $IEnergyStorage$Type): $IEnergyStorage
}

export namespace $IEnergyStorageUpgradeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageUpgradeWrapper$Type = ($IEnergyStorageUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorageUpgradeWrapper_ = $IEnergyStorageUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $IUpgradeItem$UpgradeConflictDefinition extends $Record {

constructor(isConflictingItem: $Predicate$Type<($Item$Type)>, maxConflictingAllowed: integer, errorMessage: $Component$Type)

public "errorMessage"(): $Component
public "maxConflictingAllowed"(): integer
public "isConflictingItem"(): $Predicate<($Item)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "conflictingItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$UpgradeConflictDefinition$Type = ($IUpgradeItem$UpgradeConflictDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem$UpgradeConflictDefinition_ = $IUpgradeItem$UpgradeConflictDefinition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"

export interface $IRenderedTankUpgrade {

 "setTankRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>): void
 "forceUpdateTankRenderInfo"(): void
}

export namespace $IRenderedTankUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$Type = ($IRenderedTankUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade_ = $IRenderedTankUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$UpgradeNextTierRecipe, $UpgradeNextTierRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UpgradeNextTierRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($UpgradeNextTierRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Serializer$Type = ($UpgradeNextTierRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe$Serializer_ = $UpgradeNextTierRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmokingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoSmokingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmokingUpgradeItem$Type = ($AutoSmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmokingUpgradeItem_ = $AutoSmokingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe$Serializer" {
import {$SmithingBackpackUpgradeRecipe, $SmithingBackpackUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SmithingBackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($SmithingTransformRecipe), ($SmithingBackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Serializer$Type = ($SmithingBackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe$Serializer_ = $SmithingBackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem$Wrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EverlastingUpgradeItem, $EverlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $EverlastingUpgradeItem$Wrapper extends $UpgradeWrapperBase<($EverlastingUpgradeItem$Wrapper), ($EverlastingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Wrapper$Type = ($EverlastingUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem$Wrapper_ = $EverlastingUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BatteryUpgradeItem, $BatteryUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeItem"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$IRenderedBatteryUpgrade, $IRenderedBatteryUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $BatteryUpgradeWrapper extends $UpgradeWrapperBase<($BatteryUpgradeWrapper), ($BatteryUpgradeItem)> implements $IRenderedBatteryUpgrade, $IEnergyStorage, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer
static readonly "ENERGY_STORED_TAG": string


public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getInventory"(): $IItemHandler
public "getMinimumMultiplierRequired"(): integer
public "canBeDisabled"(): boolean
public "forceUpdateBatteryRenderInfo"(): void
public "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>): void
public "getEnergyStored"(): integer
public static "getEnergyStored"(arg0: $ItemStack$Type): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "canReceive"(): boolean
public "getMaxEnergyStored"(): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
get "inventory"(): $IItemHandler
get "minimumMultiplierRequired"(): integer
set "batteryRenderInfoUpdateCallback"(value: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>)
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeWrapper$Type = ($BatteryUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeWrapper_ = $BatteryUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$DepositFilterType, $DepositFilterType$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterType"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $DepositFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer)

public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setInventory"(arg0: $IItemHandler$Type): void
public "getDepositFilterType"(): $DepositFilterType
public "setDepositFilterType"(arg0: $DepositFilterType$Type): void
set "inventory"(value: $IItemHandler$Type)
get "depositFilterType"(): $DepositFilterType
set "depositFilterType"(value: $DepositFilterType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterLogic$Type = ($DepositFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositFilterLogic_ = $DepositFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/main/$MainSettingsCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MainSetting, $MainSetting$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$MainSetting"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MainSettingsCategory<T extends $MainSettingsCategory<(any)>> implements $ISettingsCategory<(T)> {
static readonly "NAME": string

constructor(arg0: $CompoundTag$Type, arg1: $Consumer$Type<($CompoundTag$Type)>, arg2: string)

public "reloadFrom"(arg0: $CompoundTag$Type): void
public "copyTo"(arg0: T, arg1: integer, arg2: integer): void
public "getPlayerSettingsTagName"(): string
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "deleteSlotSettingsFrom"(arg0: integer): void
public "setSettingValue"<S>(arg0: $MainSetting$Type<(S)>, arg1: S): void
public "getSettingValue"<S>(arg0: $MainSetting$Type<(S)>): $Optional<(S)>
public "removeSetting"<S>(arg0: $MainSetting$Type<(S)>): void
public "overwriteWith"(arg0: T): void
get "playerSettingsTagName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSettingsCategory$Type<T> = ($MainSettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSettingsCategory_<T> = $MainSettingsCategory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BackpackBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "LEFT_TANK": $BooleanProperty
static readonly "RIGHT_TANK": $BooleanProperty
static readonly "BATTERY": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()
constructor(arg0: float)

public static "playerInteract"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackBlock$Type = ($BackpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackBlock_ = $BackpackBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig" {
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IUpgradeCountLimitConfig {

 "getMaxUpgradesInGroupPerStorage"(arg0: string, arg1: $UpgradeGroup$Type): integer
 "getMaxUpgradesPerStorage"(arg0: string, arg1: $ResourceLocation$Type): integer
}

export namespace $IUpgradeCountLimitConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeCountLimitConfig$Type = ($IUpgradeCountLimitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeCountLimitConfig_ = $IUpgradeCountLimitConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IStashStorageItem, $IStashStorageItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BackpackBlock, $BackpackBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BackpackItem extends $ItemBase implements $IStashStorageItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $Supplier$Type<($BackpackBlock$Type)>)
constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $Supplier$Type<($BackpackBlock$Type)>, arg3: $UnaryOperator$Type<($Item$Properties$Type)>)

public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getNumberOfUpgradeSlots"(): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
public "tryPlace"(arg0: $Player$Type, arg1: $Direction$Type, arg2: $BlockPlaceContext$Type): $InteractionResult
public "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "getNumberOfSlots"(): integer
public "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
get "numberOfUpgradeSlots"(): integer
get "numberOfSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackItem$Type = ($BackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackItem_ = $BackpackItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$VoidUpgradeWrapper, $VoidUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$VoidUpgradeConfig, $VoidUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeConfig"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VoidUpgradeItem extends $UpgradeItemBase<($VoidUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($VoidUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $VoidUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "isVoidAnythingEnabled"(): boolean
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($VoidUpgradeWrapper)>
get "voidAnythingEnabled"(): boolean
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($VoidUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeItem$Type = ($VoidUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeItem_ = $VoidUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ContentsFilterType, $ContentsFilterType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MemorySettingsCategory, $MemorySettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $ContentsFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Supplier$Type<($InventoryHandler$Type)>, arg4: $MemorySettingsCategory$Type)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Supplier$Type<($InventoryHandler$Type)>, arg4: $MemorySettingsCategory$Type, arg5: string)

public "getFilterType"(): $ContentsFilterType
public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setDepositFilterType"(arg0: $ContentsFilterType$Type): void
get "filterType"(): $ContentsFilterType
set "depositFilterType"(value: $ContentsFilterType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterLogic$Type = ($ContentsFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterLogic_ = $ContentsFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmokingUpgradeWrapper" {
import {$SmokingUpgradeItem, $SmokingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmokingUpgradeItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"
import {$SmokingRecipe, $SmokingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmokingRecipe"

export class $CookingUpgradeWrapper$SmokingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmokingUpgradeWrapper), ($SmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type = ($CookingUpgradeWrapper$SmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper_ = $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem$Wrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$JukeboxUpgradeItem, $JukeboxUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $JukeboxUpgradeItem$Wrapper extends $UpgradeWrapperBase<($JukeboxUpgradeItem$Wrapper), ($JukeboxUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getDiscInventory"(): $IItemHandler
public "isPlaying"(): boolean
public "getDisc"(): $ItemStack
public "setDisc"(arg0: $ItemStack$Type): void
public "play"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "play"(arg0: $LivingEntity$Type): void
public "onBeforeRemoved"(): void
public "stop"(arg0: $LivingEntity$Type): void
get "discInventory"(): $IItemHandler
get "playing"(): boolean
get "disc"(): $ItemStack
set "disc"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$Wrapper$Type = ($JukeboxUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeItem$Wrapper_ = $JukeboxUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IInventoryPartHandler {

 "isFilterItem"(arg0: $Item$Type): boolean
 "getSlots"(): integer
 "getNoSortSlots"(): $Set<(integer)>
 "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
 "isSlotAccessible"(arg0: integer): boolean
 "getFilterItem"(arg0: integer): $Item
 "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
 "onInit"(): void
 "canBeReplaced"(): boolean
 "onSlotLimitChange"(): void
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer, arg1: $IntFunction$Type<($ItemStack$Type)>): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: $BiConsumer$Type<(integer), ($ItemStack$Type)>): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: $TriFunction$Type<(integer), ($ItemStack$Type), (boolean), ($ItemStack$Type)>): $ItemStack
 "getStackLimit"(arg0: integer, arg1: $ItemStack$Type): integer
 "onSlotFilterChanged"(arg0: integer): void
 "getName"(): string

(arg0: $Item$Type): boolean
}

export namespace $IInventoryPartHandler {
const EMPTY: $IInventoryPartHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryPartHandler$Type = ($IInventoryPartHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryPartHandler_ = $IInventoryPartHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmeltingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$CookingUpgradeWrapper$SmeltingUpgradeWrapper, $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmeltingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmeltingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingUpgradeItem$Type = ($SmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmeltingUpgradeItem_ = $SmeltingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeNoteParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $JukeboxUpgradeNoteParticleData extends $ParticleType<($JukeboxUpgradeNoteParticleData)> implements $ParticleOptions {
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($JukeboxUpgradeNoteParticleData)>

constructor()

public "codec"(): $Codec<($JukeboxUpgradeNoteParticleData)>
public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $JukeboxUpgradeNoteParticleData
get "type"(): $JukeboxUpgradeNoteParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeNoteParticleData$Type = ($JukeboxUpgradeNoteParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeNoteParticleData_ = $JukeboxUpgradeNoteParticleData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeWrapper" {
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$IRenderedTankUpgrade, $IRenderedTankUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$TankUpgradeItem, $TankUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $TankUpgradeWrapper extends $UpgradeWrapperBase<($TankUpgradeWrapper), ($TankUpgradeItem)> implements $IRenderedTankUpgrade, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer


public "getContents"(): $FluidStack
public static "getContents"(arg0: $ItemStack$Type): $FluidStack
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getInventory"(): $IItemHandler
public "drainHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>): boolean
public "fillHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>): boolean
public "getMinimumMultiplierRequired"(): integer
public "canBeDisabled"(): boolean
public "setTankRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>): void
public "forceUpdateTankRenderInfo"(): void
public "getTankCapacity"(): integer
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
get "contents"(): $FluidStack
get "inventory"(): $IItemHandler
get "minimumMultiplierRequired"(): integer
set "tankRenderInfoUpdateCallback"(value: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>)
get "tankCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$Type = ($TankUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeWrapper_ = $TankUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ToolSwapMode extends $Enum<($ToolSwapMode)> implements $StringRepresentable {
static readonly "ANY": $ToolSwapMode
static readonly "ONLY_TOOLS": $ToolSwapMode
static readonly "NO_SWAP": $ToolSwapMode


public "getSerializedName"(): string
public static "fromName"(arg0: string): $ToolSwapMode
public static "values"(): ($ToolSwapMode)[]
public static "valueOf"(arg0: string): $ToolSwapMode
public "next"(): $ToolSwapMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapMode$Type = (("no_swap") | ("only_tools") | ("any")) | ($ToolSwapMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapMode_ = $ToolSwapMode$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$BlastingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"
import {$BlastingUpgradeItem, $BlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$BlastingUpgradeItem"
import {$BlastingRecipe, $BlastingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$BlastingRecipe"

export class $CookingUpgradeWrapper$BlastingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$BlastingUpgradeWrapper), ($BlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type = ($CookingUpgradeWrapper$BlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper_ = $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$IIOFilterUpgrade, $IIOFilterUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IIOFilterUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterUpgradeItem, $FilterUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$Direction, $Direction$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$Direction"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $FilterUpgradeWrapper extends $UpgradeWrapperBase<($FilterUpgradeWrapper), ($FilterUpgradeItem)> implements $IContentsFilteredUpgrade, $IIOFilterUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getInputFilter"(): $Optional<($FilterLogic)>
public "getOutputFilter"(): $Optional<($FilterLogic)>
public "setDirection"(arg0: $Direction$Type): void
public "getDirection"(): $Direction
get "inputFilter"(): $Optional<($FilterLogic)>
get "outputFilter"(): $Optional<($FilterLogic)>
set "direction"(value: $Direction$Type)
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeWrapper$Type = ($FilterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeWrapper_ = $FilterUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerInserter" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISlotTracker$IItemHandlerInserter {

 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack

(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}

export namespace $ISlotTracker$IItemHandlerInserter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerInserter$Type = ($ISlotTracker$IItemHandlerInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker$IItemHandlerInserter_ = $ISlotTracker$IItemHandlerInserter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $RecipeWrapperSerializer<T extends $Recipe<(any)>, R extends ($Recipe<(any)>) & ($IWrapperRecipe<(T)>)> implements $RecipeSerializer<(R)> {

constructor(arg0: $Function$Type<(T), (R)>, arg1: $RecipeSerializer$Type<(T)>)

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapperSerializer$Type<T, R> = ($RecipeWrapperSerializer<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapperSerializer_<T, R> = $RecipeWrapperSerializer$Type<(T), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $IRenderedBatteryUpgrade$BatteryRenderInfo {

constructor(arg0: float)

public static "deserialize"(arg0: $CompoundTag$Type): $IRenderedBatteryUpgrade$BatteryRenderInfo
public "serialize"(): $CompoundTag
public "setChargeRatio"(arg0: float): void
public "getChargeRatio"(): float
set "chargeRatio"(value: float)
get "chargeRatio"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$BatteryRenderInfo$Type = ($IRenderedBatteryUpgrade$BatteryRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade$BatteryRenderInfo_ = $IRenderedBatteryUpgrade$BatteryRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$BlastingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingUpgradeWrapper$BlastingUpgradeWrapper, $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$BlastingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlastingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$BlastingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getType"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingUpgradeItem$Type = ($BlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastingUpgradeItem_ = $BlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeConfig" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $XpPumpUpgradeConfig {
readonly "maxXpPointsPerMending": $ForgeConfigSpec$IntValue
readonly "mendingOn": $ForgeConfigSpec$BooleanValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeConfig$Type = ($XpPumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeConfig_ = $XpPumpUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem" {
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"

export interface $ICookingUpgradeItem {

 "getCookingUpgradeConfig"(): $CookingUpgradeConfig

(): $CookingUpgradeConfig
}

export namespace $ICookingUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgradeItem$Type = ($ICookingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgradeItem_ = $ICookingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeWrapper" {
import {$AnvilUpgradeItem, $AnvilUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $AnvilUpgradeWrapper extends $UpgradeWrapperBase<($AnvilUpgradeWrapper), ($AnvilUpgradeItem)> {


public "getInventory"(): $ItemStackHandler
public "getItemName"(): string
public "setItemName"(arg0: string): void
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
get "inventory"(): $ItemStackHandler
get "itemName"(): string
set "itemName"(value: string)
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeWrapper$Type = ($AnvilUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeWrapper_ = $AnvilUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerSimpleInserter extends $IItemHandlerModifiable {

 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getSlots"(): integer
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "isMutable"(): boolean
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getSlots"(): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getStackInSlot"(i: integer): $ItemStack
 "getSlotLimit"(i: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
 "getAllItems"(): $List<($ItemStack)>
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "isEmpty"(): boolean
 "getHeight"(): integer
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "setChanged"(): void
 "asContainer"(): $Container
 "getWidth"(): integer
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
}

export namespace $IItemHandlerSimpleInserter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleInserter$Type = ($IItemHandlerSimpleInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerSimpleInserter_ = $IItemHandlerSimpleInserter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MagnetUpgradeItem, $MagnetUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeItem"
import {$IMagnetPreventionChecker, $IMagnetPreventionChecker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$IMagnetPreventionChecker"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $MagnetUpgradeWrapper extends $UpgradeWrapperBase<($MagnetUpgradeWrapper), ($MagnetUpgradeItem)> implements $IContentsFilteredUpgrade, $ITickableUpgrade, $IPickupResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "shouldPickupItems"(): boolean
public "shouldPickupXp"(): boolean
public "setPickupXp"(arg0: boolean): void
public "setPickupItems"(arg0: boolean): void
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public static "addMagnetPreventionChecker"(arg0: $IMagnetPreventionChecker$Type): void
set "pickupXp"(value: boolean)
set "pickupItems"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeWrapper$Type = ($MagnetUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeWrapper_ = $MagnetUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$CompactingUpgradeWrapper, $CompactingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompactingUpgradeItem extends $UpgradeItemBase<($CompactingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)

public "shouldCompactThreeByThree"(): boolean
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($CompactingUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($CompactingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeItem$Type = ($CompactingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeItem_ = $CompactingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade" {
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInsertResponseUpgrade {

 "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
 "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
}

export namespace $IInsertResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertResponseUpgrade$Type = ($IInsertResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInsertResponseUpgrade_ = $IInsertResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem" {
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"

export interface $IAutoCookingUpgradeItem {

 "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig

(): $AutoCookingUpgradeConfig
}

export namespace $IAutoCookingUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoCookingUpgradeItem$Type = ($IAutoCookingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoCookingUpgradeItem_ = $IAutoCookingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"

export interface $IUpgradeItem<T extends $IUpgradeWrapper> {

 "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
 "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
 "getUpgradesPerStorage"(arg0: string): integer
 "getUpgradesInGroupPerStorage"(arg0: string): integer
 "getInventoryColumnsTaken"(): integer
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
 "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
 "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
 "getUpgradeGroup"(): $UpgradeGroup
 "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
 "getName"(): $Component
 "getType"(): $UpgradeType<(T)>
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$Type<T> = ($IUpgradeItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_<T> = $IUpgradeItem$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MainSettingsCategory, $MainSettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/main/$MainSettingsCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SettingsHandler {


public "getGlobalSettingsCategoryName"(): string
public "instantiateGlobalSettingsCategory"(arg0: $CompoundTag$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): $ISettingsCategory<(any)>
public "getNbt"(): $CompoundTag
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "getTypeCategory"<T extends $ISettingsCategory<(any)>>(arg0: $Class$Type<(T)>): T
public "getGlobalSettingsCategory"(): $MainSettingsCategory<(any)>
public "getCategoriesThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "getSettingsCategories"(): $Map<(string), ($ISettingsCategory<(any)>)>
get "globalSettingsCategoryName"(): string
get "nbt"(): $CompoundTag
get "globalSettingsCategory"(): $MainSettingsCategory<(any)>
get "settingsCategories"(): $Map<(string), ($ISettingsCategory<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsHandler$Type = ($SettingsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsHandler_ = $SettingsHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey" {
import {$TickEvent$ServerTickEvent, $TickEvent$ServerTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackKey {


public static "clearCacheOnTickEnd"(arg0: $TickEvent$ServerTickEvent$Type): void
public static "canItemStacksStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "hashCodeNotEquals"(arg0: $ItemStack$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $ItemStack$Type): $ItemStackKey
public "stack"(): $ItemStack
public static "getHashCode"(arg0: $ItemStack$Type): integer
public "getStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKey$Type = ($ItemStackKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackKey_ = $ItemStackKey$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ITickableUpgrade {

 "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void

(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}

export namespace $ITickableUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUpgrade$Type = ($ITickableUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableUpgrade_ = $ITickableUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$XpPumpUpgradeConfig, $XpPumpUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$XpPumpUpgradeWrapper, $XpPumpUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeWrapper"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $XpPumpUpgradeItem extends $UpgradeItemBase<($XpPumpUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($XpPumpUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $XpPumpUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getXpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($XpPumpUpgradeWrapper)>
get "xpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($XpPumpUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeItem$Type = ($XpPumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeItem_ = $XpPumpUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IUpgradeWrapper {

 "isEnabled"(): boolean
 "setEnabled"(arg0: boolean): void
 "canBeDisabled"(): boolean
 "getUpgradeStack"(): $ItemStack
 "hideSettingsTab"(): boolean
 "onBeforeRemoved"(): void
 "onAdded"(): void
}

export namespace $IUpgradeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapper$Type = ($IUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapper_ = $IUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InventoryPartitioner$SlotRange, $InventoryPartitioner$SlotRange$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner$SlotRange"
import {$IInventoryPartHandler, $IInventoryPartHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MemorySettingsCategory, $MemorySettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryPartitioner {

constructor(arg0: $CompoundTag$Type, arg1: $InventoryHandler$Type, arg2: $Supplier$Type<($MemorySettingsCategory$Type)>)

public "serializeNBT"(): $CompoundTag
public "isFilterItem"(arg0: $Item$Type): boolean
public "getNoSortSlots"(): $Set<(integer)>
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
public "onInit"(): void
public "getPartBySlot"(arg0: integer): $IInventoryPartHandler
public "onSlotLimitChange"(): void
public "removeInventoryPart"(arg0: integer): void
public "addInventoryPart"(arg0: integer, arg1: integer, arg2: $IInventoryPartHandler$Type): void
public "getFirstSpace"(arg0: integer): $Optional<($InventoryPartitioner$SlotRange)>
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$Type = ($InventoryPartitioner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPartitioner_ = $InventoryPartitioner$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper" {
import {$RefillUpgradeWrapper$TargetSlot, $RefillUpgradeWrapper$TargetSlot$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper$TargetSlot"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$RefillUpgradeItem, $RefillUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockPickResponseUpgrade, $IBlockPickResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockPickResponseUpgrade"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RefillUpgradeWrapper extends $UpgradeWrapperBase<($RefillUpgradeWrapper), ($RefillUpgradeItem)> implements $IFilteredUpgrade, $ITickableUpgrade, $IBlockPickResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $FilterLogic
public "getTargetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setTargetSlot"(arg0: integer, arg1: $RefillUpgradeWrapper$TargetSlot$Type): void
public "allowsTargetSlotSelection"(): boolean
public "pickBlock"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
get "filterLogic"(): $FilterLogic
get "targetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$Type = ($RefillUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper_ = $RefillUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$RestockUpgradeWrapper, $RestockUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RestockUpgradeItem extends $UpgradeItemBase<($RestockUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($RestockUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($RestockUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeItem$Type = ($RestockUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeItem_ = $RestockUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade" {
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IFilteredUpgrade {

 "getFilterLogic"(): $FilterLogic

(): $FilterLogic
}

export namespace $IFilteredUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteredUpgrade$Type = ($IFilteredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilteredUpgrade_ = $IFilteredUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockToolSwapUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockToolSwapUpgrade {

 "onBlockInteract"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
 "canProcessBlockInteract"(): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
}

export namespace $IBlockToolSwapUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockToolSwapUpgrade$Type = ($IBlockToolSwapUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockToolSwapUpgrade_ = $IBlockToolSwapUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade" {
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export interface $ICookingUpgrade<T extends $AbstractCookingRecipe> {

 "getCookingLogic"(): $CookingLogic<(T)>

(): $CookingLogic<(T)>
}

export namespace $ICookingUpgrade {
const UPGRADE_GROUP: $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgrade$Type<T> = ($ICookingUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgrade_<T> = $ICookingUpgrade$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DepositFilterLogic, $DepositFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterLogic"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DepositUpgradeItem, $DepositUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $DepositUpgradeWrapper extends $UpgradeWrapperBase<($DepositUpgradeWrapper), ($DepositUpgradeItem)> implements $IFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $DepositFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void
get "filterLogic"(): $DepositFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeWrapper$Type = ($DepositUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeWrapper_ = $DepositUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper" {
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ICookingUpgrade, $ICookingUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade"
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CookingUpgradeWrapper<W extends $CookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($ICookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {


public "getCookingLogic"(): $CookingLogic<(R)>
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setEnabled"(arg0: boolean): void
public "onBeforeRemoved"(): void
get "cookingLogic"(): $CookingLogic<(R)>
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$Type<W, U, R> = ($CookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper_<W, U, R> = $CookingUpgradeWrapper$Type<(W), (U), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BasicBackpackRecipe, $BasicBackpackRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicBackpackRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BasicBackpackRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Serializer$Type = ($BasicBackpackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe$Serializer_ = $BasicBackpackRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeWrapper" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StonecutterUpgradeItem, $StonecutterUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeItem"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $StonecutterUpgradeWrapper extends $UpgradeWrapperBase<($StonecutterUpgradeWrapper), ($StonecutterUpgradeItem)> {


public "getInputInventory"(): $IItemHandlerModifiable
public "getRecipeId"(): $Optional<($ResourceLocation)>
public "setRecipeId"(arg0: $ResourceLocation$Type): void
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
get "inputInventory"(): $IItemHandlerModifiable
get "recipeId"(): $Optional<($ResourceLocation)>
set "recipeId"(value: $ResourceLocation$Type)
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeWrapper$Type = ($StonecutterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeWrapper_ = $StonecutterUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StackUpgradeItem$Wrapper, $StackUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem$Wrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackUpgradeItem extends $UpgradeItemBase<($StackUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($StackUpgradeItem$Wrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: double, arg1: $IUpgradeCountLimitConfig$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public static "getInventorySlotLimit"(arg0: $IStorageWrapper$Type): integer
public "getUpgradeGroup"(): $UpgradeGroup
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
public "getType"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Type = ($StackUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem_ = $StackUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase" {
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"

export class $UpgradeWrapperBase<W extends $IUpgradeWrapper, T extends $UpgradeItemBase<(W)>> implements $IUpgradeWrapper {


public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "getUpgradeStack"(): $ItemStack
public "getCooldownTime"(): long
public "isInCooldown"(arg0: $Level$Type): boolean
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
public "onBeforeRemoved"(): void
public "onAdded"(): void
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
get "cooldownTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWrapperBase$Type<W, T> = ($UpgradeWrapperBase<(W), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeWrapperBase_<W, T> = $UpgradeWrapperBase$Type<(W), (T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$FilterUpgradeWrapper, $FilterUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterUpgradeItem extends $UpgradeItemBase<($FilterUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($FilterUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($FilterUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($FilterUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeItem$Type = ($FilterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeItem_ = $FilterUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeWrapper" {
import {$IEntityToolSwapUpgrade, $IEntityToolSwapUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEntityToolSwapUpgrade"
import {$ToolSwapMode, $ToolSwapMode$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ToolSwapperUpgradeItem, $ToolSwapperUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IAttackEntityResponseUpgrade, $IAttackEntityResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IAttackEntityResponseUpgrade"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IBlockClickResponseUpgrade, $IBlockClickResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockClickResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IBlockToolSwapUpgrade, $IBlockToolSwapUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockToolSwapUpgrade"

export class $ToolSwapperUpgradeWrapper extends $UpgradeWrapperBase<($ToolSwapperUpgradeWrapper), ($ToolSwapperUpgradeItem)> implements $IBlockClickResponseUpgrade, $IAttackEntityResponseUpgrade, $IBlockToolSwapUpgrade, $IEntityToolSwapUpgrade {


public "getFilterLogic"(): $FilterLogic
public "onBlockClick"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public "onAttackEntity"(arg0: $Player$Type): boolean
public "onEntityInteract"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean
public "setSwapWeapon"(arg0: boolean): void
public "shouldSwapWeapon"(): boolean
public "getToolSwapMode"(): $ToolSwapMode
public "setToolSwapMode"(arg0: $ToolSwapMode$Type): void
public "onBlockInteract"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
public "hideSettingsTab"(): boolean
public "canProcessEntityInteract"(): boolean
public "canProcessBlockInteract"(): boolean
get "filterLogic"(): $FilterLogic
set "swapWeapon"(value: boolean)
get "toolSwapMode"(): $ToolSwapMode
set "toolSwapMode"(value: $ToolSwapMode$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeWrapper$Type = ($ToolSwapperUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeWrapper_ = $ToolSwapperUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ContentsFilterType extends $Enum<($ContentsFilterType)> implements $StringRepresentable {
static readonly "ALLOW": $ContentsFilterType
static readonly "BLOCK": $ContentsFilterType
static readonly "STORAGE": $ContentsFilterType


public "getSerializedName"(): string
public static "fromName"(arg0: string): $ContentsFilterType
public static "values"(): ($ContentsFilterType)[]
public static "valueOf"(arg0: string): $ContentsFilterType
public "next"(): $ContentsFilterType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterType$Type = (("allow") | ("block") | ("storage")) | ($ContentsFilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterType_ = $ContentsFilterType$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $AutoCookingUpgradeConfig extends $CookingUpgradeConfig {
readonly "inputFilterSlots": $ForgeConfigSpec$IntValue
readonly "inputFilterSlotsInRow": $ForgeConfigSpec$IntValue
readonly "fuelFilterSlots": $ForgeConfigSpec$IntValue
readonly "fuelFilterSlotsInRow": $ForgeConfigSpec$IntValue
readonly "cookingSpeedMultiplier": $ForgeConfigSpec$DoubleValue
readonly "fuelEfficiencyMultiplier": $ForgeConfigSpec$DoubleValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeConfig$Type = ($AutoCookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeConfig_ = $AutoCookingUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IStorageFluidHandler extends $IFluidHandlerItem {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): integer
 "fill"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $Fluid$Type, arg3: $IFluidHandler$FluidAction$Type, arg4: boolean): integer
 "fill"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $Fluid$Type, arg3: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $IFluidHandler$FluidAction$Type, arg3: boolean): $FluidStack
 "getContainer"(): $ItemStack
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
}

export namespace $IStorageFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageFluidHandler$Type = ($IStorageFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageFluidHandler_ = $IStorageFluidHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper$TargetSlot" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RefillUpgradeWrapper$TargetSlot extends $Enum<($RefillUpgradeWrapper$TargetSlot)> implements $StringRepresentable {
static readonly "ANY": $RefillUpgradeWrapper$TargetSlot
static readonly "MAIN_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "OFF_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_1": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_2": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_3": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_4": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_5": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_6": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_7": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_8": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_9": $RefillUpgradeWrapper$TargetSlot


public "getAcronym"(): $Component
public "getSerializedName"(): string
public static "fromName"(arg0: string): $RefillUpgradeWrapper$TargetSlot
public static "values"(): ($RefillUpgradeWrapper$TargetSlot)[]
public static "valueOf"(arg0: string): $RefillUpgradeWrapper$TargetSlot
public "next"(): $RefillUpgradeWrapper$TargetSlot
public "previous"(): $RefillUpgradeWrapper$TargetSlot
public "getDescription"(): $Component
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "acronym"(): $Component
get "serializedName"(): string
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$TargetSlot$Type = (("main_hand") | ("toolbar_8") | ("toolbar_9") | ("toolbar_6") | ("toolbar_7") | ("toolbar_4") | ("toolbar_5") | ("off_hand") | ("toolbar_2") | ("toolbar_3") | ("toolbar_1") | ("any")) | ($RefillUpgradeWrapper$TargetSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper$TargetSlot_ = $RefillUpgradeWrapper$TargetSlot$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ICookingUpgrade, $ICookingUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $AutoCookingUpgradeWrapper<W extends $AutoCookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($IAutoCookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>, arg3: $RecipeType$Type<(R)>, arg4: float)

public "getCookingLogic"(): $CookingLogic<(R)>
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getFuelFilterLogic"(): $FilterLogic
public "setEnabled"(arg0: boolean): void
public "getInputFilterLogic"(): $FilterLogic
public "onBeforeRemoved"(): void
get "cookingLogic"(): $CookingLogic<(R)>
get "fuelFilterLogic"(): $FilterLogic
set "enabled"(value: boolean)
get "inputFilterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$Type<W, U, R> = ($AutoCookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper_<W, U, R> = $AutoCookingUpgradeWrapper$Type<(W), (U), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItemBase<T extends $IUpgradeWrapper> extends $ItemBase implements $IUpgradeItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any


public "getUpgradesPerStorage"(arg0: string): integer
public "getUpgradesInGroupPerStorage"(arg0: string): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(): $Component
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
public "getInventoryColumnsTaken"(): integer
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
public "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "getUpgradeGroup"(): $UpgradeGroup
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
public "getType"(): $UpgradeType<(T)>
get "name"(): $Component
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "inventoryColumnsTaken"(): integer
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItemBase$Type<T> = ($UpgradeItemBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItemBase_<T> = $UpgradeItemBase$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade"
import {$RestockUpgradeItem, $RestockUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $RestockUpgradeWrapper extends $UpgradeWrapperBase<($RestockUpgradeWrapper), ($RestockUpgradeItem)> implements $IContentsFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $ContentsFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void
get "filterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeWrapper$Type = ($RestockUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeWrapper_ = $RestockUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$UpgradeRenderDataType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IUpgradeRenderData, $IUpgradeRenderData$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData"

export class $UpgradeRenderDataType<T extends $IUpgradeRenderData> {

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $Function$Type<($CompoundTag$Type), (T)>)

public "deserialize"(arg0: $CompoundTag$Type): T
public "getName"(): string
public "cast"(arg0: $IUpgradeRenderData$Type): $Optional<(T)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeRenderDataType$Type<T> = ($UpgradeRenderDataType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeRenderDataType_<T> = $UpgradeRenderDataType$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$IUpgradeAccessModifier, $IUpgradeAccessModifier$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeAccessModifier"
import {$IEnergyStorageUpgradeWrapper, $IEnergyStorageUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEnergyStorageUpgradeWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryOrder, $InventoryOrder$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InventoryOrder"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$IInventoryWrapperUpgrade, $IInventoryWrapperUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IInventoryWrapperUpgrade"
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFluidHandlerWrapperUpgrade, $IFluidHandlerWrapperUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IFluidHandlerWrapperUpgrade"
import {$InceptionUpgradeItem, $InceptionUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeItem"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $InceptionUpgradeWrapper extends $UpgradeWrapperBase<($InceptionUpgradeWrapper), ($InceptionUpgradeItem)> implements $IInventoryWrapperUpgrade, $IUpgradeAccessModifier, $IFluidHandlerWrapperUpgrade, $IEnergyStorageUpgradeWrapper {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "wrapInventory"(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler
public "getInventoryOrder"(): $InventoryOrder
public "setInventoryOrder"(arg0: $InventoryOrder$Type): void
public "wrapHandler"(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler
public "wrapStorage"(arg0: $IEnergyStorage$Type): $IEnergyStorage
public "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor
public "hideSettingsTab"(): boolean
get "inventoryOrder"(): $InventoryOrder
set "inventoryOrder"(value: $InventoryOrder$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeWrapper$Type = ($InceptionUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeWrapper_ = $InceptionUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$AutomationDirection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AutomationDirection extends $Enum<($AutomationDirection)> implements $StringRepresentable {
static readonly "INPUT": $AutomationDirection
static readonly "OUTPUT": $AutomationDirection
static readonly "OFF": $AutomationDirection


public "getSerializedName"(): string
public static "fromName"(arg0: string): $AutomationDirection
public static "values"(): ($AutomationDirection)[]
public static "valueOf"(arg0: string): $AutomationDirection
public "next"(): $AutomationDirection
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomationDirection$Type = (("output") | ("input") | ("off")) | ($AutomationDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationDirection_ = $AutomationDirection$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmeltingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmeltingUpgradeItem, $SmeltingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmeltingUpgradeItem"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"

export class $CookingUpgradeWrapper$SmeltingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmeltingUpgradeWrapper), ($SmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type = ($CookingUpgradeWrapper$SmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper_ = $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TankPosition, $TankPosition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$TankPosition"
import {$UpgradeRenderDataType, $UpgradeRenderDataType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$UpgradeRenderDataType"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$IUpgradeRenderData, $IUpgradeRenderData$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderInfo$ItemDisplayRenderInfo, $RenderInfo$ItemDisplayRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$ItemDisplayRenderInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderInfo {


public "getTankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
public "getBatteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
public "getItemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
public "setBatteryRenderInfo"(arg0: $IRenderedBatteryUpgrade$BatteryRenderInfo$Type): void
public "refreshItemDisplayRenderInfo"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>, arg1: $List$Type<(integer)>): void
public "setUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$Type<(T)>, arg1: T): void
public "removeUpgradeRenderData"(arg0: $UpgradeRenderDataType$Type<(any)>): void
public "getUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$Type<(T)>): $Optional<(T)>
public "getUpgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
public "getNbt"(): $CompoundTag
public "setChangeListener"(arg0: $Consumer$Type<($RenderInfo$Type)>): void
public "deserializeFrom"(arg0: $CompoundTag$Type): void
public "getUpgradeItems"(): $List<($ItemStack)>
public "setUpgradeItems"(arg0: $List$Type<($ItemStack$Type)>): void
public "setTankRenderInfo"(arg0: $TankPosition$Type, arg1: $IRenderedTankUpgrade$TankRenderInfo$Type): void
public "resetUpgradeInfo"(arg0: boolean): void
get "tankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
get "batteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
get "itemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
set "batteryRenderInfo"(value: $IRenderedBatteryUpgrade$BatteryRenderInfo$Type)
get "upgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
get "nbt"(): $CompoundTag
set "changeListener"(value: $Consumer$Type<($RenderInfo$Type)>)
get "upgradeItems"(): $List<($ItemStack)>
set "upgradeItems"(value: $List$Type<($ItemStack$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$Type = ($RenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo_ = $RenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ISettingsCategory<T extends $ISettingsCategory<(any)>> {

 "reloadFrom"(arg0: $CompoundTag$Type): void
 "copyTo"(arg0: T, arg1: integer, arg2: integer): void
 "isLargerThanNumberOfSlots"(arg0: integer): boolean
 "deleteSlotSettingsFrom"(arg0: integer): void
 "overwriteWith"(arg0: T): void
}

export namespace $ISettingsCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsCategory$Type<T> = ($ISettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingsCategory_<T> = $ISettingsCategory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $TankUpgradeConfig {
readonly "capacityPerSlotRow": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "autoFillDrainContainerCooldown": $ForgeConfigSpec$IntValue
readonly "maxInputOutput": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeConfig$Type = ($TankUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeConfig_ = $TankUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$Direction" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Direction extends $Enum<($Direction)> implements $StringRepresentable {
static readonly "BOTH": $Direction
static readonly "INPUT": $Direction
static readonly "OUTPUT": $Direction


public "getSerializedName"(): string
public static "fromName"(arg0: string): $Direction
public static "values"(): ($Direction)[]
public static "valueOf"(arg0: string): $Direction
public "next"(): $Direction
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$Type = (("output") | ("input") | ("both")) | ($Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Direction_ = $Direction$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$MagnetUpgradeWrapper, $MagnetUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnetUpgradeItem extends $UpgradeItemBase<($MagnetUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($MagnetUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)

public "getRadius"(): integer
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($MagnetUpgradeWrapper)>
get "radius"(): integer
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($MagnetUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$Type = ($MagnetUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeItem_ = $MagnetUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IOverflowResponseUpgrade" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IOverflowResponseUpgrade {

 "getFilterLogic"(): $FilterLogic
 "onOverflow"(arg0: $ItemStack$Type): $ItemStack
 "stackMatchesFilter"(arg0: $ItemStack$Type): boolean
 "worksInGui"(): boolean
 "stackMatchesFilterStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IOverflowResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverflowResponseUpgrade$Type = ($IOverflowResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverflowResponseUpgrade_ = $IOverflowResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmokingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingUpgradeWrapper$SmokingUpgradeWrapper, $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmokingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmokingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmokingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingUpgradeItem$Type = ($SmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokingUpgradeItem_ = $SmokingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ISlotTracker, $ISlotTracker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$InventoryPartitioner, $InventoryPartitioner$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export class $InventoryHandler extends $ItemStackHandler implements $ITrackedContentsItemHandler {
static readonly "INVENTORY_TAG": string


public "getTrackedStacks"(): $Set<($ItemStackKey)>
public "addListener"(arg0: $IntConsumer$Type): void
public "hasEmptySlots"(): boolean
public "changeSlots"(arg0: integer): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "registerTrackingListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
public "unregisterStackKeyListeners"(): void
public "registerFilterItemsChangeListener"(arg0: $Consumer$Type<($Set$Type<($Item$Type)>)>): void
public "isFilterItem"(arg0: $Item$Type): boolean
public "triggerOnChangeListeners"(arg0: integer): void
public "getInventoryPartitioner"(): $InventoryPartitioner
public "onFilterItemsChanged"(): void
public "insertItemOnlyToSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$Type): void
public "saveInventory"(): void
public "getNoSortSlots"(): $Set<(integer)>
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "getBaseStackLimit"(arg0: $ItemStack$Type): integer
public "isSlotAccessible"(arg0: integer): boolean
public "getFilterItem"(arg0: integer): $Item
public "getFilterItems"(): $Set<($Item)>
public "clearListeners"(): void
public "onInit"(): void
public "copyStacksTo"(arg0: $InventoryHandler$Type): void
public "setBaseSlotLimit"(arg0: integer): void
public "setSlotStack"(arg0: integer, arg1: $ItemStack$Type): void
public "getBaseSlotLimit"(): integer
public "initFilterItems"(): void
public "getSlotTracker"(): $ISlotTracker
public "extractItemInternal"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "unregisterFilterItemsChangeListener"(): void
public "getStackSizeMultiplier"(): double
public "getSlotStack"(arg0: integer): $ItemStack
public "setPersistent"(arg0: boolean): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "getStackLimit"(arg0: integer, arg1: $ItemStack$Type): integer
public "validateSlotIndex"(arg0: integer): void
public "onContentsChanged"(arg0: integer): void
public "onSlotFilterChanged"(arg0: integer): void
public "getInternalSlotLimit"(arg0: integer): integer
public "setSize"(arg0: integer): void
get "trackedStacks"(): $Set<($ItemStackKey)>
get "inventoryPartitioner"(): $InventoryPartitioner
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$Type)
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Set<($Item)>
set "baseSlotLimit"(value: integer)
get "baseSlotLimit"(): integer
get "slotTracker"(): $ISlotTracker
get "stackSizeMultiplier"(): double
set "persistent"(value: boolean)
set "size"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryHandler$Type = ($InventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryHandler_ = $InventoryHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockClickResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockClickResponseUpgrade {

 "onBlockClick"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean

(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IBlockClickResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockClickResponseUpgrade$Type = ($IBlockClickResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockClickResponseUpgrade_ = $IBlockClickResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$JukeboxUpgradeItem$Wrapper, $JukeboxUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem$Wrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JukeboxUpgradeItem extends $UpgradeItemBase<($JukeboxUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($JukeboxUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($JukeboxUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($JukeboxUpgradeItem$Wrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$Type = ($JukeboxUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeItem_ = $JukeboxUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$FluidFilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidFilterLogic {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFluid"(arg0: integer): $FluidStack
public "fluidMatches"(arg0: $FluidStack$Type): boolean
public "setFluid"(arg0: integer, arg1: $FluidStack$Type): void
public "getNumberOfFluidFilters"(): integer
get "numberOfFluidFilters"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilterLogic$Type = ($FluidFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilterLogic_ = $FluidFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$DepositUpgradeWrapper, $DepositUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DepositUpgradeItem extends $UpgradeItemBase<($DepositUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($DepositUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($DepositUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeItem$Type = ($DepositUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeItem_ = $DepositUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic$ObservableFilterItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterItemStackHandler, $FilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $FilterLogic$ObservableFilterItemStackHandler extends $FilterItemStackHandler {

constructor(arg0: $FilterLogic$Type)

public "setOnSlotChange"(arg0: $IntConsumer$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
set "onSlotChange"(value: $IntConsumer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$ObservableFilterItemStackHandler$Type = ($FilterLogic$ObservableFilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic$ObservableFilterItemStackHandler_ = $FilterLogic$ObservableFilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$ItemDisplayRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"

export class $RenderInfo$ItemDisplayRenderInfo {

constructor()

public static "deserialize"(arg0: $CompoundTag$Type): $RenderInfo$ItemDisplayRenderInfo
public "getDisplayItem"(): $Optional<($RenderInfo$DisplayItem)>
public "serialize"(): $CompoundTag
public "getDisplayItems"(): $List<($RenderInfo$DisplayItem)>
public "getInaccessibleSlots"(): $List<(integer)>
get "displayItem"(): $Optional<($RenderInfo$DisplayItem)>
get "displayItems"(): $List<($RenderInfo$DisplayItem)>
get "inaccessibleSlots"(): $List<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$ItemDisplayRenderInfo$Type = ($RenderInfo$ItemDisplayRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$ItemDisplayRenderInfo_ = $RenderInfo$ItemDisplayRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IFluidHandlerWrapperUpgrade" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"

export interface $IFluidHandlerWrapperUpgrade {

 "wrapHandler"(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler

(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler
}

export namespace $IFluidHandlerWrapperUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerWrapperUpgrade$Type = ($IFluidHandlerWrapperUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerWrapperUpgrade_ = $IFluidHandlerWrapperUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $BatteryUpgradeConfig {
readonly "energyPerSlotRow": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "maxInputOutput": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeConfig$Type = ($BatteryUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeConfig_ = $BatteryUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler" {
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterItemStackHandler extends $ItemStackHandler {

constructor(arg0: integer)

public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "hasOnlyEmptyFilters"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemStackHandler$Type = ($FilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItemStackHandler_ = $FilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IStashStorageItem$StashResult extends $Enum<($IStashStorageItem$StashResult)> {
static readonly "MATCH_AND_SPACE": $IStashStorageItem$StashResult
static readonly "SPACE": $IStashStorageItem$StashResult
static readonly "NO_SPACE": $IStashStorageItem$StashResult


public static "values"(): ($IStashStorageItem$StashResult)[]
public static "valueOf"(arg0: string): $IStashStorageItem$StashResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$StashResult$Type = (("match_and_space") | ("no_space") | ("space")) | ($IStashStorageItem$StashResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem$StashResult_ = $IStashStorageItem$StashResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$PickupUpgradeItem, $PickupUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeItem"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $PickupUpgradeWrapper extends $UpgradeWrapperBase<($PickupUpgradeWrapper), ($PickupUpgradeItem)> implements $IPickupResponseUpgrade, $IContentsFilteredUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $ContentsFilterLogic
public "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
get "filterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeWrapper$Type = ($PickupUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeWrapper_ = $PickupUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogicBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$PrimaryMatch, $PrimaryMatch$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$PrimaryMatch"

export class $FilterLogicBase {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: string)

public "getParentTagKey"(): string
public "setAllowList"(arg0: boolean): void
public "removeTagName"(arg0: $TagKey$Type<($Item$Type)>): void
public "isAllowList"(): boolean
public "setMatchDurability"(arg0: boolean): void
public "setMatchNbt"(arg0: boolean): void
public "shouldMatchAnyTag"(): boolean
public "setMatchAnyTag"(arg0: boolean): void
public "setPrimaryMatch"(arg0: $PrimaryMatch$Type): void
public "getTagKeys"(): $Set<($TagKey<($Item)>)>
public "setAllowByDefault"(arg0: boolean): void
public "stackMatchesFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getPrimaryMatch"(): $PrimaryMatch
public "shouldMatchNbt"(): boolean
public "addTag"(arg0: $TagKey$Type<($Item$Type)>): void
public "shouldMatchDurability"(): boolean
get "parentTagKey"(): string
set "allowList"(value: boolean)
get "allowList"(): boolean
set "matchDurability"(value: boolean)
set "matchNbt"(value: boolean)
set "matchAnyTag"(value: boolean)
set "primaryMatch"(value: $PrimaryMatch$Type)
get "tagKeys"(): $Set<($TagKey<($Item)>)>
set "allowByDefault"(value: boolean)
get "primaryMatch"(): $PrimaryMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogicBase$Type = ($FilterLogicBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogicBase_ = $FilterLogicBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem$Wrapper" {
import {$StackUpgradeItem, $StackUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $StackUpgradeItem$Wrapper extends $UpgradeWrapperBase<($StackUpgradeItem$Wrapper), ($StackUpgradeItem)> {


public "getStackSizeMultiplier"(): double
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
get "stackSizeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Wrapper$Type = ($StackUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem$Wrapper_ = $StackUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPickupResponseUpgrade {

 "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack

(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}

export namespace $IPickupResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPickupResponseUpgrade$Type = ($IPickupResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPickupResponseUpgrade_ = $IPickupResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeAccessModifier" {
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor"

export interface $IUpgradeAccessModifier {

 "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor

(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor
}

export namespace $IUpgradeAccessModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeAccessModifier$Type = ($IUpgradeAccessModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeAccessModifier_ = $IUpgradeAccessModifier$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$CraftingUpgradeWrapper, $CraftingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingUpgradeItem extends $UpgradeItemBase<($CraftingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($CraftingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($CraftingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeItem$Type = ($CraftingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeItem_ = $CraftingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UpgradeType$IFactory, $UpgradeType$IFactory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType$IFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export class $UpgradeType<T extends $IUpgradeWrapper> {

constructor(arg0: $UpgradeType$IFactory$Type<(T)>)

public "create"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type<T> = ($UpgradeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_<T> = $UpgradeType$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$DisplaySide" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DisplaySide extends $Enum<($DisplaySide)> implements $StringRepresentable {
static readonly "FRONT": $DisplaySide
static readonly "LEFT": $DisplaySide
static readonly "RIGHT": $DisplaySide


public "getSerializedName"(): string
public static "fromName"(arg0: string): $DisplaySide
public static "values"(): ($DisplaySide)[]
public static "valueOf"(arg0: string): $DisplaySide
public "next"(): $DisplaySide
public "previous"(): $DisplaySide
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySide$Type = (("left") | ("front") | ("right")) | ($DisplaySide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySide_ = $DisplaySide$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoBlastingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoBlastingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoBlastingUpgradeItem$Type = ($AutoBlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoBlastingUpgradeItem_ = $AutoBlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeItem" {
import {$InceptionUpgradeWrapper, $InceptionUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InceptionUpgradeItem extends $UpgradeItemBase<($InceptionUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($InceptionUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
public "getType"(): $UpgradeType<($InceptionUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($InceptionUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeItem$Type = ($InceptionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeItem_ = $InceptionUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IInventoryWrapperUpgrade" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export interface $IInventoryWrapperUpgrade {

 "wrapInventory"(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler

(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler
}

export namespace $IInventoryWrapperUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryWrapperUpgrade$Type = ($IInventoryWrapperUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryWrapperUpgrade_ = $IInventoryWrapperUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmeltingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoSmeltingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmeltingUpgradeItem$Type = ($AutoSmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmeltingUpgradeItem_ = $AutoSmeltingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $UpgradeNextTierRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getCompose"(): $ShapedRecipe
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "compose"(): $ShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Type = ($UpgradeNextTierRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe_ = $UpgradeNextTierRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilteredUpgradeConfigBase" {
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"

export class $FilteredUpgradeConfigBase {
readonly "filterSlots": $ForgeConfigSpec$IntValue
readonly "slotsInRow": $ForgeConfigSpec$IntValue


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteredUpgradeConfigBase$Type = ($FilteredUpgradeConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteredUpgradeConfigBase_ = $FilteredUpgradeConfigBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $UpgradeSlotChangeResult {


public "getErrorMessage"(): $Optional<($Component)>
public "isSuccessful"(): boolean
public "getErrorUpgradeSlots"(): $Set<(integer)>
public "getErrorInventoryParts"(): $Set<(integer)>
public "getErrorInventorySlots"(): $Set<(integer)>
get "errorMessage"(): $Optional<($Component)>
get "successful"(): boolean
get "errorUpgradeSlots"(): $Set<(integer)>
get "errorInventoryParts"(): $Set<(integer)>
get "errorInventorySlots"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSlotChangeResult$Type = ($UpgradeSlotChangeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSlotChangeResult_ = $UpgradeSlotChangeResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IIOFilterUpgrade" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IIOFilterUpgrade {

 "getInputFilter"(): $Optional<($FilterLogic)>
 "getOutputFilter"(): $Optional<($FilterLogic)>
}

export namespace $IIOFilterUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIOFilterUpgrade$Type = ($IIOFilterUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIOFilterUpgrade_ = $IIOFilterUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"

export interface $IRenderedBatteryUpgrade {

 "forceUpdateBatteryRenderInfo"(): void
 "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>): void
}

export namespace $IRenderedBatteryUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$Type = ($IRenderedBatteryUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade_ = $IRenderedBatteryUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEntityToolSwapUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IEntityToolSwapUpgrade {

 "onEntityInteract"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean
 "canProcessEntityInteract"(): boolean

(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean
}

export namespace $IEntityToolSwapUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityToolSwapUpgrade$Type = ($IEntityToolSwapUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityToolSwapUpgrade_ = $IEntityToolSwapUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$ISlotTracker$IItemHandlerInserter, $ISlotTracker$IItemHandlerInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerInserter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ISlotTracker {

 "getFullStacks"(): $Set<($ItemStackKey)>
 "getPartialStacks"(): $Set<($ItemStackKey)>
 "registerListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
 "hasEmptySlots"(): boolean
 "unregisterStackKeyListeners"(): void
 "refreshSlotIndexesFrom"(arg0: $InventoryHandler$Type): void
 "removeAndSetSlotIndexes"(arg0: $InventoryHandler$Type, arg1: integer, arg2: $ItemStack$Type): void
 "insertItemIntoHandler"(arg0: $InventoryHandler$Type, arg1: $ISlotTracker$IItemHandlerInserter$Type, arg2: $UnaryOperator$Type<($ItemStack$Type)>, arg3: integer, arg4: $ItemStack$Type, arg5: boolean): $ItemStack
 "insertItemIntoHandler"(arg0: $InventoryHandler$Type, arg1: $ISlotTracker$IItemHandlerInserter$Type, arg2: $UnaryOperator$Type<($ItemStack$Type)>, arg3: $ItemStack$Type, arg4: boolean): $ItemStack
 "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$Type): void
 "getItems"(): $Set<($Item)>
 "clear"(): void
}

export namespace $ISlotTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$Type = ($ISlotTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker_ = $ISlotTracker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$IMagnetPreventionChecker" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMagnetPreventionChecker {

 "isBlocked"(arg0: $Entity$Type): boolean

(arg0: $Entity$Type): boolean
}

export namespace $IMagnetPreventionChecker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagnetPreventionChecker$Type = ($IMagnetPreventionChecker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagnetPreventionChecker_ = $IMagnetPreventionChecker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $BackpackUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getCompose"(): $ShapedRecipe
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "compose"(): $ShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Type = ($BackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe_ = $BackpackUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockPickResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBlockPickResponseUpgrade {

 "pickBlock"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean

(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IBlockPickResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPickResponseUpgrade$Type = ($IBlockPickResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPickResponseUpgrade_ = $IBlockPickResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SortBy extends $Enum<($SortBy)> implements $StringRepresentable {
static readonly "NAME": $SortBy
static readonly "MOD": $SortBy
static readonly "COUNT": $SortBy
static readonly "TAGS": $SortBy


public "getSerializedName"(): string
public static "fromName"(arg0: string): $SortBy
public static "values"(): ($SortBy)[]
public static "valueOf"(arg0: string): $SortBy
public "next"(): $SortBy
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortBy$Type = (("mod") | ("name") | ("count") | ("tags")) | ($SortBy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortBy_ = $SortBy$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$PumpUpgradeItem, $PumpUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeItem"
import {$FluidFilterLogic, $FluidFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$FluidFilterLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $PumpUpgradeWrapper extends $UpgradeWrapperBase<($PumpUpgradeWrapper), ($PumpUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setIsInput"(arg0: boolean): void
public "isInput"(): boolean
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "setInteractWithHand"(arg0: boolean): void
public "shouldInteractWithHand"(): boolean
public "getFluidFilterLogic"(): $FluidFilterLogic
public "shouldInteractWithWorld"(): boolean
public "setInteractWithWorld"(arg0: boolean): void
get "input"(): boolean
set "interactWithHand"(value: boolean)
get "fluidFilterLogic"(): $FluidFilterLogic
set "interactWithWorld"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeWrapper$Type = ($PumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeWrapper_ = $PumpUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TankUpgradeWrapper, $TankUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TankUpgradeConfig, $TankUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeConfig"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TankUpgradeItem extends $UpgradeItemBase<($TankUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($TankUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $TankUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getBaseCapacity"(arg0: $IStorageWrapper$Type): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
public "getInventoryColumnsTaken"(): integer
public "getTankUpgradeConfig"(): $TankUpgradeConfig
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "getTankCapacity"(arg0: $IStorageWrapper$Type): integer
public "getType"(): $UpgradeType<($TankUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "inventoryColumnsTaken"(): integer
get "tankUpgradeConfig"(): $TankUpgradeConfig
get "type"(): $UpgradeType<($TankUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeItem$Type = ($TankUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeItem_ = $TankUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStashStorageItem {

 "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
 "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
 "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
}

export namespace $IStashStorageItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$Type = ($IStashStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem_ = $IStashStorageItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade" {
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $ISlotChangeResponseUpgrade {

 "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void

(arg0: $IItemHandler$Type, arg1: integer): void
}

export namespace $ISlotChangeResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeResponseUpgrade$Type = ($ISlotChangeResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotChangeResponseUpgrade_ = $ISlotChangeResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeWrapper" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$XpPumpUpgradeItem, $XpPumpUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AutomationDirection, $AutomationDirection$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$AutomationDirection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $XpPumpUpgradeWrapper extends $UpgradeWrapperBase<($XpPumpUpgradeWrapper), ($XpPumpUpgradeItem)> implements $ITickableUpgrade {


public "setLevel"(arg0: integer): void
public "getLevel"(): integer
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setMendItems"(arg0: boolean): void
public "setDirection"(arg0: $AutomationDirection$Type): void
public "setLevelsToStore"(arg0: integer): void
public "setLevelsToTake"(arg0: integer): void
public "getLevelsToStore"(): integer
public "getLevelsToTake"(): integer
public "shouldMendItems"(): boolean
public "giveLevelsToPlayer"(arg0: $Player$Type): void
public "takeAllExperienceFromPlayer"(arg0: $Player$Type): void
public "giveAllExperienceToPlayer"(arg0: $Player$Type): void
public "takeLevelsFromPlayer"(arg0: $Player$Type): void
public "getDirection"(): $AutomationDirection
set "level"(value: integer)
get "level"(): integer
set "mendItems"(value: boolean)
set "direction"(value: $AutomationDirection$Type)
set "levelsToStore"(value: integer)
set "levelsToTake"(value: integer)
get "levelsToStore"(): integer
get "levelsToTake"(): integer
get "direction"(): $AutomationDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeWrapper$Type = ($XpPumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeWrapper_ = $XpPumpUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper" {
import {$RenderInfo, $RenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$UpgradeHandler, $UpgradeHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$SortBy, $SortBy$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsHandler, $SettingsHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export interface $IStorageWrapper {

 "getContentsUuid"(): $Optional<($UUID)>
 "getUpgradeHandler"(): $UpgradeHandler
 "refreshInventoryForUpgradeProcessing"(): void
 "onInit"(): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "getBaseStackSizeMultiplier"(): integer
 "getInventoryHandler"(): $InventoryHandler
 "setInventorySlotChangeHandler"(arg0: $Runnable$Type): void
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$Type): void
 "refreshInventoryForInputOutput"(): void
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "getNumberOfSlotRows"(): integer
 "getWrappedStorageStack"(): $ItemStack
 "getStorageType"(): string
 "setSortBy"(arg0: $SortBy$Type): void
 "getSortBy"(): $SortBy
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "setSaveHandler"(arg0: $Runnable$Type): void
 "getRenderInfo"(): $RenderInfo
 "removeOpenTabId"(): void
 "getOpenTabId"(): $Optional<(integer)>
 "fillWithLoot"(arg0: $Player$Type): void
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getSettingsHandler"(): $SettingsHandler
 "setColors"(arg0: integer, arg1: integer): void
 "setPersistent"(arg0: boolean): void
 "getColumnsTaken"(): integer
 "setOpenTabId"(arg0: integer): void
 "onContentsNbtUpdated"(): void
 "sort"(): void
 "getDisplayName"(): $Component
}

export namespace $IStorageWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageWrapper$Type = ($IStorageWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageWrapper_ = $IStorageWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeHandler extends $ItemStackHandler {
static readonly "UPGRADE_INVENTORY_TAG": string

constructor(arg0: integer, arg1: $IStorageWrapper$Type, arg2: $CompoundTag$Type, arg3: $Runnable$Type, arg4: $Runnable$Type)

public "removeRefreshCallback"(): void
public "getListOfWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "setRenderUpgradeItems"(): void
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "refreshWrappersThatImplementAndTypeWrappers"(): void
public "saveInventory"(): void
public "copyTo"(arg0: $UpgradeHandler$Type): void
public "setRefreshCallBack"(arg0: $Runnable$Type): void
public "increaseSize"(arg0: integer): void
public "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "getTypeWrappers"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$Type<(T)>): $List<(T)>
public "getSlotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
public "setPersistent"(arg0: boolean): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "refreshUpgradeWrappers"(): void
public "hasUpgrade"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$Type<(T)>): boolean
public "setSize"(arg0: integer): void
set "refreshCallBack"(value: $Runnable$Type)
get "slotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
set "persistent"(value: boolean)
set "size"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeHandler$Type = ($UpgradeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeHandler_ = $UpgradeHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemorySettingsCategory implements $ISettingsCategory<($MemorySettingsCategory)> {
static readonly "NAME": string

constructor(arg0: $Supplier$Type<($InventoryHandler$Type)>, arg1: $CompoundTag$Type, arg2: $Consumer$Type<($CompoundTag$Type)>)

public "registerListeners"(arg0: $Consumer$Type<($Item$Type)>, arg1: $Consumer$Type<($Item$Type)>, arg2: $Consumer$Type<(integer)>, arg3: $Consumer$Type<(integer)>): void
public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "matchesFilter"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setFilter"(arg0: integer, arg1: $ItemStack$Type): void
public "unregisterListeners"(): void
public "selectSlot"(arg0: integer): void
public "getSlotFilterStack"(arg0: integer, arg1: boolean): $Optional<($ItemStack)>
public "getSlotIndexes"(): $Set<(integer)>
public "isSlotSelected"(arg0: integer): boolean
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "copyTo"(arg0: $MemorySettingsCategory$Type, arg1: integer, arg2: integer): void
public "getFilterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "deleteSlotSettingsFrom"(arg0: integer): void
public "overwriteWith"(arg0: $MemorySettingsCategory$Type): void
public "selectSlots"(arg0: integer, arg1: integer): void
public "unselectAllSlots"(): void
public "getFilterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
public "ignoresNbt"(): boolean
public "unselectSlot"(arg0: integer): void
public "setIgnoreNbt"(arg0: boolean): void
get "slotIndexes"(): $Set<(integer)>
get "filterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
get "filterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
set "ignoreNbt"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySettingsCategory$Type = ($MemorySettingsCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemorySettingsCategory_ = $MemorySettingsCategory$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$HungerLevel" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HungerLevel extends $Enum<($HungerLevel)> implements $StringRepresentable {
static readonly "ANY": $HungerLevel
static readonly "HALF": $HungerLevel
static readonly "FULL": $HungerLevel


public "getSerializedName"(): string
public static "fromName"(arg0: string): $HungerLevel
public static "values"(): ($HungerLevel)[]
public static "valueOf"(arg0: string): $HungerLevel
public "next"(): $HungerLevel
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HungerLevel$Type = (("half") | ("any") | ("full")) | ($HungerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HungerLevel_ = $HungerLevel$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$TankPosition" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TankPosition extends $Enum<($TankPosition)> implements $StringRepresentable {
static readonly "LEFT": $TankPosition
static readonly "RIGHT": $TankPosition


public "getSerializedName"(): string
public static "values"(): ($TankPosition)[]
public static "valueOf"(arg0: string): $TankPosition
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankPosition$Type = (("left") | ("right")) | ($TankPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankPosition_ = $TankPosition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$StonecutterUpgradeWrapper, $StonecutterUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StonecutterUpgradeItem extends $UpgradeItemBase<($StonecutterUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($StonecutterUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($StonecutterUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$Type = ($StonecutterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeItem_ = $StonecutterUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ISlotLimitUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISlotLimitUpgrade {

 "getSlotLimit"(): integer

(): integer
}

export namespace $ISlotLimitUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotLimitUpgrade$Type = ($ISlotLimitUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotLimitUpgrade_ = $ISlotLimitUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PumpUpgradeConfig, $PumpUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeConfig"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$PumpUpgradeWrapper, $PumpUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PumpUpgradeItem extends $UpgradeItemBase<($PumpUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: boolean, arg2: $PumpUpgradeConfig$Type, arg3: $IUpgradeCountLimitConfig$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getInteractWithHandDefault"(): boolean
public "getPumpUpgradeConfig"(): $PumpUpgradeConfig
public "getInteractWithWorldDefault"(): boolean
public "getType"(): $UpgradeType<($PumpUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "interactWithHandDefault"(): boolean
get "pumpUpgradeConfig"(): $PumpUpgradeConfig
get "interactWithWorldDefault"(): boolean
get "type"(): $UpgradeType<($PumpUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeItem$Type = ($PumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeItem_ = $PumpUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem" {
import {$EverlastingUpgradeItem$Wrapper, $EverlastingUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem$Wrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EverlastingUpgradeItem extends $UpgradeItemBase<($EverlastingUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Type = ($EverlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem_ = $EverlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export class $CookingLogic<T extends $AbstractCookingRecipe> {
static readonly "COOK_INPUT_SLOT": integer
static readonly "COOK_OUTPUT_SLOT": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $CookingUpgradeConfig$Type, arg3: $RecipeType$Type<(T)>, arg4: float)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $Predicate$Type<($ItemStack$Type)>, arg3: $Predicate$Type<($ItemStack$Type)>, arg4: $CookingUpgradeConfig$Type, arg5: $RecipeType$Type<(T)>, arg6: float)

public "isCooking"(): boolean
public "getCookTimeFinish"(): long
public "getBurnTimeTotal"(): integer
public "getBurnTimeFinish"(): long
public "getCookTimeTotal"(): integer
public "getCookOutput"(): $ItemStack
public "getCookInput"(): $ItemStack
public "setCookInput"(arg0: $ItemStack$Type): void
public "setFuel"(arg0: $ItemStack$Type): void
public "pause"(): void
public "tick"(arg0: $Level$Type): boolean
public "isBurning"(arg0: $Level$Type): boolean
public "getCookingInventory"(): $ItemStackHandler
public "getFuel"(): $ItemStack
get "cooking"(): boolean
get "cookTimeFinish"(): long
get "burnTimeTotal"(): integer
get "burnTimeFinish"(): long
get "cookTimeTotal"(): integer
get "cookOutput"(): $ItemStack
get "cookInput"(): $ItemStack
set "cookInput"(value: $ItemStack$Type)
set "fuel"(value: $ItemStack$Type)
get "cookingInventory"(): $ItemStackHandler
get "fuel"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$Type<T> = ($CookingLogic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingLogic_<T> = $CookingLogic$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType$IFactory" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export interface $UpgradeType$IFactory<T extends $IUpgradeWrapper> {

 "create"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T

(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T
}

export namespace $UpgradeType$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$IFactory$Type<T> = ($UpgradeType$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$IFactory_<T> = $UpgradeType$IFactory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IAttackEntityResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IAttackEntityResponseUpgrade {

 "onAttackEntity"(arg0: $Player$Type): boolean

(arg0: $Player$Type): boolean
}

export namespace $IAttackEntityResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttackEntityResponseUpgrade$Type = ($IAttackEntityResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttackEntityResponseUpgrade_ = $IAttackEntityResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade" {
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"

export interface $IContentsFilteredUpgrade extends $IFilteredUpgrade {

 "getFilterLogic"(): $ContentsFilterLogic

(): $ContentsFilterLogic
}

export namespace $IContentsFilteredUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsFilteredUpgrade$Type = ($IContentsFilteredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentsFilteredUpgrade_ = $IContentsFilteredUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $PumpUpgradeConfig {
readonly "maxInputOutput": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "filterSlots": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeConfig$Type = ($PumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeConfig_ = $PumpUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$FeedingUpgradeWrapper, $FeedingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FeedingUpgradeItem extends $UpgradeItemBase<($FeedingUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($FeedingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($FeedingUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($FeedingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeItem$Type = ($FeedingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeItem_ = $FeedingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UpgradeGroup {
static readonly "NONE": $UpgradeGroup

constructor(arg0: string, arg1: string)

public "isSolo"(): boolean
public "translName"(): string
public "name"(): string
get "solo"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeGroup$Type = ($UpgradeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeGroup_ = $UpgradeGroup$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $CookingUpgradeConfig {
readonly "cookingSpeedMultiplier": $ForgeConfigSpec$DoubleValue
readonly "fuelEfficiencyMultiplier": $ForgeConfigSpec$DoubleValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string)

public static "getInstance"(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeConfig$Type = ($CookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeConfig_ = $CookingUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RefillUpgradeWrapper, $RefillUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RefillUpgradeItem extends $UpgradeItemBase<($RefillUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: boolean, arg2: boolean)

public "allowsTargetSlotSelection"(): boolean
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "supportsBlockPick"(): boolean
public "getType"(): $UpgradeType<($RefillUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($RefillUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeItem$Type = ($RefillUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeItem_ = $RefillUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerInteractionUpgrade {

 "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void

(arg0: $IItemHandler$Type, arg1: $Player$Type): void
}

export namespace $IItemHandlerInteractionUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerInteractionUpgrade$Type = ($IItemHandlerInteractionUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerInteractionUpgrade_ = $IItemHandlerInteractionUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$HungerLevel, $HungerLevel$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$HungerLevel"
import {$FeedingUpgradeItem, $FeedingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $FeedingUpgradeWrapper extends $UpgradeWrapperBase<($FeedingUpgradeWrapper), ($FeedingUpgradeItem)> implements $ITickableUpgrade, $IFilteredUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $FilterLogic
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getFeedAtHungerLevel"(): $HungerLevel
public "setFeedAtHungerLevel"(arg0: $HungerLevel$Type): void
public "shouldFeedImmediatelyWhenHurt"(): boolean
public "setFeedImmediatelyWhenHurt"(arg0: boolean): void
get "filterLogic"(): $FilterLogic
get "feedAtHungerLevel"(): $HungerLevel
set "feedAtHungerLevel"(value: $HungerLevel$Type)
set "feedImmediatelyWhenHurt"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeWrapper$Type = ($FeedingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeWrapper_ = $FeedingUpgradeWrapper$Type;
}}
