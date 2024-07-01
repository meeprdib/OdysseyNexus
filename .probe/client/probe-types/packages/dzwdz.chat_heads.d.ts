declare module "packages/dzwdz/chat_heads/mixinterface/$HttpTextureAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $HttpTextureAccessor {

 "chatheads$setTextureLocation"(arg0: $ResourceLocation$Type): void

(arg0: $ResourceLocation$Type): void
}

export namespace $HttpTextureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpTextureAccessor$Type = ($HttpTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HttpTextureAccessor_ = $HttpTextureAccessor$Type;
}}
declare module "packages/dzwdz/chat_heads/mixinterface/$PlayerChatMessageAccessor" {
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export interface $PlayerChatMessageAccessor {

 "setPlayerInfo"(arg0: $PlayerInfo$Type): void
 "getPlayerInfo"(): $PlayerInfo
}

export namespace $PlayerChatMessageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChatMessageAccessor$Type = ($PlayerChatMessageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerChatMessageAccessor_ = $PlayerChatMessageAccessor$Type;
}}
declare module "packages/dzwdz/chat_heads/mixinterface/$GuiMessageOwnerAccessor" {
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export interface $GuiMessageOwnerAccessor {

 "chatheads$getOwner"(): $PlayerInfo

(): $PlayerInfo
}

export namespace $GuiMessageOwnerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageOwnerAccessor$Type = ($GuiMessageOwnerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiMessageOwnerAccessor_ = $GuiMessageOwnerAccessor$Type;
}}
