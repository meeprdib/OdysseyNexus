declare module "packages/xaeroplus/mixin/client/mc/$AccessorGameOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorGameOptions {

 "getServerRenderDistance"(): integer

(): integer
}

export namespace $AccessorGameOptions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorGameOptions$Type = ($AccessorGameOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorGameOptions_ = $AccessorGameOptions$Type;
}}
declare module "packages/xaeroplus/mixin/client/mc/$AccessorWorldRenderer" {
import {$ViewArea, $ViewArea$Type} from "packages/net/minecraft/client/renderer/$ViewArea"
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"

export interface $AccessorWorldRenderer {

 "getChunks"(): $ViewArea
 "getFrustum"(): $Frustum
}

export namespace $AccessorWorldRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWorldRenderer$Type = ($AccessorWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorWorldRenderer_ = $AccessorWorldRenderer$Type;
}}
declare module "packages/xaeroplus/mixin/client/$MixinMinimapModOptionsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinMinimapModOptionsAccessor {

}

export namespace $MixinMinimapModOptionsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinMinimapModOptionsAccessor$Type = ($MixinMinimapModOptionsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinMinimapModOptionsAccessor_ = $MixinMinimapModOptionsAccessor$Type;
}}
declare module "packages/xaeroplus/mixin/client/$MixinWidgetScreenHandlerAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/xaero/common/gui/widget/$Widget"

export interface $MixinWidgetScreenHandlerAccessor {

 "getWidgets"(): $List<($Widget)>
 "invokeAddWidget"(arg0: $Widget$Type): void
}

export namespace $MixinWidgetScreenHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinWidgetScreenHandlerAccessor$Type = ($MixinWidgetScreenHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinWidgetScreenHandlerAccessor_ = $MixinWidgetScreenHandlerAccessor$Type;
}}
