declare module "packages/com/jozufozu/flywheel/util/transform/$TransformStack" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TStack, $TStack$Type} from "packages/com/jozufozu/flywheel/util/transform/$TStack"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Transform, $Transform$Type} from "packages/com/jozufozu/flywheel/util/transform/$Transform"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export interface $TransformStack extends $Transform<($TransformStack)>, $TStack<($TransformStack)> {

 "rotateCentered"(arg0: $Quaternionf$Type): $TransformStack
 "rotateCentered"(arg0: $Direction$Type, arg1: float): $TransformStack
 "mulPose"(arg0: $Matrix4f$Type): $TransformStack
 "mulNormal"(arg0: $Matrix3f$Type): $TransformStack
 "transform"(arg0: $Matrix4f$Type, arg1: $Matrix3f$Type): $TransformStack
 "transform"(arg0: $PoseStack$Type): $TransformStack
 "popPose"(): $TransformStack
 "pushPose"(): $TransformStack
 "centre"(): $TransformStack
 "translate"(arg0: $Vec3i$Type): $TransformStack
 "translate"(arg0: $Vec3$Type): $TransformStack
 "translate"(arg0: $Vector3f$Type): $TransformStack
 "translate"(arg0: double, arg1: double, arg2: double): $TransformStack
 "unCentre"(): $TransformStack
 "translateBack"(arg0: $Vec3$Type): $TransformStack
 "translateBack"(arg0: double, arg1: double, arg2: double): $TransformStack
 "translateBack"(arg0: $Vec3i$Type): $TransformStack
 "translateAll"(arg0: double): $TransformStack
 "translateZ"(arg0: double): $TransformStack
 "translateY"(arg0: double): $TransformStack
 "translateX"(arg0: double): $TransformStack
 "nudge"(arg0: integer): $TransformStack
 "rotateY"(arg0: double): $TransformStack
 "rotateX"(arg0: double): $TransformStack
 "rotateZ"(arg0: double): $TransformStack
 "rotateToFace"(arg0: $Direction$Type): $TransformStack
 "multiplyRadians"(arg0: $Axis$Type, arg1: double): $TransformStack
 "multiplyRadians"(arg0: $Vector3f$Type, arg1: double): $TransformStack
 "rotateZRadians"(arg0: double): $TransformStack
 "rotateYRadians"(arg0: double): $TransformStack
 "rotateXRadians"(arg0: double): $TransformStack
 "multiply"(arg0: $Quaternionf$Type): $TransformStack
 "multiply"(arg0: $Vector3f$Type, arg1: double): $TransformStack
 "multiply"(arg0: $Axis$Type, arg1: double): $TransformStack
 "rotate"(arg0: $Direction$Type, arg1: float): $TransformStack
 "rotate"(arg0: double, arg1: $Direction$Axis$Type): $TransformStack
 "scale"(arg0: float, arg1: float, arg2: float): $TransformStack
 "scale"(arg0: float): $TransformStack
}

