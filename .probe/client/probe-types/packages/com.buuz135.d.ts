declare module "packages/com/buuz135/functionalstorage/block/$FramedSimpleCompactingDrawerBlock" {
import {$SimpleCompactingDrawerTile, $SimpleCompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$SimpleCompactingDrawerTile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SimpleCompactingDrawerBlock, $SimpleCompactingDrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$SimpleCompactingDrawerBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FramedSimpleCompactingDrawerBlock extends $SimpleCompactingDrawerBlock {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedSimpleCompactingDrawerBlock$Type = ($FramedSimpleCompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedSimpleCompactingDrawerBlock_ = $FramedSimpleCompactingDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$DrawerControllerBlock" {
import {$DrawerControllerTile, $DrawerControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$DrawerControllerTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StorageControllerBlock, $StorageControllerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerBlock"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DrawerControllerBlock extends $StorageControllerBlock<($DrawerControllerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerBlock$Type = ($DrawerControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerControllerBlock_ = $DrawerControllerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$DrawerControllerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler"
import {$ControllerFluidHandler, $ControllerFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DrawerControllerTile extends $StorageControllerTile<($DrawerControllerTile)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($DrawerControllerTile$Type)>, arg1: $BlockEntityType$Type<($DrawerControllerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getSelf"(): $DrawerControllerTile
get "self"(): $DrawerControllerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerTile$Type = ($DrawerControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerControllerTile_ = $DrawerControllerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$FramedControllerExtensionTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$FramedDrawerModelData, $FramedDrawerModelData$Type} from "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FramedControllerExtensionTile extends $StorageControllerExtensionTile<($FramedControllerExtensionTile)> {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($FramedControllerExtensionTile$Type)>, arg1: $BlockEntityType$Type<($FramedControllerExtensionTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getModelData"(): $ModelData
public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$Type): void
get "modelData"(): $ModelData
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionTile$Type = ($FramedControllerExtensionTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedControllerExtensionTile_ = $FramedControllerExtensionTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ConnectedDrawers, $ConnectedDrawers$Type} from "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers"

export class $ControllerFluidHandler implements $IFluidHandler {

constructor()

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTanks"(): integer
public "invalidateSlots"(): void
public "getDrawers"(): $ConnectedDrawers
get "tanks"(): integer
get "drawers"(): $ConnectedDrawers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerFluidHandler$Type = ($ControllerFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerFluidHandler_ = $ControllerFluidHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$StorageControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $StorageControllerExtensionBlock<T extends $StorageControllerExtensionTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRotationType"(): $RotatableBlock$RotationType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionBlock$Type<T> = ($StorageControllerExtensionBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerExtensionBlock_<T> = $StorageControllerExtensionBlock$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FluidDrawerBlock$FluidDrawerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FluidDrawerBlock, $FluidDrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$FluidDrawerBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidDrawerBlock$FluidDrawerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $FluidDrawerBlock$Type, arg1: $Item$Properties$Type, arg2: $TitaniumTab$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerBlock$FluidDrawerItem$Type = ($FluidDrawerBlock$FluidDrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerBlock$FluidDrawerItem_ = $FluidDrawerBlock$FluidDrawerItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$CompactingFramedDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CompactingDrawerBlock, $CompactingDrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$CompactingDrawerBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CompactingDrawerTile, $CompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$CompactingDrawerTile"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"

export class $CompactingFramedDrawerBlock extends $CompactingDrawerBlock {
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingFramedDrawerBlock$Type = ($CompactingFramedDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingFramedDrawerBlock_ = $CompactingFramedDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$SimpleCompactingDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SimpleCompactingDrawerTile, $SimpleCompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$SimpleCompactingDrawerTile"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"

export class $SimpleCompactingDrawerBlock extends $RotatableBlock<($SimpleCompactingDrawerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type)

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "hasIndividualRenderVoxelShape"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerBlock$Type = ($SimpleCompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCompactingDrawerBlock_ = $SimpleCompactingDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BigInventoryHandler$BigStack, $BigInventoryHandler$BigStack$Type} from "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler$BigStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"
import {$ILockable, $ILockable$Type} from "packages/com/buuz135/functionalstorage/inventory/$ILockable"

export class $BigInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)>, $ILockable {
static "BIG_ITEMS": string
static "STACK": string
static "AMOUNT": string

constructor(arg0: $FunctionalStorage$DrawerType$Type)

public "isLocked"(): boolean
public "isVoid"(): boolean
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "onChange"(): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlots"(): integer
public "getStoredStacks"(): $List<($BigInventoryHandler$BigStack)>
public "hasDowngrade"(): boolean
public "getMultiplier"(): integer
public "isCreative"(): boolean
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getSlots"(): integer
public "isMutable"(): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "getHeight"(): integer
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "isEmpty"(): boolean
get "locked"(): boolean
get "void"(): boolean
get "slots"(): integer
get "storedStacks"(): $List<($BigInventoryHandler$BigStack)>
get "multiplier"(): integer
get "creative"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInventoryHandler$Type = ($BigInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInventoryHandler_ = $BigInventoryHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$FluidDrawerTile" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ControllableDrawerTile, $ControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BigFluidHandler, $BigFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $FluidDrawerTile extends $ControllableDrawerTile<($FluidDrawerTile)> {
 "fluidHandlerLazyOptional": $LazyOptional<($IFluidHandler)>
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($FluidDrawerTile$Type)>, arg1: $BlockEntityType$Type<($FluidDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $FunctionalStorage$DrawerType$Type)

public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidDrawerTile$Type): void
public "getFluidHandler"(): $BigFluidHandler
public "initClient"(): void
public "setLocked"(arg0: boolean): void
public "getBaseSize"(arg0: integer): integer
public "getStorageDiv"(): double
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorageSlotAmount"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getDrawerType"(): $FunctionalStorage$DrawerType
get "fluidHandler"(): $BigFluidHandler
set "locked"(value: boolean)
get "storageDiv"(): double
get "storageSlotAmount"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
get "everythingEmpty"(): boolean
get "drawerType"(): $FunctionalStorage$DrawerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerTile$Type = ($FluidDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerTile_ = $FluidDrawerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile$DrawerOptions" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $ControllableDrawerTile$DrawerOptions implements $INBTSerializable<($CompoundTag)> {
 "options": $HashMap<($ConfigurationToolItem$ConfigurationAction), (boolean)>
 "advancedOptions": $HashMap<($ConfigurationToolItem$ConfigurationAction), (integer)>

constructor()

public "isActive"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setActive"(arg0: $ConfigurationToolItem$ConfigurationAction$Type, arg1: boolean): void
public "getAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): integer
public "setAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$DrawerOptions$Type = ($ControllableDrawerTile$DrawerOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableDrawerTile$DrawerOptions_ = $ControllableDrawerTile$DrawerOptions$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ArmoryCabinetTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ArmoryCabinetInventoryHandler, $ArmoryCabinetInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ArmoryCabinetInventoryHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ArmoryCabinetTile extends $ActiveTile<($ArmoryCabinetTile)> {
 "handler": $ArmoryCabinetInventoryHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($ArmoryCabinetTile$Type)>, arg1: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "invalidateCaps"(): void
public "getStorage"(): $IItemHandler
public "isEverythingEmpty"(): boolean
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
get "optional"(): $LazyOptional<($IItemHandler)>
get "storage"(): $IItemHandler
get "everythingEmpty"(): boolean
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetTile$Type = ($ArmoryCabinetTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetTile_ = $ArmoryCabinetTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FluidDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$FluidDrawerTile, $FluidDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$FluidDrawerTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $FluidDrawerBlock extends $RotatableBlock<($FluidDrawerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$Type, arg1: $BlockBehaviour$Properties$Type)

public "getType"(): $FunctionalStorage$DrawerType
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
public "hasIndividualRenderVoxelShape"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
get "type"(): $FunctionalStorage$DrawerType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerBlock$Type = ($FluidDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerBlock_ = $FluidDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/util/$IWoodType" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IWoodType {

 "getName"(): string
 "getWood"(): $Block
 "getPlanks"(): $Block
}

export namespace $IWoodType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWoodType$Type = ($IWoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWoodType_ = $IWoodType$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$ControllableDrawerTile$DrawerOptions, $ControllableDrawerTile$DrawerOptions$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile$DrawerOptions"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllableDrawerTile<T extends $ControllableDrawerTile<(T)>> extends $ActiveTile<(T)> {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "isLocked"(): boolean
public "isVoid"(): boolean
public "getTitleColor"(): integer
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "initClient"(): void
public "invalidateCaps"(): void
public "getStorageMultiplier"(): integer
public "setLocked"(arg0: boolean): void
public "getBaseSize"(arg0: integer): integer
public "toggleLocking"(): void
public "hasDowngrade"(): boolean
public "getStorageDiv"(): double
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): void
public "getStorageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorageSlotAmount"(): integer
public "setNeedsUpgradeCache"(arg0: boolean): void
public "getUtilitySlotAmount"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "setControllerPos"(arg0: $BlockPos$Type): void
public "getControllerPos"(): $BlockPos
public "getDrawerOptions"(): $ControllableDrawerTile$DrawerOptions
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getUtilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "isCreative"(): boolean
public "clearControllerPos"(): void
get "locked"(): boolean
get "void"(): boolean
get "titleColor"(): integer
get "storageMultiplier"(): integer
set "locked"(value: boolean)
get "storageDiv"(): double
get "storageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "storageSlotAmount"(): integer
set "needsUpgradeCache"(value: boolean)
get "utilitySlotAmount"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
set "controllerPos"(value: $BlockPos$Type)
get "controllerPos"(): $BlockPos
get "drawerOptions"(): $ControllableDrawerTile$DrawerOptions
get "everythingEmpty"(): boolean
get "utilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$Type<T> = ($ControllableDrawerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableDrawerTile_<T> = $ControllableDrawerTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/util/$CompactingUtil" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CompactingUtil$Result, $CompactingUtil$Result$Type} from "packages/com/buuz135/functionalstorage/util/$CompactingUtil$Result"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CompactingUtil {

constructor(arg0: $Level$Type, arg1: integer)

public "setup"(arg0: $ItemStack$Type): void
public "getResults"(): $List<($CompactingUtil$Result)>
set "up"(value: $ItemStack$Type)
get "results"(): $List<($CompactingUtil$Result)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$Type = ($CompactingUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUtil_ = $CompactingUtil$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$ArmoryCabinetBlock" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$ArmoryCabinetTile, $ArmoryCabinetTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ArmoryCabinetTile"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ArmoryCabinetBlock extends $RotatableBlock<($ArmoryCabinetTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetBlock$Type = ($ArmoryCabinetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetBlock_ = $ArmoryCabinetBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler$CustomFluidTank" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$BigFluidHandler, $BigFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler"

export class $BigFluidHandler$CustomFluidTank extends $FluidTank {

constructor(arg0: $BigFluidHandler$Type, arg1: integer)
constructor(arg0: $BigFluidHandler$Type, arg1: integer, arg2: $Predicate$Type<(any)>)

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getCapacity"(): integer
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getFluidAmount"(): integer
public "getFluid"(): $FluidStack
get "capacity"(): integer
get "fluidAmount"(): integer
get "fluid"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$CustomFluidTank$Type = ($BigFluidHandler$CustomFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigFluidHandler$CustomFluidTank_ = $BigFluidHandler$CustomFluidTank$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$CompactingDrawerBlock$CompactingDrawerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompactingDrawerBlock$CompactingDrawerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: integer)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerBlock$CompactingDrawerItem$Type = ($CompactingDrawerBlock$CompactingDrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerBlock$CompactingDrawerItem_ = $CompactingDrawerBlock$CompactingDrawerItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$ArmoryCabinetInventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ArmoryCabinetInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)> {
 "stackList": $List<($ItemStack)>

constructor()

public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "onChange"(): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlots"(): integer
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getSlots"(): integer
public "isMutable"(): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "getHeight"(): integer
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "isEmpty"(): boolean
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetInventoryHandler$Type = ($ArmoryCabinetInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetInventoryHandler_ = $ArmoryCabinetInventoryHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FunctionalStorage$DrawerType extends $Enum<($FunctionalStorage$DrawerType)> {
static readonly "X_1": $FunctionalStorage$DrawerType
static readonly "X_2": $FunctionalStorage$DrawerType
static readonly "X_4": $FunctionalStorage$DrawerType


public static "values"(): ($FunctionalStorage$DrawerType)[]
public static "valueOf"(arg0: string): $FunctionalStorage$DrawerType
public "getDisplayName"(): string
public "getSlots"(): integer
public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
public "getSlotAmount"(): integer
get "displayName"(): string
get "slots"(): integer
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
get "slotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionalStorage$DrawerType$Type = (("x_2") | ("x_1") | ("x_4")) | ($FunctionalStorage$DrawerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionalStorage$DrawerType_ = $FunctionalStorage$DrawerType$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ConnectedDrawers, $ConnectedDrawers$Type} from "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ControllerInventoryHandler implements $IItemHandler {

constructor()

public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlots"(): integer
public "invalidateSlots"(): void
public "getDrawers"(): $ConnectedDrawers
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getSlots"(): integer
public "isMutable"(): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "getHeight"(): integer
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "isEmpty"(): boolean
get "slots"(): integer
get "drawers"(): $ConnectedDrawers
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerInventoryHandler$Type = ($ControllerInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerInventoryHandler_ = $ControllerInventoryHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/util/$CompactingUtil$Result" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CompactingUtil$Result {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "toString"(): string
public "getResult"(): $ItemStack
public "setResult"(arg0: $ItemStack$Type): void
public "setNeeded"(arg0: integer): void
public "getNeeded"(): integer
get "result"(): $ItemStack
set "result"(value: $ItemStack$Type)
set "needed"(value: integer)
get "needed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$Result$Type = ($CompactingUtil$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUtil$Result_ = $CompactingUtil$Result$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $ConfigurationToolItem$ConfigurationAction extends $Enum<($ConfigurationToolItem$ConfigurationAction)> {
static readonly "LOCKING": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_NUMBERS": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_RENDER": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_UPGRADES": $ConfigurationToolItem$ConfigurationAction
static readonly "INDICATOR": $ConfigurationToolItem$ConfigurationAction


public static "values"(): ($ConfigurationToolItem$ConfigurationAction)[]
public static "valueOf"(arg0: string): $ConfigurationToolItem$ConfigurationAction
public "getColor"(): $TextColor
public "getMax"(): integer
get "color"(): $TextColor
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$ConfigurationAction$Type = (("indicator") | ("toggle_numbers") | ("locking") | ("toggle_render") | ("toggle_upgrades")) | ($ConfigurationToolItem$ConfigurationAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationToolItem$ConfigurationAction_ = $ConfigurationToolItem$ConfigurationAction$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ControllableDrawerTile, $ControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemControllableDrawerTile<T extends $ItemControllableDrawerTile<(T)>> extends $ControllableDrawerTile<(T)> {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getTitleColor"(): integer
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "initClient"(): void
public "invalidateCaps"(): void
public "getBaseSize"(arg0: integer): integer
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
get "titleColor"(): integer
get "optional"(): $LazyOptional<($IItemHandler)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "everythingEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemControllableDrawerTile$Type<T> = ($ItemControllableDrawerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemControllableDrawerTile_<T> = $ItemControllableDrawerTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$EnderDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$EnderDrawerTile, $EnderDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$EnderDrawerTile"

export class $EnderDrawerBlock extends $RotatableBlock<($EnderDrawerTile)> {
static "FREQUENCY_LOOK": $HashMap<(string), ($List<($ItemStack)>)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
public "hasIndividualRenderVoxelShape"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
public static "getFrequencyDisplay"(arg0: string): $List<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerBlock$Type = ($EnderDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDrawerBlock_ = $EnderDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$SimpleCompactingDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CompactingInventoryHandler, $CompactingInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$CompactingInventoryHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SimpleCompactingDrawerTile extends $ItemControllableDrawerTile<($SimpleCompactingDrawerTile)> {
 "handler": $CompactingInventoryHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($SimpleCompactingDrawerTile$Type)>, arg1: $BlockEntityType$Type<($SimpleCompactingDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getHandler"(): $CompactingInventoryHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $SimpleCompactingDrawerTile$Type): void
public "getSelf"(): $SimpleCompactingDrawerTile
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "initClient"(): void
public "getBaseSize"(arg0: integer): integer
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
get "handler"(): $CompactingInventoryHandler
get "self"(): $SimpleCompactingDrawerTile
get "optional"(): $LazyOptional<($IItemHandler)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerTile$Type = ($SimpleCompactingDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCompactingDrawerTile_ = $SimpleCompactingDrawerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$LinkingToolItem" {
import {$LinkingToolItem$LinkingMode, $LinkingToolItem$LinkingMode$Type} from "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$LinkingMode"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LinkingToolItem$ActionMode, $LinkingToolItem$ActionMode$Type} from "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$ActionMode"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LinkingToolItem extends $BasicItem {
static readonly "NBT_MODE": string
static readonly "NBT_CONTROLLER": string
static readonly "NBT_ACTION": string
static readonly "NBT_FIRST": string
static readonly "NBT_ENDER": string
static readonly "NBT_ENDER_SAFETY": string
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

public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getActionMode"(arg0: $ItemStack$Type): $LinkingToolItem$ActionMode
public static "getLinkingMode"(arg0: $ItemStack$Type): $LinkingToolItem$LinkingMode
public static "getBlockPosInAABB"(arg0: $AABB$Type): $List<($BlockPos)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$Type = ($LinkingToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem_ = $LinkingToolItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$CompactingInventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$CompactingUtil, $CompactingUtil$Type} from "packages/com/buuz135/functionalstorage/util/$CompactingUtil"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$CompactingUtil$Result, $CompactingUtil$Result$Type} from "packages/com/buuz135/functionalstorage/util/$CompactingUtil$Result"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ILockable, $ILockable$Type} from "packages/com/buuz135/functionalstorage/inventory/$ILockable"

export class $CompactingInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)>, $ILockable {
static "PARENT": string
static "BIG_ITEMS": string
static "STACK": string
static "AMOUNT": string
 "totalAmount": integer

constructor(arg0: integer)

public "getParent"(): $ItemStack
public "setup"(arg0: $CompactingUtil$Type): void
public "isVoid"(): boolean
public "reset"(): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "onChange"(): void
public "getSlotLimitBase"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlots"(): integer
public "hasDowngrade"(): boolean
public "getAmount"(): integer
public "getMultiplier"(): integer
public "isCreative"(): boolean
public "getResultList"(): $List<($CompactingUtil$Result)>
public "isSetup"(): boolean
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getSlots"(): integer
public "isMutable"(): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isLocked"(): boolean
public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "getHeight"(): integer
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "isEmpty"(): boolean
get "parent"(): $ItemStack
set "up"(value: $CompactingUtil$Type)
get "void"(): boolean
get "slots"(): integer
get "amount"(): integer
get "multiplier"(): integer
get "creative"(): boolean
get "resultList"(): $List<($CompactingUtil$Result)>
get "slots"(): integer
get "mutable"(): boolean
get "locked"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingInventoryHandler$Type = ($CompactingInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingInventoryHandler_ = $CompactingInventoryHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedDrawerControllerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FramedDrawerControllerTile, $FramedDrawerControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$FramedDrawerControllerTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$StorageControllerBlock, $StorageControllerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FramedDrawerControllerBlock extends $StorageControllerBlock<($FramedDrawerControllerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerBlock$Type = ($FramedDrawerControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerControllerBlock_ = $FramedDrawerControllerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$LinkingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $LinkingToolItem$LinkingMode extends $Enum<($LinkingToolItem$LinkingMode)> {
static readonly "SINGLE": $LinkingToolItem$LinkingMode
static readonly "MULTIPLE": $LinkingToolItem$LinkingMode


public static "values"(): ($LinkingToolItem$LinkingMode)[]
public static "valueOf"(arg0: string): $LinkingToolItem$LinkingMode
public "getColor"(): $TextColor
get "color"(): $TextColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$LinkingMode$Type = (("single") | ("multiple")) | ($LinkingToolItem$LinkingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem$LinkingMode_ = $LinkingToolItem$LinkingMode$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler$BigStack" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BigInventoryHandler$BigStack {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "getStack"(): $ItemStack
public "setStack"(arg0: $ItemStack$Type): void
public "getAmount"(): integer
public "setAmount"(arg0: integer): void
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$Type)
get "amount"(): integer
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInventoryHandler$BigStack$Type = ($BigInventoryHandler$BigStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInventoryHandler$BigStack_ = $BigInventoryHandler$BigStack$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$EnderDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnderDrawerTile extends $ItemControllableDrawerTile<($EnderDrawerTile)> {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($EnderDrawerTile$Type)>, arg1: $BlockEntityType$Type<($EnderDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "isVoid"(): boolean
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "load"(arg0: $CompoundTag$Type): void
public "setLevel"(arg0: $Level$Type): void
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $EnderDrawerTile$Type): void
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "initClient"(): void
public "getFrequency"(): string
public "setLocked"(arg0: boolean): void
public "getBaseSize"(arg0: integer): integer
public "setFrequency"(arg0: string): void
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
get "void"(): boolean
set "level"(value: $Level$Type)
get "optional"(): $LazyOptional<($IItemHandler)>
get "frequency"(): string
set "locked"(value: boolean)
set "frequency"(value: string)
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerTile$Type = ($EnderDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDrawerTile_ = $EnderDrawerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable {

 "isLocked"(): boolean

(): boolean
}

export namespace $ILockable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$Type = ($ILockable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILockable_ = $ILockable$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StorageControllerExtensionTile<T extends $StorageControllerExtensionTile<(T)>> extends $ItemControllableDrawerTile<(T)> {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "invalidateCaps"(): void
public "getBaseSize"(arg0: integer): integer
public "toggleLocking"(): void
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): void
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
get "optional"(): $LazyOptional<($IItemHandler)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionTile$Type<T> = ($StorageControllerExtensionTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerExtensionTile_<T> = $StorageControllerExtensionTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$DrawerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IWoodType, $IWoodType$Type} from "packages/com/buuz135/functionalstorage/util/$IWoodType"
import {$DrawerTile, $DrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$DrawerTile"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $DrawerBlock extends $RotatableBlock<($DrawerTile)> {
static "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>
static "LOCKED": $BooleanProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $IWoodType$Type, arg1: $FunctionalStorage$DrawerType$Type, arg2: $BlockBehaviour$Properties$Type)

public "getType"(): $FunctionalStorage$DrawerType
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "hasIndividualRenderVoxelShape"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getWoodType"(): $IWoodType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
get "type"(): $FunctionalStorage$DrawerType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
get "woodType"(): $IWoodType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerBlock$Type = ($DrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerBlock_ = $DrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$UpgradeItem" {
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UpgradeItem$Type, $UpgradeItem$Type$Type} from "packages/com/buuz135/functionalstorage/item/$UpgradeItem$Type"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $BasicItem {
static "MAX_SLOT": integer
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

constructor(arg0: $Item$Properties$Type, arg1: $UpgradeItem$Type$Type)

public "getType"(): $UpgradeItem$Type
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "getDirection"(arg0: $ItemStack$Type): $Direction
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
get "type"(): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$StorageControllerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $StorageControllerBlock<T extends $StorageControllerTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRotationType"(): $RotatableBlock$RotationType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlock$Type<T> = ($StorageControllerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlock_<T> = $StorageControllerBlock$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$StorageControllerExtensionBlock, $StorageControllerExtensionBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerExtensionBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FramedControllerExtensionTile, $FramedControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$FramedControllerExtensionTile"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FramedControllerExtensionBlock extends $StorageControllerExtensionBlock<($FramedControllerExtensionTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionBlock$Type = ($FramedControllerExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedControllerExtensionBlock_ = $FramedControllerExtensionBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigurationToolItem extends $BasicItem {
static readonly "NBT_MODE": string
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "getAction"(arg0: $ItemStack$Type): $ConfigurationToolItem$ConfigurationAction
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$Type = ($ConfigurationToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationToolItem_ = $ConfigurationToolItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$DrawerBlock$DrawerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$DrawerBlock, $DrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$DrawerBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrawerBlock$DrawerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $DrawerBlock$Type, arg1: $Item$Properties$Type, arg2: $TitaniumTab$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerBlock$DrawerItem$Type = ($DrawerBlock$DrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerBlock$DrawerItem_ = $DrawerBlock$DrawerItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$BigFluidHandler$CustomFluidTank, $BigFluidHandler$CustomFluidTank$Type} from "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler$CustomFluidTank"

export class $BigFluidHandler implements $IFluidHandler, $INBTSerializable<($CompoundTag)> {

constructor(arg0: integer, arg1: integer)

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "setCapacity"(arg0: integer): void
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTanks"(): integer
public "onChange"(): void
public "getTankList"(): ($BigFluidHandler$CustomFluidTank)[]
public "isDrawerLocked"(): boolean
public "getFilterStack"(): ($FluidStack)[]
public "isDrawerVoid"(): boolean
public "lockHandler"(): void
public "isDrawerCreative"(): boolean
set "capacity"(value: integer)
get "tanks"(): integer
get "tankList"(): ($BigFluidHandler$CustomFluidTank)[]
get "drawerLocked"(): boolean
get "filterStack"(): ($FluidStack)[]
get "drawerVoid"(): boolean
get "drawerCreative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$Type = ($BigFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigFluidHandler_ = $BigFluidHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$DrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IWoodType, $IWoodType$Type} from "packages/com/buuz135/functionalstorage/util/$IWoodType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BigInventoryHandler, $BigInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $DrawerTile extends $ItemControllableDrawerTile<($DrawerTile)> {
 "handler": $BigInventoryHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($DrawerTile$Type)>, arg1: $BlockEntityType$Type<($DrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $FunctionalStorage$DrawerType$Type, arg5: $IWoodType$Type)

public "getHandler"(): $BigInventoryHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "initClient"(): void
public "getBaseSize"(arg0: integer): integer
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getDrawerType"(): $FunctionalStorage$DrawerType
get "handler"(): $BigInventoryHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "drawerType"(): $FunctionalStorage$DrawerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerTile$Type = ($DrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerTile_ = $DrawerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$ActionMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $LinkingToolItem$ActionMode extends $Enum<($LinkingToolItem$ActionMode)> {
static readonly "ADD": $LinkingToolItem$ActionMode
static readonly "REMOVE": $LinkingToolItem$ActionMode


public static "values"(): ($LinkingToolItem$ActionMode)[]
public static "valueOf"(arg0: string): $LinkingToolItem$ActionMode
public "getColor"(): $TextColor
get "color"(): $TextColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$ActionMode$Type = (("add") | ("remove")) | ($LinkingToolItem$ActionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem$ActionMode_ = $LinkingToolItem$ActionMode$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ControllableDrawerTile, $ControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ControllerFluidHandler, $ControllerFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ConnectedDrawers, $ConnectedDrawers$Type} from "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LinkingToolItem$ActionMode, $LinkingToolItem$ActionMode$Type} from "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$ActionMode"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $StorageControllerTile<T extends $StorageControllerTile<(T)>> extends $ItemControllableDrawerTile<(T)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "addConnectedDrawers"(arg0: $LinkingToolItem$ActionMode$Type, ...arg1: ($BlockPos$Type)[]): boolean
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "initClient"(): void
public "invalidateCaps"(): void
public "getRenderBoundingBox"(): $AABB
public "getConnectedDrawers"(): $ConnectedDrawers
public "getBaseSize"(arg0: integer): integer
public "toggleLocking"(): void
public "getStorageDiv"(): double
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): void
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "getUtilitySlotAmount"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
get "optional"(): $LazyOptional<($IItemHandler)>
get "renderBoundingBox"(): $AABB
get "connectedDrawers"(): $ConnectedDrawers
get "storageDiv"(): double
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "utilitySlotAmount"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerTile$Type<T> = ($StorageControllerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerTile_<T> = $StorageControllerTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FramedDrawerModelData implements $INBTSerializable<($CompoundTag)> {
static readonly "FRAMED_PROPERTY": $ModelProperty<($FramedDrawerModelData)>

constructor(arg0: $Map$Type<(string), ($Item$Type)>)

public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getCode"(): string
public "getDesign"(): $Map<(string), ($Item)>
get "code"(): string
get "design"(): $Map<(string), ($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerModelData$Type = ($FramedDrawerModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerModelData_ = $FramedDrawerModelData$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$StorageUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StorageUpgradeItem$StorageTier, $StorageUpgradeItem$StorageTier$Type} from "packages/com/buuz135/functionalstorage/item/$StorageUpgradeItem$StorageTier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/com/buuz135/functionalstorage/item/$UpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageUpgradeItem extends $UpgradeItem {
static "MAX_SLOT": integer
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

constructor(arg0: $StorageUpgradeItem$StorageTier$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getStorageMultiplier"(): integer
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "getStorageTier"(): $StorageUpgradeItem$StorageTier
get "storageMultiplier"(): integer
get "storageTier"(): $StorageUpgradeItem$StorageTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$Type = ($StorageUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageUpgradeItem_ = $StorageUpgradeItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$ControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$StorageControllerExtensionBlock, $StorageControllerExtensionBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerExtensionBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ControllerExtensionTile, $ControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllerExtensionTile"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ControllerExtensionBlock extends $StorageControllerExtensionBlock<($ControllerExtensionTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionBlock$Type = ($ControllerExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerExtensionBlock_ = $ControllerExtensionBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$CompactingDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CompactingInventoryHandler, $CompactingInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$CompactingInventoryHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CompactingDrawerTile extends $ItemControllableDrawerTile<($CompactingDrawerTile)> {
 "handler": $CompactingInventoryHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($CompactingDrawerTile$Type)>, arg1: $BlockEntityType$Type<($CompactingDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getHandler"(): $CompactingInventoryHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CompactingDrawerTile$Type): void
public "getSelf"(): $CompactingDrawerTile
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "initClient"(): void
public "getBaseSize"(arg0: integer): integer
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
get "handler"(): $CompactingInventoryHandler
get "self"(): $CompactingDrawerTile
get "optional"(): $LazyOptional<($IItemHandler)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerTile$Type = ($CompactingDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerTile_ = $CompactingDrawerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$FramedDrawerControllerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ControllerFluidHandler, $ControllerFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$FramedDrawerModelData, $FramedDrawerModelData$Type} from "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FramedDrawerControllerTile extends $StorageControllerTile<($FramedDrawerControllerTile)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($FramedDrawerControllerTile$Type)>, arg1: $BlockEntityType$Type<($FramedDrawerControllerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getModelData"(): $ModelData
public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$Type): void
get "modelData"(): $ModelData
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerTile$Type = ($FramedDrawerControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerControllerTile_ = $FramedDrawerControllerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$UpgradeItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeItem$Type extends $Enum<($UpgradeItem$Type)> {
static readonly "STORAGE": $UpgradeItem$Type
static readonly "UTILITY": $UpgradeItem$Type


public static "values"(): ($UpgradeItem$Type)[]
public static "valueOf"(arg0: string): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type$Type = (("utility") | ("storage")) | ($UpgradeItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Type_ = $UpgradeItem$Type$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$StorageUpgradeItem$StorageTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StorageUpgradeItem$StorageTier extends $Enum<($StorageUpgradeItem$StorageTier)> {
static readonly "COPPER": $StorageUpgradeItem$StorageTier
static readonly "GOLD": $StorageUpgradeItem$StorageTier
static readonly "DIAMOND": $StorageUpgradeItem$StorageTier
static readonly "NETHERITE": $StorageUpgradeItem$StorageTier
static readonly "IRON": $StorageUpgradeItem$StorageTier
static readonly "MAX_STORAGE": $StorageUpgradeItem$StorageTier


public static "values"(): ($StorageUpgradeItem$StorageTier)[]
public static "valueOf"(arg0: string): $StorageUpgradeItem$StorageTier
public "getColor"(): integer
public "getLevel"(): integer
get "color"(): integer
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$StorageTier$Type = (("gold") | ("diamond") | ("max_storage") | ("copper") | ("iron") | ("netherite")) | ($StorageUpgradeItem$StorageTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageUpgradeItem$StorageTier_ = $StorageUpgradeItem$StorageTier$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedDrawerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DrawerBlock, $DrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$DrawerBlock"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$DrawerTile, $DrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$DrawerTile"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$FramedDrawerModelData, $FramedDrawerModelData$Type} from "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $FramedDrawerBlock extends $DrawerBlock {
static "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>
static "LOCKED": $BooleanProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$Type)

public static "fill"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public static "getDrawerModelData"(arg0: $ItemStack$Type): $FramedDrawerModelData
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerBlock$Type = ($FramedDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerBlock_ = $FramedDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ControllerExtensionTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerExtensionTile extends $StorageControllerExtensionTile<($ControllerExtensionTile)> {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<($ControllerExtensionTile$Type)>, arg1: $BlockEntityType$Type<($ControllerExtensionTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getSelf"(): $ControllerExtensionTile
get "self"(): $ControllerExtensionTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionTile$Type = ($ControllerExtensionTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerExtensionTile_ = $ControllerExtensionTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ConnectedDrawers implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $Level$Type, arg1: $StorageControllerTile$Type<(any)>)

public "getExtensions"(): integer
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setLevel"(arg0: $Level$Type): void
public "rebuild"(): void
public "getConnectedDrawers"(): $List<(long)>
public "getFluidHandlers"(): $List<($IFluidHandler)>
public "rebuildShapes"(): void
public "getItemHandlers"(): $List<($IItemHandler)>
public "getCachedVoxelShape"(): $VoxelShape
get "extensions"(): integer
set "level"(value: $Level$Type)
get "connectedDrawers"(): $List<(long)>
get "fluidHandlers"(): $List<($IFluidHandler)>
get "itemHandlers"(): $List<($IItemHandler)>
get "cachedVoxelShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedDrawers$Type = ($ConnectedDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedDrawers_ = $ConnectedDrawers$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$CompactingDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CompactingDrawerTile, $CompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$CompactingDrawerTile"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"

export class $CompactingDrawerBlock extends $RotatableBlock<($CompactingDrawerTile)> {
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type)

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "hasIndividualRenderVoxelShape"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerBlock$Type = ($CompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerBlock_ = $CompactingDrawerBlock$Type;
}}
