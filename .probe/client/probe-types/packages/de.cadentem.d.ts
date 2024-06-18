declare module "packages/de/cadentem/additional_attributes/mixin/$FishingHookAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FishingHookAccess {

 "getLureSpeed"(): integer
 "setTimeUntilLured"(arg0: integer): void
}

export namespace $FishingHookAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FishingHookAccess$Type = ($FishingHookAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FishingHookAccess_ = $FishingHookAccess$Type;
}}
declare module "packages/de/cadentem/additional_attributes/mixin/$EntityAccess" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export interface $EntityAccess {

 "getRandom"(): $RandomSource

(): $RandomSource
}

export namespace $EntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$Type = ($EntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccess_ = $EntityAccess$Type;
}}
