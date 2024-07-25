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

public "addToWorld"(): void
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getConnections"(): $PlaneConnections
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public static "getModels"(): $List<($IPartModel)>
public "getEnchantments"(): $Map<($Enchantment), (integer)>
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "onUpdateShape"(arg0: $Direction$Type): void
public "getStaticModels"(): $IPartModel
public "getModelData"(): $ModelData
public static "tryClear"(arg0: any): void
get "connections"(): $PlaneConnections
get "models"(): $List<($IPartModel)>
get "enchantments"(): $Map<($Enchantment), (integer)>
get "staticModels"(): $IPartModel
get "modelData"(): $ModelData
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

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "getId"(arg0: $IPartItem$Type<(any)>): $ResourceLocation
public static "getNetworkId"(arg0: $IPartItem$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public static "byId"(arg0: $ResourceLocation$Type): $IPartItem<(any)>
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
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
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

 "isEmpty"(): boolean
 "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
 "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
 "onEntityCollision"(arg0: $Entity$Type): void
 "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
 "isLadder"(arg0: $LivingEntity$Type): boolean
 "canConnectRedstone"(arg0: $Direction$Type): boolean
 "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
 "getLightValue"(): integer
 "getRenderState"(): $CableBusRenderState
 "isProvidingStrongPower"(arg0: $Direction$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$Type): integer
 "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
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
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
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
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$Type)

public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "addToWorld"(): void
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "removeFromWorld"(): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getBlockEntity"(): $BlockEntity
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "onEntityCollision"(arg0: $Entity$Type): void
public "isInWorld"(): boolean
public "setHost"(arg0: $IPartHost$Type): void
public "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
public "addPartDrops"(arg0: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getLightValue"(): integer
public "removePart"(arg0: $IPart$Type): boolean
public "notifyNeighborNow"(arg0: $Direction$Type): void
public "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
public "getRenderState"(): $CableBusRenderState
public "isBlocked"(arg0: $Direction$Type): boolean
public "partChanged"(): void
public "removePartFromSide"(arg0: $Direction$Type): void
public "clearContainer"(): void
public "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
public "updateConnections"(): void
public "getFacadeContainer"(): $IFacadeContainer
public "getPart"(arg0: $Direction$Type): $IPart
public "hasRedstone"(): boolean
public "notifyNeighbors"(): void
public "clearContent"(): void
public "getColor"(): $AEColor
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "isProvidingStrongPower"(arg0: $Direction$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$Type): integer
public "markForUpdate"(): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
public "markForSave"(): void
public "isRequiresDynamicRender"(): boolean
public "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "shape"(): $VoxelShape
get "loading"(): boolean
get "blockEntity"(): $BlockEntity
get "inWorld"(): boolean
set "host"(value: $IPartHost$Type)
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
get "facadeContainer"(): $IFacadeContainer
get "color"(): $AEColor
get "requiresDynamicRender"(): boolean
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


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
public "isLeft"(): boolean
public "isUp"(): boolean
public "isDown"(): boolean
public "isRight"(): boolean
get "index"(): integer
get "left"(): boolean
get "up"(): boolean
get "down"(): boolean
get "right"(): boolean
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
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
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

public "getHost"(): $IPartHost
public "isActive"(): boolean
public "setPartHostInfo"(arg0: $Direction$Type, arg1: $IPartHost$Type, arg2: $BlockEntity$Type): void
public "addToWorld"(): void
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "removeFromWorld"(): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "isMissingChannel"(): boolean
public "addEntityCrashInfo"(arg0: $CrashReportCategory$Type): void
public "isPowered"(): boolean
public "getGridNode"(): $IGridNode
public "getPartItem"(): $IPartItem<(any)>
public "getMainNode"(): $IManagedGridNode
public "getActionableNode"(): $IGridNode
public "isClientSide"(): boolean
public "getBlockEntity"(): $BlockEntity
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getLevel"(): $Level
public "getSide"(): $Direction
public "getCustomName"(): $Component
public "useStandardMemoryCard"(): boolean
public "writeVisualStateToNBT"(arg0: $CompoundTag$Type): void
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "readVisualStateFromNBT"(arg0: $CompoundTag$Type): void
public "onPartShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "getName"(): $Component
public "onPartActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onPlacement"(arg0: $Player$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "onShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "canConnectRedstone"(): boolean
public "clearContent"(): void
public "getExternalCableConnectionType"(): $AECableType
public "getExternalFacingNode"(): $IGridNode
public "isProvidingStrongPower"(): integer
public "getDesiredConnectionType"(): $AECableType
public "isProvidingWeakPower"(): integer
public "requireDynamicRender"(): boolean
public "renderDynamic"(arg0: float, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: integer, arg4: integer): void
public "getLightLevel"(): integer
public "isSolid"(): boolean
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "onUpdateShape"(arg0: $Direction$Type): void
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "canBePlacedOn"(arg0: $BusSupport$Type): boolean
public "onClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "getStaticModels"(): $IPartModel
public "onShiftClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "addPartDrop"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "getModelData"(): $ModelData
public "hasCustomName"(): boolean
public "getDisplayName"(): $Component
public static "tryClear"(arg0: any): void
get "host"(): $IPartHost
get "active"(): boolean
get "missingChannel"(): boolean
get "powered"(): boolean
get "gridNode"(): $IGridNode
get "partItem"(): $IPartItem<(any)>
get "mainNode"(): $IManagedGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
get "blockEntity"(): $BlockEntity
get "level"(): $Level
get "side"(): $Direction
get "customName"(): $Component
get "name"(): $Component
get "externalCableConnectionType"(): $AECableType
get "externalFacingNode"(): $IGridNode
get "providingStrongPower"(): boolean
get "desiredConnectionType"(): $AECableType
get "providingWeakPower"(): boolean
get "lightLevel"(): integer
get "solid"(): boolean
get "staticModels"(): $IPartModel
get "modelData"(): $ModelData
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
