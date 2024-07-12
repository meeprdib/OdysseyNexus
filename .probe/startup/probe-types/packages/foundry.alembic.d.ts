declare module "packages/foundry/alembic/potion/$AlembicPotionRecipe" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $AlembicPotionRecipe extends $Record {
static readonly "EMPTY": $AlembicPotionRecipe
static readonly "CODEC": $Codec<($AlembicPotionRecipe)>

constructor(reagent: $Ingredient$Type, base: $Ingredient$Type)

public "reagent"(): $Ingredient
public "base"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlembicPotionRecipe$Type = ($AlembicPotionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlembicPotionRecipe_ = $AlembicPotionRecipe$Type;
}}
declare module "packages/foundry/alembic/attribute/$AlembicAttribute" {
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$RangedAttribute, $RangedAttribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IFormattableAttribute, $IFormattableAttribute$Type} from "packages/dev/shadowsoffire/attributeslib/api/$IFormattableAttribute"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $AlembicAttribute extends $RangedAttribute implements $IFormattableAttribute {
 "minValue": double
 "maxValue": double
static readonly "MAX_NAME_LENGTH": integer
 "defaultValue": double
 "syncable": boolean
 "descriptionId": string

constructor(arg0: string, arg1: double, arg2: double, arg3: double)

public static "clearCache"(): void
public "setMaxValue"(arg0: double): void
public "setMinValue"(arg0: double): void
public "getBaseUUID"(): $UUID
public "setDescriptionId"(arg0: string): void
public "setBaseValue"(arg0: double): void
public static "toValueComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Operation$Type, arg2: double, arg3: $TooltipFlag$Type): $MutableComponent
public static "toBaseComponent"(arg0: $Attribute$Type, arg1: double, arg2: double, arg3: boolean, arg4: $TooltipFlag$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$Type): boolean
public static "toComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Type, arg2: $TooltipFlag$Type): $MutableComponent
set "maxValue"(value: double)
set "minValue"(value: double)
get "baseUUID"(): $UUID
set "descriptionId"(value: string)
set "baseValue"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlembicAttribute$Type = ($AlembicAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlembicAttribute_ = $AlembicAttribute$Type;
}}
declare module "packages/foundry/alembic/util/$TagOrElements" {
import {$TagOrElements$Lazy, $TagOrElements$Lazy$Type} from "packages/foundry/alembic/util/$TagOrElements$Lazy"
import {$ExtraCodecs$TagOrElementLocation, $ExtraCodecs$TagOrElementLocation$Type} from "packages/net/minecraft/util/$ExtraCodecs$TagOrElementLocation"
import {$TagOrElements$BuiltInLazy, $TagOrElements$BuiltInLazy$Type} from "packages/foundry/alembic/util/$TagOrElements$BuiltInLazy"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TagOrElements$Immediate, $TagOrElements$Immediate$Type} from "packages/foundry/alembic/util/$TagOrElements$Immediate"

export class $TagOrElements<T> {


public static "codec"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $ICondition$IContext$Type): $Codec<($TagOrElements$Immediate<(T)>)>
public static "lazyCodec"<T>(arg0: $ResourceKey$Type<(any)>): $Codec<($TagOrElements$Lazy<(T)>)>
public "getTagOrElementLocation"(): $ExtraCodecs$TagOrElementLocation
public static "builtInLazyCodec"<T>(arg0: $Registry$Type<(T)>): $Codec<($TagOrElements$BuiltInLazy<(T)>)>
public "toString"(): string
get "tagOrElementLocation"(): $ExtraCodecs$TagOrElementLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagOrElements$Type<T> = ($TagOrElements<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagOrElements_<T> = $TagOrElements$Type<(T)>;
}}
declare module "packages/foundry/alembic/mobeffect/$AlembicMobEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AlembicPotionDataHolder, $AlembicPotionDataHolder$Type} from "packages/foundry/alembic/potion/$AlembicPotionDataHolder"
import {$ExtendedMobEffect, $ExtendedMobEffect$Type} from "packages/net/tslat/effectslib/api/$ExtendedMobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlembicMobEffect extends $ExtendedMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $Attribute$Type, arg1: $AlembicPotionDataHolder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlembicMobEffect$Type = ($AlembicMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlembicMobEffect_ = $AlembicMobEffect$Type;
}}
declare module "packages/foundry/alembic/mobeffect/mobeffects/$ImmunityMobEffect" {
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$TagOrElements$Lazy, $TagOrElements$Lazy$Type} from "packages/foundry/alembic/util/$TagOrElements$Lazy"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ExtendedMobEffect, $ExtendedMobEffect$Type} from "packages/net/tslat/effectslib/api/$ExtendedMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImmunityMobEffect extends $ExtendedMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $Set$Type<($TagOrElements$Lazy$Type<($DamageType$Type)>)>)

public "beforeIncomingAttack"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: $DamageSource$Type, arg3: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmunityMobEffect$Type = ($ImmunityMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmunityMobEffect_ = $ImmunityMobEffect$Type;
}}
declare module "packages/foundry/alembic/potion/$AlembicPotionDataHolder" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$TagOrElements$Lazy, $TagOrElements$Lazy$Type} from "packages/foundry/alembic/util/$TagOrElements$Lazy"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$AlembicPotionRecipe, $AlembicPotionRecipe$Type} from "packages/foundry/alembic/potion/$AlembicPotionRecipe"

