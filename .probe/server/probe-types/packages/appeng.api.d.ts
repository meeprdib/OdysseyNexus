declare module "packages/appeng/api/implementations/items/$IFacadeItem" {
import {$IFacadePart, $IFacadePart$Type} from "packages/appeng/api/parts/$IFacadePart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFacadeItem {

 "getTextureItem"(arg0: $ItemStack$Type): $ItemStack
 "createPartFromItemStack"(arg0: $ItemStack$Type, arg1: $Direction$Type): $IFacadePart
 "getTextureBlockState"(arg0: $ItemStack$Type): $BlockState
}

export namespace $IFacadeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadeItem$Type = ($IFacadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadeItem_ = $IFacadeItem$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$IMEChest" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$IChestOrDrive, $IChestOrDrive$Type} from "packages/appeng/api/implementations/blockentities/$IChestOrDrive"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IEnergySource, $IEnergySource$Type} from "packages/appeng/api/networking/energy/$IEnergySource"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IMEChest extends $IChestOrDrive, $IEnergySource {

 "isPowered"(): boolean
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "isCellBlinking"(arg0: integer): boolean
 "getCellItem"(arg0: integer): $Item
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellInventory"(arg0: integer): $MEStorage
 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
 "getActionableNode"(): $IGridNode
}

export namespace $IMEChest {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMEChest$Type = ($IMEChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMEChest_ = $IMEChest$Type;
}}
declare module "packages/appeng/api/config/$IncludeExclude" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IncludeExclude extends $Enum<($IncludeExclude)> {
static readonly "WHITELIST": $IncludeExclude
static readonly "BLACKLIST": $IncludeExclude


public static "values"(): ($IncludeExclude)[]
public static "valueOf"(arg0: string): $IncludeExclude
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncludeExclude$Type = (("blacklist") | ("whitelist")) | ($IncludeExclude);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncludeExclude_ = $IncludeExclude$Type;
}}
declare module "packages/appeng/api/util/$IConfigurableObject" {
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"

export interface $IConfigurableObject {

 "getConfigManager"(): $IConfigManager

(): $IConfigManager
}

export namespace $IConfigurableObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableObject$Type = ($IConfigurableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableObject_ = $IConfigurableObject$Type;
}}
declare module "packages/appeng/api/networking/spatial/$ISpatialService" {
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISpatialService extends $IGridService {

 "hasRegion"(): boolean
 "currentEfficiency"(): float
 "isValidRegion"(): boolean
 "getMax"(): $BlockPos
 "getMin"(): $BlockPos
 "getLevel"(): $Level
 "requiredPower"(): long
}

export namespace $ISpatialService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialService$Type = ($ISpatialService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpatialService_ = $ISpatialService$Type;
}}
declare module "packages/appeng/api/stacks/$GenericStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $GenericStack extends $Record {

constructor(what: $AEKey$Type, amount: long)

public static "unwrapItemStack"(arg0: $ItemStack$Type): $GenericStack
public static "fromFluidStack"(arg0: $FluidStack$Type): $GenericStack
public static "fromItemStack"(arg0: $ItemStack$Type): $GenericStack
public static "wrapInItemStack"(arg0: $AEKey$Type, arg1: long): $ItemStack
public static "wrapInItemStack"(arg0: $GenericStack$Type): $ItemStack
public static "readTag"(arg0: $CompoundTag$Type): $GenericStack
public static "writeTag"(arg0: $GenericStack$Type): $CompoundTag
public static "getStackSizeOrZero"(arg0: $GenericStack$Type): long
public static "writeBuffer"(arg0: $GenericStack$Type, arg1: $FriendlyByteBuf$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "isWrapped"(arg0: $ItemStack$Type): boolean
public static "sum"(arg0: $GenericStack$Type, arg1: $GenericStack$Type): $GenericStack
public "what"(): $AEKey
public "amount"(): long
public static "readBuffer"(arg0: $FriendlyByteBuf$Type): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStack$Type = ($GenericStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericStack_ = $GenericStack$Type;
}}
declare module "packages/appeng/api/orientation/$IOrientableBlock" {
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export interface $IOrientableBlock {

 "getOrientation"(arg0: $BlockState$Type): $BlockOrientation
 "getOrientationStrategy"(): $IOrientationStrategy

(arg0: $BlockState$Type): $BlockOrientation
}

export namespace $IOrientableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientableBlock$Type = ($IOrientableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientableBlock_ = $IOrientableBlock$Type;
}}
declare module "packages/appeng/api/networking/events/statistics/$GridChunkEvent" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GridStatisticsEvent, $GridStatisticsEvent$Type} from "packages/appeng/api/networking/events/statistics/$GridStatisticsEvent"

export class $GridChunkEvent extends $GridStatisticsEvent {

constructor(arg0: $ServerLevel$Type, arg1: $ChunkPos$Type)

public "getLevel"(): $ServerLevel
public "getChunkPos"(): $ChunkPos
get "level"(): $ServerLevel
get "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$Type = ($GridChunkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridChunkEvent_ = $GridChunkEvent$Type;
}}
declare module "packages/appeng/api/util/$AEColor" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"

export class $AEColor extends $Enum<($AEColor)> {
static readonly "WHITE": $AEColor
static readonly "ORANGE": $AEColor
static readonly "MAGENTA": $AEColor
static readonly "LIGHT_BLUE": $AEColor
static readonly "YELLOW": $AEColor
static readonly "LIME": $AEColor
static readonly "PINK": $AEColor
static readonly "GRAY": $AEColor
static readonly "LIGHT_GRAY": $AEColor
static readonly "CYAN": $AEColor
static readonly "PURPLE": $AEColor
static readonly "BLUE": $AEColor
static readonly "BROWN": $AEColor
static readonly "GREEN": $AEColor
static readonly "RED": $AEColor
static readonly "BLACK": $AEColor
static readonly "TRANSPARENT": $AEColor
static readonly "VALID_COLORS": $List<($AEColor)>
static readonly "TINTINDEX_DARK": integer
static readonly "TINTINDEX_MEDIUM": integer
static readonly "TINTINDEX_BRIGHT": integer
static readonly "TINTINDEX_MEDIUM_BRIGHT": integer
readonly "translationKey": string
readonly "blackVariant": integer
readonly "mediumVariant": integer
readonly "whiteVariant": integer
readonly "dye": $DyeColor
readonly "registryPrefix": string
readonly "englishName": string
readonly "contrastTextColor": integer


public "getVariantByTintIndex"(arg0: integer): integer
public "getEnglishName"(): string
public static "fromDye"(arg0: $DyeColor$Type): $AEColor
public "toString"(): string
public static "values"(): ($AEColor)[]
public static "valueOf"(arg0: string): $AEColor
get "englishName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEColor$Type = (("magenta") | ("pink") | ("green") | ("lime") | ("light_gray") | ("yellow") | ("black") | ("light_blue") | ("brown") | ("cyan") | ("transparent") | ("orange") | ("red") | ("gray") | ("white") | ("blue") | ("purple")) | ($AEColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEColor_ = $AEColor$Type;
}}
declare module "packages/appeng/api/networking/$IGridServiceProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridStorage, $IGridStorage$Type} from "packages/appeng/api/networking/$IGridStorage"

export interface $IGridServiceProvider {

/**
 * 
 * @deprecated
 */
 "addNode"(arg0: $IGridNode$Type): void
 "addNode"(arg0: $IGridNode$Type, arg1: $CompoundTag$Type): void
 "onServerStartTick"(): void
 "onServerEndTick"(): void
 "onLevelEndTick"(arg0: $Level$Type): void
 "onLevelStartTick"(arg0: $Level$Type): void
 "saveNodeData"(arg0: $IGridNode$Type, arg1: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "onSplit"(arg0: $IGridStorage$Type): void
/**
 * 
 * @deprecated
 */
 "onJoin"(arg0: $IGridStorage$Type): void
/**
 * 
 * @deprecated
 */
 "populateGridStorage"(arg0: $IGridStorage$Type): void
 "removeNode"(arg0: $IGridNode$Type): void
}

export namespace $IGridServiceProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridServiceProvider$Type = ($IGridServiceProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridServiceProvider_ = $IGridServiceProvider$Type;
}}
declare module "packages/appeng/api/storage/cells/$ICellWorkbenchItem" {
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IUpgradeableItem, $IUpgradeableItem$Type} from "packages/appeng/api/upgrades/$IUpgradeableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICellWorkbenchItem extends $IUpgradeableItem {

 "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
 "isEditable"(arg0: $ItemStack$Type): boolean
 "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
 "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
 "asItem"(): $Item
}

export namespace $ICellWorkbenchItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICellWorkbenchItem$Type = ($ICellWorkbenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICellWorkbenchItem_ = $ICellWorkbenchItem$Type;
}}
declare module "packages/appeng/api/upgrades/$IUpgradeInventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemTransfer, $ItemTransfer$Type} from "packages/appeng/api/inventories/$ItemTransfer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $IUpgradeInventory extends $InternalInventory {

