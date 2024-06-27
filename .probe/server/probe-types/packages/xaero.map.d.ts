declare module "packages/xaero/map/controls/$ControlsHandler" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"

export class $ControlsHandler {

constructor(arg0: $MapProcessor$Type)

public static "isKeyRepeat"(arg0: $KeyMapping$Type): boolean
public "onKeyInput"(arg0: $Minecraft$Type): void
public "handleKeyEvents"(): void
public "keyDown"(arg0: $KeyMapping$Type, arg1: boolean, arg2: boolean): void
public "keyUp"(arg0: $KeyMapping$Type, arg1: boolean): void
public static "isDown"(arg0: $KeyMapping$Type): boolean
public static "setKeyState"(arg0: $KeyMapping$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsHandler$Type = ($ControlsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsHandler_ = $ControlsHandler$Type;
}}
declare module "packages/xaero/map/core/$IWorldMapClientPlayNetHandler" {
import {$WorldMapSession, $WorldMapSession$Type} from "packages/xaero/map/$WorldMapSession"

export interface $IWorldMapClientPlayNetHandler {

 "setXaero_worldmapSession"(arg0: $WorldMapSession$Type): void
 "getXaero_worldmapSession"(): $WorldMapSession
}

export namespace $IWorldMapClientPlayNetHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientPlayNetHandler$Type = ($IWorldMapClientPlayNetHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapClientPlayNetHandler_ = $IWorldMapClientPlayNetHandler$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$Normal" {
import {$TextureUpload$Normal, $TextureUpload$Normal$Type} from "packages/xaero/map/graphics/$TextureUpload$Normal"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$Normal extends $TextureUploadPool<($TextureUpload$Normal)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): $TextureUpload$Normal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Normal$Type = ($TextureUploadPool$Normal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$Normal_ = $TextureUploadPool$Normal$Type;
}}
declare module "packages/xaero/map/pool/$MapTilePool" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$MapPool, $MapPool$Type} from "packages/xaero/map/pool/$MapPool"

export class $MapTilePool extends $MapPool<($MapTile)> {

constructor()

public "get"(arg0: string, arg1: integer, arg2: integer): $MapTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTilePool$Type = ($MapTilePool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTilePool_ = $MapTilePool$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"

export class $TextureUpload implements $PoolUnit {

constructor()

public "run"(): void
public "create"(...arg0: (any)[]): void
public "getUploadType"(): integer
get "uploadType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$Type = ($TextureUpload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload_ = $TextureUpload$Type;
}}
declare module "packages/xaero/map/region/$LeveledRegionManager" {
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"

export class $LeveledRegionManager {
static readonly "MAX_LEVEL": integer

constructor()

public "remove"(arg0: integer, arg1: integer, arg2: integer): boolean
public "get"(arg0: integer, arg1: integer, arg2: integer): $LeveledRegion<(any)>
public "putLeaf"(arg0: integer, arg1: integer, arg2: $MapRegion$Type): void
public "getLeaf"(arg0: integer, arg1: integer): $MapRegion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeveledRegionManager$Type = ($LeveledRegionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeveledRegionManager_ = $LeveledRegionManager$Type;
}}
declare module "packages/xaero/map/file/export/$PNGExporter" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PNGExportResult, $PNGExportResult$Type} from "packages/xaero/map/file/export/$PNGExportResult"
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapTileSelection, $MapTileSelection$Type} from "packages/xaero/map/gui/$MapTileSelection"

export class $PNGExporter {

constructor(arg0: $Path$Type)

public "export"(arg0: $MapProcessor$Type, arg1: $Registry$Type<($Biome$Type)>, arg2: $Registry$Type<($DimensionType$Type)>, arg3: $MapTileSelection$Type, arg4: $OldFormatSupport$Type): $PNGExportResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExporter$Type = ($PNGExporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExporter_ = $PNGExporter$Type;
}}
declare module "packages/xaero/map/region/$MapRegion" {
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$MapRegionInfo, $MapRegionInfo$Type} from "packages/xaero/map/file/$MapRegionInfo"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$BranchLeveledRegion, $BranchLeveledRegion$Type} from "packages/xaero/map/region/$BranchLeveledRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$LeafRegionTexture, $LeafRegionTexture$Type} from "packages/xaero/map/region/texture/$LeafRegionTexture"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$File, $File$Type} from "packages/java/io/$File"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"

export class $MapRegion extends $LeveledRegion<($LeafRegionTexture)> implements $MapRegionInfo {
static readonly "SIDE_LENGTH": integer
readonly "writerThreadPauseSync": any
 "loadingPrioritized": boolean
 "loadingNeededForBranchLevel": integer
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]

constructor(arg0: string, arg1: string, arg2: string, arg3: $MapDimension$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: $Registry$Type<($Biome$Type)>)

public "clean"(arg0: $MapProcessor$Type): void
public "setParent"(arg0: $BranchLeveledRegion$Type): void
public "isLoaded"(): boolean
public "getVersion"(): integer
public "setVersion"(arg0: integer): void
public "isOutdatedWithOtherLayers"(): boolean
public "updateTargetHighlightsHash"(): void
public "shouldEndProcessingAfterUpload"(): boolean
public "getMutableGlobalPos"(): $BlockPos$MutableBlockPos
public "getUpToDateCaveStart"(): integer
public "cleanAndCacheRequestsBlocked"(): boolean
public "afterLimiterRemoval"(arg0: $MapProcessor$Type): void
public "restoreBufferUpdateObjects"(): void
public "destroyBufferUpdateObjects"(): void
public "getTargetHighlightsHash"(): integer
public "getPixelResultBuffer"(): (integer)[]
public "processWhenLoadedChunksExist"(arg0: integer): void
public "convertCacheToOutdated"(arg0: $MapSaveLoad$Type, arg1: string): void
public "getChunk"(arg0: integer, arg1: integer): $MapTileChunk
public "isWritingPaused"(): boolean
public "getLoadState"(): byte
public "setBeingWritten"(arg0: boolean): void
public "isResting"(): boolean
public "registerVisit"(): void
public "setLoadState"(arg0: byte): void
public "setChunk"(arg0: integer, arg1: integer, arg2: $MapTileChunk$Type): void
public "getCaveStart"(): integer
public "isNormalMapData"(): boolean
public "setHasHadTerrain"(): void
public "requestRefresh"(arg0: $MapProcessor$Type): void
public "requestRefresh"(arg0: $MapProcessor$Type, arg1: boolean): void
public "shouldConvertCacheToOutdatedOnFinishDim"(): boolean
public "shouldAffectLoadingRequestFrequency"(): boolean
public "isBeingWritten"(): boolean
public "getReloadVersion"(): integer
public "getCacheHashCode"(): integer
public "caveStartOutdated"(arg0: integer, arg1: integer): boolean
public "hasHadTerrain"(): boolean
public "getHighlightsHash"(): integer
public "getDimId"(): string
public "onDimensionClear"(arg0: $MapProcessor$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $LeafRegionTexture$Type): void
public "addDebugLines"(arg0: $List$Type<(string)>, arg1: $MapProcessor$Type, arg2: integer, arg3: integer): void
public "onProcessingEnd"(): void
public "loadCacheTextures"(arg0: $MapProcessor$Type, arg1: $Registry$Type<($Biome$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$Type): boolean
public "shouldBeProcessed"(): boolean
public "postCache"(arg0: $File$Type, arg1: $MapSaveLoad$Type, arg2: boolean): void
public "loadingAnimation"(): boolean
public "preCache"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$Type, arg1: $MapProcessor$Type): void
public "getExtraInfo"(): string
public "skipCaching"(arg0: $MapProcessor$Type): boolean
public "onLimiterRemoval"(arg0: $MapProcessor$Type): void
public "findCacheFile"(arg0: $MapSaveLoad$Type): $File
public "cancelRefresh"(arg0: $MapProcessor$Type): void
public "getSaveExists"(): boolean
public "popWriterPause"(): void
public "getLastVisited"(): long
public "getRegionFile"(): $File
public "setHighlightsHash"(arg0: integer): void
public "setCaveStart"(arg0: integer): void
public "setInitialVersion"(arg0: integer): void
public "setRegionFile"(arg0: $File$Type): void
public "getTimeSinceVisit"(): long
public "setCacheHashCode"(arg0: integer): void
public "setLastSaveTime"(arg0: long): void
public "setRefreshing"(arg0: boolean): void
public "clearRegion"(arg0: $MapProcessor$Type): void
public "setSaveExists"(arg0: boolean): void
public "getLastSaveTime"(): long
public "countChunks"(): integer
public "getMwId"(): string
public "hasVersion"(): boolean
public "getInitialVersion"(): integer
public "pushWriterPause"(): void
public "getWorldId"(): string
public "getBiomeRegistry"(): $Registry<($Biome)>
public "setReloadVersion"(arg0: integer): void
public "restoreMetaData"(arg0: ((integer)[])[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean, arg6: $MapProcessor$Type): void
public "getCaveDepth"(): integer
public "setResaving"(arg0: boolean): void
public "isResaving"(): boolean
public "hasLookedForCache"(): boolean
public "setLookedForCache"(arg0: boolean): void
public "updateCaveMode"(): void
public "unsetHasHadTerrain"(): void
public "checkForUpdates"(arg0: $MapProcessor$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$Type<($BranchLeveledRegion$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "hasRemovableSourceData"(): boolean
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "isRefreshing"(): boolean
public "canRequestReload_unsynced"(): boolean
public "setOutdatedWithOtherLayers"(arg0: boolean): void
public "getRegionX"(): integer
public "shouldCache"(): boolean
public "getRegionZ"(): integer
public "setCacheFile"(arg0: $File$Type): void
public "setShouldCache"(arg0: boolean, arg1: string): void
public "getCacheFile"(): $File
set "parent"(value: $BranchLeveledRegion$Type)
get "loaded"(): boolean
get "version"(): integer
set "version"(value: integer)
get "outdatedWithOtherLayers"(): boolean
get "mutableGlobalPos"(): $BlockPos$MutableBlockPos
get "upToDateCaveStart"(): integer
get "targetHighlightsHash"(): integer
get "pixelResultBuffer"(): (integer)[]
get "writingPaused"(): boolean
get "loadState"(): byte
set "beingWritten"(value: boolean)
get "resting"(): boolean
set "loadState"(value: byte)
get "caveStart"(): integer
get "normalMapData"(): boolean
get "beingWritten"(): boolean
get "reloadVersion"(): integer
get "cacheHashCode"(): integer
get "highlightsHash"(): integer
get "dimId"(): string
get "extraInfo"(): string
get "saveExists"(): boolean
get "lastVisited"(): long
get "regionFile"(): $File
set "highlightsHash"(value: integer)
set "caveStart"(value: integer)
set "initialVersion"(value: integer)
set "regionFile"(value: $File$Type)
get "timeSinceVisit"(): long
set "cacheHashCode"(value: integer)
set "lastSaveTime"(value: long)
set "refreshing"(value: boolean)
set "saveExists"(value: boolean)
get "lastSaveTime"(): long
get "mwId"(): string
get "initialVersion"(): integer
get "worldId"(): string
get "biomeRegistry"(): $Registry<($Biome)>
set "reloadVersion"(value: integer)
get "caveDepth"(): integer
set "resaving"(value: boolean)
get "resaving"(): boolean
set "lookedForCache"(value: boolean)
get "refreshing"(): boolean
set "outdatedWithOtherLayers"(value: boolean)
get "regionX"(): integer
get "regionZ"(): integer
set "cacheFile"(value: $File$Type)
get "cacheFile"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegion$Type = ($MapRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegion_ = $MapRegion$Type;
}}
declare module "packages/xaero/map/highlight/$HighlighterRegistry" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractHighlighter, $AbstractHighlighter$Type} from "packages/xaero/map/highlight/$AbstractHighlighter"

export class $HighlighterRegistry {

constructor()

public "end"(): void
public "register"(arg0: $AbstractHighlighter$Type): void
public "getHighlighters"(): $List<($AbstractHighlighter)>
get "highlighters"(): $List<($AbstractHighlighter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighlighterRegistry$Type = ($HighlighterRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighlighterRegistry_ = $HighlighterRegistry$Type;
}}
declare module "packages/xaero/map/file/export/$PNGExportResultType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PNGExportResultType extends $Enum<($PNGExportResultType)> {
static readonly "NOT_PREPARED": $PNGExportResultType
static readonly "EMPTY": $PNGExportResultType
static readonly "TOO_BIG": $PNGExportResultType
static readonly "IMAGE_TOO_BIG": $PNGExportResultType
static readonly "OUT_OF_MEMORY": $PNGExportResultType
static readonly "BAD_FBO": $PNGExportResultType
static readonly "IO_EXCEPTION": $PNGExportResultType
static readonly "SUCCESS": $PNGExportResultType


public static "values"(): ($PNGExportResultType)[]
public static "valueOf"(arg0: string): $PNGExportResultType
public "getMessage"(): $Component
public "isSuccess"(): boolean
get "message"(): $Component
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExportResultType$Type = (("too_big") | ("out_of_memory") | ("io_exception") | ("success") | ("image_too_big") | ("not_prepared") | ("empty") | ("bad_fbo")) | ($PNGExportResultType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExportResultType_ = $PNGExportResultType$Type;
}}
declare module "packages/xaero/map/highlight/$AbstractHighlighter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $AbstractHighlighter {


public "getBlockHighlightBluntTooltip"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): $Component
public "getBlockHighlightSubtleTooltip"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): $Component
public "regionHasHighlights"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "getChunkHighlitColor"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): (integer)[]
public "isCoveringOutsideDiscovered"(): boolean
public "calculateRegionHash"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): integer
public "addMinimapBlockHighlightTooltips"(arg0: $List$Type<($Component$Type)>, arg1: $ResourceKey$Type<($Level$Type)>, arg2: integer, arg3: integer, arg4: integer): void
public "chunkIsHighlit"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
get "coveringOutsideDiscovered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHighlighter$Type = ($AbstractHighlighter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHighlighter_ = $AbstractHighlighter$Type;
}}
declare module "packages/xaero/map/pool/$MapPool" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"

export class $MapPool<T extends $PoolUnit> {

constructor(arg0: integer)

public "size"(): integer
public "addToPool"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPool$Type<T> = ($MapPool<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPool_<T> = $MapPool$Type<(T)>;
}}
declare module "packages/xaero/map/region/$MapBlock" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$MapPixel, $MapPixel$Type} from "packages/xaero/map/region/$MapPixel"

