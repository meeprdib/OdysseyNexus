declare module "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI" {
import {$IRegionClaimsAPI, $IRegionClaimsAPI$Type} from "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export interface $IServerRegionClaimsAPI extends $IRegionClaimsAPI {

 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
 "getX"(): integer
 "getZ"(): integer
}

export namespace $IServerRegionClaimsAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerRegionClaimsAPI$Type = ($IServerRegionClaimsAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerRegionClaimsAPI_ = $IServerRegionClaimsAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult" {
import {$ClaimResult$Type, $ClaimResult$Type$Type} from "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export class $ClaimResult<C extends $IPlayerChunkClaimAPI> {

constructor(arg0: C, arg1: $ClaimResult$Type$Type)

public "getResultType"(): $ClaimResult$Type
public "getClaimResult"(): C
get "resultType"(): $ClaimResult$Type
get "claimResult"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$Type<C> = ($ClaimResult<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimResult_<C> = $ClaimResult$Type<(C)>;
}}
declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$IPlayerConfigClientStorageAPI, $IPlayerConfigClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IPlayerConfigOptionClientStorageAPI<T extends $Comparable<(T)>> {

 "getValue"(): T
 "getId"(): string
 "getType"(): $Class<(T)>
 "getComment"(): string
 "isMutable"(): boolean
 "getOption"(): $IPlayerConfigOptionSpecAPI<(T)>
 "getTranslation"(): string
 "getValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
 "getCommentTranslationArgs"(): (any)[]
 "getCommentTranslation"(): string
 "isDefaulted"(): boolean
 "getTranslationArgs"(): (any)[]
 "getTooltipPrefix"(): string
}

export namespace $IPlayerConfigOptionClientStorageAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigOptionClientStorageAPI$Type<T> = ($IPlayerConfigOptionClientStorageAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigOptionClientStorageAPI_<T> = $IPlayerConfigOptionClientStorageAPI$Type<(T)>;
}}
declare module "packages/xaero/pac/common/server/core/accessor/$IServerGamePacketListenerImpl" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"

export interface $IServerGamePacketListenerImpl {

 "getXaero_OPAC_connection"(): $Connection

(): $Connection
}

export namespace $IServerGamePacketListenerImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerGamePacketListenerImpl$Type = ($IServerGamePacketListenerImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerGamePacketListenerImpl_ = $IServerGamePacketListenerImpl$Type;
}}
declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI" {
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IClaimsManagerListenerAPI {

 "onChunkChange"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $IPlayerChunkClaimAPI$Type): void
 "onDimensionChange"(arg0: $ResourceLocation$Type): void
 "onWholeRegionChange"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): void
}

export namespace $IClaimsManagerListenerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerListenerAPI$Type = ($IClaimsManagerListenerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerListenerAPI_ = $IClaimsManagerListenerAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IAdaptiveLocalizerAPI {

 "getFor"(arg0: $ServerPlayer$Type, arg1: string, ...arg2: (any)[]): $MutableComponent
 "getFor"(arg0: $ServerPlayer$Type, arg1: $Component$Type): $Component
}

export namespace $IAdaptiveLocalizerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdaptiveLocalizerAPI$Type = ($IAdaptiveLocalizerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdaptiveLocalizerAPI_ = $IAdaptiveLocalizerAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPartyMemberDynamicInfoSyncableAPI {

 "getY"(): double
 "getDimension"(): $ResourceLocation
 "getX"(): double
 "getZ"(): double
 "getPlayerId"(): $UUID
}

export namespace $IPartyMemberDynamicInfoSyncableAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyMemberDynamicInfoSyncableAPI$Type = ($IPartyMemberDynamicInfoSyncableAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyMemberDynamicInfoSyncableAPI_ = $IPartyMemberDynamicInfoSyncableAPI$Type;
}}
declare module "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IServerPartyAPI, $IServerPartyAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPartyManagerAPI {

 "getPartyByOwner"(arg0: $UUID$Type): $IServerPartyAPI
 "getPartyByMember"(arg0: $UUID$Type): $IServerPartyAPI
 "createPartyForOwner"(arg0: $Player$Type): $IServerPartyAPI
 "partyExistsForOwner"(arg0: $UUID$Type): boolean
 "getAllStream"(): $Stream<($IServerPartyAPI)>
 "getPartiesThatAlly"(arg0: $UUID$Type): $Stream<($IServerPartyAPI)>
 "removePartyByOwner"(arg0: $UUID$Type): void
 "removeParty"(arg0: $IServerPartyAPI$Type): void
 "removePartyById"(arg0: $UUID$Type): void
 "getPartyById"(arg0: $UUID$Type): $IServerPartyAPI
}