 "writeToNBT"(arg0: $CompoundTag$Type, arg1: string): void
 "readFromNBT"(arg0: $CompoundTag$Type, arg1: string): void
 "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
 "isInstalled"(arg0: $ItemLike$Type): boolean
 "getUpgradableItem"(): $ItemLike
 "getMaxInstalled"(arg0: $ItemLike$Type): integer
 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "simulateAdd"(arg0: $ItemStack$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "getSlotInv"(arg0: integer): $InternalInventory
 "simulateRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "setItemDirect"(arg0: integer, arg1: $ItemStack$Type): void
 "addItems"(arg0: $ItemStack$Type): $ItemStack
 "addItems"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "toItemHandler"(): $IItemHandler
 "toContainer"(): $Container
 "getRedstoneSignal"(): integer
 "mayAllowInsertion"(): boolean
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "iterator"(): $Iterator<($ItemStack)>
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IUpgradeInventory {
function wrapExternal(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ItemTransfer
function wrapExternal(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ItemTransfer
function empty(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeInventory$Type = ($IUpgradeInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeInventory_ = $IUpgradeInventory$Type;
}}
declare module "packages/appeng/api/config/$PowerMultiplier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PowerMultiplier extends $Enum<($PowerMultiplier)> {
static readonly "ONE": $PowerMultiplier
static readonly "CONFIG": $PowerMultiplier
 "multiplier": double


public "multiply"(arg0: double): double
public static "values"(): ($PowerMultiplier)[]
public static "valueOf"(arg0: string): $PowerMultiplier
public "divide"(arg0: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerMultiplier$Type = (("one") | ("config")) | ($PowerMultiplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerMultiplier_ = $PowerMultiplier$Type;
}}
declare module "packages/appeng/api/networking/$IGridService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGridService {

}

export namespace $IGridService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridService$Type = ($IGridService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridService_ = $IGridService$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingProvider" {
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export interface $ICraftingProvider extends $IGridNodeService {

 "getAvailablePatterns"(): $List<($IPatternDetails)>
 "getEmitableItems"(): $Set<($AEKey)>
 "getPatternPriority"(): integer
 "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
 "isBusy"(): boolean
}

export namespace $ICraftingProvider {
function requestUpdate(arg0: $IManagedGridNode$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingProvider$Type = ($ICraftingProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingProvider_ = $ICraftingProvider$Type;
}}
declare module "packages/appeng/api/implementations/items/$IStorageComponent" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStorageComponent {

 "isStorageComponent"(arg0: $ItemStack$Type): boolean
 "getBytes"(arg0: $ItemStack$Type): integer
}

export namespace $IStorageComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageComponent$Type = ($IStorageComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageComponent_ = $IStorageComponent$Type;
}}
declare module "packages/appeng/api/behaviors/$GenericInternalInventory" {
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $GenericInternalInventory {

 "getCapacity"(arg0: $AEKeyType$Type): long
 "isAllowed"(arg0: $AEKey$Type): boolean
 "onChange"(): void
 "setStack"(arg0: integer, arg1: $GenericStack$Type): void
 "canInsert"(): boolean
 "beginBatch"(): void
 "endBatch"(): void
 "canExtract"(): boolean
 "getMaxAmount"(arg0: $AEKey$Type): long
 "endBatchSuppressed"(): void
 "getAmount"(arg0: integer): long
 "extract"(arg0: integer, arg1: $AEKey$Type, arg2: long, arg3: $Actionable$Type): long
 "insert"(arg0: integer, arg1: $AEKey$Type, arg2: long, arg3: $Actionable$Type): long
 "size"(): integer
 "getKey"(arg0: integer): $AEKey
 "getStack"(arg0: integer): $GenericStack
}

export namespace $GenericInternalInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericInternalInventory$Type = ($GenericInternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericInternalInventory_ = $GenericInternalInventory$Type;
}}
declare module "packages/appeng/api/networking/crafting/$CraftingJobStatus" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $CraftingJobStatus extends $Record {

constructor(crafting: $GenericStack$Type, totalItems: long, progress: long, elapsedTimeNanos: long)

public "progress"(): long
public "crafting"(): $GenericStack
public "elapsedTimeNanos"(): long
public "totalItems"(): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingJobStatus$Type = ($CraftingJobStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingJobStatus_ = $CraftingJobStatus$Type;
}}
declare module "packages/appeng/api/networking/$IGridNodeService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGridNodeService {

}

export namespace $IGridNodeService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNodeService$Type = ($IGridNodeService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridNodeService_ = $IGridNodeService$Type;
}}
declare module "packages/appeng/api/networking/storage/$IStorageService" {
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IStorageProvider, $IStorageProvider$Type} from "packages/appeng/api/storage/$IStorageProvider"
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export interface $IStorageService extends $IGridService {

 "getInventory"(): $MEStorage
 "getCachedInventory"(): $KeyCounter
 "invalidateCache"(): void
 "refreshNodeStorageProvider"(arg0: $IGridNode$Type): void
 "addGlobalStorageProvider"(arg0: $IStorageProvider$Type): void
 "refreshGlobalStorageProvider"(arg0: $IStorageProvider$Type): void
 "removeGlobalStorageProvider"(arg0: $IStorageProvider$Type): void
}

export namespace $IStorageService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageService$Type = ($IStorageService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageService_ = $IStorageService$Type;
}}
declare module "packages/appeng/api/implementations/menuobjects/$IMenuItem" {
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMenuItem {

 "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost

(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
}

export namespace $IMenuItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuItem$Type = ($IMenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMenuItem_ = $IMenuItem$Type;
}}
declare module "packages/appeng/api/implementations/items/$IMemoryCard" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MemoryCardMessages, $MemoryCardMessages$Type} from "packages/appeng/api/implementations/items/$MemoryCardMessages"

export interface $IMemoryCard {

 "notifyUser"(arg0: $Player$Type, arg1: $MemoryCardMessages$Type): void
 "getSettingsName"(arg0: $ItemStack$Type): string
 "getColorCode"(arg0: $ItemStack$Type): ($AEColor)[]
 "setMemoryCardContents"(arg0: $ItemStack$Type, arg1: string, arg2: $CompoundTag$Type): void
 "getData"(arg0: $ItemStack$Type): $CompoundTag
}

export namespace $IMemoryCard {
const NBT_COLOR_CODE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMemoryCard$Type = ($IMemoryCard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMemoryCard_ = $IMemoryCard$Type;
}}
declare module "packages/appeng/api/networking/ticking/$IGridTickable" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"

export interface $IGridTickable extends $IGridNodeService {

 "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
 "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
}

export namespace $IGridTickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridTickable$Type = ($IGridTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridTickable_ = $IGridTickable$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity" {
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IColorableBlockEntity {

 "getColor"(): $AEColor
 "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
}

export namespace $IColorableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorableBlockEntity$Type = ($IColorableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorableBlockEntity_ = $IColorableBlockEntity$Type;
}}
declare module "packages/appeng/api/crafting/$IPatternDetails$IInput" {
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export interface $IPatternDetails$IInput {

 "getMultiplier"(): long
 "getPossibleInputs"(): ($GenericStack)[]
 "isValid"(arg0: $AEKey$Type, arg1: $Level$Type): boolean
 "getRemainingKey"(arg0: $AEKey$Type): $AEKey
}

export namespace $IPatternDetails$IInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$IInput$Type = ($IPatternDetails$IInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternDetails$IInput_ = $IPatternDetails$IInput$Type;
}}
declare module "packages/appeng/api/orientation/$BlockOrientation" {
import {$Direction$AxisDirection, $Direction$AxisDirection$Type} from "packages/net/minecraft/core/$Direction$AxisDirection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RelativeSide, $RelativeSide$Type} from "packages/appeng/api/orientation/$RelativeSide"

export class $BlockOrientation extends $Enum<($BlockOrientation)> {
static readonly "DOWN_NORTH": $BlockOrientation
static readonly "DOWN_WEST": $BlockOrientation
static readonly "DOWN_SOUTH": $BlockOrientation
static readonly "DOWN_EAST": $BlockOrientation
static readonly "UP_NORTH": $BlockOrientation
static readonly "UP_EAST": $BlockOrientation
static readonly "UP_SOUTH": $BlockOrientation
static readonly "UP_WEST": $BlockOrientation
static readonly "NORTH_UP": $BlockOrientation
static readonly "NORTH_WEST": $BlockOrientation
static readonly "NORTH_DOWN": $BlockOrientation
static readonly "NORTH_EAST": $BlockOrientation
static readonly "SOUTH_UP": $BlockOrientation
static readonly "SOUTH_EAST": $BlockOrientation
static readonly "SOUTH_DOWN": $BlockOrientation
static readonly "SOUTH_WEST": $BlockOrientation
static readonly "WEST_UP": $BlockOrientation
static readonly "WEST_SOUTH": $BlockOrientation
static readonly "WEST_DOWN": $BlockOrientation
static readonly "WEST_NORTH": $BlockOrientation
static readonly "EAST_UP": $BlockOrientation
static readonly "EAST_NORTH": $BlockOrientation
static readonly "EAST_DOWN": $BlockOrientation
static readonly "EAST_SOUTH": $BlockOrientation


public "getSpin"(): integer
public "getQuaternion"(): $Quaternionf
public "rotateClockwiseAround"(arg0: $Direction$Axis$Type, arg1: $Direction$AxisDirection$Type): $BlockOrientation
public "rotateClockwiseAround"(arg0: $Direction$Type): $BlockOrientation
public "getSides"(arg0: $Set$Type<($RelativeSide$Type)>): $Set<($Direction)>
public "getTransformation"(): $Transformation
public "resultingRotate"(arg0: $Direction$Type): $Direction
public "getRelativeSide"(arg0: $Direction$Type): $RelativeSide
public "getAngleX"(): integer
public "getAngleY"(): integer
public "isRedundant"(): boolean
public "getAngleZ"(): integer
public "setOn"(arg0: $BlockEntity$Type): void
public "setOn"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRelativeSides"(arg0: $Set$Type<($Direction$Type)>): $Set<($RelativeSide)>
public static "get"(arg0: $IOrientationStrategy$Type, arg1: $BlockState$Type): $BlockOrientation
public static "get"(arg0: $BlockState$Type): $BlockOrientation
public static "get"(arg0: $Direction$Type): $BlockOrientation
public static "get"(arg0: $Direction$Type, arg1: $Direction$Type): $BlockOrientation
public static "get"(arg0: $Direction$Type, arg1: integer): $BlockOrientation
public static "get"(arg0: $BlockEntity$Type): $BlockOrientation
public static "values"(): ($BlockOrientation)[]
public static "valueOf"(arg0: string): $BlockOrientation
public "rotate"(arg0: $Direction$Type): $Direction
public "getSide"(arg0: $RelativeSide$Type): $Direction
get "spin"(): integer
get "quaternion"(): $Quaternionf
get "transformation"(): $Transformation
get "angleX"(): integer
get "angleY"(): integer
get "redundant"(): boolean
get "angleZ"(): integer
set "on"(value: $BlockEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockOrientation$Type = (("up_east") | ("up_south") | ("north_east") | ("west_up") | ("up_north") | ("east_north") | ("north_up") | ("down_west") | ("south_east") | ("north_down") | ("west_north") | ("down_south") | ("east_south") | ("south_west") | ("north_west") | ("down_east") | ("south_up") | ("up_west") | ("east_up") | ("down_north") | ("south_down") | ("west_down") | ("east_down") | ("west_south")) | ($BlockOrientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockOrientation_ = $BlockOrientation$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingLink" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $ICraftingLink {

 "getCraftingID"(): $UUID
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "cancel"(): void
 "isDone"(): boolean
 "isCanceled"(): boolean
 "isStandalone"(): boolean
}

export namespace $ICraftingLink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingLink$Type = ($ICraftingLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingLink_ = $ICraftingLink$Type;
}}
declare module "packages/appeng/api/crafting/$IPatternDetails" {
import {$IPatternDetails$PatternInputSink, $IPatternDetails$PatternInputSink$Type} from "packages/appeng/api/crafting/$IPatternDetails$PatternInputSink"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$IPatternDetails$IInput, $IPatternDetails$IInput$Type} from "packages/appeng/api/crafting/$IPatternDetails$IInput"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export interface $IPatternDetails {

 "getOutputs"(): ($GenericStack)[]
 "getInputs"(): ($IPatternDetails$IInput)[]
 "supportsPushInputsToExternalInventory"(): boolean
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$Type)[], arg1: $IPatternDetails$PatternInputSink$Type): void
 "getPrimaryOutput"(): $GenericStack
 "getDefinition"(): $AEItemKey
}

export namespace $IPatternDetails {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$Type = ($IPatternDetails);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternDetails_ = $IPatternDetails$Type;
}}
declare module "packages/appeng/api/networking/crafting/$CalculationStrategy" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CalculationStrategy extends $Enum<($CalculationStrategy)> {
static readonly "REPORT_MISSING_ITEMS": $CalculationStrategy
static readonly "CRAFT_LESS": $CalculationStrategy


public static "values"(): ($CalculationStrategy)[]
public static "valueOf"(arg0: string): $CalculationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalculationStrategy$Type = (("craft_less") | ("report_missing_items")) | ($CalculationStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CalculationStrategy_ = $CalculationStrategy$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$IWirelessAccessPoint" {
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"

export interface $IWirelessAccessPoint extends $IActionHost {

 "getRange"(): double
 "getGrid"(): $IGrid
 "getLocation"(): $DimensionalBlockPos
 "isActive"(): boolean
 "getActionableNode"(): $IGridNode
}

export namespace $IWirelessAccessPoint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWirelessAccessPoint$Type = ($IWirelessAccessPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWirelessAccessPoint_ = $IWirelessAccessPoint$Type;
}}
declare module "packages/appeng/api/networking/pathing/$IPathingService" {
import {$ControllerState, $ControllerState$Type} from "packages/appeng/api/networking/pathing/$ControllerState"
import {$ChannelMode, $ChannelMode$Type} from "packages/appeng/api/networking/pathing/$ChannelMode"
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"

export interface $IPathingService extends $IGridService {

