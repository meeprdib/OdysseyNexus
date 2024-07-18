declare module "packages/com/faboslav/friendsandfoes/mixin/$BeeEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BeeEntityAccessor {

 "setTicksUntilCanPollinate"(arg0: integer): void
 "getTicksUntilCanPollinate"(): integer
 "invokeSetHasNectar"(arg0: boolean): void
}

export namespace $BeeEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeEntityAccessor$Type = ($BeeEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeEntityAccessor_ = $BeeEntityAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/mixin/$StructurePoolAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructurePoolAccessor {

 "setElementCounts"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
 "getElementCounts"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "setElements"(arg0: $ObjectArrayList$Type<($StructurePoolElement$Type)>): void
 "getElements"(): $ObjectArrayList<($StructurePoolElement)>
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePoolAccessor$Type = ($StructurePoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePoolAccessor_ = $StructurePoolAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/block/$CopperButtonBlock" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CopperButtonBlock extends $ButtonBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(settings: $BlockBehaviour$Properties$Type, pressTicks: integer)

public "getSound"(powered: boolean): $SoundEvent
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopperButtonBlock$Type = ($CopperButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopperButtonBlock_ = $CopperButtonBlock$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/entity/$WildfireEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$FacetHolder, $FacetHolder$Type} from "packages/com/redpxnda/nucleus/facet/$FacetHolder"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Monster, $Monster$Type} from "packages/net/minecraft/world/entity/monster/$Monster"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$SpawnGroupData, $SpawnGroupData$Type} from "packages/net/minecraft/world/entity/$SpawnGroupData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WildfireEntity extends $Monster {
static readonly "GENERIC_ATTACK_DAMAGE": float
static readonly "GENERIC_FOLLOW_RANGE": float
static readonly "DEFAULT_ACTIVE_SHIELDS_COUNT": integer
static readonly "DEFAULT_TICKS_UNTIL_SHIELD_REGENERATION": integer
static readonly "DEFAULT_SUMMONED_BLAZES_COUNT": integer
static readonly "MAXIMUM_SUMMONED_BLAZES_COUNT": integer
 "entityJs$builder": any
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "lookControl": $LookControl
 "navigation": $PathNavigation
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
readonly "handDropChances": (float)[]
readonly "armorDropChances": (float)[]
 "persistenceRequired": boolean
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
readonly "activeEffects": $Map<($MobEffect), ($MobEffectInstance)>
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "effectsDirty": boolean
 "level": $Level
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "dimensions": $EntityDimensions
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type)