export class $MapBlock extends $MapPixel {

constructor()

public "equals"(arg0: $MapBlock$Type, arg1: boolean): boolean
public "write"(arg0: $BlockState$Type, arg1: integer, arg2: integer, arg3: $ResourceKey$Type<($Biome$Type)>, arg4: byte, arg5: boolean, arg6: boolean): void
public "getNumberOfOverlays"(): integer
public "setSlopeUnknown"(arg0: boolean): void
public "fixHeightType"(arg0: integer, arg1: integer, arg2: $MapTile$Type, arg3: $MapTileChunk$Type, arg4: $MapTileChunk$Type, arg5: $MapTileChunk$Type, arg6: $MapTileChunk$Type, arg7: integer, arg8: boolean, arg9: $BlockStateShortShapeCache$Type): void
public "getEffectiveHeight"(arg0: boolean): integer
public "getEffectiveHeight"(arg0: $BlockStateShortShapeCache$Type): integer
public "toRenderString"(arg0: $Registry$Type<($Biome$Type)>): string
public "getOverlays"(): $ArrayList<($Overlay)>
public "setHeight"(arg0: integer): void
public "getHeight"(): integer
public "getBiome"(): $ResourceKey<($Biome)>
public "getTopHeight"(): integer
public "prepareForWriting"(arg0: integer): void
public "setBiome"(arg0: $ResourceKey$Type<($Biome$Type)>): void
public "equalsSlopesExcluded"(arg0: $MapBlock$Type): boolean
public "isGrass"(): boolean
public "setVerticalSlope"(arg0: byte): void
public "setTopHeight"(arg0: integer): void
public "getParametres"(): integer
public "addOverlay"(arg0: $Overlay$Type): void
public "setDiagonalSlope"(arg0: byte): void
public "getPixelColour"(arg0: (integer)[], arg1: $MapWriter$Type, arg2: $Level$Type, arg3: $MapDimension$Type, arg4: $Registry$Type<($Block$Type)>, arg5: $MapTileChunk$Type, arg6: $MapTileChunk$Type, arg7: $MapTileChunk$Type, arg8: $MapTileChunk$Type, arg9: $MapTile$Type, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: $BlockPos$MutableBlockPos$Type, arg15: $Registry$Type<($Biome$Type)>, arg16: $Registry$Type<($DimensionType$Type)>, arg17: float, arg18: float, arg19: float, arg20: $BlockTintProvider$Type, arg21: $MapProcessor$Type, arg22: $OverlayManager$Type, arg23: integer, arg24: integer, arg25: $BlockStateShortShapeCache$Type): void
public "getVerticalSlope"(): byte
public "getDiagonalSlope"(): byte
public "getEffectiveTopHeight"(arg0: boolean): integer
get "numberOfOverlays"(): integer
set "slopeUnknown"(value: boolean)
get "overlays"(): $ArrayList<($Overlay)>
set "height"(value: integer)
get "height"(): integer
get "biome"(): $ResourceKey<($Biome)>
get "topHeight"(): integer
set "biome"(value: $ResourceKey$Type<($Biome$Type)>)
get "grass"(): boolean
set "verticalSlope"(value: byte)
set "topHeight"(value: integer)
get "parametres"(): integer
set "diagonalSlope"(value: byte)
get "verticalSlope"(): byte
get "diagonalSlope"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlock$Type = ($MapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapBlock_ = $MapBlock$Type;
}}
declare module "packages/xaero/map/$MapProcessor" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$WorldDataHandler, $WorldDataHandler$Type} from "packages/xaero/map/file/worldsave/$WorldDataHandler"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/map/graphics/$CustomVertexConsumers"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ByteBufferDeallocator, $ByteBufferDeallocator$Type} from "packages/xaero/map/deallocator/$ByteBufferDeallocator"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MapRegionHighlightsPreparer, $MapRegionHighlightsPreparer$Type} from "packages/xaero/map/highlight/$MapRegionHighlightsPreparer"
import {$MessageBox, $MessageBox$Type} from "packages/xaero/map/gui/message/$MessageBox"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MessageBoxRenderer, $MessageBoxRenderer$Type} from "packages/xaero/map/gui/message/render/$MessageBoxRenderer"
import {$CaveStartCalculator, $CaveStartCalculator$Type} from "packages/xaero/map/misc/$CaveStartCalculator"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/map/highlight/$HighlighterRegistry"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$Type} from "packages/xaero/map/radar/tracker/synced/$ClientSyncedTrackedPlayerManager"
import {$MapLimiter, $MapLimiter$Type} from "packages/xaero/map/$MapLimiter"
import {$BiomeGetter, $BiomeGetter$Type} from "packages/xaero/map/biome/$BiomeGetter"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$BiomeColorCalculator, $BiomeColorCalculator$Type} from "packages/xaero/map/biome/$BiomeColorCalculator"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapRunner, $MapRunner$Type} from "packages/xaero/map/$MapRunner"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MapTilePool, $MapTilePool$Type} from "packages/xaero/map/pool/$MapTilePool"
import {$TextureUploader, $TextureUploader$Type} from "packages/xaero/map/graphics/$TextureUploader"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$BrokenBlockTintCache, $BrokenBlockTintCache$Type} from "packages/xaero/map/cache/$BrokenBlockTintCache"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"

export class $MapProcessor {
static readonly "DEFAULT_LIGHT_LEVELS": integer
 "worldBiomeRegistry": $Registry<($Biome)>
 "newWorldBlockRegistry": $Registry<($Block)>
 "newWorldBiomeRegistry": $Registry<($Biome)>
 "newWorldDimensionTypeRegistry": $Registry<($DimensionType)>
readonly "mainStuffSync": any
 "mainWorld": $ClientLevel
 "mainWorldBlockRegistry": $Registry<($Block)>
 "mainWorldBiomeRegistry": $Registry<($Biome)>
 "mainWorldDimensionTypeRegistry": $Registry<($DimensionType)>
 "mainPlayerX": double
 "mainPlayerY": double
 "mainPlayerZ": double
readonly "renderThreadPauseSync": any
readonly "processorThreadPauseSync": any
readonly "uiSync": any
readonly "uiPauseSync": any
 "freeFramePeriod": long
 "selectedField": $Field

constructor(arg0: $MapSaveLoad$Type, arg1: $MapWriter$Type, arg2: $MapLimiter$Type, arg3: $ByteBufferDeallocator$Type, arg4: $MapTilePool$Type, arg5: $OverlayManager$Type, arg6: $TextureUploader$Type, arg7: $WorldDataHandler$Type, arg8: $BranchTextureRenderer$Type, arg9: $MultiTextureRenderTypeRendererProvider$Type, arg10: $CustomVertexConsumers$Type, arg11: $BiomeColorCalculator$Type, arg12: $BlockStateShortShapeCache$Type, arg13: $BiomeGetter$Type, arg14: $BrokenBlockTintCache$Type, arg15: $HighlighterRegistry$Type, arg16: $MapRegionHighlightsPreparer$Type, arg17: $MessageBox$Type, arg18: $MessageBoxRenderer$Type, arg19: $CaveStartCalculator$Type, arg20: $ClientSyncedTrackedPlayerManager$Type)

public "run"(arg0: $MapRunner$Type): void
public "stop"(): void
public "isEqual"(arg0: string, arg1: string, arg2: string): boolean
public "getMessageBoxRenderer"(): $MessageBoxRenderer
public "getAffectingLoadingFrequencyCount"(): integer
public "getWorldDataHandler"(): $WorldDataHandler
public "getMinecraftScheduledTasks"(): $Queue<($Runnable)>
public "resetRenderStartTime"(): void
public "getRenderStartTimeUpdater"(): $Runnable
public "getCrosshairMessage"(): string
public "getBlockStateShortShapeCache"(): $BlockStateShortShapeCache
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getMapWorld"(): $MapWorld
public "isCurrentMapLocked"(): boolean
public "getCurrentWorldId"(): string
public "isWritingPaused"(): boolean
public "getMapSaveLoad"(): $MapSaveLoad
public "getLeafMapRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $MapRegion
public "updateCaveStart"(): void
public "getTilePool"(): $MapTilePool
public "getWorld"(): $ClientLevel
public "getCurrentDimension"(): string
public "initMinimapRender"(arg0: integer, arg1: integer): void
public "isRenderingPaused"(): boolean
public "getGlobalVersion"(): integer
public "regionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "getMapRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $MapRegion
public "isMapWorldUsable"(): boolean
public "isUploadingPaused"(): boolean
public "isUIPaused"(): boolean
public "isProcessed"(arg0: $LeveledRegion$Type<(any)>): boolean
public "addToRefresh"(arg0: $MapRegion$Type, arg1: boolean): void
public "popWriterPause"(): void
public "removeToRefresh"(arg0: $MapRegion$Type): void
public "pushWriterPause"(): void
public "removeMapRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "getMessageBox"(): $MessageBox
public "getProcessedCount"(): integer
public "getLeveledRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(any)>
public "getOverlayManager"(): $OverlayManager
public "getMapLimiter"(): $MapLimiter
public "getCvc"(): $CustomVertexConsumers
public "getFootprints"(): $ArrayList<((double)[])>
public "ignoreWorld"(arg0: $Level$Type): boolean
public "onInit"(arg0: $ClientPacketListener$Type): void
public "pushRenderPause"(arg0: boolean, arg1: boolean): void
public "popRenderPause"(arg0: boolean, arg1: boolean): void
public "getBrightness"(arg0: integer, arg1: $ClientLevel$Type, arg2: boolean): float
public "getBrightness"(arg0: boolean): float
public "getBrightness"(): float
public "setConsideringNetherFairPlayMessage"(arg0: boolean): void
public "isFinished"(): boolean
public "updateDimension"(arg0: $ClientLevel$Type, arg1: $ResourceKey$Type<($Level$Type)>): void
public "serverHasMod"(): boolean
public "getDimensionName"(arg0: $ResourceKey$Type<($Level$Type)>): string
public "onRenderProcess"(arg0: $Minecraft$Type): void
public "setMainValues"(): void
public "getMapWriter"(): $MapWriter
public "updateWorldSpawn"(arg0: $BlockPos$Type, arg1: $ClientLevel$Type): void
public "onWorldUnload"(): void
public "onClientTickStart"(): void
public "waitForLoadingToFinish"(arg0: $Runnable$Type): void
public "getMinimapMapRegion"(arg0: integer, arg1: integer): $MapRegion
public "finalizeMinimapRender"(): void
public "beforeMinimapRegionRender"(arg0: $MapRegion$Type): void
public "getWorldDimensionTypeRegistry"(): $Registry<($DimensionType)>
public "setServerModNetworkVersion"(arg0: integer): void
public "regionDetectionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isConsideringNetherFairPlay"(): boolean
public "getAmbientBrightness"(arg0: $DimensionType$Type): float
public "getBufferDeallocator"(): $ByteBufferDeallocator
public "getServerModNetworkVersion"(): integer
public "getWorldBlockTintProvider"(): $BlockTintProvider
public "getCurrentCaveLayer"(): integer
public "isWaitingForWorldUpdate"(): boolean
public "isCurrentMultiworldWritable"(): boolean
public "getWorldBlockRegistry"(): $Registry<($Block)>
public "getMapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
public "onServerLevelId"(arg0: integer): void
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "getCurrentDimId"(): string
public "isWorldRealms"(arg0: string): boolean
public "getCurrentMWId"(): string
public "isFinalizing"(): boolean
public "addToProcess"(arg0: $LeveledRegion$Type<(any)>): void
public "pushIsLoading"(): void
public "popIsLoading"(): void
public "getMapTile"(arg0: integer, arg1: integer, arg2: integer): $MapTile
public "isProcessingPaused"(): boolean
public "changeWorld"(arg0: $ClientLevel$Type, arg1: $HolderLookup$Type<($Block$Type)>, arg2: $Registry$Type<($Block$Type)>, arg3: $Registry$Type<($Fluid$Type)>, arg4: $Registry$Type<($Biome$Type)>, arg5: $Registry$Type<($DimensionType$Type)>): void
public "updateFootprints"(arg0: integer): void
public "setMultiworld"(arg0: $MapDimension$Type, arg1: string): void
public "isWorldMultiplayer"(arg0: boolean, arg1: string): boolean
public "confirmMultiworld"(arg0: $MapDimension$Type): boolean
public "pushUIPause"(): void
public "popUIPause"(): void
public "removeToProcess"(arg0: $LeveledRegion$Type<(any)>): void
public "getMapChunk"(arg0: integer, arg1: integer, arg2: integer): $MapTileChunk
public "getNewWorld"(): $ClientLevel
public "setGlobalVersion"(arg0: integer): void
public "getRenderStartTime"(): long
public "getDimensionIdForFolder"(arg0: string): $ResourceKey<($Level)>
public "requestCurrentMapDeletion"(): void
public "getHighlighterRegistry"(): $HighlighterRegistry
public "toggleMultiworldType"(arg0: $MapDimension$Type): void
public "updateVisitedDimension"(arg0: $ClientLevel$Type): void
public "getBiomeColorCalculator"(): $BiomeColorCalculator
public "checkForWorldUpdate"(): void
public "quickConfirmMultiworld"(): void
public "getWorldBlockLookup"(): $HolderLookup<($Block)>
public "canQuickConfirmUnsynced"(): boolean
get "messageBoxRenderer"(): $MessageBoxRenderer
get "affectingLoadingFrequencyCount"(): integer
get "worldDataHandler"(): $WorldDataHandler
get "minecraftScheduledTasks"(): $Queue<($Runnable)>
get "renderStartTimeUpdater"(): $Runnable
get "crosshairMessage"(): string
get "blockStateShortShapeCache"(): $BlockStateShortShapeCache
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "mapWorld"(): $MapWorld
get "currentMapLocked"(): boolean
get "currentWorldId"(): string
get "writingPaused"(): boolean
get "mapSaveLoad"(): $MapSaveLoad
get "tilePool"(): $MapTilePool
get "world"(): $ClientLevel
get "currentDimension"(): string
get "renderingPaused"(): boolean
get "globalVersion"(): integer
get "mapWorldUsable"(): boolean
get "uploadingPaused"(): boolean
get "uIPaused"(): boolean
get "messageBox"(): $MessageBox
get "processedCount"(): integer
get "overlayManager"(): $OverlayManager
get "mapLimiter"(): $MapLimiter
get "cvc"(): $CustomVertexConsumers
get "footprints"(): $ArrayList<((double)[])>
get "brightness"(): float
set "consideringNetherFairPlayMessage"(value: boolean)
get "finished"(): boolean
get "mapWriter"(): $MapWriter
get "worldDimensionTypeRegistry"(): $Registry<($DimensionType)>
set "serverModNetworkVersion"(value: integer)
get "consideringNetherFairPlay"(): boolean
get "bufferDeallocator"(): $ByteBufferDeallocator
get "serverModNetworkVersion"(): integer
get "worldBlockTintProvider"(): $BlockTintProvider
get "currentCaveLayer"(): integer
get "waitingForWorldUpdate"(): boolean
get "currentMultiworldWritable"(): boolean
get "worldBlockRegistry"(): $Registry<($Block)>
get "mapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "currentDimId"(): string
get "currentMWId"(): string
get "finalizing"(): boolean
get "processingPaused"(): boolean
get "newWorld"(): $ClientLevel
set "globalVersion"(value: integer)
get "renderStartTime"(): long
get "highlighterRegistry"(): $HighlighterRegistry
get "biomeColorCalculator"(): $BiomeColorCalculator
get "worldBlockLookup"(): $HolderLookup<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapProcessor$Type = ($MapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapProcessor_ = $MapProcessor$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"
import {$MapPool, $MapPool$Type} from "packages/xaero/map/pool/$MapPool"

export class $TextureUploadPool<T extends $TextureUpload> extends $MapPool<(T)> {

constructor(arg0: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Type<T> = ($TextureUploadPool<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool_<T> = $TextureUploadPool$Type<(T)>;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$SubsequentNormal" {
import {$TextureUpload$SubsequentNormal, $TextureUpload$SubsequentNormal$Type} from "packages/xaero/map/graphics/$TextureUpload$SubsequentNormal"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$SubsequentNormal extends $TextureUploadPool<($TextureUpload$SubsequentNormal)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): $TextureUpload$SubsequentNormal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$SubsequentNormal$Type = ($TextureUploadPool$SubsequentNormal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$SubsequentNormal_ = $TextureUploadPool$SubsequentNormal$Type;
}}
declare module "packages/xaero/map/util/linked/$ILinkedChainNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILinkedChainNode<V extends $ILinkedChainNode<(V)>> {

 "isDestroyed"(): boolean
 "getNext"(): V
 "setNext"(arg0: V): void
 "getPrevious"(): V
 "onDestroyed"(): void
 "setPrevious"(arg0: V): void
}

export namespace $ILinkedChainNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkedChainNode$Type<V> = ($ILinkedChainNode<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILinkedChainNode_<V> = $ILinkedChainNode$Type<(V)>;
}}
declare module "packages/xaero/map/file/worldsave/biome/$WorldDataReaderSectionBiomeData" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"

export class $WorldDataReaderSectionBiomeData {

constructor(arg0: $ListTag$Type, arg1: (long)[])

public "get"(arg0: integer, arg1: integer, arg2: integer): string
public "hasDifferentBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataReaderSectionBiomeData$Type = ($WorldDataReaderSectionBiomeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataReaderSectionBiomeData_ = $WorldDataReaderSectionBiomeData$Type;
}}
declare module "packages/xaero/map/file/worldsave/biome/$WorldDataBiomeManager" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$WorldDataReaderSectionBiomeData, $WorldDataReaderSectionBiomeData$Type} from "packages/xaero/map/file/worldsave/biome/$WorldDataReaderSectionBiomeData"
import {$BiomeManager$NoiseBiomeSource, $BiomeManager$NoiseBiomeSource$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager$NoiseBiomeSource"

export class $WorldDataBiomeManager implements $BiomeManager$NoiseBiomeSource {

constructor()

public "clear"(): void
public "getBiome"(arg0: $BiomeManager$Type, arg1: integer, arg2: integer, arg3: integer): $Biome
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "resetChunkBiomeData"(arg0: integer, arg1: integer, arg2: $Biome$Type, arg3: $Registry$Type<($Biome$Type)>): void
public "addBiomeSectionForRegionChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: $WorldDataReaderSectionBiomeData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataBiomeManager$Type = ($WorldDataBiomeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataBiomeManager_ = $WorldDataBiomeManager$Type;
}}
declare module "packages/xaero/map/file/export/$PNGExportResult" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PNGExportResultType, $PNGExportResultType$Type} from "packages/xaero/map/file/export/$PNGExportResultType"

