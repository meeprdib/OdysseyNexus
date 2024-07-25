declare module "packages/io/redspace/ironsspellbooks/item/curios/$SimpleAttributeCurio" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$CurioBaseItem, $CurioBaseItem$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleAttributeCurio extends $CurioBaseItem {
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

constructor(arg0: $Item$Properties$Type, arg1: $Attribute$Type, arg2: $AttributeModifier$Type)

public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAttributeCurio$Type = ($SimpleAttributeCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleAttributeCurio_ = $SimpleAttributeCurio$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/attribute/$MagicRangedAttribute" {
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IMagicAttribute, $IMagicAttribute$Type} from "packages/io/redspace/ironsspellbooks/api/attribute/$IMagicAttribute"
import {$RangedAttribute, $RangedAttribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MagicRangedAttribute extends $RangedAttribute implements $IMagicAttribute {
 "minValue": double
 "maxValue": double
static readonly "MAX_NAME_LENGTH": integer
 "defaultValue": double
 "syncable": boolean
 "descriptionId": string

constructor(arg0: string, arg1: double, arg2: double, arg3: double)

public static "toValueComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Operation$Type, arg2: double, arg3: $TooltipFlag$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$Type): boolean
public static "toComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Type, arg2: $TooltipFlag$Type): $MutableComponent
public static "toBaseComponent"(arg0: $Attribute$Type, arg1: double, arg2: double, arg3: boolean, arg4: $TooltipFlag$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicRangedAttribute$Type = ($MagicRangedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicRangedAttribute_ = $MagicRangedAttribute$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomDescriptionMobEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public static "handleCustomPotionTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: boolean, arg3: $MobEffectInstance$Type, arg4: $CustomDescriptionMobEffect$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDescriptionMobEffect$Type = ($CustomDescriptionMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomDescriptionMobEffect_ = $CustomDescriptionMobEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/entity/spells/$AbstractMagicProjectile" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$FacetHolder, $FacetHolder$Type} from "packages/com/redpxnda/nucleus/facet/$FacetHolder"
import {$AntiMagicSusceptible, $AntiMagicSusceptible$Type} from "packages/io/redspace/ironsspellbooks/entity/mobs/$AntiMagicSusceptible"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractMagicProjectile extends $Projectile implements $AntiMagicSusceptible {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
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
 "level": $Level
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "tick"(): void
public "getSpeed"(): float
public "getDamage"(): float
public "travel"(): void
public "setDamage"(arg0: float): void
public "checkDespawn"(): void
public "isOnFire"(): boolean
public "shouldBeSaved"(): boolean
public "shoot"(arg0: $Vec3$Type): void
public "onAntiMagic"(arg0: $MagicData$Type): void
public "setExplosionRadius"(arg0: float): void
public "getImpactSound"(): $Optional<($SoundEvent)>
public "impactParticles"(arg0: double, arg1: double, arg2: double): void
public "getExplosionRadius"(): float
public "handleHitDetection"(): void
public "trailParticles"(): void
public static "of"(holder: any): $FacetHolder
get "speed"(): float
get "damage"(): float
set "damage"(value: float)
get "onFire"(): boolean
set "explosionRadius"(value: float)
get "impactSound"(): $Optional<($SoundEvent)>
get "explosionRadius"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMagicProjectile$Type = ($AbstractMagicProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMagicProjectile_ = $AbstractMagicProjectile$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$SpiderAspectEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpiderAspectEffect extends $MagicMobEffect {
static readonly "DAMAGE_PER_LEVEL": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderAspectEffect$Type = ($SpiderAspectEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiderAspectEffect_ = $SpiderAspectEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$InkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InkItem extends $Item {
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

constructor(arg0: $SpellRarity$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getInkForRarity"(arg0: $SpellRarity$Type): $InkItem
public "getRarity"(): $SpellRarity
get "rarity"(): $SpellRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InkItem$Type = ($InkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InkItem_ = $InkItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$SummonTimer" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonTimer extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonTimer$Type = ($SummonTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonTimer_ = $SummonTimer$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICastDataSerializable, $ICastDataSerializable$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastDataSerializable"
import {$ISerializable, $ISerializable$Type} from "packages/io/redspace/ironsspellbooks/api/network/$ISerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $RecastInstance implements $ISerializable, $INBTSerializable<($CompoundTag)> {

constructor()
constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $CastSource$Type, arg5: $ICastDataSerializable$Type)

public "toString"(): string
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "getCastSource"(): $CastSource
public "getRemainingRecasts"(): integer
public "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
public "getCastData"(): $ICastDataSerializable
public "getTotalRecasts"(): integer
public "getTicksToLive"(): integer
public "getTicksRemaining"(): integer
get "spellId"(): string
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "remainingRecasts"(): integer
get "castData"(): $ICastDataSerializable
get "totalRecasts"(): integer
get "ticksToLive"(): integer
get "ticksRemaining"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastInstance$Type = ($RecastInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecastInstance_ = $RecastInstance$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$UpgradeType" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $UpgradeType {

 "getId"(): $ResourceLocation
 "getAttribute"(): $Attribute
 "getOperation"(): $AttributeModifier$Operation
 "getAmountPerUpgrade"(): float
}

export namespace $UpgradeType {
const UPGRADE_REGISTRY: $Map<($ResourceLocation), ($UpgradeType)>
function registerUpgrade(arg0: $UpgradeType$Type): void
function getUpgrade(arg0: $ResourceLocation$Type): $Optional<($UpgradeType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type = ($UpgradeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_ = $UpgradeType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$ShrivingStoneItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShrivingStoneItem extends $Item {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrivingStoneItem$Type = ($ShrivingStoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShrivingStoneItem_ = $ShrivingStoneItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AngelWingsEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AngelWingsEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AngelWingsEffect$Type = ($AngelWingsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AngelWingsEffect_ = $AngelWingsEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$EchoingStrikesEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EchoingStrikesEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "createEcho"(arg0: $LivingHurtEvent$Type): void
public static "getDamageModifier"(arg0: integer, arg1: $LivingEntity$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoingStrikesEffect$Type = ($EchoingStrikesEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EchoingStrikesEffect_ = $EchoingStrikesEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/alchemist_cauldron/$AlchemistCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AlchemistCauldronBlock extends $BaseEntityBlock {
static readonly "LIT": $BooleanProperty
static readonly "MAX_LEVELS": integer
static readonly "LEVEL": $IntegerProperty
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getLevel"(arg0: $BlockState$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isFireSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "isBoiling"(arg0: $BlockState$Type): boolean
public static "isLit"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistCauldronBlock$Type = ($AlchemistCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemistCauldronBlock_ = $AlchemistCauldronBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/util/$ParticleHelper" {
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleHelper {
static readonly "FIRE": $ParticleOptions
static readonly "BLOOD": $ParticleOptions
static readonly "WISP": $ParticleOptions
static readonly "BLOOD_GROUND": $ParticleOptions
static readonly "SNOWFLAKE": $ParticleOptions
static readonly "ELECTRICITY": $ParticleOptions
static readonly "UNSTABLE_ENDER": $ParticleOptions
static readonly "EMBERS": $ParticleOptions
static readonly "SIPHON": $ParticleOptions
static readonly "ACID": $ParticleOptions
static readonly "ACID_BUBBLE": $ParticleOptions
static readonly "FOG": $ParticleOptions
static readonly "VOID_TENTACLE_FOG": $ParticleOptions
static readonly "ROOT_FOG": $ParticleOptions
static readonly "COMET_FOG": $ParticleOptions
static readonly "FOG_THUNDER_LIGHT": $ParticleOptions
static readonly "FOG_THUNDER_DARK": $ParticleOptions
static readonly "POISON_CLOUD": $ParticleOptions
static readonly "ICY_FOG": $ParticleOptions
static readonly "SUNBEAM": $ParticleOptions
static readonly "FIREFLY": $ParticleOptions
static readonly "PORTAL_FRAME": $ParticleOptions
static readonly "FIERY_SPARKS": $ParticleOptions
static readonly "ELECTRIC_SPARKS": $ParticleOptions
static readonly "SNOW_DUST": $ParticleOptions

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleHelper$Type = ($ParticleHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleHelper_ = $ParticleHelper$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$BloodStaffItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StaffItem, $StaffItem$Type} from "packages/io/redspace/ironsspellbooks/item/weapons/$StaffItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BloodStaffItem extends $StaffItem {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodStaffItem$Type = ($BloodStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodStaffItem_ = $BloodStaffItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$BloodCauldronBlock$CookExecution" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BloodCauldronBlock$CookExecution {

 "execute"(): void

(): void
}

export namespace $BloodCauldronBlock$CookExecution {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodCauldronBlock$CookExecution$Type = ($BloodCauldronBlock$CookExecution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodCauldronBlock$CookExecution_ = $BloodCauldronBlock$CookExecution$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$HitherThitherWand" {
import {$UniqueItem, $UniqueItem$Type} from "packages/io/redspace/ironsspellbooks/item/$UniqueItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HitherThitherWand extends $Item implements $IPresetSpellContainer, $UniqueItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitherThitherWand$Type = ($HitherThitherWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitherThitherWand_ = $HitherThitherWand$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$CastingItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IMultihandWeapon, $IMultihandWeapon$Type} from "packages/io/redspace/ironsspellbooks/item/weapons/$IMultihandWeapon"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CastingItem extends $Item implements $IMultihandWeapon {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastingItem$Type = ($CastingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastingItem_ = $CastingItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$FirewardRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FirewardRing extends $SimpleDescriptiveCurio {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirewardRing$Type = ($FirewardRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirewardRing_ = $FirewardRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CastResult$Type, $CastResult$Type$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastResult$Type"

export class $CastResult {
readonly "type": $CastResult$Type
readonly "message": $Component

constructor(arg0: $CastResult$Type$Type)
constructor(arg0: $CastResult$Type$Type, arg1: $Component$Type)

public "isSuccess"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$Type = ($CastResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastResult_ = $CastResult$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$TarnishedCrownArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $TarnishedCrownArmorItem extends $ExtendedArmorItem implements $IPresetSpellContainer {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TarnishedCrownArmorItem$Type = ($TarnishedCrownArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TarnishedCrownArmorItem_ = $TarnishedCrownArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AbyssalShroudEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbyssalShroudEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "doEffect"(arg0: $LivingEntity$Type, arg1: $DamageSource$Type): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public static "ambientParticles"(arg0: $ClientLevel$Type, arg1: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbyssalShroudEffect$Type = ($AbyssalShroudEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbyssalShroudEffect_ = $AbyssalShroudEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$RecastResult, $RecastResult$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastResult"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DefaultConfig, $DefaultConfig$Type} from "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$ICastDataSerializable, $ICastDataSerializable$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastDataSerializable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$RecastInstance, $RecastInstance$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimationHolder, $AnimationHolder$Type} from "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$SpellDamageSource, $SpellDamageSource$Type} from "packages/io/redspace/ironsspellbooks/damage/$SpellDamageSource"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"
import {$CastResult, $CastResult$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastResult"

export class $AbstractSpell {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Spells
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.SpellsTag

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getDisplayName"(arg0: $Player$Type): $MutableComponent
public "isEnabled"(): boolean
public "getDamageSource"(arg0: $Entity$Type): $SpellDamageSource
public "getDamageSource"(arg0: $Entity$Type, arg1: $Entity$Type): $SpellDamageSource
public "getMinRarity"(): integer
public "getComponentId"(): string
public "getMaxRarity"(): integer
public "getMaxLevel"(): integer
public "getMinLevel"(): integer
public "getCastType"(): $CastType
public "getTargetingColor"(): $Vector3f
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getManaCost"(arg0: integer): integer
public "playSound"(arg0: $Optional$Type<($SoundEvent$Type)>, arg1: $Entity$Type): void
public "getCastFinishAnimation"(): $AnimationHolder
public "getEntityPowerMultiplier"(arg0: $LivingEntity$Type): float
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$Type): integer
public "checkPreCastConditions"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type): boolean
public "getSpellIconResource"(): $ResourceLocation
public "getCastStartAnimation"(): $AnimationHolder
public "attemptInitiateCast"(arg0: $ItemStack$Type, arg1: integer, arg2: $Level$Type, arg3: $Player$Type, arg4: $CastSource$Type, arg5: boolean, arg6: string): boolean
public "onServerCastComplete"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type, arg4: boolean): void
public "getMinLevelForRarity"(arg0: $SpellRarity$Type): integer
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$Type, arg2: $LivingEntity$Type): boolean
public "canBeInterrupted"(arg0: $Player$Type): boolean
public "getDefaultConfig"(): $DefaultConfig
public "getRarity"(arg0: integer): $SpellRarity
public "stopSoundOnCancel"(): boolean
public "getSpellName"(): string
public "getSpellCooldown"(): integer
public "getCastTime"(arg0: integer): integer
public "getSpellResource"(): $ResourceLocation
public "getLevelFor"(arg0: integer, arg1: $LivingEntity$Type): integer
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getSpellPower"(arg0: integer, arg1: $Entity$Type): float
public "getEmptyCastData"(): $ICastDataSerializable
public "castSpell"(arg0: $Level$Type, arg1: integer, arg2: $ServerPlayer$Type, arg3: $CastSource$Type, arg4: boolean): void
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$Type): integer
public "canBeCastedBy"(arg0: integer, arg1: $CastSource$Type, arg2: $MagicData$Type, arg3: $Player$Type): $CastResult
public "onServerPreCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type): void
public "onClientCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $ICastData$Type): void
public "onClientPreCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type, arg4: $MagicData$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$Type, arg1: $RecastInstance$Type, arg2: $RecastResult$Type, arg3: $ICastDataSerializable$Type): void
public "onCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $CastSource$Type, arg4: $MagicData$Type): void
public "onServerCastTick"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type): void
public "canBeCraftedBy"(arg0: $Player$Type): boolean
public "obfuscateStats"(arg0: $Player$Type): boolean
public "isLearned"(arg0: $Player$Type): boolean
public "needsLearning"(): boolean
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$Type): $List<($MutableComponent)>
public "getDeathMessageId"(): string
public "allowLooting"(): boolean
public "allowCrafting"(): boolean
get "enabled"(): boolean
get "minRarity"(): integer
get "componentId"(): string
get "maxRarity"(): integer
get "maxLevel"(): integer
get "minLevel"(): integer
get "castType"(): $CastType
get "targetingColor"(): $Vector3f
get "schoolType"(): $SchoolType
get "spellId"(): string
get "castFinishAnimation"(): $AnimationHolder
get "spellIconResource"(): $ResourceLocation
get "castStartAnimation"(): $AnimationHolder
get "defaultConfig"(): $DefaultConfig
get "spellName"(): string
get "spellCooldown"(): integer
get "spellResource"(): $ResourceLocation
get "castFinishSound"(): $Optional<($SoundEvent)>
get "castStartSound"(): $Optional<($SoundEvent)>
get "emptyCastData"(): $ICastDataSerializable
get "deathMessageId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpell$Type = ($AbstractSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpell_ = $AbstractSpell$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/util/$Utils" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$ClipContext$Fluid, $ClipContext$Fluid$Type} from "packages/net/minecraft/world/level/$ClipContext$Fluid"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"

export class $Utils {
static readonly "random": $RandomSource

constructor()

public static "smoothstep"(arg0: float, arg1: float, arg2: float): float
public static "intPow"(arg0: float, arg1: integer): float
public static "intPow"(arg0: double, arg1: integer): double
public static "releaseUsingHelper"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
public static "getPlayerSpellbookStack"(arg0: $Player$Type): $ItemStack
public static "hasLineOfSight"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Entity$Type, arg3: boolean): boolean
public static "hasLineOfSight"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: boolean): boolean
public static "getTargetOld"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ClipContext$Fluid$Type, arg3: double): $BlockHitResult
public static "spawnInWorld"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public static "getServerPlayer"(arg0: $Level$Type, arg1: $UUID$Type): $ServerPlayer
public static "getServerTick"(): long
public static "getRandomVec3f"(arg0: double): $Vector3f
public static "throwTarget"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: float, arg3: boolean): void
public static "deconstructRGB"(arg0: integer): $Vector3f
public static "saveAllItems"(arg0: $CompoundTag$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: string): $CompoundTag
public static "loadAllItems"(arg0: $CompoundTag$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: string): void
public static "setPlayerSpellbookStack"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "serverSideCancelCast"(arg0: $ServerPlayer$Type): void
public static "serverSideCancelCast"(arg0: $ServerPlayer$Type, arg1: boolean): void
public static "moveToRelativeGroundLevel"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer): $Vec3
public static "moveToRelativeGroundLevel"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer, arg3: integer): $Vec3
public static "preCastTargetHelper"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $MagicData$Type, arg3: $AbstractSpell$Type, arg4: integer, arg5: float, arg6: boolean): boolean
public static "preCastTargetHelper"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $MagicData$Type, arg3: $AbstractSpell$Type, arg4: integer, arg5: float, arg6: boolean, arg7: $Predicate$Type<($LivingEntity$Type)>): boolean
public static "preCastTargetHelper"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $MagicData$Type, arg3: $AbstractSpell$Type, arg4: integer, arg5: float): boolean
public static "validAntiMagicTarget"(arg0: $Entity$Type): boolean
public static "rotationFromDirection"(arg0: $Vec3$Type): $Vec2
public static "getPositionFromEntityLookDirection"(arg0: $Entity$Type, arg1: float): $Vec3
public static "raycastForEntityOfClass"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: boolean, arg5: $Class$Type<(any)>): $HitResult
public static "checkEntityIntersecting"(arg0: $Entity$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: float): $HitResult
public static "doMeleeAttack"(arg0: $Mob$Type, arg1: $Entity$Type, arg2: $DamageSource$Type): boolean
public static "createTremorBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: float): void
public static "isPlayerHoldingSpellBook"(arg0: $Player$Type): boolean
public static "findRelativeGroundLevel"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer): float
public static "serverSideInitiateQuickCast"(arg0: $ServerPlayer$Type, arg1: integer): boolean
public static "sendTargetedNotification"(arg0: $ServerPlayer$Type, arg1: $LivingEntity$Type, arg2: $AbstractSpell$Type): void
public static "getStackTraceAsString"(): string
public static "serverSideInitiateCast"(arg0: $ServerPlayer$Type): boolean
public static "handleShriving"(arg0: $ItemStack$Type): $ItemStack
public static "canImbue"(arg0: $ItemStack$Type): boolean
public static "canBeUpgraded"(arg0: $ItemStack$Type): boolean
public static "getTargetBlock"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ClipContext$Fluid$Type, arg3: double): $BlockHitResult
public static "timeFromTicks"(arg0: float, arg1: integer): string
public static "getAngle"(arg0: $Vec2$Type, arg1: $Vec2$Type): float
public static "getAngle"(arg0: double, arg1: double, arg2: double, arg3: double): float
public static "getRandomScaled"(arg0: double): double
public static "raycastForBlock"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: $ClipContext$Fluid$Type): $BlockHitResult
public static "getRandomVec3"(arg0: double): $Vec3
public static "getWeaponDamage"(arg0: $LivingEntity$Type, arg1: $MobType$Type): float
public static "packRGB"(arg0: $Vector3f$Type): integer
public static "shouldHealEntity"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type): boolean
public static "checkMonsterSpawnRules"(arg0: $ServerLevelAccessor$Type, arg1: $MobSpawnType$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public static "stringTruncation"(arg0: double, arg1: integer): string
public static "raycastForEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: boolean, arg5: float, arg6: $Predicate$Type<(any)>): $HitResult
public static "raycastForEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: boolean): $HitResult
public static "raycastForEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: float, arg3: boolean): $HitResult
public static "raycastForEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: float, arg3: boolean, arg4: float): $HitResult
public static "softCapFormula"(arg0: double): double
get "serverTick"(): long
get "stackTraceAsString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Utils$Type = ($Utils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Utils_ = $Utils$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$ICastData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICastData {

 "reset"(): void

(): void
}

export namespace $ICastData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastData$Type = ($ICastData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICastData_ = $ICastData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$StaffItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CastingItem, $CastingItem$Type} from "packages/io/redspace/ironsspellbooks/item/$CastingItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffItem extends $CastingItem {
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

constructor(arg0: $Item$Properties$Type, arg1: double, arg2: double, arg3: $Map$Type<($Attribute$Type), ($AttributeModifier$Type)>)

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffItem$Type = ($StaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffItem_ = $StaffItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/registries/$PotionRegistry" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$FMLCommonSetupEvent, $FMLCommonSetupEvent$Type} from "packages/net/minecraftforge/fml/event/lifecycle/$FMLCommonSetupEvent"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionRegistry {
static readonly "POTIONS": $DeferredRegister<($Potion)>
static readonly "INSTANT_MANA_ONE": $RegistryObject<($Potion)>
static readonly "INSTANT_MANA_TWO": $RegistryObject<($Potion)>
static readonly "INSTANT_MANA_THREE": $RegistryObject<($Potion)>
static readonly "INSTANT_MANA_FOUR": $RegistryObject<($Potion)>

constructor()

public static "register"(arg0: $IEventBus$Type): void
public static "addRecipes"(arg0: $FMLCommonSetupEvent$Type): void
public static "addContainerMix"(arg0: $Item$Type, arg1: $Item$Type, arg2: $Item$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionRegistry$Type = ($PotionRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionRegistry_ = $PotionRegistry$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecastResult extends $Enum<($RecastResult)> {
static readonly "TIMEOUT": $RecastResult
static readonly "COUNTERSPELL": $RecastResult
static readonly "DEATH": $RecastResult
static readonly "USED_ALL_RECASTS": $RecastResult
static readonly "COMMAND": $RecastResult
static readonly "USER_CANCEL": $RecastResult


public static "values"(): ($RecastResult)[]
public static "valueOf"(arg0: string): $RecastResult
public "isSuccess"(): boolean
public "isFailure"(): boolean
get "success"(): boolean
get "failure"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastResult$Type = (("death") | ("counterspell") | ("used_all_recasts") | ("user_cancel") | ("timeout") | ("command")) | ($RecastResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecastResult_ = $RecastResult$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/util/$UpdateClient" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"

export class $UpdateClient {

constructor()

public static "SendManaUpdate"(arg0: $ServerPlayer$Type, arg1: $MagicData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateClient$Type = ($UpdateClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateClient_ = $UpdateClient$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/player/$SpinAttackType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SpinAttackType extends $Enum<($SpinAttackType)> {
static readonly "FIRE": $SpinAttackType
static readonly "RIPTIDE": $SpinAttackType


public static "values"(): ($SpinAttackType)[]
public static "valueOf"(arg0: string): $SpinAttackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinAttackType$Type = (("fire") | ("riptide")) | ($SpinAttackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpinAttackType_ = $SpinAttackType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicMobEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicMobEffect$Type = ($MagicMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicMobEffect_ = $MagicMobEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/$ISpellbook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpellbook {

}

export namespace $ISpellbook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellbook$Type = ($ISpellbook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellbook_ = $ISpellbook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerCooldowns" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$CooldownInstance, $CooldownInstance$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$CooldownInstance"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerCooldowns {
static readonly "SPELL_ID": string
static readonly "SPELL_COOLDOWN": string
static readonly "COOLDOWN_REMAINING": string

constructor()

public "tick"(arg0: integer): void
public "isOnCooldown"(arg0: $AbstractSpell$Type): boolean
public "syncToPlayer"(arg0: $ServerPlayer$Type): void
public "getSpellCooldowns"(): $Map<(string), ($CooldownInstance)>
public "setTickBuffer"(arg0: integer): void
public "removeCooldown"(arg0: string): boolean
public "decrementCooldown"(arg0: $CooldownInstance$Type, arg1: integer): boolean
public "loadNBTData"(arg0: $ListTag$Type): void
public "saveNBTData"(): $ListTag
public "hasCooldownsActive"(): boolean
public "clearCooldowns"(): void
public "getCooldownPercent"(arg0: $AbstractSpell$Type): float
public "addCooldown"(arg0: $AbstractSpell$Type, arg1: integer): void
public "addCooldown"(arg0: string, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: $AbstractSpell$Type, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: string, arg1: integer): void
get "spellCooldowns"(): $Map<(string), ($CooldownInstance)>
set "tickBuffer"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerCooldowns$Type = ($PlayerCooldowns);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerCooldowns_ = $PlayerCooldowns$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicSwordItem extends $ExtendedSwordItem implements $IPresetSpellContainer {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Tier$Type, arg1: double, arg2: double, arg3: ($SpellDataRegistryHolder$Type)[], arg4: $Map$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg5: $Item$Properties$Type)

public "getSpells"(): $List<($SpellData)>
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
get "spells"(): $List<($SpellData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$Type = ($MagicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicSwordItem_ = $MagicSwordItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/entity/mobs/$AntiMagicSusceptible" {
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"

export interface $AntiMagicSusceptible {

 "onAntiMagic"(arg0: $MagicData$Type): void

(arg0: $MagicData$Type): void
}

export namespace $AntiMagicSusceptible {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AntiMagicSusceptible$Type = ($AntiMagicSusceptible);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AntiMagicSusceptible_ = $AntiMagicSusceptible$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$AffinityRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AffinityRing extends $SimpleDescriptiveCurio {
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

public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffinityRing$Type = ($AffinityRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AffinityRing_ = $AffinityRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/pedestal/$PedestalBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PedestalBlock extends $BaseEntityBlock {
static readonly "SHAPE_COLUMN": $VoxelShape
static readonly "SHAPE_BOTTOM": $VoxelShape
static readonly "SHAPE_TOP": $VoxelShape
static readonly "SHAPE": $VoxelShape
static readonly "BOOKSHELF_OFFSETS": $List<($BlockPos)>
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

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$Type = ($PedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PedestalBlock_ = $PedestalBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$SpellSlotUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellSlotUpgradeItem extends $Item {
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

constructor(arg0: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "maxSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSlotUpgradeItem$Type = ($SpellSlotUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSlotUpgradeItem_ = $SpellSlotUpgradeItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/spells/$NoneSpell" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$DefaultConfig, $DefaultConfig$Type} from "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $NoneSpell extends $AbstractSpell {

constructor()

public "getCastType"(): $CastType
public "getDefaultConfig"(): $DefaultConfig
public "getSpellResource"(): $ResourceLocation
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "onCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $CastSource$Type, arg4: $MagicData$Type): void
get "castType"(): $CastType
get "defaultConfig"(): $DefaultConfig
get "spellResource"(): $ResourceLocation
get "castFinishSound"(): $Optional<($SoundEvent)>
get "castStartSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneSpell$Type = ($NoneSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoneSpell_ = $NoneSpell$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastResult$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CastResult$Type extends $Enum<($CastResult$Type)> {
static readonly "SUCCESS": $CastResult$Type
static readonly "FAILURE": $CastResult$Type


public static "values"(): ($CastResult$Type)[]
public static "valueOf"(arg0: string): $CastResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$Type$Type = (("success") | ("failure")) | ($CastResult$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastResult$Type_ = $CastResult$Type$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PlaguedArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $PlaguedArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaguedArmorItem$Type = ($PlaguedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaguedArmorItem_ = $PlaguedArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$EvasionEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomDescriptionMobEffect, $CustomDescriptionMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EvasionEffect extends $CustomDescriptionMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "doEffect"(arg0: $LivingEntity$Type, arg1: $DamageSource$Type): boolean
public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvasionEffect$Type = ($EvasionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvasionEffect_ = $EvasionEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ArchevokerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ArchevokerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchevokerArmorItem$Type = ($ArchevokerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchevokerArmorItem_ = $ArchevokerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/gui/overlays/$SpellSelection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISerializable, $ISerializable$Type} from "packages/io/redspace/ironsspellbooks/api/network/$ISerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $SpellSelection implements $ISerializable, $INBTSerializable<($CompoundTag)> {
 "equipmentSlot": string
 "index": integer
 "lastEquipmentSlot": string
 "lastIndex": integer

constructor(arg0: string, arg1: integer, arg2: string, arg3: integer)
constructor(arg0: string, arg1: integer)
constructor()

public "toString"(): string
public "isEmpty"(): boolean
public "makeSelection"(arg0: string, arg1: integer): void
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelection$Type = ($SpellSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelection_ = $SpellSelection$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$TestClaymoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TestClaymoreItem extends $ExtendedSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestClaymoreItem$Type = ($TestClaymoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestClaymoreItem_ = $TestClaymoreItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$UniqueItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $UniqueItem {

}

export namespace $UniqueItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueItem$Type = ($UniqueItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueItem_ = $UniqueItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/guiding_bolt/$GuidingBoltEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GuidingBoltEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuidingBoltEffect$Type = ($GuidingBoltEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuidingBoltEffect_ = $GuidingBoltEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/damage/$SpellDamageSource" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellDamageSource extends $DamageSource {


public "get"(): $DamageSource
public static "source"(arg0: $Entity$Type, arg1: $AbstractSpell$Type): $SpellDamageSource
public static "source"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $AbstractSpell$Type): $SpellDamageSource
public "getLocalizedDeathMessage"(arg0: $LivingEntity$Type): $Component
public "getFireTime"(): integer
public "spell"(): $AbstractSpell
public "setLifestealPercent"(arg0: float): $SpellDamageSource
public "getLifestealPercent"(): float
public "getFreezeTicks"(): integer
public "hasPostHitEffects"(): boolean
public "setFireTime"(arg0: integer): $SpellDamageSource
public "setFreezeTicks"(arg0: integer): $SpellDamageSource
get "fireTime"(): integer
set "lifestealPercent"(value: float)
get "lifestealPercent"(): float
get "freezeTicks"(): integer
set "fireTime"(value: integer)
set "freezeTicks"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageSource$Type = ($SpellDamageSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellDamageSource_ = $SpellDamageSource$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$TargetEntityCastData" {
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TargetEntityCastData implements $ICastData {

constructor(arg0: $LivingEntity$Type)

public "getTarget"(arg0: $ServerLevel$Type): $LivingEntity
public "reset"(): void
public "getTargetPosition"(arg0: $ServerLevel$Type): $Vec3
public "getTargetUUID"(): $UUID
get "targetUUID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetEntityCastData$Type = ($TargetEntityCastData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetEntityCastData_ = $TargetEntityCastData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$UpgradeOrbItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$UpgradeType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeOrbItem extends $Item {
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

constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUpgradeType"(): $UpgradeType
get "upgradeType"(): $UpgradeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeOrbItem$Type = ($UpgradeOrbItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeOrbItem_ = $UpgradeOrbItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPresetSpellContainer {

 "initializeSpellContainer"(arg0: $ItemStack$Type): void

(arg0: $ItemStack$Type): void
}

export namespace $IPresetSpellContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPresetSpellContainer$Type = ($IPresetSpellContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPresetSpellContainer_ = $IPresetSpellContainer$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$Scroll" {
import {$IScroll, $IScroll$Type} from "packages/io/redspace/ironsspellbooks/api/item/$IScroll"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Scroll extends $Item implements $IScroll {
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
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "attemptRemoveScrollAfterCast"(arg0: $ServerPlayer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scroll$Type = ($Scroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Scroll_ = $Scroll$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$UniqueSpellBook" {
import {$UniqueItem, $UniqueItem$Type} from "packages/io/redspace/ironsspellbooks/item/$UniqueItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SimpleAttributeSpellBook, $SimpleAttributeSpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/spell_books/$SimpleAttributeSpellBook"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ISpellContainer, $ISpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ISpellContainer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniqueSpellBook extends $SimpleAttributeSpellBook implements $UniqueItem {
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

constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[], arg2: integer)
constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[])
constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[], arg2: integer, arg3: $Supplier$Type<($Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)>)
constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[], arg2: $Supplier$Type<($Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)>)

public "getName"(arg0: $ItemStack$Type): $Component
public "isUnique"(): boolean
public "getSpells"(): $List<($SpellData)>
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "initializeSpellContainerOLD"(arg0: $ItemStack$Type): $ISpellContainer
get "unique"(): boolean
get "spells"(): $List<($SpellData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueSpellBook$Type = ($UniqueSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueSpellBook_ = $UniqueSpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$StaffOfTheNines" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffOfTheNines extends $Item {
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

public "getPosition"(arg0: $Vec3$Type, arg1: float, arg2: float, arg3: float, arg4: $Vec2$Type): $Vec3
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffOfTheNines$Type = ($StaffOfTheNines);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffOfTheNines_ = $StaffOfTheNines$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$BurningDashEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BurningDashEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningDashEffect$Type = ($BurningDashEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BurningDashEffect_ = $BurningDashEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AirborneEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AirborneEffect extends $MobEffect {
static readonly "damage_per_amp": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public static "getDamageFromLevel"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirborneEffect$Type = ($AirborneEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirborneEffect_ = $AirborneEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/events/$SpellPreCastEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellPreCastEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: string, arg2: integer, arg3: $SchoolType$Type, arg4: $CastSource$Type)

public "getListenerList"(): $ListenerList
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "getCastSource"(): $CastSource
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEvent$Type = ($SpellPreCastEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPreCastEvent_ = $SpellPreCastEvent$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$WaywardCompass" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WaywardCompass extends $Item {
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
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "missingWarning"(arg0: $ItemStack$Type): boolean
public static "getCatacombsLocation"(arg0: $Entity$Type, arg1: $CompoundTag$Type): $GlobalPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaywardCompass$Type = ($WaywardCompass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaywardCompass_ = $WaywardCompass$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$FrostwardRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FrostwardRing extends $SimpleDescriptiveCurio {
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

public "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostwardRing$Type = ($FrostwardRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostwardRing_ = $FrostwardRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ElectromancerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorCapeProvider, $ArmorCapeProvider$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ArmorCapeProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ElectromancerArmorItem extends $ImbuableChestplateArmorItem implements $ArmorCapeProvider {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getCapeResourceLocation"(): $ResourceLocation
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
get "capeResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectromancerArmorItem$Type = ($ElectromancerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectromancerArmorItem_ = $ElectromancerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$SimpleElixir" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleElixir extends $DrinkableItem {
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

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($MobEffectInstance$Type)>)
constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($MobEffectInstance$Type)>, arg2: boolean)

public "getMobEffect"(): $MobEffectInstance
public "isFoil"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public static "addPotionTooltip"(arg0: $MobEffectInstance$Type, arg1: $List$Type<($Component$Type)>, arg2: float): void
get "mobEffect"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleElixir$Type = ($SimpleElixir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleElixir_ = $SimpleElixir$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$ISpellContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISpellContainer extends $INBTSerializable<($CompoundTag)> {

 "isEmpty"(): boolean
 "save"(arg0: $ItemStack$Type): void
 "getIndexForSpell"(arg0: $AbstractSpell$Type): integer
 "spellWheel"(): boolean
 "mustEquip"(): boolean
 "getActiveSpells"(): $List<($SpellData)>
 "getAllSpells"(): ($SpellData)[]
 "getSpellAtIndex"(arg0: integer): $SpellData
 "addSpell"(arg0: $AbstractSpell$Type, arg1: integer, arg2: boolean, arg3: $ItemStack$Type): boolean
 "setMaxSpellCount"(arg0: integer): void
 "removeSpell"(arg0: $AbstractSpell$Type, arg1: $ItemStack$Type): boolean
 "removeSpellAtIndex"(arg0: integer, arg1: $ItemStack$Type): boolean
 "addSpellAtIndex"(arg0: $AbstractSpell$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): boolean
 "getActiveSpellCount"(): integer
 "getNextAvailableIndex"(): integer
 "getMaxSpellCount"(): integer
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $ISpellContainer {
function get(arg0: $ItemStack$Type): $ISpellContainer
function create(arg0: integer, arg1: boolean, arg2: boolean): $ISpellContainer
function getOrCreate(arg0: $ItemStack$Type): $ISpellContainer
function isSpellContainer(arg0: $ItemStack$Type): boolean
function createImbuedContainer(arg0: $AbstractSpell$Type, arg1: integer, arg2: $ItemStack$Type): $ISpellContainer
function createScrollContainer(arg0: $AbstractSpell$Type, arg1: integer, arg2: $ItemStack$Type): $ISpellContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellContainer$Type = ($ISpellContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellContainer_ = $ISpellContainer$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/inscription_table/$InscriptionTableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChestType, $ChestType$Type} from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $InscriptionTableBlock extends $HorizontalDirectionalBlock {
static readonly "PART": $EnumProperty<($ChestType)>
static readonly "SHAPE": $VoxelShape
static readonly "SHAPE_TABLETOP": $VoxelShape
static readonly "SHAPE_LEG_1": $VoxelShape
static readonly "SHAPE_LEG_2": $VoxelShape
static readonly "SHAPE_LEG_3": $VoxelShape
static readonly "SHAPE_LEG_4": $VoxelShape
static readonly "SHAPE_LEGS_EAST": $VoxelShape
static readonly "SHAPE_LEGS_WEST": $VoxelShape
static readonly "SHAPE_LEGS_NORTH": $VoxelShape
static readonly "SHAPE_LEGS_SOUTH": $VoxelShape
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriptionTableBlock$Type = ($InscriptionTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriptionTableBlock_ = $InscriptionTableBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$InvisibiltyRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InvisibiltyRing extends $SimpleDescriptiveCurio {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibiltyRing$Type = ($InvisibiltyRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibiltyRing_ = $InvisibiltyRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$GoldCrownArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $GoldCrownArmorItem extends $ExtendedArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldCrownArmorItem$Type = ($GoldCrownArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldCrownArmorItem_ = $GoldCrownArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$BloodCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LayeredCauldronBlock, $LayeredCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$LayeredCauldronBlock"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BloodCauldronBlock$CookExecution, $BloodCauldronBlock$CookExecution$Type} from "packages/io/redspace/ironsspellbooks/block/$BloodCauldronBlock$CookExecution"

export class $BloodCauldronBlock extends $LayeredCauldronBlock {
static readonly "NO_WEATHER": $Predicate<($Biome$Precipitation)>
static readonly "MIN_FILL_LEVEL": integer
static readonly "MAX_FILL_LEVEL": integer
static readonly "LEVEL": $IntegerProperty
static readonly "RAIN": $Predicate<($Biome$Precipitation)>
static readonly "SNOW": $Predicate<($Biome$Precipitation)>
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "getInteractionMap"(): $Map<($Item), ($CauldronInteraction)>
public static "attemptCookEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: $BloodCauldronBlock$CookExecution$Type): void
get "interactionMap"(): $Map<($Item), ($CauldronInteraction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodCauldronBlock$Type = ($BloodCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodCauldronBlock_ = $BloodCauldronBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$BlightEffect" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$LivingHealEvent, $LivingHealEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHealEvent"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlightEffect extends $MagicMobEffect {
static readonly "DAMAGE_PER_LEVEL": float
static readonly "HEALING_PER_LEVEL": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "reduceDamageOutput"(arg0: $LivingDamageEvent$Type): void
public static "reduceHealing"(arg0: $LivingHealEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightEffect$Type = ($BlightEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlightEffect_ = $BlightEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/events/$SpellOnCastEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellOnCastEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: string, arg2: integer, arg3: integer, arg4: $SchoolType$Type, arg5: $CastSource$Type)

public "getListenerList"(): $ListenerList
public "getOriginalManaCost"(): integer
public "getOriginalSpellLevel"(): integer
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "setManaCost"(arg0: integer): void
public "getCastSource"(): $CastSource
public "getManaCost"(): integer
public "setSpellLevel"(arg0: integer): void
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "originalManaCost"(): integer
get "originalSpellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
set "manaCost"(value: integer)
get "castSource"(): $CastSource
get "manaCost"(): integer
set "spellLevel"(value: integer)
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEvent$Type = ($SpellOnCastEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellOnCastEvent_ = $SpellOnCastEvent$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$HeartstopEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HeartstopEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartstopEffect$Type = ($HeartstopEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartstopEffect_ = $HeartstopEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$NetheriteMageArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $NetheriteMageArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteMageArmorItem$Type = ($NetheriteMageArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteMageArmorItem_ = $NetheriteMageArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$CryomancerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $CryomancerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CryomancerArmorItem$Type = ($CryomancerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CryomancerArmorItem_ = $CryomancerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ArmorCapeProvider" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ArmorCapeProvider {

 "getCapeResourceLocation"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $ArmorCapeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorCapeProvider$Type = ($ArmorCapeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorCapeProvider_ = $ArmorCapeProvider$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerRecasts" {
import {$RecastResult, $RecastResult$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastResult"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$RecastInstance, $RecastInstance$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastInstance"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerRecasts {

constructor(arg0: $Map$Type<(string), ($RecastInstance$Type)>)
constructor(arg0: $ServerPlayer$Type)
constructor()

public "toString"(): string
public "removeAll"(arg0: $RecastResult$Type): void
public "tick"(arg0: integer): void
public "getRemainingRecastsForSpell"(arg0: $AbstractSpell$Type): integer
public "getRemainingRecastsForSpell"(arg0: string): integer
public "syncToPlayer"(arg0: $RecastInstance$Type): void
public "syncAllToPlayer"(): void
public "tickRecasts"(): void
public "syncRemoveToPlayer"(arg0: string): void
public "isRecastActive"(arg0: $RecastInstance$Type): boolean
public "getAllRecasts"(): $List<($RecastInstance)>
public "loadNBTData"(arg0: $ListTag$Type): void
public "hasRecastsActive"(): boolean
public "saveNBTData"(): $ListTag
public "decrementRecastCount"(arg0: string): void
public "decrementRecastCount"(arg0: $AbstractSpell$Type): void
public "addRecast"(arg0: $RecastInstance$Type, arg1: $MagicData$Type): boolean
public "getRecastInstance"(arg0: string): $RecastInstance
public "removeRecast"(arg0: $RecastInstance$Type, arg1: $RecastResult$Type): void
public "removeRecast"(arg0: string): void
public "getActiveRecasts"(): $List<($RecastInstance)>
public "hasRecastForSpell"(arg0: string): boolean
public "hasRecastForSpell"(arg0: $AbstractSpell$Type): boolean
public "forceAddRecast"(arg0: $RecastInstance$Type): void
get "allRecasts"(): $List<($RecastInstance)>
get "activeRecasts"(): $List<($RecastInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRecasts$Type = ($PlayerRecasts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerRecasts_ = $PlayerRecasts$Type;
}}
declare module "packages/io/redspace/ironsrpgtweaks/enchantment_module/item/$IdentificationScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IdentificationScroll extends $Item {
static readonly "description": $Component
static readonly "shift": $Component
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

public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdentificationScroll$Type = ($IdentificationScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdentificationScroll_ = $IdentificationScroll$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$SpellData" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"

export class $SpellData implements $Comparable<($SpellData)> {
static readonly "SPELL_ID": string
static readonly "SPELL_LEVEL": string
static readonly "SPELL_LOCKED": string
static readonly "EMPTY": $SpellData

constructor(arg0: $AbstractSpell$Type, arg1: integer)
constructor(arg0: $AbstractSpell$Type, arg1: integer, arg2: boolean)

public "isLocked"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $SpellData$Type): integer
public "getDisplayName"(): $Component
public "getLevel"(): integer
public "getSpell"(): $AbstractSpell
public "canRemove"(): boolean
public "getRarity"(): $SpellRarity
get "locked"(): boolean
get "displayName"(): $Component
get "level"(): integer
get "spell"(): $AbstractSpell
get "rarity"(): $SpellRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellData$Type = ($SpellData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellData_ = $SpellData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$DragonskinItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DragonskinItem extends $Item {
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

public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonskinItem$Type = ($DragonskinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonskinItem_ = $DragonskinItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/network/$ISerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ISerializable {

 "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $ISerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializable$Type = ($ISerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializable_ = $ISerializable$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IronsExtendedArmorMaterial, $IronsExtendedArmorMaterial$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$IronsExtendedArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ImbuableChestplateArmorItem extends $ExtendedArmorItem implements $IPresetSpellContainer {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $IronsExtendedArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuableChestplateArmorItem$Type = ($ImbuableChestplateArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuableChestplateArmorItem_ = $ImbuableChestplateArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$FurledMapItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FurledMapItem extends $Item {
static "FURLED_MAP_NBT": string
static "FURLED_MAP_LOCATION": string
static "FURLED_MAP_DESCRIPTION": string
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

public static "of"(arg0: $ResourceLocation$Type, arg1: $MutableComponent$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurledMapItem$Type = ($FurledMapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurledMapItem_ = $FurledMapItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$IronsExtendedArmorMaterial" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export interface $IronsExtendedArmorMaterial extends $ArmorMaterial {

 "getAdditionalAttributes"(): $Map<($Attribute), ($AttributeModifier)>
 "getEnchantmentValue"(): integer
 "getRepairIngredient"(): $Ingredient
 "getDurabilityForType"(arg0: $ArmorItem$Type$Type): integer
 "getDefenseForType"(arg0: $ArmorItem$Type$Type): integer
 "getEquipSound"(): $SoundEvent
 "getKnockbackResistance"(): float
 "getToughness"(): float
 "getName"(): string
}

export namespace $IronsExtendedArmorMaterial {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronsExtendedArmorMaterial$Type = ($IronsExtendedArmorMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronsExtendedArmorMaterial_ = $IronsExtendedArmorMaterial$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DefaultConfig {
 "minRarity": $SpellRarity
 "schoolResource": $ResourceLocation
 "maxLevel": integer
 "enabled": boolean
 "cooldownInSeconds": double
 "allowCrafting": boolean

constructor(arg0: $Consumer$Type<($DefaultConfig$Type)>)
constructor()

public "build"(): $DefaultConfig
public "setDeprecated"(arg0: boolean): $DefaultConfig
public "setAllowCrafting"(arg0: boolean): $DefaultConfig
public "setMaxLevel"(arg0: integer): $DefaultConfig
public "setSchoolResource"(arg0: $ResourceLocation$Type): $DefaultConfig
public "setCooldownSeconds"(arg0: double): $DefaultConfig
public "setMinRarity"(arg0: $SpellRarity$Type): $DefaultConfig
set "deprecated"(value: boolean)
set "allowCrafting"(value: boolean)
set "maxLevel"(value: integer)
set "schoolResource"(value: $ResourceLocation$Type)
set "cooldownSeconds"(value: double)
set "minRarity"(value: $SpellRarity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultConfig$Type = ($DefaultConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultConfig_ = $DefaultConfig$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrinkableItem extends $Item {
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

constructor(arg0: $Item$Properties$Type, arg1: $BiConsumer$Type<($ItemStack$Type), ($LivingEntity$Type)>, arg2: $Item$Type, arg3: boolean)
constructor(arg0: $Item$Properties$Type, arg1: $BiConsumer$Type<($ItemStack$Type), ($LivingEntity$Type)>)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrinkableItem$Type = ($DrinkableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrinkableItem_ = $DrinkableItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/events/$ChangeManaEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"

export class $ChangeManaEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $MagicData$Type, arg2: float, arg3: float)

public "getListenerList"(): $ListenerList
public "getMagicData"(): $MagicData
public "setNewMana"(arg0: float): void
public "getOldMana"(): float
public "getNewMana"(): float
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "magicData"(): $MagicData
set "newMana"(value: float)
get "oldMana"(): float
get "newMana"(): float
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEvent$Type = ($ChangeManaEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeManaEvent_ = $ChangeManaEvent$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $SchoolType {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Schools
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.SchoolsTag

constructor(arg0: $ResourceLocation$Type, arg1: $TagKey$Type<($Item$Type)>, arg2: $Component$Type, arg3: $LazyOptional$Type<($Attribute$Type)>, arg4: $LazyOptional$Type<($Attribute$Type)>, arg5: $LazyOptional$Type<($SoundEvent$Type)>, arg6: $ResourceKey$Type<($DamageType$Type)>)

public "getId"(): $ResourceLocation
public "getDisplayName"(): $Component
public "getResistanceFor"(arg0: $LivingEntity$Type): double
public "getPowerFor"(arg0: $LivingEntity$Type): double
public "getDamageType"(): $ResourceKey<($DamageType)>
public "getCastSound"(): $SoundEvent
public "getTargetingColor"(): $Vector3f
public "isFocus"(arg0: $ItemStack$Type): boolean
get "id"(): $ResourceLocation
get "displayName"(): $Component
get "damageType"(): $ResourceKey<($DamageType)>
get "castSound"(): $SoundEvent
get "targetingColor"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolType$Type = ($SchoolType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolType_ = $SchoolType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PyromancerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $PyromancerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PyromancerArmorItem$Type = ($PyromancerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PyromancerArmorItem_ = $PyromancerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AscensionEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AscensionEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public static "ambientParticles"(arg0: $ClientLevel$Type, arg1: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AscensionEffect$Type = ($AscensionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AscensionEffect_ = $AscensionEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$ArmorPileBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ArmorPileBlock extends $Block {
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "spawnAfterBreak"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorPileBlock$Type = ($ArmorPileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorPileBlock_ = $ArmorPileBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/registry/$SchoolRegistry" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ModelEvent$RegisterAdditional, $ModelEvent$RegisterAdditional$Type} from "packages/net/minecraftforge/client/event/$ModelEvent$RegisterAdditional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $SchoolRegistry {
static readonly "SCHOOL_REGISTRY_KEY": $ResourceKey<($Registry<($SchoolType)>)>
static readonly "REGISTRY": $Supplier<($IForgeRegistry<($SchoolType)>)>
static readonly "FIRE_RESOURCE": $ResourceLocation
static readonly "ICE_RESOURCE": $ResourceLocation
static readonly "LIGHTNING_RESOURCE": $ResourceLocation
static readonly "HOLY_RESOURCE": $ResourceLocation
static readonly "ENDER_RESOURCE": $ResourceLocation
static readonly "BLOOD_RESOURCE": $ResourceLocation
static readonly "EVOCATION_RESOURCE": $ResourceLocation
static readonly "NATURE_RESOURCE": $ResourceLocation
static readonly "ELDRITCH_RESOURCE": $ResourceLocation
static readonly "FIRE": $RegistryObject<($SchoolType)>
static readonly "ICE": $RegistryObject<($SchoolType)>
static readonly "LIGHTNING": $RegistryObject<($SchoolType)>
static readonly "HOLY": $RegistryObject<($SchoolType)>
static readonly "ENDER": $RegistryObject<($SchoolType)>
static readonly "BLOOD": $RegistryObject<($SchoolType)>
static readonly "EVOCATION": $RegistryObject<($SchoolType)>
static readonly "NATURE": $RegistryObject<($SchoolType)>
static readonly "ELDRITCH": $RegistryObject<($SchoolType)>

constructor()

public static "register"(arg0: $IEventBus$Type): void
public static "clientSetup"(arg0: $ModelEvent$RegisterAdditional$Type): void
public static "getSchoolFromFocus"(arg0: $ItemStack$Type): $SchoolType
public static "getSchool"(arg0: $ResourceLocation$Type): $SchoolType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolRegistry$Type = ($SchoolRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolRegistry_ = $SchoolRegistry$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$KeeperFlambergeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeeperFlambergeItem extends $ExtendedSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeeperFlambergeItem$Type = ($KeeperFlambergeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeeperFlambergeItem_ = $KeeperFlambergeItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$FortifyEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FortifyEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FortifyEffect$Type = ($FortifyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FortifyEffect_ = $FortifyEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$WanderingMagicianArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $WanderingMagicianArmorItem extends $ExtendedArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderingMagicianArmorItem$Type = ($WanderingMagicianArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderingMagicianArmorItem_ = $WanderingMagicianArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastSource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CastSource extends $Enum<($CastSource)> {
static readonly "SPELLBOOK": $CastSource
static readonly "SCROLL": $CastSource
static readonly "SWORD": $CastSource
static readonly "MOB": $CastSource
static readonly "COMMAND": $CastSource
static readonly "NONE": $CastSource


public static "values"(): ($CastSource)[]
public static "valueOf"(arg0: string): $CastSource
public "consumesMana"(): boolean
public "respectsCooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastSource$Type = (("sword") | ("mob") | ("spellbook") | ("scroll") | ("none") | ("command")) | ($CastSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastSource_ = $CastSource$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$NetherwardTinctureItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetherwardTinctureItem extends $DrinkableItem {
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

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrinkingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherwardTinctureItem$Type = ($NetherwardTinctureItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetherwardTinctureItem_ = $NetherwardTinctureItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$FireflyJar" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FireflyJar extends $Block {
static readonly "SHAPE": $VoxelShape
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

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireflyJar$Type = ($FireflyJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireflyJar_ = $FireflyJar$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ShadowwalkerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ShadowwalkerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowwalkerArmorItem$Type = ($ShadowwalkerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadowwalkerArmorItem_ = $ShadowwalkerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioBaseItem extends $Item implements $ICurioItem {
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

public "isEquippedBy"(arg0: $LivingEntity$Type): boolean
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioBaseItem$Type = ($CurioBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioBaseItem_ = $CurioBaseItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/scroll_forge/$ScrollForgeBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScrollForgeBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_TABLETOP": $VoxelShape
static readonly "SHAPE_LEG_1": $VoxelShape
static readonly "SHAPE_LEG_2": $VoxelShape
static readonly "SHAPE": $VoxelShape
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollForgeBlock$Type = ($ScrollForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollForgeBlock_ = $ScrollForgeBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$AmethystRapierItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicSwordItem, $MagicSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmethystRapierItem extends $MagicSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: ($SpellDataRegistryHolder$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmethystRapierItem$Type = ($AmethystRapierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmethystRapierItem_ = $AmethystRapierItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PriestArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $PriestArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriestArmorItem$Type = ($PriestArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PriestArmorItem_ = $PriestArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/magic/$MagicData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerRecasts, $PlayerRecasts$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerRecasts"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PlayerCooldowns, $PlayerCooldowns$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerCooldowns"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$SyncedSpellData, $SyncedSpellData$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $MagicData {
static readonly "MANA": string
static readonly "COOLDOWNS": string
static readonly "RECASTS": string

constructor(arg0: $ServerPlayer$Type)
constructor()
constructor(arg0: boolean)

public "toString"(): string
public "getSyncedData"(): $SyncedSpellData
public "getCastingSpellLevel"(): integer
public "getPlayerCastingItem"(): $ItemStack
public "getAdditionalCastData"(): $ICastData
public "getCastingEquipmentSlot"(): string
public "getCastDurationRemaining"(): integer
public "resetAdditionalCastData"(): void
public "setAdditionalCastData"(arg0: $ICastData$Type): void
public "getCastCompletionPercent"(): float
public "setPlayerCastingItem"(arg0: $ItemStack$Type): void
public "getCastingSpellId"(): string
public "getCastType"(): $CastType
public "initiateCast"(arg0: $AbstractSpell$Type, arg1: integer, arg2: integer, arg3: $CastSource$Type, arg4: string): void
public "getMana"(): float
public "setSyncedData"(arg0: $SyncedSpellData$Type): void
public "addMana"(arg0: float): void
public "setMana"(arg0: float): void
public "setServerPlayer"(arg0: $ServerPlayer$Type): void
public "getCastingSpell"(): $SpellData
public "getCastDuration"(): integer
public "popMarkedPoison"(): boolean
public "resetCastingState"(): void
public "handleCastDuration"(): void
public "getPlayerCooldowns"(): $PlayerCooldowns
public "getPlayerRecasts"(): $PlayerRecasts
public "setPlayerRecasts"(arg0: $PlayerRecasts$Type): void
public "loadNBTData"(arg0: $CompoundTag$Type): void
public "saveNBTData"(arg0: $CompoundTag$Type): void
public static "getPlayerMagicData"(arg0: $LivingEntity$Type): $MagicData
public "markPoisoned"(): void
public "getCastSource"(): $CastSource
public "isCasting"(): boolean
get "syncedData"(): $SyncedSpellData
get "castingSpellLevel"(): integer
get "playerCastingItem"(): $ItemStack
get "additionalCastData"(): $ICastData
get "castingEquipmentSlot"(): string
get "castDurationRemaining"(): integer
set "additionalCastData"(value: $ICastData$Type)
get "castCompletionPercent"(): float
set "playerCastingItem"(value: $ItemStack$Type)
get "castingSpellId"(): string
get "castType"(): $CastType
get "mana"(): float
set "syncedData"(value: $SyncedSpellData$Type)
set "mana"(value: float)
set "serverPlayer"(value: $ServerPlayer$Type)
get "castingSpell"(): $SpellData
get "castDuration"(): integer
get "playerCooldowns"(): $PlayerCooldowns
get "playerRecasts"(): $PlayerRecasts
set "playerRecasts"(value: $PlayerRecasts$Type)
get "castSource"(): $CastSource
get "casting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicData$Type = ($MagicData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicData_ = $MagicData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$LurkerRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LurkerRing extends $SimpleDescriptiveCurio {
static readonly "COOLDOWN_IN_TICKS": integer
static readonly "MULTIPLIER": float
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

public "getDescription"(arg0: $ItemStack$Type): $Component
public "getDescriptionLines"(arg0: $ItemStack$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LurkerRing$Type = ($LurkerRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LurkerRing_ = $LurkerRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/spell_books/$SimpleAttributeSpellBook" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellBook, $SpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/$SpellBook"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleAttributeSpellBook extends $SpellBook {
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

constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg3: $Item$Properties$Type)
constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)
constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Attribute$Type, arg3: double, arg4: double)
constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Attribute$Type, arg3: double)

public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAttributeSpellBook$Type = ($SimpleAttributeSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleAttributeSpellBook_ = $SimpleAttributeSpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CastType extends $Enum<($CastType)> {
static readonly "NONE": $CastType
static readonly "INSTANT": $CastType
static readonly "LONG": $CastType
static readonly "CONTINUOUS": $CastType


public static "values"(): ($CastType)[]
public static "valueOf"(arg0: string): $CastType
public "getValue"(): integer
public "immediatelySuppressRightClicks"(): boolean
/**
 * 
 * @deprecated
 */
public "holdToCast"(): boolean
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastType$Type = (("continuous") | ("none") | ("long") | ("instant")) | ($CastType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastType_ = $CastType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedSwordItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Tier$Type, arg1: double, arg2: double, arg3: $Map$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg4: $Item$Properties$Type)

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSwordItem$Type = ($ExtendedSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSwordItem_ = $ExtendedSwordItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$InstantManaEffect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomDescriptionMobEffect, $CustomDescriptionMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InstantManaEffect extends $CustomDescriptionMobEffect {
static readonly "manaPerAmplifier": integer
static readonly "manaPerAmplifierPercent": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isInstantenous"(): boolean
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyInstantenousEffect"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: double): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantManaEffect$Type = ($InstantManaEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstantManaEffect_ = $InstantManaEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$RendEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RendEffect extends $MobEffect {
static readonly "ARMOR_PER_LEVEL": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendEffect$Type = ($RendEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendEffect_ = $RendEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$EnergizedCoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergizedCoreItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizedCoreItem$Type = ($EnergizedCoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizedCoreItem_ = $EnergizedCoreItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$ICastDataSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$ISerializable, $ISerializable$Type} from "packages/io/redspace/ironsspellbooks/api/network/$ISerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $ICastDataSerializable extends $ICastData, $ISerializable, $INBTSerializable<($CompoundTag)> {

 "reset"(): void
 "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $ICastDataSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastDataSerializable$Type = ($ICastDataSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICastDataSerializable_ = $ICastDataSerializable$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem" {
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$IronsExtendedArmorMaterial, $IronsExtendedArmorMaterial$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$IronsExtendedArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedArmorItem extends $ArmorItem implements $GeoItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $IronsExtendedArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedArmorItem$Type = ($ExtendedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedArmorItem_ = $ExtendedArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/entity/mobs/abstract_spell_casting_mob/$AbstractSpellCastingMob" {
import {$FacetHolder, $FacetHolder$Type} from "packages/com/redpxnda/nucleus/facet/$FacetHolder"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$GeoEntity, $GeoEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoEntity"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PathfinderMob, $PathfinderMob$Type} from "packages/net/minecraft/world/entity/$PathfinderMob"
import {$SyncedSpellData, $SyncedSpellData$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IMagicEntity, $IMagicEntity$Type} from "packages/io/redspace/ironsspellbooks/api/entity/$IMagicEntity"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractSpellCastingMob extends $PathfinderMob implements $GeoEntity, $IMagicEntity {
static readonly "modelResource": $ResourceLocation
static readonly "textureResource": $ResourceLocation
static readonly "animationInstantCast": $ResourceLocation
 "hasUsedSingleAttack": boolean
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


public "rideTick"(): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "getMagicData"(): $MagicData
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "canBeLeashed"(arg0: $Player$Type): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "triggerAnim"(arg0: string, arg1: string): void
public "startDrinkingPotion"(): void
public "notifyDangerousProjectile"(arg0: $Projectile$Type): void
public "getHasUsedSingleAttack"(): boolean
public "setHasUsedSingleAttack"(arg0: boolean): void
public "startAutoSpinAttack"(arg0: integer): void
public "setTeleportLocationBehindTarget"(arg0: integer): boolean
public "setBurningDashDirectionData"(): void
public "shouldBeExtraAnimated"(): boolean
public "bobBodyWhileWalking"(): boolean
public "shouldPointArmsWhileCasting"(): boolean
public "shouldAlwaysAnimateLegs"(): boolean
public "shouldAlwaysAnimateHead"(): boolean
public "isCasting"(): boolean
public "getMyRidingOffset"(): double
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "isDrinkingPotion"(): boolean
public "setSyncedSpellData"(arg0: $SyncedSpellData$Type): void
public "castComplete"(): void
public "isAnimating"(): boolean
public "initiateCastSpell"(arg0: $AbstractSpell$Type, arg1: integer): void
public "shouldSheathSword"(): boolean
public "cancelCast"(): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getTick"(arg0: any): double
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "getItemBySlot"(arg0: $EquipmentSlot$Type): $ItemStack
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "of"(holder: any): $FacetHolder
get "magicData"(): $MagicData
get "hasUsedSingleAttack"(): boolean
set "hasUsedSingleAttack"(value: boolean)
set "teleportLocationBehindTarget"(value: integer)
get "casting"(): boolean
get "myRidingOffset"(): double
get "drinkingPotion"(): boolean
set "syncedSpellData"(value: $SyncedSpellData$Type)
get "animating"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellCastingMob$Type = ($AbstractSpellCastingMob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellCastingMob_ = $AbstractSpellCastingMob$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$SpellBook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CurioBaseItem, $CurioBaseItem$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ISpellbook, $ISpellbook$Type} from "packages/io/redspace/ironsspellbooks/api/item/$ISpellbook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellBook extends $CurioBaseItem implements $ISpellbook, $IPresetSpellContainer {
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

constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Item$Properties$Type)
constructor(arg0: integer, arg1: $SpellRarity$Type)
constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isUnique"(): boolean
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getRarity"(): $SpellRarity
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "getMaxSpellSlots"(): integer
get "unique"(): boolean
get "rarity"(): $SpellRarity
get "maxSpellSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBook$Type = ($SpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellBook_ = $SpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$TrueInvisibilityEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrueInvisibilityEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueInvisibilityEffect$Type = ($TrueInvisibilityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrueInvisibilityEffect_ = $TrueInvisibilityEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$CultistArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $CultistArmorItem extends $ImbuableChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CultistArmorItem$Type = ($CultistArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CultistArmorItem_ = $CultistArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/$IScroll" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScroll {

}

export namespace $IScroll {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScroll$Type = ($IScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScroll_ = $IScroll$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$SpellbreakerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicSwordItem, $MagicSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellbreakerItem extends $MagicSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: ($SpellDataRegistryHolder$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellbreakerItem$Type = ($SpellbreakerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellbreakerItem_ = $SpellbreakerItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CooldownInstance {

constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "decrement"(): void
public "decrementBy"(arg0: integer): void
public "getCooldownRemaining"(): integer
public "getCooldownPercent"(): float
public "getSpellCooldown"(): integer
get "cooldownRemaining"(): integer
get "cooldownPercent"(): float
get "spellCooldown"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownInstance$Type = ($CooldownInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CooldownInstance_ = $CooldownInstance$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$OakskinEffect" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomDescriptionMobEffect, $CustomDescriptionMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OakskinEffect extends $CustomDescriptionMobEffect {
static readonly "REDUCTION_PER_LEVEL": float
static readonly "BASE_REDUCTION": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public static "reduceDamage"(arg0: $LivingDamageEvent$Type): void
public static "getReductionAmount"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OakskinEffect$Type = ($OakskinEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OakskinEffect_ = $OakskinEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$FireAleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FireAleItem extends $DrinkableItem {
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

public "getMaxStackSize"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireAleItem$Type = ($FireAleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireAleItem_ = $FireAleItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$NecronomiconSpellBook" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UniqueSpellBook, $UniqueSpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/$UniqueSpellBook"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NecronomiconSpellBook extends $UniqueSpellBook {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NecronomiconSpellBook$Type = ($NecronomiconSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NecronomiconSpellBook_ = $NecronomiconSpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/alchemist_cauldron/$AlchemistCauldronRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $AlchemistCauldronRecipe {

constructor(arg0: $Potion$Type, arg1: $Item$Type, arg2: $Item$Type)
constructor(arg0: $Item$Type, arg1: $Item$Type, arg2: $Item$Type)
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type)

public "getResult"(): $ItemStack
public "getInput"(): $ItemStack
public "getIngredient"(): $ItemStack
public "setResultLimit"(arg0: integer): $AlchemistCauldronRecipe
public "setBaseRequirement"(arg0: integer): $AlchemistCauldronRecipe
public "createOutput"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
get "result"(): $ItemStack
get "input"(): $ItemStack
get "ingredient"(): $ItemStack
set "resultLimit"(value: integer)
set "baseRequirement"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistCauldronRecipe$Type = ($AlchemistCauldronRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemistCauldronRecipe_ = $AlchemistCauldronRecipe$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$PoisonwardRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PoisonwardRing extends $SimpleDescriptiveCurio {
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

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonwardRing$Type = ($PoisonwardRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoisonwardRing_ = $PoisonwardRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PumpkinArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $PumpkinArmorItem extends $ExtendedArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpkinArmorItem$Type = ($PumpkinArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpkinArmorItem_ = $PumpkinArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$MagehunterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagehunterItem extends $ExtendedSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagehunterItem$Type = ($MagehunterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagehunterItem_ = $MagehunterItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager$SpellSelectionEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SpellSelectionManager, $SpellSelectionManager$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"

export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $SpellSelectionManager$Type)

public "getListenerList"(): $ListenerList
public "getManager"(): $SpellSelectionManager
public "addSelectionOption"(arg0: $SpellData$Type, arg1: string, arg2: integer): void
public "addSelectionOption"(arg0: $SpellData$Type, arg1: string, arg2: integer, arg3: integer): void
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "manager"(): $SpellSelectionManager
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$SpellSelectionEvent$Type = ($SpellSelectionManager$SpellSelectionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelectionManager$SpellSelectionEvent_ = $SpellSelectionManager$SpellSelectionEvent$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/arcane_anvil/$ArcaneAnvilBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ArcaneAnvilBlock extends $FallingBlock {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneAnvilBlock$Type = ($ArcaneAnvilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcaneAnvilBlock_ = $ArcaneAnvilBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$GluttonyEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingEntityUseItemEvent$Finish, $LivingEntityUseItemEvent$Finish$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Finish"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GluttonyEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "finishEating"(arg0: $LivingEntityUseItemEvent$Finish$Type): void
public static "ratioForAmplifier"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonyEffect$Type = ($GluttonyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GluttonyEffect_ = $GluttonyEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/registry/$SpellRegistry" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$NoneSpell, $NoneSpell$Type} from "packages/io/redspace/ironsspellbooks/spells/$NoneSpell"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $SpellRegistry {
static readonly "SPELL_REGISTRY_KEY": $ResourceKey<($Registry<($AbstractSpell)>)>
static readonly "REGISTRY": $Supplier<($IForgeRegistry<($AbstractSpell)>)>
static readonly "ACUPUNCTURE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLOOD_NEEDLES_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLOOD_SLASH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLOOD_STEP_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "DEVOUR_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "HEARTSTOP_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "RAISE_DEAD_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "RAY_OF_SIPHONING_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "WITHER_SKULL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SACRIFICE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "COUNTERSPELL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "DRAGON_BREATH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "EVASION_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "MAGIC_ARROW_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "MAGIC_MISSILE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "STARFALL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "TELEPORT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SUMMON_ENDER_CHEST_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "RECALL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "PORTAL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ECHOING_STRIKES_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLACK_HOLE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "CHAIN_CREEPER_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FANG_STRIKE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FANG_WARD_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FIRECRACKER_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "GUST_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "INVISIBILITY_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "LOB_CREEPER_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SHIELD_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SPECTRAL_HAMMER_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SUMMON_HORSE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SUMMON_VEX_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SLOW_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ARROW_VOLLEY_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "WOLOLO_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLAZE_STORM_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BURNING_DASH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FIREBALL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FIREBOLT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FIRE_BREATH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "MAGMA_BOMB_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "WALL_OF_FIRE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "HEAT_SURGE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FLAMING_STRIKE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SCORCH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FLAMING_BARRAGE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ANGEL_WINGS_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLESSING_OF_LIFE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "CLOUD_OF_REGENERATION_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FORTIFY_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "GREATER_HEAL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "GUIDING_BOLT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "HEALING_CIRCLE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "HEAL_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "WISP_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "DIVINE_SMITE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "HASTE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "CONE_OF_COLD_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FROST_STEP_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ICE_BLOCK_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ICICLE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SUMMON_POLAR_BEAR_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "RAY_OF_FROST_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FROSTWAVE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ASCENSION_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "CHAIN_LIGHTNING_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "CHARGE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ELECTROCUTE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "LIGHTNING_BOLT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "LIGHTNING_LANCE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SHOCKWAVE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "THUNDERSTORM_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BALL_LIGHTNING_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ACID_ORB_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "BLIGHT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "POISON_ARROW_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "POISON_BREATH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "POISON_SPLASH_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ROOT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SPIDER_ASPECT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "FIREFLY_SWARM_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "OAKSKIN_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "EARTHQUAKE_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "STOMP_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "GLUTTONY_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ABYSSAL_SHROUD_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SCULK_TENTACLES_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "SONIC_BOOM_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "PLANAR_SIGHT_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "TELEKINESIS_SPELL": $RegistryObject<($AbstractSpell)>
static readonly "ELDRITCH_BLAST_SPELL": $RegistryObject<($AbstractSpell)>

constructor()

public static "register"(arg0: $IEventBus$Type): void
public static "onConfigReload"(): void
public static "none"(): $NoneSpell
public static "getSpell"(arg0: $ResourceLocation$Type): $AbstractSpell
public static "getSpell"(arg0: string): $AbstractSpell
public static "getSpellsForSchool"(arg0: $SchoolType$Type): $List<($AbstractSpell)>
public static "getEnabledSpells"(): $List<($AbstractSpell)>
get "enabledSpells"(): $List<($AbstractSpell)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellRegistry$Type = ($SpellRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellRegistry_ = $SpellRegistry$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager" {
import {$SpellSelectionManager$SelectionOption, $SpellSelectionManager$SelectionOption$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager$SelectionOption"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellSelection, $SpellSelection$Type} from "packages/io/redspace/ironsspellbooks/gui/overlays/$SpellSelection"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"

export class $SpellSelectionManager {
static readonly "MAINHAND": string
static readonly "OFFHAND": string

constructor(arg0: $Player$Type)

public "getSpellsForSlot"(arg0: string): $List<($SpellSelectionManager$SelectionOption)>
public "getSelection"(): $SpellSelectionManager$SelectionOption
public "getSpellCount"(): integer
public "getSpellSlot"(arg0: integer): $SpellSelectionManager$SelectionOption
public "getAllSpells"(): $List<($SpellSelectionManager$SelectionOption)>
public "makeSelection"(arg0: integer): void
public "getSpellForSlot"(arg0: string, arg1: integer): $SpellData
public "getSelectionIndex"(): integer
public "getSpellData"(arg0: integer): $SpellData
public "getSelectedSpellData"(): $SpellData
public "getCurrentSelection"(): $SpellSelection
public "getGlobalSelectionIndex"(): integer
get "selection"(): $SpellSelectionManager$SelectionOption
get "spellCount"(): integer
get "allSpells"(): $List<($SpellSelectionManager$SelectionOption)>
get "selectionIndex"(): integer
get "selectedSpellData"(): $SpellData
get "currentSelection"(): $SpellSelection
get "globalSelectionIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$Type = ($SpellSelectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelectionManager_ = $SpellSelectionManager$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$ArcaneSalvageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArcaneSalvageItem extends $Item {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneSalvageItem$Type = ($ArcaneSalvageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcaneSalvageItem_ = $ArcaneSalvageItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$ThunderstormEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ThunderstormEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public static "getDamageFromAmplifier"(arg0: integer, arg1: $LivingEntity$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderstormEffect$Type = ($ThunderstormEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThunderstormEffect_ = $ThunderstormEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$AutoloaderCrossbow" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$CrossbowItem, $CrossbowItem$Type} from "packages/net/minecraft/world/item/$CrossbowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AutoloaderCrossbow extends $CrossbowItem {
static readonly "LOADING": string
static readonly "LOADING_TIMESTAMP": string
static readonly "DEFAULT_RANGE": integer
 "startSoundPlayed": boolean
 "midLoadSoundPlayed": boolean
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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

public static "isLoading"(arg0: $ItemStack$Type): boolean
public static "getChargeDuration"(arg0: $ItemStack$Type): integer
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "startLoading"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "setLoadingTicks"(arg0: $ItemStack$Type, arg1: integer): void
public static "setLoading"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getLoadingTicks"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoloaderCrossbow$Type = ($AutoloaderCrossbow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoloaderCrossbow_ = $AutoloaderCrossbow$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CurioBaseItem, $CurioBaseItem$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleDescriptiveCurio extends $CurioBaseItem {
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

constructor(arg0: $Item$Properties$Type, arg1: string)
constructor(arg0: $Item$Properties$Type)

public "getDescription"(arg0: $ItemStack$Type): $Component
public "getDescriptionLines"(arg0: $ItemStack$Type): $List<($Component)>
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDescriptiveCurio$Type = ($SimpleDescriptiveCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDescriptiveCurio_ = $SimpleDescriptiveCurio$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$IMultihandWeapon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMultihandWeapon {

}

export namespace $IMultihandWeapon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultihandWeapon$Type = ($IMultihandWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultihandWeapon_ = $IMultihandWeapon$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$EldritchManuscript" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EldritchManuscript extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EldritchManuscript$Type = ($EldritchManuscript);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EldritchManuscript_ = $EldritchManuscript$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $SpellRarity extends $Enum<($SpellRarity)> {
static readonly "COMMON": $SpellRarity
static readonly "UNCOMMON": $SpellRarity
static readonly "RARE": $SpellRarity
static readonly "EPIC": $SpellRarity
static readonly "LEGENDARY": $SpellRarity


public static "values"(): ($SpellRarity)[]
public static "valueOf"(arg0: string): $SpellRarity
public "getValue"(): integer
public "getDisplayName"(): $MutableComponent
public "getChatFormatting"(): $ChatFormatting
public static "rarityTest"(): void
public "compareRarity"(arg0: $SpellRarity$Type): integer
public static "getRarityConfig"(): $List<(double)>
public static "getRawRarityConfig"(): $List<(double)>
get "value"(): integer
get "displayName"(): $MutableComponent
get "chatFormatting"(): $ChatFormatting
get "rarityConfig"(): $List<(double)>
get "rawRarityConfig"(): $List<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellRarity$Type = (("uncommon") | ("common") | ("legendary") | ("rare") | ("epic")) | ($SpellRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellRarity_ = $SpellRarity$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationHolder {
readonly "isPass": boolean
readonly "animatesLegs": boolean

constructor(arg0: string, arg1: boolean)
constructor(arg0: string, arg1: boolean, arg2: boolean)

public static "pass"(): $AnimationHolder
public static "none"(): $AnimationHolder
public "getForMob"(): $Optional<($RawAnimation)>
public "getForPlayer"(): $Optional<($ResourceLocation)>
get "forMob"(): $Optional<($RawAnimation)>
get "forPlayer"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationHolder$Type = ($AnimationHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationHolder_ = $AnimationHolder$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/entity/$IMagicEntity" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$SyncedSpellData, $SyncedSpellData$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMagicEntity {

 "m_6844_"(arg0: $EquipmentSlot$Type): $ItemStack
 "getMagicData"(): $MagicData
 "startDrinkingPotion"(): void
 "notifyDangerousProjectile"(arg0: $Projectile$Type): void
 "getHasUsedSingleAttack"(): boolean
 "setHasUsedSingleAttack"(arg0: boolean): void
 "setTeleportLocationBehindTarget"(arg0: integer): boolean
 "setBurningDashDirectionData"(): void
 "isCasting"(): boolean
 "isDrinkingPotion"(): boolean
 "setSyncedSpellData"(arg0: $SyncedSpellData$Type): void
 "castComplete"(): void
 "initiateCastSpell"(arg0: $AbstractSpell$Type, arg1: integer): void
 "cancelCast"(): void
}

export namespace $IMagicEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagicEntity$Type = ($IMagicEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagicEntity_ = $IMagicEntity$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager$SelectionOption" {
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellSelectionManager$SelectionOption {
 "spellData": $SpellData
 "slot": string
 "slotIndex": integer
 "globalIndex": integer

constructor(arg0: $SpellData$Type, arg1: string, arg2: integer, arg3: integer)

public "getCastSource"(): $CastSource
get "castSource"(): $CastSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$SelectionOption$Type = ($SpellSelectionManager$SelectionOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelectionManager$SelectionOption_ = $SpellSelectionManager$SelectionOption$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$SpinAttackType, $SpinAttackType$Type} from "packages/io/redspace/ironsspellbooks/player/$SpinAttackType"
import {$SpellSelection, $SpellSelection$Type} from "packages/io/redspace/ironsspellbooks/gui/overlays/$SpellSelection"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SyncedSpellData {
static readonly "ANGEL_WINGS": long
static readonly "EVASION": long
static readonly "HEARTSTOP": long
static readonly "ABYSSAL_SHROUD": long
static readonly "ASCENSION": long
static readonly "TRUE_INVIS": long
static readonly "CHARGED": long
static readonly "PLANAR_SIGHT": long
static readonly "HEAL_TARGET": long
static readonly "SYNCED_SPELL_DATA": $EntityDataSerializer<($SyncedSpellData)>

constructor(arg0: integer)
constructor(arg0: $LivingEntity$Type)

public "toString"(): string
public "setSpinAttackType"(arg0: $SpinAttackType$Type): void
public "getSpellSelection"(): $SpellSelection
public "doSync"(): void
public "setSpellSelection"(arg0: $SpellSelection$Type): void
public "syncToPlayer"(arg0: $ServerPlayer$Type): void
public "addHeartstopDamage"(arg0: float): void
public "getSpinAttackType"(): $SpinAttackType
public "getCastingSpellLevel"(): integer
public "getCastingEquipmentSlot"(): string
public "getServerPlayerId"(): integer
public "hasDodgeEffect"(): boolean
public "forgetAllSpells"(): void
public "hasLocalEffect"(arg0: long): boolean
public "addLocalEffect"(arg0: long): void
public "removeLocalEffect"(arg0: long): void
public "getCastingSpellId"(): string
public "setIsCasting"(arg0: boolean, arg1: string, arg2: integer, arg3: string): void
public "subtractEvasionHit"(): void
public "addEffects"(arg0: long): void
public "removeEffects"(arg0: long): void
public "loadNBTData"(arg0: $CompoundTag$Type): void
public "saveNBTData"(arg0: $CompoundTag$Type): void
public "hasEffect"(arg0: long): boolean
public "isCasting"(): boolean
public "getPersistentData"(): $SyncedSpellData
public "getEvasionHitsRemaining"(): integer
public "getHeartstopAccumulatedDamage"(): float
public "setHeartstopAccumulatedDamage"(arg0: float): void
public "setEvasionHitsRemaining"(arg0: integer): void
public "isSpellLearned"(arg0: $AbstractSpell$Type): boolean
public "learnSpell"(arg0: $AbstractSpell$Type): void
set "spinAttackType"(value: $SpinAttackType$Type)
get "spellSelection"(): $SpellSelection
set "spellSelection"(value: $SpellSelection$Type)
get "spinAttackType"(): $SpinAttackType
get "castingSpellLevel"(): integer
get "castingEquipmentSlot"(): string
get "serverPlayerId"(): integer
get "castingSpellId"(): string
get "casting"(): boolean
get "persistentData"(): $SyncedSpellData
get "evasionHitsRemaining"(): integer
get "heartstopAccumulatedDamage"(): float
set "heartstopAccumulatedDamage"(value: float)
set "evasionHitsRemaining"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedSpellData$Type = ($SyncedSpellData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedSpellData_ = $SyncedSpellData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/attribute/$IMagicAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMagicAttribute {

}

export namespace $IMagicAttribute {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagicAttribute$Type = ($IMagicAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagicAttribute_ = $IMagicAttribute$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$PlanarSightEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlanarSightEffect extends $MagicMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanarSightEffect$Type = ($PlanarSightEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanarSightEffect_ = $PlanarSightEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$ChargeEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargeEffect extends $MagicMobEffect {
static readonly "ATTACK_DAMAGE_PER_LEVEL": float
static readonly "SPEED_PER_LEVEL": float
static readonly "SPELL_POWER_PER_LEVEL": float
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeEffect$Type = ($ChargeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeEffect_ = $ChargeEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $SpellDataRegistryHolder {

constructor(arg0: $RegistryObject$Type<($AbstractSpell$Type)>, arg1: integer)

public static "of"(...arg0: ($SpellDataRegistryHolder$Type)[]): ($SpellDataRegistryHolder)[]
public "getSpellData"(): $SpellData
get "spellData"(): $SpellData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDataRegistryHolder$Type = ($SpellDataRegistryHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellDataRegistryHolder_ = $SpellDataRegistryHolder$Type;
}}
