declare module "packages/com/anthonyhilyard/prism/util/$IColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IColor {

 "isAnimated"(): boolean
 "getName"(): string
 "getValue"(): integer
}

export namespace $IColor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColor$Type = ($IColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColor_ = $IColor$Type;
}}