export class $PNGExportResult {

constructor(arg0: $PNGExportResultType$Type, arg1: $Path$Type)

public "getMessage"(): $Component
public "getType"(): $PNGExportResultType
public "getFolderToOpen"(): $Path
get "message"(): $Component
get "type"(): $PNGExportResultType
get "folderToOpen"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExportResult$Type = ($PNGExportResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExportResult_ = $PNGExportResult$Type;
}}
declare module "packages/xaero/map/palette/$Paletted2DFastBitArrayIntStorage" {
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"

export class $Paletted2DFastBitArrayIntStorage {


public "get"(arg0: integer, arg1: integer): integer
public "contains"(arg0: integer): boolean
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "getRaw"(arg0: integer, arg1: integer): integer
public "getPaletteSize"(): integer
public "getPaletteElement"(arg0: integer): integer
public "writeData"(arg0: $DataOutputStream$Type): void
public "getPaletteNonNullCount"(): integer
public "getPaletteElementCount"(arg0: integer): integer
public "getBiomePaletteDebug"(): string
public "getDefaultValueCount"(): integer
get "paletteSize"(): integer
get "paletteNonNullCount"(): integer
get "biomePaletteDebug"(): string
get "defaultValueCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paletted2DFastBitArrayIntStorage$Type = ($Paletted2DFastBitArrayIntStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paletted2DFastBitArrayIntStorage_ = $Paletted2DFastBitArrayIntStorage$Type;
}}
declare module "packages/xaero/map/region/texture/$RegionTextureBiomes" {
import {$FastPalette, $FastPalette$Type} from "packages/xaero/map/palette/$FastPalette"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Paletted2DFastBitArrayIntStorage, $Paletted2DFastBitArrayIntStorage$Type} from "packages/xaero/map/palette/$Paletted2DFastBitArrayIntStorage"

export class $RegionTextureBiomes {

constructor(arg0: $Paletted2DFastBitArrayIntStorage$Type, arg1: $FastPalette$Type<($ResourceKey$Type<($Biome$Type)>)>)

public "getBiomeIndexStorage"(): $Paletted2DFastBitArrayIntStorage
public "getRegionBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
get "biomeIndexStorage"(): $Paletted2DFastBitArrayIntStorage
get "regionBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionTextureBiomes$Type = ($RegionTextureBiomes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionTextureBiomes_ = $RegionTextureBiomes$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$SubsequentNormal" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$SubsequentNormal extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$SubsequentNormal$Type = ($TextureUpload$SubsequentNormal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$SubsequentNormal_ = $TextureUpload$SubsequentNormal$Type;
}}
declare module "packages/xaero/map/effects/$WorldMapStatusEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldMapStatusEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapStatusEffect$Type = ($WorldMapStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapStatusEffect_ = $WorldMapStatusEffect$Type;
}}
declare module "packages/xaero/map/region/texture/$BranchTextureRenderer" {
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $BranchTextureRenderer {

constructor()

public "render"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $RenderTarget$Type, arg6: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchTextureRenderer$Type = ($BranchTextureRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchTextureRenderer_ = $BranchTextureRenderer$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUploadBenchmark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureUploadBenchmark {

constructor(...arg0: (integer)[])

public "pre"(): void
public "post"(arg0: integer): void
public "getTotalsString"(): string
public "getAverage"(arg0: integer): long
public "isFinished"(arg0: integer): boolean
public "isFinished"(): boolean
get "totalsString"(): string
get "finished"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadBenchmark$Type = ($TextureUploadBenchmark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadBenchmark_ = $TextureUploadBenchmark$Type;
}}
declare module "packages/xaero/map/$MapWriter" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$BiomeGetter, $BiomeGetter$Type} from "packages/xaero/map/biome/$BiomeGetter"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$BiomeColorCalculator, $BiomeColorCalculator$Type} from "packages/xaero/map/biome/$BiomeColorCalculator"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapWriter {
static readonly "NO_Y_VALUE": integer
static readonly "MAX_TRANSPARENCY_BLEND_DEPTH": integer
static readonly "DEFAULT_RESOURCE": (string)[]
 "writeFreeSinceLastWrite": long

constructor(arg0: $OverlayManager$Type, arg1: $BlockStateShortShapeCache$Type, arg2: $BiomeGetter$Type)

public "getSectionBasedHeight"(arg0: $LevelChunk$Type, arg1: integer): integer
public "loadPixel"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: $MapBlock$Type, arg3: $MapBlock$Type, arg4: $LevelChunk$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: boolean, arg13: boolean, arg14: $Registry$Type<($Biome$Type)>, arg15: boolean, arg16: integer, arg17: $BlockPos$MutableBlockPos$Type): void
public "getBlockTintIndex"(arg0: $BlockState$Type): integer
public "resetPosition"(): void
public "shouldOverlay"(arg0: $StateHolder$Type<(any), (any)>): boolean
public "getUpdateCounter"(): long
public "setMapProcessor"(arg0: $MapProcessor$Type): void
public "writeMap"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: double, arg3: double, arg4: double, arg5: $Registry$Type<($Biome$Type)>, arg6: $BiomeColorCalculator$Type, arg7: $OverlayManager$Type, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: $BlockPos$MutableBlockPos$Type, arg14: $BlockTintProvider$Type, arg15: integer): boolean
public "onRender"(arg0: $BiomeColorCalculator$Type, arg1: $OverlayManager$Type): void
public "writeChunk"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: integer, arg3: boolean, arg4: $Registry$Type<($Biome$Type)>, arg5: $OverlayManager$Type, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: $BlockPos$MutableBlockPos$Type, arg12: $BlockTintProvider$Type, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: integer, arg18: integer, arg19: integer, arg20: integer, arg21: integer): boolean
public "loadBlockColourFromTexture"(arg0: $BlockState$Type, arg1: boolean, arg2: $Level$Type, arg3: $Registry$Type<($Block$Type)>, arg4: $BlockPos$Type): integer
public "isGlowing"(arg0: $BlockState$Type): boolean
public "isInvisible"(arg0: $BlockState$Type, arg1: $Block$Type, arg2: boolean): boolean
public "hasVanillaColor"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $Registry$Type<($Block$Type)>, arg3: $BlockPos$Type): boolean
public "requestCachedColoursClear"(): void
public "setDirtyInWriteDistance"(arg0: $Player$Type, arg1: $Level$Type): void
public "updateBottomRightTile"(arg0: $MapRegion$Type, arg1: $MapTileChunk$Type, arg2: $MapTileChunk$Type, arg3: integer, arg4: integer): void
get "updateCounter"(): long
set "mapProcessor"(value: $MapProcessor$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWriter$Type = ($MapWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapWriter_ = $MapWriter$Type;
}}
declare module "packages/xaero/map/server/player/$IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/map/server/player/$ServerPlayerData"

export interface $IServerPlayer {

 "getXaeroWorldMapPlayerData"(): $ServerPlayerData
 "setXaeroWorldMapPlayerData"(arg0: $ServerPlayerData$Type): void
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$Type = ($IServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayer_ = $IServerPlayer$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUploader" {
import {$TextureUploadPool$Compressed, $TextureUploadPool$Compressed$Type} from "packages/xaero/map/pool/$TextureUploadPool$Compressed"
import {$TextureUploadPool$SubsequentNormal, $TextureUploadPool$SubsequentNormal$Type} from "packages/xaero/map/pool/$TextureUploadPool$SubsequentNormal"
import {$TextureUploadPool$Normal, $TextureUploadPool$Normal$Type} from "packages/xaero/map/pool/$TextureUploadPool$Normal"
import {$TextureUploadBenchmark, $TextureUploadBenchmark$Type} from "packages/xaero/map/graphics/$TextureUploadBenchmark"
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploadPool$BranchUpdate, $TextureUploadPool$BranchUpdate$Type} from "packages/xaero/map/pool/$TextureUploadPool$BranchUpdate"
import {$TextureUploadPool$BranchDownload, $TextureUploadPool$BranchDownload$Type} from "packages/xaero/map/pool/$TextureUploadPool$BranchDownload"

export class $TextureUploader {
static readonly "NORMAL": integer
static readonly "NORMALDOWNLOAD": integer
static readonly "COMPRESSED": integer
static readonly "BRANCHUPDATE": integer
static readonly "BRANCHUPDATE_ALLOCATE": integer
static readonly "BRANCHDOWNLOAD": integer
static readonly "SUBSEQUENT_NORMAL": integer

constructor(arg0: $TextureUploadPool$Normal$Type, arg1: $TextureUploadPool$Compressed$Type, arg2: $TextureUploadPool$BranchUpdate$Type, arg3: $TextureUploadPool$BranchUpdate$Type, arg4: $TextureUploadPool$BranchDownload$Type, arg5: $TextureUploadPool$SubsequentNormal$Type, arg6: $TextureUploadBenchmark$Type)

public "requestNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): long
public "requestCompressed"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): long
public "uploadTextures"(): void
public "requestUpload"(arg0: $TextureUpload$Type): long
public "requestSubsequentNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): long
public "finishNewestRequestImmediately"(): void
public "requestBranchDownload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): long
public "requestBranchUpdate"(arg0: boolean, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: long, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: $BranchTextureRenderer$Type, arg17: integer, arg18: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploader$Type = ($TextureUploader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploader_ = $TextureUploader$Type;
}}
declare module "packages/xaero/map/region/texture/$LeafRegionTexture" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$RegionTexture, $RegionTexture$Type} from "packages/xaero/map/region/texture/$RegionTexture"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$Type} from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $LeafRegionTexture extends $RegionTexture<($LeafRegionTexture)> {
static readonly "PBO_UNPACK_LENGTH": integer
static readonly "PBO_PACK_LENGTH": integer

constructor(arg0: $MapTileChunk$Type)

public "addDebugLines"(arg0: $List$Type<(string)>): void
public "writeCacheMapData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<($LeafRegionTexture$Type)>): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$Type<($LeafRegionTexture$Type)>, arg6: $MapProcessor$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "shouldIncludeInCache"(): boolean
public "deleteTexturesAndBuffers"(): void
public "getTileChunk"(): $MapTileChunk
public "prepareBuffer"(): void
public "isUploaded"(): boolean
public "resetHeights"(): void
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$Type): void
public "canUpload"(): boolean
public "preUpload"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: $LeveledRegion$Type<($LeafRegionTexture$Type)>, arg4: boolean, arg5: $BlockStateShortShapeCache$Type): void
public "postBufferUpdate"(arg0: boolean): void
public "hasSourceData"(): boolean
public "postUpload"(arg0: $MapProcessor$Type, arg1: $LeveledRegion$Type<($LeafRegionTexture$Type)>, arg2: boolean): void
public "requestHighlightOnlyUpload"(): void
public "shouldHaveContentForBranchUpdate"(): boolean
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
get "tileChunk"(): $MapTileChunk
get "uploaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafRegionTexture$Type = ($LeafRegionTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeafRegionTexture_ = $LeafRegionTexture$Type;
}}
declare module "packages/xaero/map/region/$MapTile" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"

export class $MapTile implements $PoolUnit {
static readonly "CURRENT_WORLD_INTERPRETATION_VERSION": integer

constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
public "isLoaded"(): boolean
public "getBlock"(arg0: integer, arg1: integer): $MapBlock
public "setWrittenOnce"(arg0: boolean): void
public "setWrittenCave"(arg0: integer, arg1: integer): void
public "wasWrittenOnce"(): boolean
public "setBlock"(arg0: integer, arg1: integer, arg2: $MapBlock$Type): void
public "setLoaded"(arg0: boolean): void
public "getWrittenCaveStart"(): integer
public "setWorldInterpretationVersion"(arg0: integer): void
public "getWrittenCaveDepth"(): integer
public "getBlockColumn"(arg0: integer): ($MapBlock)[]
public "getChunkX"(): integer
public "getChunkZ"(): integer
public "getWorldInterpretationVersion"(): integer
get "loaded"(): boolean
set "writtenOnce"(value: boolean)
set "loaded"(value: boolean)
get "writtenCaveStart"(): integer
set "worldInterpretationVersion"(value: integer)
get "writtenCaveDepth"(): integer
get "chunkX"(): integer
get "chunkZ"(): integer
get "worldInterpretationVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTile$Type = ($MapTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTile_ = $MapTile$Type;
}}
declare module "packages/xaero/map/file/worldsave/$WorldDataHandler" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$WorldDataReader, $WorldDataReader$Type} from "packages/xaero/map/file/worldsave/$WorldDataReader"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Executor, $Executor$Type} from "packages/xaero/map/executor/$Executor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$WorldDataHandler$Result, $WorldDataHandler$Result$Type} from "packages/xaero/map/file/worldsave/$WorldDataHandler$Result"