 "getUsedChannels"(): integer
 "isNetworkBooting"(): boolean
 "repath"(): void
 "getControllerState"(): $ControllerState
 "getChannelMode"(): $ChannelMode
}

export namespace $IPathingService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathingService$Type = ($IPathingService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPathingService_ = $IPathingService$Type;
}}
declare module "packages/appeng/api/crafting/$IPatternDetails$PatternInputSink" {
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"

export interface $IPatternDetails$PatternInputSink {

 "pushInput"(arg0: $AEKey$Type, arg1: long): void

(arg0: $AEKey$Type, arg1: long): void
}

export namespace $IPatternDetails$PatternInputSink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$PatternInputSink$Type = ($IPatternDetails$PatternInputSink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternDetails$PatternInputSink_ = $IPatternDetails$PatternInputSink$Type;
}}
declare module "packages/appeng/api/orientation/$RelativeSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $RelativeSide extends $Enum<($RelativeSide)> {
static readonly "FRONT": $RelativeSide
static readonly "BACK": $RelativeSide
static readonly "TOP": $RelativeSide
static readonly "BOTTOM": $RelativeSide
static readonly "LEFT": $RelativeSide
static readonly "RIGHT": $RelativeSide


public "getUnrotatedSide"(): $Direction
public static "fromUnrotatedSide"(arg0: $Direction$Type): $RelativeSide
public static "values"(): ($RelativeSide)[]
public static "valueOf"(arg0: string): $RelativeSide
get "unrotatedSide"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeSide$Type = (("top") | ("left") | ("bottom") | ("back") | ("front") | ("right")) | ($RelativeSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeSide_ = $RelativeSide$Type;
}}
declare module "packages/appeng/api/inventories/$ISegmentedInventory" {
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ISegmentedInventory {

 "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory

(arg0: $ResourceLocation$Type): $InternalInventory
}

export namespace $ISegmentedInventory {
const CONFIG: $ResourceLocation
const UPGRADES: $ResourceLocation
const STORAGE: $ResourceLocation
const CELLS: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISegmentedInventory$Type = ($ISegmentedInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISegmentedInventory_ = $ISegmentedInventory$Type;
}}
declare module "packages/appeng/api/parts/$IFacadeContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IFacadePart, $IFacadePart$Type} from "packages/appeng/api/parts/$IFacadePart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"

export interface $IFacadeContainer {

 "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToStream"(arg0: $FriendlyByteBuf$Type): void
 "addFacade"(arg0: $IFacadePart$Type): boolean
 "canAddFacade"(arg0: $IFacadePart$Type): boolean
 "getFacade"(arg0: $Direction$Type): $IFacadePart
 "removeFacade"(arg0: $IPartHost$Type, arg1: $Direction$Type): void
 "isEmpty"(): boolean
}

export namespace $IFacadeContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadeContainer$Type = ($IFacadeContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadeContainer_ = $IFacadeContainer$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$IChestOrDrive" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"

export interface $IChestOrDrive extends $IActionHost {

 "isPowered"(): boolean
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "isCellBlinking"(arg0: integer): boolean
 "getCellItem"(arg0: integer): $Item
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellInventory"(arg0: integer): $MEStorage
 "getActionableNode"(): $IGridNode
}

export namespace $IChestOrDrive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChestOrDrive$Type = ($IChestOrDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChestOrDrive_ = $IChestOrDrive$Type;
}}
declare module "packages/appeng/api/networking/pathing/$ChannelMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChannelMode extends $Enum<($ChannelMode)> {
static readonly "INFINITE": $ChannelMode
static readonly "DEFAULT": $ChannelMode
static readonly "X2": $ChannelMode
static readonly "X3": $ChannelMode
static readonly "X4": $ChannelMode


public "getCableCapacityFactor"(): integer
public "getAdHocNetworkChannels"(): integer
public static "values"(): ($ChannelMode)[]
public static "valueOf"(arg0: string): $ChannelMode
get "cableCapacityFactor"(): integer
get "adHocNetworkChannels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMode$Type = (("default") | ("infinite") | ("x2") | ("x3") | ("x4")) | ($ChannelMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelMode_ = $ChannelMode$Type;
}}
declare module "packages/appeng/api/config/$Actionable" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export class $Actionable extends $Enum<($Actionable)> {
static readonly "MODULATE": $Actionable
static readonly "SIMULATE": $Actionable


public "isSimulate"(): boolean
public static "ofSimulate"(arg0: boolean): $Actionable
public "getFluidAction"(): $IFluidHandler$FluidAction
public static "values"(): ($Actionable)[]
public static "valueOf"(arg0: string): $Actionable
public static "of"(arg0: $IFluidHandler$FluidAction$Type): $Actionable
get "simulate"(): boolean
get "fluidAction"(): $IFluidHandler$FluidAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Actionable$Type = (("modulate") | ("simulate")) | ($Actionable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Actionable_ = $Actionable$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingSubmitResult" {
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$CraftingSubmitErrorCode, $CraftingSubmitErrorCode$Type} from "packages/appeng/api/networking/crafting/$CraftingSubmitErrorCode"

export interface $ICraftingSubmitResult {

 "errorCode"(): $CraftingSubmitErrorCode
 "errorDetail"(): any
 "link"(): $ICraftingLink
 "successful"(): boolean
}

export namespace $ICraftingSubmitResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingSubmitResult$Type = ($ICraftingSubmitResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingSubmitResult_ = $ICraftingSubmitResult$Type;
}}
declare module "packages/appeng/api/networking/pathing/$ControllerState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ControllerState extends $Enum<($ControllerState)> {
static readonly "NO_CONTROLLER": $ControllerState
static readonly "CONTROLLER_ONLINE": $ControllerState
static readonly "CONTROLLER_CONFLICT": $ControllerState


public static "values"(): ($ControllerState)[]
public static "valueOf"(arg0: string): $ControllerState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerState$Type = (("controller_conflict") | ("controller_online") | ("no_controller")) | ($ControllerState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerState_ = $ControllerState$Type;
}}
declare module "packages/appeng/api/upgrades/$IUpgradeableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $IUpgradeableItem extends $ItemLike {

 "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
 "asItem"(): $Item

(arg0: $ItemStack$Type): $IUpgradeInventory
}

export namespace $IUpgradeableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableItem$Type = ($IUpgradeableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableItem_ = $IUpgradeableItem$Type;
}}
declare module "packages/appeng/api/networking/energy/$IAEPowerStorage" {
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$IEnergySource, $IEnergySource$Type} from "packages/appeng/api/networking/energy/$IEnergySource"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IAEPowerStorage extends $IEnergySource, $IGridNodeService {

 "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
 "getAECurrentPower"(): double
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
 "isAEPublicPowerStorage"(): boolean
 "getPriority"(): integer
 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
}

export namespace $IAEPowerStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEPowerStorage$Type = ($IAEPowerStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEPowerStorage_ = $IAEPowerStorage$Type;
}}
declare module "packages/appeng/api/networking/$IGrid" {
import {$ICraftingService, $ICraftingService$Type} from "packages/appeng/api/networking/crafting/$ICraftingService"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"
import {$IPathingService, $IPathingService$Type} from "packages/appeng/api/networking/pathing/$IPathingService"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IStorageService, $IStorageService$Type} from "packages/appeng/api/networking/storage/$IStorageService"
import {$ISpatialService, $ISpatialService$Type} from "packages/appeng/api/networking/spatial/$ISpatialService"
import {$IEnergyService, $IEnergyService$Type} from "packages/appeng/api/networking/energy/$IEnergyService"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ITickManager, $ITickManager$Type} from "packages/appeng/api/networking/ticking/$ITickManager"
import {$GridEvent, $GridEvent$Type} from "packages/appeng/api/networking/events/$GridEvent"

export interface $IGrid {

 "getPivot"(): $IGridNode
 "getMachineClasses"(): $Iterable<($Class<(any)>)>
 "getCraftingService"(): $ICraftingService
 "getActiveMachines"<T>(arg0: $Class$Type<(T)>): $Set<(T)>
 "getMachineNodes"(arg0: $Class$Type<(any)>): $Iterable<($IGridNode)>
 "getNodes"(): $Iterable<($IGridNode)>
 "getMachines"<T>(arg0: $Class$Type<(T)>): $Set<(T)>
 "getEnergyService"(): $IEnergyService
 "getPathingService"(): $IPathingService
 "getSpatialService"(): $ISpatialService
 "getStorageService"(): $IStorageService
 "getTickManager"(): $ITickManager
 "postEvent"<T extends $GridEvent>(arg0: T): T
 "isEmpty"(): boolean
 "size"(): integer
 "getService"<C extends $IGridService>(arg0: $Class$Type<(C)>): C
}