export namespace $IPartyManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyManagerAPI$Type = ($IPartyManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyManagerAPI_ = $IPartyManagerAPI$Type;
}}
declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPlayerConfigClientStorageAPI, $IPlayerConfigClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import {$IPlayerConfigOptionClientStorageAPI, $IPlayerConfigOptionClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<(T)>> extends $IPlayerConfigOptionClientStorageAPI<(T)> {

 "getValue"(): T
 "getId"(): string
 "getType"(): $Class<(T)>
 "getComment"(): string
 "isMutable"(): boolean
 "getOption"(): $IPlayerConfigOptionSpecAPI<(T)>
 "getTranslation"(): string
 "getValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
 "getCommandInputParser"(): $Function<(string), (T)>
 "isDefaulted"(): boolean
 "getStringValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (string)>
 "getCommandOutputWriterCast"(): $Function<(any), ($Component)>
 "getTooltipPrefix"(): string
 "getCommentTranslationArgs"(): (any)[]
 "getCommentTranslation"(): string
 "getTranslationArgs"(): (any)[]
}

export namespace $IPlayerConfigStringableOptionClientStorageAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigStringableOptionClientStorageAPI$Type<T> = ($IPlayerConfigStringableOptionClientStorageAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigStringableOptionClientStorageAPI_<T> = $IPlayerConfigStringableOptionClientStorageAPI$Type<(T)>;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IPlayerChunkClaimAPI {

 "isSameClaimType"(arg0: $IPlayerChunkClaimAPI$Type): boolean
 "getPlayerId"(): $UUID
 "getSubConfigIndex"(): integer
 "isForceloadable"(): boolean
}

export namespace $IPlayerChunkClaimAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerChunkClaimAPI$Type = ($IPlayerChunkClaimAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerChunkClaimAPI_ = $IPlayerChunkClaimAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/member/$PartyMemberRank" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $PartyMemberRank extends $Enum<($PartyMemberRank)> {
static readonly "MEMBER": $PartyMemberRank
static readonly "MODERATOR": $PartyMemberRank
static readonly "ADMIN": $PartyMemberRank


public static "values"(): ($PartyMemberRank)[]
public static "valueOf"(arg0: string): $PartyMemberRank
public "getColor"(): $ChatFormatting
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartyMemberRank$Type = (("moderator") | ("member") | ("admin")) | ($PartyMemberRank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartyMemberRank_ = $PartyMemberRank$Type;
}}
declare module "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI" {
import {$IRegionClaimsAPI, $IRegionClaimsAPI$Type} from "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IDimensionClaimsManagerAPI {

 "getCount"(): integer
 "getRegion"(arg0: integer, arg1: integer): $IRegionClaimsAPI
 "getDimension"(): $ResourceLocation
}

export namespace $IDimensionClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDimensionClaimsManagerAPI$Type = ($IDimensionClaimsManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDimensionClaimsManagerAPI_ = $IDimensionClaimsManagerAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI" {
import {$IClaimsManagerListenerAPI, $IClaimsManagerListenerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"

export interface $IClaimsManagerTrackerRegisterAPI {

 "register"(arg0: $IClaimsManagerListenerAPI$Type): void

(arg0: $IClaimsManagerListenerAPI$Type): void
}

export namespace $IClaimsManagerTrackerRegisterAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerTrackerRegisterAPI$Type = ($IClaimsManagerTrackerRegisterAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerTrackerRegisterAPI_ = $IClaimsManagerTrackerRegisterAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IPlayerConfigAPI$SetResult, $IPlayerConfigAPI$SetResult$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult"
import {$PlayerConfigType, $PlayerConfigType$Type} from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPlayerConfigAPI {

 "getType"(): $PlayerConfigType
 "getSubIndex"(): integer
 "getSubConfig"(arg0: string): $IPlayerConfigAPI
 "createSubConfig"(arg0: string): $IPlayerConfigAPI
 "getRaw"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "getEffectiveSubConfig"(arg0: integer): $IPlayerConfigAPI
 "getEffectiveSubConfig"(arg0: string): $IPlayerConfigAPI
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(string)>
 "isOptionAllowed"(arg0: $IPlayerConfigOptionSpecAPI$Type<(any)>): boolean
 "tryToReset"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): $IPlayerConfigAPI$SetResult
 "getUsedSubConfig"(): $IPlayerConfigAPI
 "getDefaultRawValue"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "getPlayerId"(): $UUID
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigAPI)>
 "getFromEffectiveConfig"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "getUsedServerSubConfig"(): $IPlayerConfigAPI
 "getEffective"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "subConfigExists"(arg0: string): boolean
 "subConfigExists"(arg0: integer): boolean
 "getSubId"(): string
 "getSubCount"(): integer
 "getSubConfigLimit"(): integer
 "tryToSet"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>, arg1: T): $IPlayerConfigAPI$SetResult
}

export namespace $IPlayerConfigAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigAPI$Type = ($IPlayerConfigAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigAPI_ = $IPlayerConfigAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ClaimResult$Type extends $Enum<($ClaimResult$Type)> {
static readonly "ALREADY_FORCELOADABLE": $ClaimResult$Type
static readonly "ALREADY_UNFORCELOADED": $ClaimResult$Type
static readonly "CLAIMS_ARE_DISABLED": $ClaimResult$Type
static readonly "TOO_MANY_CHUNKS": $ClaimResult$Type
static readonly "UNCLAIMABLE_DIMENSION": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER_FORCELOAD": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER": $ClaimResult$Type
static readonly "ALREADY_CLAIMED": $ClaimResult$Type
static readonly "FORCELOAD_LIMIT_REACHED": $ClaimResult$Type
static readonly "CLAIM_LIMIT_REACHED": $ClaimResult$Type
static readonly "TOO_FAR": $ClaimResult$Type
static readonly "REPLACEMENT_IN_PROGRESS": $ClaimResult$Type
static readonly "NO_SERVER_PERMISSION": $ClaimResult$Type
static readonly "SUCCESSFUL_UNFORCELOAD": $ClaimResult$Type
static readonly "SUCCESSFUL_UNCLAIM": $ClaimResult$Type
static readonly "SUCCESSFUL_FORCELOAD": $ClaimResult$Type
static readonly "SUCCESSFUL_CLAIM": $ClaimResult$Type
readonly "message": $Component
readonly "success": boolean
readonly "fail": boolean


public static "values"(): ($ClaimResult$Type)[]
public static "valueOf"(arg0: string): $ClaimResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$Type$Type = (("already_forceloadable") | ("forceload_limit_reached") | ("successful_forceload") | ("no_server_permission") | ("successful_claim") | ("too_far") | ("not_claimed_by_user") | ("already_claimed") | ("claims_are_disabled") | ("too_many_chunks") | ("successful_unclaim") | ("replacement_in_progress") | ("already_unforceloaded") | ("successful_unforceload") | ("not_claimed_by_user_forceload") | ("unclaimable_dimension") | ("claim_limit_reached")) | ($ClaimResult$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimResult$Type_ = $ClaimResult$Type$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PlayerConfigType, $PlayerConfigType$Type} from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import {$IPlayerConfigClientStorageAPI, $IPlayerConfigClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"

export interface $IPlayerConfigOptionSpecAPI<T extends $Comparable<(T)>> {

 "getId"(): string
 "getType"(): $Class<(T)>
 "getDefaultValue"(): T
 "getPath"(): $List<(string)>
 "getComment"(): string
 "getTranslation"(): string
 "getShortenedId"(): string
 "getClientSideValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
 "getCommandInputParser"(): $Function<(string), (T)>
 "getCommandOutputWriter"(): $Function<(T), ($Component)>
 "getServerSideValidator"(): $BiPredicate<($IPlayerConfigAPI), (T)>
 "getConfigTypeFilter"(): $Predicate<($PlayerConfigType)>
 "getCommentTranslationArgs"(): (string)[]
 "getCommentTranslation"(): string
 "getTranslationArgs"(): (string)[]
 "getTooltipPrefix"(): string
}

export namespace $IPlayerConfigOptionSpecAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigOptionSpecAPI$Type<T> = ($IPlayerConfigOptionSpecAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigOptionSpecAPI_<T> = $IPlayerConfigOptionSpecAPI$Type<(T)>;
}}
declare module "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerPlayerDataAPI {

constructor()

public static "from"(arg0: $ServerPlayer$Type): $ServerPlayerDataAPI
public "isClaimsAdminMode"(): boolean
public "isClaimsServerMode"(): boolean
public "isClaimsNonallyMode"(): boolean
get "claimsAdminMode"(): boolean
get "claimsServerMode"(): boolean
get "claimsNonallyMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerDataAPI$Type = ($ServerPlayerDataAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerDataAPI_ = $ServerPlayerDataAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI" {
import {$IPlayerClaimPosListAPI, $IPlayerClaimPosListAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPlayerDimensionClaimsAPI {

 "getStream"(): $Stream<($IPlayerClaimPosListAPI)>

(): $Stream<($IPlayerClaimPosListAPI)>
}

export namespace $IPlayerDimensionClaimsAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerDimensionClaimsAPI$Type = ($IPlayerDimensionClaimsAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerDimensionClaimsAPI_ = $IPlayerDimensionClaimsAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI" {
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export interface $IRegionClaimsAPI {

 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
 "getX"(): integer
 "getZ"(): integer
}

export namespace $IRegionClaimsAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegionClaimsAPI$Type = ($IRegionClaimsAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegionClaimsAPI_ = $IRegionClaimsAPI$Type;
}}
declare module "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI" {
import {$IPlayerDimensionClaimsAPI, $IPlayerDimensionClaimsAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerClaimInfoAPI, $IPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IServerPlayerClaimInfoAPI extends $IPlayerClaimInfoAPI {

 "getStream"(): $Stream<($Map$Entry<($ResourceLocation), ($IPlayerDimensionClaimsAPI)>)>
 "getDimension"(arg0: $ResourceLocation$Type): $IPlayerDimensionClaimsAPI
 "getClaimsColor"(arg0: integer): integer
 "getClaimsColor"(): integer
 "getClaimsColor"(arg0: string): integer
 "getClaimCount"(): integer
 "getPlayerUsername"(): string
 "getClaimsName"(arg0: string): string
 "getClaimsName"(arg0: integer): string
 "getClaimsName"(): string
 "getForceloadCount"(): integer
 "getPlayerId"(): $UUID
}

export namespace $IServerPlayerClaimInfoAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayerClaimInfoAPI$Type = ($IServerPlayerClaimInfoAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayerClaimInfoAPI_ = $IServerPlayerClaimInfoAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPlayerClaimPosListAPI {

 "getCount"(): integer
 "getStream"(): $Stream<($ChunkPos)>
 "getClaimState"(): $IPlayerChunkClaimAPI
}

export namespace $IPlayerClaimPosListAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerClaimPosListAPI$Type = ($IPlayerClaimPosListAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerClaimPosListAPI_ = $IPlayerClaimPosListAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartyMemberRank, $PartyMemberRank$Type} from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export interface $IPartyMemberAPI extends $IPartyPlayerInfoAPI {

 "getRank"(): $PartyMemberRank
 "isOwner"(): boolean
 "getUsername"(): string
 "getUUID"(): $UUID
}

export namespace $IPartyMemberAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyMemberAPI$Type = ($IPartyMemberAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyMemberAPI_ = $IPartyMemberAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IPartyPlayerInfoAPI {

 "getUsername"(): string
 "getUUID"(): $UUID
}

export namespace $IPartyPlayerInfoAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyPlayerInfoAPI$Type = ($IPartyPlayerInfoAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyPlayerInfoAPI_ = $IPartyPlayerInfoAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/data/$IOpenPACServerPlayer" {
import {$ServerPlayerDataAPI, $ServerPlayerDataAPI$Type} from "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI"

export interface $IOpenPACServerPlayer {

 "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
 "setXaero_OPAC_PlayerData"(arg0: $ServerPlayerDataAPI$Type): void
}

export namespace $IOpenPACServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenPACServerPlayer$Type = ($IOpenPACServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpenPACServerPlayer_ = $IOpenPACServerPlayer$Type;
}}
declare module "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IDimensionClaimsManagerAPI, $IDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$IPlayerClaimInfoAPI, $IPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClaimsManagerTrackerAPI, $IClaimsManagerTrackerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI"

export interface $IClaimsManagerAPI {

 "get"(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$Type, arg1: $ChunkPos$Type): $IPlayerChunkClaimAPI
 "getDimension"(arg0: $ResourceLocation$Type): $IDimensionClaimsManagerAPI
 "getTracker"(): $IClaimsManagerTrackerAPI
 "hasPlayerInfo"(arg0: $UUID$Type): boolean
 "getPlayerInfo"(arg0: $UUID$Type): $IPlayerClaimInfoAPI
}

export namespace $IClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerAPI$Type = ($IClaimsManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerAPI_ = $IClaimsManagerAPI$Type;
}}
declare module "packages/xaero/pac/common/entity/$IEntity" {
import {$EntityData, $EntityData$Type} from "packages/xaero/pac/common/entity/$EntityData"

export interface $IEntity {

 "setXaero_OPAC_data"(arg0: $EntityData$Type): void
 "getXaero_OPAC_data"(): $EntityData
}

export namespace $IEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntity$Type = ($IEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntity_ = $IEntity$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IPlayerConfigAPI$SetResult extends $Enum<($IPlayerConfigAPI$SetResult)> {
static readonly "INVALID": $IPlayerConfigAPI$SetResult
static readonly "ILLEGAL_OPTION": $IPlayerConfigAPI$SetResult
static readonly "DEFAULTED": $IPlayerConfigAPI$SetResult
static readonly "SUCCESS": $IPlayerConfigAPI$SetResult


public static "values"(): ($IPlayerConfigAPI$SetResult)[]
public static "valueOf"(arg0: string): $IPlayerConfigAPI$SetResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigAPI$SetResult$Type = (("illegal_option") | ("success") | ("defaulted") | ("invalid")) | ($IPlayerConfigAPI$SetResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigAPI$SetResult_ = $IPlayerConfigAPI$SetResult$Type;
}}
declare module "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IPartyAllyAPI {

 "getPartyId"(): $UUID

(): $UUID
}

export namespace $IPartyAllyAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyAllyAPI$Type = ($IPartyAllyAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyAllyAPI_ = $IPartyAllyAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI" {
import {$IPlayerDimensionClaimsAPI, $IPlayerDimensionClaimsAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPlayerClaimInfoAPI {

 "getDimension"(arg0: $ResourceLocation$Type): $IPlayerDimensionClaimsAPI
 "getClaimsColor"(): integer
 "getClaimsColor"(arg0: integer): integer
 "getClaimCount"(): integer
 "getPlayerUsername"(): string
 "getClaimsName"(): string
 "getClaimsName"(arg0: integer): string
 "getForceloadCount"(): integer
 "getPlayerId"(): $UUID
}

export namespace $IPlayerClaimInfoAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerClaimInfoAPI$Type = ($IPlayerClaimInfoAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerClaimInfoAPI_ = $IPlayerClaimInfoAPI$Type;
}}
declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlayerConfigType, $PlayerConfigType$Type} from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPlayerConfigStringableOptionClientStorageAPI, $IPlayerConfigStringableOptionClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI"

export interface $IPlayerConfigClientStorageAPI {

 "getOwner"(): $UUID
 "getType"(): $PlayerConfigType
 "getSubConfig"(arg0: string): $IPlayerConfigClientStorageAPI
 "getEffectiveSubConfig"(arg0: string): $IPlayerConfigClientStorageAPI
 "optionStream"(): $Stream<($IPlayerConfigStringableOptionClientStorageAPI<(any)>)>
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(string)>
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
 "getOptionStorage"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): $IPlayerConfigStringableOptionClientStorageAPI<(any)>
 "subConfigExists"(arg0: string): boolean
 "getSubCount"(): integer
 "getSubConfigLimit"(): integer
}

export namespace $IPlayerConfigClientStorageAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigClientStorageAPI$Type = ($IPlayerConfigClientStorageAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigClientStorageAPI_ = $IPlayerConfigClientStorageAPI$Type;
}}
declare module "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartyMemberRank, $PartyMemberRank$Type} from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import {$IPartyAllyAPI, $IPartyAllyAPI$Type} from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPartyMemberAPI, $IPartyMemberAPI$Type} from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"
import {$IPartyAPI, $IPartyAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyAPI"

export interface $IServerPartyAPI extends $IPartyAPI {

 "getOwner"(): $IPartyMemberAPI
 "getId"(): $UUID
 "getDefaultName"(): string
 "setRank"(arg0: $IPartyMemberAPI$Type, arg1: $PartyMemberRank$Type): boolean
 "addMember"(arg0: $UUID$Type, arg1: $PartyMemberRank$Type, arg2: string): $IPartyMemberAPI
 "removeMember"(arg0: $UUID$Type): $IPartyMemberAPI
 "getOnlineMemberStream"(): $Stream<($ServerPlayer)>
 "isInvited"(arg0: $UUID$Type): boolean
 "getMemberInfo"(arg0: $UUID$Type): $IPartyMemberAPI
 "getMemberInfo"(arg0: string): $IPartyMemberAPI
 "addAllyParty"(arg0: $UUID$Type): void
 "uninvitePlayer"(arg0: $UUID$Type): $IPartyPlayerInfoAPI
 "getInviteCount"(): integer
 "getAllyCount"(): integer
 "invitePlayer"(arg0: $UUID$Type, arg1: string): $IPartyPlayerInfoAPI
 "isAlly"(arg0: $UUID$Type): boolean
 "getMemberCount"(): integer
 "removeAllyParty"(arg0: $UUID$Type): void
 "getStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInvitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
 "getAllyPartiesStream"(): $Stream<($IPartyAllyAPI)>
 "getNonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getMemberInfoStream"(): $Stream<($IPartyMemberAPI)>
}

export namespace $IServerPartyAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPartyAPI$Type = ($IServerPartyAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPartyAPI_ = $IServerPartyAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/result/api/$AreaClaimResult" {
import {$ClaimResult$Type, $ClaimResult$Type$Type} from "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $AreaClaimResult {

constructor(arg0: $Set$Type<($ClaimResult$Type$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "getSize"(): integer
public "getRight"(): integer
public "getLeft"(): integer
public "getBottom"(): integer
public "getTop"(): integer
public "getResultTypesIterable"(): $Iterable<($ClaimResult$Type)>
public "getResultTypesStream"(): $Stream<($ClaimResult$Type)>
get "size"(): integer
get "right"(): integer
get "left"(): integer
get "bottom"(): integer
get "top"(): integer
get "resultTypesIterable"(): $Iterable<($ClaimResult$Type)>
get "resultTypesStream"(): $Stream<($ClaimResult$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaClaimResult$Type = ($AreaClaimResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AreaClaimResult_ = $AreaClaimResult$Type;
}}
declare module "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IChunkProtectionAPI {

 "onProjectileHitSpawnedEntity"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
/**
 * 
 * @deprecated
 */
 "onBlockInteraction"(arg0: $Entity$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $ServerLevel$Type, arg4: $BlockPos$Type, arg5: $Direction$Type, arg6: boolean, arg7: boolean): boolean
 "onBlockInteraction"(arg0: $Entity$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $ServerLevel$Type, arg4: $BlockPos$Type, arg5: $Direction$Type, arg6: boolean, arg7: boolean, arg8: boolean): boolean
 "onEntityPlaceBlock"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
 "onItemPickup"(arg0: $Entity$Type, arg1: $ItemEntity$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $Entity$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $UUID$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $Entity$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $UUID$Type): boolean
 "onPosAffectedByAnotherPos"(arg0: $ServerLevel$Type, arg1: $ChunkPos$Type, arg2: $ServerLevel$Type, arg3: $ChunkPos$Type, arg4: boolean, arg5: boolean, arg6: boolean): boolean
/**
 * 
 * @deprecated
 */
 "onEntityInteraction"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $Entity$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type, arg5: boolean, arg6: boolean): boolean
 "onEntityInteraction"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $Entity$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type, arg5: boolean, arg6: boolean, arg7: boolean): boolean
 "getClaimConfig"(arg0: $IPlayerChunkClaimAPI$Type): $IPlayerConfigAPI
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$Type, arg1: $Entity$Type): boolean
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$Type, arg1: $UUID$Type): boolean
 "removeFullPass"(arg0: $UUID$Type): void
 "giveFullPass"(arg0: $UUID$Type): void
}

export namespace $IChunkProtectionAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkProtectionAPI$Type = ($IChunkProtectionAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkProtectionAPI_ = $IChunkProtectionAPI$Type;
}}
declare module "packages/xaero/pac/common/server/$IServerDataAPI" {
import {$IChunkProtectionAPI, $IChunkProtectionAPI$Type} from "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI"
import {$IAdaptiveLocalizerAPI, $IAdaptiveLocalizerAPI$Type} from "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI"
import {$OpenPACServerAPI, $OpenPACServerAPI$Type} from "packages/xaero/pac/common/server/api/$OpenPACServerAPI"
import {$IPartyManagerAPI, $IPartyManagerAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI"
import {$IPlayerConfigManagerAPI, $IPlayerConfigManagerAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI"
import {$IServerClaimsManagerAPI, $IServerClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI"

export interface $IServerDataAPI {

 "getAPI"(): $OpenPACServerAPI
 "getPlayerConfigs"(): $IPlayerConfigManagerAPI
 "getServerClaimsManager"(): $IServerClaimsManagerAPI
 "getAdaptiveLocalizer"(): $IAdaptiveLocalizerAPI
 "getPartyManager"(): $IPartyManagerAPI
 "getChunkProtection"(): $IChunkProtectionAPI
}

export namespace $IServerDataAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDataAPI$Type = ($IServerDataAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerDataAPI_ = $IServerDataAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/api/$IPartyAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartyMemberRank, $PartyMemberRank$Type} from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import {$IPartyAllyAPI, $IPartyAllyAPI$Type} from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPartyMemberAPI, $IPartyMemberAPI$Type} from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export interface $IPartyAPI {

 "getOwner"(): $IPartyMemberAPI
 "getId"(): $UUID
 "getDefaultName"(): string
 "setRank"(arg0: $IPartyMemberAPI$Type, arg1: $PartyMemberRank$Type): boolean
 "isInvited"(arg0: $UUID$Type): boolean
 "getMemberInfo"(arg0: $UUID$Type): $IPartyMemberAPI
 "getInviteCount"(): integer
 "getAllyCount"(): integer
 "isAlly"(arg0: $UUID$Type): boolean
 "getMemberCount"(): integer
 "getStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInvitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
 "getAllyPartiesStream"(): $Stream<($IPartyAllyAPI)>
 "getNonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getMemberInfoStream"(): $Stream<($IPartyMemberAPI)>
}

export namespace $IPartyAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyAPI$Type = ($IPartyAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyAPI_ = $IPartyAPI$Type;
}}
declare module "packages/xaero/pac/common/entity/$IItemEntity" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IItemEntity {

 "getXaero_OPAC_thrower"(): $UUID
 "getXaero_OPAC_target"(): $UUID
 "getXaero_OPAC_throwerAccessor"(): $UUID
 "setXaero_OPAC_throwerAccessor"(arg0: $UUID$Type): void
}

export namespace $IItemEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemEntity$Type = ($IItemEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemEntity_ = $IItemEntity$Type;
}}
declare module "packages/xaero/pac/common/capability/$ICapabilityProvider" {
import {$ICapability, $ICapability$Type} from "packages/xaero/pac/common/capability/$ICapability"

export interface $ICapabilityProvider {

 "getCapability"<T>(arg0: $ICapability$Type<(T)>): T

(arg0: $ICapability$Type<(T)>): T
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$Type = ($ICapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$Type;
}}
declare module "packages/xaero/pac/common/server/core/accessor/$ICreateContraption" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICreateContraption {

 "getXaero_OPAC_anchor"(): $BlockPos
 "getXaero_OPAC_placementPos"(): $BlockPos
 "setXaero_OPAC_placementPos"(arg0: $BlockPos$Type): void
}

export namespace $ICreateContraption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreateContraption$Type = ($ICreateContraption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreateContraption_ = $ICreateContraption$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"

export interface $IPlayerConfigManagerAPI {

 "getLoadedConfig"(arg0: $UUID$Type): $IPlayerConfigAPI
 "getDefaultConfig"(): $IPlayerConfigAPI
 "getAllOptionsStream"(): $Stream<($IPlayerConfigOptionSpecAPI<(any)>)>
 "getWildernessConfig"(): $IPlayerConfigAPI
 "getOptionForId"(arg0: string): $IPlayerConfigOptionSpecAPI<(any)>
 "getServerClaimConfig"(): $IPlayerConfigAPI
 "getExpiredClaimConfig"(): $IPlayerConfigAPI
}

export namespace $IPlayerConfigManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigManagerAPI$Type = ($IPlayerConfigManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigManagerAPI_ = $IPlayerConfigManagerAPI$Type;
}}
declare module "packages/xaero/pac/common/server/core/accessor/$ICreateContraptionEntity" {
import {$ICreateContraption, $ICreateContraption$Type} from "packages/xaero/pac/common/server/core/accessor/$ICreateContraption"

export interface $ICreateContraptionEntity {

 "getXaero_OPAC_contraption"(): $ICreateContraption

(): $ICreateContraption
}

export namespace $ICreateContraptionEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreateContraptionEntity$Type = ($ICreateContraptionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreateContraptionEntity_ = $ICreateContraptionEntity$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerConfigType extends $Enum<($PlayerConfigType)> {
static readonly "SERVER": $PlayerConfigType
static readonly "EXPIRED": $PlayerConfigType
static readonly "WILDERNESS": $PlayerConfigType
static readonly "DEFAULT_PLAYER": $PlayerConfigType
static readonly "PLAYER": $PlayerConfigType


public "getName"(): $Component
public static "values"(): ($PlayerConfigType)[]
public static "valueOf"(arg0: string): $PlayerConfigType
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerConfigType$Type = (("server") | ("expired") | ("default_player") | ("wilderness") | ("player")) | ($PlayerConfigType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerConfigType_ = $PlayerConfigType$Type;
}}
declare module "packages/xaero/pac/common/capability/$ICapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapability<T> {

}

export namespace $ICapability {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapability$Type<T> = ($ICapability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapability_<T> = $ICapability$Type<(T)>;
}}
declare module "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI" {
import {$IServerRegionClaimsAPI, $IServerRegionClaimsAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI"
import {$IDimensionClaimsManagerAPI, $IDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IServerDimensionClaimsManagerAPI extends $IDimensionClaimsManagerAPI {

 "getCount"(): integer
 "getDimension"(): $ResourceLocation
 "getRegionStream"(): $Stream<($IServerRegionClaimsAPI)>
}

export namespace $IServerDimensionClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDimensionClaimsManagerAPI$Type = ($IServerDimensionClaimsManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerDimensionClaimsManagerAPI_ = $IServerDimensionClaimsManagerAPI$Type;
}}
declare module "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ClaimResult, $ClaimResult$Type} from "packages/xaero/pac/common/claims/result/api/$ClaimResult"
import {$IServerPlayerClaimInfoAPI, $IServerPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI"
import {$IClaimsManagerAPI, $IClaimsManagerAPI$Type} from "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$IServerDimensionClaimsManagerAPI, $IServerDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AreaClaimResult, $AreaClaimResult$Type} from "packages/xaero/pac/common/claims/result/api/$AreaClaimResult"
import {$IClaimsManagerTrackerAPI, $IClaimsManagerTrackerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI"

export interface $IServerClaimsManagerAPI extends $IClaimsManagerAPI {

 "get"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$Type, arg1: $ChunkPos$Type): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type): $IPlayerChunkClaimAPI
 "claim"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): $IPlayerChunkClaimAPI
 "getDimension"(arg0: $ResourceLocation$Type): $IServerDimensionClaimsManagerAPI
 "getTracker"(): $IClaimsManagerTrackerAPI
 "getPlayerBaseClaimLimit"(arg0: $ServerPlayer$Type): integer
 "getPlayerBaseClaimLimit"(arg0: $UUID$Type): integer
 "getPlayerBaseForceloadLimit"(arg0: $UUID$Type): integer
 "getPlayerBaseForceloadLimit"(arg0: $ServerPlayer$Type): integer
 "tryToClaim"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "tryToUnclaim"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "tryToForceload"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "isClaimable"(arg0: $ResourceLocation$Type): boolean
 "tryToUnclaimArea"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean): $AreaClaimResult
 "tryToClaimArea"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean): $AreaClaimResult
 "tryToForceloadArea"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: boolean): $AreaClaimResult
 "hasPlayerInfo"(arg0: $UUID$Type): boolean
 "unclaim"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): void
 "getDimensionStream"(): $Stream<($IServerDimensionClaimsManagerAPI)>
 "getPlayerInfoStream"(): $Stream<($IServerPlayerClaimInfoAPI)>
 "getPlayerInfo"(arg0: $UUID$Type): $IServerPlayerClaimInfoAPI
}

export namespace $IServerClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerClaimsManagerAPI$Type = ($IServerClaimsManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerClaimsManagerAPI_ = $IServerClaimsManagerAPI$Type;
}}
declare module "packages/xaero/pac/common/server/api/$OpenPACServerAPI" {
import {$IChunkProtectionAPI, $IChunkProtectionAPI$Type} from "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI"
import {$IServerDataAPI, $IServerDataAPI$Type} from "packages/xaero/pac/common/server/$IServerDataAPI"
import {$IAdaptiveLocalizerAPI, $IAdaptiveLocalizerAPI$Type} from "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI"
import {$IPartyManagerAPI, $IPartyManagerAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI"
import {$IPlayerConfigManagerAPI, $IPlayerConfigManagerAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI"
import {$IServerClaimsManagerAPI, $IServerClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $OpenPACServerAPI {

constructor(arg0: $IServerDataAPI$Type)

public static "get"(arg0: $MinecraftServer$Type): $OpenPACServerAPI
public "getPlayerConfigs"(): $IPlayerConfigManagerAPI
public "getServerClaimsManager"(): $IServerClaimsManagerAPI
public "getPartyManager"(): $IPartyManagerAPI
public "getChunkProtection"(): $IChunkProtectionAPI
public "getAdaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
get "partyManager"(): $IPartyManagerAPI
get "chunkProtection"(): $IChunkProtectionAPI
get "adaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenPACServerAPI$Type = ($OpenPACServerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenPACServerAPI_ = $OpenPACServerAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI" {
import {$IClaimsManagerListenerAPI, $IClaimsManagerListenerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"
import {$IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI"

export interface $IClaimsManagerTrackerAPI extends $IClaimsManagerTrackerRegisterAPI {

 "register"(arg0: $IClaimsManagerListenerAPI$Type): void

(arg0: $IClaimsManagerListenerAPI$Type): void
}

export namespace $IClaimsManagerTrackerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerTrackerAPI$Type = ($IClaimsManagerTrackerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerTrackerAPI_ = $IClaimsManagerTrackerAPI$Type;
}}
declare module "packages/xaero/pac/common/entity/$EntityData" {
import {$IEntity, $IEntity$Type} from "packages/xaero/pac/common/entity/$IEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityData {

constructor()

public static "from"(arg0: $Entity$Type): $EntityData
public static "from"(arg0: $IEntity$Type): $EntityData
public "setLastChunkEntryDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getLastChunkEntryDimension"(): $ResourceKey<($Level)>
public "setLootOwner"(arg0: $UUID$Type): void
public "setDeadPlayer"(arg0: $UUID$Type): void
public "getLootOwner"(): $UUID
public "getDeadPlayer"(): $UUID
public "getShouldCheckItemUseTick"(): boolean
public "setShouldCheckItemUseTick"(arg0: boolean): void
set "lastChunkEntryDimension"(value: $ResourceKey$Type<($Level$Type)>)
get "lastChunkEntryDimension"(): $ResourceKey<($Level)>
set "lootOwner"(value: $UUID$Type)
set "deadPlayer"(value: $UUID$Type)
get "lootOwner"(): $UUID
get "deadPlayer"(): $UUID
get "shouldCheckItemUseTick"(): boolean
set "shouldCheckItemUseTick"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityData$Type = ($EntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityData_ = $EntityData$Type;
}}
declare module "packages/xaero/pac/common/capability/$ICapableObject" {
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/xaero/pac/common/capability/$ICapabilityProvider"

export interface $ICapableObject {

 "setXaero_OPAC_CapabilityProvider"(arg0: $ICapabilityProvider$Type): void
 "getXaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
}

export namespace $ICapableObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapableObject$Type = ($ICapableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapableObject_ = $ICapableObject$Type;
}}
