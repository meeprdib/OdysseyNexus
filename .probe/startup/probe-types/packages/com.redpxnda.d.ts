declare module "packages/com/redpxnda/nucleus/mixin/client/$MatrixStackAccessor" {
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $MatrixStackAccessor {

 "getStack"(): $Deque<($PoseStack$Pose)>

(): $Deque<($PoseStack$Pose)>
}

export namespace $MatrixStackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatrixStackAccessor$Type = ($MatrixStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatrixStackAccessor_ = $MatrixStackAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/facet/$Facet" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $Facet<T extends $Tag> {

 "toNbt"(): T
 "loadNbt"(arg0: T): void
}

export namespace $Facet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Facet$Type<T> = ($Facet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Facet_<T> = $Facet$Type<(T)>;
}}
declare module "packages/com/redpxnda/nucleus/mixin/$ItemStackAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $ItemStackAccessor {

 "nucleus$getItemDirect"(): $Item

(): $Item
}

export namespace $ItemStackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAccessor$Type = ($ItemStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackAccessor_ = $ItemStackAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/mixin/client/$DrawContextAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DrawContextAccessor {

 "callDrawIfRunning"(): void
 "callTryDraw"(): void
 "isRunningDrawCallback"(): boolean
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$Type = ($DrawContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextAccessor_ = $DrawContextAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/registry/effect/$RenderingMobEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderingMobEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "applyEffectTick"(entity: $LivingEntity$Type, i: integer): void
public "addAttributeModifiers"(entity: $LivingEntity$Type, attributeMap: $AttributeMap$Type, i: integer): void
public "removeAttributeModifiers"(entity: $LivingEntity$Type, attributeMap: $AttributeMap$Type, i: integer): void
public "renderHud"(instance: $MobEffectInstance$Type, minecraft: $Minecraft$Type, graphics: $GuiGraphics$Type, partialTick: float): boolean
public "renderPost"(instance: $MobEffectInstance$Type, entity: $LivingEntity$Type, entityYaw: float, partialTick: float, matrixStack: $PoseStack$Type, multiBufferSource: $MultiBufferSource$Type, packedLight: integer): void
public "renderPre"(instance: $MobEffectInstance$Type, entity: $LivingEntity$Type, entityYaw: float, partialTick: float, matrixStack: $PoseStack$Type, multiBufferSource: $MultiBufferSource$Type, packedLight: integer): boolean
public "tickUpdateInterval"(): integer
public "maxTickUpdateDistance"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingMobEffect$Type = ($RenderingMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingMobEffect_ = $RenderingMobEffect$Type;
}}
declare module "packages/com/redpxnda/nucleus/mixin/client/$ClientWorldAccessor" {
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $ClientWorldAccessor {

 "getWorldRenderer"(): $LevelRenderer

(): $LevelRenderer
}

export namespace $ClientWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldAccessor$Type = ($ClientWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientWorldAccessor_ = $ClientWorldAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/forge/mixin/$ParticleEngineAccessor" {
import {$ParticleProvider, $ParticleProvider$Type} from "packages/net/minecraft/client/particle/$ParticleProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ParticleEngineAccessor {

 "getProviders"(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>

(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/facet/$FacetKey" {
import {$Facet, $Facet$Type} from "packages/com/redpxnda/nucleus/facet/$Facet"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FacetKey<T extends $Facet<(any)>> {


public "get"(holder: $MobEffectInstance$Type): T
public "get"(holder: $ItemStack$Type): T
public "get"(holder: $Entity$Type): T
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "cls"(): $Class<(T)>
public "getOptional"(holder: $MobEffectInstance$Type): $Optional<(T)>
public "getOptional"(holder: $ItemStack$Type): $Optional<(T)>
public "getOptional"(holder: $Entity$Type): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacetKey$Type<T> = ($FacetKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacetKey_<T> = $FacetKey$Type<(T)>;
}}
declare module "packages/com/redpxnda/nucleus/mixin/$ThreadedAnvilChunkStorageAccessor" {
import {$ChunkMap$TrackedEntity, $ChunkMap$TrackedEntity$Type} from "packages/net/minecraft/server/level/$ChunkMap$TrackedEntity"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

export interface $ThreadedAnvilChunkStorageAccessor {

 "getEntityTrackers"(): $Int2ObjectMap<($ChunkMap$TrackedEntity)>

(): $Int2ObjectMap<($ChunkMap$TrackedEntity)>
}

export namespace $ThreadedAnvilChunkStorageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadedAnvilChunkStorageAccessor$Type = ($ThreadedAnvilChunkStorageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadedAnvilChunkStorageAccessor_ = $ThreadedAnvilChunkStorageAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/mixin/$TrackedEntityAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$Type} from "packages/net/minecraft/server/network/$ServerPlayerConnection"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $TrackedEntityAccessor {

 "getListeners"(): $Set<($ServerPlayerConnection)>

(): $Set<($ServerPlayerConnection)>
}

export namespace $TrackedEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedEntityAccessor$Type = ($TrackedEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedEntityAccessor_ = $TrackedEntityAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/facet/event/$FacetAttachmentEvent$FacetAttacher" {
import {$Facet, $Facet$Type} from "packages/com/redpxnda/nucleus/facet/$Facet"
import {$FacetKey, $FacetKey$Type} from "packages/com/redpxnda/nucleus/facet/$FacetKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FacetAttachmentEvent$FacetAttacher {
readonly "facets": $Map<($FacetKey<(any)>), ($Facet<(any)>)>

constructor()

public "add"<T extends $Facet<(any)>>(key: $FacetKey$Type<(T)>, val: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacetAttachmentEvent$FacetAttacher$Type = ($FacetAttachmentEvent$FacetAttacher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacetAttachmentEvent$FacetAttacher_ = $FacetAttachmentEvent$FacetAttacher$Type;
}}
declare module "packages/com/redpxnda/nucleus/mixin/client/$WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldRendererAccessor {

}

export namespace $WorldRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccessor$Type = ($WorldRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererAccessor_ = $WorldRendererAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/facet/$FacetInventory" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Facet, $Facet$Type} from "packages/com/redpxnda/nucleus/facet/$Facet"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FacetKey, $FacetKey$Type} from "packages/com/redpxnda/nucleus/facet/$FacetKey"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FacetInventory {

constructor()

public static "get"(entity: $Entity$Type): $FacetInventory
public static "get"(stack: $ItemStack$Type): $FacetInventory
public "get"<T extends $Facet<(any)>>(key: $FacetKey$Type<(T)>): T
public "isEmpty"(): boolean
public "forEach"(action: $BiConsumer$Type<(any), (any)>): void
public "has"<T extends $Facet<(any)>>(key: $FacetKey$Type<(T)>): boolean
public "getOptional"<T extends $Facet<(any)>>(key: $FacetKey$Type<(T)>): $Optional<(T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacetInventory$Type = ($FacetInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacetInventory_ = $FacetInventory$Type;
}}
declare module "packages/com/redpxnda/nucleus/mixin/client/$HeldItemRendererAccessor" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $HeldItemRendererAccessor {

 "callRenderArmHoldingItem"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: float, arg4: float, arg5: $HumanoidArm$Type): void

(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: float, arg4: float, arg5: $HumanoidArm$Type): void
}

export namespace $HeldItemRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemRendererAccessor$Type = ($HeldItemRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemRendererAccessor_ = $HeldItemRendererAccessor$Type;
}}
declare module "packages/com/redpxnda/nucleus/facet/$FacetHolder" {
import {$FacetInventory, $FacetInventory$Type} from "packages/com/redpxnda/nucleus/facet/$FacetInventory"
import {$Facet, $Facet$Type} from "packages/com/redpxnda/nucleus/facet/$Facet"
import {$FacetAttachmentEvent$FacetAttacher, $FacetAttachmentEvent$FacetAttacher$Type} from "packages/com/redpxnda/nucleus/facet/event/$FacetAttachmentEvent$FacetAttacher"
import {$FacetKey, $FacetKey$Type} from "packages/com/redpxnda/nucleus/facet/$FacetKey"

export interface $FacetHolder {

 "setFacetsFromAttacher"(attacher: $FacetAttachmentEvent$FacetAttacher$Type): void
 "getFacets"(): $FacetInventory
 "setFacet"(key: $FacetKey$Type<(any)>, val: $Facet$Type<(any)>): void
 "clearFacets"(): void

(holder: any): $FacetHolder
}

export namespace $FacetHolder {
function of(holder: any): $FacetHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacetHolder$Type = ($FacetHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacetHolder_ = $FacetHolder$Type;
}}
