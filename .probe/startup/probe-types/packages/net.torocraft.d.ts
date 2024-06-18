declare module "packages/net/torocraft/torohealth/api/$IGuiGraphics" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $IGuiGraphics {

 "setPose"(arg0: $PoseStack$Type): void

(arg0: $PoseStack$Type): void
}

export namespace $IGuiGraphics {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiGraphics$Type = ($IGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiGraphics_ = $IGuiGraphics$Type;
}}
declare module "packages/net/torocraft/torohealth/api/$IGuiGraphicsGetter" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IGuiGraphicsGetter {

 "getGuiGraphics"(arg0: $PoseStack$Type): $GuiGraphics

(arg0: $PoseStack$Type): $GuiGraphics
}

export namespace $IGuiGraphicsGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiGraphicsGetter$Type = ($IGuiGraphicsGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiGraphicsGetter_ = $IGuiGraphicsGetter$Type;
}}