export class $WorldDataHandler {

constructor(arg0: $WorldDataReader$Type, arg1: $Executor$Type)

public "handleRenderExecutor"(): void
public static "onServerWorldUnload"(arg0: $ServerLevel$Type): void
public "getWorldDir"(): $Path
public "buildRegion"(arg0: $MapRegion$Type, arg1: $HolderLookup$Type<($Block$Type)>, arg2: $Registry$Type<($Block$Type)>, arg3: $Registry$Type<($Fluid$Type)>, arg4: boolean, arg5: (integer)[]): $WorldDataHandler$Result
public "getWorldServer"(): $ServerLevel
public "getWorldDataReader"(): $WorldDataReader
public "prepareSingleplayer"(arg0: $Level$Type, arg1: $MapProcessor$Type): void
get "worldDir"(): $Path
get "worldServer"(): $ServerLevel
get "worldDataReader"(): $WorldDataReader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$Type = ($WorldDataHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataHandler_ = $WorldDataHandler$Type;
}}
declare module "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $PoolTextureDirectBufferUnit implements $PoolUnit {

constructor(...arg0: (any)[])

public "reset"(): void
public "create"(...arg0: (any)[]): void
public static "createBuffer"(): $ByteBuffer
public "getDirectBuffer"(): $ByteBuffer
get "directBuffer"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoolTextureDirectBufferUnit$Type = ($PoolTextureDirectBufferUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoolTextureDirectBufferUnit_ = $PoolTextureDirectBufferUnit$Type;
}}
declare module "packages/xaero/map/effects/$NoCaveMapsEffect" {
import {$WorldMapStatusEffect, $WorldMapStatusEffect$Type} from "packages/xaero/map/effects/$WorldMapStatusEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NoCaveMapsEffect extends $WorldMapStatusEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCaveMapsEffect$Type = ($NoCaveMapsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoCaveMapsEffect_ = $NoCaveMapsEffect$Type;
}}
declare module "packages/xaero/map/file/$OldFormatSupport" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $OldFormatSupport {
 "cc2BiomeRenames": $ImmutableMap<(string), (string)>

constructor()

public "fixBiome"(arg0: integer, arg1: integer, arg2: string): string
public "fixBiome"(arg0: string, arg1: integer): string
public "fixBiome"(arg0: integer, arg1: integer): string
public "loadModdedStates"(arg0: $MapProcessor$Type, arg1: string, arg2: string, arg3: string): void
public "loadVanillaStates"(): void
public "fixBlock"(arg0: $CompoundTag$Type, arg1: integer): void
public "getStateForId"(arg0: integer): $BlockState
public "loadStates"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldFormatSupport$Type = ($OldFormatSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OldFormatSupport_ = $OldFormatSupport$Type;
}}
declare module "packages/xaero/map/region/$MapTileChunk" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$LeafRegionTexture, $LeafRegionTexture$Type} from "packages/xaero/map/region/texture/$LeafRegionTexture"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $MapTileChunk {
static readonly "SIDE_LENGTH": integer

constructor(arg0: $MapRegion$Type, arg1: integer, arg2: integer)

public "toString"(): string
public "clean"(arg0: $MapProcessor$Type): void
public "getZ"(): integer
public "getLoadState"(): integer
public "setLoadState"(arg0: byte): void
public "getLeafTexture"(): $LeafRegionTexture
public "setToUpdateBuffers"(arg0: boolean): void
public "wasChanged"(): boolean
public "includeInSave"(): boolean
public "setHasHadTerrain"(): void
public "hasHadTerrain"(): boolean
public "getTileGridsCache"(): ((byte)[])[]
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $MapProcessor$Type, arg6: integer, arg7: integer): void
public "unsetHasHadTerrain"(): void
public "getTile"(arg0: integer, arg1: integer): $MapTile
public "setTile"(arg0: integer, arg1: integer, arg2: $MapTile$Type, arg3: $BlockStateShortShapeCache$Type): void
public "updateBuffers"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: boolean, arg4: $BlockStateShortShapeCache$Type): void
public "setChanged"(arg0: boolean): void
public "getX"(): integer
public "getTimer"(): integer
public "getNeighbourTileChunk"(arg0: integer, arg1: integer, arg2: $MapProcessor$Type, arg3: boolean): $MapTileChunk
public "hasHighlightsIfUndiscovered"(): boolean
public "resetHeights"(): void
public "decTimer"(): void
public "writeCacheData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<($LeafRegionTexture$Type)>): void
public "getInRegion"(): $MapRegion
public "hasHighlights"(): boolean
public "getToUpdateBuffers"(): boolean
public "unincludeInSave"(): void
public "setHasHighlights"(arg0: boolean): void
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ByteBuffer$Type, arg7: integer): void
public "setHasHighlightsIfUndiscovered"(arg0: boolean): void
get "z"(): integer
get "loadState"(): integer
set "loadState"(value: byte)
get "leafTexture"(): $LeafRegionTexture
set "toUpdateBuffers"(value: boolean)
get "tileGridsCache"(): ((byte)[])[]
set "changed"(value: boolean)
get "x"(): integer
get "timer"(): integer
get "inRegion"(): $MapRegion
get "toUpdateBuffers"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileChunk$Type = ($MapTileChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTileChunk_ = $MapTileChunk$Type;
}}
declare module "packages/xaero/map/file/$MapRegionInfo" {
import {$File, $File$Type} from "packages/java/io/$File"

export interface $MapRegionInfo {

 "getRegionX"(): integer
 "shouldCache"(): boolean
 "getRegionZ"(): integer
 "getDimId"(): string
 "setCacheFile"(arg0: $File$Type): void
 "setShouldCache"(arg0: boolean, arg1: string): void
 "getCacheFile"(): $File
 "getRegionFile"(): $File
 "getMwId"(): string
 "getWorldId"(): string
 "hasLookedForCache"(): boolean
}

export namespace $MapRegionInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionInfo$Type = ($MapRegionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegionInfo_ = $MapRegionInfo$Type;
}}
declare module "packages/xaero/map/$MapFullReloader" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"

export class $MapFullReloader {
static readonly "CONVERTED_WORLD_SAVE_MW": string

constructor(arg0: integer, arg1: boolean, arg2: $Iterator$Type<($RegionDetection$Type)>, arg3: $MapDimension$Type, arg4: $MapProcessor$Type)

public "onRenderProcess"(): void
public "isResave"(): boolean
public "isPartOfReload"(arg0: $MapRegion$Type): boolean
get "resave"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapFullReloader$Type = ($MapFullReloader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapFullReloader_ = $MapFullReloader$Type;
}}
declare module "packages/xaero/map/misc/$CaveStartCalculator" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"

export class $CaveStartCalculator {

constructor(arg0: $MapWriter$Type)

public "getCaving"(arg0: double, arg1: double, arg2: double, arg3: $Level$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveStartCalculator$Type = ($CaveStartCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveStartCalculator_ = $CaveStartCalculator$Type;
}}
declare module "packages/xaero/map/server/level/$LevelMapProperties" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BufferedReader, $BufferedReader$Type} from "packages/java/io/$BufferedReader"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WorldMapMessage, $WorldMapMessage$Type} from "packages/xaero/map/message/$WorldMapMessage"

export class $LevelMapProperties extends $WorldMapMessage<($LevelMapProperties)> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $PrintWriter$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $LevelMapProperties
public "read"(arg0: $BufferedReader$Type): void
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelMapProperties$Type = ($LevelMapProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelMapProperties_ = $LevelMapProperties$Type;
}}
declare module "packages/xaero/map/gui/$IScreenBase" {
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/map/gui/dropdown/$DropDownWidget"
import {$IDropDownContainer, $IDropDownContainer$Type} from "packages/xaero/map/gui/dropdown/$IDropDownContainer"

export interface $IScreenBase extends $IDropDownContainer {

 "shouldSkipWorldRender"(): boolean
 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
}

export namespace $IScreenBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenBase$Type = ($IScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenBase_ = $IScreenBase$Type;
}}
declare module "packages/xaero/map/highlight/$MapRegionHighlightsPreparer" {
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"

export class $MapRegionHighlightsPreparer {

constructor()

public "prepare"(arg0: $MapRegion$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "prepare"(arg0: $MapRegion$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionHighlightsPreparer$Type = ($MapRegionHighlightsPreparer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegionHighlightsPreparer_ = $MapRegionHighlightsPreparer$Type;
}}
declare module "packages/xaero/map/world/$MapDimension" {
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"
import {$LayeredRegionManager, $LayeredRegionManager$Type} from "packages/xaero/map/region/$LayeredRegionManager"
import {$MapFullReloader, $MapFullReloader$Type} from "packages/xaero/map/$MapFullReloader"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MapConnectionNode, $MapConnectionNode$Type} from "packages/xaero/map/world/$MapConnectionNode"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$DimensionSpecialEffects, $DimensionSpecialEffects$Type} from "packages/net/minecraft/client/renderer/$DimensionSpecialEffects"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/map/highlight/$HighlighterRegistry"

export class $MapDimension {
 "futureMultiworldWritable": boolean
 "futureMultiworldServerBased": boolean
 "currentMultiworldWritable": boolean
readonly "regionsToCache": $ArrayList<($LeveledRegion<(any)>)>

constructor(arg0: $MapWorld$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $HighlighterRegistry$Type)

public "clear"(): void
public "isUsingUnknownDimensionType"(arg0: $Registry$Type<($DimensionType$Type)>): boolean
public "getMapWorld"(): $MapWorld
public "isUsingWorldSave"(): boolean
public "isCacheOnlyMode"(arg0: $Registry$Type<($DimensionType$Type)>): boolean
public "getCaveModeType"(): integer
public "getMultiworldName"(arg0: string): string
public "calculateDimScale"(arg0: $Registry$Type<($DimensionType$Type)>): double
public "getDimId"(): $ResourceKey<($Level)>
public "calculateDimDiv"(arg0: $Registry$Type<($DimensionType$Type)>, arg1: $DimensionType$Type): double
public "getDimensionType"(arg0: $Registry$Type<($DimensionType$Type)>): $DimensionType
public static "getDimensionType"(arg0: $MapDimension$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $Registry$Type<($DimensionType$Type)>): $DimensionType
public "getDimensionTypeId"(): $ResourceLocation
public "getFullReloader"(): $MapFullReloader
public "getShadowR"(): float
public "getShadowB"(): float
public "toggleCaveModeType"(arg0: boolean): void
public "getShadowG"(): float
public "isAutoSelected"(): boolean
public "deleteMultiworldId"(arg0: string): void
public "getCurrentMultiworld"(): string
public "getHighlightHandler"(): $DimensionHighlighterHandler
public "getMultiworldIdsCopy"(): $List<(string)>
public "getSkyDarken"(arg0: float, arg1: $ClientLevel$Type, arg2: $Registry$Type<($DimensionType$Type)>): float
public "getWorldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
public "startFullMapReload"(arg0: integer, arg1: boolean, arg2: $MapProcessor$Type): void
public "clearFullMapReload"(): void
public "getLayeredMapRegions"(): $LayeredRegionManager
public "preDetection"(): void
public "onCreationUnsynced"(): void
public "getPlayerMapKey"(): $MapConnectionNode
public "getMainFolderPath"(): $Path
public "saveConfigUnsynced"(): void
public "getOldFolderPath"(): $Path
public "setMultiworldName"(arg0: string, arg1: string): void
public "switchToFutureMultiworldWritableValueUnsynced"(): void
public "pickDefaultCustomMultiworldUnsynced"(): void
public "addWorldSaveRegionDetection"(arg0: $RegionDetection$Type): void
public "resetCustomMultiworldUnsynced"(): void
public "switchToFutureUnsynced"(): void
public "isFutureMultiworldServerBased"(): boolean
public "getFutureMultiworldUnsynced"(): string
public "setMultiworldUnsynced"(arg0: string): void
public "deleteMultiworldMapDataUnsynced"(arg0: string): void
public "hasConfirmedMultiworld"(): boolean
public "updateFutureAutomaticUnsynced"(arg0: $Minecraft$Type, arg1: any): void
public "hasDoneRegionDetection"(): boolean
public "onWorldChangeUnsynced"(arg0: $Level$Type): void
public "getDimensionEffects"(arg0: $Registry$Type<($DimensionType$Type)>): $DimensionSpecialEffects
public "confirmMultiworldUnsynced"(): void
public "onClearCachedHighlightHashes"(): void
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "getLinkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
public "getFutureCustomSelectedMultiworld"(): string
public "getWorldSaveRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "isFutureUsingWorldSaveUnsynced"(): boolean
public "addMultiworldChecked"(arg0: string): boolean
public "getSelectedMapKeyUnsynced"(): $MapConnectionNode
get "mapWorld"(): $MapWorld
get "usingWorldSave"(): boolean
get "caveModeType"(): integer
get "dimId"(): $ResourceKey<($Level)>
get "dimensionTypeId"(): $ResourceLocation
get "fullReloader"(): $MapFullReloader
get "shadowR"(): float
get "shadowB"(): float
get "shadowG"(): float
get "autoSelected"(): boolean
get "currentMultiworld"(): string
get "highlightHandler"(): $DimensionHighlighterHandler
get "multiworldIdsCopy"(): $List<(string)>
get "worldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
get "layeredMapRegions"(): $LayeredRegionManager
get "playerMapKey"(): $MapConnectionNode
get "mainFolderPath"(): $Path
get "oldFolderPath"(): $Path
get "futureMultiworldServerBased"(): boolean
get "futureMultiworldUnsynced"(): string
set "multiworldUnsynced"(value: string)
get "linkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
get "futureCustomSelectedMultiworld"(): string
get "futureUsingWorldSaveUnsynced"(): boolean
get "selectedMapKeyUnsynced"(): $MapConnectionNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDimension$Type = ($MapDimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDimension_ = $MapDimension$Type;
}}
declare module "packages/xaero/map/biome/$BiomeColorCalculator" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BiomeColorCalculator {
readonly "UNREACHABLE_BIOME": $ResourceKey<($Biome)>
readonly "RIVER_BIOME": $ResourceKey<($Biome)>

constructor()

public "prepare"(arg0: boolean): void
public "getBiomeColor"(arg0: $ColorResolver$Type, arg1: boolean, arg2: $BlockPos$MutableBlockPos$Type, arg3: $MapTile$Type, arg4: integer, arg5: $Registry$Type<($Biome$Type)>, arg6: $MapProcessor$Type): integer
public "getBiomeAtPos"(arg0: $BlockPos$Type, arg1: $MapTile$Type, arg2: integer, arg3: $MapProcessor$Type): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeColorCalculator$Type = ($BiomeColorCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeColorCalculator_ = $BiomeColorCalculator$Type;
}}
declare module "packages/xaero/map/region/$LayeredRegionManager" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$MapLayer, $MapLayer$Type} from "packages/xaero/map/region/$MapLayer"

export class $LayeredRegionManager {

constructor(arg0: $MapDimension$Type)

public "remove"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(any)>
public "clear"(): void
public "size"(): integer
public "getLayer"(arg0: integer): $MapLayer
public "bumpLoadedRegion"(arg0: $MapRegion$Type): void
public "bumpLoadedRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "putLeaf"(arg0: integer, arg1: integer, arg2: $MapRegion$Type): void
public "loadedCount"(): integer
public "getLoadedRegion"(arg0: integer): $LeveledRegion<(any)>
public "getLeaf"(arg0: integer, arg1: integer, arg2: integer): $MapRegion
public "getUnsyncedSet"(): $Set<($LeveledRegion<(any)>)>
public "applyToEachLoadedLayer"(arg0: $BiConsumer$Type<(integer), ($MapLayer$Type)>): void
public "preDetection"(): void
public "addLoadedRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "addListRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "removeLoadedRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "removeListRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "onClearCachedHighlightHashes"(): void
public "getLoadedListUnsynced"(): $List<($LeveledRegion<(any)>)>
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
get "unsyncedSet"(): $Set<($LeveledRegion<(any)>)>
get "loadedListUnsynced"(): $List<($LeveledRegion<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredRegionManager$Type = ($LayeredRegionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredRegionManager_ = $LayeredRegionManager$Type;
}}
declare module "packages/xaero/map/executor/$Executor" {
import {$ProcessorHandle, $ProcessorHandle$Type} from "packages/net/minecraft/util/thread/$ProcessorHandle"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$BlockableEventLoop, $BlockableEventLoop$Type} from "packages/net/minecraft/util/thread/$BlockableEventLoop"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Executor extends $BlockableEventLoop<($Runnable)> {

constructor(arg0: string, arg1: $Thread$Type)

public "m_18699_"(): void
public static "of"<Msg>(arg0: string, arg1: $Consumer$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$Type = ($Executor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Executor_ = $Executor$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/map/server/radar/tracker/$ISyncedPlayerTrackerSystem"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $SyncedPlayerTrackerSystemManager {

constructor()

public "register"(arg0: string, arg1: $ISyncedPlayerTrackerSystem$Type): void
public "getSystems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
get "systems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTrackerSystemManager$Type = ($SyncedPlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTrackerSystemManager_ = $SyncedPlayerTrackerSystemManager$Type;
}}
declare module "packages/xaero/map/message/$WorldMapMessage" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $WorldMapMessage<T extends $WorldMapMessage<(T)>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapMessage$Type<T> = ($WorldMapMessage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapMessage_<T> = $WorldMapMessage$Type<(T)>;
}}
declare module "packages/xaero/map/gui/$GuiSettings" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ISettingEntry, $ISettingEntry$Type} from "packages/xaero/map/gui/$ISettingEntry"
import {$ScreenBase, $ScreenBase$Type} from "packages/xaero/map/gui/$ScreenBase"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export class $GuiSettings extends $ScreenBase {
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Component$Type, arg1: $Screen$Type, arg2: $Screen$Type)

public "getIndex"(arg0: $GuiEventListener$Type): integer
public "restoreFocus"(arg0: integer): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "getEntriesCopy"(): ($ISettingEntry)[]
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "m_7856_"(): void
public "tick"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
get "entriesCopy"(): ($ISettingEntry)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSettings$Type = ($GuiSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSettings_ = $GuiSettings$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$BranchDownload" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$BranchDownload extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$BranchDownload$Type = ($TextureUpload$BranchDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$BranchDownload_ = $TextureUpload$BranchDownload$Type;
}}
declare module "packages/xaero/map/server/$MinecraftServerData" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$Type} from "packages/xaero/map/server/radar/tracker/$SyncedPlayerTrackerSystemManager"
import {$SyncedPlayerTracker, $SyncedPlayerTracker$Type} from "packages/xaero/map/server/radar/tracker/$SyncedPlayerTracker"
import {$LevelMapProperties, $LevelMapProperties$Type} from "packages/xaero/map/server/level/$LevelMapProperties"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $MinecraftServerData {

constructor(arg0: $SyncedPlayerTrackerSystemManager$Type, arg1: $SyncedPlayerTracker$Type)

public static "get"(arg0: $MinecraftServer$Type): $MinecraftServerData
public "getLevelProperties"(arg0: $Path$Type): $LevelMapProperties
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerData$Type = ($MinecraftServerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerData_ = $MinecraftServerData$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $ISyncedPlayerTrackerSystem {

 "getTrackingLevel"(arg0: $Player$Type, arg1: $Player$Type): integer
 "isPartySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedPlayerTrackerSystem$Type = ($ISyncedPlayerTrackerSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncedPlayerTrackerSystem_ = $ISyncedPlayerTrackerSystem$Type;
}}
declare module "packages/xaero/map/mcworld/$WorldMapClientWorldData" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$Type} from "packages/xaero/map/message/basic/$ClientboundRulesPacket"

