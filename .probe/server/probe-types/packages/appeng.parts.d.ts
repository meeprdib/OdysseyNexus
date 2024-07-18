declare module "packages/appeng/parts/automation/$AnnihilationPlanePart" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PlaneConnections, $PlaneConnections$Type} from "packages/appeng/parts/automation/$PlaneConnections"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AEBasePart, $AEBasePart$Type} from "packages/appeng/parts/$AEBasePart"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {

constructor(arg0: $IPartItem$Type<(any)>)

public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getConnections"(): $PlaneConnections
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "addToWorld"(): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "onUpdateShape"(arg0: $Direction$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "getStaticModels"(): $IPartModel
public static "getModels"(): $List<($IPartModel)>
public "onEntityCollision"(arg0: $Entity$Type): void
public "getModelData"(): $ModelData
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "getEnchantments"(): $Map<($Enchantment), (integer)>
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public static "tryClear"(arg0: any): void
get "connections"(): $PlaneConnections
get "staticModels"(): $IPartModel
get "models"(): $List<($IPartModel)>
get "modelData"(): $ModelData
get "enchantments"(): $Map<($Enchantment), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePart$Type = ($AnnihilationPlanePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePart_ = $AnnihilationPlanePart$Type;
}}
declare module "packages/appeng/parts/automation/$AnnihilationPlanePartItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PartItem, $PartItem$Type} from "packages/appeng/items/parts/$PartItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnnihilationPlanePart, $AnnihilationPlanePart$Type} from "packages/appeng/parts/automation/$AnnihilationPlanePart"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "CALLING_DAMAGEABLE_FROM_ANVIL": $ThreadLocal<(any)>
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

public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public static "byId"(arg0: $ResourceLocation$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public static "getId"(arg0: $IPartItem$Type<(any)>): $ResourceLocation
public "asItem"(): $Item
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePartItem$Type = ($AnnihilationPlanePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePartItem_ = $AnnihilationPlanePartItem$Type;
}}
declare module "packages/appeng/parts/$ICableBusContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ICableBusContainer {

 "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
 "isLadder"(arg0: $LivingEntity$Type): boolean
 "canConnectRedstone"(arg0: $Direction$Type): boolean
 "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "isProvidingStrongPower"(arg0: $Direction$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$Type): integer
 "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
 "getLightValue"(): integer
 "getRenderState"(): $CableBusRenderState
 "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
 "isEmpty"(): boolean
}

export namespace $ICableBusContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$Type = ($ICableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableBusContainer_ = $ICableBusContainer$Type;
}}
declare module "packages/appeng/parts/$CableBusContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ICableBusContainer, $ICableBusContainer$Type} from "packages/appeng/parts/$ICableBusContainer"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$Type} from "packages/appeng/helpers/$AEMultiBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$Type)

public "getShape"(): $VoxelShape
public "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "removeFromWorld"(): void
public "getBlockEntity"(): $BlockEntity
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "addToWorld"(): void
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "markForUpdate"(): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
public "markForSave"(): void
public "hasRedstone"(): boolean
public "setHost"(arg0: $IPartHost$Type): void
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "updateConnections"(): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "getFacadeContainer"(): $IFacadeContainer
public "getPart"(arg0: $Direction$Type): $IPart
public "isInWorld"(): boolean
public "getColor"(): $AEColor
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "isProvidingStrongPower"(arg0: $Direction$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$Type): integer
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "clearContent"(): void
public "notifyNeighbors"(): void
public "addPartDrops"(arg0: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
public "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getLightValue"(): integer
public "isBlocked"(arg0: $Direction$Type): boolean
public "getRenderState"(): $CableBusRenderState
public "removePartFromSide"(arg0: $Direction$Type): void
public "removePart"(arg0: $IPart$Type): boolean
public "clearContainer"(): void
public "partChanged"(): void
public "notifyNeighborNow"(arg0: $Direction$Type): void
public "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
public "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "isRequiresDynamicRender"(): boolean
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public static "isLoading"(): boolean
public "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
get "shape"(): $VoxelShape
get "blockEntity"(): $BlockEntity
set "host"(value: $IPartHost$Type)
get "facadeContainer"(): $IFacadeContainer
get "inWorld"(): boolean
get "color"(): $AEColor
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
get "requiresDynamicRender"(): boolean
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "loading"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$Type = ($CableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusContainer_ = $CableBusContainer$Type;
}}
declare module "packages/appeng/parts/automation/$PlaneConnections" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $PlaneConnections {
static readonly "PERMUTATIONS": $List<($PlaneConnections)>


public "isUp"(): boolean
public "isLeft"(): boolean
public "isRight"(): boolean
public "isDown"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
get "up"(): boolean
get "left"(): boolean
get "right"(): boolean
get "down"(): boolean
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaneConnections$Type = ($PlaneConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaneConnections_ = $PlaneConnections$Type;
}}
declare module "packages/appeng/parts/$AEBasePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BusSupport, $BusSupport$Type} from "packages/appeng/api/parts/$BusSupport"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ISegmentedInventory, $ISegmentedInventory$Type} from "packages/appeng/api/inventories/$ISegmentedInventory"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AEBasePart implements $IPart, $IActionHost, $ISegmentedInventory, $IPowerChannelState, $Nameable {

