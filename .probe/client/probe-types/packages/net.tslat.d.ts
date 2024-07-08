declare module "packages/net/tslat/effectslib/api/$EffectOverlayRenderer" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $EffectOverlayRenderer {

 "render"(arg0: $PoseStack$Type, arg1: float, arg2: $MobEffectInstance$Type): void

(arg0: $PoseStack$Type, arg1: float, arg2: $MobEffectInstance$Type): void
}

export namespace $EffectOverlayRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectOverlayRenderer$Type = ($EffectOverlayRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectOverlayRenderer_ = $EffectOverlayRenderer$Type;
}}
declare module "packages/net/tslat/effectslib/api/$ExtendedMobEffect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$EffectOverlayRenderer, $EffectOverlayRenderer$Type} from "packages/net/tslat/effectslib/api/$EffectOverlayRenderer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExtendedMobEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getDisplayName"(arg0: $MobEffectInstance$Type): $Component
public "shouldCureEffect"(arg0: $MobEffectInstance$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): boolean
public "onApplication"(arg0: $MobEffectInstance$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "onRemoval"(arg0: $MobEffectInstance$Type, arg1: $LivingEntity$Type): void
public "canApply"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): boolean
public "onReapplication"(arg0: $MobEffectInstance$Type, arg1: $MobEffectInstance$Type, arg2: $LivingEntity$Type): $MobEffectInstance
public "canApplyOther"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): boolean
public "tick"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: integer): void
public "shouldTickEffect"(arg0: $MobEffectInstance$Type, arg1: $LivingEntity$Type, arg2: integer, arg3: integer): boolean
public "getAttributeModifierValue"(arg0: $LivingEntity$Type, arg1: $Attribute$Type, arg2: double, arg3: integer): double
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "applyInstantenousEffect"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: double): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "getAttributeModifierValue"(arg0: integer, arg1: $AttributeModifier$Type): double
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "getOverlayRenderer"(): $EffectOverlayRenderer
public "getDisplayName"(): $Component
public "beforeIncomingAttack"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: $DamageSource$Type, arg3: float): boolean
public "modifyIncomingAttackDamage"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: $DamageSource$Type, arg3: float): float
public "modifyOutgoingAttackDamage"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $MobEffectInstance$Type, arg3: $DamageSource$Type, arg4: float): float
public "afterIncomingAttack"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: $DamageSource$Type, arg3: float): void
public "afterOutgoingAttack"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $MobEffectInstance$Type, arg3: $DamageSource$Type, arg4: float): void
public "doClientSideEffectTick"(arg0: $MobEffectInstance$Type, arg1: $LivingEntity$Type): boolean
get "overlayRenderer"(): $EffectOverlayRenderer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedMobEffect$Type = ($ExtendedMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedMobEffect_ = $ExtendedMobEffect$Type;
}}
declare module "packages/net/tslat/effectslib/api/$ExtendedMobEffectHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedMobEffectHolder {

 "getExtendedMobEffectData"(): any
 "setExtendedMobEffectData"(arg0: any): void
}

export namespace $ExtendedMobEffectHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedMobEffectHolder$Type = ($ExtendedMobEffectHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedMobEffectHolder_ = $ExtendedMobEffectHolder$Type;
}}