export class $WorldMapClientWorldData {
 "serverLevelId": integer
 "usedServerLevelId": integer
 "latestSpawn": $BlockPos
 "usedSpawn": $BlockPos

constructor(arg0: $ClientLevel$Type)

public "getSyncedRules"(): $ClientboundRulesPacket
public "setServerModNetworkVersion"(arg0: integer): void
public "getServerModNetworkVersion"(): integer
public "setSyncedRules"(arg0: $ClientboundRulesPacket$Type): void
get "syncedRules"(): $ClientboundRulesPacket
set "serverModNetworkVersion"(value: integer)
get "serverModNetworkVersion"(): integer
set "syncedRules"(value: $ClientboundRulesPacket$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapClientWorldData$Type = ($WorldMapClientWorldData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapClientWorldData_ = $WorldMapClientWorldData$Type;
}}
declare module "packages/xaero/map/biome/$BiomeGetter" {
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BiomeGetter {
readonly "PLACEHOLDER_BIOME": $ResourceKey<($Biome)>
readonly "UNKNOWN_BIOME": $ResourceKey<($Biome)>

constructor()

public "getBiome"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Registry$Type<($Biome$Type)>): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGetter$Type = ($BiomeGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGetter_ = $BiomeGetter$Type;
}}
declare module "packages/xaero/map/file/worldsave/$WorldDataHandler$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WorldDataHandler$Result extends $Enum<($WorldDataHandler$Result)> {
static readonly "SUCCESS": $WorldDataHandler$Result
static readonly "FAIL": $WorldDataHandler$Result
static readonly "CANCEL": $WorldDataHandler$Result


public static "values"(): ($WorldDataHandler$Result)[]
public static "valueOf"(arg0: string): $WorldDataHandler$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$Result$Type = (("cancel") | ("fail") | ("success")) | ($WorldDataHandler$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataHandler$Result_ = $WorldDataHandler$Result$Type;
}}
declare module "packages/xaero/map/region/$LeveledRegion" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$RegionTexture, $RegionTexture$Type} from "packages/xaero/map/region/texture/$RegionTexture"
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$FastPalette, $FastPalette$Type} from "packages/xaero/map/palette/$FastPalette"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BranchLeveledRegion, $BranchLeveledRegion$Type} from "packages/xaero/map/region/$BranchLeveledRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$File, $File$Type} from "packages/java/io/$File"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"

export class $LeveledRegion<T extends $RegionTexture<(T)>> implements $Comparable<($LeveledRegion<(T)>)> {
static readonly "SIDE_LENGTH": integer
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]

constructor(arg0: string, arg1: string, arg2: string, arg3: $MapDimension$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$Type)

public "toString"(): string
public "compareTo"(arg0: $LeveledRegion$Type<(T)>): integer
public "getParent"(): $BranchLeveledRegion
public "isLoaded"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "uncountTextureBiomes"(arg0: $RegionTexture$Type<(any)>): void
public "getAndResetCachedTextureVersion"(arg0: integer, arg1: integer): integer
public "getBiomePaletteIndex"(arg0: $ResourceKey$Type<($Biome$Type)>): integer
public "cleanAndCacheRequestsBlocked"(): boolean
public "afterLimiterRemoval"(arg0: $MapProcessor$Type): void
public "onBiomeRemovedFromTexture"(arg0: integer): void
public "onBiomeAddedToTexture"(arg0: $ResourceKey$Type<($Biome$Type)>): integer
public "processWhenLoadedChunksExist"(arg0: integer): void
public "getLevel"(): integer
public static "setComparison"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getDim"(): $MapDimension
public "getCaveLayer"(): integer
public "shouldAffectLoadingRequestFrequency"(): boolean
public "isMetaLoaded"(): boolean
public "getRegionX"(): integer
public "shouldCache"(): boolean
public "getRegionZ"(): integer
public "onDimensionClear"(arg0: $MapProcessor$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: T): void
public "hasTextures"(): boolean
public "addDebugLines"(arg0: $List$Type<(string)>, arg1: $MapProcessor$Type, arg2: integer, arg3: integer): void
public "setCacheFile"(arg0: $File$Type): void
public "deleteGLBuffers"(): void
public "setShouldCache"(arg0: boolean, arg1: string): void
public "getCacheFile"(): $File
public "isAllCachePrepared"(): boolean
public "onProcessingEnd"(): void
public "loadCacheTextures"(arg0: $MapProcessor$Type, arg1: $Registry$Type<($Biome$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$Type): boolean
public "saveBiomePalette"(arg0: $DataOutputStream$Type): void
public "getBiomeKey"(arg0: integer): $ResourceKey<($Biome)>
public "saveCacheTextures"(arg0: $File$Type, arg1: integer): boolean
public "shouldBeProcessed"(): boolean
public "ensureBiomePalette"(): void
public "confirmMetaLoaded"(): void
public "getRootRegion"(): $LeveledRegion<(any)>
public "postCache"(arg0: $File$Type, arg1: $MapSaveLoad$Type, arg2: boolean): void
public "getBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
public "loadingAnimation"(): boolean
public "resetBiomePalette"(): void
public "preCache"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$Type, arg1: $MapProcessor$Type): void
public "getExtraInfo"(): string
public "skipCaching"(arg0: $MapProcessor$Type): boolean
public "onLimiterRemoval"(arg0: $MapProcessor$Type): void
public "findCacheFile"(arg0: $MapSaveLoad$Type): $File
public "getTexture"(arg0: integer, arg1: integer): T
public "createTexture"(arg0: integer, arg1: integer): T
public "deleteBuffers"(): void
public "checkForUpdates"(arg0: $MapProcessor$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$Type<($BranchLeveledRegion$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "reloadHasBeenRequested"(): boolean
public "recacheHasBeenRequested"(): boolean
public "hasRemovableSourceData"(): boolean
public "setRecacheHasBeenRequested"(arg0: boolean, arg1: string): void
public "getBiomePaletteSize"(): integer
public "setReloadHasBeenRequested"(arg0: boolean, arg1: string): void
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "deleteTexturesAndBuffers"(): void
public "calculateSortingDistance"(): void
public "isRefreshing"(): boolean
public "calculateSortingChunkDistance"(): void
public "shouldAllowAnotherRegionToLoad"(): boolean
public "setAllCachePrepared"(arg0: boolean): void
get "parent"(): $BranchLeveledRegion
get "loaded"(): boolean
get "level"(): integer
get "dim"(): $MapDimension
get "caveLayer"(): integer
get "metaLoaded"(): boolean
get "regionX"(): integer
get "regionZ"(): integer
set "cacheFile"(value: $File$Type)
get "cacheFile"(): $File
get "allCachePrepared"(): boolean
get "rootRegion"(): $LeveledRegion<(any)>
get "biomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
get "extraInfo"(): string
get "biomePaletteSize"(): integer
get "refreshing"(): boolean
set "allCachePrepared"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeveledRegion$Type<T> = ($LeveledRegion<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeveledRegion_<T> = $LeveledRegion$Type<(T)>;
}}
declare module "packages/xaero/map/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ClientSyncedTrackedPlayerManager {

constructor()

public "remove"(arg0: $UUID$Type): void
public "update"(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
public "reset"(): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientSyncedTrackedPlayerManager_ = $ClientSyncedTrackedPlayerManager$Type;
}}
declare module "packages/xaero/map/palette/$FastPalette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastPalette<T> {


public "add"(arg0: T, arg1: integer): integer
public "add"(arg0: T): integer
public "remove"(arg0: integer): void
public "get"(arg0: integer): T
public "append"(arg0: T, arg1: integer): integer
public "replace"(arg0: T, arg1: T): boolean
public "replace"(arg0: integer, arg1: T): boolean
public "count"(arg0: integer, arg1: boolean): integer
public "getSize"(): integer
public "getIndex"(arg0: T): integer
public "getCount"(arg0: integer): integer
public "addNull"(): void
public "getNonNullCount"(): integer
get "size"(): integer
get "nonNullCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastPalette$Type<T> = ($FastPalette<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastPalette_<T> = $FastPalette$Type<(T)>;
}}
declare module "packages/xaero/map/$WorldMapSession" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$ControlsHandler, $ControlsHandler$Type} from "packages/xaero/map/controls/$ControlsHandler"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export class $WorldMapSession {

constructor()

public "init"(arg0: $ClientPacketListener$Type, arg1: long): void
public "cleanup"(): void
public static "getForPlayer"(arg0: $LocalPlayer$Type): $WorldMapSession
public "getMapProcessor"(): $MapProcessor
public "getControlsHandler"(): $ControlsHandler
public static "getCurrentSession"(): $WorldMapSession
public "isUsable"(): boolean
get "mapProcessor"(): $MapProcessor
get "controlsHandler"(): $ControlsHandler
get "currentSession"(): $WorldMapSession
get "usable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapSession$Type = ($WorldMapSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapSession_ = $WorldMapSession$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$BranchUpdate" {
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"
import {$TextureUpload$BranchUpdate, $TextureUpload$BranchUpdate$Type} from "packages/xaero/map/graphics/$TextureUpload$BranchUpdate"

export class $TextureUploadPool$BranchUpdate extends $TextureUploadPool<($TextureUpload$BranchUpdate)> {

constructor(arg0: integer, arg1: boolean)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BranchTextureRenderer$Type, arg16: integer, arg17: integer): $TextureUpload$BranchUpdate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchUpdate$Type = ($TextureUploadPool$BranchUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$BranchUpdate_ = $TextureUploadPool$BranchUpdate$Type;
}}
declare module "packages/xaero/map/world/$MapWorld" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MapConnectionManager, $MapConnectionManager$Type} from "packages/xaero/map/world/$MapConnectionManager"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapConnectionNode, $MapConnectionNode$Type} from "packages/xaero/map/world/$MapConnectionNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"