export namespace $IGrid {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGrid$Type = ($IGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGrid_ = $IGrid$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingSimulationRequester" {
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"

export interface $ICraftingSimulationRequester {

 "getGridNode"(): $IGridNode
 "getActionSource"(): $IActionSource

(): $IGridNode
}

export namespace $ICraftingSimulationRequester {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingSimulationRequester$Type = ($ICraftingSimulationRequester);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingSimulationRequester_ = $ICraftingSimulationRequester$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingRequester" {
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $ICraftingRequester extends $IActionHost, $IGridNodeService {

 "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
 "insertCraftedItems"(arg0: $ICraftingLink$Type, arg1: $AEKey$Type, arg2: long, arg3: $Actionable$Type): long
 "jobStateChange"(arg0: $ICraftingLink$Type): void
 "getActionableNode"(): $IGridNode
}

export namespace $ICraftingRequester {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingRequester$Type = ($ICraftingRequester);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingRequester_ = $ICraftingRequester$Type;
}}
declare module "packages/appeng/api/parts/$SelectedPart" {
import {$IFacadePart, $IFacadePart$Type} from "packages/appeng/api/parts/$IFacadePart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"

export class $SelectedPart {
readonly "part": $IPart
readonly "facade": $IFacadePart
readonly "side": $Direction

constructor()
constructor(arg0: $IPart$Type, arg1: $Direction$Type)
constructor(arg0: $IFacadePart$Type, arg1: $Direction$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectedPart$Type = ($SelectedPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectedPart_ = $SelectedPart$Type;
}}
declare module "packages/appeng/api/implementations/items/$MemoryCardMessages" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MemoryCardMessages extends $Enum<($MemoryCardMessages)> {
static readonly "INVALID_MACHINE": $MemoryCardMessages
static readonly "SETTINGS_LOADED": $MemoryCardMessages
static readonly "SETTINGS_SAVED": $MemoryCardMessages
static readonly "SETTINGS_RESET": $MemoryCardMessages
static readonly "SETTINGS_CLEARED": $MemoryCardMessages


public static "values"(): ($MemoryCardMessages)[]
public static "valueOf"(arg0: string): $MemoryCardMessages
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardMessages$Type = (("settings_loaded") | ("settings_reset") | ("settings_cleared") | ("settings_saved") | ("invalid_machine")) | ($MemoryCardMessages);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardMessages_ = $MemoryCardMessages$Type;
}}
declare module "packages/appeng/api/stacks/$AEItemKey" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"

export class $AEItemKey extends $AEKey {


public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "isDamaged"(): boolean
public "getMaxStackSize"(): integer
public "hasTag"(): boolean
public "isTagged"(arg0: $TagKey$Type<(any)>): boolean
public "toTag"(): $CompoundTag
public "addDrops"(arg0: long, arg1: $List$Type<($ItemStack$Type)>, arg2: $Level$Type, arg3: $BlockPos$Type): void
public "getPrimaryKey"(): any
public "dropSecondary"(): $AEItemKey
public "copyTag"(): $CompoundTag
public static "fromPacket"(arg0: $FriendlyByteBuf$Type): $AEItemKey
public static "fromTag"(arg0: $CompoundTag$Type): $AEItemKey
public "toStack"(): $ItemStack
public "toStack"(arg0: integer): $ItemStack
public "wrapForDisplayOrFilter"(): $ItemStack
public "getFuzzySearchValue"(): integer
public "getFuzzySearchMaxValue"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "matches"(arg0: $AEKey$Type, arg1: $ItemStack$Type): boolean
public "matches"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $ItemLike$Type, arg1: $CompoundTag$Type): $AEItemKey
public static "of"(arg0: $ItemStack$Type): $AEItemKey
public static "of"(arg0: $ItemLike$Type): $AEItemKey
public static "filter"(): $AEKeyFilter
public "getId"(): $ResourceLocation
public "getType"(): $AEKeyType
public static "is"(arg0: $AEKey$Type): boolean
public "getTag"(): $CompoundTag
public "getItem"(): $Item
get "damaged"(): boolean
get "maxStackSize"(): integer
get "primaryKey"(): any
get "fuzzySearchValue"(): integer
get "fuzzySearchMaxValue"(): integer
get "id"(): $ResourceLocation
get "type"(): $AEKeyType
get "tag"(): $CompoundTag
get "item"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEItemKey$Type = ($AEItemKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEItemKey_ = $AEItemKey$Type;
}}
declare module "packages/appeng/api/parts/$IFacadePart" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"

export interface $IFacadePart {

 "getTextureItem"(): $ItemStack
 "getItemStack"(): $ItemStack
 "getBlockState"(): $BlockState
 "getBoxes"(arg0: $IPartCollisionHelper$Type, arg1: boolean): void
 "getItem"(): $Item
 "getSide"(): $Direction
}

export namespace $IFacadePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadePart$Type = ($IFacadePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadePart_ = $IFacadePart$Type;
}}
declare module "packages/appeng/api/storage/$AEKeyFilter" {
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"

export interface $AEKeyFilter {

 "matches"(arg0: $AEKey$Type): boolean

(): $AEKeyFilter
}

export namespace $AEKeyFilter {
function none(): $AEKeyFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeyFilter$Type = ($AEKeyFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKeyFilter_ = $AEKeyFilter$Type;
}}
declare module "packages/appeng/api/stacks/$AEKeyType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$AmountFormat, $AmountFormat$Type} from "packages/appeng/api/stacks/$AmountFormat"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $AEKeyType {

constructor(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>, arg2: $Component$Type)

public "getKeyClass"(): $Class<(any)>
public static "items"(): $AEKeyType
public "readFromPacket"(arg0: $FriendlyByteBuf$Type): $AEKey
public "getRawId"(): byte
public "loadKeyFromTag"(arg0: $CompoundTag$Type): $AEKey
public "formatAmount"(arg0: long, arg1: $AmountFormat$Type): string
public static "fromRawId"(arg0: integer): $AEKeyType
public "getAmountPerByte"(): integer
public "getAmountPerUnit"(): integer
public "getUnitSymbol"(): string
public "getTagNames"(): $Stream<($TagKey<(any)>)>
public static "fluids"(): $AEKeyType
public "supportsFuzzyRangeSearch"(): boolean
public "getAmountPerOperation"(): integer
public "tryCast"(arg0: $AEKey$Type): $AEKey
public "toString"(): string
public "contains"(arg0: $AEKey$Type): boolean
public "filter"(): $AEKeyFilter
public "getId"(): $ResourceLocation
public "getDescription"(): $Component
get "keyClass"(): $Class<(any)>
get "rawId"(): byte
get "amountPerByte"(): integer
get "amountPerUnit"(): integer
get "unitSymbol"(): string
get "tagNames"(): $Stream<($TagKey<(any)>)>
get "amountPerOperation"(): integer
get "id"(): $ResourceLocation
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeyType$Type = ($AEKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKeyType_ = $AEKeyType$Type;
}}
declare module "packages/appeng/api/util/$AECableVariant" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AECableVariant extends $Enum<($AECableVariant)> {
static readonly "NONE": $AECableVariant
static readonly "GLASS": $AECableVariant
static readonly "COVERED": $AECableVariant
static readonly "SMART": $AECableVariant


public static "values"(): ($AECableVariant)[]
public static "min"(arg0: $AECableVariant$Type, arg1: $AECableVariant$Type): $AECableVariant
public static "max"(arg0: $AECableVariant$Type, arg1: $AECableVariant$Type): $AECableVariant
public static "valueOf"(arg0: string): $AECableVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableVariant$Type = (("glass") | ("covered") | ("none") | ("smart")) | ($AECableVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AECableVariant_ = $AECableVariant$Type;
}}
declare module "packages/appeng/api/implementations/menuobjects/$IPortableTerminal" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITerminalHost, $ITerminalHost$Type} from "packages/appeng/api/storage/$ITerminalHost"
import {$IEnergySource, $IEnergySource$Type} from "packages/appeng/api/networking/energy/$IEnergySource"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $IPortableTerminal extends $ITerminalHost, $IEnergySource {

 "getInventory"(): $MEStorage
 "getCloseHotkey"(): string
 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
 "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
 "getUpgrades"(): $IUpgradeInventory
 "isUpgradedWith"(arg0: $ItemLike$Type): boolean
 "getConfigManager"(): $IConfigManager
 "getMainMenuIcon"(): $ItemStack
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
}

export namespace $IPortableTerminal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortableTerminal$Type = ($IPortableTerminal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPortableTerminal_ = $IPortableTerminal$Type;
}}
declare module "packages/appeng/api/networking/$IManagedGridNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$GridFlags, $GridFlags$Type} from "packages/appeng/api/networking/$GridFlags"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IManagedGridNode {

 "setFlags"(...arg0: ($GridFlags$Type)[]): $IManagedGridNode
 "getGrid"(): $IGrid
 "isPowered"(): boolean
 "hasGridBooted"(): boolean
 "isOnline"(): boolean
 "saveToNBT"(arg0: $CompoundTag$Type): void
 "setExposedOnSides"(arg0: $Set$Type<($Direction$Type)>): $IManagedGridNode
 "loadFromNBT"(arg0: $CompoundTag$Type): void
 "setOwningPlayer"(arg0: $Player$Type): void
 "setIdlePowerUsage"(arg0: double): $IManagedGridNode
 "setInWorldNode"(arg0: boolean): $IManagedGridNode
 "setTagName"(arg0: string): $IManagedGridNode
 "setGridColor"(arg0: $AEColor$Type): $IManagedGridNode
 "setOwningPlayerId"(arg0: integer): void
 "setVisualRepresentation"(arg0: $ItemLike$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $AEItemKey$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $ItemStack$Type): $IManagedGridNode
 "isReady"(): boolean
 "getNode"(): $IGridNode
 "destroy"(): void
 "create"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "isActive"(): boolean
 "ifPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
 "ifPresent"(arg0: $BiConsumer$Type<($IGrid$Type), ($IGridNode$Type)>): boolean
 "addService"<T extends $IGridNodeService>(arg0: $Class$Type<(T)>, arg1: T): $IManagedGridNode
}

export namespace $IManagedGridNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedGridNode$Type = ($IManagedGridNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedGridNode_ = $IManagedGridNode$Type;
}}
declare module "packages/appeng/api/networking/security/$IActionSource" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"

export interface $IActionSource {

 "player"(): $Optional<($Player)>
 "machine"(): $Optional<($IActionHost)>
 "context"<T>(arg0: $Class$Type<(T)>): $Optional<(T)>
}

export namespace $IActionSource {
function ofMachine(arg0: $IActionHost$Type): $IActionSource
function ofPlayer(arg0: $Player$Type): $IActionSource
function ofPlayer(arg0: $Player$Type, arg1: $IActionHost$Type): $IActionSource
function empty(): $IActionSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActionSource$Type = ($IActionSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IActionSource_ = $IActionSource$Type;
}}
declare module "packages/appeng/api/networking/ticking/$TickingRequest" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$TickRates, $TickRates$Type} from "packages/appeng/core/settings/$TickRates"

export class $TickingRequest extends $Record {

constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean)
constructor(minTickRate: integer, maxTickRate: integer, isSleeping: boolean, canBeAlerted: boolean, initialTickRate: integer)
constructor(arg0: $TickRates$Type, arg1: boolean, arg2: boolean)

