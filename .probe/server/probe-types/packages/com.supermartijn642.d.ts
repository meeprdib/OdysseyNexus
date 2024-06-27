declare module "packages/com/supermartijn642/fusion/api/texture/$SpritePreparationContext" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"

export interface $SpritePreparationContext {

 "getIdentifier"(): $ResourceLocation
 "getOriginalFrameSize"(): $Pair<(integer), (integer)>
 "getTextureHeight"(): integer
 "getTextureWidth"(): integer
 "getOriginalFrameWith"(): integer
 "getOriginalFrameHeight"(): integer
}

export namespace $SpritePreparationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpritePreparationContext$Type = ($SpritePreparationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpritePreparationContext_ = $SpritePreparationContext$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$TextureAtlasSpriteExtension" {
import {$TextureType, $TextureType$Type} from "packages/com/supermartijn642/fusion/api/texture/$TextureType"

export interface $TextureAtlasSpriteExtension {

 "setFusionTextureType"(type: $TextureType$Type<(any)>): void
 "getFusionTextureType"(): $TextureType<(any)>
}

export namespace $TextureAtlasSpriteExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$Type = ($TextureAtlasSpriteExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasSpriteExtension_ = $TextureAtlasSpriteExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$SpriteCreationContext" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $SpriteCreationContext {

 "createOriginalSprite"(): $TextureAtlasSprite
 "getAtlas"(): $TextureAtlas
 "getTextureHeight"(): integer
 "getAtlasHeight"(): integer
 "getTextureWidth"(): integer
 "getSpritePositionY"(): integer
 "getAtlasWidth"(): integer
 "getSpritePositionX"(): integer
 "getTextureIdentifier"(): $ResourceLocation
 "getSpriteWidth"(): integer
 "getSpriteHeight"(): integer
 "getTextureBuffers"(): ($NativeImage)[]
 "getMipmapLevels"(): integer
}

export namespace $SpriteCreationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteCreationContext$Type = ($SpriteCreationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteCreationContext_ = $SpriteCreationContext$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelType" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModelBakingContext, $ModelBakingContext$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext"
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelType<T> extends $Serializer<(T)> {

 "bake"(context: $ModelBakingContext$Type, data: T): $BakedModel
 "getModelDependencies"(data: T): $Collection<($ResourceLocation)>
 "getAsVanillaModel"(data: T): $BlockModel
 "deserialize"(json: $JsonObject$Type): T
 "serialize"(value: T): $JsonObject
}

export namespace $ModelType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelType$Type<T> = ($ModelType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelType_<T> = $ModelType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$TextureType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SpritePreparationContext, $SpritePreparationContext$Type} from "packages/com/supermartijn642/fusion/api/texture/$SpritePreparationContext"
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$SpriteCreationContext, $SpriteCreationContext$Type} from "packages/com/supermartijn642/fusion/api/texture/$SpriteCreationContext"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $TextureType<T> extends $Serializer<(T)> {

 "getFrameSize"(context: $SpritePreparationContext$Type, data: T): $Pair<(integer), (integer)>
 "createSprite"(context: $SpriteCreationContext$Type, data: T): $TextureAtlasSprite
 "deserialize"(json: $JsonObject$Type): T
 "serialize"(value: T): $JsonObject
}

export namespace $TextureType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureType$Type<T> = ($TextureType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureType_<T> = $TextureType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext" {
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelInstance, $ModelInstance$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteIdentifier, $SpriteIdentifier$Type} from "packages/com/supermartijn642/fusion/api/model/$SpriteIdentifier"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelBakingContext {

 "getTexture"(atlas: $ResourceLocation$Type, texture: $ResourceLocation$Type): $TextureAtlasSprite
 "getTexture"(identifier: $SpriteIdentifier$Type): $TextureAtlasSprite
 "getModel"(identifier: $ResourceLocation$Type): $ModelInstance<(any)>
 "getTransformation"(): $ModelState
 "getModelBaker"(): $ModelBaker
 "getModelIdentifier"(): $ResourceLocation
 "getBlockTexture"(texture: $ResourceLocation$Type): $TextureAtlasSprite
}

export namespace $ModelBakingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakingContext$Type = ($ModelBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakingContext_ = $ModelBakingContext$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/util/$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $Serializer<T> {

 "deserialize"(json: $JsonObject$Type): T
 "serialize"(value: T): $JsonObject
}

export namespace $Serializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Type<T> = ($Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer_<T> = $Serializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$BlockModelExtension" {
import {$ModelInstance, $ModelInstance$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelInstance"

export interface $BlockModelExtension {

 "getFusionModel"(): $ModelInstance<(any)>
 "setFusionModel"(model: $ModelInstance$Type<(any)>): void
}

export namespace $BlockModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelExtension$Type = ($BlockModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelExtension_ = $BlockModelExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/util/$Pair" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<X, Y> {


public "left"(): X
public "right"(): Y
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$Type<(X), (R)>, mapRight: $Function$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$Type<(X), (Y), (S)>): S
public "mapRight"<S>(mapper: $Function$Type<(Y), (S)>): $Pair<(X), (S)>
public "mapLeft"<S>(mapper: $Function$Type<(X), (S)>): $Pair<(S), (Y)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<X, Y> = $Pair$Type<(X), (Y)>;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelInstance" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$ModelType, $ModelType$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModelBakingContext, $ModelBakingContext$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelInstance<T> {

 "bake"(context: $ModelBakingContext$Type): $BakedModel
 "getModelData"(): T
 "getModelDependencies"(): $Collection<($ResourceLocation)>
 "getAsVanillaModel"(): $BlockModel
 "getModelType"(): $ModelType<(T)>
}

export namespace $ModelInstance {
function of<T>(modelType: $ModelType$Type<(T)>, modelData: T): $ModelInstance<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelInstance$Type<T> = ($ModelInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelInstance_<T> = $ModelInstance$Type<(T)>;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$SpriteIdentifier" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SpriteIdentifier {

 "getAtlas"(): $ResourceLocation
 "getTexture"(): $ResourceLocation
 "toMaterial"(): $Material
}

export namespace $SpriteIdentifier {
function of(atlas: $ResourceLocation$Type, texture: $ResourceLocation$Type): $SpriteIdentifier
function of(material: $Material$Type): $SpriteIdentifier
function missing(): $SpriteIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteIdentifier$Type = ($SpriteIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteIdentifier_ = $SpriteIdentifier$Type;
}}
