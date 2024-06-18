declare module "packages/xaero/common/settings/$Option" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"

export class $Option {

constructor(arg0: $ModOptions$Type)

public "createButton"(arg0: integer, arg1: integer, arg2: integer): $AbstractWidget
public "getCaption"(): $Component
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Option$Type = ($Option);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Option_ = $Option$Type;
}}
declare module "packages/xaero/common/gui/dropdown/$DropDownWidget" {
import {$Tooltip, $Tooltip$Type} from "packages/net/minecraft/client/gui/components/$Tooltip"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $DropDownWidget extends $AbstractWidget {
static readonly "DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_HOVERED_BACKGROUND": integer
static readonly "TRIM": integer
static readonly "TRIM_OPEN": integer
static readonly "TRIM_INSIDE": integer
static readonly "LINE_HEIGHT": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "height": integer
 "x": integer
 "y": integer
 "active": boolean
 "visible": boolean
 "tooltip": $Tooltip
 "tooltipMsDelay": integer
 "hoverOrFocusedStartTime": long
static readonly "UNSET_FG_COLOR": integer


public "size"(): integer
public "isClosed"(): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "mouseClicked"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "setClosed"(arg0: boolean): void
public "setActive"(arg0: boolean): void
public "getSelected"(): integer
public "m_168797_"(arg0: $NarrationElementOutput$Type): void
public "mouseScrolled"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "mouseReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "m_87963_"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "onDropDown"(arg0: integer, arg1: integer, arg2: integer): boolean
public "onDropDown"(arg0: integer, arg1: integer, arg2: boolean, arg3: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getXWithOffset"(): integer
public "selectId"(arg0: integer, arg1: boolean): void
public "getYWithOffset"(): integer
get "closed"(): boolean
set "closed"(value: boolean)
set "active"(value: boolean)
get "selected"(): integer
get "xWithOffset"(): integer
get "yWithOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownWidget$Type = ($DropDownWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropDownWidget_ = $DropDownWidget$Type;
}}
declare module "packages/xaero/common/minimap/radar/$MinimapRadarList" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapRadarList implements $Comparable<($MinimapRadarList)> {


public "compareTo"(arg0: $MinimapRadarList$Type): integer
public "getEntities"(): $List<($Entity)>
public "setCategory"(arg0: $EntityRadarCategory$Type): $MinimapRadarList
public "getCategory"(): $EntityRadarCategory
get "entities"(): $List<($Entity)>
set "category"(value: $EntityRadarCategory$Type)
get "category"(): $EntityRadarCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRadarList$Type = ($MinimapRadarList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRadarList_ = $MinimapRadarList$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData" {
import {$CategorySettingsButton$PressActionWithContext, $CategorySettingsButton$PressActionWithContext$Type} from "packages/xaero/common/category/ui/entry/widget/$CategorySettingsButton$PressActionWithContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GuiCategoryUIEditorSimpleButtonData extends $GuiCategoryUIEditorExpandableData<($GuiCategoryUIEditorExpandableData<(any)>)> {


public "getDisplayName"(): string
public "getIsActiveSupplier"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type): boolean
public "getMessageSupplier"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type): $Supplier<(string)>
public "getPressAction"(): $CategorySettingsButton$PressActionWithContext
public "getSubExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
get "displayName"(): string
get "pressAction"(): $CategorySettingsButton$PressActionWithContext
get "subExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSimpleButtonData$Type = ($GuiCategoryUIEditorSimpleButtonData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSimpleButtonData_ = $GuiCategoryUIEditorSimpleButtonData$Type;
}}
declare module "packages/xaero/common/interfaces/$InterfaceManager" {
import {$MinimapInterface, $MinimapInterface$Type} from "packages/xaero/common/minimap/$MinimapInterface"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

/**
 * 
 * @deprecated
 */
export class $InterfaceManager {

constructor(arg0: $IXaeroMinimap$Type)

public "getMinimapInterface"(): $MinimapInterface
get "minimapInterface"(): $MinimapInterface
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceManager$Type = ($InterfaceManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceManager_ = $InterfaceManager$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $WaypointSharingHandler {
static readonly "WAYPOINT_OLD_SHARE_PREFIX": string
static readonly "WAYPOINT_ADD_PREFIX": string
static readonly "WAYPOINT_SHARE_PREFIX": string

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type)

public "onWaypointAdd"(arg0: (string)[]): void
public "onWaypointReceived"(arg0: string, arg1: string): void
public "shareWaypoint"(arg0: $Screen$Type, arg1: $Waypoint$Type, arg2: $WaypointWorld$Type): void
public "confirmResult"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSharingHandler$Type = ($WaypointSharingHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointSharingHandler_ = $WaypointSharingHandler$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetLoadingHandler" {
import {$WidgetScreenHandler, $WidgetScreenHandler$Type} from "packages/xaero/common/gui/widget/$WidgetScreenHandler"

export class $WidgetLoadingHandler {

constructor(arg0: $WidgetScreenHandler$Type)

public "loadWidget"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLoadingHandler$Type = ($WidgetLoadingHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLoadingHandler_ = $WidgetLoadingHandler$Type;
}}
declare module "packages/xaero/common/gui/dropdown/$IDropDownContainer" {
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/common/gui/dropdown/$DropDownWidget"

export interface $IDropDownContainer {

 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
}

export namespace $IDropDownContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropDownContainer$Type = ($IDropDownContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDropDownContainer_ = $IDropDownContainer$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointDeleter" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $WaypointDeleter {

constructor(arg0: $IXaeroMinimap$Type)

public "add"(arg0: $Waypoint$Type): void
public "begin"(): void
public "deleteCollected"(arg0: $WaypointWorld$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointDeleter$Type = ($WaypointDeleter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointDeleter_ = $WaypointDeleter$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem" {
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITrackedPlayerReader, $ITrackedPlayerReader$Type} from "packages/xaero/common/minimap/radar/tracker/system/$ITrackedPlayerReader"

export interface $IPlayerTrackerSystem<P> {

 "getTrackedPlayerIterator"(): $Iterator<(P)>
 "getReader"(): $ITrackedPlayerReader<(P)>
}

export namespace $IPlayerTrackerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerTrackerSystem$Type<P> = ($IPlayerTrackerSystem<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerTrackerSystem_<P> = $IPlayerTrackerSystem$Type<(P)>;
}}
declare module "packages/xaero/common/validator/$NumericFieldValidator" {
import {$EditBox, $EditBox$Type} from "packages/net/minecraft/client/gui/components/$EditBox"

export class $NumericFieldValidator {

constructor()

public "validate"(arg0: $EditBox$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumericFieldValidator$Type = ($NumericFieldValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumericFieldValidator_ = $NumericFieldValidator$Type;
}}
declare module "packages/xaero/common/category/$ObjectCategory$Builder" {
import {$MapFactory, $MapFactory$Type} from "packages/xaero/common/misc/$MapFactory"
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/common/category/setting/$ObjectCategorySetting"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/common/category/$ObjectCategory"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"

export class $ObjectCategory$Builder<C extends $ObjectCategory<(any), (C)>, B extends $ObjectCategory$Builder<(C), (B)>> {

constructor(arg0: $ListFactory$Type, arg1: $MapFactory$Type)

public "build"(): C
public "setName"(arg0: string): B
public "setDefault"(): B
public "setSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>, arg1: T): B
public "setSuperCategory"(arg0: C): B
public "addSubCategoryBuilder"(arg0: B): B
public "setProtection"(arg0: boolean): B
set "name"(value: string)
set "superCategory"(value: C)
set "protection"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategory$Builder$Type<C, B> = ($ObjectCategory$Builder<(C), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategory$Builder_<C, B> = $ObjectCategory$Builder$Type<(C), (B)>;
}}
declare module "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementRenderer" {
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import {$PlayerTrackerMinimapElementRenderContext, $PlayerTrackerMinimapElementRenderContext$Type} from "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementRenderContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$PlayerTrackerMinimapElement, $PlayerTrackerMinimapElement$Type} from "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$PlayerTrackerMinimapElementCollector, $PlayerTrackerMinimapElementCollector$Type} from "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementCollector"
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $PlayerTrackerMinimapElementRenderer extends $MinimapElementRenderer<($PlayerTrackerMinimapElement<(any)>), ($PlayerTrackerMinimapElementRenderContext)> {


public "getOrder"(): integer
public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "shouldRender"(arg0: integer): boolean
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: $PlayerTrackerMinimapElement$Type<(any)>, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
public "getPlayerSkin"(arg0: $Player$Type, arg1: $PlayerInfo$Type): $ResourceLocation
public "getCollector"(): $PlayerTrackerMinimapElementCollector
get "order"(): integer
get "collector"(): $PlayerTrackerMinimapElementCollector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementRenderer$Type = ($PlayerTrackerMinimapElementRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElementRenderer_ = $PlayerTrackerMinimapElementRenderer$Type;
}}
declare module "packages/xaero/common/server/player/$ServerPlayerData" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"

export class $ServerPlayerData {

constructor(arg0: $UUID$Type)

public static "get"(arg0: $ServerPlayer$Type): $ServerPlayerData
public "getCurrentlySyncedPlayers"(): $Set<($UUID)>
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public "setClientModNetworkVersion"(arg0: integer): void
public "getClientModNetworkVersion"(): integer
public "setLastTrackedPlayerSync"(arg0: long): void
public "ensureCurrentlySyncedPlayers"(): $Set<($UUID)>
public "getLastTrackedPlayerSync"(): long
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "hasMod"(): boolean
get "currentlySyncedPlayers"(): $Set<($UUID)>
set "clientModNetworkVersion"(value: integer)
get "clientModNetworkVersion"(): integer
set "lastTrackedPlayerSync"(value: long)
get "lastTrackedPlayerSync"(): long
get "lastSyncedData"(): $SyncedTrackedPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$Type = ($ServerPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerData_ = $ServerPlayerData$Type;
}}
declare module "packages/xaero/common/cache/$BlockStateShortShapeCache" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockStateShortShapeCache {

constructor(arg0: $IXaeroMinimap$Type)

public "reset"(): void
public "isShort"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateShortShapeCache$Type = ($BlockStateShortShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateShortShapeCache_ = $BlockStateShortShapeCache$Type;
}}
declare module "packages/xaero/common/mods/pac/$SupportOpenPartiesAndClaims" {
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPartyMemberDynamicInfoSyncableAPI, $IPartyMemberDynamicInfoSyncableAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $SupportOpenPartiesAndClaims {

constructor(arg0: $IXaeroMinimap$Type)

public "register"(): void
public "registerHighlighters"(arg0: $HighlighterRegistry$Type): void
public "onMapRender"(arg0: $Minecraft$Type, arg1: $PoseStack$Type, arg2: integer, arg3: integer, arg4: float, arg5: $ResourceLocation$Type, arg6: integer, arg7: integer): void
public "getModMain"(): $IXaeroMinimap
public "getAllyIterator"(): $Iterator<($IPartyMemberDynamicInfoSyncableAPI)>
public "isFromParty"(arg0: $UUID$Type): boolean
public "claimAt"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
get "modMain"(): $IXaeroMinimap
get "allyIterator"(): $Iterator<($IPartyMemberDynamicInfoSyncableAPI)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportOpenPartiesAndClaims$Type = ($SupportOpenPartiesAndClaims);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportOpenPartiesAndClaims_ = $SupportOpenPartiesAndClaims$Type;
}}
declare module "packages/xaero/common/category/rule/$ObjectCategoryIncludeList" {
import {$ObjectCategoryListRule, $ObjectCategoryListRule$Type} from "packages/xaero/common/category/rule/$ObjectCategoryListRule"

export class $ObjectCategoryIncludeList<E, P, S> extends $ObjectCategoryListRule<(E), (P), (S)> {


public "isFollowedBy"(arg0: E, arg1: P): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryIncludeList$Type<E, P, S> = ($ObjectCategoryIncludeList<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryIncludeList_<E, P, S> = $ObjectCategoryIncludeList$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/common/minimap/mcworld/$IXaeroMinimapClientWorld" {
import {$MinimapClientWorldData, $MinimapClientWorldData$Type} from "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData"

export interface $IXaeroMinimapClientWorld {

 "getXaero_minimapData"(): $MinimapClientWorldData
 "setXaero_minimapData"(arg0: $MinimapClientWorldData$Type): void
}

export namespace $IXaeroMinimapClientWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapClientWorld$Type = ($IXaeroMinimapClientWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroMinimapClientWorld_ = $IXaeroMinimapClientWorld$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetScreen" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $WidgetScreen {

 "addButtonVisible"(arg0: $AbstractWidget$Type): void
 "getScreen"<S extends ($Screen) & ($WidgetScreen)>(): S
}

export namespace $WidgetScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetScreen$Type = ($WidgetScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetScreen_ = $WidgetScreen$Type;
}}
declare module "packages/xaero/common/category/rule/$ObjectCategoryListRuleType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObjectCategoryListRuleType<E, P, S> {

constructor(arg0: string, arg1: $BiFunction$Type<(E), (P), (S)>, arg2: $Supplier$Type<($Iterable$Type<(S)>)>, arg3: $Function$Type<(string), ($List$Type<(S)>)>, arg4: $Function$Type<(S), (string)>, arg5: $Function$Type<(string), (string)>, arg6: $Predicate$Type<(string)>, arg7: $List$Type<($ObjectCategoryListRuleType$Type<(E), (P), (any)>)>, arg8: $Map$Type<(string), ($ObjectCategoryListRuleType$Type<(E), (P), (any)>)>)

public "getId"(): string
public "getGetter"(): $BiFunction<(E), (P), (S)>
public "getSerializer"(): $Function<(S), (string)>
public "getStringValidator"(): $Predicate<(string)>
public "getElementResolver"(): $Function<(string), ($List<(S)>)>
public "getStringFixer"(): $Function<(string), (string)>
public "getAllElementSupplier"(): $Supplier<($Iterable<(S)>)>
get "id"(): string
get "getter"(): $BiFunction<(E), (P), (S)>
get "serializer"(): $Function<(S), (string)>
get "stringValidator"(): $Predicate<(string)>
get "elementResolver"(): $Function<(string), ($List<(S)>)>
get "stringFixer"(): $Function<(string), (string)>
get "allElementSupplier"(): $Supplier<($Iterable<(S)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryListRuleType$Type<E, P, S> = ($ObjectCategoryListRuleType<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryListRuleType_<E, P, S> = $ObjectCategoryListRuleType$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/common/category/serialization/data/$FilterObjectCategoryData" {
import {$ExcludeListMode, $ExcludeListMode$Type} from "packages/xaero/common/category/rule/$ExcludeListMode"
import {$ObjectCategoryData, $ObjectCategoryData$Type} from "packages/xaero/common/category/serialization/data/$ObjectCategoryData"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $FilterObjectCategoryData<D extends $FilterObjectCategoryData<(D)>> extends $ObjectCategoryData<(D)> {


public "getIncludeListInSuperCategory"(): boolean
public "getExcludeListIterator"(): $Iterator<(string)>
public "getIncludeListIterator"(): $Iterator<(string)>
public "getExcludeMode"(): $ExcludeListMode
public "getHardInclude"(): string
get "includeListInSuperCategory"(): boolean
get "excludeListIterator"(): $Iterator<(string)>
get "includeListIterator"(): $Iterator<(string)>
get "excludeMode"(): $ExcludeListMode
get "hardInclude"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterObjectCategoryData$Type<D> = ($FilterObjectCategoryData<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterObjectCategoryData_<D> = $FilterObjectCategoryData$Type<(D)>;
}}
declare module "packages/xaero/common/effect/$NoMinimapEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoMinimapEffect extends $MinimapStatusEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoMinimapEffect$Type = ($NoMinimapEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoMinimapEffect_ = $NoMinimapEffect$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/common/server/player/$ServerPlayerData"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinecraftServerData, $MinecraftServerData$Type} from "packages/xaero/common/server/$MinecraftServerData"

export class $SyncedPlayerTracker {

constructor(arg0: $IXaeroMinimap$Type)

public "onTick"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $MinecraftServerData$Type, arg3: $ServerPlayerData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTracker$Type = ($SyncedPlayerTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTracker_ = $SyncedPlayerTracker$Type;
}}
declare module "packages/xaero/common/controls/$ControlsHandler" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"

export class $ControlsHandler {

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type)

public "isDown"(arg0: $KeyMapping$Type): boolean
public "setKeyState"(arg0: $KeyMapping$Type, arg1: boolean): void
public "keyDown"(arg0: $KeyMapping$Type, arg1: boolean, arg2: boolean): void
public "keyUp"(arg0: $KeyMapping$Type, arg1: boolean): void
public "keyDownPost"(arg0: $KeyMapping$Type): void
public "keyDownPre"(arg0: $KeyMapping$Type): void
public "keyUpPre"(arg0: $KeyMapping$Type): void
public "keyUpPost"(arg0: $KeyMapping$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsHandler$Type = ($ControlsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsHandler_ = $ControlsHandler$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WaypointFilterParams, $WaypointFilterParams$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointFilterParams"

export class $WaypointGuiRenderContext {
 "settings": $ModSettings
 "waypointBackgroundConsumer": $VertexConsumer
readonly "sortingList": $List<($Waypoint)>
 "filter": $Predicate<($Waypoint)>
readonly "filterParams": $WaypointFilterParams
 "dimDiv": double
 "deleteReachedDeathpoints": boolean
 "scale": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointGuiRenderContext$Type = ($WaypointGuiRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointGuiRenderContext_ = $WaypointGuiRenderContext$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager" {
import {$IPlayerTrackerSystem, $IPlayerTrackerSystem$Type} from "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $PlayerTrackerSystemManager {

constructor()

public "register"(arg0: string, arg1: $IPlayerTrackerSystem$Type<(any)>): void
public "getSystems"(): $Iterable<($IPlayerTrackerSystem<(any)>)>
get "systems"(): $Iterable<($IPlayerTrackerSystem<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerSystemManager$Type = ($PlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerSystemManager_ = $PlayerTrackerSystemManager$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$WaypointDeleter, $WaypointDeleter$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointDeleter"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $WaypointsIngameRenderer {

constructor(arg0: $IXaeroMinimap$Type, arg1: $WaypointDeleter$Type, arg2: $Minecraft$Type)

public "render"(arg0: $XaeroMinimapSession$Type, arg1: float, arg2: $MinimapProcessor$Type, arg3: $Matrix4f$Type, arg4: $Matrix4f$Type): void
public "drawAsOverlay"(arg0: $PoseStack$Type, arg1: $PoseStack$Type, arg2: $MinimapRendererHelper$Type, arg3: $Waypoint$Type, arg4: $ModSettings$Type, arg5: $BufferBuilder$Type, arg6: $Tesselator$Type, arg7: $Font$Type, arg8: string, arg9: string, arg10: float, arg11: boolean, arg12: $MultiBufferSource$BufferSource$Type, arg13: $VertexConsumer$Type, arg14: $Matrix4f$Type, arg15: integer, arg16: integer, arg17: double, arg18: double, arg19: boolean, arg20: string): void
public "drawIconInWorld"(arg0: $PoseStack$Type, arg1: $MinimapRendererHelper$Type, arg2: $Waypoint$Type, arg3: $ModSettings$Type, arg4: $BufferBuilder$Type, arg5: $Tesselator$Type, arg6: $Font$Type, arg7: string, arg8: string, arg9: float, arg10: boolean, arg11: $MultiBufferSource$BufferSource$Type, arg12: $VertexConsumer$Type, arg13: boolean, arg14: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsIngameRenderer$Type = ($WaypointsIngameRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsIngameRenderer_ = $WaypointsIngameRenderer$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementReader" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"

export class $MinimapElementReader<E, RC> {

constructor()

public "isHidden"(arg0: E, arg1: RC): boolean
public "getInteractionBoxTop"(arg0: E, arg1: RC, arg2: float): integer
public "getInteractionBoxBottom"(arg0: E, arg1: RC, arg2: float): integer
public "getInteractionBoxLeft"(arg0: E, arg1: RC, arg2: float): integer
public "getInteractionBoxRight"(arg0: E, arg1: RC, arg2: float): integer
public "shouldScaleBoxWithOptionalScale"(): boolean
public "getMenuTextFillLeftPadding"(arg0: E): integer
public "getRenderZ"(arg0: E, arg1: RC, arg2: float): double
public "getRenderX"(arg0: E, arg1: RC, arg2: float): double
public "getRightClickTitleBackgroundColor"(arg0: E): integer
public "isInteractable"(arg0: integer, arg1: E): boolean
public "getLeftSideLength"(arg0: E, arg1: $Minecraft$Type): integer
public "getFilterName"(arg0: E): string
public "getRenderBoxTop"(arg0: E, arg1: RC, arg2: float): integer
public "getBoxScale"(arg0: integer, arg1: E, arg2: RC): float
public "getRenderBoxLeft"(arg0: E, arg1: RC, arg2: float): integer
public "getRenderBoxRight"(arg0: E, arg1: RC, arg2: float): integer
public "getRenderBoxBottom"(arg0: E, arg1: RC, arg2: float): integer
public "getMenuName"(arg0: E): string
public "getRenderY"(arg0: E, arg1: RC, arg2: float): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementReader$Type<E, RC> = ($MinimapElementReader<(E), (RC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementReader_<E, RC> = $MinimapElementReader$Type<(E), (RC)>;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier" {
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiCategoryUIEditorSimpleButtonData, $GuiCategoryUIEditorSimpleButtonData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData"

export interface $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier {

 "get"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type): $Supplier<(string)>

(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type): $Supplier<(string)>
}

export namespace $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier$Type = ($GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier_ = $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier$Type;
}}
declare module "packages/xaero/common/controls/$ControlsRegister" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ControlsRegister {
readonly "keybindings": $List<($KeyMapping)>
readonly "vanillaKeyBindings": $List<($KeyMapping)>

constructor()

public "onStage2"(): void
public "registerKeybindings"(arg0: $Consumer$Type<($KeyMapping$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsRegister$Type = ($ControlsRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsRegister_ = $ControlsRegister$Type;
}}
declare module "packages/xaero/common/message/basic/$ClientboundRulesPacket" {
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientboundRulesPacket extends $MinimapMessage<($ClientboundRulesPacket)> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
readonly "allowRadarOnServer": boolean
static "MAIN_CHANNEL": $ResourceLocation

constructor(arg0: boolean, arg1: boolean, arg2: boolean)

public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRulesPacket$Type = ($ClientboundRulesPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundRulesPacket_ = $ClientboundRulesPacket$Type;
}}
declare module "packages/xaero/common/settings/$ModOptions" {
import {$Option, $Option$Type} from "packages/xaero/common/settings/$Option"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $ModOptions {
static "REQUIRES_INGAME": $CursorBox
static "modMain": $IXaeroMinimap
static "DEFAULT": $ModOptions
static "MINIMAP": $ModOptions
static "CAVE_MAPS": $ModOptions
static "CAVE_ZOOM": $ModOptions
static "DISPLAY_OTHER_TEAM": $ModOptions
static "WAYPOINTS": $ModOptions
static "INGAME_WAYPOINTS": $ModOptions
static "ZOOM": $ModOptions
static "SIZE": $ModOptions
static "EAMOUNT": $ModOptions
static "NORTH": $ModOptions
static "DEATHPOINTS": $ModOptions
static "OLD_DEATHPOINTS": $ModOptions
static "CHUNK_GRID": $ModOptions
static "SLIME_CHUNKS": $ModOptions
static "SAFE_MAP": $ModOptions
static "OPACITY": $ModOptions
static "WAYPOINTS_ICON_SCALE": $ModOptions
static "WAYPOINTS_DISTANCE_SCALE": $ModOptions
static "WAYPOINTS_NAME_SCALE": $ModOptions
static "WAYPOINTS_CLOSE_SCALE": $ModOptions
static "AA": $ModOptions
static "DISTANCE": $ModOptions
static "COLOURS": $ModOptions
static "LIGHT": $ModOptions
static "REDSTONE": $ModOptions
static "DOTS_SIZE": $ModOptions
static "DOTS_STYLE": $ModOptions
static "HEADS_SCALE": $ModOptions
static "DOT_NAME_SCALE": $ModOptions
static "COMPASS": $ModOptions
static "ENTITY_HEIGHT": $ModOptions
static "START_FADING_AT": $ModOptions
static "FLOWERS": $ModOptions
static "KEEP_WP_NAMES": $ModOptions
static "WAYPOINTS_DISTANCE": $ModOptions
static "WAYPOINTS_DISTANCE_MIN": $ModOptions
static "WAYPOINTS_ALL_SETS": $ModOptions
static "ARROW_SCALE": $ModOptions
static "ARROW_COLOUR": $ModOptions
static "SMOOTH_DOTS": $ModOptions
static "ENTITY_NAMETAGS": $ModOptions
static "HEIGHT_LIMIT": $ModOptions
static "WORLD_MAP": $ModOptions
static "TERRAIN_DEPTH": $ModOptions
static "TERRAIN_SLOPES": $ModOptions
static "MAIN_ENTITY_AS": $ModOptions
static "BLOCK_TRANSPARENCY": $ModOptions
static "WAYPOINT_OPACITY_INGAME": $ModOptions
static "WAYPOINT_OPACITY_MAP": $ModOptions
static "WAYPOINT_LOOKING_ANGLE": $ModOptions
static "WAYPOINT_VERTICAL_LOOKING_ANGLE": $ModOptions
static "HIDE_WORLD_NAMES": $ModOptions
static "OPEN_SLIME_SETTINGS": $ModOptions
static "ALWAYS_SHOW_DISTANCE": $ModOptions
static "CROSS_DIMENSIONAL_TP": $ModOptions
static "BIOMES_VANILLA": $ModOptions
static "CENTERED_ENLARGED": $ModOptions
static "ZOOM_ON_ENLARGE": $ModOptions
static "MINIMAP_TEXT_ALIGN": $ModOptions
static "COMPASS_LOCATION": $ModOptions
static "CAVE_MAPS_DEPTH": $ModOptions
static "HIDE_WP_COORDS": $ModOptions
static "PLAYER_ARROW_OPACITY": $ModOptions
static "IGNORE_HEIGHTMAPS": $ModOptions
static "WAYPOINTS_BOTTOM": $ModOptions
static "MINIMAP_SHAPE": $ModOptions
static "LIGHT_OVERLAY_TYPE": $ModOptions
static "LIGHT_OVERLAY_COLOR": $ModOptions
static "LIGHT_OVERLAY_MAX_LIGHT": $ModOptions
static "LIGHT_OVERLAY_MIN_LIGHT": $ModOptions
static "UI_SCALE": $ModOptions
static "BOSS_HEALTH_PUSHBOX": $ModOptions
static "POTION_EFFECTS_PUSHBOX": $ModOptions
static "MINIMAP_FRAME": $ModOptions
static "MINIMAP_FRAME_COLOR": $ModOptions
static "COMPASS_SCALE": $ModOptions
static "COMPASS_COLOR": $ModOptions
static "ICON_NAME_FALLBACK": $ModOptions
static "MULTIPLE_WAYPOINT_INFO": $ModOptions
static "UPDATE_NOTIFICATION": $ModOptions
static "ADJUST_HEIGHT_FOR_SHORT_BLOCKS": $ModOptions
static "AUTO_CONVERT_TO_KM": $ModOptions
static "WP_DISTANCE_PRECISION": $ModOptions
static "RADAR_Y_DISPLAYED": $ModOptions
static "MANUAL_CAVE_MODE_START": $ModOptions
static "CHUNK_GRID_LINE_WIDTH": $ModOptions
static "RADAR_OVER_FRAME": $ModOptions
static "RADAR_DISPLAYED": $ModOptions
static "RADAR_NAMES_DISPLAYED": $ModOptions
static "RADAR_ICONS_DISPLAYED": $ModOptions
static "MAIN_DOT_SIZE": $ModOptions
static "PARTIAL_Y_TELEPORTATION": $ModOptions
static "DELETE_REACHED_DEATHPOINTS": $ModOptions
static "HIDE_MINIMAP_UNDER_SCREEN": $ModOptions
static "HIDE_MINIMAP_UNDER_F3": $ModOptions
static "NORTH_COMPASS_COLOR": $ModOptions
static "TEMPORARY_WAYPOINTS_GLOBAL": $ModOptions
static "KEEP_ENLARGED_UNLOCKED": $ModOptions
static "TOGGLED_ENLARGED": $ModOptions
static "DISPLAY_STAINED_GLASS": $ModOptions
static "WAYPOINT_ONMAP_SCALE": $ModOptions
static "SWITCH_TO_AUTO_ON_DEATH": $ModOptions
static "INFO_DISPLAY_BG_OPACITY": $ModOptions
static "CAVE_MODE_TOGGLE_TIMER": $ModOptions
static "LEGIBLE_CAVE_MAPS": $ModOptions
static "BIOME_BLENDING": $ModOptions
static "TRACKED_PLAYERS": $ModOptions
static "PAC_CLAIMS": $ModOptions
static "PAC_CLAIMS_FILL_OPACITY": $ModOptions
static "PAC_CLAIMS_BORDER_OPACITY": $ModOptions
static "PAC_CURRENT_CLAIM": $ModOptions
static "SHOW_EFFECTS": $ModOptions
static "SHOW_ARMOR": $ModOptions
static "BETTER_SPRINT": $ModOptions
static "KEEP_SNEAK": $ModOptions
static "ENCHANT_COLOR": $ModOptions
static "DURABILITY": $ModOptions
static "NOTIFICATIONS": $ModOptions
static "NOTIFICATIONS_HUNGER": $ModOptions
static "NOTIFICATIONS_HUNGER_LOW": $ModOptions
static "NOTIFICATIONS_HP": $ModOptions
static "NOTIFICATIONS_HP_LOW": $ModOptions
static "NOTIFICATIONS_TNT": $ModOptions
static "NOTIFICATIONS_ARROW": $ModOptions
static "NOTIFICATIONS_AIR": $ModOptions
static "NOTIFICATIONS_AIR_LOW": $ModOptions
static "XP": $ModOptions
static "NUMBERS": $ModOptions
static "SHOW_ENCHANTS": $ModOptions
static "ARCHERY": $ModOptions
static "POTION_NAMES": $ModOptions
static "POTION_EFFECTS_BLINK": $ModOptions
static "ENTITY_INFO": $ModOptions
static "ENTITY_INFO_STAY": $ModOptions
static "ENTITY_INFO_DISTANCE": $ModOptions
static "ENTITY_INFO_MAX_HEARTS": $ModOptions
static "ENTITY_INFO_NUMBERS": $ModOptions
static "ENTITY_INFO_EFFECTS": $ModOptions
static "ENTITY_INFO_EFFECTS_SCALE": $ModOptions
static "SHOW_FULL_AMOUNT": $ModOptions
static "ENTITY_INFO_ARMOUR_NUMBERS": $ModOptions
static "ENTITY_INFO_ARMOUR": $ModOptions
static "SHOW_ENTITY_MODEL": $ModOptions
static "ITEM_TOOLTIP": $ModOptions
static "ITEM_TOOLTIP_MIN_LINES": $ModOptions
static "ITEM_TOOLTIP_TIME": $ModOptions
static "ARMOUR_MAIN_HAND": $ModOptions
static "ARMOUR_OFF_HAND": $ModOptions
static "HELD_ITEMS_CENTERED_POSITION": $ModOptions
static "SCALED_MAX_WAYPOINT_DISTANCE": $ModOptions
readonly "enumBoolean": boolean


public static "init"(arg0: $IXaeroMinimap$Type): void
public "getValueStep"(): double
public "getValueMin"(): double
public "getValueMax"(): double
public "isIngameOnly"(): boolean
public "getEnumString"(): string
public "getTooltip"(): $CursorBox
public "getEnumBoolean"(): boolean
public "getEnumStringRaw"(): string
public "getXOption"(): $Option
public "snapToStepClamp"(arg0: double): double
public "setValueMax"(arg0: float): void
public "denormalizeValue"(arg0: double): double
public "getEnumDouble"(): boolean
public "normalizeValue"(arg0: double): double
get "valueStep"(): double
get "valueMin"(): double
get "valueMax"(): double
get "ingameOnly"(): boolean
get "enumString"(): string
get "tooltip"(): $CursorBox
get "enumBoolean"(): boolean
get "enumStringRaw"(): string
get "xOption"(): $Option
set "valueMax"(value: float)
get "enumDouble"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModOptions$Type = ($ModOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModOptions_ = $ModOptions$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/text/$GuiCategoryUIEditorTextFieldOptionsData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategoryUIEditorExpandingOptionsData, $GuiCategoryUIEditorExpandingOptionsData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorExpandingOptionsData"
import {$GuiCategoryUIEditorOptionData, $GuiCategoryUIEditorOptionData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData"
import {$CategorySettingsTextField$UpdatedValueConsumer, $CategorySettingsTextField$UpdatedValueConsumer$Type} from "packages/xaero/common/category/ui/entry/widget/$CategorySettingsTextField$UpdatedValueConsumer"

export class $GuiCategoryUIEditorTextFieldOptionsData extends $GuiCategoryUIEditorExpandingOptionsData<(string)> {


public "getResult"(): string
public "getDisplayName"(): string
public "getInput"(): string
public "getCurrentValue"(): $GuiCategoryUIEditorOptionData<(string)>
public "setCurrentValue"(arg0: $GuiCategoryUIEditorOptionData$Type<(string)>): void
public "setExpanded"(arg0: boolean): void
public "getMaxLength"(): integer
public "onSelected"(arg0: $GuiCategoryUIEditorOptionData$Type<(string)>): boolean
public "resetInput"(arg0: string): void
public "getHighlightPos"(): integer
public "getSubExpandables"(): $List<($GuiCategoryUIEditorOptionData<(string)>)>
public "getCursorPos"(): integer
public "getUpdatedValueConsumer"(): $CategorySettingsTextField$UpdatedValueConsumer
get "result"(): string
get "displayName"(): string
get "input"(): string
get "currentValue"(): $GuiCategoryUIEditorOptionData<(string)>
set "currentValue"(value: $GuiCategoryUIEditorOptionData$Type<(string)>)
set "expanded"(value: boolean)
get "maxLength"(): integer
get "highlightPos"(): integer
get "subExpandables"(): $List<($GuiCategoryUIEditorOptionData<(string)>)>
get "cursorPos"(): integer
get "updatedValueConsumer"(): $CategorySettingsTextField$UpdatedValueConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorTextFieldOptionsData$Type = ($GuiCategoryUIEditorTextFieldOptionsData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorTextFieldOptionsData_ = $GuiCategoryUIEditorTextFieldOptionsData$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorld" {
import {$WaypointWorldContainer, $WaypointWorldContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$WaypointSet, $WaypointSet$Type} from "packages/xaero/common/minimap/waypoints/$WaypointSet"

export class $WaypointWorld {

constructor(arg0: $WaypointWorldContainer$Type, arg1: string, arg2: $ResourceKey$Type<($Level$Type)>)

public "getId"(): string
public "setId"(arg0: string): void
public "getCurrent"(): string
public "getFullId"(): string
public "getContainer"(): $WaypointWorldContainer
public "setContainer"(arg0: $WaypointWorldContainer$Type): void
public "addSet"(arg0: string): void
public "getDimId"(): $ResourceKey<($Level)>
public "onSaveCleanup"(arg0: $File$Type): void
public "getSets"(): $HashMap<(string), ($WaypointSet)>
public "setCurrent"(arg0: string): void
public "requestRemovalOnSave"(arg0: string): void
public "getInternalWorldKey"(): string
public "getServerWaypointsDisabled"(): $HashMap<(string), (boolean)>
public "hasSomethingToRemoveOnSave"(): boolean
public "getServerWaypoints"(): $HashMap<(integer), ($Waypoint)>
public "getCurrentSet"(): $WaypointSet
get "id"(): string
set "id"(value: string)
get "current"(): string
get "fullId"(): string
get "container"(): $WaypointWorldContainer
set "container"(value: $WaypointWorldContainer$Type)
get "dimId"(): $ResourceKey<($Level)>
get "sets"(): $HashMap<(string), ($WaypointSet)>
set "current"(value: string)
get "internalWorldKey"(): string
get "serverWaypointsDisabled"(): $HashMap<(string), (boolean)>
get "serverWaypoints"(): $HashMap<(integer), ($Waypoint)>
get "currentSet"(): $WaypointSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorld$Type = ($WaypointWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorld_ = $WaypointWorld$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapRendererHelper" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapRendererHelper {

constructor()

public "addColoredRectToExistingBuffer"(arg0: $Matrix4f$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "addColoredRectToExistingBuffer"(arg0: $Matrix4f$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer): void
public "drawMyColoredRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer): void
public "drawMyColoredRect"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "defaultOrtho"(arg0: $RenderTarget$Type, arg1: boolean): void
public "drawIconOutline"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "prepareMyTexturedModalRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: $MultiTextureRenderTypeRenderer$Type): void
public static "restoreDefaultShaderBlendState"(): void
public "prepareMyTexturedColoredModalRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float, arg14: $MultiTextureRenderTypeRenderer$Type): void
public "addColoredLineToExistingBuffer"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "drawMyTexturedModalRect"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public "drawMyTexturedModalRect"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "addTexturedRectToExistingBuffer"(arg0: $Matrix4f$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "addTexturedColoredRectToExistingBuffer"(arg0: $Matrix4f$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float): void
public "addTexturedColoredRectToExistingBuffer"(arg0: $Matrix4f$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRendererHelper$Type = ($MinimapRendererHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRendererHelper_ = $MinimapRendererHelper$Type;
}}
declare module "packages/xaero/common/$PlatformContextLoaderClientOnly" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $PlatformContextLoaderClientOnly {

constructor()

public "preInit"(arg0: string, arg1: $IXaeroMinimap$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContextLoaderClientOnly$Type = ($PlatformContextLoaderClientOnly);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformContextLoaderClientOnly_ = $PlatformContextLoaderClientOnly$Type;
}}
declare module "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList" {
import {$GuiCategoryUIEditorCategoryData, $GuiCategoryUIEditorCategoryData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$GuiCategorySettings$SettingRowList$Entry, $GuiCategorySettings$SettingRowList$Entry$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList$Entry"
import {$ObjectSelectionList, $ObjectSelectionList$Type} from "packages/net/minecraft/client/gui/components/$ObjectSelectionList"
import {$GuiCategorySettings, $GuiCategorySettings$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$GuiCategoryUIEditorDataConverter, $GuiCategoryUIEditorDataConverter$Type} from "packages/xaero/common/category/ui/$GuiCategoryUIEditorDataConverter"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $GuiCategorySettings$SettingRowList extends $ObjectSelectionList<($GuiCategorySettings$SettingRowList$Entry<>)> {

constructor(arg0: $GuiCategorySettings$Type<(any), (any), (any), (any), (any), (any)>, arg1: $GuiCategoryUIEditorDataConverter$Type<(any), (any), (any), (any), (any), (any)>)

public "getRowWidth"(): integer
public "tick"(): void
public "updateNarration"(arg0: $NarrationElementOutput$Type): void
public "setFocused"(arg0: $GuiEventListener$Type): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "isFocused"(): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "updateEntries"(): void
public "isCut"(arg0: ED): boolean
public "setCutCategory"(arg0: ED, arg1: ED): void
public "hasCut"(): boolean
public "getCut"(): ED
public "confirmSelection"(): boolean
public "narrateSelection"(): void
public "getDataConverter"(): $GuiCategoryUIEditorDataConverter<(C), (ED), (CB), (SD), (SDB), (EDB)>
public "pasteTo"(arg0: ED): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "setSelected"(arg0: $GuiCategorySettings$SettingRowList$Entry$Type<>): void
public "restoreScrollAfterUpdate"(): void
public "setLastExpandedData"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>): void
get "rowWidth"(): integer
set "focused"(value: $GuiEventListener$Type)
get "focused"(): boolean
get "cut"(): ED
get "dataConverter"(): $GuiCategoryUIEditorDataConverter<(C), (ED), (CB), (SD), (SDB), (EDB)>
set "selected"(value: $GuiCategorySettings$SettingRowList$Entry$Type<>)
set "lastExpandedData"(value: $GuiCategoryUIEditorExpandableData$Type<(any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategorySettings$SettingRowList$Type = ($GuiCategorySettings$SettingRowList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategorySettings$SettingRowList_ = $GuiCategorySettings$SettingRowList$Type;
}}
declare module "packages/xaero/common/category/$FilterObjectCategory" {
import {$ExcludeListMode, $ExcludeListMode$Type} from "packages/xaero/common/category/rule/$ExcludeListMode"
import {$FilterObjectCategoryData, $FilterObjectCategoryData$Type} from "packages/xaero/common/category/serialization/data/$FilterObjectCategoryData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectCategoryIncludeList, $ObjectCategoryIncludeList$Type} from "packages/xaero/common/category/rule/$ObjectCategoryIncludeList"
import {$ObjectCategoryExcludeList, $ObjectCategoryExcludeList$Type} from "packages/xaero/common/category/rule/$ObjectCategoryExcludeList"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/common/category/$ObjectCategory"
import {$ObjectCategoryListRuleType, $ObjectCategoryListRuleType$Type} from "packages/xaero/common/category/rule/$ObjectCategoryListRuleType"
import {$ObjectCategoryRule, $ObjectCategoryRule$Type} from "packages/xaero/common/category/rule/$ObjectCategoryRule"

export class $FilterObjectCategory<E, P, D extends $FilterObjectCategoryData<(D)>, C extends $FilterObjectCategory<(E), (P), (D), (C)>> extends $ObjectCategory<(D), (C)> {


public "getIncludeInSuperCategory"(): boolean
public "getExcludeList"<S>(arg0: $ObjectCategoryListRuleType$Type<(E), (P), (S)>): $ObjectCategoryExcludeList<(E), (P), (S)>
public "getExcludeLists"(): $List<($ObjectCategoryExcludeList<(E), (P), (any)>)>
public "getIncludeList"<S>(arg0: $ObjectCategoryListRuleType$Type<(E), (P), (S)>): $ObjectCategoryIncludeList<(E), (P), (S)>
public "getBaseRule"(): $ObjectCategoryRule<(E), (P)>
public "getIncludeLists"(): $List<($ObjectCategoryIncludeList<(E), (P), (any)>)>
public "getExcludeMode"(): $ExcludeListMode
get "includeInSuperCategory"(): boolean
get "excludeLists"(): $List<($ObjectCategoryExcludeList<(E), (P), (any)>)>
get "baseRule"(): $ObjectCategoryRule<(E), (P)>
get "includeLists"(): $List<($ObjectCategoryIncludeList<(E), (P), (any)>)>
get "excludeMode"(): $ExcludeListMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterObjectCategory$Type<E, P, D, C> = ($FilterObjectCategory<(E), (P), (D), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterObjectCategory_<E, P, D, C> = $FilterObjectCategory$Type<(E), (P), (D), (C)>;
}}
declare module "packages/xaero/common/gui/$IScreenBase" {
import {$IDropDownContainer, $IDropDownContainer$Type} from "packages/xaero/common/gui/dropdown/$IDropDownContainer"
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/common/gui/dropdown/$DropDownWidget"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IScreenBase extends $IDropDownContainer {

 "getEscape"(): $Screen
 "shouldSkipWorldRender"(): boolean
 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
}

export namespace $IScreenBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenBase$Type = ($IScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenBase_ = $IScreenBase$Type;
}}
declare module "packages/xaero/common/events/$CommonEvents" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $CommonEvents {

constructor(arg0: $IXaeroMinimap$Type)

public "onServerStopped"(arg0: $MinecraftServer$Type): void
public "handlePlayerTickStart"(arg0: $Player$Type): void
public "onServerStarting"(arg0: $MinecraftServer$Type): void
public "onPlayerWorldJoin"(arg0: $ServerPlayer$Type): void
public "onPlayerLogIn"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonEvents$Type = ($CommonEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonEvents_ = $CommonEvents$Type;
}}
declare module "packages/xaero/common/message/$MinimapMessage" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MinimapMessage<T extends $MinimapMessage<(T)>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapMessage$Type<T> = ($MinimapMessage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapMessage_<T> = $MinimapMessage$Type<(T)>;
}}
declare module "packages/xaero/common/misc/$MapFactory" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MapFactory {

 "get"<K, V>(): $Map<(K), (V)>

(): $Map<(K), (V)>
}

export namespace $MapFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapFactory$Type = ($MapFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapFactory_ = $MapFactory$Type;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData$Builder" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/common/category/setting/$ObjectCategorySetting"
import {$GuiCategoryUIEditorSimpleButtonData$Builder, $GuiCategoryUIEditorSimpleButtonData$Builder$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$Builder"
import {$GuiCategoryUIEditorExpandableData$Builder, $GuiCategoryUIEditorExpandableData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData$Builder"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategoryUIEditorSettingsData, $GuiCategoryUIEditorSettingsData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData"
import {$GuiCategoryUIEditorTextFieldOptionsData$Builder, $GuiCategoryUIEditorTextFieldOptionsData$Builder$Type} from "packages/xaero/common/category/ui/data/options/text/$GuiCategoryUIEditorTextFieldOptionsData$Builder"

export class $GuiCategoryUIEditorSettingsData$Builder<SD extends $GuiCategoryUIEditorSettingsData<(any)>, SDB extends $GuiCategoryUIEditorSettingsData$Builder<(SD), (SDB)>> extends $GuiCategoryUIEditorExpandableData$Builder<($GuiCategoryUIEditorExpandableData<(any)>), ($GuiCategoryUIEditorSettingsData$Builder<(SD), (SDB)>)> {


public "setSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>, arg1: T): SDB
public "setRootSettings"(arg0: boolean): SDB
public "getDeleteButtonBuilder"(): $GuiCategoryUIEditorSimpleButtonData$Builder
public "getNameOptionBuilder"(): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "setProtection"(arg0: boolean): SDB
set "rootSettings"(value: boolean)
get "deleteButtonBuilder"(): $GuiCategoryUIEditorSimpleButtonData$Builder
get "nameOptionBuilder"(): $GuiCategoryUIEditorTextFieldOptionsData$Builder
set "protection"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSettingsData$Builder$Type<SD, SDB> = ($GuiCategoryUIEditorSettingsData$Builder<(SD), (SDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSettingsData$Builder_<SD, SDB> = $GuiCategoryUIEditorSettingsData$Builder$Type<(SD), (SDB)>;
}}
declare module "packages/xaero/common/minimap/render/radar/element/$RadarRenderContext" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"
import {$MinimapRadar, $MinimapRadar$Type} from "packages/xaero/common/minimap/radar/$MinimapRadar"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarRenderContext {
 "minimapRadar": $MinimapRadar
 "dotsBufferBuilder": $VertexConsumer
 "nameBgBuilder": $VertexConsumer
 "iconsRenderer": $MultiTextureRenderTypeRenderer
 "nameScale": double
 "smoothDots": boolean
 "debugEntityIcons": boolean
 "debugEntityVariantIds": boolean
 "dotsStyle": integer
 "reversedOrder": boolean
 "dotsRenderType": $RenderType
 "entityCategory": $EntityRadarCategory
 "iconScale": double
 "dotSize": integer
 "heightLimit": integer
 "heightBasedFade": boolean
 "startFadingAt": integer
 "displayNameWhenIconFails": boolean
 "alwaysNameTags": boolean
 "colorIndex": integer
 "displayY": integer
 "namesForList": boolean
 "iconsForList": boolean
 "name": boolean
 "icon": boolean
 "renderEntity": $Entity

constructor()

public "setupGlobalContext"(arg0: double, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: $RenderType$Type, arg6: $VertexConsumer$Type, arg7: $VertexConsumer$Type, arg8: $MultiTextureRenderTypeRenderer$Type, arg9: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarRenderContext$Type = ($RadarRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarRenderContext_ = $RadarRenderContext$Type;
}}
declare module "packages/xaero/common/category/serialization/data/$ObjectCategoryData" {
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ObjectCategoryData<D extends $ObjectCategoryData<(D)>> {


public "getName"(): string
public "getSettingOverrideIterator"(): $Iterator<($Map$Entry<(string), (any)>)>
public "getSubCategoryIterator"(): $Iterator<(D)>
public "getProtection"(): boolean
get "name"(): string
get "settingOverrideIterator"(): $Iterator<($Map$Entry<(string), (any)>)>
get "subCategoryIterator"(): $Iterator<(D)>
get "protection"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryData$Type<D> = ($ObjectCategoryData<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryData_<D> = $ObjectCategoryData$Type<(D)>;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier" {
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategoryUIEditorSimpleButtonData, $GuiCategoryUIEditorSimpleButtonData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData"

export interface $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier {

 "get"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type): boolean

(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type): boolean
}

export namespace $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier$Type = ($GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier_ = $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier$Type;
}}
declare module "packages/xaero/common/core/$IXaeroMinimapClientPlayNetHandler" {
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"

export interface $IXaeroMinimapClientPlayNetHandler {

 "getXaero_minimapSession"(): $XaeroMinimapSession
 "setXaero_minimapSession"(arg0: $XaeroMinimapSession$Type): void
}

export namespace $IXaeroMinimapClientPlayNetHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapClientPlayNetHandler$Type = ($IXaeroMinimapClientPlayNetHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroMinimapClientPlayNetHandler_ = $IXaeroMinimapClientPlayNetHandler$Type;
}}
declare module "packages/xaero/common/minimap/render/radar/element/$RadarRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import {$RadarRenderContext, $RadarRenderContext$Type} from "packages/xaero/common/minimap/render/radar/element/$RadarRenderContext"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import {$MinimapRadar, $MinimapRadar$Type} from "packages/xaero/common/minimap/radar/$MinimapRadar"

export class $RadarRenderer extends $MinimapElementRenderer<($Entity), ($RadarRenderContext)> {


public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "shouldRender"(arg0: integer): boolean
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: $Entity$Type, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
public "renderEntityDotToFBO"(arg0: integer, arg1: boolean, arg2: $GuiGraphics$Type, arg3: $MinimapProcessor$Type, arg4: $Player$Type, arg5: $Entity$Type, arg6: $Entity$Type, arg7: float, arg8: boolean, arg9: boolean, arg10: $MinimapRadar$Type, arg11: integer, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: double, arg17: $MultiBufferSource$BufferSource$Type, arg18: $RenderType$Type, arg19: $VertexConsumer$Type, arg20: $MultiTextureRenderTypeRenderer$Type, arg21: $VertexConsumer$Type, arg22: integer, arg23: boolean, arg24: integer, arg25: boolean, arg26: integer, arg27: double, arg28: integer, arg29: integer, arg30: integer, arg31: $EntityRadarCategory$Type, arg32: $MinimapRendererHelper$Type, arg33: $Font$Type, arg34: $RenderTarget$Type, arg35: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarRenderer$Type = ($RadarRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarRenderer_ = $RadarRenderer$Type;
}}
declare module "packages/xaero/common/gui/$ISettingEntry" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $ISettingEntry {

 "getStringForSearch"(): string
 "createWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $AbstractWidget
}

export namespace $ISettingEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingEntry$Type = ($ISettingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingEntry_ = $ISettingEntry$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $SyncedPlayerTrackerSystemManager {

constructor()

public "register"(arg0: string, arg1: $ISyncedPlayerTrackerSystem$Type): void
public "getSystems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
get "systems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTrackerSystemManager$Type = ($SyncedPlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTrackerSystemManager_ = $SyncedPlayerTrackerSystemManager$Type;
}}
declare module "packages/xaero/common/$IXaeroMinimap" {
import {$FieldValidatorHolder, $FieldValidatorHolder$Type} from "packages/xaero/common/validator/$FieldValidatorHolder"
import {$PlatformContext, $PlatformContext$Type} from "packages/xaero/common/$PlatformContext"
import {$ClientEvents, $ClientEvents$Type} from "packages/xaero/common/events/$ClientEvents"
import {$HudIO, $HudIO$Type} from "packages/xaero/hud/io/$HudIO"
import {$InterfaceRenderer, $InterfaceRenderer$Type} from "packages/xaero/common/interfaces/render/$InterfaceRenderer"
import {$ClientEventsListener, $ClientEventsListener$Type} from "packages/xaero/common/events/$ClientEventsListener"
import {$PlayerTrackerSystemManager, $PlayerTrackerSystemManager$Type} from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategoryManager"
import {$WidgetScreenHandler, $WidgetScreenHandler$Type} from "packages/xaero/common/gui/widget/$WidgetScreenHandler"
import {$HudRenderer, $HudRenderer$Type} from "packages/xaero/hud/render/$HudRenderer"
import {$ServerPlayerTickHandler, $ServerPlayerTickHandler$Type} from "packages/xaero/common/server/player/$ServerPlayerTickHandler"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CommonEvents, $CommonEvents$Type} from "packages/xaero/common/events/$CommonEvents"
import {$WidgetLoadingHandler, $WidgetLoadingHandler$Type} from "packages/xaero/common/gui/widget/$WidgetLoadingHandler"
import {$ModCommonEvents, $ModCommonEvents$Type} from "packages/xaero/common/events/$ModCommonEvents"
import {$PatreonMod, $PatreonMod$Type} from "packages/xaero/common/patreon/$PatreonMod"
import {$CommonConfigIO, $CommonConfigIO$Type} from "packages/xaero/common/config/$CommonConfigIO"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$GuiHelper, $GuiHelper$Type} from "packages/xaero/common/gui/$GuiHelper"
import {$MinimapMessageHandler, $MinimapMessageHandler$Type} from "packages/xaero/common/message/$MinimapMessageHandler"
import {$SupportServerMods, $SupportServerMods$Type} from "packages/xaero/common/server/mods/$SupportServerMods"
import {$CommonConfig, $CommonConfig$Type} from "packages/xaero/common/config/$CommonConfig"
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"
import {$ModClientEvents, $ModClientEvents$Type} from "packages/xaero/common/events/$ModClientEvents"
import {$ControlsRegister, $ControlsRegister$Type} from "packages/xaero/common/controls/$ControlsRegister"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$InterfaceManager, $InterfaceManager$Type} from "packages/xaero/common/interfaces/$InterfaceManager"
import {$PlayerTrackerMinimapElementRenderer, $PlayerTrackerMinimapElementRenderer$Type} from "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementRenderer"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$SupportMods, $SupportMods$Type} from "packages/xaero/common/mods/$SupportMods"

export interface $IXaeroMinimap {

 "getInterfaces"(): $InterfaceManager
 "getMessage"(): string
 "setSettings"(arg0: $ModSettings$Type): void
 "getSettings"(): $ModSettings
 "isStandalone"(): boolean
 "getModId"(): string
 "isOutdated"(): boolean
 "isLoadedClient"(): boolean
 "isLoadedServer"(): boolean
 "getPatreon"(): $PatreonMod
 "getVersionID"(): string
 "getFileLayoutID"(): string
 "getSupportMods"(): $SupportMods
 "getWaypointsFolder"(): $File
 "getModEvents"(): $ModClientEvents
 "getWaypointsFile"(): $File
 "getWidgetLoader"(): $WidgetLoadingHandler
 "getFieldValidators"(): $FieldValidatorHolder
 "resetSettings"(): void
 "getNewestUpdateID"(): integer
 "getGuiHelper"(): $GuiHelper
 "getLatestVersion"(): string
 "setNewestUpdateID"(arg0: integer): void
 "setLatestVersion"(arg0: string): void
 "getModJAR"(): $File
 "setOutdated"(arg0: boolean): void
 "getMinimap"(): $Minimap
 "setCommonConfig"(arg0: $CommonConfig$Type): void
 "getHud"(): $Hud
 "getHudRenderer"(): $HudRenderer
 "isFairPlay"(): boolean
 "setCommonConfigIO"(arg0: $CommonConfigIO$Type): void
 "getPlatformContext"(): $PlatformContext
 "getModCommonEvents"(): $ModCommonEvents
 "getHudIO"(): $HudIO
 "tryLoadLater"(): void
 "getMessageHandler"(): $MinimapMessageHandler
 "getModClientEvents"(): $ModClientEvents
 "tryLoadLaterServer"(): void
 "getCommonConfigIO"(): $CommonConfigIO
 "getVersionsURL"(): string
 "getUpdateLink"(): string
 "createSession"(): $XaeroMinimapSession
 "getSettingsKey"(): any
 "setMessage"(arg0: string): void
 "getForgeEventHandlerListener"(): $ClientEventsListener
 "getControlsRegister"(): $ControlsRegister
 "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
 "getLatestVersionMD5"(): string
 "getWidgetScreenHandler"(): $WidgetScreenHandler
 "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
 "getInterfaceRenderer"(): $InterfaceRenderer
 "ensureControlsRegister"(): void
 "setLatestVersionMD5"(arg0: string): void
 "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
 "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
 "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$Type): void
 "getSupportServerMods"(): $SupportServerMods
 "getConfigFile"(): $File
 "getCommonEvents"(): $CommonEvents
 "getCommonConfig"(): $CommonConfig
 "getEvents"(): $ClientEvents
}

export namespace $IXaeroMinimap {
const old_waypointsFile: $File
const wrongWaypointsFile: $File
const wrongWaypointsFolder: $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimap$Type = ($IXaeroMinimap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroMinimap_ = $IXaeroMinimap$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ClientSyncedTrackedPlayerManager {

constructor()

public "remove"(arg0: $UUID$Type): void
public "update"(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
public "reset"(): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientSyncedTrackedPlayerManager_ = $ClientSyncedTrackedPlayerManager$Type;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/common/category/$ObjectCategory"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiCategoryUIEditorSettingsData, $GuiCategoryUIEditorSettingsData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData"

export class $GuiCategoryUIEditorCategoryData<C extends $ObjectCategory<(any), (C)>, SD extends $GuiCategoryUIEditorSettingsData<(any)>, ED extends $GuiCategoryUIEditorCategoryData<(C), (SD), (ED)>> extends $GuiCategoryUIEditorExpandableData<($GuiCategoryUIEditorExpandableData<(any)>)> {


public "getName"(): string
public "getDisplayName"(): string
public "getSettingsData"(): SD
public "getDuplicateAction"(arg0: integer, arg1: $GuiCategorySettings$SettingRowList$Type<>): $Supplier<(boolean)>
public "getCutAction"(arg0: ED, arg1: $GuiCategorySettings$SettingRowList$Type<>): $Supplier<(boolean)>
public "getPasteAction"(arg0: $GuiCategorySettings$SettingRowList$Type<>): $Supplier<(boolean)>
public "getSubExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
public "getSubCategories"(): $List<(ED)>
public "removeProtectionRecursive"(): void
public "getMoveAction"(arg0: integer, arg1: integer, arg2: $GuiCategorySettings$SettingRowList$Type<>): $Supplier<(boolean)>
get "name"(): string
get "displayName"(): string
get "settingsData"(): SD
get "subExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
get "subCategories"(): $List<(ED)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorCategoryData$Type<C, SD, ED> = ($GuiCategoryUIEditorCategoryData<(C), (SD), (ED)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorCategoryData_<C, SD, ED> = $GuiCategoryUIEditorCategoryData$Type<(C), (SD), (ED)>;
}}
declare module "packages/xaero/common/category/rule/$ObjectCategoryExcludeList" {
import {$ExcludeListMode, $ExcludeListMode$Type} from "packages/xaero/common/category/rule/$ExcludeListMode"
import {$ObjectCategoryListRule, $ObjectCategoryListRule$Type} from "packages/xaero/common/category/rule/$ObjectCategoryListRule"

export class $ObjectCategoryExcludeList<E, P, S> extends $ObjectCategoryListRule<(E), (P), (S)> {


public "getExcludeMode"(): $ExcludeListMode
public "isFollowedBy"(arg0: E, arg1: P): boolean
get "excludeMode"(): $ExcludeListMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryExcludeList$Type<E, P, S> = ($ObjectCategoryExcludeList<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryExcludeList_<E, P, S> = $ObjectCategoryExcludeList$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/common/server/mods/$SupportOPACServer" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export class $SupportOPACServer {

constructor()

public "isPositionSyncAllowed"(arg0: integer, arg1: $ServerPlayer$Type, arg2: $ServerPlayer$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportOPACServer$Type = ($SupportOPACServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportOPACServer_ = $SupportOPACServer$Type;
}}
declare module "packages/xaero/common/gui/$ScreenBase" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/common/gui/dropdown/$DropDownWidget"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$IScreenBase, $IScreenBase$Type} from "packages/xaero/common/gui/$IScreenBase"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ScreenBase extends $Screen implements $IScreenBase {
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public "renderEscapeScreen"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getEscape"(): $Screen
public "onDropdownClosed"(arg0: $DropDownWidget$Type): void
public "onDropdownOpen"(arg0: $DropDownWidget$Type): void
public "replaceWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "onClose"(): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "shouldSkipWorldRender"(): boolean
public "replaceRenderableWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public static "tryToGetEscape"(arg0: $Screen$Type): $Screen
get "escape"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBase$Type = ($ScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBase_ = $ScreenBase$Type;
}}
declare module "packages/xaero/common/server/mods/$SupportWorldMapServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportWorldMapServer {

constructor()

public "supportsTrackedPlayers"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportWorldMapServer$Type = ($SupportWorldMapServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportWorldMapServer_ = $SupportWorldMapServer$Type;
}}
declare module "packages/xaero/common/gui/$GuiHelper" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MyOptions, $MyOptions$Type} from "packages/xaero/common/gui/$MyOptions"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"
import {$GuiSettings, $GuiSettings$Type} from "packages/xaero/common/gui/$GuiSettings"

export class $GuiHelper {

constructor(arg0: $IXaeroMinimap$Type)

public "openMinimapSettingsFromScreen"(arg0: $Screen$Type, arg1: $Screen$Type): void
public "getMainSettingsScreen"(arg0: $Screen$Type): $GuiSettings
public "openMainSettingsFromScreen"(arg0: $Screen$Type, arg1: $Screen$Type): void
public "openSettingsGui"(arg0: $ModOptions$Type): void
public "onResetCancel"(arg0: $Screen$Type, arg1: $Screen$Type): void
public "getMyOptions"(): $MyOptions
get "myOptions"(): $MyOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiHelper$Type = ($GuiHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiHelper_ = $GuiHelper$Type;
}}
declare module "packages/xaero/common/server/player/$ServerPlayerTickHandler" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerPlayerTickHandler {

constructor()

public "tick"(arg0: $ServerPlayer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerTickHandler$Type = ($ServerPlayerTickHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerTickHandler_ = $ServerPlayerTickHandler$Type;
}}
declare module "packages/xaero/common/category/ui/entry/widget/$CategorySettingsButton$PressActionWithContext" {
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$CategorySettingsButton, $CategorySettingsButton$Type} from "packages/xaero/common/category/ui/entry/widget/$CategorySettingsButton"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export class $CategorySettingsButton$PressActionWithContext implements $Button$OnPress {

constructor()

public "onPress"(arg0: $Button$Type): void
public "onPress"(arg0: $CategorySettingsButton$Type, arg1: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg2: $GuiCategorySettings$SettingRowList$Type<>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsButton$PressActionWithContext$Type = ($CategorySettingsButton$PressActionWithContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsButton$PressActionWithContext_ = $CategorySettingsButton$PressActionWithContext$Type;
}}
declare module "packages/xaero/common/category/ui/entry/widget/$CategorySettingsTextField$UpdatedValueConsumer" {
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"

export interface $CategorySettingsTextField$UpdatedValueConsumer {

 "accept"(arg0: string, arg1: integer, arg2: integer, arg3: $GuiCategorySettings$SettingRowList$Type<>): void

(arg0: string, arg1: integer, arg2: integer, arg3: $GuiCategorySettings$SettingRowList$Type<>): void
}

export namespace $CategorySettingsTextField$UpdatedValueConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsTextField$UpdatedValueConsumer$Type = ($CategorySettingsTextField$UpdatedValueConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsTextField$UpdatedValueConsumer_ = $CategorySettingsTextField$UpdatedValueConsumer$Type;
}}
declare module "packages/xaero/common/minimap/info/$InfoDisplay" {
import {$InfoDisplayStateCodec, $InfoDisplayStateCodec$Type} from "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InfoDisplayWidgetFactory, $InfoDisplayWidgetFactory$Type} from "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InfoDisplayOnCompile, $InfoDisplayOnCompile$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile"

export class $InfoDisplay<T> {

constructor(arg0: string, arg1: $Component$Type, arg2: T, arg3: $InfoDisplayStateCodec$Type<(T)>, arg4: $InfoDisplayWidgetFactory$Type<(T)>, arg5: $InfoDisplayOnCompile$Type<(T)>, arg6: $List$Type<($InfoDisplay$Type<(any)>)>)

public "getName"(): $Component
public "getId"(): string
public "getState"(): T
public "reset"(): void
public "setState"(arg0: T): void
public "getWidgetFactory"(): $InfoDisplayWidgetFactory<(T)>
public "getOnCompile"(): $InfoDisplayOnCompile<(T)>
public "setTextColor"(arg0: integer): void
public "getCodec"(): $InfoDisplayStateCodec<(T)>
public "getBackgroundColor"(): integer
public "setBackgroundColor"(arg0: integer): void
public "getDefaultState"(): T
public "getTextColor"(): integer
get "name"(): $Component
get "id"(): string
get "state"(): T
set "state"(value: T)
get "widgetFactory"(): $InfoDisplayWidgetFactory<(T)>
get "onCompile"(): $InfoDisplayOnCompile<(T)>
set "textColor"(value: integer)
get "codec"(): $InfoDisplayStateCodec<(T)>
get "backgroundColor"(): integer
set "backgroundColor"(value: integer)
get "defaultState"(): T
get "textColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplay$Type<T> = ($InfoDisplay<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplay_<T> = $InfoDisplay$Type<(T)>;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointsManager" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WaypointSet, $WaypointSet$Type} from "packages/xaero/common/minimap/waypoints/$WaypointSet"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$WaypointWorldContainer, $WaypointWorldContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $WaypointsManager {
static readonly "customWaypoints": $Hashtable<(string), ($Hashtable<(integer), ($Waypoint)>)>
 "setChanged": long
static readonly "TELEPORT_ANYWAY_COMMAND": string

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type)

public "getCurrentContainerAndWorldID"(arg0: string, arg1: string): string
public "getCurrentContainerAndWorldID"(): string
public "teleportToWaypoint"(arg0: $Waypoint$Type, arg1: $WaypointWorld$Type, arg2: $Screen$Type, arg3: boolean): void
public "teleportToWaypoint"(arg0: $Waypoint$Type, arg1: $WaypointWorld$Type, arg2: $Screen$Type): void
public "getCurrentWorld"(): $WaypointWorld
public "getCurrentWorld"(arg0: string, arg1: string): $WaypointWorld
public "getWaypoints"(): $WaypointSet
public "getAutoWorld"(): $WaypointWorld
public "teleportAnyway"(): void
public "updateWorldIds"(): void
public "updateWaypoints"(): void
public "setCurrentSpawn"(arg0: $BlockPos$Type, arg1: $ClientLevel$Type): void
public "onLoad"(arg0: $ClientPacketListener$Type): void
public "getAutoWorldID"(): string
public "setCustomWorldID"(arg0: string): void
public "getAutoContainerID"(): string
public "isMultiplayer"(arg0: string): boolean
public "removeContainer"(arg0: string): void
public "addWorldContainer"(arg0: string): $WaypointWorldContainer
public "getWorldContainer"(arg0: string): $WaypointWorldContainer
public "addWorld"(arg0: string, arg1: string): $WaypointWorld
public "getWaypointMap"(): $HashMap<(string), ($WaypointWorldContainer)>
/**
 * 
 * @deprecated
 */
public "getDimensionDivision"(arg0: string): double
public "getDimensionDivision"(arg0: $WaypointWorld$Type): double
public "getWorld"(arg0: string, arg1: string): $WaypointWorld
public "canTeleport"(arg0: boolean, arg1: $WaypointWorld$Type): boolean
public "getCurrentContainerID"(): string
public "getCurrentContainerID"(arg0: string): string
public "getCurrentOriginContainerID"(arg0: string): string
public "getCurrentOriginContainerID"(): string
public "ignoreContainerCase"(arg0: string, arg1: string): string
public "isTeleportationSafe"(arg0: $WaypointWorld$Type): boolean
public "getCustomContainerID"(): string
public "getDimensionDirectoryName"(arg0: $ResourceKey$Type<($Level$Type)>): string
public "getDimensionKeyForDirectoryName"(arg0: string): $ResourceKey<($Level)>
public "isWorldTeleportable"(arg0: $WaypointWorld$Type): boolean
public "setCustomContainerID"(arg0: string): void
public "getDimCoordinateScale"(arg0: $WaypointWorld$Type): double
public "getWorldContainerNullable"(arg0: string): $WaypointWorldContainer
public "createTemporaryWaypoints"(arg0: $WaypointWorld$Type, arg1: integer, arg2: integer, arg3: integer): void
public "createTemporaryWaypoints"(arg0: $WaypointWorld$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean, arg5: double): void
public "createTemporaryWaypoints"(arg0: $WaypointWorld$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "getAutoRootContainerID"(): string
public "createDeathpoint"(arg0: $Player$Type): void
public "findDimensionKey"(arg0: string): $ResourceKey<($Level)>
public "getNewAutoWorldID"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: boolean): string
public "getServerWaypoints"(): $List<($Waypoint)>
public "containerExists"(arg0: string): boolean
public "getCurrentWorldID"(arg0: string): string
public "getCurrentWorldID"(): string
public "setWaypoints"(arg0: $WaypointSet$Type): void
public static "getCustomWaypoints"(arg0: string): $Hashtable<(integer), ($Waypoint)>
public "getCustomWorldID"(): string
public "onServerLevelId"(arg0: integer): void
get "currentContainerAndWorldID"(): string
get "currentWorld"(): $WaypointWorld
get "waypoints"(): $WaypointSet
get "autoWorld"(): $WaypointWorld
get "autoWorldID"(): string
set "customWorldID"(value: string)
get "autoContainerID"(): string
get "waypointMap"(): $HashMap<(string), ($WaypointWorldContainer)>
get "currentContainerID"(): string
get "currentOriginContainerID"(): string
get "customContainerID"(): string
set "customContainerID"(value: string)
get "autoRootContainerID"(): string
get "serverWaypoints"(): $List<($Waypoint)>
get "currentWorldID"(): string
set "waypoints"(value: $WaypointSet$Type)
get "customWorldID"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsManager$Type = ($WaypointsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsManager_ = $WaypointsManager$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementCollector" {
import {$PlayerTrackerMinimapElement, $PlayerTrackerMinimapElement$Type} from "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElement"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerTrackerSystemManager, $PlayerTrackerSystemManager$Type} from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $PlayerTrackerMinimapElementCollector {

constructor(arg0: $PlayerTrackerSystemManager$Type)

public "update"(arg0: $Minecraft$Type): void
public "getElements"(): $Iterable<($PlayerTrackerMinimapElement<(any)>)>
public "resetRenderedOnRadarFlags"(): void
public "playerExists"(arg0: $UUID$Type): boolean
public "confirmPlayerRadarRender"(arg0: $Player$Type): void
get "elements"(): $Iterable<($PlayerTrackerMinimapElement<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementCollector$Type = ($PlayerTrackerMinimapElementCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElementCollector_ = $PlayerTrackerMinimapElementCollector$Type;
}}
declare module "packages/xaero/common/minimap/radar/category/$EntityRadarCategoryManager" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$EntityRadarCategoryFileIO, $EntityRadarCategoryFileIO$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategoryFileIO"
import {$ObjectCategoryRuleResolver, $ObjectCategoryRuleResolver$Type} from "packages/xaero/common/category/rule/resolver/$ObjectCategoryRuleResolver"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"
import {$EntityRadarDefaultCategories, $EntityRadarDefaultCategories$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarDefaultCategories"

export class $EntityRadarCategoryManager {


public "init"(): void
public "save"(): void
public "getRootCategory"(): $EntityRadarCategory
public "getRuleResolver"(): $ObjectCategoryRuleResolver
public "setRootCategory"(arg0: $EntityRadarCategory$Type): void
public "getSecondaryFileIO"(): $EntityRadarCategoryFileIO
public "getDefaultCategoryConfigurator"(): $EntityRadarDefaultCategories
public "getSecondaryFilePath"(): $Path
get "rootCategory"(): $EntityRadarCategory
get "ruleResolver"(): $ObjectCategoryRuleResolver
set "rootCategory"(value: $EntityRadarCategory$Type)
get "secondaryFileIO"(): $EntityRadarCategoryFileIO
get "defaultCategoryConfigurator"(): $EntityRadarDefaultCategories
get "secondaryFilePath"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryManager$Type = ($EntityRadarCategoryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategoryManager_ = $EntityRadarCategoryManager$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapElementRenderProvider<E, RC> {

constructor()

public "hasNext"(arg0: integer, arg1: RC): boolean
public "end"(arg0: integer, arg1: RC): void
public "begin"(arg0: integer, arg1: RC): void
public "getNext"(arg0: integer, arg1: RC): E
public "setupContextAndGetNext"(arg0: integer, arg1: RC): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderProvider$Type<E, RC> = ($MinimapElementRenderProvider<(E), (RC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRenderProvider_<E, RC> = $MinimapElementRenderProvider$Type<(E), (RC)>;
}}
declare module "packages/xaero/common/category/setting/$ObjectCategorySetting" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CategorySettingsUIEditorSettingType, $CategorySettingsUIEditorSettingType$Type} from "packages/xaero/common/category/ui/setting/$CategorySettingsUIEditorSettingType"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $ObjectCategorySetting<T> {


public "getId"(): string
public "getDefaultValue"(): T
public "getDisplayName"(): string
public "getIndexWriter"(): $Function<(T), (integer)>
public "getIndexReader"(): $IntFunction<(T)>
public "getTooltip"(): $CursorBox
public "getUiFirstOption"(): integer
public "getUiLastOption"(): integer
public "getWidgetValueNameProvider"(): $Function<(T), (string)>
public "getSettingUIType"(): $CategorySettingsUIEditorSettingType
get "id"(): string
get "defaultValue"(): T
get "displayName"(): string
get "indexWriter"(): $Function<(T), (integer)>
get "indexReader"(): $IntFunction<(T)>
get "tooltip"(): $CursorBox
get "uiFirstOption"(): integer
get "uiLastOption"(): integer
get "widgetValueNameProvider"(): $Function<(T), (string)>
get "settingUIType"(): $CategorySettingsUIEditorSettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategorySetting$Type<T> = ($ObjectCategorySetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategorySetting_<T> = $ObjectCategorySetting$Type<(T)>;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$File, $File$Type} from "packages/java/io/$File"
import {$WaypointWorldRootContainer, $WaypointWorldRootContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $WaypointWorldContainer {
 "subContainers": $HashMap<(string), ($WaypointWorldContainer)>
 "worlds": $HashMap<(string), ($WaypointWorld)>

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: string, arg3: $WaypointWorldRootContainer$Type)

public "getName"(arg0: string): string
public "toString"(): string
public "isEmpty"(): boolean
public "getKey"(): string
public "addName"(arg0: string, arg1: string): void
public "getFullName"(arg0: string, arg1: string): string
public "setKey"(arg0: string): void
public "getSubName"(): string
public "getDirectory"(): $File
public "getFirstWorld"(): $WaypointWorld
public "getRootContainer"(): $WaypointWorldRootContainer
public "getAllWorlds"(): $ArrayList<($WaypointWorld)>
public "addWorld"(arg0: string): $WaypointWorld
public "getFirstWorldConnectedTo"(arg0: $WaypointWorld$Type): $WaypointWorld
public "getEqualIgnoreCaseSub"(arg0: string): string
public "getSubId"(): string
public "deleteSubContainer"(arg0: string): void
public "renameOldContainer"(arg0: string): void
public "containsSub"(arg0: string): boolean
public "addSubContainer"(arg0: string): $WaypointWorldContainer
public "removeName"(arg0: string): void
get "empty"(): boolean
get "key"(): string
set "key"(value: string)
get "subName"(): string
get "directory"(): $File
get "firstWorld"(): $WaypointWorld
get "rootContainer"(): $WaypointWorldRootContainer
get "allWorlds"(): $ArrayList<($WaypointWorld)>
get "subId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldContainer$Type = ($WaypointWorldContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldContainer_ = $WaypointWorldContainer$Type;
}}
declare module "packages/xaero/common/category/ui/entry/$CategorySettingsListEntry" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiCategorySettings$SettingRowList$Entry, $GuiCategorySettings$SettingRowList$Entry$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList$Entry"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $CategorySettingsListEntry {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $GuiCategorySettings$SettingRowList$Type<>, arg6: $Supplier$Type<($CursorBox$Type)>)

public "getMessage"(): string
public "postRender"(arg0: $GuiGraphics$Type): void
public "preRender"(arg0: $GuiGraphics$Type, arg1: boolean, arg2: boolean): void
public "setFocused"(arg0: boolean): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: float, arg8: $Font$Type, arg9: integer, arg10: integer, arg11: boolean, arg12: boolean): $CategorySettingsListEntry
public "mouseClicked"(arg0: $GuiCategorySettings$SettingRowList$Entry$Type<>, arg1: double, arg2: double, arg3: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
public "tick"(): void
public "onSelected"(): $CategorySettingsListEntry
public "getEntryRelativeX"(): integer
public "getEntryRelativeY"(): integer
public "getSubNarration"(): string
public "moveFocus"(arg0: integer): boolean
public "moveFocus"(arg0: integer, arg1: boolean): boolean
public "isHoveredOver"(arg0: double, arg1: double): boolean
public "getHoverNarration"(): string
public "getNarration"(): string
public "withSubEntry"(arg0: $CategorySettingsListEntry$Type): $CategorySettingsListEntry
public "unhoverRecursively"(): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "getTooltipSupplier"(): $Supplier<($CursorBox)>
public "confirmSelection"(): $CategorySettingsListEntry
public "unfocusRecursively"(): void
public "mouseMoved"(arg0: double, arg1: double): void
public "focusFirstRecursively"(): void
public "getSelectedNarration"(): string
public "getNarrationMessage"(): string
public "focusLastRecursively"(): void
public "getHoveredNarration"(): string
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
get "message"(): string
set "focused"(value: boolean)
get "entryRelativeX"(): integer
get "entryRelativeY"(): integer
get "subNarration"(): string
get "hoverNarration"(): string
get "narration"(): string
get "tooltipSupplier"(): $Supplier<($CursorBox)>
get "selectedNarration"(): string
get "narrationMessage"(): string
get "hoveredNarration"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsListEntry$Type = ($CategorySettingsListEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsListEntry_ = $CategorySettingsListEntry$Type;
}}
declare module "packages/xaero/common/controls/event/$KeyEventHandler" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$KeyEvent, $KeyEvent$Type} from "packages/xaero/common/controls/event/$KeyEvent"

export class $KeyEventHandler {
 "keyEvents": $ArrayList<($KeyEvent)>
 "oldKeyEvents": $ArrayList<($KeyEvent)>

constructor()

public "handleEvents"(arg0: $Minecraft$Type, arg1: $XaeroMinimapSession$Type): void
public "onKeyInput"(arg0: $Minecraft$Type, arg1: $IXaeroMinimap$Type, arg2: $XaeroMinimapSession$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEventHandler$Type = ($KeyEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEventHandler_ = $KeyEventHandler$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorExpandingOptionsData$Builder" {
import {$GuiCategoryUIEditorOptionData$Builder, $GuiCategoryUIEditorOptionData$Builder$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData$Builder"
import {$GuiCategoryUIEditorOptionsData$Builder, $GuiCategoryUIEditorOptionsData$Builder$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData$Builder"

export class $GuiCategoryUIEditorExpandingOptionsData$Builder<V, B extends $GuiCategoryUIEditorExpandingOptionsData$Builder<(V), (B)>> extends $GuiCategoryUIEditorOptionsData$Builder<(V), (B)> {


public "addOptionBuilder"(arg0: $GuiCategoryUIEditorOptionData$Builder$Type<(V)>): B
public "addOptionBuilderFor"(arg0: V): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorExpandingOptionsData$Builder$Type<V, B> = ($GuiCategoryUIEditorExpandingOptionsData$Builder<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorExpandingOptionsData$Builder_<V, B> = $GuiCategoryUIEditorExpandingOptionsData$Builder$Type<(V), (B)>;
}}
declare module "packages/xaero/common/settings/$ModSettings" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$File, $File$Type} from "packages/java/io/$File"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$EntityRadarBackwardsCompatibilityConfig, $EntityRadarBackwardsCompatibilityConfig$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarBackwardsCompatibilityConfig"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $ModSettings {
static "defaultSettings": integer
static "ignoreUpdate": integer
static readonly "format": string
static readonly "ENCHANT_COLORS": (string)[]
static readonly "ENCHANT_COLOR_NAMES": (string)[]
static readonly "COLORS": (integer)[]
static "serverSettings": integer
static "keyBindZoom": $KeyMapping
static "keyBindZoom1": $KeyMapping
static "newWaypoint": $KeyMapping
static "keyWaypoints": $KeyMapping
static "keyLargeMap": $KeyMapping
static "keyToggleMap": $KeyMapping
static "keyToggleWaypoints": $KeyMapping
static "keyToggleMapWaypoints": $KeyMapping
static "keyToggleSlimes": $KeyMapping
static "keyToggleGrid": $KeyMapping
static "keyInstantWaypoint": $KeyMapping
static "keySwitchSet": $KeyMapping
static "keyAllSets": $KeyMapping
static "keyLightOverlay": $KeyMapping
static "keyToggleRadar": $KeyMapping
static "keyReverseEntityRadar": $KeyMapping
static "keyManualCaveMode": $KeyMapping
static "keyAlternativeListPlayers": $KeyMapping
static "keyToggleTrackedPlayers": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyTogglePacPlayers": $KeyMapping
static "keyTogglePacChunkClaims": $KeyMapping
static "minimapItemId": string
static "minimapItem": $Item
 "zoom": integer
static readonly "zooms": (float)[]
 "caveMaps": integer
 "caveZoom": integer
 "chunkGrid": integer
 "slimeChunks": boolean
 "mapSafeMode": boolean
 "distance": integer
static readonly "distanceTypes": (string)[]
static readonly "blockColourTypes": (string)[]
 "compassOverEverything": boolean
 "minimapOpacity": double
 "waypointsIngameCloseScale": double
static "settingsButton": boolean
static "updateNotification": boolean
 "keepWaypointNames": boolean
 "waypointsDistanceMin": double
 "defaultWaypointTPCommandFormat": string
 "defaultWaypointTPCommandRotationFormat": string
 "arrowScale": double
 "arrowColour": integer
 "arrowColourNames": (string)[]
static "arrowColours": ((float)[])[]
 "smoothDots": boolean
static readonly "ENTITY_ICONS_OPTIONS": (string)[]
 "mainEntityAs": integer
 "blockTransparency": boolean
 "waypointOpacityIngame": integer
 "waypointOpacityMap": integer
 "allowWrongWorldTeleportation": boolean
 "hideWorldNames": integer
 "openSlimeSettings": boolean
 "alwaysShowDistance": boolean
static readonly "ENTITY_NAMES_OPTIONS": (string)[]
 "renderLayerIndex": integer
 "crossDimensionalTp": boolean
 "differentiateByServerAddress": boolean
 "lookingAtAngle": integer
 "lookingAtAngleVertical": integer
 "centeredEnlarged": boolean
 "zoomOnEnlarged": integer
 "minimapTextAlign": integer
 "waypointsMutualEdit": boolean
 "hideWaypointCoordinates": boolean
 "renderAllSets": boolean
 "playerArrowOpacity": integer
 "waypointsBottom": boolean
 "minimapShape": integer
 "lightOverlayType": integer
 "lightOverlayMaxLight": integer
 "lightOverlayMinLight": integer
 "lightOverlayColor": integer
static readonly "DOTS_STYLES": (string)[]
 "debugEntityIcons": boolean
static readonly "PUSHBOX_OPTIONS": (string)[]
 "bossHealthPushBox": integer
 "potionEffectPushBox": integer
static readonly "FRAME_OPTIONS": (string)[]
 "minimapFrame": integer
 "minimapFrameColor": integer
static readonly "COMPASS_OPTIONS": (string)[]
 "compassLocation": integer
 "compassColor": integer
 "debugEntityVariantIds": boolean
 "displayMultipleWaypointInfo": integer
 "adjustHeightForCarpetLikeBlocks": boolean
 "autoConvertWaypointDistanceToKmThreshold": integer
 "waypointDistancePrecision": integer
 "mainDotSize": integer
 "partialYTeleportation": boolean
 "deleteReachedDeathpoints": boolean
 "hideMinimapUnderScreen": boolean
 "hideMinimapUnderF3": boolean
 "manualCaveModeStartAuto": boolean
 "manualCaveModeStart": integer
 "chunkGridLineWidth": integer
 "temporaryWaypointsGlobal": boolean
 "keepUnlockedWhenEnlarged": boolean
 "enlargedMinimapAToggle": boolean
static readonly "RADAR_OVER_MAP_OPTIONS": (string)[]
 "displayTrackedPlayers": boolean
 "displayCurrentClaim": boolean
 "radarHideInvisibleEntities": boolean
 "waypointOnMapScale": integer
 "switchToAutoOnDeath": boolean
 "infoDisplayBackgroundOpacity": integer
 "caveModeToggleTimer": integer
 "allowInternetAccess": boolean
 "dimensionScaledMaxWaypointDistance": boolean

constructor(arg0: $IXaeroMinimap$Type)

public "getClaimsBorderOpacity"(): integer
public "getShowIngameWaypoints"(): boolean
public "getWaypointsIngameIconScale"(): float
public "getWaypointsIngameDistanceScale"(): float
public "loadWaypointsFromAllSources"(arg0: $WaypointsManager$Type, arg1: $ClientPacketListener$Type): void
public static "getTranslation"(arg0: boolean): string
public "loadSettings"(): void
public "getWaypointsFile"(arg0: $WaypointWorld$Type): $File
public "getMinimap"(): boolean
public "saveSettings"(): void
public "showWaypointsDisabled"(): boolean
public "deathpointsDisabled"(): boolean
public "customSlimeSeedNeeded"(arg0: $XaeroMinimapSession$Type): boolean
public static "canEditIngameSettings"(): boolean
public "getBiomeColorsVanillaMode"(): boolean
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "isStainedGlassDisplayed"(): boolean
public "getManualCaveModeStart"(): integer
public "resetServerSettings"(): void
public "getNorthCompassColor"(): integer
public "getPartialYTeleportation"(): boolean
public "loadDefaultSettings"(): void
public "saveWaypoints"(arg0: $WaypointWorld$Type, arg1: boolean): void
public "saveWaypoints"(arg0: $WaypointWorld$Type): void
public "getOptionValue"(arg0: $ModOptions$Type): any
public "getBooleanValue"(arg0: $ModOptions$Type): boolean
public "isLegibleCaveMaps"(): boolean
public "getBiomeBlending"(): boolean
public "getTerrainSlopes"(): integer
public "getBlockColours"(): integer
public "getCaveMapsDepth"(): integer
public "isIgnoreHeightmaps"(): boolean
public "getShowFlowers"(): boolean
public "getSlimeChunksSeed"(arg0: string): long
public "getDisplayRedstone"(): boolean
public "getTerrainDepth"(): boolean
public "getLighting"(): boolean
public "getCaveMaps"(arg0: boolean): boolean
public "getEntityRadar"(): boolean
public "resetEntityRadarBackwardsCompatibilityConfig"(): void
public "getEntityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
public "convertWaypointFoldersToSingleFolder"(arg0: $WaypointsManager$Type): void
public "getWaypointsClampDepth"(arg0: double, arg1: integer): double
public "getWaypointsIngameNameScale"(): integer
public "getMaxWaypointsDistance"(): double
public "setOptionValue"(arg0: $ModOptions$Type, arg1: any): void
public "changeZoom"(arg0: integer): void
public static "setServerSettings"(): void
public "getUseWorldMap"(): boolean
public "minimapDisabled"(): boolean
public "isKeyRepeat"(arg0: $KeyMapping$Type): boolean
public "caveMapsDisabled"(): boolean
public "getSmoothDots"(): boolean
public "getSlimeChunks"(arg0: $WaypointsManager$Type): boolean
public "getShowWaypoints"(): boolean
public "getOldDeathpoints"(): boolean
public "getAntiAliasing"(): boolean
public "getDeathpoints"(): boolean
public "getLockNorth"(arg0: integer, arg1: integer): boolean
public "getMinimapSize"(): integer
public "getAutoUIScale"(): integer
public "getMinimapScale"(): float
public "setSlimeChunksSeed"(arg0: long, arg1: string): void
public "waypointsGUI"(arg0: $WaypointsManager$Type): boolean
public "getDotNameScale"(): double
public "getCompassScale"(): integer
public "getDisplayClaims"(): boolean
public "getDotsStyle"(): integer
public "loadAllWaypoints"(arg0: $WaypointsManager$Type): void
public "saveWorlds"(arg0: $ArrayList$Type<($WaypointWorld$Type)>): void
public static "copyTempFilesBack"(arg0: $Path$Type): void
public "saveAllWaypoints"(arg0: $WaypointsManager$Type): void
public "loadWaypoints"(arg0: $WaypointWorld$Type, arg1: $File$Type): void
public "checkWaypointsLine"(arg0: (string)[], arg1: $WaypointWorld$Type): boolean
public "loadOldWaypoints"(arg0: $File$Type, arg1: $WaypointsManager$Type): void
public "readSetting"(arg0: (string)[]): void
public "getOptionValueName"(arg0: $ModOptions$Type): string
public "getUIScale"(arg0: integer, arg1: integer, arg2: integer): float
public "getClaimsFillOpacity"(): integer
public "foundOldRadarSettings"(): boolean
public "convertToNewConteinerID"(arg0: string, arg1: $WaypointsManager$Type): string
public "convertWaypointFilesToFolders"(): void
public "checkWaypointsLineOLD"(arg0: (string)[], arg1: $WaypointsManager$Type): boolean
public "usesWorldMapHardValue"(arg0: $ModOptions$Type): boolean
public "getSliderOptionText"(arg0: $ModOptions$Type): string
public "usesWorldMapScreenValue"(arg0: $ModOptions$Type): boolean
public "getOptionDoubleValue"(arg0: $ModOptions$Type): double
public "getMoreOptionValueNames"(arg0: $ModOptions$Type): string
public "getClientBooleanValue"(arg0: $ModOptions$Type): boolean
public "usesWorldMapOptionValue"(arg0: $ModOptions$Type): boolean
public "setOptionDoubleValue"(arg0: $ModOptions$Type, arg1: double): void
public "toggleBooleanOptionValue"(arg0: $ModOptions$Type): void
public "writeSettings"(arg0: $PrintWriter$Type): void
get "claimsBorderOpacity"(): integer
get "showIngameWaypoints"(): boolean
get "waypointsIngameIconScale"(): float
get "waypointsIngameDistanceScale"(): float
get "minimap"(): boolean
get "biomeColorsVanillaMode"(): boolean
get "adjustHeightForCarpetLikeBlocks"(): boolean
get "stainedGlassDisplayed"(): boolean
get "manualCaveModeStart"(): integer
get "northCompassColor"(): integer
get "partialYTeleportation"(): boolean
get "legibleCaveMaps"(): boolean
get "biomeBlending"(): boolean
get "terrainSlopes"(): integer
get "blockColours"(): integer
get "caveMapsDepth"(): integer
get "ignoreHeightmaps"(): boolean
get "showFlowers"(): boolean
get "displayRedstone"(): boolean
get "terrainDepth"(): boolean
get "lighting"(): boolean
get "entityRadar"(): boolean
get "entityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
get "waypointsIngameNameScale"(): integer
get "maxWaypointsDistance"(): double
get "useWorldMap"(): boolean
get "smoothDots"(): boolean
get "showWaypoints"(): boolean
get "oldDeathpoints"(): boolean
get "antiAliasing"(): boolean
get "deathpoints"(): boolean
get "minimapSize"(): integer
get "autoUIScale"(): integer
get "minimapScale"(): float
get "dotNameScale"(): double
get "compassScale"(): integer
get "displayClaims"(): boolean
get "dotsStyle"(): integer
get "claimsFillOpacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModSettings$Type = ($ModSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModSettings_ = $ModSettings$Type;
}}
declare module "packages/xaero/common/gui/$IXaeroNarratableWidget" {
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IXaeroNarratableWidget {

 "m_5646_"(): $MutableComponent

(): $MutableComponent
}

export namespace $IXaeroNarratableWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroNarratableWidget$Type = ($IXaeroNarratableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroNarratableWidget_ = $IXaeroNarratableWidget$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$CompassRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $CompassRenderer {

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type)

public "drawCompass"(arg0: $PoseStack$Type, arg1: $MinimapRendererHelper$Type, arg2: integer, arg3: integer, arg4: double, arg5: double, arg6: double, arg7: boolean, arg8: float, arg9: boolean, arg10: $MultiBufferSource$BufferSource$Type, arg11: $VertexConsumer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassRenderer$Type = ($CompassRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompassRenderer_ = $CompassRenderer$Type;
}}
declare module "packages/xaero/common/category/rule/$ExcludeListMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ExcludeListMode extends $Enum<($ExcludeListMode)> {
static readonly "ONLY": $ExcludeListMode
static readonly "ALL_BUT": $ExcludeListMode


public static "values"(): ($ExcludeListMode)[]
public static "valueOf"(arg0: string): $ExcludeListMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcludeListMode$Type = (("all_but") | ("only")) | ($ExcludeListMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcludeListMode_ = $ExcludeListMode$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointsSort" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WaypointsSort extends $Enum<($WaypointsSort)> {
static readonly "NONE": $WaypointsSort
static readonly "NAME": $WaypointsSort
static readonly "SYMBOL": $WaypointsSort
static readonly "COLOR": $WaypointsSort
static readonly "DISTANCE": $WaypointsSort
static readonly "ANGLE": $WaypointsSort
readonly "optionName": string


public static "values"(): ($WaypointsSort)[]
public static "valueOf"(arg0: string): $WaypointsSort
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsSort$Type = (("symbol") | ("color") | ("distance") | ("name") | ("angle") | ("none")) | ($WaypointsSort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsSort_ = $WaypointsSort$Type;
}}
declare module "packages/xaero/common/minimap/region/$MinimapChunk" {
import {$MinimapInterface, $MinimapInterface$Type} from "packages/xaero/common/minimap/$MinimapInterface"
import {$MinimapTile, $MinimapTile$Type} from "packages/xaero/common/minimap/region/$MinimapTile"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export class $MinimapChunk {
static readonly "SIZE_TILES": integer
static readonly "INT_BUFFER_SIZE": integer
static readonly "LIGHT_LEVELS": integer

constructor(arg0: integer, arg1: integer)

public "reset"(arg0: integer, arg1: integer): void
public "cleanup"(arg0: $MinimapInterface$Type): void
public "getBuffer"(arg0: integer): $IntBuffer
public "getLevelToRefresh"(arg0: integer): integer
public "setBlockTextureUpload"(arg0: boolean): void
public "getLevelsBuffered"(): integer
public "isChanged"(): boolean
public "setRefreshRequired"(arg0: integer, arg1: boolean): void
public "setLevelsBuffered"(arg0: integer): void
public "recycleTiles"(): void
public "updateBuffers"(arg0: integer, arg1: ((integer)[])[]): void
public "getGlTexture"(arg0: integer): integer
public "isRefreshRequired"(arg0: integer): boolean
public "setGlTexture"(arg0: integer, arg1: integer): void
public "isHasSomething"(): boolean
public "copyBuffer"(arg0: integer, arg1: $IntBuffer$Type): void
public "setTile"(arg0: integer, arg1: integer, arg2: $MinimapTile$Type): void
public "setHasSomething"(arg0: boolean): void
public "getTile"(arg0: integer, arg1: integer): $MinimapTile
public "getX"(): integer
public "bindTexture"(arg0: integer): integer
public "getZ"(): integer
public "isBlockTextureUpload"(): boolean
public "setChanged"(arg0: boolean): void
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: integer): void
set "blockTextureUpload"(value: boolean)
get "levelsBuffered"(): integer
get "changed"(): boolean
set "levelsBuffered"(value: integer)
get "hasSomething"(): boolean
set "hasSomething"(value: boolean)
get "x"(): integer
get "z"(): integer
get "blockTextureUpload"(): boolean
set "changed"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapChunk$Type = ($MinimapChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapChunk_ = $MinimapChunk$Type;
}}
declare module "packages/xaero/common/events/$ClientEventsListener" {
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ClientEventsListener {

constructor()

public "handleRenderStatusEffectOverlay"(arg0: $GuiGraphics$Type): boolean
public "playerTickPost"(arg0: $XaeroMinimapSession$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEventsListener$Type = ($ClientEventsListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEventsListener_ = $ClientEventsListener$Type;
}}
declare module "packages/xaero/common/$HudMod" {
import {$FieldValidatorHolder, $FieldValidatorHolder$Type} from "packages/xaero/common/validator/$FieldValidatorHolder"
import {$PlatformContext, $PlatformContext$Type} from "packages/xaero/common/$PlatformContext"
import {$ClientEvents, $ClientEvents$Type} from "packages/xaero/common/events/$ClientEvents"
import {$HudIO, $HudIO$Type} from "packages/xaero/hud/io/$HudIO"
import {$InterfaceRenderer, $InterfaceRenderer$Type} from "packages/xaero/common/interfaces/render/$InterfaceRenderer"
import {$ClientEventsListener, $ClientEventsListener$Type} from "packages/xaero/common/events/$ClientEventsListener"
import {$PlayerTrackerSystemManager, $PlayerTrackerSystemManager$Type} from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategoryManager"
import {$WidgetScreenHandler, $WidgetScreenHandler$Type} from "packages/xaero/common/gui/widget/$WidgetScreenHandler"
import {$HudRenderer, $HudRenderer$Type} from "packages/xaero/hud/render/$HudRenderer"
import {$ServerPlayerTickHandler, $ServerPlayerTickHandler$Type} from "packages/xaero/common/server/player/$ServerPlayerTickHandler"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CommonEvents, $CommonEvents$Type} from "packages/xaero/common/events/$CommonEvents"
import {$WidgetLoadingHandler, $WidgetLoadingHandler$Type} from "packages/xaero/common/gui/widget/$WidgetLoadingHandler"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$ModCommonEvents, $ModCommonEvents$Type} from "packages/xaero/common/events/$ModCommonEvents"
import {$PatreonMod, $PatreonMod$Type} from "packages/xaero/common/patreon/$PatreonMod"
import {$CommonConfigIO, $CommonConfigIO$Type} from "packages/xaero/common/config/$CommonConfigIO"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$GuiHelper, $GuiHelper$Type} from "packages/xaero/common/gui/$GuiHelper"
import {$MinimapMessageHandler, $MinimapMessageHandler$Type} from "packages/xaero/common/message/$MinimapMessageHandler"
import {$SupportServerMods, $SupportServerMods$Type} from "packages/xaero/common/server/mods/$SupportServerMods"
import {$CommonConfig, $CommonConfig$Type} from "packages/xaero/common/config/$CommonConfig"
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"
import {$ModClientEvents, $ModClientEvents$Type} from "packages/xaero/common/events/$ModClientEvents"
import {$ControlsRegister, $ControlsRegister$Type} from "packages/xaero/common/controls/$ControlsRegister"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$InterfaceManager, $InterfaceManager$Type} from "packages/xaero/common/interfaces/$InterfaceManager"
import {$PlayerTrackerMinimapElementRenderer, $PlayerTrackerMinimapElementRenderer$Type} from "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementRenderer"
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$SupportMods, $SupportMods$Type} from "packages/xaero/common/mods/$SupportMods"

export class $HudMod implements $IXaeroMinimap {
static readonly "LOGGER": $Logger
static readonly "FAIRPLAY": boolean
static "INSTANCE": $HudMod
 "waypointsFile": $File
 "waypointsFolder": $File


public "getInterfaces"(): $InterfaceManager
public "getMessage"(): string
public "setSettings"(arg0: $ModSettings$Type): void
public "getSettings"(): $ModSettings
public "isStandalone"(): boolean
public "isOutdated"(): boolean
public "isLoadedClient"(): boolean
public "isLoadedServer"(): boolean
public "loadLater"(): void
public "loadServer"(): void
public "getPatreon"(): $PatreonMod
public "getVersionID"(): string
public "getSupportMods"(): $SupportMods
public "getWaypointsFolder"(): $File
public "getModEvents"(): $ModClientEvents
public "getWaypointsFile"(): $File
public "getWidgetLoader"(): $WidgetLoadingHandler
public "getFieldValidators"(): $FieldValidatorHolder
public "resetSettings"(): void
public "getNewestUpdateID"(): integer
public "getGuiHelper"(): $GuiHelper
public "getLatestVersion"(): string
public "setNewestUpdateID"(arg0: integer): void
public "setLatestVersion"(arg0: string): void
public "getModJAR"(): $File
public "setOutdated"(arg0: boolean): void
public "getMinimap"(): $Minimap
public "setCommonConfig"(arg0: $CommonConfig$Type): void
public "getHud"(): $Hud
public "getHudRenderer"(): $HudRenderer
public "isFairPlay"(): boolean
public "setCommonConfigIO"(arg0: $CommonConfigIO$Type): void
public "getPlatformContext"(): $PlatformContext
public "getModCommonEvents"(): $ModCommonEvents
public "getHudIO"(): $HudIO
public "tryLoadLater"(): void
public "getMessageHandler"(): $MinimapMessageHandler
public "getModClientEvents"(): $ModClientEvents
public "tryLoadLaterServer"(): void
public "getCommonConfigIO"(): $CommonConfigIO
public "setMessage"(arg0: string): void
public "getForgeEventHandlerListener"(): $ClientEventsListener
public "getControlsRegister"(): $ControlsRegister
public "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
public "getLatestVersionMD5"(): string
public "getWidgetScreenHandler"(): $WidgetScreenHandler
public "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
public "getInterfaceRenderer"(): $InterfaceRenderer
public "ensureControlsRegister"(): void
public "setLatestVersionMD5"(arg0: string): void
public "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
public "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
public "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$Type): void
public "getSupportServerMods"(): $SupportServerMods
public "getConfigFile"(): $File
public "getCommonEvents"(): $CommonEvents
public "getCommonConfig"(): $CommonConfig
public "getEvents"(): $ClientEvents
public "getModId"(): string
public "getFileLayoutID"(): string
public "getVersionsURL"(): string
public "getUpdateLink"(): string
public "createSession"(): $XaeroMinimapSession
public "getSettingsKey"(): any
get "interfaces"(): $InterfaceManager
get "message"(): string
set "settings"(value: $ModSettings$Type)
get "settings"(): $ModSettings
get "standalone"(): boolean
get "outdated"(): boolean
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "patreon"(): $PatreonMod
get "versionID"(): string
get "supportMods"(): $SupportMods
get "waypointsFolder"(): $File
get "modEvents"(): $ModClientEvents
get "waypointsFile"(): $File
get "widgetLoader"(): $WidgetLoadingHandler
get "fieldValidators"(): $FieldValidatorHolder
get "newestUpdateID"(): integer
get "guiHelper"(): $GuiHelper
get "latestVersion"(): string
set "newestUpdateID"(value: integer)
set "latestVersion"(value: string)
get "modJAR"(): $File
set "outdated"(value: boolean)
get "minimap"(): $Minimap
set "commonConfig"(value: $CommonConfig$Type)
get "hud"(): $Hud
get "hudRenderer"(): $HudRenderer
get "fairPlay"(): boolean
set "commonConfigIO"(value: $CommonConfigIO$Type)
get "platformContext"(): $PlatformContext
get "modCommonEvents"(): $ModCommonEvents
get "hudIO"(): $HudIO
get "messageHandler"(): $MinimapMessageHandler
get "modClientEvents"(): $ModClientEvents
get "commonConfigIO"(): $CommonConfigIO
set "message"(value: string)
get "forgeEventHandlerListener"(): $ClientEventsListener
get "controlsRegister"(): $ControlsRegister
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "latestVersionMD5"(): string
get "widgetScreenHandler"(): $WidgetScreenHandler
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "interfaceRenderer"(): $InterfaceRenderer
set "latestVersionMD5"(value: string)
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$Type)
get "supportServerMods"(): $SupportServerMods
get "configFile"(): $File
get "commonEvents"(): $CommonEvents
get "commonConfig"(): $CommonConfig
get "events"(): $ClientEvents
get "modId"(): string
get "fileLayoutID"(): string
get "versionsURL"(): string
get "updateLink"(): string
get "settingsKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudMod$Type = ($HudMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudMod_ = $HudMod$Type;
}}
declare module "packages/xaero/common/category/ui/$GuiCategoryUIEditorDataConverter" {
import {$ObjectCategory$Builder, $ObjectCategory$Builder$Type} from "packages/xaero/common/category/$ObjectCategory$Builder"
import {$GuiCategoryUIEditorCategoryData, $GuiCategoryUIEditorCategoryData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData"
import {$GuiCategoryUIEditorCategoryData$Builder, $GuiCategoryUIEditorCategoryData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData$Builder"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/common/category/$ObjectCategory"
import {$GuiCategoryUIEditorSettingsData$Builder, $GuiCategoryUIEditorSettingsData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData$Builder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiCategoryUIEditorSettingsData, $GuiCategoryUIEditorSettingsData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData"

export class $GuiCategoryUIEditorDataConverter<C extends $ObjectCategory<(any), (C)>, ED extends $GuiCategoryUIEditorCategoryData<(C), (SD), (ED)>, CB extends $ObjectCategory$Builder<(C), (CB)>, SD extends $GuiCategoryUIEditorSettingsData<(any)>, SDB extends $GuiCategoryUIEditorSettingsData$Builder<(SD), (SDB)>, EDB extends $GuiCategoryUIEditorCategoryData$Builder<(C), (ED), (SD), (SDB), (EDB)>> {

constructor(arg0: $Supplier$Type<(CB)>, arg1: $Supplier$Type<(EDB)>)

public "convert"(arg0: ED): C
public "convert"(arg0: C, arg1: boolean): ED
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorDataConverter$Type<C, ED, CB, SD, SDB, EDB> = ($GuiCategoryUIEditorDataConverter<(C), (ED), (CB), (SD), (SDB), (EDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorDataConverter_<C, ED, CB, SD, SDB, EDB> = $GuiCategoryUIEditorDataConverter$Type<(C), (ED), (CB), (SD), (SDB), (EDB)>;
}}
declare module "packages/xaero/common/category/ui/entry/widget/$CategorySettingsButton" {
import {$Tooltip, $Tooltip$Type} from "packages/net/minecraft/client/gui/components/$Tooltip"
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$IXaeroNarratableWidget, $IXaeroNarratableWidget$Type} from "packages/xaero/common/gui/$IXaeroNarratableWidget"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $CategorySettingsButton extends $Button implements $IXaeroNarratableWidget {
static readonly "SMALL_WIDTH": integer
static readonly "DEFAULT_WIDTH": integer
static readonly "DEFAULT_HEIGHT": integer
 "onPress": $Button$OnPress
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "height": integer
 "x": integer
 "y": integer
 "active": boolean
 "visible": boolean
 "tooltip": $Tooltip
 "tooltipMsDelay": integer
 "hoverOrFocusedStartTime": long
static readonly "UNSET_FG_COLOR": integer

constructor(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $Supplier$Type<(string)>, arg2: boolean, arg3: integer, arg4: integer, arg5: $Button$OnPress$Type, arg6: $GuiCategorySettings$SettingRowList$Type<>)

public "m_5646_"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsButton$Type = ($CategorySettingsButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsButton_ = $CategorySettingsButton$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData$Builder" {
import {$GuiCategoryUIEditorExpandableData$Builder, $GuiCategoryUIEditorExpandableData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData$Builder"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"

export class $GuiCategoryUIEditorOptionData$Builder<V> extends $GuiCategoryUIEditorExpandableData$Builder<($GuiCategoryUIEditorExpandableData<(any)>), ($GuiCategoryUIEditorOptionData$Builder<(V)>)> {

constructor()

public static "getDefault"<V>(): $GuiCategoryUIEditorOptionData$Builder<(V)>
public "setValue"(arg0: V): $GuiCategoryUIEditorOptionData$Builder<(V)>
public "setDefault"(): $GuiCategoryUIEditorOptionData$Builder<(V)>
public "setDisplayName"(arg0: string): $GuiCategoryUIEditorOptionData$Builder<(V)>
get "default"(): $GuiCategoryUIEditorOptionData$Builder<(V)>
set "value"(value: V)
set "displayName"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorOptionData$Builder$Type<V> = ($GuiCategoryUIEditorOptionData$Builder<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorOptionData$Builder_<V> = $GuiCategoryUIEditorOptionData$Builder$Type<(V)>;
}}
declare module "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$Type} from "packages/xaero/common/message/basic/$ClientboundRulesPacket"

export class $MinimapClientWorldData {
 "serverLevelId": integer
 "shadowR": float
 "shadowG": float
 "shadowB": float

constructor(arg0: $ClientLevel$Type)

public "getSyncedRules"(): $ClientboundRulesPacket
public "setServerModNetworkVersion"(arg0: integer): void
public "getServerModNetworkVersion"(): integer
public "setSyncedRules"(arg0: $ClientboundRulesPacket$Type): void
get "syncedRules"(): $ClientboundRulesPacket
set "serverModNetworkVersion"(value: integer)
get "serverModNetworkVersion"(): integer
set "syncedRules"(value: $ClientboundRulesPacket$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapClientWorldData$Type = ($MinimapClientWorldData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapClientWorldData_ = $MinimapClientWorldData$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier" {
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategoryUIEditorOptionsData, $GuiCategoryUIEditorOptionsData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData"

export interface $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier {

 "get"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorOptionsData$Type<(any)>): boolean

(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorOptionsData$Type<(any)>): boolean
}

export namespace $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier$Type = ($GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier_ = $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier$Type;
}}
declare module "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntry" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$CategorySettingsListEntry, $CategorySettingsListEntry$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListEntry"
import {$ConnectionLineType, $ConnectionLineType$Type} from "packages/xaero/common/category/ui/entry/$ConnectionLineType"
import {$CategorySettingsListMainEntry$CenteredEntryFactory, $CategorySettingsListMainEntry$CenteredEntryFactory$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntry$CenteredEntryFactory"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CategorySettingsListMainEntry<D extends $GuiCategoryUIEditorExpandableData<(any)>> extends $CategorySettingsListEntry {

constructor(arg0: integer, arg1: integer, arg2: $GuiCategorySettings$SettingRowList$Type<>, arg3: $ConnectionLineType$Type, arg4: $GuiCategoryUIEditorExpandableData$Type<(D)>)

public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: float, arg8: $Font$Type, arg9: integer, arg10: integer, arg11: boolean, arg12: boolean): $CategorySettingsListEntry
public "withSubEntry"(arg0: $CategorySettingsListMainEntry$CenteredEntryFactory$Type): $CategorySettingsListMainEntry<(D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsListMainEntry$Type<D> = ($CategorySettingsListMainEntry<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsListMainEntry_<D> = $CategorySettingsListMainEntry$Type<(D)>;
}}
declare module "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntryFactory" {
import {$CategorySettingsListMainEntry, $CategorySettingsListMainEntry$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntry"
import {$ConnectionLineType, $ConnectionLineType$Type} from "packages/xaero/common/category/ui/entry/$ConnectionLineType"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"

export interface $CategorySettingsListMainEntryFactory {

 "get"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg2: integer, arg3: $ConnectionLineType$Type, arg4: $GuiCategorySettings$SettingRowList$Type<>, arg5: integer, arg6: boolean): $CategorySettingsListMainEntry<(any)>

(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg2: integer, arg3: $ConnectionLineType$Type, arg4: $GuiCategorySettings$SettingRowList$Type<>, arg5: integer, arg6: boolean): $CategorySettingsListMainEntry<(any)>
}

export namespace $CategorySettingsListMainEntryFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsListMainEntryFactory$Type = ($CategorySettingsListMainEntryFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsListMainEntryFactory_ = $CategorySettingsListMainEntryFactory$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager" {
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $WaypointWorldConnectionManager {

constructor()

public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$Type): void
public "isConnected"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): boolean
public "swapConnections"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): void
public "renameDimension"(arg0: string, arg1: string): void
public "removeConnection"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): void
public "addConnection"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldConnectionManager$Type = ($WaypointWorldConnectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldConnectionManager_ = $WaypointWorldConnectionManager$Type;
}}
declare module "packages/xaero/common/category/rule/resolver/$ObjectCategoryRuleResolver" {
import {$FilterObjectCategory, $FilterObjectCategory$Type} from "packages/xaero/common/category/$FilterObjectCategory"

export class $ObjectCategoryRuleResolver {


public "resolve"<E, P, C extends $FilterObjectCategory<(E), (P), (any), (C)>>(arg0: C, arg1: E, arg2: P): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryRuleResolver$Type = ($ObjectCategoryRuleResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryRuleResolver_ = $ObjectCategoryRuleResolver$Type;
}}
declare module "packages/xaero/common/effect/$NoCaveMapsEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoCaveMapsEffect extends $MinimapStatusEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCaveMapsEffect$Type = ($NoCaveMapsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoCaveMapsEffect_ = $NoCaveMapsEffect$Type;
}}
declare module "packages/xaero/common/minimap/info/$InfoDisplayManager" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"

export class $InfoDisplayManager {

constructor()

public "add"(arg0: $InfoDisplay$Type<(any)>): void
public "get"(arg0: string): $InfoDisplay<(any)>
public "reset"(): void
public "getCount"(): integer
public "getStream"(): $Stream<($InfoDisplay<(any)>)>
public "setOrder"(arg0: $List$Type<(string)>): void
get "count"(): integer
get "stream"(): $Stream<($InfoDisplay<(any)>)>
set "order"(value: $List$Type<(string)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayManager$Type = ($InfoDisplayManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayManager_ = $InfoDisplayManager$Type;
}}
declare module "packages/xaero/common/category/ui/setting/$CategorySettingsUIEditorSettingType$SettingDataBuilderFactory" {
import {$IGuiCategoryUIEditorSettingDataBuilder, $IGuiCategoryUIEditorSettingDataBuilder$Type} from "packages/xaero/common/category/ui/data/options/range/setting/$IGuiCategoryUIEditorSettingDataBuilder"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"

export interface $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory {

 "apply"<V>(arg0: $ListFactory$Type): $IGuiCategoryUIEditorSettingDataBuilder<(V), (any)>

(arg0: $ListFactory$Type): $IGuiCategoryUIEditorSettingDataBuilder<(V), (any)>
}

export namespace $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory$Type = ($CategorySettingsUIEditorSettingType$SettingDataBuilderFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory_ = $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory$Type;
}}
declare module "packages/xaero/common/gui/$GuiSettings" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$WidgetScreen, $WidgetScreen$Type} from "packages/xaero/common/gui/widget/$WidgetScreen"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenBase, $ScreenBase$Type} from "packages/xaero/common/gui/$ScreenBase"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ISettingEntry, $ISettingEntry$Type} from "packages/xaero/common/gui/$ISettingEntry"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $GuiSettings extends $ScreenBase implements $WidgetScreen {
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $IXaeroMinimap$Type, arg1: $Component$Type, arg2: $Screen$Type, arg3: $Screen$Type)

public "getIndex"(arg0: $GuiEventListener$Type): integer
public "restoreFocus"(arg0: integer): void
public "setShouldSaveRadar"(): void
public "getEntriesCopy"(): ($ISettingEntry)[]
public "addButtonVisible"(arg0: $AbstractWidget$Type): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "m_7856_"(): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getScreen"<S extends ($Screen) & ($WidgetScreen)>(): S
public "tick"(): void
get "entriesCopy"(): ($ISettingEntry)[]
get "screen"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSettings$Type = ($GuiSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSettings_ = $GuiSettings$Type;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData$Builder" {
import {$CategorySettingsListMainEntryFactory, $CategorySettingsListMainEntryFactory$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntryFactory"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $GuiCategoryUIEditorExpandableData$Builder<SE extends $GuiCategoryUIEditorExpandableData<(any)>, B extends $GuiCategoryUIEditorExpandableData$Builder<(SE), (B)>> {


public "build"(): $GuiCategoryUIEditorExpandableData<(SE)>
public "setDefault"(): B
public "setTooltipSupplier"(arg0: $BiFunction$Type<($GuiCategoryUIEditorExpandableData$Type<(any)>), ($GuiCategoryUIEditorExpandableData$Type<(SE)>), ($Supplier$Type<($CursorBox$Type)>)>): B
public "setMovable"(arg0: boolean): B
public "setListEntryFactory"(arg0: $CategorySettingsListMainEntryFactory$Type): B
set "tooltipSupplier"(value: $BiFunction$Type<($GuiCategoryUIEditorExpandableData$Type<(any)>), ($GuiCategoryUIEditorExpandableData$Type<(SE)>), ($Supplier$Type<($CursorBox$Type)>)>)
set "movable"(value: boolean)
set "listEntryFactory"(value: $CategorySettingsListMainEntryFactory$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorExpandableData$Builder$Type<SE, B> = ($GuiCategoryUIEditorExpandableData$Builder<(SE), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorExpandableData$Builder_<SE, B> = $GuiCategoryUIEditorExpandableData$Builder$Type<(SE), (B)>;
}}
declare module "packages/xaero/common/minimap/radar/category/$EntityRadarDefaultCategories" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"

export class $EntityRadarDefaultCategories {

constructor()

public "setupDefault"(arg0: $ModSettings$Type): $EntityRadarCategory
set "upDefault"(value: $ModSettings$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarDefaultCategories$Type = ($EntityRadarDefaultCategories);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarDefaultCategories_ = $EntityRadarDefaultCategories$Type;
}}
declare module "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $InfoDisplayRenderer {

constructor()

public "render"(arg0: $GuiGraphics$Type, arg1: $XaeroMinimapSession$Type, arg2: $MinimapProcessor$Type, arg3: $Minimap$Type, arg4: $MinimapRendererHelper$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: double, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: $BlockPos$Type, arg15: integer, arg16: integer, arg17: float, arg18: $ModSettings$Type, arg19: $MultiBufferSource$BufferSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayRenderer$Type = ($InfoDisplayRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayRenderer_ = $InfoDisplayRenderer$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData$Builder" {
import {$GuiCategoryUIEditorExpandableData$Builder, $GuiCategoryUIEditorExpandableData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData$Builder"
import {$GuiCategoryUIEditorOptionData, $GuiCategoryUIEditorOptionData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData"
import {$GuiCategoryUIEditorOptionsData, $GuiCategoryUIEditorOptionsData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData"
import {$GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier, $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier"

export class $GuiCategoryUIEditorOptionsData$Builder<V, B extends $GuiCategoryUIEditorOptionsData$Builder<(V), (B)>> extends $GuiCategoryUIEditorExpandableData$Builder<($GuiCategoryUIEditorOptionData<(V)>), (B)> {


public "build"(): $GuiCategoryUIEditorOptionsData<(V)>
public "setDefault"(): B
public "setIsActiveSupplier"(arg0: $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier$Type): B
public "setCurrentValue"(arg0: V): B
public "setDisplayName"(arg0: string): B
set "isActiveSupplier"(value: $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier$Type)
set "currentValue"(value: V)
set "displayName"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorOptionsData$Builder$Type<V, B> = ($GuiCategoryUIEditorOptionsData$Builder<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorOptionsData$Builder_<V, B> = $GuiCategoryUIEditorOptionsData$Builder$Type<(V), (B)>;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback" {
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$GuiCategoryUIEditorSimpleButtonData, $GuiCategoryUIEditorSimpleButtonData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData"

export interface $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback {

 "onButtonPress"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type, arg2: $GuiCategorySettings$SettingRowList$Type<>): void

(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>, arg1: $GuiCategoryUIEditorSimpleButtonData$Type, arg2: $GuiCategorySettings$SettingRowList$Type<>): void
}

export namespace $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback$Type = ($GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback_ = $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback$Type;
}}
declare module "packages/xaero/common/misc/$ListFactory" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ListFactory {

 "get"<T>(): $List<(T)>

(): $List<(T)>
}

export namespace $ListFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListFactory$Type = ($ListFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListFactory_ = $ListFactory$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapRenderer" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$CompassRenderer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$WaypointsGuiRenderer, $WaypointsGuiRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type, arg2: $WaypointsGuiRenderer$Type, arg3: $Minimap$Type, arg4: $CompassRenderer$Type)

public "getLastPlayerDimDiv"(): double
public "getRenderAngle"(arg0: boolean): double
public "renderMinimap"(arg0: $XaeroMinimapSession$Type, arg1: $GuiGraphics$Type, arg2: $MinimapProcessor$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: double, arg8: integer, arg9: float, arg10: $CustomVertexConsumers$Type): void
public "getSunBrightness"(arg0: $MinimapProcessor$Type, arg1: boolean): float
public "getHelper"(): $MinimapRendererHelper
public "setZoom"(arg0: double): void
public "getZoom"(): double
get "lastPlayerDimDiv"(): double
get "helper"(): $MinimapRendererHelper
set "zoom"(value: double)
get "zoom"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRenderer$Type = ($MinimapRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRenderer_ = $MinimapRenderer$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/text/$GuiCategoryUIEditorTextFieldOptionsData$Builder" {
import {$GuiCategoryUIEditorExpandingOptionsData$Builder, $GuiCategoryUIEditorExpandingOptionsData$Builder$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorExpandingOptionsData$Builder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$GuiCategoryUIEditorTextFieldOptionsData, $GuiCategoryUIEditorTextFieldOptionsData$Type} from "packages/xaero/common/category/ui/data/options/text/$GuiCategoryUIEditorTextFieldOptionsData"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"

export class $GuiCategoryUIEditorTextFieldOptionsData$Builder extends $GuiCategoryUIEditorExpandingOptionsData$Builder<(string), ($GuiCategoryUIEditorTextFieldOptionsData$Builder)> {


public "build"(): $GuiCategoryUIEditorTextFieldOptionsData
public static "getDefault"(arg0: $ListFactory$Type): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "setInput"(arg0: string): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "setMaxLength"(arg0: integer): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "setCurrentValue"(arg0: string): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "setAutoConfirm"(arg0: boolean): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "setInputStringValidator"(arg0: $Predicate$Type<(string)>): $GuiCategoryUIEditorTextFieldOptionsData$Builder
public "needsInputStringValidator"(): boolean
public "setAllowCustomInput"(arg0: boolean): $GuiCategoryUIEditorTextFieldOptionsData$Builder
set "input"(value: string)
set "maxLength"(value: integer)
set "currentValue"(value: string)
set "autoConfirm"(value: boolean)
set "inputStringValidator"(value: $Predicate$Type<(string)>)
set "allowCustomInput"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorTextFieldOptionsData$Builder$Type = ($GuiCategoryUIEditorTextFieldOptionsData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorTextFieldOptionsData$Builder_ = $GuiCategoryUIEditorTextFieldOptionsData$Builder$Type;
}}
declare module "packages/xaero/common/minimap/radar/category/$EntityRadarBackwardsCompatibilityConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EntityRadarBackwardsCompatibilityConfig {
 "entityAmount": integer
 "showPlayers": boolean
 "showHostile": boolean
 "showMobs": boolean
 "showItems": boolean
 "showOther": boolean
 "showOtherTeam": boolean
 "showTamed": boolean
 "playersColor": integer
 "mobsColor": integer
 "hostileColor": integer
 "itemsColor": integer
 "otherColor": integer
 "otherTeamColor": integer
 "tamedMobsColor": integer
 "dotsSize": integer
 "headsScale": double
 "showEntityHeight": boolean
 "playerIcons": integer
 "mobIcons": integer
 "hostileIcons": integer
 "tamedIcons": integer
 "heightLimit": integer
 "playerNames": integer
 "otherTeamsNames": integer
 "friendlyMobNames": integer
 "hostileMobNames": integer
 "itemNames": integer
 "otherNames": integer
 "tamedMobNames": integer
 "alwaysEntityNametags": boolean
 "itemFramesOnRadar": boolean
 "displayNameWhenIconFails": boolean

constructor()

public "readSetting"(arg0: (string)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarBackwardsCompatibilityConfig$Type = ($EntityRadarBackwardsCompatibilityConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarBackwardsCompatibilityConfig_ = $EntityRadarBackwardsCompatibilityConfig$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SyncedTrackedPlayer {

constructor(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>)

public "update"(arg0: $Player$Type): void
public "getId"(): $UUID
public "copyFrom"(arg0: $SyncedTrackedPlayer$Type): void
/**
 * 
 * @deprecated
 */
public "getDimension"(): $ResourceLocation
public "getY"(): double
public "setPos"(arg0: double, arg1: double, arg2: double): $SyncedTrackedPlayer
public "getDimensionKey"(): $ResourceKey<($Level)>
public "getX"(): double
public "getZ"(): double
public "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $SyncedTrackedPlayer
public "matchesEnough"(arg0: $Player$Type, arg1: double): boolean
get "id"(): $UUID
get "dimension"(): $ResourceLocation
get "y"(): double
get "dimensionKey"(): $ResourceKey<($Level)>
get "x"(): double
get "z"(): double
set "dimension"(value: $ResourceKey$Type<($Level$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedTrackedPlayer$Type = ($SyncedTrackedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedTrackedPlayer_ = $SyncedTrackedPlayer$Type;
}}
declare module "packages/xaero/common/patreon/$PatreonMod" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $PatreonMod {
 "fileLayoutID": string
 "latestVersionLayout": string
 "changelogLink": string
 "modName": string
 "modJar": $File
 "currentVersion": string
 "latestVersion": string
 "md5": string
 "onVersionIgnore": $Runnable

constructor(arg0: string, arg1: string, arg2: string, arg3: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatreonMod$Type = ($PatreonMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatreonMod_ = $PatreonMod$Type;
}}
declare module "packages/xaero/common/minimap/write/$MinimapWriter" {
import {$MinimapTile, $MinimapTile$Type} from "packages/xaero/common/minimap/region/$MinimapTile"
import {$MinimapChunk, $MinimapChunk$Type} from "packages/xaero/common/minimap/region/$MinimapChunk"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MinimapWriterHelper, $MinimapWriterHelper$Type} from "packages/xaero/common/minimap/write/$MinimapWriterHelper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/common/cache/$BlockStateShortShapeCache"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MinimapWriter {
static readonly "SUN_MINIMUM": integer
static readonly "NO_Y_VALUE": integer
 "loadingLightOverlayType": integer
 "loadingLightOverlayMaxLight": integer
 "loadingLightOverlayMinLight": integer
 "loadingLightOverlayColor": integer
 "loadedLightOverlayType": integer
 "loadedLightOverlayMaxLight": integer
 "loadedLightOverlayMinLight": integer
 "loadedLightOverlayColor": integer
 "writeFreeSinceLastWrite": long
 "debugTotalTime": boolean
 "minTime": long
 "maxTime": long
 "totalTime": long
 "totalRuns": long
 "lastDebugTime": long
 "minTimeDebug": long
 "maxTimeDebug": long
 "averageTimeDebug": long

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: $BlockStateShortShapeCache$Type, arg3: $HighlighterRegistry$Type)

public "cleanup"(): void
public "getUpdateRadiusInChunks"(): integer
public "setupDimensionHighlightHandler"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getLoadingSideInChunks"(): integer
public "setClearBlockColours"(arg0: boolean): void
public "getLoadingMapChunkZ"(): integer
public "isLoadedNonWorldMap"(): boolean
public "getDimensionHighlightHandler"(): $DimensionHighlighterHandler
public "getLoadedSideInChunks"(): integer
public "getSectionBasedHeight"(arg0: $LevelChunk$Type, arg1: integer): integer
public "getLoadingMapChunkX"(): integer
public "getFixedSkyLightBlockBrightness"(arg0: float, arg1: float, arg2: integer): float
public "onRender"(): void
public "getLoadSide"(): integer
public "getMapCoord"(arg0: integer, arg1: integer): integer
public "getBlockBrightness"(arg0: float, arg1: integer, arg2: integer, arg3: integer): float
public "loadBlockColor"(arg0: integer, arg1: $Level$Type, arg2: integer, arg3: integer, arg4: $LevelChunk$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Heightmap$Types$Type, arg11: $MinimapTile$Type, arg12: $MinimapChunk$Type, arg13: $MinimapChunk$Type, arg14: $MinimapChunk$Type, arg15: $MinimapChunk$Type, arg16: float, arg17: float, arg18: float, arg19: boolean, arg20: boolean, arg21: integer, arg22: integer, arg23: integer, arg24: boolean, arg25: integer, arg26: integer, arg27: boolean, arg28: float, arg29: integer, arg30: boolean, arg31: $List$Type<(integer)>, arg32: $List$Type<($BlockState$Type)>, arg33: $List$Type<(integer)>, arg34: (integer)[], arg35: (integer)[], arg36: (integer)[], arg37: (float)[], arg38: (float)[], arg39: (integer)[], arg40: (integer)[], arg41: (integer)[], arg42: (integer)[], arg43: boolean, arg44: integer, arg45: $BlockPos$MutableBlockPos$Type, arg46: $BlockPos$MutableBlockPos$Type, arg47: long, arg48: integer, arg49: $IXaeroMinimap$Type, arg50: $MinimapWriterHelper$Type, arg51: integer, arg52: boolean, arg53: boolean, arg54: integer, arg55: integer, arg56: integer, arg57: integer, arg58: boolean, arg59: boolean, arg60: boolean, arg61: boolean, arg62: $BlockPos$MutableBlockPos$Type, arg63: boolean): $MinimapTile
public "findBlock"(arg0: $Level$Type, arg1: $LevelChunk$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: $BlockPos$MutableBlockPos$Type, arg9: $BlockPos$MutableBlockPos$Type, arg10: integer, arg11: boolean, arg12: $List$Type<(integer)>, arg13: $List$Type<($BlockState$Type)>, arg14: integer, arg15: boolean, arg16: $List$Type<(integer)>, arg17: boolean, arg18: boolean, arg19: $BlockPos$MutableBlockPos$Type, arg20: boolean): $Block
public "getLoadedCaving"(): integer
public "getLoadedMapChunkX"(): integer
public "getLoadedBlocks"(): (($MinimapChunk)[])[]
public "getLoadedMapChunkZ"(): integer
public "resetShortBlocks"(): void
public "getLoadedLevels"(): integer
get "updateRadiusInChunks"(): integer
set "upDimensionHighlightHandler"(value: $ResourceKey$Type<($Level$Type)>)
get "loadingSideInChunks"(): integer
set "clearBlockColours"(value: boolean)
get "loadingMapChunkZ"(): integer
get "loadedNonWorldMap"(): boolean
get "dimensionHighlightHandler"(): $DimensionHighlighterHandler
get "loadedSideInChunks"(): integer
get "loadingMapChunkX"(): integer
get "loadSide"(): integer
get "loadedCaving"(): integer
get "loadedMapChunkX"(): integer
get "loadedBlocks"(): (($MinimapChunk)[])[]
get "loadedMapChunkZ"(): integer
get "loadedLevels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWriter$Type = ($MinimapWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWriter_ = $MinimapWriter$Type;
}}
declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $MultiTextureRenderTypeRenderer {


public "begin"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type, arg2: integer): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRenderer$Type = ($MultiTextureRenderTypeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRenderer_ = $MultiTextureRenderTypeRenderer$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElement" {
import {$IPlayerTrackerSystem, $IPlayerTrackerSystem$Type} from "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerTrackerMinimapElement<P> {

constructor(arg0: P, arg1: $IPlayerTrackerSystem$Type<(P)>)

public "getPlayer"(): P
public "getDimension"(): $ResourceKey<($Level)>
public "getY"(): double
public "getX"(): double
public "getZ"(): double
public "getPlayerId"(): $UUID
public "wasRenderedOnRadar"(): boolean
public "setRenderedOnRadar"(arg0: boolean): void
get "player"(): P
get "dimension"(): $ResourceKey<($Level)>
get "y"(): double
get "x"(): double
get "z"(): double
get "playerId"(): $UUID
set "renderedOnRadar"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElement$Type<P> = ($PlayerTrackerMinimapElement<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElement_<P> = $PlayerTrackerMinimapElement$Type<(P)>;
}}
declare module "packages/xaero/common/mods/$SupportXaeroWorldmap" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$RadarRenderer, $RadarRenderer$Type} from "packages/xaero/common/minimap/render/radar/element/$RadarRenderer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $SupportXaeroWorldmap {
static "WORLDMAP_COMPATIBILITY_VERSION": integer
static readonly "MINIMAP_MW": string
 "compatibilityVersion": integer
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type)

public "getClaimsBorderOpacity"(): integer
public "registerHighlighters"(arg0: $HighlighterRegistry$Type): void
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "isStainedGlassDisplayed"(): boolean
public "shouldPreventAutoCaveMode"(arg0: $Level$Type): boolean
public "caveLayersAreUsable"(): boolean
public "shouldAlwaysInitEffects"(): boolean
public "getWorldMapTerrainDepth"(): boolean
public "getWorldMapTerrainSlopes"(): integer
public "getWorldMapBiomeColorsVanillaMode"(): boolean
public "getWorldMapIgnoreHeightmaps"(): boolean
public "isLegibleCaveMaps"(): boolean
public "getBiomeBlending"(): boolean
public "getManualCaveStart"(): integer
public "drawMinimap"(arg0: $XaeroMinimapSession$Type, arg1: $PoseStack$Type, arg2: $MinimapRendererHelper$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: double, arg11: double, arg12: $VertexConsumer$Type, arg13: $MultiTextureRenderTypeRendererProvider$Type): void
public "renderSlimeChunks"(arg0: $MapTileChunk$Type, arg1: long, arg2: integer, arg3: integer, arg4: $PoseStack$Type, arg5: $MinimapRendererHelper$Type, arg6: $VertexConsumer$Type): void
public "bumpLoadedRegion"(arg0: $MapProcessor$Type, arg1: $MapRegion$Type): void
public "getMultiworldIds"(arg0: $ResourceKey$Type<($Level$Type)>): $List<(string)>
public "toggleChunkClaims"(): void
public "getCaveModeType"(): integer
public "isMultiplayerMap"(): boolean
public "getWorldMapColours"(): integer
public "getWorldMapFlowers"(): boolean
public "getDisplayClaims"(): boolean
public "getCaveModeDepth"(): integer
public "getClaimsFillOpacity"(): integer
public "getPartialYTeleport"(): boolean
public "openSettings"(): void
public "getMapDimension"(): $ResourceKey<($Level)>
public "openScreenForOption"(arg0: $ModOptions$Type): void
public "getMinimapBrightness"(): float
public "hasDimensionSwitching"(): boolean
public "tryToGetMultiworldId"(arg0: $ResourceKey$Type<($Level$Type)>): string
public "prepareMapTexturedRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: $MapTileChunk$Type, arg8: $MultiTextureRenderTypeRenderer$Type, arg9: $MultiTextureRenderTypeRenderer$Type, arg10: $MinimapRendererHelper$Type): void
public "getWorldMapWaypoints"(): boolean
public "getPotentialMultiworldIds"(arg0: $ResourceKey$Type<($Level$Type)>): $List<(string)>
public "tryToGetMultiworldName"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: string): string
public "hasTrackedPlayerSystemSupport"(): boolean
public "worldMapIsRenderingRadar"(): boolean
public "hasEnabledCaveLayers"(): boolean
public "createRadarRenderWrapper"(arg0: $RadarRenderer$Type): void
public "getMapDimensionScale"(): double
public "supportsPacPlayerRadarFilter"(): boolean
public "confirmPlayerRadarRender"(arg0: $Player$Type): void
public "screenShouldSkipWorldRender"(arg0: $Screen$Type): boolean
get "claimsBorderOpacity"(): integer
get "adjustHeightForCarpetLikeBlocks"(): boolean
get "stainedGlassDisplayed"(): boolean
get "worldMapTerrainDepth"(): boolean
get "worldMapTerrainSlopes"(): integer
get "worldMapBiomeColorsVanillaMode"(): boolean
get "worldMapIgnoreHeightmaps"(): boolean
get "legibleCaveMaps"(): boolean
get "biomeBlending"(): boolean
get "manualCaveStart"(): integer
get "caveModeType"(): integer
get "multiplayerMap"(): boolean
get "worldMapColours"(): integer
get "worldMapFlowers"(): boolean
get "displayClaims"(): boolean
get "caveModeDepth"(): integer
get "claimsFillOpacity"(): integer
get "partialYTeleport"(): boolean
get "mapDimension"(): $ResourceKey<($Level)>
get "minimapBrightness"(): float
get "worldMapWaypoints"(): boolean
get "mapDimensionScale"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportXaeroWorldmap$Type = ($SupportXaeroWorldmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportXaeroWorldmap_ = $SupportXaeroWorldmap$Type;
}}
declare module "packages/xaero/common/minimap/radar/$MinimapRadar" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$MinimapRadarList, $MinimapRadarList$Type} from "packages/xaero/common/minimap/radar/$MinimapRadarList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategoryManager"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapRadar {
static readonly "radarPlayers": integer
static readonly "radarShadow": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: $EntityRadarCategoryManager$Type)

public "getEntityX"(arg0: $Entity$Type, arg1: float): double
public "getEntityColour"(arg0: $Player$Type, arg1: $Entity$Type, arg2: float, arg3: boolean, arg4: $EntityRadarCategory$Type, arg5: integer, arg6: integer, arg7: boolean, arg8: integer): integer
public "getEntityZ"(arg0: $Entity$Type, arg1: float): double
public "updateRadar"(arg0: $ClientLevel$Type, arg1: $Player$Type, arg2: $Entity$Type, arg3: $MinimapProcessor$Type): void
public "getTeamColour"(arg0: $Entity$Type): integer
public "getMaxDistance"(arg0: $MinimapProcessor$Type, arg1: boolean): double
public "setLastRenderViewEntity"(arg0: $Entity$Type): void
public "getEntityCategoryManager"(): $EntityRadarCategoryManager
public "getEntityBrightness"(arg0: float, arg1: integer, arg2: integer, arg3: boolean): float
public "getRadarListsIterator"(): $Iterator<($MinimapRadarList)>
public "getEntityY"(arg0: $Entity$Type, arg1: float): double
set "lastRenderViewEntity"(value: $Entity$Type)
get "entityCategoryManager"(): $EntityRadarCategoryManager
get "radarListsIterator"(): $Iterator<($MinimapRadarList)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRadar$Type = ($MinimapRadar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRadar_ = $MinimapRadar$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$Builder" {
import {$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier, $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier"
import {$GuiCategoryUIEditorExpandableData$Builder, $GuiCategoryUIEditorExpandableData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData$Builder"
import {$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier, $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier"
import {$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback, $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategoryUIEditorSimpleButtonData, $GuiCategoryUIEditorSimpleButtonData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorSimpleButtonData"

export class $GuiCategoryUIEditorSimpleButtonData$Builder extends $GuiCategoryUIEditorExpandableData$Builder<($GuiCategoryUIEditorExpandableData<(any)>), ($GuiCategoryUIEditorSimpleButtonData$Builder)> {

constructor()

public "build"(): $GuiCategoryUIEditorSimpleButtonData
public static "getDefault"(): $GuiCategoryUIEditorSimpleButtonData$Builder
public "setDefault"(): $GuiCategoryUIEditorSimpleButtonData$Builder
public "setIsActiveSupplier"(arg0: $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier$Type): $GuiCategoryUIEditorSimpleButtonData$Builder
public "setMessageSupplier"(arg0: $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier$Type): $GuiCategoryUIEditorSimpleButtonData$Builder
public "setDisplayName"(arg0: string): $GuiCategoryUIEditorSimpleButtonData$Builder
public "setCallback"(arg0: $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback$Type): $GuiCategoryUIEditorSimpleButtonData$Builder
get "default"(): $GuiCategoryUIEditorSimpleButtonData$Builder
set "isActiveSupplier"(value: $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonIsActiveSupplier$Type)
set "messageSupplier"(value: $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonMessageSupplier$Type)
set "displayName"(value: string)
set "callback"(value: $GuiCategoryUIEditorSimpleButtonData$ISimpleButtonCallback$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSimpleButtonData$Builder$Type = ($GuiCategoryUIEditorSimpleButtonData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSimpleButtonData$Builder_ = $GuiCategoryUIEditorSimpleButtonData$Builder$Type;
}}
declare module "packages/xaero/common/$XaeroMinimapSession" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$ControlsHandler, $ControlsHandler$Type} from "packages/xaero/common/controls/$ControlsHandler"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$KeyEventHandler, $KeyEventHandler$Type} from "packages/xaero/common/controls/event/$KeyEventHandler"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$HudSession, $HudSession$Type} from "packages/xaero/hud/$HudSession"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$WaypointSharingHandler, $WaypointSharingHandler$Type} from "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler"

/**
 * 
 * @deprecated
 */
export class $XaeroMinimapSession extends $HudSession {

constructor(arg0: $HudMod$Type)

public "init"(arg0: $ClientPacketListener$Type): void
public static "getCurrentSession"(): $XaeroMinimapSession
public "getWaypointsManager"(): $WaypointsManager
public "getMinimapProcessor"(): $MinimapProcessor
public static "getForPlayer"(arg0: $LocalPlayer$Type): $XaeroMinimapSession
public "getWaypointSharing"(): $WaypointSharingHandler
public "getControls"(): $ControlsHandler
public "getModMain"(): $IXaeroMinimap
public "getKeyEventHandler"(): $KeyEventHandler
get "currentSession"(): $XaeroMinimapSession
get "waypointsManager"(): $WaypointsManager
get "minimapProcessor"(): $MinimapProcessor
get "waypointSharing"(): $WaypointSharingHandler
get "controls"(): $ControlsHandler
get "modMain"(): $IXaeroMinimap
get "keyEventHandler"(): $KeyEventHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroMinimapSession$Type = ($XaeroMinimapSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XaeroMinimapSession_ = $XaeroMinimapSession$Type;
}}
declare module "packages/xaero/common/validator/$WaypointCoordinateFieldValidator" {
import {$NumericFieldValidator, $NumericFieldValidator$Type} from "packages/xaero/common/validator/$NumericFieldValidator"

export class $WaypointCoordinateFieldValidator extends $NumericFieldValidator {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointCoordinateFieldValidator$Type = ($WaypointCoordinateFieldValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointCoordinateFieldValidator_ = $WaypointCoordinateFieldValidator$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointSet" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"

export class $WaypointSet {

constructor(arg0: string)

public "getName"(): string
public "getList"(): $ArrayList<($Waypoint)>
get "name"(): string
get "list"(): $ArrayList<($Waypoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSet$Type = ($WaypointSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointSet_ = $WaypointSet$Type;
}}
declare module "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler" {
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MinimapWriter, $MinimapWriter$Type} from "packages/xaero/common/minimap/write/$MinimapWriter"
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

export class $DimensionHighlighterHandler {

constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $HighlighterRegistry$Type, arg2: $MinimapWriter$Type)

public "getVersion"(): integer
public "applyChunkHighlightColors"(arg0: integer, arg1: integer): (integer)[]
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
public "requestRefresh"(arg0: integer, arg1: integer): void
public "requestRefresh"(): void
public "shouldApplyRegionHighlights"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "addBlockHighlightTooltips"(arg0: $InfoDisplayCompiler$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
get "version"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionHighlighterHandler$Type = ($DimensionHighlighterHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionHighlighterHandler_ = $DimensionHighlighterHandler$Type;
}}
declare module "packages/xaero/common/$PlatformContext" {
import {$ClientEvents, $ClientEvents$Type} from "packages/xaero/common/events/$ClientEvents"
import {$MinimapMessageHandler, $MinimapMessageHandler$Type} from "packages/xaero/common/message/$MinimapMessageHandler"
import {$MinimapWriter, $MinimapWriter$Type} from "packages/xaero/common/minimap/write/$MinimapWriter"
import {$PlatformContextLoaderClientOnly, $PlatformContextLoaderClientOnly$Type} from "packages/xaero/common/$PlatformContextLoaderClientOnly"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$ModClientEvents, $ModClientEvents$Type} from "packages/xaero/common/events/$ModClientEvents"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/common/cache/$BlockStateShortShapeCache"
import {$CommonEvents, $CommonEvents$Type} from "packages/xaero/common/events/$CommonEvents"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$PlatformContextLoaderCommon, $PlatformContextLoaderCommon$Type} from "packages/xaero/common/$PlatformContextLoaderCommon"
import {$SupportMods, $SupportMods$Type} from "packages/xaero/common/mods/$SupportMods"
import {$ModCommonEvents, $ModCommonEvents$Type} from "packages/xaero/common/events/$ModCommonEvents"

export class $PlatformContext {

constructor()

public "createMinimapWriter"(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: $BlockStateShortShapeCache$Type, arg3: $HighlighterRegistry$Type): $MinimapWriter
public "getLoaderClientOnly"(): $PlatformContextLoaderClientOnly
public "createCommonEvents"(arg0: $IXaeroMinimap$Type): $CommonEvents
public "createClientEvents"(arg0: $IXaeroMinimap$Type): $ClientEvents
public "createSupportMods"(arg0: $IXaeroMinimap$Type): $SupportMods
public "getModInfoVersion"(): string
public "createModClientEvents"(arg0: $IXaeroMinimap$Type): $ModClientEvents
public "createModCommonEvents"(arg0: $IXaeroMinimap$Type): $ModCommonEvents
public "createMessageHandler"(arg0: $IXaeroMinimap$Type): $MinimapMessageHandler
public "getLoaderCommon"(): $PlatformContextLoaderCommon
get "loaderClientOnly"(): $PlatformContextLoaderClientOnly
get "modInfoVersion"(): string
get "loaderCommon"(): $PlatformContextLoaderCommon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContext$Type = ($PlatformContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformContext_ = $PlatformContext$Type;
}}
declare module "packages/xaero/common/graphics/$CursorBox" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CursorBox {

constructor(arg0: integer)
constructor(arg0: $Component$Type, arg1: boolean)
constructor(arg0: $Component$Type)
constructor(arg0: string)
constructor(arg0: string, arg1: $Style$Type)
constructor(arg0: string, arg1: $Style$Type, arg2: boolean)

public "getLine"(arg0: integer): $Component
public "drawBox"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "setStartWidth"(arg0: integer): void
public "withWidth"(arg0: integer): $CursorBox
public "setAutoLinebreak"(arg0: boolean): void
public "getPlainText"(): string
public "createLines"(arg0: $Component$Type): void
public "getFullCode"(): string
public "splitWords"(arg0: $ArrayList$Type<($Component$Type)>, arg1: $FormattedText$Type): void
set "startWidth"(value: integer)
set "autoLinebreak"(value: boolean)
get "plainText"(): string
get "fullCode"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorBox$Type = ($CursorBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorBox_ = $CursorBox$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetScreenHandler" {
import {$WidgetScreen, $WidgetScreen$Type} from "packages/xaero/common/gui/widget/$WidgetScreen"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $WidgetScreenHandler {

constructor()

public "initialize"(arg0: $WidgetScreen$Type, arg1: integer, arg2: integer): void
public "render"(arg0: $GuiGraphics$Type, arg1: $WidgetScreen$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: double): void
public "renderTooltips"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: double): boolean
public "handleClick"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetScreenHandler$Type = ($WidgetScreenHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetScreenHandler_ = $WidgetScreenHandler$Type;
}}
declare module "packages/xaero/common/effect/$NoWaypointsEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoWaypointsEffect extends $MinimapStatusEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoWaypointsEffect$Type = ($NoWaypointsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoWaypointsEffect_ = $NoWaypointsEffect$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/$PlayerTrackerMinimapElementRenderContext" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerTrackerMinimapElementRenderContext {
 "outlineConsumer": $VertexConsumer
 "uniqueTextureUIObjectRenderer": $MultiTextureRenderTypeRenderer
 "mapDimId": $ResourceKey<($Level)>
 "mapDimDiv": double

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementRenderContext$Type = ($PlayerTrackerMinimapElementRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElementRenderContext_ = $PlayerTrackerMinimapElementRenderContext$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$Waypoint" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Waypoint implements $Comparable<($Waypoint)> {
static readonly "ONEOFF_DESTINATION_SAFE_FOR": integer
static readonly "ONEOFF_DESTINATION_REMOVE_DISTANCE": integer
static "RENDER_SORTING_POS": $Vec3

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer, arg6: integer, arg7: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer, arg6: integer)

public "getName"(): string
public "compareTo"(arg0: $Waypoint$Type): integer
public "setName"(arg0: string): void
public "setType"(arg0: integer): void
public "setColor"(arg0: integer): void
public "getLocalizedName"(): string
public "getY"(): integer
public "getColor"(): integer
public "setDisabled"(arg0: boolean): void
public "isGlobal"(): boolean
public "getSymbol"(): string
public "setRotation"(arg0: boolean): void
public "setYIncluded"(arg0: boolean): void
public "setSymbol"(arg0: string): void
public "isYIncluded"(): boolean
public "getComparisonName"(): string
public "setZ"(arg0: integer): void
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "setOneoffDestination"(arg0: boolean): void
public "getComparisonDistance"(arg0: $Camera$Type, arg1: double): double
public static "getStringFromStringSafe"(arg0: string, arg1: string): string
public "getComparisonAngleCos"(arg0: $Camera$Type, arg1: double): double
public "isOneoffDestination"(): boolean
public "getVisibilityType"(): integer
public "setVisibilityType"(arg0: integer): void
public "isServerWaypoint"(): boolean
public "getActualColor"(): integer
public "getX"(): integer
public "getX"(arg0: double): integer
public "getDistanceSq"(arg0: double, arg1: double, arg2: double): double
public "getZ"(arg0: double): integer
public "getZ"(): integer
public "isDisabled"(): boolean
public "getCreatedAt"(): long
public "setYaw"(arg0: integer): void
public "getYaw"(): integer
public "isTemporary"(): boolean
public "getNameSafe"(arg0: string): string
public "setTemporary"(arg0: boolean): void
public "getSymbolSafe"(arg0: string): string
public "isRotation"(): boolean
public "getWaypointType"(): integer
get "name"(): string
set "name"(value: string)
set "type"(value: integer)
set "color"(value: integer)
get "localizedName"(): string
get "y"(): integer
get "color"(): integer
set "disabled"(value: boolean)
get "global"(): boolean
get "symbol"(): string
set "rotation"(value: boolean)
set "yIncluded"(value: boolean)
set "symbol"(value: string)
get "yIncluded"(): boolean
get "comparisonName"(): string
set "z"(value: integer)
set "x"(value: integer)
set "y"(value: integer)
set "oneoffDestination"(value: boolean)
get "oneoffDestination"(): boolean
get "visibilityType"(): integer
set "visibilityType"(value: integer)
get "serverWaypoint"(): boolean
get "actualColor"(): integer
get "x"(): integer
get "z"(): integer
get "disabled"(): boolean
get "createdAt"(): long
set "yaw"(value: integer)
get "yaw"(): integer
get "temporary"(): boolean
set "temporary"(value: boolean)
get "rotation"(): boolean
get "waypointType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Waypoint$Type = ($Waypoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Waypoint_ = $Waypoint$Type;
}}
declare module "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntry$CenteredEntryFactory" {
import {$CategorySettingsListMainEntry, $CategorySettingsListMainEntry$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntry"
import {$CategorySettingsListEntry, $CategorySettingsListEntry$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListEntry"

export interface $CategorySettingsListMainEntry$CenteredEntryFactory {

 "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $CategorySettingsListMainEntry$Type<(any)>): $CategorySettingsListEntry

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $CategorySettingsListMainEntry$Type<(any)>): $CategorySettingsListEntry
}

export namespace $CategorySettingsListMainEntry$CenteredEntryFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsListMainEntry$CenteredEntryFactory$Type = ($CategorySettingsListMainEntry$CenteredEntryFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsListMainEntry$CenteredEntryFactory_ = $CategorySettingsListMainEntry$CenteredEntryFactory$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderer" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MinimapElementReader, $MinimapElementReader$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MinimapElementRenderProvider, $MinimapElementRenderProvider$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $MinimapElementRenderer<E, RC> implements $Comparable<($MinimapElementRenderer<(any), (any)>)> {

constructor(arg0: $MinimapElementReader$Type<(E), (RC)>, arg1: $MinimapElementRenderProvider$Type<(E), (RC)>, arg2: RC)

public "compareTo"(arg0: $MinimapElementRenderer$Type<(any), (any)>): integer
public "getContext"(): RC
public "getProvider"(): $MinimapElementRenderProvider<(E), (RC)>
public "getOrder"(): integer
public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "shouldRender"(arg0: integer): boolean
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: E, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
public "getElementReader"(): $MinimapElementReader<(E), (RC)>
get "context"(): RC
get "provider"(): $MinimapElementRenderProvider<(E), (RC)>
get "order"(): integer
get "elementReader"(): $MinimapElementReader<(E), (RC)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderer$Type<E, RC> = ($MinimapElementRenderer<(E), (RC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRenderer_<E, RC> = $MinimapElementRenderer$Type<(E), (RC)>;
}}
declare module "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SupportArgonautsServer {

constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportArgonautsServer$Type = ($SupportArgonautsServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportArgonautsServer_ = $SupportArgonautsServer$Type;
}}
declare module "packages/xaero/common/server/$MinecraftServerData" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$LevelMapProperties, $LevelMapProperties$Type} from "packages/xaero/common/server/level/$LevelMapProperties"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$Type} from "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager"
import {$SyncedPlayerTracker, $SyncedPlayerTracker$Type} from "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker"

export class $MinecraftServerData {

constructor(arg0: $SyncedPlayerTrackerSystemManager$Type, arg1: $SyncedPlayerTracker$Type, arg2: $IXaeroMinimap$Type)

public static "get"(arg0: $MinecraftServer$Type): $MinecraftServerData
public "getLevelProperties"(arg0: $Path$Type): $LevelMapProperties
public "getModMain"(): $IXaeroMinimap
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "modMain"(): $IXaeroMinimap
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerData$Type = ($MinecraftServerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerData_ = $MinecraftServerData$Type;
}}
declare module "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList$Entry" {
import {$ObjectSelectionList$Entry, $ObjectSelectionList$Entry$Type} from "packages/net/minecraft/client/gui/components/$ObjectSelectionList$Entry"
import {$CategorySettingsListMainEntry, $CategorySettingsListMainEntry$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiCategorySettings$SettingRowList$Entry extends $ObjectSelectionList$Entry<($GuiCategorySettings$SettingRowList$Entry<>)> {

constructor(arg0: $GuiCategorySettings$SettingRowList$Type, arg1: $CategorySettingsListMainEntry$Type<(any)>, arg2: integer)

public "tick"(): void
public "getNarration"(): $Component
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setFocused"(arg0: boolean): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
get "narration"(): $Component
set "focused"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategorySettings$SettingRowList$Entry$Type = ($GuiCategorySettings$SettingRowList$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategorySettings$SettingRowList$Entry_ = $GuiCategorySettings$SettingRowList$Entry$Type;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CategorySettingsListMainEntryFactory, $CategorySettingsListMainEntryFactory$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntryFactory"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $GuiCategoryUIEditorExpandableData<SE extends $GuiCategoryUIEditorExpandableData<(any)>> {

constructor(arg0: boolean, arg1: $CategorySettingsListMainEntryFactory$Type, arg2: $BiFunction$Type<($GuiCategoryUIEditorExpandableData$Type<(any)>), ($GuiCategoryUIEditorExpandableData$Type<(SE)>), ($Supplier$Type<($CursorBox$Type)>)>)

public "getDisplayName"(): string
public "setExpanded"(arg0: boolean): void
public "isMovable"(): boolean
public "getTooltipSupplier"(arg0: $GuiCategoryUIEditorExpandableData$Type<(any)>): $Supplier<($CursorBox)>
public "getExpandAction"(arg0: $GuiCategorySettings$SettingRowList$Type<>): $Runnable
public "getSubExpandables"(): $List<(SE)>
public "isExpanded"(): boolean
public "getListEntryFactory"(): $CategorySettingsListMainEntryFactory
get "displayName"(): string
set "expanded"(value: boolean)
get "movable"(): boolean
get "subExpandables"(): $List<(SE)>
get "expanded"(): boolean
get "listEntryFactory"(): $CategorySettingsListMainEntryFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorExpandableData$Type<SE> = ($GuiCategoryUIEditorExpandableData<(SE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorExpandableData_<SE> = $GuiCategoryUIEditorExpandableData$Type<(SE)>;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorExpandingOptionsData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategoryUIEditorOptionData, $GuiCategoryUIEditorOptionData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData"
import {$GuiCategoryUIEditorOptionsData, $GuiCategoryUIEditorOptionsData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData"

export class $GuiCategoryUIEditorExpandingOptionsData<V> extends $GuiCategoryUIEditorOptionsData<(V)> {


public "getDisplayName"(): string
public "onSelected"(arg0: $GuiCategoryUIEditorOptionData$Type<(V)>): boolean
public "getSubExpandables"(): $List<($GuiCategoryUIEditorOptionData<(V)>)>
get "displayName"(): string
get "subExpandables"(): $List<($GuiCategoryUIEditorOptionData<(V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorExpandingOptionsData$Type<V> = ($GuiCategoryUIEditorExpandingOptionsData<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorExpandingOptionsData_<V> = $GuiCategoryUIEditorExpandingOptionsData$Type<(V)>;
}}
declare module "packages/xaero/common/effect/$NoRadarEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoRadarEffect extends $MinimapStatusEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoRadarEffect$Type = ($NoRadarEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoRadarEffect_ = $NoRadarEffect$Type;
}}
declare module "packages/xaero/common/category/$ObjectCategory" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/common/category/setting/$ObjectCategorySetting"
import {$ObjectCategoryData, $ObjectCategoryData$Type} from "packages/xaero/common/category/serialization/data/$ObjectCategoryData"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ObjectCategory<D extends $ObjectCategoryData<(D)>, C extends $ObjectCategory<(D), (C)>> {


public "getName"(): string
public "getSettingOverridesIterator"(): $Iterator<($Map$Entry<($ObjectCategorySetting<(any)>), (any)>)>
public "getDirectSubCategoryIterator"(): $Iterator<(C)>
public "setSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>, arg1: T): void
public "getSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>): T
public "getProtection"(): boolean
public "getSuperCategory"(): C
get "name"(): string
get "settingOverridesIterator"(): $Iterator<($Map$Entry<($ObjectCategorySetting<(any)>), (any)>)>
get "directSubCategoryIterator"(): $Iterator<(C)>
get "protection"(): boolean
get "superCategory"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategory$Type<D, C> = ($ObjectCategory<(D), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategory_<D, C> = $ObjectCategory$Type<(D), (C)>;
}}
declare module "packages/xaero/common/validator/$FieldValidatorHolder" {
import {$NumericFieldValidator, $NumericFieldValidator$Type} from "packages/xaero/common/validator/$NumericFieldValidator"
import {$WaypointCoordinateFieldValidator, $WaypointCoordinateFieldValidator$Type} from "packages/xaero/common/validator/$WaypointCoordinateFieldValidator"

export class $FieldValidatorHolder {

constructor(arg0: $NumericFieldValidator$Type, arg1: $WaypointCoordinateFieldValidator$Type)

public "getWpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
public "getNumericFieldValidator"(): $NumericFieldValidator
get "wpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
get "numericFieldValidator"(): $NumericFieldValidator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldValidatorHolder$Type = ($FieldValidatorHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldValidatorHolder_ = $FieldValidatorHolder$Type;
}}
declare module "packages/xaero/common/events/$ModCommonEvents" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $ModCommonEvents {

constructor(arg0: $IXaeroMinimap$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCommonEvents$Type = ($ModCommonEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCommonEvents_ = $ModCommonEvents$Type;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData$Builder" {
import {$GuiCategoryUIEditorCategoryData, $GuiCategoryUIEditorCategoryData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$GuiCategoryUIEditorAdderData, $GuiCategoryUIEditorAdderData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorAdderData"
import {$GuiCategoryUIEditorExpandableData$Builder, $GuiCategoryUIEditorExpandableData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData$Builder"
import {$GuiCategoryUIEditorSettingsData$Builder, $GuiCategoryUIEditorSettingsData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData$Builder"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/common/category/$ObjectCategory"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$GuiCategoryUIEditorSettingsData, $GuiCategoryUIEditorSettingsData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"

export class $GuiCategoryUIEditorCategoryData$Builder<C extends $ObjectCategory<(any), (C)>, ED extends $GuiCategoryUIEditorCategoryData<(C), (SD), (ED)>, SD extends $GuiCategoryUIEditorSettingsData<(any)>, SDB extends $GuiCategoryUIEditorSettingsData$Builder<(SD), (SDB)>, EDB extends $GuiCategoryUIEditorCategoryData$Builder<(C), (ED), (SD), (SDB), (EDB)>> extends $GuiCategoryUIEditorExpandableData$Builder<($GuiCategoryUIEditorExpandableData<(any)>), (EDB)> {

constructor(arg0: $ListFactory$Type, arg1: SDB)

public "setName"(arg0: string): EDB
public "getSettingDataBuilder"(): SDB
public "setNewCategorySupplier"(arg0: $Function$Type<($GuiCategoryUIEditorAdderData$Type), (ED)>): EDB
public "addSubCategoryBuilder"(arg0: EDB): EDB
public "setSubIndex"(arg0: integer): EDB
set "name"(value: string)
get "settingDataBuilder"(): SDB
set "newCategorySupplier"(value: $Function$Type<($GuiCategoryUIEditorAdderData$Type), (ED)>)
set "subIndex"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorCategoryData$Builder$Type<C, ED, SD, SDB, EDB> = ($GuiCategoryUIEditorCategoryData$Builder<(C), (ED), (SD), (SDB), (EDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorCategoryData$Builder_<C, ED, SD, SDB, EDB> = $GuiCategoryUIEditorCategoryData$Builder$Type<(C), (ED), (SD), (SDB), (EDB)>;
}}
declare module "packages/xaero/common/minimap/radar/category/$EntityRadarCategory" {
import {$FilterObjectCategory, $FilterObjectCategory$Type} from "packages/xaero/common/category/$FilterObjectCategory"
import {$EntityRadarCategoryData, $EntityRadarCategoryData$Type} from "packages/xaero/common/minimap/radar/category/serialization/data/$EntityRadarCategoryData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRadarCategory extends $FilterObjectCategory<($Entity), ($Player), ($EntityRadarCategoryData), ($EntityRadarCategory)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategory$Type = ($EntityRadarCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategory_ = $EntityRadarCategory$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$MinimapRenderer, $MinimapRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapRenderer"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$CompassRenderer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$WaypointsGuiRenderer, $WaypointsGuiRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapSafeModeRenderer extends $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type, arg2: $WaypointsGuiRenderer$Type, arg3: $Minimap$Type, arg4: $CompassRenderer$Type)

public "updateMapFrameSafeMode"(arg0: $XaeroMinimapSession$Type, arg1: $MinimapProcessor$Type, arg2: $Player$Type, arg3: $Entity$Type, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: boolean, arg9: integer, arg10: double, arg11: double, arg12: boolean, arg13: $ModSettings$Type): void
public "renderEntityDotSafeMode"(arg0: $MinimapProcessor$Type, arg1: $Player$Type, arg2: $Entity$Type, arg3: $Entity$Type, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: double, arg11: double, arg12: float, arg13: boolean, arg14: $EntityRadarCategory$Type, arg15: integer, arg16: boolean, arg17: integer, arg18: integer, arg19: double): boolean
public "renderEntityListSafeMode"(arg0: $MinimapProcessor$Type, arg1: $Player$Type, arg2: $Entity$Type, arg3: $Iterator$Type<($Entity$Type)>, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: double, arg11: double, arg12: float, arg13: boolean, arg14: $EntityRadarCategory$Type, arg15: integer, arg16: boolean, arg17: integer, arg18: integer, arg19: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapSafeModeRenderer$Type = ($MinimapSafeModeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapSafeModeRenderer_ = $MinimapSafeModeRenderer$Type;
}}
declare module "packages/xaero/common/$PlatformContextLoaderCommon" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $PlatformContextLoaderCommon {

constructor()

public "setup"(arg0: $IXaeroMinimap$Type): void
set "up"(value: $IXaeroMinimap$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContextLoaderCommon$Type = ($PlatformContextLoaderCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformContextLoaderCommon_ = $PlatformContextLoaderCommon$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$WaypointGuiRenderContext, $WaypointGuiRenderContext$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $WaypointsGuiRenderer extends $MinimapElementRenderer<($Waypoint), ($WaypointGuiRenderContext)> {


public "getOrder"(): integer
public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "shouldRender"(arg0: integer): boolean
public "drawSetChange"(arg0: $WaypointsManager$Type, arg1: $GuiGraphics$Type, arg2: $Window$Type): void
public "updateWaypointCollection"(arg0: double, arg1: double, arg2: double, arg3: $IXaeroMinimap$Type): void
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: $Waypoint$Type, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
public "drawIconOnGUI"(arg0: $GuiGraphics$Type, arg1: $MinimapRendererHelper$Type, arg2: $Waypoint$Type, arg3: $ModSettings$Type, arg4: integer, arg5: integer, arg6: $MultiBufferSource$BufferSource$Type, arg7: $VertexConsumer$Type): void
get "order"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsGuiRenderer$Type = ($WaypointsGuiRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsGuiRenderer_ = $WaypointsGuiRenderer$Type;
}}
declare module "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SupportFTBTeamsServer {

constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportFTBTeamsServer$Type = ($SupportFTBTeamsServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportFTBTeamsServer_ = $SupportFTBTeamsServer$Type;
}}
declare module "packages/xaero/common/events/$ClientEvents" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RealmsServer, $RealmsServer$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChatType$Bound, $ChatType$Bound$Type} from "packages/net/minecraft/network/chat/$ChatType$Bound"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ClientEvents {
 "latestRealm": $RealmsServer

constructor(arg0: $IXaeroMinimap$Type)

public "handleRenderGameOverlayEventPre"(arg0: $GuiGraphics$Type, arg1: float): void
public "handleRenderGameOverlayEventPost"(): void
public "handleClientSendChatEvent"(arg0: string): boolean
public "handlePlayerTickStart"(arg0: $Player$Type): void
public "handlePlayerSetSpawnEvent"(arg0: $BlockPos$Type, arg1: $Level$Type): void
public "handleDrawScreenEventPost"(arg0: $Screen$Type): void
public "handleRenderStatusEffectOverlay"(arg0: $GuiGraphics$Type): boolean
public "handleClientTickStart"(): void
public "handleRenderTickStart"(): void
public "handleRenderCrosshairOverlay"(arg0: $GuiGraphics$Type): boolean
public "handleGuiOpen"(arg0: $Screen$Type): $Screen
public "getLastGuiOpen"(): any
public "worldUnload"(arg0: $LevelAccessor$Type): void
public "handleClientPlayerChatReceivedEvent"(arg0: $ChatType$Bound$Type, arg1: $Component$Type, arg2: $GameProfile$Type): boolean
public "handleClientSystemChatReceivedEvent"(arg0: $Component$Type): boolean
get "lastGuiOpen"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEvents$Type = ($ClientEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEvents_ = $ClientEvents$Type;
}}
declare module "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export class $InfoDisplayStateCodec<T> {

constructor(arg0: $Function$Type<(string), (T)>, arg1: $Function$Type<(T), (string)>)

public "decode"(arg0: string): T
public "encode"(arg0: T): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayStateCodec$Type<T> = ($InfoDisplayStateCodec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayStateCodec_<T> = $InfoDisplayStateCodec$Type<(T)>;
}}
declare module "packages/xaero/common/interfaces/render/$InterfaceRenderer" {
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

/**
 * 
 * @deprecated
 */
export class $InterfaceRenderer {

constructor(arg0: $IXaeroMinimap$Type)

public "getCustomVertexConsumers"(): $CustomVertexConsumers
get "customVertexConsumers"(): $CustomVertexConsumers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceRenderer$Type = ($InterfaceRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceRenderer_ = $InterfaceRenderer$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $ISyncedPlayerTrackerSystem {

 "getTrackingLevel"(arg0: $Player$Type, arg1: $Player$Type): integer
 "isPartySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedPlayerTrackerSystem$Type = ($ISyncedPlayerTrackerSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncedPlayerTrackerSystem_ = $ISyncedPlayerTrackerSystem$Type;
}}
declare module "packages/xaero/common/category/ui/$GuiCategorySettings" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiCategoryUIEditorCategoryData$Builder, $GuiCategoryUIEditorCategoryData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData$Builder"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/common/category/$ObjectCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ObjectCategory$Builder, $ObjectCategory$Builder$Type} from "packages/xaero/common/category/$ObjectCategory$Builder"
import {$ScreenBase, $ScreenBase$Type} from "packages/xaero/common/gui/$ScreenBase"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiCategoryUIEditorCategoryData, $GuiCategoryUIEditorCategoryData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorCategoryData"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategorySettings$SettingRowList, $GuiCategorySettings$SettingRowList$Type} from "packages/xaero/common/category/ui/$GuiCategorySettings$SettingRowList"
import {$GuiCategoryUIEditorSettingsData$Builder, $GuiCategoryUIEditorSettingsData$Builder$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData$Builder"
import {$GuiCategoryUIEditorSettingsData, $GuiCategoryUIEditorSettingsData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData"

export class $GuiCategorySettings<C extends $ObjectCategory<(any), (C)>, ED extends $GuiCategoryUIEditorCategoryData<(C), (SD), (ED)>, CB extends $ObjectCategory$Builder<(C), (CB)>, SD extends $GuiCategoryUIEditorSettingsData<(any)>, SDB extends $GuiCategoryUIEditorSettingsData$Builder<(SD), (SDB)>, EDB extends $GuiCategoryUIEditorCategoryData$Builder<(C), (ED), (SD), (SDB), (EDB)>> extends $ScreenBase {
static readonly "ROW_HEIGHT": integer
static readonly "ROW_WIDTH": integer
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public "getRowList"(): $GuiCategorySettings$SettingRowList<>
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "m_7856_"(): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "tick"(): void
get "rowList"(): $GuiCategorySettings$SettingRowList<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategorySettings$Type<C, ED, CB, SD, SDB, EDB> = ($GuiCategorySettings<(C), (ED), (CB), (SD), (SDB), (EDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategorySettings_<C, ED, CB, SD, SDB, EDB> = $GuiCategorySettings$Type<(C), (ED), (CB), (SD), (SDB), (EDB)>;
}}
declare module "packages/xaero/common/category/rule/$ObjectCategoryListRule" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ObjectCategoryListRuleType, $ObjectCategoryListRuleType$Type} from "packages/xaero/common/category/rule/$ObjectCategoryListRuleType"
import {$ObjectCategoryRule, $ObjectCategoryRule$Type} from "packages/xaero/common/category/rule/$ObjectCategoryRule"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ObjectCategoryListRule<E, P, S> extends $ObjectCategoryRule<(E), (P)> implements $Iterable<(string)> {


public "iterator"(): $Iterator<(string)>
public "getType"(): $ObjectCategoryListRuleType<(E), (P), (S)>
public "getStringValidator"(): $Predicate<(string)>
public "inList"(arg0: E, arg1: P): boolean
public "spliterator"(): $Spliterator<(string)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<string>;
get "type"(): $ObjectCategoryListRuleType<(E), (P), (S)>
get "stringValidator"(): $Predicate<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryListRule$Type<E, P, S> = ($ObjectCategoryListRule<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryListRule_<E, P, S> = $ObjectCategoryListRule$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/common/minimap/$MinimapInterface" {
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

/**
 * 
 * @deprecated
 */
export class $MinimapInterface extends $Minimap {

constructor(arg0: $IXaeroMinimap$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapInterface$Type = ($MinimapInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapInterface_ = $MinimapInterface$Type;
}}
declare module "packages/xaero/common/minimap/highlight/$HighlighterRegistry" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractHighlighter, $AbstractHighlighter$Type} from "packages/xaero/common/minimap/highlight/$AbstractHighlighter"

export class $HighlighterRegistry {

constructor()

public "end"(): void
public "register"(arg0: $AbstractHighlighter$Type): void
public "getHighlighters"(): $List<($AbstractHighlighter)>
get "highlighters"(): $List<($AbstractHighlighter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighlighterRegistry$Type = ($HighlighterRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighlighterRegistry_ = $HighlighterRegistry$Type;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorSettingsData" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/common/category/setting/$ObjectCategorySetting"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategoryUIEditorTextFieldOptionsData, $GuiCategoryUIEditorTextFieldOptionsData$Type} from "packages/xaero/common/category/ui/data/options/text/$GuiCategoryUIEditorTextFieldOptionsData"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$IGuiCategoryUIEditorSettingData, $IGuiCategoryUIEditorSettingData$Type} from "packages/xaero/common/category/ui/data/options/range/setting/$IGuiCategoryUIEditorSettingData"
import {$GuiCategoryUIEditorOptionsData, $GuiCategoryUIEditorOptionsData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GuiCategoryUIEditorSettingsData<SETTING_DATA extends ($GuiCategoryUIEditorOptionsData<(any)>) & ($IGuiCategoryUIEditorSettingData<(any)>)> extends $GuiCategoryUIEditorExpandableData<($GuiCategoryUIEditorExpandableData<(any)>)> {


public "getDisplayName"(): string
public "getSettings"(): $Map<($ObjectCategorySetting<(any)>), (SETTING_DATA)>
public "getNameOption"(): $GuiCategoryUIEditorTextFieldOptionsData
public "isToBeDeleted"(): boolean
public "setToBeDeleted"(): void
public "getSettingData"(arg0: $ObjectCategorySetting$Type<(any)>): $IGuiCategoryUIEditorSettingData<(any)>
public "setProtected"(arg0: boolean): void
public "getSubExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
public "isRootSettings"(): boolean
public "getProtection"(): boolean
get "displayName"(): string
get "settings"(): $Map<($ObjectCategorySetting<(any)>), (SETTING_DATA)>
get "nameOption"(): $GuiCategoryUIEditorTextFieldOptionsData
get "toBeDeleted"(): boolean
set "protected"(value: boolean)
get "subExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
get "rootSettings"(): boolean
get "protection"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorSettingsData$Type<SETTING_DATA> = ($GuiCategoryUIEditorSettingsData<(SETTING_DATA)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorSettingsData_<SETTING_DATA> = $GuiCategoryUIEditorSettingsData$Type<(SETTING_DATA)>;
}}
declare module "packages/xaero/common/minimap/radar/category/serialization/data/$EntityRadarCategoryData" {
import {$FilterObjectCategoryData, $FilterObjectCategoryData$Type} from "packages/xaero/common/category/serialization/data/$FilterObjectCategoryData"

export class $EntityRadarCategoryData extends $FilterObjectCategoryData<($EntityRadarCategoryData)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryData$Type = ($EntityRadarCategoryData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategoryData_ = $EntityRadarCategoryData$Type;
}}
declare module "packages/xaero/common/controls/event/$KeyEvent" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"

export class $KeyEvent {

constructor(arg0: $KeyMapping$Type, arg1: boolean, arg2: boolean, arg3: boolean)

public "isKeyDown"(): boolean
public "getKb"(): $KeyMapping
public "isRepeat"(): boolean
public "isTickEnd"(): boolean
public "wasFiredOnce"(): boolean
public "setFiredOnce"(): void
get "keyDown"(): boolean
get "kb"(): $KeyMapping
get "repeat"(): boolean
get "tickEnd"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEvent$Type = ($KeyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEvent_ = $KeyEvent$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CategorySettingsListMainEntryFactory, $CategorySettingsListMainEntryFactory$Type} from "packages/xaero/common/category/ui/entry/$CategorySettingsListMainEntryFactory"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $GuiCategoryUIEditorOptionData<V> extends $GuiCategoryUIEditorExpandableData<($GuiCategoryUIEditorExpandableData<(any)>)> {

constructor(arg0: V, arg1: string, arg2: boolean, arg3: $CategorySettingsListMainEntryFactory$Type, arg4: $BiFunction$Type<($GuiCategoryUIEditorExpandableData$Type<(any)>), ($GuiCategoryUIEditorExpandableData$Type<($GuiCategoryUIEditorExpandableData$Type<(any)>)>), ($Supplier$Type<($CursorBox$Type)>)>)

public "getValue"(): V
public "getDisplayName"(): string
public "getSubExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
get "value"(): V
get "displayName"(): string
get "subExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorOptionData$Type<V> = ($GuiCategoryUIEditorOptionData<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorOptionData_<V> = $GuiCategoryUIEditorOptionData$Type<(V)>;
}}
declare module "packages/xaero/common/category/ui/entry/$ConnectionLineType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConnectionLineType extends $Enum<($ConnectionLineType)> {
static readonly "PATH": $ConnectionLineType
static readonly "HEAD_LEAF": $ConnectionLineType
static readonly "TAIL_LEAF": $ConnectionLineType
static readonly "NONE": $ConnectionLineType


public static "values"(): ($ConnectionLineType)[]
public static "valueOf"(arg0: string): $ConnectionLineType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionLineType$Type = (("path") | ("tail_leaf") | ("none") | ("head_leaf")) | ($ConnectionLineType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionLineType_ = $ConnectionLineType$Type;
}}
declare module "packages/xaero/common/minimap/$MinimapProcessor" {
import {$MinimapInterface, $MinimapInterface$Type} from "packages/xaero/common/minimap/$MinimapInterface"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$MinimapWriter, $MinimapWriter$Type} from "packages/xaero/common/minimap/write/$MinimapWriter"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$Type} from "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager"
import {$MinimapRadar, $MinimapRadar$Type} from "packages/xaero/common/minimap/radar/$MinimapRadar"

export class $MinimapProcessor {
static readonly "DEBUG": boolean
static readonly "FRAME": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: $MinimapWriter$Type, arg3: $MinimapRadar$Type, arg4: $ClientSyncedTrackedPlayerManager$Type)

public "cleanup"(): void
public "getForcedFairPlay"(): boolean
public "updateZoom"(): void
public "getFBOBufferSize"(): integer
public "canUseFrameBuffer"(): boolean
public "checkFBO"(): void
public "setEnlargedMap"(arg0: boolean): void
public "instantZoom"(): void
public "setNoMinimapMessageReceived"(arg0: boolean): void
public "setFairPlayOnlyMessageReceived"(arg0: boolean): void
public "getMinimapInterface"(): $MinimapInterface
public "onClientTick"(): void
public "isManualCaveMode"(): boolean
public "onRender"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: integer, arg7: integer, arg8: float, arg9: $CustomVertexConsumers$Type): void
public "isToResetImage"(): boolean
public "setToResetImage"(arg0: boolean): void
public "getMinimapZoom"(): double
public "getMinimapWriter"(): $MinimapWriter
public "isEnlargedMap"(): boolean
public "getEntityRadar"(): $MinimapRadar
public "getTargetZoom"(): double
public static "hasMinimapItem"(arg0: $Player$Type): boolean
public "getMinimapSize"(): integer
public "setServerModNetworkVersion"(arg0: integer): void
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "onPlayerTick"(): void
public "getMinimapBufferSize"(arg0: integer): integer
public "isCaveModeDisplayed"(): boolean
public "toggleManualCaveMode"(): void
public "getServerModNetworkVersion"(): integer
public "getNoMinimapMessageReceived"(): boolean
public "serverHasMod"(): boolean
get "forcedFairPlay"(): boolean
get "fBOBufferSize"(): integer
set "enlargedMap"(value: boolean)
set "noMinimapMessageReceived"(value: boolean)
set "fairPlayOnlyMessageReceived"(value: boolean)
get "minimapInterface"(): $MinimapInterface
get "manualCaveMode"(): boolean
get "toResetImage"(): boolean
set "toResetImage"(value: boolean)
get "minimapZoom"(): double
get "minimapWriter"(): $MinimapWriter
get "enlargedMap"(): boolean
get "entityRadar"(): $MinimapRadar
get "targetZoom"(): double
get "minimapSize"(): integer
set "serverModNetworkVersion"(value: integer)
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "caveModeDisplayed"(): boolean
get "serverModNetworkVersion"(): integer
get "noMinimapMessageReceived"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapProcessor$Type = ($MinimapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapProcessor_ = $MinimapProcessor$Type;
}}
declare module "packages/xaero/common/minimap/element/render/over/$MinimapElementOverMapRendererHandler" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapElementRendererHandler, $MinimapElementRendererHandler$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $MinimapElementOverMapRendererHandler extends $MinimapElementRendererHandler {


public "render"(arg0: $GuiGraphics$Type, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: boolean, arg11: float, arg12: $RenderTarget$Type, arg13: $IXaeroMinimap$Type, arg14: $MinimapRendererHelper$Type, arg15: $MultiBufferSource$BufferSource$Type, arg16: $Font$Type, arg17: $MultiTextureRenderTypeRendererProvider$Type, arg18: integer, arg19: integer, arg20: integer, arg21: integer, arg22: boolean, arg23: float): void
public static "translatePosition"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: boolean, arg11: (double)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementOverMapRendererHandler$Type = ($MinimapElementOverMapRendererHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementOverMapRendererHandler_ = $MinimapElementOverMapRendererHandler$Type;
}}
declare module "packages/xaero/common/server/mods/$SupportServerMods" {
import {$SupportOPACServer, $SupportOPACServer$Type} from "packages/xaero/common/server/mods/$SupportOPACServer"
import {$SupportFTBTeamsServer, $SupportFTBTeamsServer$Type} from "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$SupportWorldMapServer, $SupportWorldMapServer$Type} from "packages/xaero/common/server/mods/$SupportWorldMapServer"
import {$SupportArgonautsServer, $SupportArgonautsServer$Type} from "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer"

export class $SupportServerMods {

constructor()

public "check"(arg0: $IXaeroMinimap$Type): void
public "getFtbTeams"(): $SupportFTBTeamsServer
public "hasFtbTeams"(): boolean
public "getWorldmap"(): $SupportWorldMapServer
public "hasOpac"(): boolean
public "hasWorldmap"(): boolean
public "getOpac"(): $SupportOPACServer
public "getArgonauts"(): $SupportArgonautsServer
public "hasArgonauts"(): boolean
get "ftbTeams"(): $SupportFTBTeamsServer
get "worldmap"(): $SupportWorldMapServer
get "opac"(): $SupportOPACServer
get "argonauts"(): $SupportArgonautsServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportServerMods$Type = ($SupportServerMods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportServerMods_ = $SupportServerMods$Type;
}}
declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

export interface $InfoDisplayOnCompile<T> {

 "onCompile"(arg0: $InfoDisplay$Type<(T)>, arg1: $InfoDisplayCompiler$Type, arg2: $XaeroMinimapSession$Type, arg3: $MinimapProcessor$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: double, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: $BlockPos$Type): void

(arg0: $InfoDisplay$Type<(T)>, arg1: $InfoDisplayCompiler$Type, arg2: $XaeroMinimapSession$Type, arg3: $MinimapProcessor$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: double, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: $BlockPos$Type): void
}

export namespace $InfoDisplayOnCompile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayOnCompile$Type<T> = ($InfoDisplayOnCompile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayOnCompile_<T> = $InfoDisplayOnCompile$Type<(T)>;
}}
declare module "packages/xaero/common/events/$ModClientEvents" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ModClientEvents {

constructor(arg0: $IXaeroMinimap$Type)

public "handleRenderModOverlay"(arg0: $GuiGraphics$Type, arg1: float): void
public "handleTextureStitchEventPost"(arg0: $TextureAtlas$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModClientEvents$Type = ($ModClientEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModClientEvents_ = $ModClientEvents$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/range/setting/$IGuiCategoryUIEditorSettingData" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/common/category/setting/$ObjectCategorySetting"

export interface $IGuiCategoryUIEditorSettingData<V> {

 "getSetting"(): $ObjectCategorySetting<(V)>
 "isRootSettings"(): boolean
 "getSettingValue"(): V
}

export namespace $IGuiCategoryUIEditorSettingData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiCategoryUIEditorSettingData$Type<V> = ($IGuiCategoryUIEditorSettingData<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiCategoryUIEditorSettingData_<V> = $IGuiCategoryUIEditorSettingData$Type<(V)>;
}}
declare module "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorAdderData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiCategoryUIEditorTextFieldOptionsData, $GuiCategoryUIEditorTextFieldOptionsData$Type} from "packages/xaero/common/category/ui/data/options/text/$GuiCategoryUIEditorTextFieldOptionsData"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"

export class $GuiCategoryUIEditorAdderData extends $GuiCategoryUIEditorExpandableData<($GuiCategoryUIEditorExpandableData<(any)>)> {


public "reset"(): void
public "getDisplayName"(): string
public "setExpanded"(arg0: boolean): void
public "isConfirmed"(): boolean
public "getNameField"(): $GuiCategoryUIEditorTextFieldOptionsData
public "getSubExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
get "displayName"(): string
set "expanded"(value: boolean)
get "confirmed"(): boolean
get "nameField"(): $GuiCategoryUIEditorTextFieldOptionsData
get "subExpandables"(): $List<($GuiCategoryUIEditorExpandableData<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorAdderData$Type = ($GuiCategoryUIEditorAdderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorAdderData_ = $GuiCategoryUIEditorAdderData$Type;
}}
declare module "packages/xaero/common/category/ui/setting/$CategorySettingsUIEditorSettingType" {
import {$CategorySettingsUIEditorSettingType$SettingDataBuilderFactory, $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory$Type} from "packages/xaero/common/category/ui/setting/$CategorySettingsUIEditorSettingType$SettingDataBuilderFactory"

export class $CategorySettingsUIEditorSettingType {
static readonly "ITERATION_BUTTON": $CategorySettingsUIEditorSettingType
static readonly "SLIDER": $CategorySettingsUIEditorSettingType
static readonly "EXPANDING": $CategorySettingsUIEditorSettingType


public "getSettingDataBuilderFactory"(): $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory
public "isUsingIndices"(): boolean
get "settingDataBuilderFactory"(): $CategorySettingsUIEditorSettingType$SettingDataBuilderFactory
get "usingIndices"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategorySettingsUIEditorSettingType$Type = ($CategorySettingsUIEditorSettingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategorySettingsUIEditorSettingType_ = $CategorySettingsUIEditorSettingType$Type;
}}
declare module "packages/xaero/common/mods/$SupportFramedBlocks" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $SupportFramedBlocks {

constructor()

public "onWorldChange"(): void
public "isFrameBlock"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: $BlockState$Type): boolean
public "unpackFramedBlock"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: $BlockState$Type, arg3: $BlockEntity$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportFramedBlocks$Type = ($SupportFramedBlocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportFramedBlocks_ = $SupportFramedBlocks$Type;
}}
declare module "packages/xaero/common/minimap/region/$MinimapTile" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$List, $List$Type} from "packages/java/util/$List"

export class $MinimapTile {
static "recycled": $List<($MinimapTile)>
 "caveLevel": integer

constructor(arg0: $ModSettings$Type, arg1: integer, arg2: integer, arg3: long)

public "isChunkGrid"(): boolean
public "isWasTransfered"(): boolean
public static "isSlimeChunk"(arg0: $ModSettings$Type, arg1: integer, arg2: integer, arg3: long): boolean
public "isSlimeChunk"(): boolean
public "setHighlightVersion"(arg0: integer): void
public "getHighlightVersion"(): integer
public "setCode"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): void
public "getRed"(arg0: integer, arg1: integer, arg2: integer): integer
public "getGreen"(arg0: integer, arg1: integer, arg2: integer): integer
public "getBlue"(arg0: integer, arg1: integer, arg2: integer): integer
public "isHasSomething"(): boolean
public "getHighlights"(): (integer)[]
public "setWasTransfered"(arg0: boolean): void
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "setHasSomething"(arg0: boolean): void
public static "getANewTile"(arg0: $ModSettings$Type, arg1: integer, arg2: integer, arg3: long): $MinimapTile
public "setHighlights"(arg0: (integer)[]): void
public "setSuccess"(arg0: boolean): void
public "setHasTerrain"(arg0: boolean): void
public "hasTerrain"(): boolean
public "pixelChanged"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): boolean
public "getX"(): integer
public "getHeight"(arg0: integer, arg1: integer): integer
public "setHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "getZ"(): integer
public "isSuccess"(): boolean
public "recycle"(): void
get "chunkGrid"(): boolean
get "wasTransfered"(): boolean
get "slimeChunk"(): boolean
set "highlightVersion"(value: integer)
get "highlightVersion"(): integer
get "hasSomething"(): boolean
get "highlights"(): (integer)[]
set "wasTransfered"(value: boolean)
set "hasSomething"(value: boolean)
set "highlights"(value: (integer)[])
set "success"(value: boolean)
get "x"(): integer
get "z"(): integer
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapTile$Type = ($MinimapTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapTile_ = $MinimapTile$Type;
}}
declare module "packages/xaero/common/config/$CommonConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonConfig {
readonly "registerStatusEffects": boolean
 "allowCaveModeOnServer": boolean
 "allowNetherCaveModeOnServer": boolean
 "allowRadarOnServer": boolean


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonConfig$Type = ($CommonConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonConfig_ = $CommonConfig$Type;
}}
declare module "packages/xaero/common/config/$CommonConfigIO" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CommonConfig, $CommonConfig$Type} from "packages/xaero/common/config/$CommonConfig"

export class $CommonConfigIO {

constructor(arg0: $Path$Type)

public "load"(): $CommonConfig
public "save"(arg0: $CommonConfig$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonConfigIO$Type = ($CommonConfigIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonConfigIO_ = $CommonConfigIO$Type;
}}
declare module "packages/xaero/common/gui/$MyOptions" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiSettings, $GuiSettings$Type} from "packages/xaero/common/gui/$GuiSettings"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$OptionsScreen, $OptionsScreen$Type} from "packages/net/minecraft/client/gui/screens/$OptionsScreen"
import {$List, $List$Type} from "packages/java/util/$List"

export class $MyOptions extends $OptionsScreen {
static readonly "TELEMETRY": $Component
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: string, arg1: $GuiSettings$Type, arg2: $Screen$Type, arg3: $Options$Type)

public "m_7856_"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MyOptions$Type = ($MyOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MyOptions_ = $MyOptions$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler" {
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"

export class $MinimapElementRendererHandler {


public "add"(arg0: $MinimapElementRenderer$Type<(any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRendererHandler$Type = ($MinimapElementRendererHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRendererHandler_ = $MinimapElementRendererHandler$Type;
}}
declare module "packages/xaero/common/category/rule/$ObjectCategoryRule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ObjectCategoryRule<E, P> {


public "getName"(): string
public "toString"(): string
public "isFollowedBy"(arg0: E, arg1: P): boolean
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryRule$Type<E, P> = ($ObjectCategoryRule<(E), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryRule_<E, P> = $ObjectCategoryRule$Type<(E), (P)>;
}}
declare module "packages/xaero/common/graphics/$CustomVertexConsumers" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {

constructor()

public "getBetterPVPRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "betterPVPRenderTypeBuffers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomVertexConsumers$Type = ($CustomVertexConsumers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomVertexConsumers_ = $CustomVertexConsumers$Type;
}}
declare module "packages/xaero/common/minimap/highlight/$AbstractHighlighter" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

export class $AbstractHighlighter {


public "chunkIsHighlit"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "addBlockHighlightTooltips"(arg0: $InfoDisplayCompiler$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: integer, arg3: integer, arg4: integer): void
public "regionHasHighlights"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "isCoveringOutsideDiscovered"(): boolean
public "getChunkHighlitColor"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): (integer)[]
get "coveringOutsideDiscovered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHighlighter$Type = ($AbstractHighlighter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHighlighter_ = $AbstractHighlighter$Type;
}}
declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"

export class $InfoDisplayCompiler {

constructor()

public "compile"<T>(arg0: $InfoDisplay$Type<(T)>, arg1: $XaeroMinimapSession$Type, arg2: $MinimapProcessor$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: double, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: $BlockPos$Type): $List<($Component)>
public "addWords"(arg0: integer, arg1: string): void
public "addLine"(arg0: $Component$Type): void
public "addLine"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayCompiler$Type = ($InfoDisplayCompiler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayCompiler_ = $InfoDisplayCompiler$Type;
}}
declare module "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"

export interface $InfoDisplayWidgetFactory<T> {

 "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay$Type<(T)>, arg5: $ModSettings$Type): $AbstractWidget

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay$Type<(T)>, arg5: $ModSettings$Type): $AbstractWidget
}

export namespace $InfoDisplayWidgetFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayWidgetFactory$Type<T> = ($InfoDisplayWidgetFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayWidgetFactory_<T> = $InfoDisplayWidgetFactory$Type<(T)>;
}}
declare module "packages/xaero/common/message/$MinimapMessageHandler" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClientMessageConsumer, $ClientMessageConsumer$Type} from "packages/xaero/common/message/client/$ClientMessageConsumer"
import {$ServerMessageConsumer, $ServerMessageConsumer$Type} from "packages/xaero/common/message/server/$ServerMessageConsumer"

export class $MinimapMessageHandler {
static readonly "NETWORK_COMPATIBILITY": integer

constructor()

public "register"<T extends $MinimapMessage<(T)>>(arg0: integer, arg1: $Class$Type<(T)>, arg2: $ServerMessageConsumer$Type<(T)>, arg3: $ClientMessageConsumer$Type<(T)>, arg4: $Function$Type<($FriendlyByteBuf$Type), (T)>, arg5: $BiConsumer$Type<(T), ($FriendlyByteBuf$Type)>): void
public "sendToServer"<T extends $MinimapMessage<(T)>>(arg0: T): void
public "sendToPlayer"<T extends $MinimapMessage<(T)>>(arg0: $ServerPlayer$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapMessageHandler$Type = ($MinimapMessageHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapMessageHandler_ = $MinimapMessageHandler$Type;
}}
declare module "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData" {
import {$GuiCategoryUIEditorOptionData, $GuiCategoryUIEditorOptionData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionData"
import {$GuiCategoryUIEditorExpandableData, $GuiCategoryUIEditorExpandableData$Type} from "packages/xaero/common/category/ui/data/$GuiCategoryUIEditorExpandableData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier, $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier"

export class $GuiCategoryUIEditorOptionsData<V> extends $GuiCategoryUIEditorExpandableData<($GuiCategoryUIEditorOptionData<(V)>)> {


public "getDisplayName"(): string
public "getIsActiveSupplier"(): $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier
public "getCurrentValue"(): $GuiCategoryUIEditorOptionData<(V)>
public "setCurrentValue"(arg0: $GuiCategoryUIEditorOptionData$Type<(V)>): void
public "getMessageSupplier"(): $Supplier<(string)>
get "displayName"(): string
get "isActiveSupplier"(): $GuiCategoryUIEditorOptionsData$IOptionsDataIsActiveSupplier
get "currentValue"(): $GuiCategoryUIEditorOptionData<(V)>
set "currentValue"(value: $GuiCategoryUIEditorOptionData$Type<(V)>)
get "messageSupplier"(): $Supplier<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryUIEditorOptionsData$Type<V> = ($GuiCategoryUIEditorOptionsData<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryUIEditorOptionsData_<V> = $GuiCategoryUIEditorOptionsData$Type<(V)>;
}}
declare module "packages/xaero/common/mods/$SupportMods" {
import {$SupportIris, $SupportIris$Type} from "packages/xaero/common/mods/$SupportIris"
import {$SupportOpenPartiesAndClaims, $SupportOpenPartiesAndClaims$Type} from "packages/xaero/common/mods/pac/$SupportOpenPartiesAndClaims"
import {$SupportFramedBlocks, $SupportFramedBlocks$Type} from "packages/xaero/common/mods/$SupportFramedBlocks"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$SupportXaeroWorldmap, $SupportXaeroWorldmap$Type} from "packages/xaero/common/mods/$SupportXaeroWorldmap"

export class $SupportMods {
 "worldmapSupport": $SupportXaeroWorldmap
 "xaeroPac": $SupportOpenPartiesAndClaims
 "optifine": boolean
 "vivecraft": boolean
 "iris": boolean
 "ftbTeams": boolean
 "supportIris": $SupportIris
 "supportFramedBlocks": $SupportFramedBlocks

constructor(arg0: $IXaeroMinimap$Type)

public "worldmap"(): boolean
public "shouldUseWorldMapCaveChunks"(): boolean
public "shouldUseWorldMapChunks"(): boolean
public static "checkForMinimapDuplicates"(arg0: string): void
public "framedBlocks"(): boolean
public "pac"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportMods$Type = ($SupportMods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportMods_ = $SupportMods$Type;
}}
declare module "packages/xaero/common/minimap/write/$MinimapWriterHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapWriterHelper {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWriterHelper$Type = ($MinimapWriterHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWriterHelper_ = $MinimapWriterHelper$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer" {
import {$WaypointWorldContainer, $WaypointWorldContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$WaypointsSort, $WaypointsSort$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsSort"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"
import {$WaypointWorldConnectionManager, $WaypointWorldConnectionManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager"

export class $WaypointWorldRootContainer extends $WaypointWorldContainer {
 "configLoaded": boolean
 "subContainers": $HashMap<(string), ($WaypointWorldContainer)>
 "worlds": $HashMap<(string), ($WaypointWorld)>

constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: string)

public "saveConfig"(): void
public "loadConfig"(): void
public "isIgnoreHeightmaps"(): boolean
public "isSortReversed"(): boolean
public "getSortType"(): $WaypointsSort
public "getDimensionType"(arg0: $ResourceKey$Type<($Level$Type)>): $DimensionType
public "getRootContainer"(): $WaypointWorldRootContainer
public "updateDimensionType"(arg0: $ClientLevel$Type): void
public "isUsingMultiworldDetection"(): boolean
public "updateConnectionsField"(arg0: $XaeroMinimapSession$Type): void
public "getDefaultMultiworldId"(): string
public "getSubWorldConnections"(): $WaypointWorldConnectionManager
public "setDefaultMultiworldId"(arg0: string): void
public "setTeleportationEnabled"(arg0: boolean): void
public "setUsingMultiworldDetection"(arg0: boolean): void
public "setIgnoreHeightmaps"(arg0: boolean): void
public "isIgnoreServerLevelId"(): boolean
public "getServerTeleportCommandRotationFormat"(): string
public "setServerTeleportCommandRotationFormat"(arg0: string): void
public "isTeleportationEnabled"(): boolean
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
public "isUsingDefaultTeleportCommand"(): boolean
public "setServerTeleportCommandFormat"(arg0: string): void
public "getServerTeleportCommandFormat"(): string
public "getDimensionScale"(arg0: $ResourceKey$Type<($Level$Type)>): double
public "toggleSortType"(): void
public "toggleSortReversed"(): void
get "ignoreHeightmaps"(): boolean
get "sortReversed"(): boolean
get "sortType"(): $WaypointsSort
get "rootContainer"(): $WaypointWorldRootContainer
get "usingMultiworldDetection"(): boolean
get "defaultMultiworldId"(): string
get "subWorldConnections"(): $WaypointWorldConnectionManager
set "defaultMultiworldId"(value: string)
set "teleportationEnabled"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
set "ignoreHeightmaps"(value: boolean)
get "ignoreServerLevelId"(): boolean
get "serverTeleportCommandRotationFormat"(): string
set "serverTeleportCommandRotationFormat"(value: string)
get "teleportationEnabled"(): boolean
set "usingDefaultTeleportCommand"(value: boolean)
get "usingDefaultTeleportCommand"(): boolean
set "serverTeleportCommandFormat"(value: string)
get "serverTeleportCommandFormat"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRootContainer$Type = ($WaypointWorldRootContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldRootContainer_ = $WaypointWorldRootContainer$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapFBORenderer" {
import {$RadarRenderer, $RadarRenderer$Type} from "packages/xaero/common/minimap/render/radar/element/$RadarRenderer"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapRenderer, $MinimapRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapRenderer"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$CompassRenderer"
import {$WaypointsGuiRenderer, $WaypointsGuiRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRadar, $MinimapRadar$Type} from "packages/xaero/common/minimap/radar/$MinimapRadar"

export class $MinimapFBORenderer extends $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type, arg2: $WaypointsGuiRenderer$Type, arg3: $Minimap$Type, arg4: $CompassRenderer$Type)

public "loadFrameBuffer"(arg0: $MinimapProcessor$Type): void
public "setLoadedFBO"(arg0: boolean): void
public "deleteFramebuffers"(): void
public "getRadarRenderer"(): $RadarRenderer
public "renderChunksToFBO"(arg0: $XaeroMinimapSession$Type, arg1: $GuiGraphics$Type, arg2: $MinimapProcessor$Type, arg3: $Player$Type, arg4: $Entity$Type, arg5: double, arg6: double, arg7: double, arg8: double, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: integer, arg14: boolean, arg15: boolean, arg16: boolean, arg17: integer, arg18: double, arg19: double, arg20: boolean, arg21: boolean, arg22: $CustomVertexConsumers$Type): void
public "onEntityIconsModelPartRenderDetection"(arg0: $ModelPart$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "resetEntityIconsResources"(): void
public "onEntityIconsModelRenderDetection"(arg0: $EntityModel$Type<(any)>, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "resetEntityIcons"(): void
public "isTriedFBO"(): boolean
public "isLoadedFBO"(): boolean
public "renderMainEntityDot"(arg0: $GuiGraphics$Type, arg1: $MinimapProcessor$Type, arg2: $Player$Type, arg3: $Entity$Type, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: $MinimapRadar$Type, arg10: boolean, arg11: integer, arg12: boolean, arg13: boolean, arg14: boolean, arg15: double, arg16: $ModSettings$Type, arg17: $MultiBufferSource$BufferSource$Type, arg18: float): void
set "loadedFBO"(value: boolean)
get "radarRenderer"(): $RadarRenderer
get "triedFBO"(): boolean
get "loadedFBO"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapFBORenderer$Type = ($MinimapFBORenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapFBORenderer_ = $MinimapFBORenderer$Type;
}}
declare module "packages/xaero/common/message/server/$ServerMessageConsumer" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export interface $ServerMessageConsumer<T extends $MinimapMessage<(T)>> {

 "handle"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: T): void

(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: T): void
}

export namespace $ServerMessageConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerMessageConsumer$Type<T> = ($ServerMessageConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerMessageConsumer_<T> = $ServerMessageConsumer$Type<(T)>;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointFilterParams" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export class $WaypointFilterParams {
 "cameraX": double
 "cameraY": double
 "cameraZ": double
 "lookVector": $Vector3f
 "dimDiv": double
 "deathpoints": boolean
 "temporaryWaypointsGlobal": boolean
 "waypointsDistance": double
 "waypointsDistanceMin": double
 "playerY": double
 "dimensionScaleDistance": boolean

constructor()

public "setParams"(arg0: double, arg1: double, arg2: double, arg3: $Vector3f$Type, arg4: double, arg5: boolean, arg6: boolean, arg7: double, arg8: double, arg9: double, arg10: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointFilterParams$Type = ($WaypointFilterParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointFilterParams_ = $WaypointFilterParams$Type;
}}
declare module "packages/xaero/common/message/client/$ClientMessageConsumer" {
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"

export interface $ClientMessageConsumer<T extends $MinimapMessage<(T)>> {

 "handle"(arg0: T): void

(arg0: T): void
}

export namespace $ClientMessageConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientMessageConsumer$Type<T> = ($ClientMessageConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientMessageConsumer_<T> = $ClientMessageConsumer$Type<(T)>;
}}
declare module "packages/xaero/common/category/ui/data/options/range/setting/$IGuiCategoryUIEditorSettingDataBuilder" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/common/category/setting/$ObjectCategorySetting"
import {$IGuiCategoryUIEditorSettingData, $IGuiCategoryUIEditorSettingData$Type} from "packages/xaero/common/category/ui/data/options/range/setting/$IGuiCategoryUIEditorSettingData"
import {$GuiCategoryUIEditorOptionsData, $GuiCategoryUIEditorOptionsData$Type} from "packages/xaero/common/category/ui/data/options/$GuiCategoryUIEditorOptionsData"

export interface $IGuiCategoryUIEditorSettingDataBuilder<V, SD extends ($GuiCategoryUIEditorOptionsData<(integer)>) & ($IGuiCategoryUIEditorSettingData<(V)>)> {

 "build"(): SD
 "setSetting"(arg0: $ObjectCategorySetting$Type<(V)>): $IGuiCategoryUIEditorSettingDataBuilder<(V), (SD)>
 "setSettingValue"(arg0: V): $IGuiCategoryUIEditorSettingDataBuilder<(V), (SD)>
 "setRootSettings"(arg0: boolean): $IGuiCategoryUIEditorSettingDataBuilder<(V), (SD)>
}

export namespace $IGuiCategoryUIEditorSettingDataBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiCategoryUIEditorSettingDataBuilder$Type<V, SD> = ($IGuiCategoryUIEditorSettingDataBuilder<(V), (SD)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiCategoryUIEditorSettingDataBuilder_<V, SD> = $IGuiCategoryUIEditorSettingDataBuilder$Type<(V), (SD)>;
}}
declare module "packages/xaero/common/effect/$MinimapStatusEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinimapStatusEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapStatusEffect$Type = ($MinimapStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapStatusEffect_ = $MinimapStatusEffect$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/system/$ITrackedPlayerReader" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $ITrackedPlayerReader<P> {

 "getId"(arg0: P): $UUID
 "getDimension"(arg0: P): $ResourceKey<($Level)>
 "getY"(arg0: P): double
 "getX"(arg0: P): double
 "getZ"(arg0: P): double
}

export namespace $ITrackedPlayerReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedPlayerReader$Type<P> = ($ITrackedPlayerReader<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackedPlayerReader_<P> = $ITrackedPlayerReader$Type<(P)>;
}}
declare module "packages/xaero/common/server/level/$LevelMapProperties" {
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BufferedReader, $BufferedReader$Type} from "packages/java/io/$BufferedReader"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LevelMapProperties extends $MinimapMessage<($LevelMapProperties)> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $PrintWriter$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $LevelMapProperties
public "read"(arg0: $BufferedReader$Type): void
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelMapProperties$Type = ($LevelMapProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelMapProperties_ = $LevelMapProperties$Type;
}}
declare module "packages/xaero/common/mods/$SupportIris" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportIris {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportIris$Type = ($SupportIris);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportIris_ = $SupportIris$Type;
}}
declare module "packages/xaero/common/minimap/radar/category/$EntityRadarCategoryFileIO" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/common/minimap/radar/category/$EntityRadarCategory"

export class $EntityRadarCategoryFileIO {


public "loadRootCategory"(): $EntityRadarCategory
public "saveRootCategory"(arg0: $Path$Type, arg1: string, arg2: integer): void
public "saveRootCategory"(arg0: $EntityRadarCategory$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryFileIO$Type = ($EntityRadarCategoryFileIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategoryFileIO_ = $EntityRadarCategoryFileIO$Type;
}}
declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $MultiTextureRenderTypeRendererProvider {

constructor(arg0: integer)

public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $Runnable$Type, arg3: $RenderType$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $RenderType$Type): $MultiTextureRenderTypeRenderer
public "draw"(arg0: $MultiTextureRenderTypeRenderer$Type): void
public static "defaultTextureBind"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRendererProvider$Type = ($MultiTextureRenderTypeRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRendererProvider_ = $MultiTextureRenderTypeRendererProvider$Type;
}}
declare module "packages/xaero/common/minimap/info/$InfoDisplayIO" {
import {$InfoDisplayManager, $InfoDisplayManager$Type} from "packages/xaero/common/minimap/info/$InfoDisplayManager"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $InfoDisplayIO {

constructor(arg0: $InfoDisplayManager$Type)

public "save"(arg0: $PrintWriter$Type): void
public "loadInfoDisplayLine"(arg0: (string)[]): void
public "loadInfoDisplayOrderLine"(arg0: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayIO$Type = ($InfoDisplayIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayIO_ = $InfoDisplayIO$Type;
}}
declare module "packages/xaero/common/server/player/$IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/common/server/player/$ServerPlayerData"

export interface $IServerPlayer {

 "setXaeroMinimapPlayerData"(arg0: $ServerPlayerData$Type): void
 "getXaeroMinimapPlayerData"(): $ServerPlayerData
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$Type = ($IServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayer_ = $IServerPlayer$Type;
}}