export class $MapWorld {

constructor(arg0: string, arg1: string, arg2: $MapProcessor$Type)

public "load"(): void
public "getDimensions"(arg0: $List$Type<($MapDimension$Type)>): void
public "getCustomDimensionId"(): $ResourceKey<($Level)>
public "getFutureDimensionId"(): $ResourceKey<($Level)>
public "isUsingCustomDimension"(): boolean
public "isUsingUnknownDimensionType"(): boolean
public "isCacheOnlyMode"(): boolean
public "getCurrentDimension"(): $MapDimension
public "isMultiplayer"(): boolean
public "getFutureDimension"(): $MapDimension
public "toggleDimension"(arg0: boolean): void
public "isIgnoreHeightmaps"(): boolean
public "getDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $MapDimension
public "saveConfig"(): void
public "getMapProcessor"(): $MapProcessor
public "isTeleportAllowed"(): boolean
public "setIgnoreHeightmaps"(arg0: boolean): void
public "getCurrentMultiworld"(): string
public "createDimensionUnsynced"(arg0: $ResourceKey$Type<($Level$Type)>): $MapDimension
public "clearAllCachedHighlightHashes"(): void
public "setTeleportAllowed"(arg0: boolean): void
public "getCurrentDimensionId"(): $ResourceKey<($Level)>
public "getMainId"(): string
public "getPotentialDimId"(): $ResourceKey<($Level)>
public "getDimensionsList"(): $List<($MapDimension)>
public "getMapConnections"(): $MapConnectionManager
public "getPlayerMapKey"(): $MapConnectionNode
public "switchToFutureMultiworldTypeUnsynced"(): void
public "setFutureDimensionId"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "switchToFutureUnsynced"(): void
public "confirmMultiworldTypeUnsynced"(): void
public "getFutureMultiworldUnsynced"(): string
public "isIgnoreServerLevelId"(): boolean
public "onWorldChangeUnsynced"(arg0: $ClientLevel$Type): void
public "toggleMultiworldTypeUnsynced"(): void
public "isCurrentMultiworldTypeConfirmed"(): boolean
public "getFutureMultiworldType"(arg0: $MapDimension$Type): integer
public "unconfirmMultiworldTypeUnsynced"(): void
public "getCurrentMultiworldType"(): integer
public "getPlayerTeleportCommandFormat"(): string
public "setPlayerTeleportCommandFormat"(arg0: string): void
public "getDimensionTeleportCommandFormat"(): string
public "setCustomDimensionId"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getOldUnfixedMainId"(): string
public "isFutureMultiworldTypeConfirmed"(arg0: $MapDimension$Type): boolean
public "setTeleportCommandFormat"(arg0: string): void
public "getTeleportCommandFormat"(): string
public "setDimensionTeleportCommandFormat"(arg0: string): void
get "customDimensionId"(): $ResourceKey<($Level)>
get "futureDimensionId"(): $ResourceKey<($Level)>
get "usingCustomDimension"(): boolean
get "usingUnknownDimensionType"(): boolean
get "cacheOnlyMode"(): boolean
get "currentDimension"(): $MapDimension
get "multiplayer"(): boolean
get "futureDimension"(): $MapDimension
get "ignoreHeightmaps"(): boolean
get "mapProcessor"(): $MapProcessor
get "teleportAllowed"(): boolean
set "ignoreHeightmaps"(value: boolean)
get "currentMultiworld"(): string
set "teleportAllowed"(value: boolean)
get "currentDimensionId"(): $ResourceKey<($Level)>
get "mainId"(): string
get "potentialDimId"(): $ResourceKey<($Level)>
get "dimensionsList"(): $List<($MapDimension)>
get "mapConnections"(): $MapConnectionManager
get "playerMapKey"(): $MapConnectionNode
set "futureDimensionId"(value: $ResourceKey$Type<($Level$Type)>)
get "futureMultiworldUnsynced"(): string
get "ignoreServerLevelId"(): boolean
get "currentMultiworldTypeConfirmed"(): boolean
get "currentMultiworldType"(): integer
get "playerTeleportCommandFormat"(): string
set "playerTeleportCommandFormat"(value: string)
get "dimensionTeleportCommandFormat"(): string
set "customDimensionId"(value: $ResourceKey$Type<($Level$Type)>)
get "oldUnfixedMainId"(): string
set "teleportCommandFormat"(value: string)
get "teleportCommandFormat"(): string
set "dimensionTeleportCommandFormat"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWorld$Type = ($MapWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapWorld_ = $MapWorld$Type;
}}
declare module "packages/xaero/map/gui/$ExportScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$GuiSettings, $GuiSettings$Type} from "packages/xaero/map/gui/$GuiSettings"
import {$PNGExportResult, $PNGExportResult$Type} from "packages/xaero/map/file/export/$PNGExportResult"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapTileSelection, $MapTileSelection$Type} from "packages/xaero/map/gui/$MapTileSelection"

export class $ExportScreen extends $GuiSettings {
 "fullExport": boolean
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Screen$Type, arg1: $Screen$Type, arg2: $MapProcessor$Type, arg3: $MapTileSelection$Type)

public "getSelection"(): $MapTileSelection
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "m_7856_"(): void
public "onExportDone"(arg0: $PNGExportResult$Type): void
get "selection"(): $MapTileSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExportScreen$Type = ($ExportScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExportScreen_ = $ExportScreen$Type;
}}
declare module "packages/xaero/map/effects/$NoWorldMapEffect" {
import {$WorldMapStatusEffect, $WorldMapStatusEffect$Type} from "packages/xaero/map/effects/$WorldMapStatusEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NoWorldMapEffect extends $WorldMapStatusEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoWorldMapEffect$Type = ($NoWorldMapEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoWorldMapEffect_ = $NoWorldMapEffect$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$BranchDownload" {
import {$TextureUpload$BranchDownload, $TextureUpload$BranchDownload$Type} from "packages/xaero/map/graphics/$TextureUpload$BranchDownload"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$BranchDownload extends $TextureUploadPool<($TextureUpload$BranchDownload)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $TextureUpload$BranchDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchDownload$Type = ($TextureUploadPool$BranchDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$BranchDownload_ = $TextureUploadPool$BranchDownload$Type;
}}
declare module "packages/xaero/map/capabilities/$ServerWorldCapabilities" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ServerWorldCapabilities {
 "loaded": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldCapabilities$Type = ($ServerWorldCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldCapabilities_ = $ServerWorldCapabilities$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$Compressed" {
import {$TextureUpload$Compressed, $TextureUpload$Compressed$Type} from "packages/xaero/map/graphics/$TextureUpload$Compressed"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$Compressed extends $TextureUploadPool<($TextureUpload$Compressed)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): $TextureUpload$Compressed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Compressed$Type = ($TextureUploadPool$Compressed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$Compressed_ = $TextureUploadPool$Compressed$Type;
}}
declare module "packages/xaero/map/pool/$PoolUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PoolUnit {

 "create"(...arg0: (any)[]): void

(...arg0: (any)[]): void
}

export namespace $PoolUnit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoolUnit$Type = ($PoolUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoolUnit_ = $PoolUnit$Type;
}}
declare module "packages/xaero/map/biome/$BlockTintProvider" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiomeColorCalculator, $BiomeColorCalculator$Type} from "packages/xaero/map/biome/$BiomeColorCalculator"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BrokenBlockTintCache, $BrokenBlockTintCache$Type} from "packages/xaero/map/cache/$BrokenBlockTintCache"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockTintProvider implements $BlockAndTintGetter {

constructor(arg0: $Registry$Type<($Biome$Type)>, arg1: $BiomeColorCalculator$Type, arg2: $MapProcessor$Type, arg3: $BrokenBlockTintCache$Type, arg4: $MapWriter$Type)

public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getLightEngine"(): $LevelLightEngine
public "getMinBuildHeight"(): integer
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
public "getHeight"(): integer
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "getBiomeColor"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: boolean, arg3: $MapTile$Type, arg4: integer): integer
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "canSeeSky"(arg0: $BlockPos$Type): boolean
public "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
public "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$Type): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "getMaxLightLevel"(): integer
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getMinSection"(): integer
public "getMaxSection"(): integer
public "getSectionsCount"(): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getModelDataManager"(): $ModelDataManager
get "lightEngine"(): $LevelLightEngine
get "minBuildHeight"(): integer
get "height"(): integer
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "minSection"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTintProvider$Type = ($BlockTintProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTintProvider_ = $BlockTintProvider$Type;
}}
declare module "packages/xaero/map/gui/message/$MessageBox" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Message, $Message$Type} from "packages/xaero/map/gui/message/$Message"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $MessageBox {


public "getIterator"(): $Iterator<($Message)>
public "getCapacity"(): integer
public "addMessage"(arg0: $Component$Type): void
public "addMessageWithSource"(arg0: $Component$Type, arg1: $Component$Type): void
get "iterator"(): $Iterator<($Message)>
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBox$Type = ($MessageBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBox_ = $MessageBox$Type;
}}
declare module "packages/xaero/map/message/basic/$ClientboundRulesPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WorldMapMessage, $WorldMapMessage$Type} from "packages/xaero/map/message/$WorldMapMessage"

export class $ClientboundRulesPacket extends $WorldMapMessage<($ClientboundRulesPacket)> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
static "MAIN_CHANNEL": $ResourceLocation

constructor(arg0: boolean, arg1: boolean)

public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRulesPacket$Type = ($ClientboundRulesPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundRulesPacket_ = $ClientboundRulesPacket$Type;
}}
declare module "packages/xaero/map/region/$BranchLeveledRegion" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BranchRegionTexture, $BranchRegionTexture$Type} from "packages/xaero/map/region/texture/$BranchRegionTexture"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"

export class $BranchLeveledRegion extends $LeveledRegion<($BranchRegionTexture)> {
static readonly "CHILD_LENGTH_IN_TEXTURES": integer
static readonly "MAX_COORD_WITHIN_CHILD": integer
static readonly "SIDE_LENGTH": integer
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]

constructor(arg0: string, arg1: string, arg2: string, arg3: $MapDimension$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$Type)

public "isEmpty"(): boolean
public "isLoaded"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "setShouldCheckForUpdatesRecursive"(arg0: boolean): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "afterLimiterRemoval"(arg0: $MapProcessor$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $BranchRegionTexture$Type): void
public "hasTextures"(): boolean
public "addDebugLines"(arg0: $List$Type<(string)>, arg1: $MapProcessor$Type, arg2: integer, arg3: integer): void
public "onProcessingEnd"(): void
public "shouldBeProcessed"(): boolean
public "preCacheLoad"(): void
public "postCache"(arg0: $File$Type, arg1: $MapSaveLoad$Type, arg2: boolean): void
public "loadingAnimation"(): boolean
public "preCache"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$Type, arg1: $MapProcessor$Type): void
public "skipCaching"(arg0: $MapProcessor$Type): boolean
public "onLimiterRemoval"(arg0: $MapProcessor$Type): void
public "findCacheFile"(arg0: $MapSaveLoad$Type): $File
public "getTexture"(arg0: integer, arg1: integer): $BranchRegionTexture
public "setLoaded"(arg0: boolean): void
public "checkForUpdates"(arg0: $MapProcessor$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$Type<($BranchLeveledRegion$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "eligibleForSaving"(arg0: long): boolean
public "postTextureUpdate"(): void
public "startDownloadingTexturesForCache"(arg0: $MapProcessor$Type): void
public "setShouldCheckForUpdatesSingle"(arg0: boolean): void
get "empty"(): boolean
get "loaded"(): boolean
set "shouldCheckForUpdatesRecursive"(value: boolean)
set "loaded"(value: boolean)
set "shouldCheckForUpdatesSingle"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchLeveledRegion$Type = ($BranchLeveledRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchLeveledRegion_ = $BranchLeveledRegion$Type;
}}
declare module "packages/xaero/map/gui/message/$Message" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $Message {

constructor(arg0: $Component$Type, arg1: long)

public "getText"(): $Component
public "getAdditionTime"(): long
get "text"(): $Component
get "additionTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/xaero/map/region/$Overlay" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$MapPixel, $MapPixel$Type} from "packages/xaero/map/region/$MapPixel"

export class $Overlay extends $MapPixel {

constructor(arg0: $BlockState$Type, arg1: byte, arg2: boolean)

public "equals"(arg0: $Overlay$Type): boolean
public "write"(arg0: $BlockState$Type, arg1: byte, arg2: boolean): void
public "toRenderString"(): string
public "increaseOpacity"(arg0: integer): void
public "isWater"(): boolean
public "getOpacity"(): integer
public "getParametres"(): integer
public "getPixelColour"(arg0: $MapBlock$Type, arg1: (integer)[], arg2: $MapWriter$Type, arg3: $Level$Type, arg4: $MapDimension$Type, arg5: $Registry$Type<($Block$Type)>, arg6: $MapTileChunk$Type, arg7: $MapTileChunk$Type, arg8: $MapTileChunk$Type, arg9: $MapTileChunk$Type, arg10: $MapTile$Type, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BlockPos$MutableBlockPos$Type, arg16: $Registry$Type<($Biome$Type)>, arg17: $Registry$Type<($DimensionType$Type)>, arg18: float, arg19: float, arg20: float, arg21: $BlockTintProvider$Type, arg22: $MapProcessor$Type, arg23: $OverlayManager$Type): void
get "water"(): boolean
get "opacity"(): integer
get "parametres"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$Type = ($Overlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Overlay_ = $Overlay$Type;
}}
declare module "packages/xaero/map/region/$OverlayManager" {
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"

export class $OverlayManager {

constructor()

public "getOriginal"(arg0: $Overlay$Type): $Overlay
public "getNumberOfUniqueOverlays"(): integer
get "numberOfUniqueOverlays"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayManager$Type = ($OverlayManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayManager_ = $OverlayManager$Type;
}}
declare module "packages/xaero/map/mcworld/$IWorldMapClientWorld" {
import {$WorldMapClientWorldData, $WorldMapClientWorldData$Type} from "packages/xaero/map/mcworld/$WorldMapClientWorldData"

export interface $IWorldMapClientWorld {

 "getXaero_worldmapData"(): $WorldMapClientWorldData
 "setXaero_worldmapData"(arg0: $WorldMapClientWorldData$Type): void
}

export namespace $IWorldMapClientWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientWorld$Type = ($IWorldMapClientWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapClientWorld_ = $IWorldMapClientWorld$Type;
}}
declare module "packages/xaero/map/server/player/$ServerPlayerData" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $ServerPlayerData {

constructor(arg0: $UUID$Type)

public static "get"(arg0: $ServerPlayer$Type): $ServerPlayerData
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "hasMod"(): boolean
public "getCurrentlySyncedPlayers"(): $Set<($UUID)>
public "ensureCurrentlySyncedPlayers"(): $Set<($UUID)>
public "setLastTrackedPlayerSync"(arg0: long): void
public "getLastTrackedPlayerSync"(): long
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public "setClientModNetworkVersion"(arg0: integer): void
public "getClientModNetworkVersion"(): integer
get "lastSyncedData"(): $SyncedTrackedPlayer
get "currentlySyncedPlayers"(): $Set<($UUID)>
set "lastTrackedPlayerSync"(value: long)
get "lastTrackedPlayerSync"(): long
set "clientModNetworkVersion"(value: integer)
get "clientModNetworkVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$Type = ($ServerPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerData_ = $ServerPlayerData$Type;
}}
declare module "packages/xaero/map/world/$MapConnectionManager" {
import {$MapConnectionNode, $MapConnectionNode$Type} from "packages/xaero/map/world/$MapConnectionNode"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $MapConnectionManager {

constructor()

public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$Type): void
public "isConnected"(arg0: $MapConnectionNode$Type, arg1: $MapConnectionNode$Type): boolean
public "removeConnection"(arg0: $MapConnectionNode$Type, arg1: $MapConnectionNode$Type): void
public "addConnection"(arg0: $MapConnectionNode$Type, arg1: $MapConnectionNode$Type): void
public "renameDimension"(arg0: string, arg1: string): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionManager$Type = ($MapConnectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapConnectionManager_ = $MapConnectionManager$Type;
}}
declare module "packages/xaero/map/$MapRunner" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MapRunnerTask, $MapRunnerTask$Type} from "packages/xaero/map/task/$MapRunnerTask"