public "minTickRate"(): integer
public "canBeAlerted"(): boolean
public "maxTickRate"(): integer
public "isSleeping"(): boolean
public "initialTickRate"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "sleeping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingRequest$Type = ($TickingRequest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingRequest_ = $TickingRequest$Type;
}}
declare module "packages/appeng/api/orientation/$IOrientationStrategy" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RelativeSide, $RelativeSide$Type} from "packages/appeng/api/orientation/$RelativeSide"

export interface $IOrientationStrategy {

 "getSpin"(arg0: $BlockState$Type): integer
 "getFacing"(arg0: $BlockState$Type): $Direction
 "getAllStates"(arg0: $BlockState$Type): $Stream<($BlockState)>
 "setOrientation"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: integer): $BlockState
 "setOrientation"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $Direction$Type): $BlockState
 "setSpin"(arg0: $BlockState$Type, arg1: integer): $BlockState
 "setUp"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "setFacing"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "allowsPlayerRotation"(): boolean
 "getStateForPlacement"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
 "getProperties"(): $Collection<($Property<(any)>)>
 "getSide"(arg0: $BlockState$Type, arg1: $RelativeSide$Type): $Direction

(arg0: $BlockState$Type): integer
}

export namespace $IOrientationStrategy {
const SPIN: $IntegerProperty
function get(arg0: $BlockState$Type): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientationStrategy$Type = ($IOrientationStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientationStrategy_ = $IOrientationStrategy$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingCPU" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CraftingJobStatus, $CraftingJobStatus$Type} from "packages/appeng/api/networking/crafting/$CraftingJobStatus"
import {$CpuSelectionMode, $CpuSelectionMode$Type} from "packages/appeng/api/config/$CpuSelectionMode"

export interface $ICraftingCPU {

 "getAvailableStorage"(): long
 "isBusy"(): boolean
 "getCoProcessors"(): integer
 "getJobStatus"(): $CraftingJobStatus
 "cancelJob"(): void
 "getSelectionMode"(): $CpuSelectionMode
 "getName"(): $Component
}

export namespace $ICraftingCPU {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingCPU$Type = ($ICraftingCPU);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingCPU_ = $ICraftingCPU$Type;
}}
declare module "packages/appeng/api/networking/energy/$IEnergySource" {
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IEnergySource {

 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double

(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
}

export namespace $IEnergySource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergySource$Type = ($IEnergySource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergySource_ = $IEnergySource$Type;
}}
declare module "packages/appeng/api/config/$CpuSelectionMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CpuSelectionMode extends $Enum<($CpuSelectionMode)> {
static readonly "ANY": $CpuSelectionMode
static readonly "PLAYER_ONLY": $CpuSelectionMode
static readonly "MACHINE_ONLY": $CpuSelectionMode


public static "values"(): ($CpuSelectionMode)[]
public static "valueOf"(arg0: string): $CpuSelectionMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CpuSelectionMode$Type = (("machine_only") | ("player_only") | ("any")) | ($CpuSelectionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CpuSelectionMode_ = $CpuSelectionMode$Type;
}}
declare module "packages/appeng/api/util/$DimensionalBlockPos" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DimensionalBlockPos {

constructor(arg0: $DimensionalBlockPos$Type)
constructor(arg0: $BlockEntity$Type)
constructor(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type)

public "getPos"(): $BlockPos
public "getLevel"(): $Level
public "isInWorld"(arg0: $LevelAccessor$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
get "pos"(): $BlockPos
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalBlockPos$Type = ($DimensionalBlockPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalBlockPos_ = $DimensionalBlockPos$Type;
}}
declare module "packages/appeng/api/parts/$IPartCollisionHelper" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IPartCollisionHelper {

 "addBox"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
 "getWorldY"(): $Direction
 "getWorldZ"(): $Direction
 "getWorldX"(): $Direction
 "isBBCollision"(): boolean
}

export namespace $IPartCollisionHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartCollisionHelper$Type = ($IPartCollisionHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartCollisionHelper_ = $IPartCollisionHelper$Type;
}}
declare module "packages/appeng/api/config/$Setting" {
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Setting<T extends $Enum<(T)>> {

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumSet$Type<(T)>)
constructor(arg0: string, arg1: $Class$Type<(T)>)

public "getValues"(): $Set<(T)>
public "setFromString"(arg0: $IConfigManager$Type, arg1: string): void
public "getEnumClass"(): $Class<(T)>
public "getName"(): string
public "toString"(): string
public "getValue"(arg0: $IConfigManager$Type): T
public "copy"(arg0: $IConfigManager$Type, arg1: $IConfigManager$Type): void
get "values"(): $Set<(T)>
get "enumClass"(): $Class<(T)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Setting$Type<T> = ($Setting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Setting_<T> = $Setting$Type<(T)>;
}}
declare module "packages/appeng/api/config/$PowerUnits" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PowerUnits extends $Enum<($PowerUnits)> {
static readonly "AE": $PowerUnits
static readonly "FE": $PowerUnits
/**
 * 
 * @deprecated
 */
static readonly "RF": $PowerUnits
readonly "unlocalizedName": string
readonly "symbolName": string
 "conversionRatio": double


public "getSymbolName"(): string
public "textComponent"(): $Component
public "convertTo"(arg0: $PowerUnits$Type, arg1: double): double
public static "values"(): ($PowerUnits)[]
public static "valueOf"(arg0: string): $PowerUnits
get "symbolName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerUnits$Type = (("ae") | ("rf") | ("fe")) | ($PowerUnits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerUnits_ = $PowerUnits$Type;
}}
declare module "packages/appeng/api/networking/$GridFlags" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GridFlags extends $Enum<($GridFlags)> {
static readonly "REQUIRE_CHANNEL": $GridFlags
static readonly "COMPRESSED_CHANNEL": $GridFlags
static readonly "CANNOT_CARRY": $GridFlags
static readonly "CANNOT_CARRY_COMPRESSED": $GridFlags
static readonly "DENSE_CAPACITY": $GridFlags
static readonly "MULTIBLOCK": $GridFlags
static readonly "PREFERRED": $GridFlags


public static "values"(): ($GridFlags)[]
public static "valueOf"(arg0: string): $GridFlags
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridFlags$Type = (("require_channel") | ("dense_capacity") | ("multiblock") | ("cannot_carry_compressed") | ("cannot_carry") | ("preferred") | ("compressed_channel")) | ($GridFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridFlags_ = $GridFlags$Type;
}}
declare module "packages/appeng/api/parts/$IPartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPartItem<P extends $IPart> extends $ItemLike {

 "getPartClass"(): $Class<(P)>
 "createPart"(): P
 "asItem"(): $Item
}

export namespace $IPartItem {
function byId(arg0: $ResourceLocation$Type): $IPartItem<(any)>
function getNetworkId(arg0: $IPartItem$Type<(any)>): integer
function byNetworkId(arg0: integer): $IPartItem<(any)>
function getId(arg0: $IPartItem$Type<(any)>): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartItem$Type<P> = ($IPartItem<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartItem_<P> = $IPartItem$Type<(P)>;
}}
declare module "packages/appeng/api/networking/$IGridStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

/**
 * 
 * @deprecated
 */
export interface $IGridStorage {

 "dataObject"(): $CompoundTag
 "getID"(): long
}

