declare module "packages/org/arbor/extrasounds/mixin/misc/$BucketFluidAccessor" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"

export interface $BucketFluidAccessor {

 "getContent"(): $Fluid

(): $Fluid
}

export namespace $BucketFluidAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketFluidAccessor$Type = ($BucketFluidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketFluidAccessor_ = $BucketFluidAccessor$Type;
}}
