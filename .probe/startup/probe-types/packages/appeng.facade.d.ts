declare module "packages/appeng/facade/$FacadePart" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFacadePart, $IFacadePart$Type} from "packages/appeng/api/parts/$IFacadePart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"

export class $FacadePart implements $IFacadePart {

constructor(arg0: $ItemStack$Type, arg1: $Direction$Type)

public "getBoxes"(arg0: $IPartCollisionHelper$Type, arg1: boolean): void
public "getTextureItem"(): $ItemStack
public "getBlockState"(): $BlockState
public "getItemStack"(): $ItemStack
public "getSide"(): $Direction
public "getItem"(): $Item
get "textureItem"(): $ItemStack
get "blockState"(): $BlockState
get "itemStack"(): $ItemStack
get "side"(): $Direction
get "item"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadePart$Type = ($FacadePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadePart_ = $FacadePart$Type;
}}