public "isSensitiveToWater"(): boolean
public "finalizeSpawn"(world: $ServerLevelAccessor$Type, difficulty: $DifficultyInstance$Type, spawnReason: $MobSpawnType$Type, entityData: $SpawnGroupData$Type, entityNbt: $CompoundTag$Type): $SpawnGroupData
public "getSummonedBlazesCount"(): integer
public "setSummonedBlazesCount"(summonedBlazesCount: integer): void
public "getActiveShieldsCount"(): integer
public "playShieldBreakSound"(): void
public "setTicksUntilShieldRegeneration"(ticksUntilShieldRegeneration: integer): void
public "getSummonBlazeSound"(): $SoundEvent
public "getShieldBreakSound"(): $SoundEvent
public "playSummonBlazeSound"(): void
public "setActiveShieldsCount"(activeShields: integer): void
public "resetTicksUntilShieldRegeneration"(): void
public "getTicksUntilShieldRegeneration"(): integer
public "aiStep"(): void
public "tick"(): void
public "readAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "addAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "attack"(source: $DamageSource$Type, amount: float): boolean
public "isOnFire"(): boolean
public "causeFallDamage"(fallDistance: float, damageMultiplier: float, damageSource: $DamageSource$Type): boolean
public "playShootSound"(): void
public "getShootSound"(): $SoundEvent
public "hasActiveShields"(): boolean
public "getShockwaveSound"(): $SoundEvent
public "breakShield"(): void
public "areBlazesSummoned"(): boolean
public "playShockwaveSound"(): void
public "regenerateShield"(): void
public "getLightLevelDependentMagicValue"(): float
public static "createAttributes"(): $AttributeSupplier$Builder
public "getBrain"(): $Brain<($WildfireEntity)>
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "of"(holder: any): $FacetHolder
get "sensitiveToWater"(): boolean
get "summonedBlazesCount"(): integer
set "summonedBlazesCount"(value: integer)
get "activeShieldsCount"(): integer
set "ticksUntilShieldRegeneration"(value: integer)
get "summonBlazeSound"(): $SoundEvent
get "shieldBreakSound"(): $SoundEvent
set "activeShieldsCount"(value: integer)
get "ticksUntilShieldRegeneration"(): integer
get "onFire"(): boolean
get "shootSound"(): $SoundEvent
get "shockwaveSound"(): $SoundEvent
get "lightLevelDependentMagicValue"(): float
get "brain"(): $Brain<($WildfireEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfireEntity$Type = ($WildfireEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildfireEntity_ = $WildfireEntity$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/entity/$BlazeEntityAccess" {
import {$WildfireEntity, $WildfireEntity$Type} from "packages/com/faboslav/friendsandfoes/entity/$WildfireEntity"

export interface $BlazeEntityAccess {

 "friendsandfoes_getWildfire"(): $WildfireEntity
 "friendsandfoes_setWildfire"(arg0: $WildfireEntity$Type): void
}

export namespace $BlazeEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeEntityAccess$Type = ($BlazeEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeEntityAccess_ = $BlazeEntityAccess$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/mixin/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getCuboids"(): $List<($ModelPart$Cube)>
 "getChildren"(): $Map<(string), ($ModelPart)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/mixin/$LimbAnimatorAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LimbAnimatorAccessor {

 "getPresSpeed"(): float
 "setPrevSpeed"(arg0: float): void
 "setPos"(arg0: float): void
}

export namespace $LimbAnimatorAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimbAnimatorAccessor$Type = ($LimbAnimatorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimbAnimatorAccessor_ = $LimbAnimatorAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/mixin/forge/$FireBlockAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockAccessor {

 "invokeRegisterFlammableBlock"(arg0: $Block$Type, arg1: integer, arg2: integer): void

(arg0: $Block$Type, arg1: integer, arg2: integer): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccessor$Type = ($FireBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockAccessor_ = $FireBlockAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/block/$OxidizableButtonBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WeatheringCopper$WeatherState, $WeatheringCopper$WeatherState$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper$WeatherState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$CopperButtonBlock, $CopperButtonBlock$Type} from "packages/com/faboslav/friendsandfoes/block/$CopperButtonBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Oxidizable, $Oxidizable$Type} from "packages/com/faboslav/friendsandfoes/block/$Oxidizable"

export class $OxidizableButtonBlock extends $CopperButtonBlock implements $Oxidizable {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(OxidationLevel: $WeatheringCopper$WeatherState$Type, settings: $BlockBehaviour$Properties$Type, pressTicks: integer)

public "isRandomlyTicking"(state: $BlockState$Type): boolean
public "getDegradationLevel"(): $WeatheringCopper$WeatherState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "randomTick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "getDecreasedOxidationState"(state: $BlockState$Type): $Optional<($BlockState)>
public static "getUnaffectedOxidationBlock"(block: $Block$Type): $Block
public static "getUnaffectedOxidationState"(state: $BlockState$Type): $BlockState
public static "getIncreasedOxidationBlock"(block: $Block$Type): $Optional<($Block)>
public static "getDecreasedOxidationBlock"(block: $Block$Type): $Optional<($Block)>
public "getChanceModifier"(): float
public "getNext"(state: $BlockState$Type): $Optional<($BlockState)>
public static "getPrevious"(arg0: $BlockState$Type): $Optional<($BlockState)>
public static "getNext"(arg0: $Block$Type): $Optional<($Block)>
public static "getFirst"(arg0: $Block$Type): $Block
public static "getFirst"(arg0: $BlockState$Type): $BlockState
public static "getPrevious"(arg0: $Block$Type): $Optional<($Block)>
public "onRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "applyChangeOverTime"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "degradationLevel"(): $WeatheringCopper$WeatherState
get "chanceModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OxidizableButtonBlock$Type = ($OxidizableButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OxidizableButtonBlock_ = $OxidizableButtonBlock$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/entity/$ZombieHorseEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombieHorseEntityAccess {

 "friendsandfoes_setTrapped"(arg0: boolean): void
 "friendsandfoes_isTrapped"(): boolean
}

export namespace $ZombieHorseEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombieHorseEntityAccess$Type = ($ZombieHorseEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombieHorseEntityAccess_ = $ZombieHorseEntityAccess$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/entity/$IllusionerEntityAccess" {
import {$Illusioner, $Illusioner$Type} from "packages/net/minecraft/world/entity/monster/$Illusioner"

export interface $IllusionerEntityAccess {

 "friendsandfoes_setTicksUntilDespawn"(arg0: integer): void
 "friendsandfoes_tryToTeleport"(arg0: integer, arg1: integer, arg2: integer): boolean
 "friendsandfoes_spawnCloudParticles"(): void
 "friendsandfoes_setIllusioner"(arg0: $Illusioner$Type): void
 "friendsandfoes_setIsIllusion"(arg0: boolean): void
}

export namespace $IllusionerEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IllusionerEntityAccess$Type = ($IllusionerEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IllusionerEntityAccess_ = $IllusionerEntityAccess$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/mixin/$BundleItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BundleItemAccessor {

}

export namespace $BundleItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleItemAccessor$Type = ($BundleItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BundleItemAccessor_ = $BundleItemAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/block/$Oxidizable" {
import {$WeatheringCopper, $WeatheringCopper$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WeatheringCopper$WeatherState, $WeatheringCopper$WeatherState$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper$WeatherState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $Oxidizable extends $WeatheringCopper {

 "getChanceModifier"(): float
 "getNext"(state: $BlockState$Type): $Optional<($BlockState)>
 "onRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
 "getAge"(): $WeatheringCopper$WeatherState
 "applyChangeOverTime"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void

(state: $BlockState$Type): $Optional<($BlockState)>
}

export namespace $Oxidizable {
const OXIDATION_LEVEL_INCREASES: $Supplier<($BiMap<($Block), ($Block)>)>
const OXIDATION_LEVEL_DECREASES: $Supplier<($BiMap<($Block), ($Block)>)>
function getDecreasedOxidationState(state: $BlockState$Type): $Optional<($BlockState)>
function getUnaffectedOxidationBlock(block: $Block$Type): $Block
function getUnaffectedOxidationState(state: $BlockState$Type): $BlockState
function getIncreasedOxidationBlock(block: $Block$Type): $Optional<($Block)>
function getDecreasedOxidationBlock(block: $Block$Type): $Optional<($Block)>
function getPrevious(arg0: $BlockState$Type): $Optional<($BlockState)>
function getNext(arg0: $Block$Type): $Optional<($Block)>
function getFirst(arg0: $Block$Type): $Block
function getFirst(arg0: $BlockState$Type): $BlockState
function getPrevious(arg0: $Block$Type): $Optional<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Oxidizable$Type = ($Oxidizable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Oxidizable_ = $Oxidizable$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/mixin/$ServerWorldAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomSpawner, $CustomSpawner$Type} from "packages/net/minecraft/world/level/$CustomSpawner"

export interface $ServerWorldAccessor {

 "getSpawners"(): $List<($CustomSpawner)>
 "setSpawners"(arg0: $List$Type<($CustomSpawner$Type)>): void
}

export namespace $ServerWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldAccessor$Type = ($ServerWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldAccessor_ = $ServerWorldAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/block/$OxidizableLightningRodBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$WeatheringCopper, $WeatheringCopper$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WeatheringCopper$WeatherState, $WeatheringCopper$WeatherState$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper$WeatherState"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$LightningRodBlock, $LightningRodBlock$Type} from "packages/net/minecraft/world/level/block/$LightningRodBlock"

export class $OxidizableLightningRodBlock extends $LightningRodBlock implements $WeatheringCopper {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "RANGE": integer
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

constructor(oxidationLevel: $WeatheringCopper$WeatherState$Type, settings: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(state: $BlockState$Type): boolean
public "getDegradationLevel"(): $WeatheringCopper$WeatherState
public static "getPrevious"(arg0: $BlockState$Type): $Optional<($BlockState)>
public static "getNext"(arg0: $Block$Type): $Optional<($Block)>
public static "getFirst"(arg0: $Block$Type): $Block
public static "getFirst"(arg0: $BlockState$Type): $BlockState
public static "getPrevious"(arg0: $Block$Type): $Optional<($Block)>
get "degradationLevel"(): $WeatheringCopper$WeatherState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OxidizableLightningRodBlock$Type = ($OxidizableLightningRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OxidizableLightningRodBlock_ = $OxidizableLightningRodBlock$Type;
}}
