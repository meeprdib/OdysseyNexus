declare module "packages/pregenerator/base/mixins/common/storage/$ServerChunkProviderMixin" {
import {$ChunkHolder, $ChunkHolder$Type} from "packages/net/minecraft/server/level/$ChunkHolder"
import {$DistanceManager, $DistanceManager$Type} from "packages/net/minecraft/server/level/$DistanceManager"

export interface $ServerChunkProviderMixin {

 "getTicketManager"(): $DistanceManager
 "syncChunkUpdates"(): boolean
 "getChunkIfPresent"(arg0: long): $ChunkHolder
}

export namespace $ServerChunkProviderMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkProviderMixin$Type = ($ServerChunkProviderMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerChunkProviderMixin_ = $ServerChunkProviderMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/client/$CreateNewWorldMixin" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$TabNavigationBar, $TabNavigationBar$Type} from "packages/net/minecraft/client/gui/components/tabs/$TabNavigationBar"

export interface $CreateNewWorldMixin {

 "getTempPath"(): $Path
 "getParentScreen"(): $Screen
 "getNavBar"(): $TabNavigationBar
}

export namespace $CreateNewWorldMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateNewWorldMixin$Type = ($CreateNewWorldMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateNewWorldMixin_ = $CreateNewWorldMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/chunk/$ChunkHolderMixin" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"

export interface $ChunkHolderMixin {

 "getLoadingChunk"(): $LevelChunk

(): $LevelChunk
}

export namespace $ChunkHolderMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolderMixin$Type = ($ChunkHolderMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkHolderMixin_ = $ChunkHolderMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/forge/$BiomeModifierRemoverMixin" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"

export interface $BiomeModifierRemoverMixin {

 "clearModifiers"(arg0: $ModifiableBiomeInfo$BiomeInfo$Type): void

(arg0: $ModifiableBiomeInfo$BiomeInfo$Type): void
}

export namespace $BiomeModifierRemoverMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifierRemoverMixin$Type = ($BiomeModifierRemoverMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifierRemoverMixin_ = $BiomeModifierRemoverMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/server/$LevelStemMixin" {
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"

export interface $LevelStemMixin {

 "setCustomGenerator"(arg0: $ChunkGenerator$Type): void

(arg0: $ChunkGenerator$Type): void
}

export namespace $LevelStemMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelStemMixin$Type = ($LevelStemMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelStemMixin_ = $LevelStemMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/storage/$ChunkLoaderMixin" {
import {$IOWorker, $IOWorker$Type} from "packages/net/minecraft/world/level/chunk/storage/$IOWorker"

export interface $ChunkLoaderMixin {

 "getWorker"(): $IOWorker

(): $IOWorker
}

export namespace $ChunkLoaderMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoaderMixin$Type = ($ChunkLoaderMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoaderMixin_ = $ChunkLoaderMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/client/$NavbarMixin" {
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Tab, $Tab$Type} from "packages/net/minecraft/client/gui/components/tabs/$Tab"

export interface $NavbarMixin {

 "getNavTabs"(): $ImmutableList<($Tab)>

(): $ImmutableList<($Tab)>
}

export namespace $NavbarMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavbarMixin$Type = ($NavbarMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavbarMixin_ = $NavbarMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/chunk/$ChunkSectionMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkSectionMixin {

 "getTickingBlocksCount"(): short

(): short
}

export namespace $ChunkSectionMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkSectionMixin$Type = ($ChunkSectionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkSectionMixin_ = $ChunkSectionMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/storage/$ChunkManagerMixin" {
import {$ChunkProgressListener, $ChunkProgressListener$Type} from "packages/net/minecraft/server/level/progress/$ChunkProgressListener"
import {$ChunkHolder, $ChunkHolder$Type} from "packages/net/minecraft/server/level/$ChunkHolder"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $ChunkManagerMixin {

 "getStatusListener"(): $ChunkProgressListener
 "getLoadedChunks"(): $Iterable<($ChunkHolder)>
}

export namespace $ChunkManagerMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkManagerMixin$Type = ($ChunkManagerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkManagerMixin_ = $ChunkManagerMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/storage/$IOWorkerMixin" {
import {$RegionFileStorage, $RegionFileStorage$Type} from "packages/net/minecraft/world/level/chunk/storage/$RegionFileStorage"

export interface $IOWorkerMixin {

 "getStorage"(): $RegionFileStorage

(): $RegionFileStorage
}

export namespace $IOWorkerMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOWorkerMixin$Type = ($IOWorkerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOWorkerMixin_ = $IOWorkerMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/forge/$StructureModifierRemoverMixin" {
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"

export interface $StructureModifierRemoverMixin {

 "clearModifiers"(arg0: $ModifiableStructureInfo$StructureInfo$Type): void

(arg0: $ModifiableStructureInfo$StructureInfo$Type): void
}

export namespace $StructureModifierRemoverMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifierRemoverMixin$Type = ($StructureModifierRemoverMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifierRemoverMixin_ = $StructureModifierRemoverMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/storage/$RegionFileCacheMixin" {
import {$RegionFile, $RegionFile$Type} from "packages/net/minecraft/world/level/chunk/storage/$RegionFile"
import {$Long2ObjectLinkedOpenHashMap, $Long2ObjectLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectLinkedOpenHashMap"

export interface $RegionFileCacheMixin {

 "getRegionCache"(): $Long2ObjectLinkedOpenHashMap<($RegionFile)>
 "setRegionCache"(arg0: $Long2ObjectLinkedOpenHashMap$Type<($RegionFile$Type)>): void
}

export namespace $RegionFileCacheMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionFileCacheMixin$Type = ($RegionFileCacheMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionFileCacheMixin_ = $RegionFileCacheMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/storage/$RegionSectionCacheMixin" {
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IOWorker, $IOWorker$Type} from "packages/net/minecraft/world/level/chunk/storage/$IOWorker"

export interface $RegionSectionCacheMixin<T> {

 "getStorage"(): $Long2ObjectMap<($Optional<(T)>)>
 "setStorage"(arg0: $Long2ObjectMap$Type<($Optional$Type<(T)>)>): void
 "getIOWorker"(): $IOWorker
}

export namespace $RegionSectionCacheMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionSectionCacheMixin$Type<T> = ($RegionSectionCacheMixin<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionSectionCacheMixin_<T> = $RegionSectionCacheMixin$Type<(T)>;
}}
declare module "packages/pregenerator/base/mixins/common/storage/$TicketManagerMixin" {
import {$ProcessorHandle, $ProcessorHandle$Type} from "packages/net/minecraft/util/thread/$ProcessorHandle"
import {$ChunkTaskPriorityQueueSorter$Release, $ChunkTaskPriorityQueueSorter$Release$Type} from "packages/net/minecraft/server/level/$ChunkTaskPriorityQueueSorter$Release"

export interface $TicketManagerMixin {

 "getLightTasks"(): $ProcessorHandle<($ChunkTaskPriorityQueueSorter$Release)>

(): $ProcessorHandle<($ChunkTaskPriorityQueueSorter$Release)>
}

export namespace $TicketManagerMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketManagerMixin$Type = ($TicketManagerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketManagerMixin_ = $TicketManagerMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/client/$MinecraftMixin" {
import {$IntegratedServer, $IntegratedServer$Type} from "packages/net/minecraft/client/server/$IntegratedServer"

export interface $MinecraftMixin {

 "setIntegratedServer"(arg0: $IntegratedServer$Type): void

(arg0: $IntegratedServer$Type): void
}

export namespace $MinecraftMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftMixin$Type = ($MinecraftMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftMixin_ = $MinecraftMixin$Type;
}}
declare module "packages/pregenerator/base/mixins/common/server/$MinecraftServerMixin" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$Type} from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import {$ServerStatus, $ServerStatus$Type} from "packages/net/minecraft/network/protocol/status/$ServerStatus"

export interface $MinecraftServerMixin {

 "rebuildPregenStatus"(arg0: $ServerStatus$Type): void
 "setPregenStatus"(arg0: $ServerStatus$Type): void
 "setServerTime"(arg0: long): void
 "getCurrentSave"(): $LevelStorageSource$LevelStorageAccess
}

export namespace $MinecraftServerMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerMixin$Type = ($MinecraftServerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerMixin_ = $MinecraftServerMixin$Type;
}}
