declare module "packages/com/sonicether/soundphysics/world/$ClonedClientLevel" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ClientLevelProxy, $ClientLevelProxy$Type} from "packages/com/sonicether/soundphysics/world/$ClientLevelProxy"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ClonedLevelChunk, $ClonedLevelChunk$Type} from "packages/com/sonicether/soundphysics/world/$ClonedLevelChunk"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ClonedClientLevel implements $ClientLevelProxy {

constructor(arg0: $ClientLevel$Type, arg1: $BlockPos$Type, arg2: long, arg3: integer)

public "getOrigin"(): $BlockPos
public "getChunk"(arg0: integer, arg1: integer): $ClonedLevelChunk
public "getMinBuildHeight"(): integer
public "getHeight"(): integer
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getTick"(): long
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "getMaxLightLevel"(): integer
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "getMaxBuildHeight"(): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getMinSection"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionsCount"(): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getMaxSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
get "origin"(): $BlockPos
get "minBuildHeight"(): integer
get "height"(): integer
get "tick"(): long
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClonedClientLevel$Type = ($ClonedClientLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClonedClientLevel_ = $ClonedClientLevel$Type;
}}
declare module "packages/com/sonicether/soundphysics/world/$ClonedLevelChunk" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TickContainerAccess, $TickContainerAccess$Type} from "packages/net/minecraft/world/ticks/$TickContainerAccess"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelChunkSection, $LevelChunkSection$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunkSection"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$NoiseChunk, $NoiseChunk$Type} from "packages/net/minecraft/world/level/levelgen/$NoiseChunk"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ChunkAccess$TicksToSave, $ChunkAccess$TicksToSave$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess$TicksToSave"

export class $ClonedLevelChunk extends $ChunkAccess {
static readonly "NO_FILLED_SECTION": integer
 "noiseChunk": $NoiseChunk

constructor(arg0: $Level$Type, arg1: $ChunkPos$Type, arg2: ($LevelChunkSection$Type)[])

public "setBlockEntity"(arg0: $BlockEntity$Type): void
public "addEntity"(arg0: $Entity$Type): void
public "getBlockEntityNbtForSaving"(arg0: $BlockPos$Type): $CompoundTag
public "getFluidTicks"(): $TickContainerAccess<($Fluid)>
public "getBlockTicks"(): $TickContainerAccess<($Block)>
public "getTicksForSerialization"(): $ChunkAccess$TicksToSave
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "setBlockState"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: boolean): $BlockState
public "getStatus"(): $ChunkStatus
public "removeBlockEntity"(arg0: $BlockPos$Type): void
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
set "blockEntity"(value: $BlockEntity$Type)
get "fluidTicks"(): $TickContainerAccess<($Fluid)>
get "blockTicks"(): $TickContainerAccess<($Block)>
get "ticksForSerialization"(): $ChunkAccess$TicksToSave
get "status"(): $ChunkStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClonedLevelChunk$Type = ($ClonedLevelChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClonedLevelChunk_ = $ClonedLevelChunk$Type;
}}
declare module "packages/com/sonicether/soundphysics/world/$ClientLevelProxy" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $ClientLevelProxy extends $BlockGetter {

 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "getMaxLightLevel"(): integer
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getMaxBuildHeight"(): integer
 "getMinBuildHeight"(): integer
 "getHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getModelDataManager"(): $ModelDataManager
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
}

export namespace $ClientLevelProxy {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelProxy$Type = ($ClientLevelProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelProxy_ = $ClientLevelProxy$Type;
}}
declare module "packages/com/sonicether/soundphysics/world/$CachingClientLevel" {
import {$ClonedClientLevel, $ClonedClientLevel$Type} from "packages/com/sonicether/soundphysics/world/$ClonedClientLevel"

export interface $CachingClientLevel {

 "sound_physics_remastered$setCachedClone"(arg0: $ClonedClientLevel$Type): void
 "sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
}

export namespace $CachingClientLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingClientLevel$Type = ($CachingClientLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachingClientLevel_ = $CachingClientLevel$Type;
}}