export class $AlembicPotionDataHolder {
static readonly "EMPTY": $AlembicPotionDataHolder
static readonly "CODEC": $Codec<($AlembicPotionDataHolder)>

constructor(arg0: float, arg1: $AttributeModifier$Operation$Type, arg2: boolean, arg3: $Set$Type<($TagOrElements$Lazy$Type<($DamageType$Type)>)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $JsonElement$Type)
constructor()

public "getRecipe"(): $AlembicPotionRecipe
public "getOperation"(): $AttributeModifier$Operation
public "getAmplifierPerLevel"(): integer
public "getMaxStrengthLevel"(): integer
public "isVanillaOverride"(): boolean
public "getBaseDuration"(): integer
public "getUUID"(): $UUID
public "getMaxAmplifier"(): integer
public "getImmunities"(): $Set<($TagOrElements$Lazy<($DamageType)>)>
public "getColor"(): integer
public "getValue"(): float
get "recipe"(): $AlembicPotionRecipe
get "operation"(): $AttributeModifier$Operation
get "amplifierPerLevel"(): integer
get "maxStrengthLevel"(): integer
get "vanillaOverride"(): boolean
get "baseDuration"(): integer
get "uUID"(): $UUID
get "maxAmplifier"(): integer
get "immunities"(): $Set<($TagOrElements$Lazy<($DamageType)>)>
get "color"(): integer
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlembicPotionDataHolder$Type = ($AlembicPotionDataHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlembicPotionDataHolder_ = $AlembicPotionDataHolder$Type;
}}
declare module "packages/foundry/alembic/mixin/$MobEffectInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobEffectInstanceAccessor {

 "setDuration"(arg0: integer): void
 "getDuration"(): integer
}

export namespace $MobEffectInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceAccessor$Type = ($MobEffectInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectInstanceAccessor_ = $MobEffectInstanceAccessor$Type;
}}
declare module "packages/foundry/alembic/util/$TagOrElements$Immediate" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TagOrElements, $TagOrElements$Type} from "packages/foundry/alembic/util/$TagOrElements"

export class $TagOrElements$Immediate<T> extends $TagOrElements<(T)> {


public "getElements"(): $Set<($Holder<(T)>)>
get "elements"(): $Set<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagOrElements$Immediate$Type<T> = ($TagOrElements$Immediate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagOrElements$Immediate_<T> = $TagOrElements$Immediate$Type<(T)>;
}}
declare module "packages/foundry/alembic/mobeffect/mobeffects/$FrostbiteMobEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ExtendedMobEffect, $ExtendedMobEffect$Type} from "packages/net/tslat/effectslib/api/$ExtendedMobEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FrostbiteMobEffect extends $ExtendedMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor()

public "tick"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: integer): void
public "onApplication"(arg0: $MobEffectInstance$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "doClientSideEffectTick"(arg0: $MobEffectInstance$Type, arg1: $LivingEntity$Type): boolean
public "shouldTickEffect"(arg0: $MobEffectInstance$Type, arg1: $LivingEntity$Type, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostbiteMobEffect$Type = ($FrostbiteMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostbiteMobEffect_ = $FrostbiteMobEffect$Type;
}}
declare module "packages/foundry/alembic/mobeffect/mobeffects/$FireMobEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ExtendedMobEffect, $ExtendedMobEffect$Type} from "packages/net/tslat/effectslib/api/$ExtendedMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FireMobEffect extends $ExtendedMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: string)

public "tick"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: integer): void
public "onApplication"(arg0: $MobEffectInstance$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "shouldTickEffect"(arg0: $MobEffectInstance$Type, arg1: $LivingEntity$Type, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireMobEffect$Type = ($FireMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireMobEffect_ = $FireMobEffect$Type;
}}
declare module "packages/foundry/alembic/mixin/$MobEffectAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobEffectAccessor {

 "setColor"(arg0: integer): void

(arg0: integer): void
}

export namespace $MobEffectAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectAccessor$Type = ($MobEffectAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectAccessor_ = $MobEffectAccessor$Type;
}}
declare module "packages/foundry/alembic/util/$TagOrElements$BuiltInLazy" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TagOrElements, $TagOrElements$Type} from "packages/foundry/alembic/util/$TagOrElements"

export class $TagOrElements$BuiltInLazy<T> extends $TagOrElements<(T)> {


public "getElements"(): $Set<($Holder<(T)>)>
get "elements"(): $Set<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagOrElements$BuiltInLazy$Type<T> = ($TagOrElements$BuiltInLazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagOrElements$BuiltInLazy_<T> = $TagOrElements$BuiltInLazy$Type<(T)>;
}}
declare module "packages/foundry/alembic/util/$TagOrElements$Lazy" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TagOrElements, $TagOrElements$Type} from "packages/foundry/alembic/util/$TagOrElements"

export class $TagOrElements$Lazy<T> extends $TagOrElements<(T)> {


public "getElements"(arg0: $RegistryAccess$Type): $Set<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagOrElements$Lazy$Type<T> = ($TagOrElements$Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagOrElements$Lazy_<T> = $TagOrElements$Lazy$Type<(T)>;
}}
