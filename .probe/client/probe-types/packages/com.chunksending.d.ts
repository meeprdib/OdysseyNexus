declare module "packages/com/chunksending/$IChunksendingPlayer" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"

export interface $IChunksendingPlayer {

 "attachToPending"(arg0: $ChunkPos$Type, arg1: $Packet$Type<(any)>): boolean

(arg0: $ChunkPos$Type, arg1: $Packet$Type<(any)>): boolean
}

export namespace $IChunksendingPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunksendingPlayer$Type = ($IChunksendingPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunksendingPlayer_ = $IChunksendingPlayer$Type;
}}