export namespace $IGridStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridStorage$Type = ($IGridStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridStorage_ = $IGridStorage$Type;
}}
declare module "packages/appeng/api/inventories/$InternalInventory" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemTransfer, $ItemTransfer$Type} from "packages/appeng/api/inventories/$ItemTransfer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $InternalInventory extends $Iterable<($ItemStack)>, $ItemTransfer {

 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "simulateAdd"(arg0: $ItemStack$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "getSlotInv"(arg0: integer): $InternalInventory
 "simulateRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "setItemDirect"(arg0: integer, arg1: $ItemStack$Type): void
 "addItems"(arg0: $ItemStack$Type): $ItemStack
 "addItems"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "toItemHandler"(): $IItemHandler
 "toContainer"(): $Container
 "getRedstoneSignal"(): integer
 "mayAllowInsertion"(): boolean
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "iterator"(): $Iterator<($ItemStack)>
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $InternalInventory {
function wrapExternal(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ItemTransfer
function wrapExternal(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ItemTransfer
function empty(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalInventory$Type = ($InternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalInventory_ = $InternalInventory$Type;
}}
declare module "packages/appeng/api/features/$IGridLinkableHandler" {
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IGridLinkableHandler {

 "unlink"(arg0: $ItemStack$Type): void
 "canLink"(arg0: $ItemStack$Type): boolean
 "link"(arg0: $ItemStack$Type, arg1: $GlobalPos$Type): void
}

export namespace $IGridLinkableHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridLinkableHandler$Type = ($IGridLinkableHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridLinkableHandler_ = $IGridLinkableHandler$Type;
}}
declare module "packages/appeng/api/storage/$IStorageProvider" {
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$IStorageMounts, $IStorageMounts$Type} from "packages/appeng/api/storage/$IStorageMounts"

export interface $IStorageProvider extends $IGridNodeService {

 "mountInventories"(arg0: $IStorageMounts$Type): void

(arg0: $IStorageMounts$Type): void
}

export namespace $IStorageProvider {
function requestUpdate(arg0: $IManagedGridNode$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageProvider$Type = ($IStorageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageProvider_ = $IStorageProvider$Type;
}}
declare module "packages/appeng/api/util/$IConfigManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Setting, $Setting$Type} from "packages/appeng/api/config/$Setting"

export interface $IConfigManager {

 "writeToNBT"(arg0: $CompoundTag$Type): void
 "readFromNBT"(arg0: $CompoundTag$Type): boolean
 "getSettings"(): $Set<($Setting<(any)>)>
 "registerSetting"<T extends $Enum<(T)>>(arg0: $Setting$Type<(T)>, arg1: T): void
 "getSetting"<T extends $Enum<(T)>>(arg0: $Setting$Type<(T)>): T
 "hasSetting"(arg0: $Setting$Type<(any)>): boolean
 "putSetting"<T extends $Enum<(T)>>(arg0: $Setting$Type<(T)>, arg1: T): void
}

export namespace $IConfigManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManager$Type = ($IConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigManager_ = $IConfigManager$Type;
}}
declare module "packages/appeng/api/storage/cells/$StorageCell" {
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $StorageCell extends $MEStorage {

 "persist"(): void
 "getStatus"(): $CellState
 "canFitInsideCell"(): boolean
 "getIdleDrain"(): double
 "getAvailableStacks"(arg0: $KeyCounter$Type): void
 "getAvailableStacks"(): $KeyCounter
 "isPreferredStorageFor"(arg0: $AEKey$Type, arg1: $IActionSource$Type): boolean
 "extract"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
 "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
 "getDescription"(): $Component
}

export namespace $StorageCell {
function checkPreconditions(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCell$Type = ($StorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCell_ = $StorageCell$Type;
}}
declare module "packages/appeng/api/stacks/$AmountFormat" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AmountFormat extends $Enum<($AmountFormat)> {
static readonly "FULL": $AmountFormat
static readonly "SLOT": $AmountFormat
static readonly "SLOT_LARGE_FONT": $AmountFormat


public static "values"(): ($AmountFormat)[]
public static "valueOf"(arg0: string): $AmountFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmountFormat$Type = (("slot_large_font") | ("slot") | ("full")) | ($AmountFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmountFormat_ = $AmountFormat$Type;
}}
declare module "packages/appeng/api/util/$AECableType" {
import {$AECableVariant, $AECableVariant$Type} from "packages/appeng/api/util/$AECableVariant"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$AECableSize, $AECableSize$Type} from "packages/appeng/api/util/$AECableSize"

export class $AECableType extends $Enum<($AECableType)> {
static readonly "NONE": $AECableType
static readonly "GLASS": $AECableType
static readonly "COVERED": $AECableType
static readonly "SMART": $AECableType
static readonly "DENSE_COVERED": $AECableType
static readonly "DENSE_SMART": $AECableType
static readonly "VALIDCABLES": ($AECableType)[]


public "isSmart"(): boolean
public "isDense"(): boolean
public static "values"(): ($AECableType)[]
public static "min"(arg0: $AECableType$Type, arg1: $AECableType$Type): $AECableType
public static "max"(arg0: $AECableType$Type, arg1: $AECableType$Type): $AECableType
public static "valueOf"(arg0: string): $AECableType
public "size"(): $AECableSize
public "isValid"(): boolean
public "variant"(): $AECableVariant
get "smart"(): boolean
get "dense"(): boolean
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableType$Type = (("glass") | ("covered") | ("none") | ("smart") | ("dense_covered") | ("dense_smart")) | ($AECableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AECableType_ = $AECableType$Type;
}}
declare module "packages/appeng/api/networking/$IGridConnection" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"

export interface $IGridConnection {

 "getDirection"(arg0: $IGridNode$Type): $Direction
 "getUsedChannels"(): integer
 "getOtherSide"(arg0: $IGridNode$Type): $IGridNode
 "isInWorld"(): boolean
 "b"(): $IGridNode
 "a"(): $IGridNode
 "destroy"(): void
}

export namespace $IGridConnection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnection$Type = ($IGridConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridConnection_ = $IGridConnection$Type;
}}
declare module "packages/appeng/api/networking/events/statistics/$GridChunkEvent$GridChunkRemoved" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$GridChunkEvent, $GridChunkEvent$Type} from "packages/appeng/api/networking/events/statistics/$GridChunkEvent"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export class $GridChunkEvent$GridChunkRemoved extends $GridChunkEvent {

constructor(arg0: $ServerLevel$Type, arg1: $ChunkPos$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$GridChunkRemoved$Type = ($GridChunkEvent$GridChunkRemoved);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridChunkEvent$GridChunkRemoved_ = $GridChunkEvent$GridChunkRemoved$Type;
}}
declare module "packages/appeng/api/implementations/items/$IAEItemPowerStorage" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IAEItemPowerStorage {

 "injectAEPower"(arg0: $ItemStack$Type, arg1: double, arg2: $Actionable$Type): double
 "getAECurrentPower"(arg0: $ItemStack$Type): double
 "getAEMaxPower"(arg0: $ItemStack$Type): double
 "getPowerFlow"(arg0: $ItemStack$Type): $AccessRestriction
 "extractAEPower"(arg0: $ItemStack$Type, arg1: double, arg2: $Actionable$Type): double
 "getChargeRate"(arg0: $ItemStack$Type): double
}

export namespace $IAEItemPowerStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEItemPowerStorage$Type = ($IAEItemPowerStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEItemPowerStorage_ = $IAEItemPowerStorage$Type;
}}
declare module "packages/appeng/api/storage/cells/$CellState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CellState extends $Enum<($CellState)> {
static readonly "ABSENT": $CellState
static readonly "EMPTY": $CellState
static readonly "NOT_EMPTY": $CellState
static readonly "TYPES_FULL": $CellState
static readonly "FULL": $CellState


public "getStateColor"(): integer
public static "values"(): ($CellState)[]
public static "valueOf"(arg0: string): $CellState
get "stateColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellState$Type = (("types_full") | ("absent") | ("not_empty") | ("empty") | ("full")) | ($CellState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellState_ = $CellState$Type;
}}
declare module "packages/appeng/api/parts/$IPartHost" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$ICustomCableConnection, $ICustomCableConnection$Type} from "packages/appeng/api/parts/$ICustomCableConnection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"

export interface $IPartHost extends $ICustomCableConnection {

 "getBlockEntity"(): $BlockEntity
 "markForUpdate"(): void
 "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
 "markForSave"(): void
 "hasRedstone"(): boolean
 "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "getPart"(arg0: $Direction$Type): $IPart
 "isInWorld"(): boolean
 "getColor"(): $AEColor
 "notifyNeighbors"(): void
 "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "isBlocked"(arg0: $Direction$Type): boolean
 "removePartFromSide"(arg0: $Direction$Type): void
 "removePart"(arg0: $IPart$Type): boolean
 "clearContainer"(): void
 "partChanged"(): void
 "notifyNeighborNow"(arg0: $Direction$Type): void
 "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
 "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "getCableConnectionLength"(arg0: $AECableType$Type): float
}

export namespace $IPartHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartHost$Type = ($IPartHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartHost_ = $IPartHost$Type;
}}
declare module "packages/appeng/api/storage/cells/$IBasicCellItem" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IBasicCellItem extends $ICellWorkbenchItem {

 "addCellInformationToTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
 "storableInStorageCell"(): boolean
 "getCellTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
 "getBytesPerType"(arg0: $ItemStack$Type): integer
 "isStorageCell"(arg0: $ItemStack$Type): boolean
 "getIdleDrain"(): double
 "getKeyType"(): $AEKeyType
 "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
 "getTotalTypes"(arg0: $ItemStack$Type): integer
 "getBytes"(arg0: $ItemStack$Type): integer
 "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
 "isEditable"(arg0: $ItemStack$Type): boolean
 "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
 "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
 "asItem"(): $Item
}

export namespace $IBasicCellItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasicCellItem$Type = ($IBasicCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasicCellItem_ = $IBasicCellItem$Type;
}}
declare module "packages/appeng/api/config/$AccessRestriction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessRestriction extends $Enum<($AccessRestriction)> {
static readonly "NO_ACCESS": $AccessRestriction
static readonly "READ": $AccessRestriction
static readonly "WRITE": $AccessRestriction
static readonly "READ_WRITE": $AccessRestriction


public "isAllowInsertion"(): boolean
public "isAllowExtraction"(): boolean
public static "values"(): ($AccessRestriction)[]
public static "valueOf"(arg0: string): $AccessRestriction
get "allowInsertion"(): boolean
get "allowExtraction"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessRestriction$Type = (("read_write") | ("no_access") | ("read") | ("write")) | ($AccessRestriction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessRestriction_ = $AccessRestriction$Type;
}}
declare module "packages/appeng/api/networking/$IGridNodeListener$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IGridNodeListener$State extends $Enum<($IGridNodeListener$State)> {
static readonly "POWER": $IGridNodeListener$State
static readonly "CHANNEL": $IGridNodeListener$State
static readonly "GRID_BOOT": $IGridNodeListener$State


public static "values"(): ($IGridNodeListener$State)[]
public static "valueOf"(arg0: string): $IGridNodeListener$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNodeListener$State$Type = (("grid_boot") | ("channel") | ("power")) | ($IGridNodeListener$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridNodeListener$State_ = $IGridNodeListener$State$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$ICrankable" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICrankable {

 "canTurn"(): boolean
 "applyTurn"(): void
}

export namespace $ICrankable {
function get(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ICrankable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrankable$Type = ($ICrankable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrankable_ = $ICrankable$Type;
}}
declare module "packages/appeng/api/networking/security/$IActionHost" {
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"

export interface $IActionHost {

 "getActionableNode"(): $IGridNode

(): $IGridNode
}

export namespace $IActionHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActionHost$Type = ($IActionHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IActionHost_ = $IActionHost$Type;
}}
declare module "packages/appeng/api/networking/energy/$IEnergyService" {
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"
import {$IEnergySource, $IEnergySource$Type} from "packages/appeng/api/networking/energy/$IEnergySource"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IEnergyService extends $IGridService, $IEnergySource {

 "getIdlePowerUsage"(): double
 "getMaxStoredPower"(): double
 "getEnergyDemand"(arg0: double): double
 "getStoredPower"(): double
 "isNetworkPowered"(): boolean
 "getAvgPowerUsage"(): double
 "injectPower"(arg0: double, arg1: $Actionable$Type): double
 "getChannelPowerUsage"(): double
 "getAvgPowerInjection"(): double
 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
}

export namespace $IEnergyService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyService$Type = ($IEnergyService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyService_ = $IEnergyService$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingService" {
import {$ICraftingCPU, $ICraftingCPU$Type} from "packages/appeng/api/networking/crafting/$ICraftingCPU"
import {$ICraftingPlan, $ICraftingPlan$Type} from "packages/appeng/api/networking/crafting/$ICraftingPlan"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$ICraftingSimulationRequester, $ICraftingSimulationRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingSimulationRequester"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$Type} from "packages/appeng/api/networking/crafting/$ICraftingSubmitResult"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$CalculationStrategy, $CalculationStrategy$Type} from "packages/appeng/api/networking/crafting/$CalculationStrategy"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"

export interface $ICraftingService extends $IGridService {

 "getFuzzyCraftable"(arg0: $AEKey$Type, arg1: $AEKeyFilter$Type): $AEKey
 "getRequestedAmount"(arg0: $AEKey$Type): long
 "getCpus"(): $ImmutableSet<($ICraftingCPU)>
 "getCraftingFor"(arg0: $AEKey$Type): $Collection<($IPatternDetails)>
 "submitJob"(arg0: $ICraftingPlan$Type, arg1: $ICraftingRequester$Type, arg2: $ICraftingCPU$Type, arg3: boolean, arg4: $IActionSource$Type): $ICraftingSubmitResult
 "isRequesting"(arg0: $AEKey$Type): boolean
 "canEmitFor"(arg0: $AEKey$Type): boolean
 "isCraftable"(arg0: $AEKey$Type): boolean
 "getCraftables"(arg0: $AEKeyFilter$Type): $Set<($AEKey)>
 "isRequestingAny"(): boolean
 "refreshNodeCraftingProvider"(arg0: $IGridNode$Type): void
 "beginCraftingCalculation"(arg0: $Level$Type, arg1: $ICraftingSimulationRequester$Type, arg2: $AEKey$Type, arg3: long, arg4: $CalculationStrategy$Type): $Future<($ICraftingPlan)>
}

export namespace $ICraftingService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingService$Type = ($ICraftingService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingService_ = $ICraftingService$Type;
}}
declare module "packages/appeng/api/networking/$IInWorldGridNodeHost" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"

export interface $IInWorldGridNodeHost {

