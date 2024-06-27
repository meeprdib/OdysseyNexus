declare module "packages/software/bernie/geckolib/core/animation/$EasingType" {
import {$Double2DoubleFunction, $Double2DoubleFunction$Type} from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$AnimationPoint, $AnimationPoint$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EasingType {

 "apply"(arg0: $AnimationPoint$Type): double
 "apply"(arg0: $AnimationPoint$Type, arg1: double, arg2: double): double
 "buildTransformer"(arg0: double): $Double2DoubleFunction

(arg0: double): $Double2DoubleFunction
}

export namespace $EasingType {
const EASING_TYPES: $Map<(string), ($EasingType)>
const LINEAR: $EasingType
const STEP: $EasingType
const EASE_IN_SINE: $EasingType
const EASE_OUT_SINE: $EasingType
const EASE_IN_OUT_SINE: $EasingType
const EASE_IN_QUAD: $EasingType
const EASE_OUT_QUAD: $EasingType
const EASE_IN_OUT_QUAD: $EasingType
const EASE_IN_CUBIC: $EasingType
const EASE_OUT_CUBIC: $EasingType
const EASE_IN_OUT_CUBIC: $EasingType
const EASE_IN_QUART: $EasingType
const EASE_OUT_QUART: $EasingType
const EASE_IN_OUT_QUART: $EasingType
const EASE_IN_QUINT: $EasingType
const EASE_OUT_QUINT: $EasingType
const EASE_IN_OUT_QUINT: $EasingType
const EASE_IN_EXPO: $EasingType
const EASE_OUT_EXPO: $EasingType
const EASE_IN_OUT_EXPO: $EasingType
const EASE_IN_CIRC: $EasingType
const EASE_OUT_CIRC: $EasingType
const EASE_IN_OUT_CIRC: $EasingType
const EASE_IN_BACK: $EasingType
const EASE_OUT_BACK: $EasingType
const EASE_IN_OUT_BACK: $EasingType
const EASE_IN_ELASTIC: $EasingType
const EASE_OUT_ELASTIC: $EasingType
const EASE_IN_OUT_ELASTIC: $EasingType
const EASE_IN_BOUNCE: $EasingType
const EASE_OUT_BOUNCE: $EasingType
const EASE_IN_OUT_BOUNCE: $EasingType
const CATMULLROM: $EasingType
function pow(arg0: double): $Double2DoubleFunction
function exp(arg0: double): double
function register(arg0: string, arg1: $EasingType$Type): $EasingType
function step(arg0: double): $Double2DoubleFunction
function back(arg0: double): $Double2DoubleFunction
function fromString(arg0: string): $EasingType
function fromJson(arg0: $JsonElement$Type): $EasingType
function bounce(arg0: double): $Double2DoubleFunction
function circle(arg0: double): double
function easeIn(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function easeInOut(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function easeOut(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function linear(arg0: double): double
function linear(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function lerpWithOverride(arg0: $AnimationPoint$Type, arg1: $EasingType$Type): double
function sine(arg0: double): double
function stepPositive(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function quadratic(arg0: double): double
function elastic(arg0: double): $Double2DoubleFunction
function stepNonNegative(arg0: $Double2DoubleFunction$Type): $Double2DoubleFunction
function catmullRom(arg0: double): double
function cubic(arg0: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasingType$Type = ($EasingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasingType_ = $EasingType$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$RawAnimation$Stage" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"

export class $RawAnimation$Stage extends $Record {

constructor(arg0: string, arg1: $Animation$LoopType$Type)
constructor(animationName: string, loopType: $Animation$LoopType$Type, additionalTicks: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animationName"(): string
public "additionalTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Stage$Type = ($RawAnimation$Stage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation$Stage_ = $RawAnimation$Stage$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"

export interface $GeoAnimatable {

 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "getBoneResetTime"(): double
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getTick"(arg0: any): double
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoAnimatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoAnimatable$Type = ($GeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoAnimatable_ = $GeoAnimatable$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$AnimationStateHandler" {
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"

export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $AnimationState$Type<(A)>): $PlayState

(arg0: $AnimationState$Type<(A)>): $PlayState
}

export namespace $AnimationController$AnimationStateHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$AnimationStateHandler$Type<A> = ($AnimationController$AnimationStateHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$AnimationStateHandler_<A> = $AnimationController$AnimationStateHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoBone" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$GeoCube, $GeoCube$Type} from "packages/software/bernie/geckolib/cache/object/$GeoCube"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"

export class $GeoBone implements $CoreGeoBone {

constructor(arg0: $GeoBone$Type, arg1: string, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "setHidden"(arg0: boolean): void
public "setModelSpaceMatrix"(arg0: $Matrix4f$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$Type): void
public "getInflate"(): double
public "getPosZ"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "setScaleX"(arg0: float): void
public "setScaleY"(arg0: float): void
public "getWorldPosition"(): $Vector3d
public "getPosX"(): float
public "getPosY"(): float
public "getMirror"(): boolean
public "markPositionAsChanged"(): void
public "markRotationAsChanged"(): void
public "saveInitialSnapshot"(): void
public "getModelRotationMatrix"(): $Matrix4f
public "addRotationOffsetFromBone"(arg0: $GeoBone$Type): void
public "setTrackingMatrices"(arg0: boolean): void
public "getModelSpaceMatrix"(): $Matrix4f
public "getLocalSpaceMatrix"(): $Matrix4f
public "getWorldSpaceMatrix"(): $Matrix4f
public "setWorldSpaceNormal"(arg0: $Matrix3f$Type): void
public "getWorldSpaceNormal"(): $Matrix3f
public "getRotZ"(): float
public "getScaleZ"(): float
public "setRotX"(arg0: float): void
public "getRotX"(): float
public "getRotY"(): float
public "setPivotZ"(arg0: float): void
public "resetStateChanges"(): void
public "setPivotX"(arg0: float): void
public "setScaleZ"(arg0: float): void
public "markScaleAsChanged"(): void
public "getPivotX"(): float
public "getPivotZ"(): float
public "setChildrenHidden"(arg0: boolean): void
public "hasRotationChanged"(): boolean
public "getInitialSnapshot"(): $BoneSnapshot
public "hasPositionChanged"(): boolean
public "setPivotY"(arg0: float): void
public "getPivotY"(): float
public "setRotY"(arg0: float): void
public "setRotZ"(arg0: float): void
public "hasScaleChanged"(): boolean
public "isTrackingMatrices"(): boolean
public "getCubes"(): $List<($GeoCube)>
public "isHidingChildren"(): boolean
public "getChildBones"(): $List<($GeoBone)>
public "setPosX"(arg0: float): void
public "setPosY"(arg0: float): void
public "setPosZ"(arg0: float): void
public "shouldNeverRender"(): boolean
public "getReset"(): boolean
public "getScaleVector"(): $Vector3d
public "getPositionVector"(): $Vector3d
public "getRotationVector"(): $Vector3d
public "getLocalPosition"(): $Vector3d
public "setModelPosition"(arg0: $Vector3d$Type): void
public "getModelPosition"(): $Vector3d
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "saveSnapshot"(): $BoneSnapshot
get "name"(): string
get "hidden"(): boolean
set "hidden"(value: boolean)
set "modelSpaceMatrix"(value: $Matrix4f$Type)
set "localSpaceMatrix"(value: $Matrix4f$Type)
set "worldSpaceMatrix"(value: $Matrix4f$Type)
get "inflate"(): double
get "posZ"(): float
get "scaleX"(): float
get "scaleY"(): float
set "scaleX"(value: float)
set "scaleY"(value: float)
get "worldPosition"(): $Vector3d
get "posX"(): float
get "posY"(): float
get "mirror"(): boolean
get "modelRotationMatrix"(): $Matrix4f
set "trackingMatrices"(value: boolean)
get "modelSpaceMatrix"(): $Matrix4f
get "localSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
set "worldSpaceNormal"(value: $Matrix3f$Type)
get "worldSpaceNormal"(): $Matrix3f
get "rotZ"(): float
get "scaleZ"(): float
set "rotX"(value: float)
get "rotX"(): float
get "rotY"(): float
set "pivotZ"(value: float)
set "pivotX"(value: float)
set "scaleZ"(value: float)
get "pivotX"(): float
get "pivotZ"(): float
set "childrenHidden"(value: boolean)
get "initialSnapshot"(): $BoneSnapshot
set "pivotY"(value: float)
get "pivotY"(): float
set "rotY"(value: float)
set "rotZ"(value: float)
get "trackingMatrices"(): boolean
get "cubes"(): $List<($GeoCube)>
get "hidingChildren"(): boolean
get "childBones"(): $List<($GeoBone)>
set "posX"(value: float)
set "posY"(value: float)
set "posZ"(value: float)
get "reset"(): boolean
get "scaleVector"(): $Vector3d
get "positionVector"(): $Vector3d
get "rotationVector"(): $Vector3d
get "localPosition"(): $Vector3d
set "modelPosition"(value: $Vector3d$Type)
get "modelPosition"(): $Vector3d
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$Type = ($GeoBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBone_ = $GeoBone$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent" {
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent"

export class $CustomInstructionKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($CustomInstructionKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: $CustomInstructionKeyframeData$Type)

public "getKeyframeData"(): $CustomInstructionKeyframeData
get "keyframeData"(): $CustomInstructionKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeEvent$Type<T> = ($CustomInstructionKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeEvent_<T> = $CustomInstructionKeyframeEvent$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimationController$State extends $Enum<($AnimationController$State)> {
static readonly "RUNNING": $AnimationController$State
static readonly "TRANSITIONING": $AnimationController$State
static readonly "PAUSED": $AnimationController$State
static readonly "STOPPED": $AnimationController$State


public static "values"(): ($AnimationController$State)[]
public static "valueOf"(arg0: string): $AnimationController$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$State$Type = (("running") | ("paused") | ("stopped") | ("transitioning")) | ($AnimationController$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$State_ = $AnimationController$State$Type;
}}
declare module "packages/software/bernie/geckolib/core/object/$Color" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Color extends $Record {
static readonly "WHITE": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "GRAY": $Color
static readonly "DARK_GRAY": $Color
static readonly "BLACK": $Color
static readonly "RED": $Color
static readonly "PINK": $Color
static readonly "ORANGE": $Color
static readonly "YELLOW": $Color
static readonly "GREEN": $Color
static readonly "MAGENTA": $Color
static readonly "CYAN": $Color
static readonly "BLUE": $Color

constructor(argbInt: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "brighter"(arg0: double): $Color
public "darker"(arg0: float): $Color
public "getAlpha"(): integer
public static "ofRGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Color
public static "ofRGBA"(arg0: float, arg1: float, arg2: float, arg3: float): $Color
public "getAlphaFloat"(): float
public "getRedFloat"(): float
public "getGreenFloat"(): float
public "getBlueFloat"(): float
public "getColor"(): integer
public static "ofOpaque"(arg0: integer): $Color
public "argbInt"(): integer
public static "ofRGB"(arg0: integer, arg1: integer, arg2: integer): $Color
public static "ofRGB"(arg0: float, arg1: float, arg2: float): $Color
public static "HSBtoARGB"(arg0: float, arg1: float, arg2: float): integer
public static "ofHSB"(arg0: float, arg1: float, arg2: float): $Color
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "alpha"(): integer
get "alphaFloat"(): float
get "redFloat"(): float
get "greenFloat"(): float
get "blueFloat"(): float
get "color"(): integer
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
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController" {
import {$EasingType, $EasingType$Type} from "packages/software/bernie/geckolib/core/animation/$EasingType"
import {$AnimationController$State, $AnimationController$State$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$State"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimationController$CustomKeyframeHandler, $AnimationController$CustomKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$CustomKeyframeHandler"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$CoreGeoModel, $CoreGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$AnimationStateHandler"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AnimationController$ParticleKeyframeHandler, $AnimationController$ParticleKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$ParticleKeyframeHandler"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$AnimationController$SoundKeyframeHandler, $AnimationController$SoundKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$SoundKeyframeHandler"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$BoneAnimationQueue, $BoneAnimationQueue$Type} from "packages/software/bernie/geckolib/core/keyframe/$BoneAnimationQueue"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationController<T extends $GeoAnimatable> {

constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler$Type<(T)>)
constructor(arg0: T, arg1: string, arg2: integer, arg3: $AnimationController$AnimationStateHandler$Type<(T)>)
constructor(arg0: T, arg1: string, arg2: $AnimationController$AnimationStateHandler$Type<(T)>)
constructor(arg0: T, arg1: integer, arg2: $AnimationController$AnimationStateHandler$Type<(T)>)

public "getName"(): string
public "stop"(): void
public "process"(arg0: $CoreGeoModel$Type<(T)>, arg1: $AnimationState$Type<(T)>, arg2: $Map$Type<(string), ($CoreGeoBone$Type)>, arg3: $Map$Type<(string), ($BoneSnapshot$Type)>, arg4: double, arg5: boolean): void
public "tryTriggerAnimation"(arg0: string): boolean
public "forceAnimationReset"(): void
public "setParticleKeyframeHandler"(arg0: $AnimationController$ParticleKeyframeHandler$Type<(T)>): $AnimationController<(T)>
public "setOverrideEasingType"(arg0: $EasingType$Type): $AnimationController<(T)>
public "setOverrideEasingTypeFunction"(arg0: $Function$Type<(T), ($EasingType$Type)>): $AnimationController<(T)>
public "receiveTriggeredAnimations"(): $AnimationController<(T)>
public "getCurrentAnimation"(): $AnimationProcessor$QueuedAnimation
public "getBoneAnimationQueues"(): $Map<(string), ($BoneAnimationQueue)>
public "setSoundKeyframeHandler"(arg0: $AnimationController$SoundKeyframeHandler$Type<(T)>): $AnimationController<(T)>
public "setAnimationSpeedHandler"(arg0: $Function$Type<(T), (double)>): $AnimationController<(T)>
/**
 * 
 * @deprecated
 */
public "setTransitionLength"(arg0: integer): void
public "getCurrentRawAnimation"(): $RawAnimation
public "hasAnimationFinished"(): boolean
public "isPlayingTriggeredAnimation"(): boolean
public "getAnimationState"(): $AnimationController$State
public "setAnimation"(arg0: $RawAnimation$Type): void
public "getAnimationSpeed"(): double
public "setCustomInstructionKeyframeHandler"(arg0: $AnimationController$CustomKeyframeHandler$Type<(T)>): $AnimationController<(T)>
public "transitionLength"(arg0: integer): $AnimationController<(T)>
public "setAnimationSpeed"(arg0: double): $AnimationController<(T)>
public "triggerableAnim"(arg0: string, arg1: $RawAnimation$Type): $AnimationController<(T)>
get "name"(): string
set "particleKeyframeHandler"(value: $AnimationController$ParticleKeyframeHandler$Type<(T)>)
set "overrideEasingType"(value: $EasingType$Type)
set "overrideEasingTypeFunction"(value: $Function$Type<(T), ($EasingType$Type)>)
get "currentAnimation"(): $AnimationProcessor$QueuedAnimation
get "boneAnimationQueues"(): $Map<(string), ($BoneAnimationQueue)>
set "soundKeyframeHandler"(value: $AnimationController$SoundKeyframeHandler$Type<(T)>)
set "animationSpeedHandler"(value: $Function$Type<(T), (double)>)
get "currentRawAnimation"(): $RawAnimation
get "playingTriggeredAnimation"(): boolean
get "animationState"(): $AnimationController$State
set "animation"(value: $RawAnimation$Type)
get "animationSpeed"(): double
set "customInstructionKeyframeHandler"(value: $AnimationController$CustomKeyframeHandler$Type<(T)>)
set "animationSpeed"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$Type<T> = ($AnimationController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController_<T> = $AnimationController$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoCube" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GeoQuad, $GeoQuad$Type} from "packages/software/bernie/geckolib/cache/object/$GeoQuad"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $GeoCube extends $Record {

constructor(quads: ($GeoQuad$Type)[], pivot: $Vec3$Type, rotation: $Vec3$Type, size: $Vec3$Type, inflate: double, mirror: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "inflate"(): double
public "size"(): $Vec3
public "pivot"(): $Vec3
public "quads"(): ($GeoQuad)[]
public "mirror"(): boolean
public "rotation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$Type = ($GeoCube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoCube_ = $GeoCube$Type;
}}
declare module "packages/software/bernie/geckolib/renderer/$GeoEntityRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$GeoRenderLayer, $GeoRenderLayer$Type} from "packages/software/bernie/geckolib/renderer/layer/$GeoRenderLayer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$GeoRenderer, $GeoRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoRenderer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import {$Color, $Color$Type} from "packages/software/bernie/geckolib/core/object/$Color"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$GeoQuad, $GeoQuad$Type} from "packages/software/bernie/geckolib/cache/object/$GeoQuad"
import {$GeoCube, $GeoCube$Type} from "packages/software/bernie/geckolib/cache/object/$GeoCube"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GeoEntityRenderer<T extends ($Entity) & ($GeoAnimatable)> extends $EntityRenderer<(T)> implements $GeoRenderer<(T)> {
 "shadowRadius": float

constructor(arg0: $EntityRendererProvider$Context$Type, arg1: $GeoModel$Type<(T)>)

public "updateAnimatedTextureFrame"(arg0: T): void
public "firePostRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): void
public "getNameRenderCutoffDistance"(arg0: T): double
public "fireCompileRenderLayersEvent"(): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "m_6512_"(arg0: T): boolean
public "preRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getInstanceId"(arg0: T): long
public "withScale"(arg0: float): $GeoEntityRenderer<(T)>
public "withScale"(arg0: float, arg1: float): $GeoEntityRenderer<(T)>
public "addRenderLayer"(arg0: $GeoRenderLayer$Type<(T)>): $GeoEntityRenderer<(T)>
public "actuallyRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "getGeoModel"(): $GeoModel<(T)>
public "applyRenderLayers"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "renderLeash"<E extends $Entity, M extends $Mob>(arg0: M, arg1: float, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: E): void
public "renderFinal"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
public "renderRecursively"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "isShaking"(arg0: T): boolean
public "getPackedOverlay"(arg0: T, arg1: float): integer
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "firePreRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): boolean
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$Type, arg3: T, arg4: $BakedGeoModel$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "applyRenderLayersForBone"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$Type, arg1: $Matrix4f$Type, arg2: $Vector3f$Type, arg3: $VertexConsumer$Type, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "preApplyRenderLayers"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "postRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "defaultRender"(arg0: $PoseStack$Type, arg1: T, arg2: $MultiBufferSource$Type, arg3: $RenderType$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: float, arg7: integer): void
public "renderCubesOfBone"(arg0: $PoseStack$Type, arg1: $GeoBone$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "renderChildBones"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "reRender"(arg0: $BakedGeoModel$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: T, arg4: $RenderType$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderCube"(arg0: $PoseStack$Type, arg1: $GeoCube$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "getRenderType"(arg0: T, arg1: $ResourceLocation$Type, arg2: $MultiBufferSource$Type, arg3: float): $RenderType
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
get "geoModel"(): $GeoModel<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntityRenderer$Type<T> = ($GeoEntityRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoEntityRenderer_<T> = $GeoEntityRenderer$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"

export class $CustomInstructionKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: string)

public "hashCode"(): integer
public "getInstructions"(): string
get "instructions"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeData$Type = ($CustomInstructionKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeData_ = $CustomInstructionKeyframeData$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$Animation" {
import {$BoneAnimation, $BoneAnimation$Type} from "packages/software/bernie/geckolib/core/keyframe/$BoneAnimation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"
import {$Animation$Keyframes, $Animation$Keyframes$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$Keyframes"

export class $Animation extends $Record {

constructor(name: string, length: double, loopType: $Animation$LoopType$Type, boneAnimations: ($BoneAnimation$Type)[], keyFrames: $Animation$Keyframes$Type)

public "name"(): string
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "keyFrames"(): $Animation$Keyframes
public "boneAnimations"(): ($BoneAnimation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$BoneAnimation" {
import {$KeyframeStack, $KeyframeStack$Type} from "packages/software/bernie/geckolib/core/keyframe/$KeyframeStack"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"
import {$IValue, $IValue$Type} from "packages/com/eliotlash/mclib/math/$IValue"

export class $BoneAnimation extends $Record {

constructor(boneName: string, rotationKeyFrames: $KeyframeStack$Type<($Keyframe$Type<($IValue$Type)>)>, positionKeyFrames: $KeyframeStack$Type<($Keyframe$Type<($IValue$Type)>)>, scaleKeyFrames: $KeyframeStack$Type<($Keyframe$Type<($IValue$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "boneName"(): string
public "rotationKeyFrames"(): $KeyframeStack<($Keyframe<($IValue)>)>
public "positionKeyFrames"(): $KeyframeStack<($Keyframe<($IValue)>)>
public "scaleKeyFrames"(): $KeyframeStack<($Keyframe<($IValue)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimation$Type = ($BoneAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimation_ = $BoneAnimation$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export class $KeyFrameEvent<T extends $GeoAnimatable, E extends $KeyFrameData> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: E)

public "getAnimationTick"(): double
public "getController"(): $AnimationController<(T)>
public "getAnimatable"(): T
public "getKeyframeData"(): E
get "animationTick"(): double
get "controller"(): $AnimationController<(T)>
get "animatable"(): T
get "keyframeData"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyFrameEvent$Type<T, E> = ($KeyFrameEvent<(T), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyFrameEvent_<T, E> = $KeyFrameEvent$Type<(T), (E)>;
}}
declare module "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimatableManager, $AnimatableManager$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export class $AnimatableInstanceCache {

constructor(arg0: $GeoAnimatable$Type)

public "getDataPoint"<D>(arg0: long, arg1: $DataTicket$Type<(D)>): D
public "addDataPoint"<D>(arg0: long, arg1: $DataTicket$Type<(D)>, arg2: D): void
public "getManagerForId"<T extends $GeoAnimatable>(arg0: long): $AnimatableManager<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableInstanceCache$Type = ($AnimatableInstanceCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableInstanceCache_ = $AnimatableInstanceCache$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$Animation$LoopType" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Animation$LoopType {

 "shouldPlayAgain"(arg0: $GeoAnimatable$Type, arg1: $AnimationController$Type<(any)>, arg2: $Animation$Type): boolean

(arg0: string, arg1: $Animation$LoopType$Type): $Animation$LoopType
}

export namespace $Animation$LoopType {
const LOOP_TYPES: $Map<(string), ($Animation$LoopType)>
const DEFAULT: $Animation$LoopType
const PLAY_ONCE: $Animation$LoopType
const HOLD_ON_LAST_FRAME: $Animation$LoopType
const LOOP: $Animation$LoopType
function register(arg0: string, arg1: $Animation$LoopType$Type): $Animation$LoopType
function fromString(arg0: string): $Animation$LoopType
function fromJson(arg0: $JsonElement$Type): $Animation$LoopType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$LoopType$Type = ($Animation$LoopType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$LoopType_ = $Animation$LoopType$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel" {
import {$CoreBakedGeoModel, $CoreBakedGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"
import {$AnimationProcessor, $AnimationProcessor$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor"

export interface $CoreGeoModel<E extends $GeoAnimatable> {

 "getBakedGeoModel"(arg0: string): $CoreBakedGeoModel
 "applyMolangQueries"(arg0: E, arg1: double): void
 "getAnimation"(arg0: E, arg1: string): $Animation
 "handleAnimations"(arg0: E, arg1: long, arg2: $AnimationState$Type<(E)>): void
 "getBone"(arg0: string): $Optional<(any)>
 "setCustomAnimations"(arg0: E, arg1: long, arg2: $AnimationState$Type<(E)>): void
 "getAnimationProcessor"(): $AnimationProcessor<(E)>
}

export namespace $CoreGeoModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreGeoModel$Type<E> = ($CoreGeoModel<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreGeoModel_<E> = $CoreGeoModel$Type<(E)>;
}}
declare module "packages/software/bernie/geckolib/model/$GeoModel" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CoreGeoModel, $CoreGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$AnimationProcessor, $AnimationProcessor$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"

export class $GeoModel<T extends $GeoAnimatable> implements $CoreGeoModel<(T)> {

constructor()

public "getBakedGeoModel"(arg0: string): $BakedGeoModel
public "crashIfBoneMissing"(): boolean
public "applyMolangQueries"(arg0: T, arg1: double): void
public "addAdditionalStateData"(arg0: T, arg1: long, arg2: $BiConsumer$Type<($DataTicket$Type<(T)>), (T)>): void
public "getAnimation"(arg0: T, arg1: string): $Animation
public "getBakedModel"(arg0: $ResourceLocation$Type): $BakedGeoModel
public "handleAnimations"(arg0: T, arg1: long, arg2: $AnimationState$Type<(T)>): void
public "getModelResource"(arg0: T): $ResourceLocation
public "getTextureResource"(arg0: T): $ResourceLocation
public "getBone"(arg0: string): $Optional<($GeoBone)>
public "getAnimationResource"(arg0: T): $ResourceLocation
public "getAnimationProcessor"(): $AnimationProcessor<(T)>
public "getRenderType"(arg0: T, arg1: $ResourceLocation$Type): $RenderType
public "setCustomAnimations"(arg0: T, arg1: long, arg2: $AnimationState$Type<(T)>): void
get "animationProcessor"(): $AnimationProcessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoModel$Type<T> = ($GeoModel<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoModel_<T> = $GeoModel$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer" {
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoCube, $GeoCube$Type} from "packages/software/bernie/geckolib/cache/object/$GeoCube"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$GeoRenderLayer, $GeoRenderLayer$Type} from "packages/software/bernie/geckolib/renderer/layer/$GeoRenderLayer"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GeoRenderer, $GeoRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoRenderer"
import {$Color, $Color$Type} from "packages/software/bernie/geckolib/core/object/$Color"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$GeoQuad, $GeoQuad$Type} from "packages/software/bernie/geckolib/cache/object/$GeoQuad"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $GeoArmorRenderer<T extends ($Item) & ($GeoItem)> extends $HumanoidModel<(any)> implements $GeoRenderer<(T)> {
static readonly "OVERLAY_SCALE": float
static readonly "HAT_OVERLAY_SCALE": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "TOOT_HORN_XROT_BASE": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "head": $ModelPart
readonly "hat": $ModelPart
readonly "body": $ModelPart
readonly "rightArm": $ModelPart
readonly "leftArm": $ModelPart
readonly "rightLeg": $ModelPart
readonly "leftLeg": $ModelPart
 "leftArmPose": $HumanoidModel$ArmPose
 "rightArmPose": $HumanoidModel$ArmPose
 "crouching": boolean
 "swimAmount": float
readonly "scaleHead": boolean
readonly "babyYHeadOffset": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
readonly "babyBodyScale": float
readonly "bodyYOffset": float
 "attackTime": float
 "riding": boolean
 "young": boolean

constructor(arg0: $GeoModel$Type<(T)>)

public "renderToBuffer"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "firePostRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): void
public "fireCompileRenderLayersEvent"(): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "setAllVisible"(arg0: boolean): void
public "getCurrentEntity"(): $Entity
public "preRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getInstanceId"(arg0: T): long
public "withScale"(arg0: float, arg1: float): $GeoArmorRenderer<(T)>
public "withScale"(arg0: float): $GeoArmorRenderer<(T)>
public "addRenderLayer"(arg0: $GeoRenderLayer$Type<(T)>): $GeoArmorRenderer<(T)>
public "actuallyRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "getGeoModel"(): $GeoModel<(T)>
public "getAnimatable"(): T
public "renderRecursively"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "firePreRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): boolean
public "prepForRender"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): void
public "getCurrentStack"(): $ItemStack
public "getHeadBone"(): $GeoBone
public "getRightBootBone"(): $GeoBone
public "getRightLegBone"(): $GeoBone
public "getRightArmBone"(): $GeoBone
public "scaleModelForBaby"(arg0: $PoseStack$Type, arg1: T, arg2: float, arg3: boolean): void
public "getBodyBone"(): $GeoBone
public "getLeftArmBone"(): $GeoBone
public "getLeftLegBone"(): $GeoBone
public "getLeftBootBone"(): $GeoBone
public "getCurrentSlot"(): $EquipmentSlot
public "applyBoneVisibilityByPart"(arg0: $EquipmentSlot$Type, arg1: $ModelPart$Type, arg2: $HumanoidModel$Type<(any)>): void
public "getRenderType"(arg0: T, arg1: $ResourceLocation$Type, arg2: $MultiBufferSource$Type, arg3: float): $RenderType
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$Type, arg3: T, arg4: $BakedGeoModel$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "applyRenderLayersForBone"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$Type, arg1: $Matrix4f$Type, arg2: $Vector3f$Type, arg3: $VertexConsumer$Type, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "preApplyRenderLayers"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "postRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "defaultRender"(arg0: $PoseStack$Type, arg1: T, arg2: $MultiBufferSource$Type, arg3: $RenderType$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: float, arg7: integer): void
public "applyRenderLayers"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "renderFinal"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
public "renderCubesOfBone"(arg0: $PoseStack$Type, arg1: $GeoBone$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "renderChildBones"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
/**
 * 
 * @deprecated
 */
public "getPackedOverlay"(arg0: T, arg1: float): integer
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "reRender"(arg0: $BakedGeoModel$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: T, arg4: $RenderType$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderCube"(arg0: $PoseStack$Type, arg1: $GeoCube$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "getTextureLocation"(arg0: T): $ResourceLocation
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
set "allVisible"(value: boolean)
get "currentEntity"(): $Entity
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "currentStack"(): $ItemStack
get "headBone"(): $GeoBone
get "rightBootBone"(): $GeoBone
get "rightLegBone"(): $GeoBone
get "rightArmBone"(): $GeoBone
get "bodyBone"(): $GeoBone
get "leftArmBone"(): $GeoBone
get "leftLegBone"(): $GeoBone
get "leftBootBone"(): $GeoBone
get "currentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoArmorRenderer$Type<T> = ($GeoArmorRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoArmorRenderer_<T> = $GeoArmorRenderer$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$SoundKeyframeHandler" {
import {$SoundKeyframeEvent, $SoundKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$SoundKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $SoundKeyframeEvent$Type<(A)>): void

(arg0: $SoundKeyframeEvent$Type<(A)>): void
}

export namespace $AnimationController$SoundKeyframeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$SoundKeyframeHandler$Type<A> = ($AnimationController$SoundKeyframeHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$SoundKeyframeHandler_<A> = $AnimationController$SoundKeyframeHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"

export class $ParticleKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: string, arg2: string, arg3: string)

public "hashCode"(): integer
public "script"(): string
public "getLocator"(): string
public "getEffect"(): string
get "locator"(): string
get "effect"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeData$Type = ($ParticleKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeData_ = $ParticleKeyframeData$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$AnimationPointQueue" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$AnimationPoint, $AnimationPoint$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint"

export class $AnimationPointQueue extends $LinkedList<($AnimationPoint)> {

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPointQueue$Type = ($AnimationPointQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPointQueue_ = $AnimationPointQueue$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData" {
import {$KeyFrameData, $KeyFrameData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"

export class $SoundKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: string)

public "hashCode"(): integer
public "getSound"(): string
get "sound"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeData$Type = ($SoundKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeData_ = $SoundKeyframeData$Type;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoVertex" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $GeoVertex extends $Record {

constructor(arg0: double, arg1: double, arg2: double)
constructor(position: $Vector3f$Type, texU: float, texV: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(arg0: float, arg1: float): $GeoVertex
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$Type = ($GeoVertex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoVertex_ = $GeoVertex$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"

export class $AnimationPoint extends $Record {

constructor(keyFrame: $Keyframe$Type<(any)>, currentTick: double, transitionLength: double, animationStartValue: double, animationEndValue: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "currentTick"(): double
public "animationStartValue"(): double
public "transitionLength"(): double
public "keyFrame"(): $Keyframe<(any)>
public "animationEndValue"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPoint$Type = ($AnimationPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPoint_ = $AnimationPoint$Type;
}}
declare module "packages/software/bernie/geckolib/renderer/$GeoRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$GeoRenderLayer, $GeoRenderLayer$Type} from "packages/software/bernie/geckolib/renderer/layer/$GeoRenderLayer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Color, $Color$Type} from "packages/software/bernie/geckolib/core/object/$Color"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$GeoQuad, $GeoQuad$Type} from "packages/software/bernie/geckolib/cache/object/$GeoQuad"
import {$GeoCube, $GeoCube$Type} from "packages/software/bernie/geckolib/cache/object/$GeoCube"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $GeoRenderer<T extends $GeoAnimatable> {

 "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$Type, arg3: T, arg4: $BakedGeoModel$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
 "getMotionAnimThreshold"(arg0: T): float
 "updateAnimatedTextureFrame"(arg0: T): void
 "applyRenderLayersForBone"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
 "createVerticesOfQuad"(arg0: $GeoQuad$Type, arg1: $Matrix4f$Type, arg2: $Vector3f$Type, arg3: $VertexConsumer$Type, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
 "firePostRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): void
 "preApplyRenderLayers"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
 "fireCompileRenderLayersEvent"(): void
 "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
 "preRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
 "postRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
 "getInstanceId"(arg0: T): long
 "defaultRender"(arg0: $PoseStack$Type, arg1: T, arg2: $MultiBufferSource$Type, arg3: $RenderType$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: float, arg7: integer): void
 "actuallyRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
 "getGeoModel"(): $GeoModel<(T)>
 "getAnimatable"(): T
 "applyRenderLayers"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
 "renderFinal"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
 "renderRecursively"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
 "renderCubesOfBone"(arg0: $PoseStack$Type, arg1: $GeoBone$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
 "renderChildBones"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
/**
 * 
 * @deprecated
 */
 "getPackedOverlay"(arg0: T, arg1: float): integer
 "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
 "firePreRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): boolean
 "reRender"(arg0: $BakedGeoModel$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: T, arg4: $RenderType$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
 "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
 "renderCube"(arg0: $PoseStack$Type, arg1: $GeoCube$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
 "getRenderType"(arg0: T, arg1: $ResourceLocation$Type, arg2: $MultiBufferSource$Type, arg3: float): $RenderType
 "getTextureLocation"(arg0: T): $ResourceLocation
}

export namespace $GeoRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderer$Type<T> = ($GeoRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderer_<T> = $GeoRenderer$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$KeyframeStack" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"

export class $KeyframeStack<T extends $Keyframe<(any)>> extends $Record {

constructor()
constructor(xKeyframes: $List$Type<(T)>, yKeyframes: $List$Type<(T)>, zKeyframes: $List$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"<F extends $Keyframe<(any)>>(arg0: $KeyframeStack$Type<(F)>): $KeyframeStack<(F)>
public "getLastKeyframeTime"(): double
public "xKeyframes"(): $List<(T)>
public "yKeyframes"(): $List<(T)>
public "zKeyframes"(): $List<(T)>
get "lastKeyframeTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyframeStack$Type<T> = ($KeyframeStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyframeStack_<T> = $KeyframeStack$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$RawAnimation" {
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RawAnimation$Stage, $RawAnimation$Stage$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation$Stage"

export class $RawAnimation {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $RawAnimation$Type): $RawAnimation
public static "begin"(): $RawAnimation
public "then"(arg0: string, arg1: $Animation$LoopType$Type): $RawAnimation
public "thenWait"(arg0: integer): $RawAnimation
public "thenPlayXTimes"(arg0: string, arg1: integer): $RawAnimation
public "thenPlayAndHold"(arg0: string): $RawAnimation
public "thenLoop"(arg0: string): $RawAnimation
public "thenPlay"(arg0: string): $RawAnimation
public "getAnimationStages"(): $List<($RawAnimation$Stage)>
get "animationStages"(): $List<($RawAnimation$Stage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Type = ($RawAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation_ = $RawAnimation$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$ParticleKeyframeEvent" {
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$ParticleKeyframeData, $ParticleKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent"

export class $ParticleKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($ParticleKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: $ParticleKeyframeData$Type)

public "getKeyframeData"(): $ParticleKeyframeData
get "keyframeData"(): $ParticleKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeEvent$Type<T> = ($ParticleKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeEvent_<T> = $ParticleKeyframeEvent$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/network/$SerializableDataTicket" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SerializableDataTicket<D> extends $DataTicket<(D)> {

constructor(arg0: string, arg1: $Class$Type<(any)>)

public "decode"(arg0: $FriendlyByteBuf$Type): D
public "encode"(arg0: D, arg1: $FriendlyByteBuf$Type): void
public static "ofString"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(string)>
public static "ofInt"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(integer)>
public static "ofEnum"<E extends $Enum<(E)>>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(E)>): $SerializableDataTicket<(E)>
public static "ofBoolean"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(boolean)>
public static "ofDouble"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(double)>
public static "ofFloat"(arg0: $ResourceLocation$Type): $SerializableDataTicket<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableDataTicket$Type<D> = ($SerializableDataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableDataTicket_<D> = $SerializableDataTicket$Type<(D)>;
}}
declare module "packages/software/bernie/geckolib/animatable/$GeoEntity" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"

export interface $GeoEntity extends $GeoAnimatable {

 "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
 "triggerAnim"(arg0: string, arg1: string): void
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "getBoneResetTime"(): double
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntity$Type = ($GeoEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoEntity_ = $GeoEntity$Type;
}}
declare module "packages/software/bernie/geckolib/cache/object/$GeoQuad" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GeoVertex, $GeoVertex$Type} from "packages/software/bernie/geckolib/cache/object/$GeoVertex"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $GeoQuad extends $Record {

constructor(vertices: ($GeoVertex$Type)[], normal: $Vector3f$Type, direction: $Direction$Type)

public "direction"(): $Direction
public static "build"(arg0: ($GeoVertex$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$Type)[], arg1: (double)[], arg2: (double)[], arg3: float, arg4: float, arg5: boolean, arg6: $Direction$Type): $GeoQuad
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "normal"(): $Vector3f
public "vertices"(): ($GeoVertex)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoQuad$Type = ($GeoQuad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoQuad_ = $GeoQuad$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/$SoundKeyframeEvent" {
import {$SoundKeyframeData, $SoundKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent"

export class $SoundKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($SoundKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$Type<(T)>, arg3: $SoundKeyframeData$Type)

public "getKeyframeData"(): $SoundKeyframeData
get "keyframeData"(): $SoundKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeEvent$Type<T> = ($SoundKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeEvent_<T> = $SoundKeyframeEvent$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationState" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationState<T extends $GeoAnimatable> {
 "animationTick": double

constructor(arg0: T, arg1: float, arg2: float, arg3: float, arg4: boolean)

public "getData"<D>(arg0: $DataTicket$Type<(D)>): D
public "getAnimationTick"(): double
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
public "setData"<D>(arg0: $DataTicket$Type<(D)>, arg1: D): void
public "getExtraData"(): $Map<($DataTicket<(any)>), (any)>
public "setAnimation"(arg0: $RawAnimation$Type): void
public "isMoving"(): boolean
public "getPartialTick"(): float
public "getController"(): $AnimationController<(T)>
public "getAnimatable"(): T
public "setControllerSpeed"(arg0: float): void
public "withController"(arg0: $AnimationController$Type<(T)>): $AnimationState<(T)>
public "resetCurrentAnimation"(): void
public "isCurrentAnimationStage"(arg0: string): boolean
public "isCurrentAnimation"(arg0: $RawAnimation$Type): boolean
public "setAndContinue"(arg0: $RawAnimation$Type): $PlayState
get "animationTick"(): double
get "limbSwing"(): float
get "limbSwingAmount"(): float
get "extraData"(): $Map<($DataTicket<(any)>), (any)>
set "animation"(value: $RawAnimation$Type)
get "moving"(): boolean
get "partialTick"(): float
get "controller"(): $AnimationController<(T)>
get "animatable"(): T
set "controllerSpeed"(value: float)
set "andContinue"(value: $RawAnimation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationState$Type<T> = ($AnimationState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationState_<T> = $AnimationState$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$ParticleKeyframeHandler" {
import {$ParticleKeyframeEvent, $ParticleKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$ParticleKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $ParticleKeyframeEvent$Type<(A)>): void

(arg0: $ParticleKeyframeEvent$Type<(A)>): void
}

export namespace $AnimationController$ParticleKeyframeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$ParticleKeyframeHandler$Type<A> = ($AnimationController$ParticleKeyframeHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$ParticleKeyframeHandler_<A> = $AnimationController$ParticleKeyframeHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/loading/json/raw/$ModelProperties" {
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/google/gson/$JsonDeserializer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ModelProperties extends $Record {

constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: string, preserveModelPose: boolean, textureHeight: double, textureWidth: double, visibleBoundsHeight: double, visibleBoundsOffset: (double)[], visibleBoundsWidth: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "identifier"(): string
public static "deserializer"(): $JsonDeserializer<($ModelProperties)>
public "preserveModelPose"(): boolean
public "visibleBoundsWidth"(): double
public "animationNoHeadBob"(): boolean
public "animationArmsDown"(): boolean
public "textureWidth"(): double
public "textureHeight"(): double
public "animationArmsOutFront"(): boolean
public "animationSingleArmAnimation"(): boolean
public "animationUpsideDown"(): boolean
public "animationSingleLegAnimation"(): boolean
public "animationStationaryLegs"(): boolean
public "animationStatueOfLibertyArms"(): boolean
public "animationInvertedCrouch"(): boolean
public "visibleBoundsHeight"(): double
public "animationDontShowArmor"(): boolean
public "visibleBoundsOffset"(): (double)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperties$Type = ($ModelProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperties_ = $ModelProperties$Type;
}}
declare module "packages/software/bernie/geckolib/core/state/$BoneSnapshot" {
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"

export class $BoneSnapshot {

constructor(arg0: $CoreGeoBone$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copy"(arg0: $BoneSnapshot$Type): $BoneSnapshot
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "getScaleX"(): float
public "getScaleY"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "getRotZ"(): float
public "getScaleZ"(): float
public "getRotX"(): float
public "getRotY"(): float
public "getBone"(): $CoreGeoBone
public "getOffsetX"(): float
public "updateOffset"(arg0: float, arg1: float, arg2: float): void
public "isPosAnimInProgress"(): boolean
public "isScaleAnimInProgress"(): boolean
public "isRotAnimInProgress"(): boolean
public "getLastResetRotationTick"(): double
public "getLastResetScaleTick"(): double
public "getLastResetPositionTick"(): double
public "startScaleAnim"(): void
public "stopPosAnim"(arg0: double): void
public "startPosAnim"(): void
public "stopRotAnim"(arg0: double): void
public "startRotAnim"(): void
public "stopScaleAnim"(arg0: double): void
get "scaleX"(): float
get "scaleY"(): float
get "offsetY"(): float
get "offsetZ"(): float
get "rotZ"(): float
get "scaleZ"(): float
get "rotX"(): float
get "rotY"(): float
get "bone"(): $CoreGeoBone
get "offsetX"(): float
get "posAnimInProgress"(): boolean
get "scaleAnimInProgress"(): boolean
get "rotAnimInProgress"(): boolean
get "lastResetRotationTick"(): double
get "lastResetScaleTick"(): double
get "lastResetPositionTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneSnapshot$Type = ($BoneSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneSnapshot_ = $BoneSnapshot$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationProcessor" {
import {$CoreBakedGeoModel, $CoreBakedGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel"
import {$AnimatableManager, $AnimatableManager$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$CoreGeoModel, $CoreGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation"

export class $AnimationProcessor<T extends $GeoAnimatable> {
 "reloadAnimations": boolean

constructor(arg0: $CoreGeoModel$Type<(T)>)

public "setActiveModel"(arg0: $CoreBakedGeoModel$Type): void
public "preAnimationSetup"(arg0: T, arg1: double): void
public "getRegisteredBones"(): $Collection<($CoreGeoBone)>
public "buildAnimationQueue"(arg0: T, arg1: $RawAnimation$Type): $Queue<($AnimationProcessor$QueuedAnimation)>
public "tickAnimation"(arg0: T, arg1: $CoreGeoModel$Type<(T)>, arg2: $AnimatableManager$Type<(T)>, arg3: double, arg4: $AnimationState$Type<(T)>, arg5: boolean): void
public "getBone"(arg0: string): $CoreGeoBone
public "registerGeoBone"(arg0: $CoreGeoBone$Type): void
set "activeModel"(value: $CoreBakedGeoModel$Type)
get "registeredBones"(): $Collection<($CoreGeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$Type<T> = ($AnimationProcessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor_<T> = $AnimationProcessor$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$CustomKeyframeHandler" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent"

export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $CustomInstructionKeyframeEvent$Type<(A)>): void

(arg0: $CustomInstructionKeyframeEvent$Type<(A)>): void
}

export namespace $AnimationController$CustomKeyframeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$CustomKeyframeHandler$Type<A> = ($AnimationController$CustomKeyframeHandler<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$CustomKeyframeHandler_<A> = $AnimationController$CustomKeyframeHandler$Type<(A)>;
}}
declare module "packages/software/bernie/geckolib/animatable/$GeoItem" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$SingletonGeoAnimatable, $SingletonGeoAnimatable$Type} from "packages/software/bernie/geckolib/animatable/$SingletonGeoAnimatable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $GeoItem extends $SingletonGeoAnimatable {

 "animatableCacheOverride"(): $AnimatableInstanceCache
 "getTick"(arg0: any): double
 "isPerspectiveAware"(): boolean
 "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
 "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "getBoneResetTime"(): double
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $GeoItem {
const ID_NBT_KEY: string
function getId(arg0: $ItemStack$Type): long
function registerSyncedAnimatable(arg0: $GeoAnimatable$Type): void
function getOrAssignId(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItem$Type = ($GeoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoItem_ = $GeoItem$Type;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$BoneAnimationQueue" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Keyframe, $Keyframe$Type} from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$AnimationPointQueue, $AnimationPointQueue$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPointQueue"
import {$AnimationPoint, $AnimationPoint$Type} from "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint"

export class $BoneAnimationQueue extends $Record {

constructor(arg0: $CoreGeoBone$Type)
constructor(bone: $CoreGeoBone$Type, rotationXQueue: $AnimationPointQueue$Type, rotationYQueue: $AnimationPointQueue$Type, rotationZQueue: $AnimationPointQueue$Type, positionXQueue: $AnimationPointQueue$Type, positionYQueue: $AnimationPointQueue$Type, positionZQueue: $AnimationPointQueue$Type, scaleXQueue: $AnimationPointQueue$Type, scaleYQueue: $AnimationPointQueue$Type, scaleZQueue: $AnimationPointQueue$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "addNextScale"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$Type, arg4: $AnimationPoint$Type, arg5: $AnimationPoint$Type, arg6: $AnimationPoint$Type): void
public "addRotations"(arg0: $AnimationPoint$Type, arg1: $AnimationPoint$Type, arg2: $AnimationPoint$Type): void
public "addScales"(arg0: $AnimationPoint$Type, arg1: $AnimationPoint$Type, arg2: $AnimationPoint$Type): void
public "addPositions"(arg0: $AnimationPoint$Type, arg1: $AnimationPoint$Type, arg2: $AnimationPoint$Type): void
public "bone"(): $CoreGeoBone
public "addNextPosition"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$Type, arg4: $AnimationPoint$Type, arg5: $AnimationPoint$Type, arg6: $AnimationPoint$Type): void
public "addNextRotation"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$Type, arg4: $BoneSnapshot$Type, arg5: $AnimationPoint$Type, arg6: $AnimationPoint$Type, arg7: $AnimationPoint$Type): void
public "addPosZPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosXPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleXPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleYPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleZPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationXPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationYPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationZPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosYPoint"(arg0: $Keyframe$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "rotationXQueue"(): $AnimationPointQueue
public "scaleXQueue"(): $AnimationPointQueue
public "scaleYQueue"(): $AnimationPointQueue
public "scaleZQueue"(): $AnimationPointQueue
public "rotationZQueue"(): $AnimationPointQueue
public "rotationYQueue"(): $AnimationPointQueue
public "positionZQueue"(): $AnimationPointQueue
public "positionYQueue"(): $AnimationPointQueue
public "positionXQueue"(): $AnimationPointQueue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimationQueue$Type = ($BoneAnimationQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimationQueue_ = $BoneAnimationQueue$Type;
}}
declare module "packages/software/bernie/geckolib/core/object/$DataTicket" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DataTicket<D> {

constructor(arg0: string, arg1: $Class$Type<(any)>)

public "hashCode"(): integer
public "id"(): string
public "getData"<D>(arg0: $Map$Type<(any), (any)>): D
public "objectType"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataTicket$Type<D> = ($DataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataTicket_<D> = $DataTicket$Type<(D)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyFrameData {

constructor(arg0: double)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getStartTick"(): double
get "startTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyFrameData$Type = ($KeyFrameData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyFrameData_ = $KeyFrameData$Type;
}}
declare module "packages/software/bernie/geckolib/cache/object/$BakedGeoModel" {
import {$CoreBakedGeoModel, $CoreBakedGeoModel$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModelProperties, $ModelProperties$Type} from "packages/software/bernie/geckolib/loading/json/raw/$ModelProperties"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"

export class $BakedGeoModel extends $Record implements $CoreBakedGeoModel {

constructor(topLevelBones: $List$Type<($GeoBone$Type)>, properties: $ModelProperties$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "topLevelBones"(): $List<($GeoBone)>
public "getBone"(arg0: string): $Optional<($GeoBone)>
public "getBones"(): $List<(any)>
public "searchForChildBone"(arg0: $CoreGeoBone$Type, arg1: string): $CoreGeoBone
get "bones"(): $List<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$Type = ($BakedGeoModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedGeoModel_ = $BakedGeoModel$Type;
}}
declare module "packages/software/bernie/geckolib/core/object/$PlayState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayState extends $Enum<($PlayState)> {
static readonly "CONTINUE": $PlayState
static readonly "STOP": $PlayState


public static "values"(): ($PlayState)[]
public static "valueOf"(arg0: string): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayState$Type = (("stop") | ("continue")) | ($PlayState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayState_ = $PlayState$Type;
}}
declare module "packages/software/bernie/geckolib/renderer/layer/$GeoRenderLayer" {
import {$GeoRenderer, $GeoRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoRenderer"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $GeoRenderLayer<T extends $GeoAnimatable> {

constructor(arg0: $GeoRenderer$Type<(T)>)

public "getRenderer"(): $GeoRenderer<(T)>
public "render"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "getDefaultBakedModel"(arg0: T): $BakedGeoModel
public "preRender"(arg0: $PoseStack$Type, arg1: T, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "getGeoModel"(): $GeoModel<(T)>
public "renderForBone"(arg0: $PoseStack$Type, arg1: T, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
get "renderer"(): $GeoRenderer<(T)>
get "geoModel"(): $GeoModel<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderLayer$Type<T> = ($GeoRenderLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderLayer_<T> = $GeoRenderLayer$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/keyframe/$Keyframe" {
import {$EasingType, $EasingType$Type} from "packages/software/bernie/geckolib/core/animation/$EasingType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IValue, $IValue$Type} from "packages/com/eliotlash/mclib/math/$IValue"

export class $Keyframe<T extends $IValue> extends $Record {

constructor(length: double, startValue: T, endValue: T, easingType: $EasingType$Type, easingArgs: $List$Type<(T)>)
constructor(arg0: double, arg1: T, arg2: T, arg3: $EasingType$Type)
constructor(arg0: double, arg1: T, arg2: T)

public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "endValue"(): T
public "startValue"(): T
public "easingType"(): $EasingType
public "easingArgs"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Type<T> = ($Keyframe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_<T> = $Keyframe$Type<(T)>;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar" {
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"

export class $AnimatableManager$ControllerRegistrar {

constructor()

public "add"(...arg0: ($AnimationController$Type<(any)>)[]): $AnimatableManager$ControllerRegistrar
public "remove"(arg0: string): $AnimatableManager$ControllerRegistrar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$ControllerRegistrar$Type = ($AnimatableManager$ControllerRegistrar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager$ControllerRegistrar_ = $AnimatableManager$ControllerRegistrar$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"
import {$Animation, $Animation$Type} from "packages/software/bernie/geckolib/core/animation/$Animation"

export class $AnimationProcessor$QueuedAnimation extends $Record {

constructor(animation: $Animation$Type, loopType: $Animation$LoopType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animation"(): $Animation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$QueuedAnimation$Type = ($AnimationProcessor$QueuedAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor$QueuedAnimation_ = $AnimationProcessor$QueuedAnimation$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$Animation$Keyframes" {
import {$SoundKeyframeData, $SoundKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData"
import {$ParticleKeyframeData, $ParticleKeyframeData$Type} from "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData"

export class $Animation$Keyframes extends $Record {

constructor(sounds: ($SoundKeyframeData$Type)[], particles: ($ParticleKeyframeData$Type)[], customInstructions: ($CustomInstructionKeyframeData$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "customInstructions"(): ($CustomInstructionKeyframeData)[]
public "sounds"(): ($SoundKeyframeData)[]
public "particles"(): ($ParticleKeyframeData)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Keyframes$Type = ($Animation$Keyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$Keyframes_ = $Animation$Keyframes$Type;
}}
declare module "packages/software/bernie/geckolib/animatable/$SingletonGeoAnimatable" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $SingletonGeoAnimatable extends $GeoAnimatable {

 "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
 "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "getBoneResetTime"(): double
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getTick"(arg0: any): double
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
}

export namespace $SingletonGeoAnimatable {
function registerSyncedAnimatable(arg0: $GeoAnimatable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonGeoAnimatable$Type = ($SingletonGeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonGeoAnimatable_ = $SingletonGeoAnimatable$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"

export interface $CoreGeoBone {

 "getName"(): string
 "isHidden"(): boolean
 "getParent"(): $CoreGeoBone
 "setHidden"(arg0: boolean): void
 "updateScale"(arg0: float, arg1: float, arg2: float): void
 "getPosZ"(): float
 "getScaleX"(): float
 "getScaleY"(): float
 "setScaleX"(arg0: float): void
 "setScaleY"(arg0: float): void
 "updateRotation"(arg0: float, arg1: float, arg2: float): void
 "updatePosition"(arg0: float, arg1: float, arg2: float): void
 "getPosX"(): float
 "getPosY"(): float
 "markPositionAsChanged"(): void
 "markRotationAsChanged"(): void
 "saveInitialSnapshot"(): void
 "getRotZ"(): float
 "getScaleZ"(): float
 "setRotX"(arg0: float): void
 "getRotX"(): float
 "getRotY"(): float
 "setPivotZ"(arg0: float): void
 "resetStateChanges"(): void
 "setPivotX"(arg0: float): void
 "setScaleZ"(arg0: float): void
 "markScaleAsChanged"(): void
 "updatePivot"(arg0: float, arg1: float, arg2: float): void
 "getPivotX"(): float
 "getPivotZ"(): float
 "setChildrenHidden"(arg0: boolean): void
 "hasRotationChanged"(): boolean
 "getInitialSnapshot"(): $BoneSnapshot
 "saveSnapshot"(): $BoneSnapshot
 "hasPositionChanged"(): boolean
 "setPivotY"(arg0: float): void
 "getPivotY"(): float
 "setRotY"(arg0: float): void
 "setRotZ"(arg0: float): void
 "hasScaleChanged"(): boolean
 "isHidingChildren"(): boolean
 "getChildBones"(): $List<(any)>
 "setPosX"(arg0: float): void
 "setPosY"(arg0: float): void
 "setPosZ"(arg0: float): void
}

export namespace $CoreGeoBone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreGeoBone$Type = ($CoreGeoBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreGeoBone_ = $CoreGeoBone$Type;
}}
declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CoreGeoBone, $CoreGeoBone$Type} from "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone"

export interface $CoreBakedGeoModel {

 "getBone"(arg0: string): $Optional<(any)>
 "getBones"(): $List<(any)>
 "searchForChildBone"(arg0: $CoreGeoBone$Type, arg1: string): $CoreGeoBone
}

export namespace $CoreBakedGeoModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreBakedGeoModel$Type = ($CoreBakedGeoModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreBakedGeoModel_ = $CoreBakedGeoModel$Type;
}}
declare module "packages/software/bernie/geckolib/core/animation/$AnimatableManager" {
import {$DataTicket, $DataTicket$Type} from "packages/software/bernie/geckolib/core/object/$DataTicket"
import {$AnimationController, $AnimationController$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$BoneSnapshot, $BoneSnapshot$Type} from "packages/software/bernie/geckolib/core/state/$BoneSnapshot"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableManager<T extends $GeoAnimatable> {

constructor(arg0: $GeoAnimatable$Type)

public "getData"<D>(arg0: $DataTicket$Type<(D)>): D
public "getLastUpdateTime"(): double
public "tryTriggerAnimation"(arg0: string, arg1: string): void
public "tryTriggerAnimation"(arg0: string): void
public "getFirstTickTime"(): double
public "updatedAt"(arg0: double): void
public "isFirstTick"(): boolean
public "startedAt"(arg0: double): void
public "removeController"(arg0: string): void
public "setData"<D>(arg0: $DataTicket$Type<(D)>, arg1: D): void
public "addController"(arg0: $AnimationController$Type<(any)>): void
public "clearSnapshotCache"(): void
public "getBoneSnapshotCollection"(): $Map<(string), ($BoneSnapshot)>
public "getAnimationControllers"(): $Map<(string), ($AnimationController<(T)>)>
get "lastUpdateTime"(): double
get "firstTickTime"(): double
get "firstTick"(): boolean
get "boneSnapshotCollection"(): $Map<(string), ($BoneSnapshot)>
get "animationControllers"(): $Map<(string), ($AnimationController<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$Type<T> = ($AnimatableManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager_<T> = $AnimatableManager$Type<(T)>;
}}
