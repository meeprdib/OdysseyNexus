declare module "packages/team/creative/creativecore/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getLastMouseEventTime"(): double

(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$BufferBuilderAccessor" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $BufferBuilderAccessor {

 "getBuffer"(): $ByteBuffer
 "getVertices"(): integer
 "getNextElementByte"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$Type = ($BufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$VoxelShapeAccessor" {
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

export interface $VoxelShapeAccessor {

 "setShape"(arg0: $DiscreteVoxelShape$Type): void

(arg0: $DiscreteVoxelShape$Type): void
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$VanillaPackResourcesAccessor" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $VanillaPackResourcesAccessor {

 "getPathsForType"(): $Map<($PackType), ($List<($Path)>)>

(): $Map<($PackType), ($List<($Path)>)>
}

export namespace $VanillaPackResourcesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPackResourcesAccessor$Type = ($VanillaPackResourcesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPackResourcesAccessor_ = $VanillaPackResourcesAccessor$Type;
}}
declare module "packages/team/creative/playerrevive/mixin/$LocalPlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalPlayerAccessor {

 "getHandsBusy"(): boolean
 "setHandsBusy"(arg0: boolean): void
}

export namespace $LocalPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerAccessor$Type = ($LocalPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerAccessor_ = $LocalPlayerAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$StringSplitterAccessor" {
import {$StringSplitter$WidthProvider, $StringSplitter$WidthProvider$Type} from "packages/net/minecraft/client/$StringSplitter$WidthProvider"

export interface $StringSplitterAccessor {

 "getWidthProvider"(): $StringSplitter$WidthProvider

(): $StringSplitter$WidthProvider
}

export namespace $StringSplitterAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitterAccessor$Type = ($StringSplitterAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringSplitterAccessor_ = $StringSplitterAccessor$Type;
}}
declare module "packages/team/creative/playerrevive/mixin/$CombatTrackerAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CombatEntry, $CombatEntry$Type} from "packages/net/minecraft/world/damagesource/$CombatEntry"

export interface $CombatTrackerAccessor {

 "getEntries"(): $List<($CombatEntry)>
 "setInCombat"(arg0: boolean): void
 "setTakingDamage"(arg0: boolean): void
 "getLastDamageTime"(): integer
 "setCombatStartTime"(arg0: integer): void
 "getInCombat"(): boolean
 "getCombatEndTime"(): integer
 "getTakingDamage"(): boolean
 "setLastDamageTime"(arg0: integer): void
 "getCombatStartTime"(): integer
 "setCombatEndTime"(arg0: integer): void
}

export namespace $CombatTrackerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombatTrackerAccessor$Type = ($CombatTrackerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombatTrackerAccessor_ = $CombatTrackerAccessor$Type;
}}
declare module "packages/team/creative/playerrevive/mixin/$MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor {

 "setMissTime"(arg0: integer): void

(arg0: integer): void
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$Type = ($MinecraftAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$Type;
}}
