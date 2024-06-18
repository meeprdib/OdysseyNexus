declare module "packages/earth/terrarium/botarium/forge/regsitry/fluid/$BotariumFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidInformation, $FluidInformation$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BotariumFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>


/**
 * 
 * @deprecated
 */
public static "of"(fluidProperties: $FluidProperties$Type): $BotariumFluidType
public static "create"(information: $FluidInformation$Type): $BotariumFluidType
public "initializeClient"(consumer: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumFluidType$Type = ($BotariumFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumFluidType_ = $BotariumFluidType$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot" {
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"

export interface $FluidSnapshot {

 "loadSnapshot"(arg0: $FluidContainer$Type): void

(arg0: $FluidContainer$Type): void
}

export namespace $FluidSnapshot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSnapshot$Type = ($FluidSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSnapshot_ = $FluidSnapshot$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem" {
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer"

export interface $BotariumFluidItem<T extends ($ItemFluidContainer) & ($Updatable<($ItemStack)>)> {

 "getFluidContainer"(arg0: $ItemStack$Type): T

(arg0: $ItemStack$Type): T
}

export namespace $BotariumFluidItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumFluidItem$Type<T> = ($BotariumFluidItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumFluidItem_<T> = $BotariumFluidItem$Type<(T)>;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"

export class $BotariumLiquidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(data: $FluidData$Type, properties: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumLiquidBlock$Type = ($BotariumLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumLiquidBlock_ = $BotariumLiquidBlock$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BotariumFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(data: $FluidData$Type)

public "getData"(): $FluidData
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSource"(state: $FluidState$Type): boolean
public "getBucket"(): $Item
public "getTickDelay"(level: $LevelReader$Type): integer
public "getFluidType"(): $FluidType
get "data"(): $FluidData
get "flowing"(): $Fluid
get "source"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
get "bucket"(): $Item
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumFlowingFluid$Type = ($BotariumFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumFlowingFluid_ = $BotariumFlowingFluid$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidSnapshot, $FluidSnapshot$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer"

export class $WrappedItemFluidContainer extends $Record implements $ItemFluidContainer, $Updatable<($ItemStack)> {

constructor(stack: $ItemStack$Type, container: $FluidContainer$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "update"(object: $ItemStack$Type): void
public "isEmpty"(): boolean
public "stack"(): $ItemStack
public "copy"(): $FluidContainer
public "getSize"(): integer
public "container"(): $FluidContainer
public "allowsInsertion"(): boolean
public "fromContainer"(container: $FluidContainer$Type): void
public "internalInsert"(fluids: $FluidHolder$Type, simulate: boolean): long
public "allowsExtraction"(): boolean
public "readSnapshot"(snapshot: $FluidSnapshot$Type): void
public "internalExtract"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
public "serialize"(nbt: $CompoundTag$Type): $CompoundTag
public "getFluids"(): $List<($FluidHolder)>
public "insertFluid"(fluid: $FluidHolder$Type, simulate: boolean): long
public "extractFromSlot"(slot: integer, toExtract: $FluidHolder$Type, simulate: boolean): long
public "extractFromSlot"(fluidHolder: $FluidHolder$Type, toExtract: $FluidHolder$Type, snapshot: $Runnable$Type): long
public "clearContent"(): void
public "deserialize"(nbt: $CompoundTag$Type): void
public "setFluid"(slot: integer, fluid: $FluidHolder$Type): void
public "extractFluid"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
public "isFluidValid"(slot: integer, fluid: $FluidHolder$Type): boolean
public "getTankCapacity"(tankSlot: integer): long
public "getContainerItem"(): $ItemStack
public "createSnapshot"(): $FluidSnapshot
public static "of"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
public static "of"(holder: $ItemStackHolder$Type): $ItemFluidContainer
public static "of"(block: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $FluidContainer
public static "holdsFluid"(stack: $ItemStack$Type): boolean
public static "holdsFluid"(block: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsFluid"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsFluid"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "getContainer"(direction: $Direction$Type): $FluidContainer
public "getFirstFluid"(): $FluidHolder
public static "tryClear"(arg0: any): void
get "empty"(): boolean
get "size"(): integer
get "fluids"(): $List<($FluidHolder)>
get "containerItem"(): $ItemStack
get "firstFluid"(): $FluidHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedItemFluidContainer$Type = ($WrappedItemFluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedItemFluidContainer_ = $WrappedItemFluidContainer$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidSounds" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidSounds {

constructor()

public "getSound"(name: string): $SoundEvent
public "getSounds"(): $Map<(string), ($SoundEvent)>
public "addSound"(name: string, sound: $SoundEvent$Type): void
get "sounds"(): $Map<(string), ($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSounds$Type = ($FluidSounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSounds_ = $FluidSounds$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidBucketItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidBucketItem extends $BucketItem {
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

constructor(data: $FluidData$Type, properties: $Item$Properties$Type)

public "getData"(): $FluidData
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
get "data"(): $FluidData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBucketItem$Type = ($FluidBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBucketItem_ = $FluidBucketItem$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"
import {$FluidSounds, $FluidSounds$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidSounds"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export interface $FluidInformation {

 "id"(): $ResourceLocation
 "overlay"(): $ResourceLocation
 "toProperties"(): $FluidProperties
 "slopeFindDistance"(): integer
 "sounds"(): $FluidSounds
 "fallDistanceModifier"(): float
 "temperature"(): integer
 "dropOff"(): integer
 "tickDelay"(): integer
 "canPushEntity"(): boolean
 "motionScale"(): double
 "canExtinguish"(): boolean
 "canHydrate"(): boolean
 "canSwim"(): boolean
 "viscosity"(): integer
 "adjacentPathType"(): $BlockPathTypes
 "pathType"(): $BlockPathTypes
 "canDrown"(): boolean
 "lightLevel"(): integer
 "rarity"(): $Rarity
 "explosionResistance"(): float
 "density"(): integer
 "canConvertToSource"(): boolean
 "canPlace"(): boolean
 "still"(): $ResourceLocation
 "tintColor"(): integer
 "screenOverlay"(): $ResourceLocation
 "supportsBloating"(): boolean
 "flowing"(): $ResourceLocation
}

export namespace $FluidInformation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInformation$Type = ($FluidInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInformation_ = $FluidInformation$Type;
}}
declare module "packages/earth/terrarium/botarium/util/$Serializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $Serializable {

 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "deserialize"(arg0: $CompoundTag$Type): void
}

export namespace $Serializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializable$Type = ($Serializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializable_ = $Serializable$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FluidInformation, $FluidInformation$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"

export interface $FluidData {

/**
 * 
 * @deprecated
 */
 "getProperties"(): $FluidProperties
 "getBlock"(): $Supplier<(any)>
 "getBucket"(): $Supplier<(any)>
 "setBlock"(arg0: $Supplier$Type<(any)>): void
 "getOptionalBlock"(): $Optional<(any)>
 "getOptionalBucket"(): $Optional<($Item)>
 "setFlowingFluid"(arg0: $Supplier$Type<(any)>): void
 "getInformation"(): $FluidInformation
 "setStillFluid"(arg0: $Supplier$Type<(any)>): void
 "getFlowingFluid"(): $Supplier<(any)>
 "getStillFluid"(): $Supplier<(any)>
 "getOptionalStillFluid"(): $Optional<(any)>
 "getOptionalFlowingFluid"(): $Optional<(any)>
 "setBucket"(arg0: $Supplier$Type<(any)>): void
}

export namespace $FluidData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidData$Type = ($FluidData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidData_ = $FluidData$Type;
}}
declare module "packages/earth/terrarium/botarium/util/$Updatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Updatable<T> {

 "update"(arg0: T): void

(arg0: T): void
}

export namespace $Updatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Updatable$Type<T> = ($Updatable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Updatable_<T> = $Updatable$Type<(T)>;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumSourceFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BotariumSourceFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(data: $FluidData$Type)

public "getData"(): $FluidData
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSource"(state: $FluidState$Type): boolean
public "getBucket"(): $Item
public "getTickDelay"(level: $LevelReader$Type): integer
public "getFluidType"(): $FluidType
get "data"(): $FluidData
get "flowing"(): $Fluid
get "source"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
get "bucket"(): $Item
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumSourceFluid$Type = ($BotariumSourceFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumSourceFluid_ = $BotariumSourceFluid$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties$Builder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $FluidProperties$Builder {


public "build"(id: $ResourceLocation$Type): $FluidProperties
public "overlay"(overlay: $ResourceLocation$Type): $FluidProperties$Builder
public "slopeFindDistance"(slopeFindDistance: integer): $FluidProperties$Builder
public "sounds"(sound: string, soundEvent: $SoundEvent$Type): $FluidProperties$Builder
public "fallDistanceModifier"(fallDistanceModifier: float): $FluidProperties$Builder
public "temperature"(temperature: integer): $FluidProperties$Builder
public "dropOff"(dropOff: integer): $FluidProperties$Builder
public "canPushEntity"(canPushEntity: boolean): $FluidProperties$Builder
public "motionScale"(motionScale: double): $FluidProperties$Builder
public "canExtinguish"(canExtinguish: boolean): $FluidProperties$Builder
public "canHydrate"(canHydrate: boolean): $FluidProperties$Builder
public "canSwim"(canSwim: boolean): $FluidProperties$Builder
public "viscosity"(viscosity: integer): $FluidProperties$Builder
public "adjacentPathType"(adjacentPathType: $BlockPathTypes$Type): $FluidProperties$Builder
public "pathType"(pathType: $BlockPathTypes$Type): $FluidProperties$Builder
public "canDrown"(canDrown: boolean): $FluidProperties$Builder
public "tickRate"(tickRate: integer): $FluidProperties$Builder
public "lightLevel"(lightLevel: integer): $FluidProperties$Builder
public "rarity"(rarity: $Rarity$Type): $FluidProperties$Builder
public "explosionResistance"(explosionResistance: float): $FluidProperties$Builder
public "density"(density: integer): $FluidProperties$Builder
public "canConvertToSource"(canConvertToSource: boolean): $FluidProperties$Builder
public "still"(still: $ResourceLocation$Type): $FluidProperties$Builder
public "tintColor"(tintColor: integer): $FluidProperties$Builder
public "screenOverlay"(screenOverlay: $ResourceLocation$Type): $FluidProperties$Builder
public "supportsBloating"(supportsBloating: boolean): $FluidProperties$Builder
public "disablePlacing"(): $FluidProperties$Builder
public "flowing"(flowing: $ResourceLocation$Type): $FluidProperties$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$Builder$Type = ($FluidProperties$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties$Builder_ = $FluidProperties$Builder$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $FluidHolder {

 "isEmpty"(): boolean
 "matches"(arg0: $FluidHolder$Type): boolean
 "is"(fluid: $Fluid$Type): boolean
 "is"(tagKey: $TagKey$Type<($Fluid$Type)>): boolean
 "is"(predicate: $Predicate$Type<($Holder$Type<($Fluid$Type)>)>): boolean
 "is"(fluid: $Holder$Type<($Fluid$Type)>): boolean
 "serialize"(): $CompoundTag
 "writeToBuffer"(buffer: $FriendlyByteBuf$Type): void
 "setAmount"(arg0: long): void
 "deserialize"(arg0: $CompoundTag$Type): void
 "getFluidAmount"(): long
 "copyHolder"(): $FluidHolder
 "copyWithAmount"(amount: long): $FluidHolder
 "getFluidHolder"(): $Holder<($Fluid)>
 "setFluid"(arg0: $Fluid$Type): void
 "setCompound"(arg0: $CompoundTag$Type): void
 "getFluid"(): $Fluid
 "getCompound"(): $CompoundTag
}

export namespace $FluidHolder {
const CODEC: $Codec<($FluidHolder)>
const NEW_CODEC: $Codec<($FluidHolder)>
function of(fluid: $Fluid$Type): $FluidHolder
function of(fluid: $Fluid$Type, amount: long): $FluidHolder
function of(fluid: $Fluid$Type, buckets: double, tag: $CompoundTag$Type): $FluidHolder
function of(fluid: $Fluid$Type, amount: long, tag: $CompoundTag$Type): $FluidHolder
function empty(): $FluidHolder
function readFromBuffer(buffer: $FriendlyByteBuf$Type): $FluidHolder
function ofMillibuckets(fluid: $Fluid$Type, millibuckets: long, tag: $CompoundTag$Type): $FluidHolder
function ofMillibuckets(fluid: $Fluid$Type, millibuckets: long): $FluidHolder
function fromCompound(tag: $CompoundTag$Type): $FluidHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidHolder$Type = ($FluidHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidHolder_ = $FluidHolder$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidSnapshot, $FluidSnapshot$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ItemFluidContainer extends $FluidContainer {

 "getContainerItem"(): $ItemStack
 "isEmpty"(): boolean
 "copy"(): $FluidContainer
 "getSize"(): integer
 "allowsInsertion"(): boolean
 "fromContainer"(arg0: $FluidContainer$Type): void
 "internalInsert"(fluids: $FluidHolder$Type, simulate: boolean): long
 "allowsExtraction"(): boolean
 "readSnapshot"(snapshot: $FluidSnapshot$Type): void
 "internalExtract"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
 "getFluids"(): $List<($FluidHolder)>
 "insertFluid"(arg0: $FluidHolder$Type, arg1: boolean): long
 "extractFromSlot"(slot: integer, toExtract: $FluidHolder$Type, simulate: boolean): long
 "extractFromSlot"(arg0: $FluidHolder$Type, arg1: $FluidHolder$Type, arg2: $Runnable$Type): long
 "getContainer"(direction: $Direction$Type): $FluidContainer
 "setFluid"(arg0: integer, arg1: $FluidHolder$Type): void
 "getFirstFluid"(): $FluidHolder
 "extractFluid"(arg0: $FluidHolder$Type, arg1: boolean): $FluidHolder
 "isFluidValid"(slot: integer, fluid: $FluidHolder$Type): boolean
 "getTankCapacity"(arg0: integer): long
 "createSnapshot"(): $FluidSnapshot
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "deserialize"(arg0: $CompoundTag$Type): void
 "clearContent"(): void
}

export namespace $ItemFluidContainer {
function of(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(holder: $ItemStackHolder$Type): $ItemFluidContainer
function of(block: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $FluidContainer
function holdsFluid(stack: $ItemStack$Type): boolean
function holdsFluid(block: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFluidContainer$Type = ($ItemFluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFluidContainer_ = $ItemFluidContainer$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidSnapshot, $FluidSnapshot$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot"
import {$Serializable, $Serializable$Type} from "packages/earth/terrarium/botarium/util/$Serializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer"

export interface $FluidContainer extends $Serializable, $Clearable {

 "isEmpty"(): boolean
 "copy"(): $FluidContainer
 "getSize"(): integer
 "allowsInsertion"(): boolean
 "fromContainer"(arg0: $FluidContainer$Type): void
 "internalInsert"(fluids: $FluidHolder$Type, simulate: boolean): long
 "allowsExtraction"(): boolean
 "readSnapshot"(snapshot: $FluidSnapshot$Type): void
 "internalExtract"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
 "getFluids"(): $List<($FluidHolder)>
 "insertFluid"(arg0: $FluidHolder$Type, arg1: boolean): long
 "extractFromSlot"(slot: integer, toExtract: $FluidHolder$Type, simulate: boolean): long
 "extractFromSlot"(arg0: $FluidHolder$Type, arg1: $FluidHolder$Type, arg2: $Runnable$Type): long
 "getContainer"(direction: $Direction$Type): $FluidContainer
 "setFluid"(arg0: integer, arg1: $FluidHolder$Type): void
 "getFirstFluid"(): $FluidHolder
 "extractFluid"(arg0: $FluidHolder$Type, arg1: boolean): $FluidHolder
 "isFluidValid"(slot: integer, fluid: $FluidHolder$Type): boolean
 "getTankCapacity"(arg0: integer): long
 "createSnapshot"(): $FluidSnapshot
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "deserialize"(arg0: $CompoundTag$Type): void
 "clearContent"(): void
}

export namespace $FluidContainer {
function of(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(holder: $ItemStackHolder$Type): $ItemFluidContainer
function of(block: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $FluidContainer
function holdsFluid(stack: $ItemStack$Type): boolean
function holdsFluid(block: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainer$Type = ($FluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainer_ = $FluidContainer$Type;
}}
declare module "packages/earth/terrarium/baubly/common/$SlotInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotInfo extends $Record {

constructor(identifier: string, wearer: $LivingEntity$Type, index: integer)

public "index"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "identifier"(): string
public "wearer"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotInfo$Type = ($SlotInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotInfo_ = $SlotInfo$Type;
}}
declare module "packages/earth/terrarium/baubly/common/$DropRule" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DropRule extends $Enum<($DropRule)> {
static readonly "ALWAYS_KEEP": $DropRule
static readonly "ALWAYS_DROP": $DropRule
static readonly "DESTROY": $DropRule
static readonly "DEFAULT": $DropRule


public static "values"(): ($DropRule)[]
public static "valueOf"(name: string): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRule$Type = (("always_drop") | ("default") | ("always_keep") | ("destroy")) | ($DropRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropRule_ = $DropRule$Type;
}}
declare module "packages/earth/terrarium/baubly/common/$Bauble" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SlotInfo, $SlotInfo$Type} from "packages/earth/terrarium/baubly/common/$SlotInfo"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DropRule, $DropRule$Type} from "packages/earth/terrarium/baubly/common/$DropRule"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $Bauble {

 "getModifiers"(defaultModifiers: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, stack: $ItemStack$Type, slot: $SlotInfo$Type, uuid: $UUID$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "tick"(stack: $ItemStack$Type, slot: $SlotInfo$Type): void
 "canEquip"(stack: $ItemStack$Type, slot: $SlotInfo$Type): boolean
 "onUnequip"(stack: $ItemStack$Type, slot: $SlotInfo$Type): void
 "onEquip"(stack: $ItemStack$Type, slot: $SlotInfo$Type): void
 "onBreak"(stack: $ItemStack$Type, slot: $SlotInfo$Type): void
 "canUnequip"(stack: $ItemStack$Type, slot: $SlotInfo$Type): boolean
 "getDropRule"(stack: $ItemStack$Type, slot: $SlotInfo$Type): $DropRule
}

export namespace $Bauble {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bauble$Type = ($Bauble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bauble_ = $Bauble$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties" {
import {$FluidProperties$Builder, $FluidProperties$Builder$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties$Builder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$FluidInformation, $FluidInformation$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidSounds, $FluidSounds$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidSounds"

export class $FluidProperties extends $Record implements $FluidInformation {

constructor(id: $ResourceLocation$Type, motionScale: double, canPushEntity: boolean, canSwim: boolean, canDrown: boolean, fallDistanceModifier: float, canExtinguish: boolean, canConvertToSource: boolean, supportsBloating: boolean, pathType: $BlockPathTypes$Type, adjacentPathType: $BlockPathTypes$Type, canHydrate: boolean, lightLevel: integer, density: integer, temperature: integer, viscosity: integer, rarity: $Rarity$Type, sounds: $FluidSounds$Type, still: $ResourceLocation$Type, flowing: $ResourceLocation$Type, overlay: $ResourceLocation$Type, screenOverlay: $ResourceLocation$Type, tintColor: integer, tickDelay: integer, slopeFindDistance: integer, dropOff: integer, explosionResistance: float, canPlace: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public static "create"(): $FluidProperties$Builder
public "overlay"(): $ResourceLocation
public "toProperties"(): $FluidProperties
public "slopeFindDistance"(): integer
public "sounds"(): $FluidSounds
public "fallDistanceModifier"(): float
public "temperature"(): integer
public "dropOff"(): integer
public "tickDelay"(): integer
public "canPushEntity"(): boolean
public "motionScale"(): double
public "canExtinguish"(): boolean
public "canHydrate"(): boolean
public "canSwim"(): boolean
public "viscosity"(): integer
public "adjacentPathType"(): $BlockPathTypes
public "pathType"(): $BlockPathTypes
public "canDrown"(): boolean
public "lightLevel"(): integer
public "rarity"(): $Rarity
public "explosionResistance"(): float
public "density"(): integer
public "canConvertToSource"(): boolean
public "canPlace"(): boolean
public "still"(): $ResourceLocation
public "tintColor"(): integer
public "screenOverlay"(): $ResourceLocation
public "supportsBloating"(): boolean
public "flowing"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$Type = ($FluidProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties_ = $FluidProperties$Type;
}}
declare module "packages/earth/terrarium/botarium/common/item/$ItemStackHolder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackHolder {

constructor(stack: $ItemStack$Type)

public "copy"(): $ItemStackHolder
public "getStack"(): $ItemStack
public "isDirty"(): boolean
public "setStack"(stack: $ItemStack$Type): void
get "stack"(): $ItemStack
get "dirty"(): boolean
set "stack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHolder$Type = ($ItemStackHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHolder_ = $ItemStackHolder$Type;
}}