export class $MapRunner implements $Runnable {

constructor()

public "run"(): void
public "stop"(): void
public "addTask"(arg0: $MapRunnerTask$Type): void
public "doTasks"(arg0: $MapProcessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunner$Type = ($MapRunner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRunner_ = $MapRunner$Type;
}}
declare module "packages/xaero/map/cache/$BlockStateShortShapeCache" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockStateShortShapeCache {

constructor()

public "reset"(): void
public "isShort"(arg0: $BlockState$Type): boolean
public "supplyForIOThread"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateShortShapeCache$Type = ($BlockStateShortShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateShortShapeCache_ = $BlockStateShortShapeCache$Type;
}}
declare module "packages/xaero/map/gui/message/render/$MessageBoxRenderer" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$MessageBox, $MessageBox$Type} from "packages/xaero/map/gui/message/$MessageBox"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $MessageBoxRenderer {

constructor()

public "render"(arg0: $GuiGraphics$Type, arg1: $MessageBox$Type, arg2: $Font$Type, arg3: integer, arg4: integer, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBoxRenderer$Type = ($MessageBoxRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBoxRenderer_ = $MessageBoxRenderer$Type;
}}
declare module "packages/xaero/map/region/texture/$RegionTexture" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$RegionTextureBiomes, $RegionTextureBiomes$Type} from "packages/xaero/map/region/texture/$RegionTextureBiomes"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$Type} from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TextureUploader, $TextureUploader$Type} from "packages/xaero/map/graphics/$TextureUploader"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $RegionTexture<T extends $RegionTexture<(T)>> {
static readonly "PBO_UNPACK_LENGTH": integer
static readonly "PBO_PACK_LENGTH": integer

constructor(arg0: $LeveledRegion$Type<(T)>)

public "getRegion"(): $LeveledRegion<(T)>
public "shouldUpload"(): boolean
public "getGlColorTexture"(): integer
public "getTextureHasLight"(): boolean
public "getColorBuffer"(): $PoolTextureDirectBufferUnit
public "setCachePrepared"(arg0: boolean): void
public "addDebugLines"(arg0: $List$Type<(string)>): void
public "deletePBOs"(): void
public "setToUpload"(arg0: boolean): void
public "deleteColorBuffer"(): void
public "writeCacheMapData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<(T)>): void
public "isCachePrepared"(): boolean
public "getBiomes"(): $RegionTextureBiomes
public "resetBiomes"(): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$Type<(T)>, arg6: $MapProcessor$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "resetTimer"(): void
public "getHeight"(arg0: integer, arg1: integer): integer
public "shouldIncludeInCache"(): boolean
public "getBufferedTextureVersion"(): integer
public "deleteTexturesAndBuffers"(): void
public "getBiome"(arg0: integer, arg1: integer): $ResourceKey<($Biome)>
public "getTopHeight"(arg0: integer, arg1: integer): integer
public "setBiome"(arg0: integer, arg1: integer, arg2: $ResourceKey$Type<($Biome$Type)>): void
public "bindColorTexture"(arg0: boolean): integer
public "getBufferHasLight"(): boolean
public "prepareBuffer"(): void
public "isUploaded"(): boolean
public "getDirectColorBuffer"(): $ByteBuffer
public "getColorBufferFormat"(): integer
public "isColorBufferCompressed"(): boolean
public "getTimer"(): integer
public "uploadBuffer"(arg0: $DimensionHighlighterHandler$Type, arg1: $TextureUploader$Type, arg2: $LeveledRegion$Type<(T)>, arg3: $BranchTextureRenderer$Type, arg4: integer, arg5: integer): long
public "putHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putHeight"(arg0: integer, arg1: integer): void
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$Type): void
public "getTextureVersion"(): integer
public "decTimer"(): void
public "putTopHeight"(arg0: integer, arg1: integer): void
public "putTopHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "removeHeight"(arg0: integer, arg1: integer): void
public "canUpload"(): boolean
public "removeTopHeight"(arg0: integer, arg1: integer): void
public "onTextureDeletion"(): void
public "preUpload"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: $LeveledRegion$Type<(T)>, arg4: boolean, arg5: $BlockStateShortShapeCache$Type): void
public "hasSourceData"(): boolean
public "postUpload"(arg0: $MapProcessor$Type, arg1: $LeveledRegion$Type<(T)>, arg2: boolean): void
public "setBufferedTextureVersion"(arg0: integer): void
public "shouldDownloadFromPBO"(): boolean
public "shouldHaveContentForBranchUpdate"(): boolean
public "setShouldDownloadFromPBO"(arg0: boolean): void
public "ensureBiomeIndexStorage"(): void
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
get "region"(): $LeveledRegion<(T)>
get "glColorTexture"(): integer
get "textureHasLight"(): boolean
get "colorBuffer"(): $PoolTextureDirectBufferUnit
set "cachePrepared"(value: boolean)
set "toUpload"(value: boolean)
get "cachePrepared"(): boolean
get "biomes"(): $RegionTextureBiomes
get "bufferedTextureVersion"(): integer
get "bufferHasLight"(): boolean
get "uploaded"(): boolean
get "directColorBuffer"(): $ByteBuffer
get "colorBufferFormat"(): integer
get "colorBufferCompressed"(): boolean
get "timer"(): integer
get "textureVersion"(): integer
set "bufferedTextureVersion"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionTexture$Type<T> = ($RegionTexture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionTexture_<T> = $RegionTexture$Type<(T)>;
}}
declare module "packages/xaero/map/gui/$ISettingEntry" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $ISettingEntry {

 "getStringForSearch"(): string
 "createWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $AbstractWidget
}

export namespace $ISettingEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingEntry$Type = ($ISettingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingEntry_ = $ISettingEntry$Type;
}}
declare module "packages/xaero/map/gui/dropdown/$IDropDownContainer" {
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/map/gui/dropdown/$DropDownWidget"

export interface $IDropDownContainer {

 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
}

export namespace $IDropDownContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropDownContainer$Type = ($IDropDownContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDropDownContainer_ = $IDropDownContainer$Type;
}}
declare module "packages/xaero/map/gui/$ScreenBase" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$IScreenBase, $IScreenBase$Type} from "packages/xaero/map/gui/$IScreenBase"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/map/gui/dropdown/$DropDownWidget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ScreenBase extends $Screen implements $IScreenBase {
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "renderEscapeScreen"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "replaceWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "onDropdownClosed"(arg0: $DropDownWidget$Type): void
public "onDropdownOpen"(arg0: $DropDownWidget$Type): void
public "getEscape"(): $Screen
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "replaceRenderableWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "shouldSkipWorldRender"(): boolean
public "onClose"(): void
get "escape"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBase$Type = ($ScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBase_ = $ScreenBase$Type;
}}
declare module "packages/xaero/map/graphics/$CustomVertexConsumers" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {

constructor()

public "getRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "renderTypeBuffers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomVertexConsumers$Type = ($CustomVertexConsumers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomVertexConsumers_ = $CustomVertexConsumers$Type;
}}
declare module "packages/xaero/map/deallocator/$ByteBufferDeallocator" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $ByteBufferDeallocator {

constructor()

public "deallocate"(arg0: $ByteBuffer$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferDeallocator$Type = ($ByteBufferDeallocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufferDeallocator_ = $ByteBufferDeallocator$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$SyncedPlayerTracker" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/map/server/player/$ServerPlayerData"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$MinecraftServerData, $MinecraftServerData$Type} from "packages/xaero/map/server/$MinecraftServerData"

export class $SyncedPlayerTracker {

constructor()

public "onTick"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $MinecraftServerData$Type, arg3: $ServerPlayerData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTracker$Type = ($SyncedPlayerTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTracker_ = $SyncedPlayerTracker$Type;
}}
declare module "packages/xaero/map/task/$MapRunnerTask" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"

export class $MapRunnerTask {

constructor()

public "run"(arg0: $MapProcessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunnerTask$Type = ($MapRunnerTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRunnerTask_ = $MapRunnerTask$Type;
}}
declare module "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $MultiTextureRenderTypeRendererProvider {

constructor(arg0: integer)

public "draw"(arg0: $MultiTextureRenderTypeRenderer$Type): void
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $Runnable$Type, arg3: $RenderType$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $RenderType$Type): $MultiTextureRenderTypeRenderer
public static "defaultTextureBind"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRendererProvider$Type = ($MultiTextureRenderTypeRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRendererProvider_ = $MultiTextureRenderTypeRendererProvider$Type;
}}
declare module "packages/xaero/map/highlight/$DimensionHighlighterHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$Type} from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/map/highlight/$HighlighterRegistry"

export class $DimensionHighlighterHandler {

constructor(arg0: $MapDimension$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $HighlighterRegistry$Type)

public static "getKey"(arg0: integer, arg1: integer): long
public "getBlockHighlightBluntTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "getBlockHighlightSubtleTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
public "applyChunkHighlightColors"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $PoolTextureDirectBufferUnit$Type, arg5: $PoolTextureDirectBufferUnit$Type, arg6: boolean, arg7: boolean, arg8: boolean): $PoolTextureDirectBufferUnit
public "getRegionHash"(arg0: integer, arg1: integer): integer
public static "getXFromKey"(arg0: long): integer
public static "getZFromKey"(arg0: long): integer
public "shouldApplyRegionHighlights"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "clearCachedHashes"(): void
public "clearCachedHash"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionHighlighterHandler$Type = ($DimensionHighlighterHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionHighlighterHandler_ = $DimensionHighlighterHandler$Type;
}}
declare module "packages/xaero/map/file/$MapSaveLoad" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$BiomeGetter, $BiomeGetter$Type} from "packages/xaero/map/biome/$BiomeGetter"
import {$MapRegionInfo, $MapRegionInfo$Type} from "packages/xaero/map/file/$MapRegionInfo"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$BranchLeveledRegion, $BranchLeveledRegion$Type} from "packages/xaero/map/region/$BranchLeveledRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$File, $File$Type} from "packages/java/io/$File"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$PNGExporter, $PNGExporter$Type} from "packages/xaero/map/file/export/$PNGExporter"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$ExportScreen, $ExportScreen$Type} from "packages/xaero/map/gui/$ExportScreen"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$MapTileSelection, $MapTileSelection$Type} from "packages/xaero/map/gui/$MapTileSelection"

export class $MapSaveLoad {
static readonly "SAVE_TIME": integer
static readonly "currentCacheSaveMajorVersion": integer
static readonly "currentCacheSaveMinorVersion": integer
 "loadingFiles": boolean
 "saveAll": boolean
 "mainTextureLevel": integer

constructor(arg0: $OverlayManager$Type, arg1: $PNGExporter$Type, arg2: $OldFormatSupport$Type, arg3: $BlockStateShortShapeCache$Type)

public "run"(arg0: $HolderLookup$Type<($Block$Type)>, arg1: $Registry$Type<($Block$Type)>, arg2: $Registry$Type<($Fluid$Type)>, arg3: $BiomeGetter$Type, arg4: $Registry$Type<($Biome$Type)>): void
public "getFile"(arg0: $MapRegion$Type): $File
public "safeMoveAndReplace"(arg0: $Path$Type, arg1: $Path$Type, arg2: string, arg3: string): void
public "removeTempCacheRequest"(arg0: $File$Type): boolean
public "addTempCacheRequest"(arg0: $File$Type): void
public "getSizeOfToLoadBranchCache"(): integer
public "safeDelete"(arg0: $Path$Type, arg1: string): void
public "requestLoad"(arg0: $MapRegion$Type, arg1: string): void
public "requestLoad"(arg0: $MapRegion$Type, arg1: string, arg2: boolean): void
public "setMapProcessor"(arg0: $MapProcessor$Type): void
public "getCacheFile"(arg0: $MapRegionInfo$Type, arg1: integer, arg2: boolean, arg3: boolean): $File
public "saveExists"(arg0: $MapRegion$Type): boolean
public "toCacheContains"(arg0: $LeveledRegion$Type<(any)>): boolean
public "getToSave"(): $ArrayList<($MapRegion)>
public "removeToLoad"(arg0: $MapRegion$Type): void
public "getSizeOfToLoad"(): integer
public "requestBranchCache"(arg0: $BranchLeveledRegion$Type, arg1: string, arg2: boolean): void
public "requestBranchCache"(arg0: $BranchLeveledRegion$Type, arg1: string): void
public "getMainFolder"(arg0: string, arg1: string): $Path
public "getMWSubFolder"(arg0: string, arg1: string, arg2: string): $Path
public "removeToCache"(arg0: $LeveledRegion$Type<(any)>): void
public "removeToCache"(arg0: $MapDimension$Type, arg1: integer): $LeveledRegion<(any)>
public "backupFile"(arg0: $File$Type, arg1: integer): void
public "getTempFile"(arg0: $File$Type): $File
public "isRegionDetectionComplete"(): boolean
public "getNextToLoadByViewing"(): $LeveledRegion<(any)>
public "setNextToLoadByViewing"(arg0: $LeveledRegion$Type<(any)>): void
public static "getRootFolder"(arg0: string): $Path
public "getNormalFile"(arg0: $MapRegion$Type): $File
public "detectRegions"(arg0: integer): void
public "getOldFolder"(arg0: string, arg1: string): $Path
public "getCaveLayerFolder"(arg0: integer, arg1: $Path$Type): $Path
public "requestCache"(arg0: $LeveledRegion$Type<(any)>): void
public "beingSaved"(arg0: $MapDimension$Type, arg1: integer, arg2: integer): boolean
public "clearToLoad"(): void
public "loadRegion"(arg0: $MapRegion$Type, arg1: $HolderLookup$Type<($Block$Type)>, arg2: $Registry$Type<($Block$Type)>, arg3: $Registry$Type<($Fluid$Type)>, arg4: $BiomeGetter$Type, arg5: integer): boolean
public "addToLoad"(arg0: $MapRegion$Type, arg1: string, arg2: boolean): void
public "updateSave"(arg0: $LeveledRegion$Type<(any)>, arg1: long, arg2: integer): void
public "setRegionDetectionComplete"(arg0: boolean): void
public "detectRegionsFromFiles"(arg0: $MapDimension$Type, arg1: string, arg2: string, arg3: string, arg4: $Path$Type, arg5: string, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Consumer$Type<($RegionDetection$Type)>): void
public "getOldFormatSupport"(): $OldFormatSupport
public "exportPNG"(arg0: $ExportScreen$Type, arg1: $MapTileSelection$Type): boolean
get "sizeOfToLoadBranchCache"(): integer
set "mapProcessor"(value: $MapProcessor$Type)
get "toSave"(): $ArrayList<($MapRegion)>
get "sizeOfToLoad"(): integer
get "regionDetectionComplete"(): boolean
get "nextToLoadByViewing"(): $LeveledRegion<(any)>
set "nextToLoadByViewing"(value: $LeveledRegion$Type<(any)>)
set "regionDetectionComplete"(value: boolean)
get "oldFormatSupport"(): $OldFormatSupport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapSaveLoad$Type = ($MapSaveLoad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapSaveLoad_ = $MapSaveLoad$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$Compressed" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$Compressed extends $TextureUpload {

constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$Compressed$Type = ($TextureUpload$Compressed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$Compressed_ = $TextureUpload$Compressed$Type;
}}
declare module "packages/xaero/map/file/$RegionDetection" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$MapRegionInfo, $MapRegionInfo$Type} from "packages/xaero/map/file/$MapRegionInfo"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$ILinkedChainNode, $ILinkedChainNode$Type} from "packages/xaero/map/util/linked/$ILinkedChainNode"