export namespace $TransformStack {
function cast(arg0: $PoseStack$Type): $TransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformStack$Type = ($TransformStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformStack_ = $TransformStack$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/entity/$EntityInstancingController" {
import {$MaterialManager, $MaterialManager$Type} from "packages/com/jozufozu/flywheel/api/$MaterialManager"
import {$EntityInstance, $EntityInstance$Type} from "packages/com/jozufozu/flywheel/backend/instancing/entity/$EntityInstance"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityInstancingController<T extends $Entity> {

 "shouldSkipRender"(arg0: T): boolean
 "createInstance"(arg0: $MaterialManager$Type, arg1: T): $EntityInstance<(any)>
}

export namespace $EntityInstancingController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInstancingController$Type<T> = ($EntityInstancingController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInstancingController_<T> = $EntityInstancingController$Type<(T)>;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/blockentity/$BlockEntityInstance" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MaterialManager, $MaterialManager$Type} from "packages/com/jozufozu/flywheel/api/$MaterialManager"
import {$AbstractInstance, $AbstractInstance$Type} from "packages/com/jozufozu/flywheel/backend/instancing/$AbstractInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityInstance<T extends $BlockEntity> extends $AbstractInstance {
readonly "world": $Level

constructor(arg0: $MaterialManager$Type, arg1: T)

public "getInstancePosition"(): $BlockPos
public "getWorldPosition"(): $BlockPos
public "getVolume"(): $ImmutableBox
public "shouldReset"(): boolean
get "instancePosition"(): $BlockPos
get "worldPosition"(): $BlockPos
get "volume"(): $ImmutableBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityInstance$Type<T> = ($BlockEntityInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityInstance_<T> = $BlockEntityInstance$Type<(T)>;
}}
declare module "packages/com/jozufozu/flywheel/core/$PartialModel" {
import {$AccessorPartialModel, $AccessorPartialModel$Type} from "packages/com/railwayteam/railways/mixin/client/$AccessorPartialModel"
import {$ModelEvent$RegisterAdditional, $ModelEvent$RegisterAdditional$Type} from "packages/net/minecraftforge/client/event/$ModelEvent$RegisterAdditional"
import {$ModelEvent$BakingCompleted, $ModelEvent$BakingCompleted$Type} from "packages/net/minecraftforge/client/event/$ModelEvent$BakingCompleted"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PartialModel implements $AccessorPartialModel {

constructor(arg0: $ResourceLocation$Type)

public static "onModelRegistry"(arg0: $ModelEvent$RegisterAdditional$Type): void
public static "onModelBake"(arg0: $ModelEvent$BakingCompleted$Type): void
public "get"(): $BakedModel
public "getLocation"(): $ResourceLocation
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialModel$Type = ($PartialModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartialModel_ = $PartialModel$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/vertex/$VertexList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexList {

 "getG"(arg0: integer): byte
 "getY"(arg0: integer): float
 "getNY"(arg0: integer): float
 "getVertexCount"(): integer
 "getNX"(arg0: integer): float
 "getNZ"(arg0: integer): float
 "getR"(arg0: integer): byte
 "getV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "getU"(arg0: integer): float
 "isEmpty"(): boolean
 "delete"(): void
 "getA"(arg0: integer): byte
 "getB"(arg0: integer): byte
}

export namespace $VertexList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexList$Type = ($VertexList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexList_ = $VertexList$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/materials/$BasicData" {
import {$InstanceData, $InstanceData$Type} from "packages/com/jozufozu/flywheel/api/$InstanceData"
import {$Color, $Color$Type} from "packages/com/jozufozu/flywheel/util/$Color"
import {$FlatLit, $FlatLit$Type} from "packages/com/jozufozu/flywheel/core/materials/$FlatLit"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BasicData extends $InstanceData implements $FlatLit<($BasicData)> {
 "blockLight": byte
 "skyLight": byte
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor()

public "getPackedLight"(): integer
public "setColor"(arg0: integer, arg1: boolean): $BasicData
public "setColor"(arg0: $Color$Type): $BasicData
public "setColor"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $BasicData
public "setColor"(arg0: byte, arg1: byte, arg2: byte): $BasicData
public "setColor"(arg0: integer, arg1: integer, arg2: integer): $BasicData
public "setColor"(arg0: integer): $BasicData
public "updateLight"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): $BasicData
get "packedLight"(): integer
set "color"(value: $Color$Type)
set "color"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicData$Type = ($BasicData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicData_ = $BasicData$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/transform/$Translate" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $Translate<Self> {

 "centre"(): Self
 "translate"(arg0: $Vec3i$Type): Self
 "translate"(arg0: $Vec3$Type): Self
 "translate"(arg0: $Vector3f$Type): Self
 "translate"(arg0: double, arg1: double, arg2: double): Self
 "unCentre"(): Self
 "translateBack"(arg0: $Vec3$Type): Self
 "translateBack"(arg0: double, arg1: double, arg2: double): Self
 "translateBack"(arg0: $Vec3i$Type): Self
 "translateAll"(arg0: double): Self
 "translateZ"(arg0: double): Self
 "translateY"(arg0: double): Self
 "translateX"(arg0: double): Self
 "nudge"(arg0: integer): Self

(): Self
}

export namespace $Translate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translate$Type<Self> = ($Translate<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Translate_<Self> = $Translate$Type<(Self)>;
}}
declare module "packages/com/jozufozu/flywheel/light/$GPULightVolume" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$LightVolume, $LightVolume$Type} from "packages/com/jozufozu/flywheel/light/$LightVolume"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $GPULightVolume extends $LightVolume {

constructor(arg0: $BlockAndTintGetter$Type, arg1: $ImmutableBox$Type)

public "unbind"(): void
public "getVolume"(): $ImmutableBox
public "bind"(): void
public "delete"(): void
public "move"(arg0: $ImmutableBox$Type): void
get "volume"(): $ImmutableBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GPULightVolume$Type = ($GPULightVolume);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GPULightVolume_ = $GPULightVolume$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/$AbstractInstance" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$LightListener, $LightListener$Type} from "packages/com/jozufozu/flywheel/light/$LightListener"
import {$MaterialManager, $MaterialManager$Type} from "packages/com/jozufozu/flywheel/api/$MaterialManager"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Instance, $Instance$Type} from "packages/com/jozufozu/flywheel/api/instance/$Instance"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$AccessorInstance, $AccessorInstance$Type} from "packages/com/railwayteam/railways/mixin/client/$AccessorInstance"

export class $AbstractInstance implements $Instance, $LightListener, $AccessorInstance {
readonly "world": $Level

constructor(arg0: $MaterialManager$Type, arg1: $Level$Type)

public "updateLight"(): void
public "onLightUpdate"(arg0: $LightLayer$Type, arg1: $ImmutableBox$Type): void
public "isListenerInvalid"(): boolean
public "shouldReset"(): boolean
public "removeAndMark"(): void
public "update"(): void
public "init"(): void
public "getWorldPosition"(): $BlockPos
public "getVolume"(): $ImmutableBox
public "onLightPacket"(arg0: integer, arg1: integer): void
get "listenerInvalid"(): boolean
get "worldPosition"(): $BlockPos
get "volume"(): $ImmutableBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractInstance$Type = ($AbstractInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractInstance_ = $AbstractInstance$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/$ClientLevelExtension" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClientLevelExtension {

 "flywheel$getAllLoadedEntities"(): $Iterable<($Entity)>

(): $Iterable<($Entity)>
}

export namespace $ClientLevelExtension {
function cast(arg0: $ClientLevel$Type): $ClientLevelExtension
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelExtension$Type = ($ClientLevelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelExtension_ = $ClientLevelExtension$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/$InstanceData" {
import {$Instancer, $Instancer$Type} from "packages/com/jozufozu/flywheel/api/$Instancer"

export class $InstanceData {

constructor()

public "checkDirtyAndClear"(): boolean
public "isRemoved"(): boolean
public "markDirty"(): void
public "getOwner"(): $Instancer<(any)>
public "delete"(): void
public "setOwner"(arg0: $Instancer$Type<(any)>): $InstanceData
get "removed"(): boolean
get "owner"(): $Instancer<(any)>
set "owner"(value: $Instancer$Type<(any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceData$Type = ($InstanceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceData_ = $InstanceData$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/vertex/$VertexWriter" {
import {$VertexList, $VertexList$Type} from "packages/com/jozufozu/flywheel/api/vertex/$VertexList"

export interface $VertexWriter {

 "writeVertexList"(arg0: $VertexList$Type): void
 "writeVertex"(arg0: $VertexList$Type, arg1: integer): void
 "intoReader"(): $VertexList
 "seekToVertex"(arg0: integer): void
}

export namespace $VertexWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexWriter$Type = ($VertexWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexWriter_ = $VertexWriter$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/layout/$BufferLayout$Builder" {
import {$LayoutItem, $LayoutItem$Type} from "packages/com/jozufozu/flywheel/core/layout/$LayoutItem"
import {$BufferLayout, $BufferLayout$Type} from "packages/com/jozufozu/flywheel/core/layout/$BufferLayout"

export class $BufferLayout$Builder {

constructor()

public "addItems"(...arg0: ($LayoutItem$Type)[]): $BufferLayout$Builder
public "build"(): $BufferLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferLayout$Builder$Type = ($BufferLayout$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferLayout$Builder_ = $BufferLayout$Builder$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/transform/$Rotate" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export interface $Rotate<Self> {

 "rotateY"(arg0: double): Self
 "rotateX"(arg0: double): Self
 "rotateZ"(arg0: double): Self
 "rotateToFace"(arg0: $Direction$Type): Self
 "multiplyRadians"(arg0: $Axis$Type, arg1: double): Self
 "multiplyRadians"(arg0: $Vector3f$Type, arg1: double): Self
 "rotateZRadians"(arg0: double): Self
 "rotateYRadians"(arg0: double): Self
 "rotateXRadians"(arg0: double): Self
 "multiply"(arg0: $Quaternionf$Type): Self
 "multiply"(arg0: $Vector3f$Type, arg1: double): Self
 "multiply"(arg0: $Axis$Type, arg1: double): Self
 "rotate"(arg0: $Direction$Type, arg1: float): Self
 "rotate"(arg0: double, arg1: $Direction$Axis$Type): Self

(arg0: double): Self
}

export namespace $Rotate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotate$Type<Self> = ($Rotate<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotate_<Self> = $Rotate$Type<(Self)>;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/$RenderTypeExtension" {
import {$DrawBuffer, $DrawBuffer$Type} from "packages/com/jozufozu/flywheel/backend/instancing/$DrawBuffer"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $RenderTypeExtension {

 "flywheel$getDrawBuffer"(): $DrawBuffer

(arg0: $RenderType$Type): $DrawBuffer
}

export namespace $RenderTypeExtension {
function getDrawBuffer(arg0: $RenderType$Type): $DrawBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeExtension$Type = ($RenderTypeExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeExtension_ = $RenderTypeExtension$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/model/$Model" {
import {$VertexType, $VertexType$Type} from "packages/com/jozufozu/flywheel/api/vertex/$VertexType"
import {$VertexList, $VertexList$Type} from "packages/com/jozufozu/flywheel/api/vertex/$VertexList"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ElementBuffer, $ElementBuffer$Type} from "packages/com/jozufozu/flywheel/backend/model/$ElementBuffer"

export interface $Model {

 "writeInto"(arg0: $ByteBuffer$Type): void
 "createEBO"(): $ElementBuffer
 "vertexCount"(): integer
 "getReader"(): $VertexList
 "name"(): string
 "size"(): integer
 "empty"(): boolean
 "delete"(): void
 "getType"(): $VertexType
}

export namespace $Model {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$Type = ($Model);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model_ = $Model$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/$RenderLayer" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderLayer extends $Enum<($RenderLayer)> {
static readonly "SOLID": $RenderLayer
static readonly "CUTOUT": $RenderLayer
static readonly "TRANSPARENT": $RenderLayer


public static "getPrimaryLayer"(arg0: $RenderType$Type): $RenderLayer
public static "values"(): ($RenderLayer)[]
public static "valueOf"(arg0: string): $RenderLayer
public static "getLayer"(arg0: $RenderType$Type): $RenderLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayer$Type = (("solid") | ("cutout") | ("transparent")) | ($RenderLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderLayer_ = $RenderLayer$Type;
}}
declare module "packages/com/jozufozu/flywheel/light/$TickingLightListener" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$LightListener, $LightListener$Type} from "packages/com/jozufozu/flywheel/light/$LightListener"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export interface $TickingLightListener extends $LightListener {

 "tickLightListener"(): boolean
 "onLightUpdate"(arg0: $LightLayer$Type, arg1: $ImmutableBox$Type): void
 "getVolume"(): $ImmutableBox
 "onLightPacket"(arg0: integer, arg1: integer): void
 "isListenerInvalid"(): boolean
}

export namespace $TickingLightListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingLightListener$Type = ($TickingLightListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingLightListener_ = $TickingLightListener$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/box/$CoordinateConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CoordinateConsumer {

 "consume"(arg0: integer, arg1: integer, arg2: integer): void

(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $CoordinateConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateConsumer$Type = ($CoordinateConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordinateConsumer_ = $CoordinateConsumer$Type;
}}
declare module "packages/com/jozufozu/flywheel/light/$LightVolume" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$LightListener, $LightListener$Type} from "packages/com/jozufozu/flywheel/light/$LightListener"
import {$GridAlignedBB, $GridAlignedBB$Type} from "packages/com/jozufozu/flywheel/util/box/$GridAlignedBB"
import {$CoordinateConsumer, $CoordinateConsumer$Type} from "packages/com/jozufozu/flywheel/util/box/$CoordinateConsumer"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export class $LightVolume implements $ImmutableBox, $LightListener {

constructor(arg0: $BlockAndTintGetter$Type, arg1: $ImmutableBox$Type)

public "onLightUpdate"(arg0: $LightLayer$Type, arg1: $ImmutableBox$Type): void
public "getVolume"(): $ImmutableBox
public "onLightPacket"(arg0: integer, arg1: integer): void
public "isListenerInvalid"(): boolean
public "getMinY"(): integer
public "getMaxY"(): integer
public "getPackedLight"(arg0: integer, arg1: integer, arg2: integer): short
public "getMinX"(): integer
public "getMaxZ"(): integer
public "getMinZ"(): integer
public "getMaxX"(): integer
public "copySky"(arg0: $ImmutableBox$Type): void
public "copyBlock"(arg0: $ImmutableBox$Type): void
public "copyLight"(arg0: $ImmutableBox$Type): void
public "initialize"(): void
public "delete"(): void
public "move"(arg0: $ImmutableBox$Type): void
public "intersect"(arg0: $ImmutableBox$Type): $GridAlignedBB
public "volume"(): integer
public "intersects"(arg0: $ImmutableBox$Type): boolean
public "intersects"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "sizeZ"(): integer
public "sizeY"(): integer
public "sizeX"(): integer
public "sameAs"(arg0: $ImmutableBox$Type): boolean
public "sameAs"(arg0: $AABB$Type): boolean
public "sameAs"(arg0: $ImmutableBox$Type, arg1: integer): boolean
public "hasPowerOf2Sides"(): boolean
public "isContainedBy"(arg0: $GridAlignedBB$Type): boolean
public "forEachContained"(arg0: $CoordinateConsumer$Type): void
public "toAABB"(): $AABB
public "contains"(arg0: $ImmutableBox$Type): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
public "empty"(): boolean
public "copy"(): $GridAlignedBB
public "union"(arg0: $ImmutableBox$Type): $ImmutableBox
get "listenerInvalid"(): boolean
get "minY"(): integer
get "maxY"(): integer
get "minX"(): integer
get "maxZ"(): integer
get "minZ"(): integer
get "maxX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightVolume$Type = ($LightVolume);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightVolume_ = $LightVolume$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/transform/$Transform" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Scale, $Scale$Type} from "packages/com/jozufozu/flywheel/util/transform/$Scale"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Rotate, $Rotate$Type} from "packages/com/jozufozu/flywheel/util/transform/$Rotate"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Translate, $Translate$Type} from "packages/com/jozufozu/flywheel/util/transform/$Translate"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export interface $Transform<Self extends $Transform<(Self)>> extends $Translate<(Self)>, $Rotate<(Self)>, $Scale<(Self)> {

 "rotateCentered"(arg0: $Quaternionf$Type): Self
 "rotateCentered"(arg0: $Direction$Type, arg1: float): Self
 "mulPose"(arg0: $Matrix4f$Type): Self
 "mulNormal"(arg0: $Matrix3f$Type): Self
 "transform"(arg0: $Matrix4f$Type, arg1: $Matrix3f$Type): Self
 "transform"(arg0: $PoseStack$Type): Self
 "centre"(): Self
 "translate"(arg0: $Vec3i$Type): Self
 "translate"(arg0: $Vec3$Type): Self
 "translate"(arg0: $Vector3f$Type): Self
 "translate"(arg0: double, arg1: double, arg2: double): Self
 "unCentre"(): Self
 "translateBack"(arg0: $Vec3$Type): Self
 "translateBack"(arg0: double, arg1: double, arg2: double): Self
 "translateBack"(arg0: $Vec3i$Type): Self
 "translateAll"(arg0: double): Self
 "translateZ"(arg0: double): Self
 "translateY"(arg0: double): Self
 "translateX"(arg0: double): Self
 "nudge"(arg0: integer): Self
 "rotateY"(arg0: double): Self
 "rotateX"(arg0: double): Self
 "rotateZ"(arg0: double): Self
 "rotateToFace"(arg0: $Direction$Type): Self
 "multiplyRadians"(arg0: $Axis$Type, arg1: double): Self
 "multiplyRadians"(arg0: $Vector3f$Type, arg1: double): Self
 "rotateZRadians"(arg0: double): Self
 "rotateYRadians"(arg0: double): Self
 "rotateXRadians"(arg0: double): Self
 "multiply"(arg0: $Quaternionf$Type): Self
 "multiply"(arg0: $Vector3f$Type, arg1: double): Self
 "multiply"(arg0: $Axis$Type, arg1: double): Self
 "rotate"(arg0: $Direction$Type, arg1: float): Self
 "rotate"(arg0: double, arg1: $Direction$Axis$Type): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scale"(arg0: float): Self
}

export namespace $Transform {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type<Self> = ($Transform<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_<Self> = $Transform$Type<(Self)>;
}}
declare module "packages/com/jozufozu/flywheel/light/$LightListener" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export interface $LightListener {

 "onLightUpdate"(arg0: $LightLayer$Type, arg1: $ImmutableBox$Type): void
 "getVolume"(): $ImmutableBox
 "onLightPacket"(arg0: integer, arg1: integer): void
 "isListenerInvalid"(): boolean
}

export namespace $LightListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightListener$Type = ($LightListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightListener_ = $LightListener$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/$Color" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Color {
static readonly "TRANSPARENT_BLACK": $Color
static readonly "BLACK": $Color
static readonly "WHITE": $Color
static readonly "RED": $Color
static readonly "GREEN": $Color
static readonly "SPRING_GREEN": $Color

constructor(arg0: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: boolean)

public "getRGB"(): integer
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getAlpha"(): integer
public "brighter"(): $Color
public "darker"(): $Color
public "setAlpha"(arg0: integer): $Color
public "setAlpha"(arg0: float): $Color
public "asVectorF"(): $Vector3f
public "setImmutable"(): $Color
public static "mixColors"(arg0: integer, arg1: integer, arg2: float): integer
public static "mixColors"(arg0: $Color$Type, arg1: $Color$Type, arg2: float): $Color
public "setRed"(arg0: float): $Color
public "setRed"(arg0: integer): $Color
public "setGreen"(arg0: integer): $Color
public "setGreen"(arg0: float): $Color
public "setBlue"(arg0: integer): $Color
public "setBlue"(arg0: float): $Color
public "mixWith"(arg0: $Color$Type, arg1: float): $Color
public "getAlphaAsFloat"(): float
public "asVector"(): $Vec3
public "modifyValue"(arg0: $UnaryOperator$Type<(integer)>): $Color
public static "generateFromLong"(arg0: long): $Color
public static "rainbowColor"(arg0: integer): $Color
public "scaleAlpha"(arg0: float): $Color
public "getGreenAsFloat"(): float
public "getBlueAsFloat"(): float
public "getRedAsFloat"(): float
public "setValue"(arg0: integer): $Color
public "copy"(): $Color
public "copy"(arg0: boolean): $Color
get "rGB"(): integer
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "alpha"(): integer
set "alpha"(value: integer)
set "alpha"(value: float)
set "red"(value: float)
set "red"(value: integer)
set "green"(value: integer)
set "green"(value: float)
set "blue"(value: integer)
set "blue"(value: float)
get "alphaAsFloat"(): float
get "greenAsFloat"(): float
get "blueAsFloat"(): float
get "redAsFloat"(): float
set "value"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/materials/model/$ModelData" {
import {$BasicData, $BasicData$Type} from "packages/com/jozufozu/flywheel/core/materials/$BasicData"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Transform, $Transform$Type} from "packages/com/jozufozu/flywheel/util/transform/$Transform"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export class $ModelData extends $BasicData implements $Transform<($ModelData)> {
readonly "model": $Matrix4f
readonly "normal": $Matrix3f
 "blockLight": byte
 "skyLight": byte
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor()

public "setTransform"(arg0: $PoseStack$Type): $ModelData
public "loadIdentity"(): $ModelData
public "setEmptyTransform"(): $ModelData
public "translate"(arg0: double, arg1: double, arg2: double): $ModelData
public "scale"(arg0: float, arg1: float, arg2: float): $ModelData
public "rotateCentered"(arg0: $Quaternionf$Type): $ModelData
public "rotateCentered"(arg0: $Direction$Type, arg1: float): $ModelData
public "transform"(arg0: $Matrix4f$Type, arg1: $Matrix3f$Type): $ModelData
public "transform"(arg0: $PoseStack$Type): $ModelData
public "centre"(): $ModelData
public "translate"(arg0: $Vec3i$Type): $ModelData
public "translate"(arg0: $Vec3$Type): $ModelData
public "translate"(arg0: $Vector3f$Type): $ModelData
public "unCentre"(): $ModelData
public "translateBack"(arg0: $Vec3$Type): $ModelData
public "translateBack"(arg0: double, arg1: double, arg2: double): $ModelData
public "translateBack"(arg0: $Vec3i$Type): $ModelData
public "translateAll"(arg0: double): $ModelData
public "translateZ"(arg0: double): $ModelData
public "translateY"(arg0: double): $ModelData
public "translateX"(arg0: double): $ModelData
public "nudge"(arg0: integer): $ModelData
public "rotateY"(arg0: double): $ModelData
public "rotateX"(arg0: double): $ModelData
public "rotateZ"(arg0: double): $ModelData
public "rotateToFace"(arg0: $Direction$Type): $ModelData
public "multiplyRadians"(arg0: $Axis$Type, arg1: double): $ModelData
public "multiplyRadians"(arg0: $Vector3f$Type, arg1: double): $ModelData
public "rotateZRadians"(arg0: double): $ModelData
public "rotateYRadians"(arg0: double): $ModelData
public "rotateXRadians"(arg0: double): $ModelData
public "multiply"(arg0: $Vector3f$Type, arg1: double): $ModelData
public "multiply"(arg0: $Axis$Type, arg1: double): $ModelData
public "rotate"(arg0: $Direction$Type, arg1: float): $ModelData
public "rotate"(arg0: double, arg1: $Direction$Axis$Type): $ModelData
public "scale"(arg0: float): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Type = ($ModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData_ = $ModelData$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/transform/$Scale" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Scale<Self> {

 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scale"(arg0: float): Self

(arg0: float, arg1: float, arg2: float): Self
}

export namespace $Scale {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scale$Type<Self> = ($Scale<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Scale_<Self> = $Scale$Type<(Self)>;
}}
declare module "packages/com/jozufozu/flywheel/core/layout/$BufferLayout" {
import {$LayoutItem, $LayoutItem$Type} from "packages/com/jozufozu/flywheel/core/layout/$LayoutItem"
import {$BufferLayout$Builder, $BufferLayout$Builder$Type} from "packages/com/jozufozu/flywheel/core/layout/$BufferLayout$Builder"
import {$List, $List$Type} from "packages/java/util/$List"

export class $BufferLayout {

constructor(arg0: $List$Type<($LayoutItem$Type)>)

public "getStride"(): integer
public "getLayoutItems"(): $List<($LayoutItem)>
public static "builder"(): $BufferLayout$Builder
public "getAttributeCount"(): integer
get "stride"(): integer
get "layoutItems"(): $List<($LayoutItem)>
get "attributeCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferLayout$Type = ($BufferLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferLayout_ = $BufferLayout$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/entity/$EntityInstance" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$LightListener, $LightListener$Type} from "packages/com/jozufozu/flywheel/light/$LightListener"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$MaterialManager, $MaterialManager$Type} from "packages/com/jozufozu/flywheel/api/$MaterialManager"
import {$TickingLightListener, $TickingLightListener$Type} from "packages/com/jozufozu/flywheel/light/$TickingLightListener"
import {$AbstractInstance, $AbstractInstance$Type} from "packages/com/jozufozu/flywheel/backend/instancing/$AbstractInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export class $EntityInstance<E extends $Entity> extends $AbstractInstance implements $LightListener, $TickingLightListener {
readonly "world": $Level

constructor(arg0: $MaterialManager$Type, arg1: E)

public "tickLightListener"(): boolean
public "getInstancePosition"(arg0: float): $Vector3f
public "getInstancePosition"(): $Vector3f
public "getWorldPosition"(): $BlockPos
public "onLightUpdate"(arg0: $LightLayer$Type, arg1: $ImmutableBox$Type): void
public "isListenerInvalid"(): boolean
get "instancePosition"(): $Vector3f
get "worldPosition"(): $BlockPos
get "listenerInvalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInstance$Type<E> = ($EntityInstance<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInstance_<E> = $EntityInstance$Type<(E)>;
}}
declare module "packages/com/jozufozu/flywheel/api/instance/$Instance" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Instance {

 "getWorldPosition"(): $BlockPos

(): $BlockPos
}

export namespace $Instance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instance$Type = ($Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instance_ = $Instance$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/$DiffuseLightCalculator" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"

export interface $DiffuseLightCalculator {

 "getDiffuse"(arg0: float, arg1: float, arg2: float, arg3: boolean): float

(): $DiffuseLightCalculator
}

export namespace $DiffuseLightCalculator {
const DEFAULT: $DiffuseLightCalculator
const NETHER: $DiffuseLightCalculator
function forCurrentLevel(): $DiffuseLightCalculator
function forLevel(arg0: $ClientLevel$Type): $DiffuseLightCalculator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiffuseLightCalculator$Type = ($DiffuseLightCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiffuseLightCalculator_ = $DiffuseLightCalculator$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/model/$ShadeSeparatedBufferedData" {
import {$BufferBuilder$DrawState, $BufferBuilder$DrawState$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$DrawState"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $ShadeSeparatedBufferedData {

 "drawState"(): $BufferBuilder$DrawState
 "vertexBuffer"(): $ByteBuffer
 "unshadedStartVertex"(): integer
 "indexBuffer"(): $ByteBuffer
 "release"(): void
}

export namespace $ShadeSeparatedBufferedData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadeSeparatedBufferedData$Type = ($ShadeSeparatedBufferedData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadeSeparatedBufferedData_ = $ShadeSeparatedBufferedData$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/instance/$DynamicInstance" {
import {$Instance, $Instance$Type} from "packages/com/jozufozu/flywheel/api/instance/$Instance"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $DynamicInstance extends $Instance {

 "beginFrame"(): void
 "decreaseFramerateWithDistance"(): boolean
 "getWorldPosition"(): $BlockPos
}

export namespace $DynamicInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicInstance$Type = ($DynamicInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicInstance_ = $DynamicInstance$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/vertex/$VertexType" {
import {$VertexList, $VertexList$Type} from "packages/com/jozufozu/flywheel/api/vertex/$VertexList"
import {$VertexWriter, $VertexWriter$Type} from "packages/com/jozufozu/flywheel/api/vertex/$VertexWriter"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BufferLayout, $BufferLayout$Type} from "packages/com/jozufozu/flywheel/core/layout/$BufferLayout"

export interface $VertexType {

 "createWriter"(arg0: $ByteBuffer$Type): $VertexWriter
 "getShaderHeader"(): string
 "getLayout"(): $BufferLayout
 "createReader"(arg0: $ByteBuffer$Type, arg1: integer): $VertexList
 "getStride"(): integer
 "byteOffset"(arg0: integer): integer
}

export namespace $VertexType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexType$Type = ($VertexType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexType_ = $VertexType$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/struct/$StructType" {
import {$BufferLayout, $BufferLayout$Type} from "packages/com/jozufozu/flywheel/core/layout/$BufferLayout"

export interface $StructType<S> {

 "getLayout"(): $BufferLayout
 "create"(): S
}

export namespace $StructType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructType$Type<S> = ($StructType<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructType_<S> = $StructType$Type<(S)>;
}}
declare module "packages/com/jozufozu/flywheel/api/$MaterialGroup" {
import {$InstanceData, $InstanceData$Type} from "packages/com/jozufozu/flywheel/api/$InstanceData"
import {$StructType, $StructType$Type} from "packages/com/jozufozu/flywheel/api/struct/$StructType"
import {$Material, $Material$Type} from "packages/com/jozufozu/flywheel/api/$Material"

export interface $MaterialGroup {

 "material"<D extends $InstanceData>(arg0: $StructType$Type<(D)>): $Material<(D)>

(arg0: $StructType$Type<(D)>): $Material<(D)>
}

export namespace $MaterialGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialGroup$Type = ($MaterialGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialGroup_ = $MaterialGroup$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/materials/$FlatLit" {
import {$InstanceData, $InstanceData$Type} from "packages/com/jozufozu/flywheel/api/$InstanceData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $FlatLit<D extends ($InstanceData) & ($FlatLit<(D)>)> {

 "updateLight"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): D
 "setBlockLight"(arg0: integer): D
 "setSkyLight"(arg0: integer): D
 "getPackedLight"(): integer
}

export namespace $FlatLit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlatLit$Type<D> = ($FlatLit<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlatLit_<D> = $FlatLit$Type<(D)>;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/blockentity/$BlockEntityInstancingController" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityInstance, $BlockEntityInstance$Type} from "packages/com/jozufozu/flywheel/backend/instancing/blockentity/$BlockEntityInstance"
import {$MaterialManager, $MaterialManager$Type} from "packages/com/jozufozu/flywheel/api/$MaterialManager"

export interface $BlockEntityInstancingController<T extends $BlockEntity> {

 "shouldSkipRender"(arg0: T): boolean
 "createInstance"(arg0: $MaterialManager$Type, arg1: T): $BlockEntityInstance<(any)>
}

export namespace $BlockEntityInstancingController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityInstancingController$Type<T> = ($BlockEntityInstancingController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityInstancingController_<T> = $BlockEntityInstancingController$Type<(T)>;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/entity/$EntityTypeExtension" {
import {$EntityInstancingController, $EntityInstancingController$Type} from "packages/com/jozufozu/flywheel/backend/instancing/entity/$EntityInstancingController"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityTypeExtension<T extends $Entity> {

 "flywheel$getInstancingController"(): $EntityInstancingController<(any)>
 "flywheel$setInstancingController"(arg0: $EntityInstancingController$Type<(any)>): void
}

export namespace $EntityTypeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypeExtension$Type<T> = ($EntityTypeExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTypeExtension_<T> = $EntityTypeExtension$Type<(T)>;
}}
declare module "packages/com/jozufozu/flywheel/mixin/$BlockEntityRenderDispatcherAccessor" {
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockEntityRenderer, $BlockEntityRenderer$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockEntityRenderDispatcherAccessor {

 "flywheel$getRenderers"(): $Map<($BlockEntityType<(any)>), ($BlockEntityRenderer<(any)>)>

(): $Map<($BlockEntityType<(any)>), ($BlockEntityRenderer<(any)>)>
}

export namespace $BlockEntityRenderDispatcherAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderDispatcherAccessor$Type = ($BlockEntityRenderDispatcherAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityRenderDispatcherAccessor_ = $BlockEntityRenderDispatcherAccessor$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/model/$ElementBuffer" {
import {$VertexFormat$IndexType, $VertexFormat$IndexType$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType"

export class $ElementBuffer {

constructor(arg0: integer, arg1: integer, arg2: $VertexFormat$IndexType$Type)

public "getElementCount"(): integer
public "bind"(): void
public "getEboIndexType"(): $VertexFormat$IndexType
get "elementCount"(): integer
get "eboIndexType"(): $VertexFormat$IndexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementBuffer$Type = ($ElementBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementBuffer_ = $ElementBuffer$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/$Material" {
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$InstanceData, $InstanceData$Type} from "packages/com/jozufozu/flywheel/api/$InstanceData"
import {$Model, $Model$Type} from "packages/com/jozufozu/flywheel/core/model/$Model"
import {$Instancer, $Instancer$Type} from "packages/com/jozufozu/flywheel/api/$Instancer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $Material<D extends $InstanceData> {

 "model"(arg0: any, arg1: $Supplier$Type<($Model$Type)>): $Instancer<(D)>
 "getModel"(arg0: $BlockState$Type): $Instancer<(D)>
 "getModel"(arg0: $PartialModel$Type, arg1: $BlockState$Type, arg2: $Direction$Type, arg3: $Supplier$Type<($PoseStack$Type)>): $Instancer<(D)>
 "getModel"(arg0: $PartialModel$Type, arg1: $BlockState$Type): $Instancer<(D)>
 "getModel"(arg0: $PartialModel$Type): $Instancer<(D)>
 "getModel"(arg0: $PartialModel$Type, arg1: $BlockState$Type, arg2: $Direction$Type): $Instancer<(D)>

(arg0: any, arg1: $Supplier$Type<($Model$Type)>): $Instancer<(D)>
}

export namespace $Material {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$Type<D> = ($Material<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Material_<D> = $Material$Type<(D)>;
}}
declare module "packages/com/jozufozu/flywheel/api/$FlywheelWorld" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FlywheelWorld {

 "supportsFlywheel"(): boolean
}

export namespace $FlywheelWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlywheelWorld$Type = ($FlywheelWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlywheelWorld_ = $FlywheelWorld$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/transform/$TStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TStack<Self> {

 "popPose"(): Self
 "pushPose"(): Self
}

export namespace $TStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TStack$Type<Self> = ($TStack<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TStack_<Self> = $TStack$Type<(Self)>;
}}
declare module "packages/com/jozufozu/flywheel/mixin/$LevelRendererAccessor" {
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$BlockDestructionProgress, $BlockDestructionProgress$Type} from "packages/net/minecraft/server/level/$BlockDestructionProgress"

export interface $LevelRendererAccessor {

 "flywheel$getDestructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>

(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/layout/$LayoutItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LayoutItem {

 "vertexAttribPointer"(arg0: integer, arg1: integer, arg2: integer): void
 "size"(): integer
 "attributeCount"(): integer
}

export namespace $LayoutItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayoutItem$Type = ($LayoutItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayoutItem_ = $LayoutItem$Type;
}}
declare module "packages/com/jozufozu/flywheel/api/$Instancer" {
import {$InstanceData, $InstanceData$Type} from "packages/com/jozufozu/flywheel/api/$InstanceData"

export interface $Instancer<D extends $InstanceData> {

 "notifyDirty"(): void
 "notifyRemoval"(): void
 "createInstances"(arg0: (D)[]): void
 "stealInstance"(arg0: D): void
 "createInstance"(): D
}

export namespace $Instancer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instancer$Type<D> = ($Instancer<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instancer_<D> = $Instancer$Type<(D)>;
}}
declare module "packages/com/jozufozu/flywheel/api/$MaterialManager" {
import {$RenderLayer, $RenderLayer$Type} from "packages/com/jozufozu/flywheel/backend/$RenderLayer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$MaterialGroup, $MaterialGroup$Type} from "packages/com/jozufozu/flywheel/api/$MaterialGroup"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $MaterialManager {

 "defaultCutout"(): $MaterialGroup
 "getOriginCoordinate"(): $Vec3i
 "transparent"(arg0: $RenderType$Type): $MaterialGroup
 "defaultSolid"(): $MaterialGroup
 "defaultTransparent"(): $MaterialGroup
 "cutout"(arg0: $RenderType$Type): $MaterialGroup
 "solid"(arg0: $RenderType$Type): $MaterialGroup
 "state"(arg0: $RenderLayer$Type, arg1: $RenderType$Type): $MaterialGroup
}

export namespace $MaterialManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialManager$Type = ($MaterialManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialManager_ = $MaterialManager$Type;
}}
declare module "packages/com/jozufozu/flywheel/core/virtual/$VirtualRenderWorld" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FlywheelWorld, $FlywheelWorld$Type} from "packages/com/jozufozu/flywheel/api/$FlywheelWorld"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $VirtualRenderWorld extends $Level implements $FlywheelWorld {
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(arg0: $Level$Type)
constructor(arg0: $Level$Type, arg1: $Vec3i$Type)
constructor(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: $Vec3i$Type)

public "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
public "getScoreboard"(): $Scoreboard
public "getMinBuildHeight"(): integer
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getHeight"(): integer
public "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
public "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
public "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getSectionsCount"(): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "players"(): $List<(any)>
public "isLoaded"(arg0: $BlockPos$Type): boolean
public "getBlockState"(arg0: integer, arg1: integer, arg2: integer): $BlockState
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "sendBlockUpdated"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: integer): void
public "updateNeighbourForOutputSignal"(arg0: $BlockPos$Type, arg1: $Block$Type): void
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
public "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
public "getChunk"(arg0: integer, arg1: integer): $LevelChunk
public "getLightEngine"(): $LevelLightEngine
public "playSeededSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$Type<($SoundEvent$Type)>, arg5: $SoundSource$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $Holder$Type<($SoundEvent$Type)>, arg3: $SoundSource$Type, arg4: float, arg5: float, arg6: long): void
public "setBlockEntity"(arg0: $BlockEntity$Type): void
public "gatherChunkSourceStats"(): string
public "removeBlockEntity"(arg0: $BlockPos$Type): void
public "getEntity"(arg0: integer): $Entity
public "getMapData"(arg0: string): $MapItemSavedData
public "getFreeMapId"(): integer
public "setMapData"(arg0: string, arg1: $MapItemSavedData$Type): void
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
public "setBlockEntities"(arg0: $Collection$Type<($BlockEntity$Type)>): void
public "runLightEngine"(): void
public "actuallyGetChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getBiomeManager"(): $BiomeManager
public "getMaxBuildHeight"(): integer
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "getRecipeManager"(): $RecipeManager
public "getChunkAtImmediately"(arg0: integer, arg1: integer): $LevelChunk
public "getAnyChunkImmediately"(arg0: integer, arg1: integer): $ChunkAccess
public static "nextMultipleOf16"(arg0: integer): integer
public "clear"(): void
public "supportsFlywheel"(): boolean
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "scoreboard"(): $Scoreboard
get "minBuildHeight"(): integer
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "height"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
get "lightEngine"(): $LevelLightEngine
set "blockEntity"(value: $BlockEntity$Type)
get "freeMapId"(): integer
set "blockEntities"(value: $Collection$Type<($BlockEntity$Type)>)
get "biomeManager"(): $BiomeManager
get "maxBuildHeight"(): integer
get "chunkSource"(): $ChunkSource
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualRenderWorld$Type = ($VirtualRenderWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualRenderWorld_ = $VirtualRenderWorld$Type;
}}
declare module "packages/com/jozufozu/flywheel/mixin/$PausedPartialTickAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PausedPartialTickAccessor {

 "flywheel$getPausePartialTick"(): float

(): float
}

export namespace $PausedPartialTickAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PausedPartialTickAccessor$Type = ($PausedPartialTickAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PausedPartialTickAccessor_ = $PausedPartialTickAccessor$Type;
}}
declare module "packages/com/jozufozu/flywheel/util/box/$GridAlignedBB" {
import {$ImmutableBox, $ImmutableBox$Type} from "packages/com/jozufozu/flywheel/util/box/$ImmutableBox"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CoordinateConsumer, $CoordinateConsumer$Type} from "packages/com/jozufozu/flywheel/util/box/$CoordinateConsumer"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $GridAlignedBB implements $ImmutableBox {

constructor()
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "assign"(arg0: $AABB$Type): void
public "assign"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $GridAlignedBB
public "assign"(arg0: $ImmutableBox$Type): void
public "intersect"(arg0: $ImmutableBox$Type): $GridAlignedBB
public "setMin"(arg0: $Vec3i$Type): $GridAlignedBB
public "setMin"(arg0: integer, arg1: integer, arg2: integer): $GridAlignedBB
public "setMax"(arg0: $Vec3i$Type): $GridAlignedBB
public "setMax"(arg0: integer, arg1: integer, arg2: integer): $GridAlignedBB
public "setMinX"(arg0: integer): $GridAlignedBB
public "setMaxX"(arg0: integer): $GridAlignedBB
public "setMaxY"(arg0: integer): $GridAlignedBB
public "setMinZ"(arg0: integer): $GridAlignedBB
public "setMaxZ"(arg0: integer): $GridAlignedBB
public "setMinY"(arg0: integer): $GridAlignedBB
public "nextPowerOf2Centered"(): void
public "intersects"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "translate"(arg0: $Vec3i$Type): void
public "translate"(arg0: integer, arg1: integer, arg2: integer): void
public "sizeZ"(): integer
public "sizeY"(): integer
public "sizeX"(): integer
public "getMinY"(): integer
public "getMaxY"(): integer
public "sameAs"(arg0: $AABB$Type): boolean
public "sameAs"(arg0: $ImmutableBox$Type): boolean
public "forEachContained"(arg0: $CoordinateConsumer$Type): void
public "toAABB"(): $AABB
public "getMinX"(): integer
public "getMaxZ"(): integer
public "getMinZ"(): integer
public "getMaxX"(): integer
public static "containingAll"(arg0: $Collection$Type<($BlockPos$Type)>): $ImmutableBox
public "intersectAssign"(arg0: $ImmutableBox$Type): void
public "nextPowerOf2"(): void
public "mirrorAbout"(arg0: $Direction$Axis$Type): void
public static "ofRadius"(arg0: integer): $GridAlignedBB
public "unionAssign"(arg0: $AABB$Type): void
public "unionAssign"(arg0: $ImmutableBox$Type): void
public "fixMinMax"(): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "contains"(arg0: $ImmutableBox$Type): boolean
public static "from"(arg0: $SectionPos$Type): $GridAlignedBB
public static "from"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $GridAlignedBB
public static "from"(arg0: $AABB$Type): $GridAlignedBB
public static "from"(arg0: $BlockPos$Type): $GridAlignedBB
public static "from"(arg0: integer, arg1: integer): $GridAlignedBB
public "empty"(): boolean
public "copy"(): $GridAlignedBB
public "grow"(arg0: integer): void
public "grow"(arg0: integer, arg1: integer, arg2: integer): void
public "union"(arg0: $ImmutableBox$Type): $ImmutableBox
public "volume"(): integer
public "intersects"(arg0: $ImmutableBox$Type): boolean
public "sameAs"(arg0: $ImmutableBox$Type, arg1: integer): boolean
public "hasPowerOf2Sides"(): boolean
public "isContainedBy"(arg0: $GridAlignedBB$Type): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
set "min"(value: $Vec3i$Type)
set "max"(value: $Vec3i$Type)
set "minX"(value: integer)
set "maxX"(value: integer)
set "maxY"(value: integer)
set "minZ"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
get "minY"(): integer
get "maxY"(): integer
get "minX"(): integer
get "maxZ"(): integer
get "minZ"(): integer
get "maxX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridAlignedBB$Type = ($GridAlignedBB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridAlignedBB_ = $GridAlignedBB$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/model/$DirectVertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $DirectVertexConsumer implements $VertexConsumer {
readonly "format": $VertexFormat
readonly "startPos": integer

constructor(arg0: $ByteBuffer$Type, arg1: $VertexFormat$Type, arg2: integer)

public "endVertex"(): void
public "uv"(arg0: float, arg1: float): $VertexConsumer
public "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
public "uv2"(arg0: integer, arg1: integer): $VertexConsumer
public "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "unsetDefaultColor"(): void
public "hasOverlay"(): boolean
public "split"(arg0: integer): $DirectVertexConsumer
public "memSetZero"(): void
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "uv2"(arg0: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "color"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectVertexConsumer$Type = ($DirectVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectVertexConsumer_ = $DirectVertexConsumer$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/blockentity/$BlockEntityTypeExtension" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityInstancingController, $BlockEntityInstancingController$Type} from "packages/com/jozufozu/flywheel/backend/instancing/blockentity/$BlockEntityInstancingController"

export interface $BlockEntityTypeExtension<T extends $BlockEntity> {

 "flywheel$getInstancingController"(): $BlockEntityInstancingController<(any)>
 "flywheel$setInstancingController"(arg0: $BlockEntityInstancingController$Type<(any)>): void
}

export namespace $BlockEntityTypeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeExtension$Type<T> = ($BlockEntityTypeExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeExtension_<T> = $BlockEntityTypeExtension$Type<(T)>;
}}
declare module "packages/com/jozufozu/flywheel/util/box/$ImmutableBox" {
import {$GridAlignedBB, $GridAlignedBB$Type} from "packages/com/jozufozu/flywheel/util/box/$GridAlignedBB"
import {$CoordinateConsumer, $CoordinateConsumer$Type} from "packages/com/jozufozu/flywheel/util/box/$CoordinateConsumer"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $ImmutableBox {

 "intersect"(arg0: $ImmutableBox$Type): $GridAlignedBB
 "volume"(): integer
 "intersects"(arg0: $ImmutableBox$Type): boolean
 "intersects"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "sizeZ"(): integer
 "sizeY"(): integer
 "sizeX"(): integer
 "getMinY"(): integer
 "getMaxY"(): integer
 "sameAs"(arg0: $ImmutableBox$Type): boolean
 "sameAs"(arg0: $AABB$Type): boolean
 "sameAs"(arg0: $ImmutableBox$Type, arg1: integer): boolean
 "hasPowerOf2Sides"(): boolean
 "isContainedBy"(arg0: $GridAlignedBB$Type): boolean
 "forEachContained"(arg0: $CoordinateConsumer$Type): void
 "toAABB"(): $AABB
 "getMinX"(): integer
 "getMaxZ"(): integer
 "getMinZ"(): integer
 "getMaxX"(): integer
 "contains"(arg0: $ImmutableBox$Type): boolean
 "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
 "empty"(): boolean
 "copy"(): $GridAlignedBB
 "union"(arg0: $ImmutableBox$Type): $ImmutableBox
}

export namespace $ImmutableBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableBox$Type = ($ImmutableBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableBox_ = $ImmutableBox$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/instancing/$DrawBuffer" {
import {$DirectVertexConsumer, $DirectVertexConsumer$Type} from "packages/com/jozufozu/flywheel/backend/model/$DirectVertexConsumer"
import {$BufferBuilderExtension, $BufferBuilderExtension$Type} from "packages/com/jozufozu/flywheel/backend/model/$BufferBuilderExtension"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $DrawBuffer {

constructor(arg0: $RenderType$Type)

public "inject"(arg0: $BufferBuilderExtension$Type): void
public "begin"(arg0: integer): $DirectVertexConsumer
public "reset"(): void
public "hasVertices"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawBuffer$Type = ($DrawBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawBuffer_ = $DrawBuffer$Type;
}}
declare module "packages/com/jozufozu/flywheel/backend/model/$BufferBuilderExtension" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export interface $BufferBuilderExtension {

 "flywheel$freeBuffer"(): void
 "flywheel$getVertices"(): integer
 "flywheel$appendBufferUnsafe"(arg0: $ByteBuffer$Type): void
 "flywheel$injectForRender"(arg0: $ByteBuffer$Type, arg1: $VertexFormat$Type, arg2: integer): void
}

export namespace $BufferBuilderExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExtension$Type = ($BufferBuilderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderExtension_ = $BufferBuilderExtension$Type;
}}