 "getGridNode"(arg0: $Direction$Type): $IGridNode
 "getCableConnectionType"(arg0: $Direction$Type): $AECableType

(arg0: $Direction$Type): $IGridNode
}

export namespace $IInWorldGridNodeHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInWorldGridNodeHost$Type = ($IInWorldGridNodeHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInWorldGridNodeHost_ = $IInWorldGridNodeHost$Type;
}}
declare module "packages/appeng/api/parts/$BusSupport" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BusSupport extends $Enum<($BusSupport)> {
static readonly "CABLE": $BusSupport
static readonly "DENSE_CABLE": $BusSupport


public static "values"(): ($BusSupport)[]
public static "valueOf"(arg0: string): $BusSupport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BusSupport$Type = (("cable") | ("dense_cable")) | ($BusSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BusSupport_ = $BusSupport$Type;
}}
declare module "packages/appeng/api/networking/events/statistics/$GridChunkEvent$GridChunkAdded" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$GridChunkEvent, $GridChunkEvent$Type} from "packages/appeng/api/networking/events/statistics/$GridChunkEvent"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export class $GridChunkEvent$GridChunkAdded extends $GridChunkEvent {

constructor(arg0: $ServerLevel$Type, arg1: $ChunkPos$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$GridChunkAdded$Type = ($GridChunkEvent$GridChunkAdded);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridChunkEvent$GridChunkAdded_ = $GridChunkEvent$GridChunkAdded$Type;
}}
declare module "packages/appeng/api/storage/$MEStorage" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $MEStorage {

 "getAvailableStacks"(arg0: $KeyCounter$Type): void
 "getAvailableStacks"(): $KeyCounter
 "isPreferredStorageFor"(arg0: $AEKey$Type, arg1: $IActionSource$Type): boolean
 "extract"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
 "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
 "getDescription"(): $Component

(arg0: $KeyCounter$Type): void
}

export namespace $MEStorage {
function checkPreconditions(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEStorage$Type = ($MEStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEStorage_ = $MEStorage$Type;
}}
declare module "packages/appeng/api/storage/$IStorageMounts" {
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"

export interface $IStorageMounts {

 "mount"(arg0: $MEStorage$Type): void
 "mount"(arg0: $MEStorage$Type, arg1: integer): void

(arg0: $MEStorage$Type): void
}

export namespace $IStorageMounts {
const DEFAULT_PRIORITY: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageMounts$Type = ($IStorageMounts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageMounts_ = $IStorageMounts$Type;
}}
declare module "packages/appeng/api/stacks/$KeyCounter" {
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Object2LongMap$Entry, $Object2LongMap$Entry$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2LongMap$Entry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $KeyCounter implements $Iterable<($Object2LongMap$Entry<($AEKey)>)> {

constructor()

public "getFirstEntry"<T extends $AEKey>(arg0: $Class$Type<(T)>): $Object2LongMap$Entry<($AEKey)>
public "getFirstEntry"(): $Object2LongMap$Entry<($AEKey)>
public "findFuzzy"(arg0: $AEKey$Type, arg1: $FuzzyMode$Type): $Collection<($Object2LongMap$Entry<($AEKey)>)>
public "removeZeros"(): void
public "getFirstKey"(): $AEKey
public "getFirstKey"<T extends $AEKey>(arg0: $Class$Type<(T)>): T
public "add"(arg0: $AEKey$Type, arg1: long): void
public "remove"(arg0: $AEKey$Type, arg1: long): void
public "get"(arg0: $AEKey$Type): long
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($Object2LongMap$Entry<($AEKey)>)>
public "addAll"(arg0: $KeyCounter$Type): void
public "set"(arg0: $AEKey$Type, arg1: long): void
public "keySet"(): $Set<($AEKey)>
public "reset"(): void
public "removeAll"(arg0: $KeyCounter$Type): void
public "spliterator"(): $Spliterator<($Object2LongMap$Entry<($AEKey)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Object2LongMap$Entry<($AEKey)>>;
get "firstEntry"(): $Object2LongMap$Entry<($AEKey)>
get "firstKey"(): $AEKey
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyCounter$Type = ($KeyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyCounter_ = $KeyCounter$Type;
}}
declare module "packages/appeng/api/networking/crafting/$ICraftingPlan" {
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICraftingPlan {

 "simulation"(): boolean
 "missingItems"(): $KeyCounter
 "multiplePaths"(): boolean
 "patternTimes"(): $Map<($IPatternDetails), (long)>
 "finalOutput"(): $GenericStack
 "usedItems"(): $KeyCounter
 "emittedItems"(): $KeyCounter
 "bytes"(): long
}

export namespace $ICraftingPlan {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPlan$Type = ($ICraftingPlan);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingPlan_ = $ICraftingPlan$Type;
}}
declare module "packages/appeng/api/parts/$IPart" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BusSupport, $BusSupport$Type} from "packages/appeng/api/parts/$BusSupport"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICustomCableConnection, $ICustomCableConnection$Type} from "packages/appeng/api/parts/$ICustomCableConnection"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $IPart extends $ICustomCableConnection, $Clearable {

 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "isLadder"(arg0: $LivingEntity$Type): boolean
 "canConnectRedstone"(): boolean
 "addEntityCrashInfo"(arg0: $CrashReportCategory$Type): void
 "getGridNode"(): $IGridNode
 "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
 "removeFromWorld"(): void
 "getPartItem"(): $IPartItem<(any)>
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "addToWorld"(): void
 "writeToStream"(arg0: $FriendlyByteBuf$Type): void
 "onActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
 "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
 "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
 "setPartHostInfo"(arg0: $Direction$Type, arg1: $IPartHost$Type, arg2: $BlockEntity$Type): void
 "onUpdateShape"(arg0: $Direction$Type): void
 "onClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
 "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
 "isSolid"(): boolean
 "getLightLevel"(): integer
 "onShiftClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
 "onShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
 "renderDynamic"(arg0: float, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: integer, arg4: integer): void
 "addPartDrop"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
 "canBePlacedOn"(arg0: $BusSupport$Type): boolean
 "onPlacement"(arg0: $Player$Type): void
 "getStaticModels"(): $IPartModel
 "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "getModelData"(): $ModelData
 "clearContent"(): void
 "readVisualStateFromNBT"(arg0: $CompoundTag$Type): void
 "writeVisualStateToNBT"(arg0: $CompoundTag$Type): void
 "getCableConnectionLength"(arg0: $AECableType$Type): float
 "getDesiredConnectionType"(): $AECableType
 "isProvidingStrongPower"(): integer
 "requireDynamicRender"(): boolean
 "isProvidingWeakPower"(): integer
 "getExternalCableConnectionType"(): $AECableType
 "getExternalFacingNode"(): $IGridNode
 "getBoxes"(arg0: $IPartCollisionHelper$Type): void
}

export namespace $IPart {
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPart$Type = ($IPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPart_ = $IPart$Type;
}}
declare module "packages/appeng/api/networking/events/statistics/$GridStatisticsEvent" {
import {$GridEvent, $GridEvent$Type} from "packages/appeng/api/networking/events/$GridEvent"

export class $GridStatisticsEvent extends $GridEvent {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridStatisticsEvent$Type = ($GridStatisticsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridStatisticsEvent_ = $GridStatisticsEvent$Type;
}}
declare module "packages/appeng/api/networking/ticking/$ITickManager" {
import {$IGridService, $IGridService$Type} from "packages/appeng/api/networking/$IGridService"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"

export interface $ITickManager extends $IGridService {

 "sleepDevice"(arg0: $IGridNode$Type): boolean
 "alertDevice"(arg0: $IGridNode$Type): boolean
 "wakeDevice"(arg0: $IGridNode$Type): boolean
}

export namespace $ITickManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickManager$Type = ($ITickManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickManager_ = $ITickManager$Type;
}}
declare module "packages/appeng/api/networking/$IGridVisitor" {
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"

export interface $IGridVisitor {

 "visitNode"(arg0: $IGridNode$Type): boolean

(arg0: $IGridNode$Type): boolean
}

export namespace $IGridVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridVisitor$Type = ($IGridVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridVisitor_ = $IGridVisitor$Type;
}}
declare module "packages/appeng/api/networking/events/$GridEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GridEvent {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridEvent$Type = ($GridEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridEvent_ = $GridEvent$Type;
}}
declare module "packages/appeng/api/networking/crafting/$CraftingSubmitErrorCode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CraftingSubmitErrorCode extends $Enum<($CraftingSubmitErrorCode)> {
static readonly "INCOMPLETE_PLAN": $CraftingSubmitErrorCode
static readonly "NO_CPU_FOUND": $CraftingSubmitErrorCode
static readonly "NO_SUITABLE_CPU_FOUND": $CraftingSubmitErrorCode
static readonly "CPU_BUSY": $CraftingSubmitErrorCode
static readonly "CPU_OFFLINE": $CraftingSubmitErrorCode
static readonly "CPU_TOO_SMALL": $CraftingSubmitErrorCode
static readonly "MISSING_INGREDIENT": $CraftingSubmitErrorCode


public static "values"(): ($CraftingSubmitErrorCode)[]
public static "valueOf"(arg0: string): $CraftingSubmitErrorCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingSubmitErrorCode$Type = (("cpu_too_small") | ("missing_ingredient") | ("cpu_offline") | ("incomplete_plan") | ("no_suitable_cpu_found") | ("no_cpu_found") | ("cpu_busy")) | ($CraftingSubmitErrorCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingSubmitErrorCode_ = $CraftingSubmitErrorCode$Type;
}}
declare module "packages/appeng/api/util/$AECableSize" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AECableSize extends $Enum<($AECableSize)> {
static readonly "NONE": $AECableSize
static readonly "NORMAL": $AECableSize
static readonly "DENSE": $AECableSize


public static "values"(): ($AECableSize)[]
public static "min"(arg0: $AECableSize$Type, arg1: $AECableSize$Type): $AECableSize
public static "max"(arg0: $AECableSize$Type, arg1: $AECableSize$Type): $AECableSize
public static "valueOf"(arg0: string): $AECableSize
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableSize$Type = (("normal") | ("none") | ("dense")) | ($AECableSize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AECableSize_ = $AECableSize$Type;
}}
declare module "packages/appeng/api/networking/ticking/$TickRateModulation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickRateModulation extends $Enum<($TickRateModulation)> {
static readonly "SLEEP": $TickRateModulation
static readonly "IDLE": $TickRateModulation
static readonly "SLOWER": $TickRateModulation
static readonly "SAME": $TickRateModulation
static readonly "FASTER": $TickRateModulation
static readonly "URGENT": $TickRateModulation


