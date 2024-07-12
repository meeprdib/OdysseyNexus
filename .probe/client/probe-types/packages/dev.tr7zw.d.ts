declare module "packages/dev/tr7zw/skinlayers/accessor/$SkullSettings" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import {$SkullData, $SkullData$Type} from "packages/dev/tr7zw/skinlayers/api/$SkullData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SkullSettings extends $SkullData {

 "setInitialized"(arg0: boolean): void
 "setupHeadLayers"(arg0: $Mesh$Type): void
 "getLastTexture"(): $ResourceLocation
 "getHeadLayers"(): $Mesh
 "setLastTexture"(arg0: $ResourceLocation$Type): void
 "getMesh"(): $Mesh
 "initialized"(): boolean
}

export namespace $SkullSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullSettings$Type = ($SkullSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkullSettings_ = $SkullSettings$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/accessor/$PlayerSettings" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import {$PlayerData, $PlayerData$Type} from "packages/dev/tr7zw/skinlayers/api/$PlayerData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PlayerSettings extends $PlayerData {

 "clearMeshes"(): void
 "setHeadMesh"(arg0: $Mesh$Type): void
 "setTorsoMesh"(arg0: $Mesh$Type): void
 "setRightArmMesh"(arg0: $Mesh$Type): void
 "setLeftLegMesh"(arg0: $Mesh$Type): void
 "getCurrentSkin"(): $ResourceLocation
 "setRightLegMesh"(arg0: $Mesh$Type): void
 "hasThinArms"(): boolean
 "setLeftArmMesh"(arg0: $Mesh$Type): void
 "setThinArms"(arg0: boolean): void
 "setCurrentSkin"(arg0: $ResourceLocation$Type): void
 "getHeadMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
 "getTorsoMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getRightLegMesh"(): $Mesh
}

export namespace $PlayerSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSettings$Type = ($PlayerSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSettings_ = $PlayerSettings$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/api/$SkullData" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"

export interface $SkullData {

 "getMesh"(): $Mesh

(): $Mesh
}

export namespace $SkullData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullData$Type = ($SkullData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkullData_ = $SkullData$Type;
}}
declare module "packages/dev/tr7zw/entityculling/access/$EntityRendererInter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRendererInter<T extends $Entity> {

 "shadowRenderNameTag"(arg0: T, arg1: $Component$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: float): void
 "shadowShouldShowName"(arg0: T): boolean
}

export namespace $EntityRendererInter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererInter$Type<T> = ($EntityRendererInter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererInter_<T> = $EntityRendererInter$Type<(T)>;
}}
declare module "packages/dev/tr7zw/skinlayers/accessor/$HttpTextureAccessor" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $HttpTextureAccessor {

 "getImage"(): $NativeImage

(): $NativeImage
}

export namespace $HttpTextureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpTextureAccessor$Type = ($HttpTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HttpTextureAccessor_ = $HttpTextureAccessor$Type;
}}
declare module "packages/dev/tr7zw/entityculling/versionless/access/$Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable {

 "setTimeout"(): void
 "isForcedVisible"(): boolean
 "setCulled"(arg0: boolean): void
 "isCulled"(): boolean
 "setOutOfCamera"(arg0: boolean): void
 "isOutOfCamera"(): boolean
}

export namespace $Cullable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cullable$Type = ($Cullable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cullable_ = $Cullable$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/api/$Mesh" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$PartPose, $PartPose$Type} from "packages/net/minecraft/client/model/geom/$PartPose"

export interface $Mesh {

 "loadPose"(arg0: $PartPose$Type): void
 "render"(poseStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, light: integer, overlay: integer): void
 "render"(arg0: $ModelPart$Type, arg1: $PoseStack$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: integer): void
 "isVisible"(): boolean
 "setPosition"(arg0: float, arg1: float, arg2: float): void
 "setVisible"(arg0: boolean): void
 "setRotation"(arg0: float, arg1: float, arg2: float): void
 "copyFrom"(arg0: $ModelPart$Type): void
}

export namespace $Mesh {
const EMPTY: $Mesh
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$Type = ($Mesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/api/$PlayerData" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"

export interface $PlayerData {

 "getHeadMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
 "getTorsoMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getRightLegMesh"(): $Mesh
}

export namespace $PlayerData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerData$Type = ($PlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerData_ = $PlayerData$Type;
}}