constructor(arg0: $IPartItem$Type<(any)>)

public "getCustomName"(): $Component
public "addEntityCrashInfo"(arg0: $CrashReportCategory$Type): void
public "isPowered"(): boolean
public "getGridNode"(): $IGridNode
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "removeFromWorld"(): void
public "getBlockEntity"(): $BlockEntity
public "getPartItem"(): $IPartItem<(any)>
public "getActionableNode"(): $IGridNode
public "isMissingChannel"(): boolean
public "isClientSide"(): boolean
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "addToWorld"(): void
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "getMainNode"(): $IManagedGridNode
public "onActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "setPartHostInfo"(arg0: $Direction$Type, arg1: $IPartHost$Type, arg2: $BlockEntity$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "onPartActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onPlacement"(arg0: $Player$Type): void
public "getLevel"(): $Level
public "readVisualStateFromNBT"(arg0: $CompoundTag$Type): void
public "writeVisualStateToNBT"(arg0: $CompoundTag$Type): void
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "onPartShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "useStandardMemoryCard"(): boolean
public "getName"(): $Component
public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getSide"(): $Direction
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "canConnectRedstone"(): boolean
public "onUpdateShape"(arg0: $Direction$Type): void
public "onClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "isSolid"(): boolean
public "getLightLevel"(): integer
public "onShiftClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "renderDynamic"(arg0: float, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: integer, arg4: integer): void
public "addPartDrop"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "canBePlacedOn"(arg0: $BusSupport$Type): boolean
public "getStaticModels"(): $IPartModel
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "getModelData"(): $ModelData
public "clearContent"(): void
public "getDesiredConnectionType"(): $AECableType
public "isProvidingStrongPower"(): integer
public "requireDynamicRender"(): boolean
public "isProvidingWeakPower"(): integer
public "getExternalCableConnectionType"(): $AECableType
public "getExternalFacingNode"(): $IGridNode
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public "hasCustomName"(): boolean
public "getDisplayName"(): $Component
public static "tryClear"(arg0: any): void
get "customName"(): $Component
get "powered"(): boolean
get "gridNode"(): $IGridNode
get "blockEntity"(): $BlockEntity
get "partItem"(): $IPartItem<(any)>
get "actionableNode"(): $IGridNode
get "missingChannel"(): boolean
get "clientSide"(): boolean
get "mainNode"(): $IManagedGridNode
get "level"(): $Level
get "name"(): $Component
get "host"(): $IPartHost
get "active"(): boolean
get "side"(): $Direction
get "solid"(): boolean
get "lightLevel"(): integer
get "staticModels"(): $IPartModel
get "modelData"(): $ModelData
get "desiredConnectionType"(): $AECableType
get "providingStrongPower"(): boolean
get "providingWeakPower"(): boolean
get "externalCableConnectionType"(): $AECableType
get "externalFacingNode"(): $IGridNode
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$Type = ($AEBasePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePart_ = $AEBasePart$Type;
}}