public static "values"(): ($TickRateModulation)[]
public static "valueOf"(arg0: string): $TickRateModulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRateModulation$Type = (("sleep") | ("faster") | ("same") | ("idle") | ("urgent") | ("slower")) | ($TickRateModulation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickRateModulation_ = $TickRateModulation$Type;
}}
declare module "packages/appeng/api/parts/$IPartModel" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPartModel {

 "getModels"(): $List<($ResourceLocation)>
 "requireCableConnection"(): boolean
}

export namespace $IPartModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartModel$Type = ($IPartModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartModel_ = $IPartModel$Type;
}}
declare module "packages/appeng/api/networking/$IGridNode" {
import {$IGridConnection, $IGridConnection$Type} from "packages/appeng/api/networking/$IGridConnection"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$GridFlags, $GridFlags$Type} from "packages/appeng/api/networking/$GridFlags"
import {$IGridVisitor, $IGridVisitor$Type} from "packages/appeng/api/networking/$IGridVisitor"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGridNodeService, $IGridNodeService$Type} from "packages/appeng/api/networking/$IGridNodeService"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IGridNode {

 "getGrid"(): $IGrid
 "getConnectedSides"(): $Set<($Direction)>
 "isPowered"(): boolean
 "getOwningPlayerId"(): integer
 "hasGridBooted"(): boolean
 "beginVisit"(arg0: $IGridVisitor$Type): void
 "isOnline"(): boolean
 "getIdlePowerUsage"(): double
 "getUsedChannels"(): integer
 "getConnections"(): $List<($IGridConnection)>
 "getGridColor"(): $AEColor
 "getMaxChannels"(): integer
 "hasFlag"(arg0: $GridFlags$Type): boolean
 "getLevel"(): $ServerLevel
 "getVisualRepresentation"(): $AEItemKey
 "meetsChannelRequirements"(): boolean
 "getInWorldConnections"(): $Map<($Direction), ($IGridConnection)>
 "fillCrashReportCategory"(arg0: $CrashReportCategory$Type): void
 "getOwningPlayerProfileId"(): $UUID
 "getOwner"(): any
 "isActive"(): boolean
 "getService"<T extends $IGridNodeService>(arg0: $Class$Type<(T)>): T
}

export namespace $IGridNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNode$Type = ($IGridNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridNode_ = $IGridNode$Type;
}}
declare module "packages/appeng/api/implementations/$IPowerChannelState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPowerChannelState {

 "isPowered"(): boolean
 "isActive"(): boolean
}

export namespace $IPowerChannelState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPowerChannelState$Type = ($IPowerChannelState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPowerChannelState_ = $IPowerChannelState$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$PatternContainerGroup" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PatternContainerGroup extends $Record {

constructor(icon: $AEItemKey$Type, name: $Component$Type, tooltip: $List$Type<($Component$Type)>)

public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $PatternContainerGroup
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public static "fromMachine"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $PatternContainerGroup
public "tooltip"(): $List<($Component)>
public "icon"(): $AEItemKey
public static "nothing"(): $PatternContainerGroup
public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternContainerGroup$Type = ($PatternContainerGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternContainerGroup_ = $PatternContainerGroup$Type;
}}
declare module "packages/appeng/api/implementations/menuobjects/$ItemMenuHost" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $ItemMenuHost implements $IUpgradeableObject {

constructor(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type)

public "isClientSide"(): boolean
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getUpgrades"(): $IUpgradeInventory
public "onBroadcastChanges"(arg0: $AbstractContainerMenu$Type): boolean
public "drainPower"(): boolean
public "getSlot"(): integer
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
get "clientSide"(): boolean
get "itemStack"(): $ItemStack
get "player"(): $Player
get "upgrades"(): $IUpgradeInventory
get "slot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMenuHost$Type = ($ItemMenuHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMenuHost_ = $ItemMenuHost$Type;
}}
declare module "packages/appeng/api/config/$LockCraftingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LockCraftingMode extends $Enum<($LockCraftingMode)> {
static readonly "NONE": $LockCraftingMode
static readonly "LOCK_UNTIL_PULSE": $LockCraftingMode
static readonly "LOCK_WHILE_HIGH": $LockCraftingMode
static readonly "LOCK_WHILE_LOW": $LockCraftingMode
static readonly "LOCK_UNTIL_RESULT": $LockCraftingMode


public static "values"(): ($LockCraftingMode)[]
public static "valueOf"(arg0: string): $LockCraftingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockCraftingMode$Type = (("lock_until_result") | ("lock_while_high") | ("lock_until_pulse") | ("lock_while_low") | ("none")) | ($LockCraftingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockCraftingMode_ = $LockCraftingMode$Type;
}}
declare module "packages/appeng/api/implementations/blockentities/$ICraftingMachine" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export interface $ICraftingMachine {

 "getCraftingMachineInfo"(): $PatternContainerGroup
 "acceptsPlans"(): boolean
 "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[], arg2: $Direction$Type): boolean
}

export namespace $ICraftingMachine {
function of(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockEntity$Type): $ICraftingMachine
function of(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ICraftingMachine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingMachine$Type = ($ICraftingMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingMachine_ = $ICraftingMachine$Type;
}}
declare module "packages/appeng/api/inventories/$ItemTransfer" {
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemTransfer {

 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "simulateAdd"(arg0: $ItemStack$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "addItems"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$Type): $ItemStack
 "mayAllowInsertion"(): boolean
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
}

export namespace $ItemTransfer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransfer$Type = ($ItemTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransfer_ = $ItemTransfer$Type;
}}
declare module "packages/appeng/api/storage/$ITerminalHost" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISubMenuHost, $ISubMenuHost$Type} from "packages/appeng/api/storage/$ISubMenuHost"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $ITerminalHost extends $IUpgradeableObject, $IConfigurableObject, $ISubMenuHost {

 "getInventory"(): $MEStorage
 "getCloseHotkey"(): string
 "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
 "getUpgrades"(): $IUpgradeInventory
 "isUpgradedWith"(arg0: $ItemLike$Type): boolean
 "getConfigManager"(): $IConfigManager
 "getMainMenuIcon"(): $ItemStack
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
}

export namespace $ITerminalHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalHost$Type = ($ITerminalHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalHost_ = $ITerminalHost$Type;
}}
declare module "packages/appeng/api/implementations/items/$ISpatialStorageCell" {
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISpatialStorageCell {

 "isSpatialStorage"(arg0: $ItemStack$Type): boolean
 "getAllocatedPlotId"(arg0: $ItemStack$Type): integer
 "getMaxStoredDim"(arg0: $ItemStack$Type): integer
 "doSpatialTransition"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer): boolean
}

export namespace $ISpatialStorageCell {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialStorageCell$Type = ($ISpatialStorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpatialStorageCell_ = $ISpatialStorageCell$Type;
}}
declare module "packages/appeng/api/stacks/$AEKey" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AmountFormat, $AmountFormat$Type} from "packages/appeng/api/stacks/$AmountFormat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AEKey {

constructor()

public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public static "writeKey"(arg0: $FriendlyByteBuf$Type, arg1: $AEKey$Type): void
public "getModId"(): string
public static "writeOptionalKey"(arg0: $FriendlyByteBuf$Type, arg1: $AEKey$Type): void
public static "readOptionalKey"(arg0: $FriendlyByteBuf$Type): $AEKey
public static "fromTagGeneric"(arg0: $CompoundTag$Type): $AEKey
public static "readKey"(arg0: $FriendlyByteBuf$Type): $AEKey
public "formatAmount"(arg0: long, arg1: $AmountFormat$Type): string
public "getAmountPerByte"(): integer
public "isTagged"(arg0: $TagKey$Type<(any)>): boolean
public "toTag"(): $CompoundTag
public "addDrops"(arg0: long, arg1: $List$Type<($ItemStack$Type)>, arg2: $Level$Type, arg3: $BlockPos$Type): void
public "getAmountPerUnit"(): integer
public "getPrimaryKey"(): any
public "getUnitSymbol"(): string
public "toTagGeneric"(): $CompoundTag
public "dropSecondary"(): $AEKey
public "supportsFuzzyRangeSearch"(): boolean
public "getAmountPerOperation"(): integer
public "wrapForDisplayOrFilter"(): $ItemStack
public "getFuzzySearchValue"(): integer
public "getFuzzySearchMaxValue"(): integer
public "fuzzyEquals"(arg0: $AEKey$Type, arg1: $FuzzyMode$Type): boolean
public "matches"(arg0: $GenericStack$Type): boolean
public "getId"(): $ResourceLocation
public "getType"(): $AEKeyType
public "getDisplayName"(): $Component
get "modId"(): string
get "amountPerByte"(): integer
get "amountPerUnit"(): integer
get "primaryKey"(): any
get "unitSymbol"(): string
get "amountPerOperation"(): integer
get "fuzzySearchValue"(): integer
get "fuzzySearchMaxValue"(): integer
get "id"(): $ResourceLocation
get "type"(): $AEKeyType
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKey$Type = ($AEKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKey_ = $AEKey$Type;
}}
declare module "packages/appeng/api/parts/$ICustomCableConnection" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"

export interface $ICustomCableConnection {

 "getCableConnectionLength"(arg0: $AECableType$Type): float

(arg0: $AECableType$Type): float
}

export namespace $ICustomCableConnection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCableConnection$Type = ($ICustomCableConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomCableConnection_ = $ICustomCableConnection$Type;
}}
declare module "packages/appeng/api/storage/$ISubMenuHost" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $ISubMenuHost {

 "getMainMenuIcon"(): $ItemStack
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
}

export namespace $ISubMenuHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenuHost$Type = ($ISubMenuHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubMenuHost_ = $ISubMenuHost$Type;
}}
declare module "packages/appeng/api/upgrades/$IUpgradeableObject" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $IUpgradeableObject {

 "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
 "getUpgrades"(): $IUpgradeInventory
 "isUpgradedWith"(arg0: $ItemLike$Type): boolean
}

export namespace $IUpgradeableObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableObject$Type = ($IUpgradeableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableObject_ = $IUpgradeableObject$Type;
}}
declare module "packages/appeng/api/config/$FuzzyMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FuzzyMode extends $Enum<($FuzzyMode)> {
static readonly "IGNORE_ALL": $FuzzyMode
static readonly "PERCENT_99": $FuzzyMode
static readonly "PERCENT_75": $FuzzyMode
static readonly "PERCENT_50": $FuzzyMode
static readonly "PERCENT_25": $FuzzyMode
readonly "breakPoint": float
readonly "percentage": float


public "calculateBreakPoint"(arg0: integer): integer
public static "values"(): ($FuzzyMode)[]
public static "valueOf"(arg0: string): $FuzzyMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzzyMode$Type = (("percent_25") | ("ignore_all") | ("percent_75") | ("percent_99") | ("percent_50")) | ($FuzzyMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzzyMode_ = $FuzzyMode$Type;
}}
