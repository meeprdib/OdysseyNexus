declare module "packages/xaeroplus/feature/extensions/$IWaypointDimension" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IWaypointDimension {

 "getDimension"(): $ResourceKey<($Level)>
 "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
}

export namespace $IWaypointDimension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaypointDimension$Type = ($IWaypointDimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaypointDimension_ = $IWaypointDimension$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$CustomMinimapFBORenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMinimapFBORenderer {

 "reloadMapFrameBuffers"(): void

(): void
}

export namespace $CustomMinimapFBORenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMinimapFBORenderer$Type = ($CustomMinimapFBORenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMinimapFBORenderer_ = $CustomMinimapFBORenderer$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$CustomWaypointsIngameRenderer" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"

export interface $CustomWaypointsIngameRenderer {

 "renderWaypointBeacons"(arg0: $XaeroMinimapSession$Type, arg1: $PoseStack$Type, arg2: float): void

(arg0: $XaeroMinimapSession$Type, arg1: $PoseStack$Type, arg2: float): void
}

export namespace $CustomWaypointsIngameRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomWaypointsIngameRenderer$Type = ($CustomWaypointsIngameRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomWaypointsIngameRenderer_ = $CustomWaypointsIngameRenderer$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$CustomMapProcessor" {
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export interface $CustomMapProcessor {

 "xaeroPlus$getLeafRegionActualDimSignal"(): $ThreadLocal<(boolean)>

(): $ThreadLocal<(boolean)>
}

export namespace $CustomMapProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapProcessor$Type = ($CustomMapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapProcessor_ = $CustomMapProcessor$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$IScreenRadarRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScreenRadarRenderContext {

 "isWorldMap"(): boolean
 "setIsWorldMap"(arg0: boolean): void
}

export namespace $IScreenRadarRenderContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenRadarRenderContext$Type = ($IScreenRadarRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenRadarRenderContext_ = $IScreenRadarRenderContext$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$SeenChunksTrackingMapTileChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SeenChunksTrackingMapTileChunk {

 "getSeenTiles"(): ((boolean)[])[]

(): ((boolean)[])[]
}

export namespace $SeenChunksTrackingMapTileChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeenChunksTrackingMapTileChunk$Type = ($SeenChunksTrackingMapTileChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeenChunksTrackingMapTileChunk_ = $SeenChunksTrackingMapTileChunk$Type;
}}