export class $RegionDetection implements $MapRegionInfo, $ILinkedChainNode<($RegionDetection)> {

constructor(arg0: string, arg1: string, arg2: string, arg3: integer, arg4: integer, arg5: $File$Type, arg6: integer, arg7: boolean)

public "isDestroyed"(): boolean
public "getNext"(): $RegionDetection
public "setNext"(arg0: $RegionDetection$Type): void
public "getRegionX"(): integer
public "shouldCache"(): boolean
public "getRegionZ"(): integer
public "getDimId"(): string
public "setCacheFile"(arg0: $File$Type): void
public "setShouldCache"(arg0: boolean, arg1: string): void
public "getCacheFile"(): $File
public "getRegionFile"(): $File
public "getMwId"(): string
public "getInitialVersion"(): integer
public "getWorldId"(): string
public "transferInfoFrom"(arg0: $MapRegion$Type): void
public "hasLookedForCache"(): boolean
public "setRemoved"(arg0: boolean): void
public "onDestroyed"(): void
public "isRemoved"(): boolean
public "isHasHadTerrain"(): boolean
public "setPrevious"(arg0: $RegionDetection$Type): void
public "transferInfoTo"(arg0: $MapRegion$Type): void
public "transferInfoPostAddTo"(arg0: $MapRegion$Type, arg1: $MapProcessor$Type): void
get "destroyed"(): boolean
get "next"(): $RegionDetection
set "next"(value: $RegionDetection$Type)
get "regionX"(): integer
get "regionZ"(): integer
get "dimId"(): string
set "cacheFile"(value: $File$Type)
get "cacheFile"(): $File
get "regionFile"(): $File
get "mwId"(): string
get "initialVersion"(): integer
get "worldId"(): string
set "removed"(value: boolean)
get "removed"(): boolean
get "hasHadTerrain"(): boolean
set "previous"(value: $RegionDetection$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionDetection$Type = ($RegionDetection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionDetection_ = $RegionDetection$Type;
}}
declare module "packages/xaero/map/highlight/$RegionHighlightExistenceTracker" {
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"

export class $RegionHighlightExistenceTracker {

constructor(arg0: $MapDimension$Type, arg1: integer)

public "track"(arg0: integer, arg1: integer): void
public "onClearCachedHash"(arg0: integer, arg1: integer): void
public "stopTracking"(arg0: integer, arg1: integer): void
public "onClearCachedHashes"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionHighlightExistenceTracker$Type = ($RegionHighlightExistenceTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionHighlightExistenceTracker_ = $RegionHighlightExistenceTracker$Type;
}}
declare module "packages/xaero/map/core/$IWorldMapServerLevel" {
import {$ServerWorldCapabilities, $ServerWorldCapabilities$Type} from "packages/xaero/map/capabilities/$ServerWorldCapabilities"

export interface $IWorldMapServerLevel {

 "getXaero_wm_capabilities"(): $ServerWorldCapabilities
 "setXaero_wm_capabilities"(arg0: $ServerWorldCapabilities$Type): void
}

export namespace $IWorldMapServerLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapServerLevel$Type = ($IWorldMapServerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapServerLevel_ = $IWorldMapServerLevel$Type;
}}
declare module "packages/xaero/map/file/worldsave/$WorldDataReader" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegionFile, $RegionFile$Type} from "packages/net/minecraft/world/level/chunk/storage/$RegionFile"
import {$WorldDataBiomeManager, $WorldDataBiomeManager$Type} from "packages/xaero/map/file/worldsave/biome/$WorldDataBiomeManager"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Executor, $Executor$Type} from "packages/xaero/map/executor/$Executor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $WorldDataReader {
 "taskCreationSync": any

constructor(arg0: $OverlayManager$Type, arg1: $BlockStateShortShapeCache$Type, arg2: $WorldDataBiomeManager$Type, arg3: long)

public "setMapProcessor"(arg0: $MapProcessor$Type): void
public "buildRegion"(arg0: $MapRegion$Type, arg1: $ServerLevel$Type, arg2: $HolderLookup$Type<($Block$Type)>, arg3: $Registry$Type<($Block$Type)>, arg4: $Registry$Type<($Fluid$Type)>, arg5: boolean, arg6: (integer)[], arg7: $Executor$Type): boolean
public "readChunk"(arg0: $RegionFile$Type, arg1: $ChunkPos$Type): $CompoundTag
set "mapProcessor"(value: $MapProcessor$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataReader$Type = ($WorldDataReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataReader_ = $WorldDataReader$Type;
}}
declare module "packages/xaero/map/$MapLimiter" {
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"

export class $MapLimiter {

constructor()

public "getMostRegionsAtATime"(): integer
public "setMostRegionsAtATime"(arg0: integer): void
public "getAvailableVRAM"(): integer
public "applyLimit"(arg0: $MapWorld$Type, arg1: $MapProcessor$Type): void
public "onSessionFinalized"(): void
public "updateAvailableVRAM"(): void
get "mostRegionsAtATime"(): integer
set "mostRegionsAtATime"(value: integer)
get "availableVRAM"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLimiter$Type = ($MapLimiter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLimiter_ = $MapLimiter$Type;
}}
declare module "packages/xaero/map/region/$MapLayer" {
import {$LeveledRegionManager, $LeveledRegionManager$Type} from "packages/xaero/map/region/$LeveledRegionManager"
import {$RegionHighlightExistenceTracker, $RegionHighlightExistenceTracker$Type} from "packages/xaero/map/highlight/$RegionHighlightExistenceTracker"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"

export class $MapLayer {

constructor(arg0: $MapDimension$Type, arg1: $RegionHighlightExistenceTracker$Type)

public "getCaveStart"(): integer
public "setCaveStart"(arg0: integer): void
public "addRegionDetection"(arg0: $RegionDetection$Type): void
public "getMapRegions"(): $LeveledRegionManager
public "getRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "getDetectedRegions"(): $Hashtable<(integer), ($Hashtable<(integer), ($RegionDetection)>)>
public "regionDetectionExists"(arg0: integer, arg1: integer): boolean
public "preDetection"(): void
public "getLinkedCompleteWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
public "getRegionHighlightExistenceTracker"(): $RegionHighlightExistenceTracker
public "getCompleteRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "removeRegionDetection"(arg0: integer, arg1: integer): void
public "tryAddingToCompleteRegionDetection"(arg0: $RegionDetection$Type): void
get "caveStart"(): integer
set "caveStart"(value: integer)
get "mapRegions"(): $LeveledRegionManager
get "detectedRegions"(): $Hashtable<(integer), ($Hashtable<(integer), ($RegionDetection)>)>
get "linkedCompleteWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
get "regionHighlightExistenceTracker"(): $RegionHighlightExistenceTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLayer$Type = ($MapLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLayer_ = $MapLayer$Type;
}}
declare module "packages/xaero/map/gui/$MapTileSelection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MapTileSelection {

constructor(arg0: integer, arg1: integer)

public "getRight"(): integer
public "getLeft"(): integer
public "setEnd"(arg0: integer, arg1: integer): void
public "getBottom"(): integer
public "getStartZ"(): integer
public "getEndZ"(): integer
public "getEndX"(): integer
public "getStartX"(): integer
public "getTop"(): integer
get "right"(): integer
get "left"(): integer
get "bottom"(): integer
get "startZ"(): integer
get "endZ"(): integer
get "endX"(): integer
get "startX"(): integer
get "top"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileSelection$Type = ($MapTileSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTileSelection_ = $MapTileSelection$Type;
}}
declare module "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $MultiTextureRenderTypeRenderer {


public "begin"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type, arg2: integer): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRenderer$Type = ($MultiTextureRenderTypeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRenderer_ = $MultiTextureRenderTypeRenderer$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $SyncedTrackedPlayer {

constructor(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>)

public "update"(arg0: $Player$Type): void
public "getId"(): $UUID
public "copyFrom"(arg0: $SyncedTrackedPlayer$Type): void
public "getY"(): double
public "getZ"(): double
public "getDimension"(): $ResourceKey<($Level)>
public "getX"(): double
public "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $SyncedTrackedPlayer
public "setPos"(arg0: double, arg1: double, arg2: double): $SyncedTrackedPlayer
public "matchesEnough"(arg0: $Player$Type, arg1: double): boolean
get "id"(): $UUID
get "y"(): double
get "z"(): double
get "dimension"(): $ResourceKey<($Level)>
get "x"(): double
set "dimension"(value: $ResourceKey$Type<($Level$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedTrackedPlayer$Type = ($SyncedTrackedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedTrackedPlayer_ = $SyncedTrackedPlayer$Type;
}}
declare module "packages/xaero/map/cache/$BrokenBlockTintCache" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BrokenBlockTintCache {

constructor(arg0: $Set$Type<($BlockState$Type)>)

public "getSize"(): integer
public "isBroken"(arg0: $BlockState$Type): boolean
public "setBroken"(arg0: $BlockState$Type): void
get "size"(): integer
set "broken"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenBlockTintCache$Type = ($BrokenBlockTintCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrokenBlockTintCache_ = $BrokenBlockTintCache$Type;
}}
declare module "packages/xaero/map/region/texture/$BranchRegionTexture" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$RegionTexture, $RegionTexture$Type} from "packages/xaero/map/region/texture/$RegionTexture"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploader, $TextureUploader$Type} from "packages/xaero/map/graphics/$TextureUploader"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $BranchRegionTexture extends $RegionTexture<($BranchRegionTexture)> {
static readonly "PBO_UNPACK_LENGTH": integer
static readonly "PBO_PACK_LENGTH": integer

constructor(arg0: $LeveledRegion$Type<($BranchRegionTexture$Type)>)

public "addDebugLines"(arg0: $List$Type<(string)>): void
public "writeCacheMapData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<($BranchRegionTexture$Type)>): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg6: $MapProcessor$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "checkForUpdates"(arg0: $RegionTexture$Type<(any)>, arg1: $RegionTexture$Type<(any)>, arg2: $RegionTexture$Type<(any)>, arg3: $RegionTexture$Type<(any)>, arg4: $LeveledRegion$Type<(any)>): boolean
public "uploadBuffer"(arg0: $DimensionHighlighterHandler$Type, arg1: $TextureUploader$Type, arg2: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg3: $BranchTextureRenderer$Type, arg4: integer, arg5: integer): long
public "onTextureDeletion"(): void
public "preUpload"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg4: boolean, arg5: $BlockStateShortShapeCache$Type): void
public "hasSourceData"(): boolean
public "postUpload"(arg0: $MapProcessor$Type, arg1: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg2: boolean): void
public "requestDownload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchRegionTexture$Type = ($BranchRegionTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchRegionTexture_ = $BranchRegionTexture$Type;
}}
declare module "packages/xaero/map/gui/dropdown/$DropDownWidget" {
import {$Tooltip, $Tooltip$Type} from "packages/net/minecraft/client/gui/components/$Tooltip"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $DropDownWidget extends $AbstractWidget {
static readonly "DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_HOVERED_BACKGROUND": integer
static readonly "TRIM": integer
static readonly "TRIM_OPEN": integer
static readonly "TRIM_INSIDE": integer
static readonly "LINE_HEIGHT": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "height": integer
 "x": integer
 "y": integer
 "active": boolean
 "visible": boolean
 "tooltip": $Tooltip
 "tooltipMsDelay": integer
 "hoverOrFocusedStartTime": long
static readonly "UNSET_FG_COLOR": integer


public "size"(): integer
public "isClosed"(): boolean
public "setActive"(arg0: boolean): void
public "setClosed"(arg0: boolean): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "onDropDown"(arg0: integer, arg1: integer, arg2: boolean, arg3: integer): boolean
public "onDropDown"(arg0: integer, arg1: integer, arg2: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "m_87963_"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "m_168797_"(arg0: $NarrationElementOutput$Type): void
public "mouseReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "mouseScrolled"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getSelected"(): integer
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getXWithOffset"(): integer
public "getYWithOffset"(): integer
public "selectId"(arg0: integer, arg1: boolean): void
get "closed"(): boolean
set "active"(value: boolean)
set "closed"(value: boolean)
get "selected"(): integer
get "xWithOffset"(): integer
get "yWithOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownWidget$Type = ($DropDownWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropDownWidget_ = $DropDownWidget$Type;
}}
declare module "packages/xaero/map/world/$MapConnectionNode" {
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MapConnectionNode {

constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fromString"(arg0: string): $MapConnectionNode
public "getDimId"(): $ResourceKey<($Level)>
public "getMw"(): string
public "getNamedString"(arg0: $MapWorld$Type): string
get "dimId"(): $ResourceKey<($Level)>
get "mw"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionNode$Type = ($MapConnectionNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapConnectionNode_ = $MapConnectionNode$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$BranchUpdate" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$BranchUpdate extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$BranchUpdate$Type = ($TextureUpload$BranchUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$BranchUpdate_ = $TextureUpload$BranchUpdate$Type;
}}
declare module "packages/xaero/map/region/$MapPixel" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $MapPixel {

constructor()

public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
public "getBlockBrightness"(arg0: float, arg1: integer, arg2: integer): float
public "setGlowing"(arg0: boolean): void
public "setLight"(arg0: byte): void
public "getPixelColours"(arg0: (integer)[], arg1: $MapWriter$Type, arg2: $Level$Type, arg3: $MapDimension$Type, arg4: $Registry$Type<($Block$Type)>, arg5: $MapTileChunk$Type, arg6: $MapTileChunk$Type, arg7: $MapTileChunk$Type, arg8: $MapTileChunk$Type, arg9: $MapTile$Type, arg10: integer, arg11: integer, arg12: $MapBlock$Type, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: $ArrayList$Type<($Overlay$Type)>, arg18: $BlockPos$MutableBlockPos$Type, arg19: $Registry$Type<($Biome$Type)>, arg20: $Registry$Type<($DimensionType$Type)>, arg21: float, arg22: float, arg23: float, arg24: $BlockTintProvider$Type, arg25: $MapProcessor$Type, arg26: $OverlayManager$Type, arg27: $BlockStateShortShapeCache$Type): void
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
set "glowing"(value: boolean)
set "light"(value: byte)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPixel$Type = ($MapPixel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPixel_ = $MapPixel$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$Normal" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$Normal extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$Normal$Type = ($TextureUpload$Normal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$Normal_ = $TextureUpload$Normal$Type;
}}
