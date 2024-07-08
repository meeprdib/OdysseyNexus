declare module "packages/com/unascribed/ears/api/features/$EarsFeatures$EarAnchor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EarsFeatures$EarAnchor extends $Enum<($EarsFeatures$EarAnchor)> {
static readonly "CENTER": $EarsFeatures$EarAnchor
static readonly "FRONT": $EarsFeatures$EarAnchor
static readonly "BACK": $EarsFeatures$EarAnchor


public static "values"(): ($EarsFeatures$EarAnchor)[]
public static "valueOf"(arg0: string): $EarsFeatures$EarAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeatures$EarAnchor$Type = (("center") | ("back") | ("front")) | ($EarsFeatures$EarAnchor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeatures$EarAnchor_ = $EarsFeatures$EarAnchor$Type;
}}
declare module "packages/com/unascribed/ears/api/features/$AlfalfaData" {
import {$Slice, $Slice$Type} from "packages/com/unascribed/ears/api/$Slice"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlfalfaData {
static readonly "NONE": $AlfalfaData
readonly "version": integer
readonly "data": $Map<(string), ($Slice)>

constructor(arg0: integer, arg1: $Map$Type<(string), ($Slice$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlfalfaData$Type = ($AlfalfaData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlfalfaData_ = $AlfalfaData$Type;
}}
declare module "packages/com/unascribed/ears/api/$Slice" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"

export class $Slice {
static readonly "EMPTY": $Slice

constructor(arg0: (byte)[])
constructor(arg0: (byte)[], arg1: integer, arg2: integer)

public "get"(arg0: integer): byte
public "equals"(arg0: any): boolean
public "equals"(arg0: (byte)[]): boolean
public "equals"(arg0: (byte)[], arg1: integer, arg2: integer): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): integer
public static "of"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public "toByteArray"(): (byte)[]
public "slice"(arg0: integer, arg1: integer): $Slice
public "slice"(arg0: integer): $Slice
public static "parse"(arg0: string): $Slice
public "writeTo"(arg0: $OutputStream$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slice$Type = ($Slice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Slice_ = $Slice$Type;
}}
declare module "packages/com/unascribed/ears/api/features/$EarsFeatures$TailMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EarsFeatures$TailMode extends $Enum<($EarsFeatures$TailMode)> {
static readonly "NONE": $EarsFeatures$TailMode
static readonly "DOWN": $EarsFeatures$TailMode
static readonly "BACK": $EarsFeatures$TailMode
static readonly "UP": $EarsFeatures$TailMode
static readonly "VERTICAL": $EarsFeatures$TailMode


public static "values"(): ($EarsFeatures$TailMode)[]
public static "valueOf"(arg0: string): $EarsFeatures$TailMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeatures$TailMode$Type = (("back") | ("vertical") | ("none") | ("up") | ("down")) | ($EarsFeatures$TailMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeatures$TailMode_ = $EarsFeatures$TailMode$Type;
}}
declare module "packages/com/unascribed/ears/api/features/$EarsFeatures$Builder" {
import {$EarsFeatures$TailMode, $EarsFeatures$TailMode$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$TailMode"
import {$Slice, $Slice$Type} from "packages/com/unascribed/ears/api/$Slice"
import {$EarsFeatures$WingMode, $EarsFeatures$WingMode$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$WingMode"
import {$AlfalfaData, $AlfalfaData$Type} from "packages/com/unascribed/ears/api/features/$AlfalfaData"
import {$EarsFeatures$EarAnchor, $EarsFeatures$EarAnchor$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$EarAnchor"
import {$EarsFeatures$EarMode, $EarsFeatures$EarMode$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$EarMode"
import {$EarsFeatures, $EarsFeatures$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures"

export class $EarsFeatures$Builder {


public "build"(): $EarsFeatures
public "emissive"(arg0: boolean): $EarsFeatures$Builder
public "isHorn"(): boolean
public "getEarAnchor"(): $EarsFeatures$EarAnchor
public "getTailSegments"(): integer
public "getTailBend0"(): float
public "isClaws"(): boolean
public "getTailBend1"(): float
public "getEarMode"(): $EarsFeatures$EarMode
public "getTailMode"(): $EarsFeatures$TailMode
public "getEmissiveWing"(): $Slice
public "getEmissiveSkin"(): $Slice
public "getAlfalfa"(): $AlfalfaData
public "getSnoutOffset"(): integer
public "isAnimateWings"(): boolean
public "isCapeEnabled"(): boolean
public "getSnoutWidth"(): integer
public "getChestSize"(): float
public "getTailBend3"(): float
public "getTailBend2"(): float
public "getSnoutHeight"(): integer
public "getSnoutDepth"(): integer
public "snoutOffset"(arg0: integer): $EarsFeatures$Builder
public "tailBend3"(arg0: float): $EarsFeatures$Builder
public "emissiveSkin"(arg0: $Slice$Type): $EarsFeatures$Builder
public "animateWings"(arg0: boolean): $EarsFeatures$Builder
public "alfalfa"(arg0: $AlfalfaData$Type): $EarsFeatures$Builder
public "wingMode"(arg0: $EarsFeatures$WingMode$Type): $EarsFeatures$Builder
public "earAnchor"(arg0: $EarsFeatures$EarAnchor$Type): $EarsFeatures$Builder
public "tailMode"(arg0: $EarsFeatures$TailMode$Type): $EarsFeatures$Builder
public "claws"(arg0: boolean): $EarsFeatures$Builder
public "horn"(arg0: boolean): $EarsFeatures$Builder
public "earMode"(arg0: $EarsFeatures$EarMode$Type): $EarsFeatures$Builder
public "capeEnabled"(arg0: boolean): $EarsFeatures$Builder
public "tailSegments"(arg0: integer): $EarsFeatures$Builder
public "tailBend0"(arg0: float): $EarsFeatures$Builder
public "snoutWidth"(arg0: integer): $EarsFeatures$Builder
public "snoutHeight"(arg0: integer): $EarsFeatures$Builder
public "chestSize"(arg0: float): $EarsFeatures$Builder
public "emissiveWing"(arg0: $Slice$Type): $EarsFeatures$Builder
public "snoutDepth"(arg0: integer): $EarsFeatures$Builder
public "tailBend1"(arg0: float): $EarsFeatures$Builder
public "tailBend2"(arg0: float): $EarsFeatures$Builder
public "getWingMode"(): $EarsFeatures$WingMode
public "isEmissive"(): boolean
public "tailBends"(arg0: float, arg1: float, arg2: float, arg3: float): $EarsFeatures$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeatures$Builder$Type = ($EarsFeatures$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeatures$Builder_ = $EarsFeatures$Builder$Type;
}}
declare module "packages/com/unascribed/ears/api/features/$EarsFeatures" {
import {$EarsFeatures$TailMode, $EarsFeatures$TailMode$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$TailMode"
import {$EarsFeatures$Builder, $EarsFeatures$Builder$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$Builder"
import {$Slice, $Slice$Type} from "packages/com/unascribed/ears/api/$Slice"
import {$EarsFeatures$WingMode, $EarsFeatures$WingMode$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$WingMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AlfalfaData, $AlfalfaData$Type} from "packages/com/unascribed/ears/api/features/$AlfalfaData"
import {$EarsFeatures$EarMode, $EarsFeatures$EarMode$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$EarMode"
import {$EarsFeatures$EarAnchor, $EarsFeatures$EarAnchor$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures$EarAnchor"

export class $EarsFeatures {
static readonly "DISABLED": $EarsFeatures
readonly "enabled": boolean
readonly "earMode": $EarsFeatures$EarMode
readonly "earAnchor": $EarsFeatures$EarAnchor
readonly "claws": boolean
readonly "horn": boolean
readonly "tailMode": $EarsFeatures$TailMode
readonly "tailSegments": integer
readonly "tailBend0": float
readonly "tailBend1": float
readonly "tailBend2": float
readonly "tailBend3": float
readonly "snoutOffset": integer
readonly "snoutWidth": integer
readonly "snoutHeight": integer
readonly "snoutDepth": integer
readonly "chestSize": float
readonly "wingMode": $EarsFeatures$WingMode
readonly "animateWings": boolean
readonly "capeEnabled": boolean
readonly "emissive": boolean
readonly "emissiveSkin": $Slice
readonly "emissiveWing": $Slice
readonly "alfalfa": $AlfalfaData


public "toString"(): string
/**
 * 
 * @deprecated
 */
public static "builder"(): $EarsFeatures$Builder
public static "getById"(arg0: $UUID$Type): $EarsFeatures
public static "getByUsername"(arg0: string): $EarsFeatures
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeatures$Type = ($EarsFeatures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeatures_ = $EarsFeatures$Type;
}}
declare module "packages/com/unascribed/ears/api/features/$EarsFeatures$WingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EarsFeatures$WingMode extends $Enum<($EarsFeatures$WingMode)> {
static readonly "NONE": $EarsFeatures$WingMode
static readonly "SYMMETRIC_DUAL": $EarsFeatures$WingMode
static readonly "SYMMETRIC_SINGLE": $EarsFeatures$WingMode
static readonly "ASYMMETRIC_L": $EarsFeatures$WingMode
static readonly "ASYMMETRIC_R": $EarsFeatures$WingMode


public static "values"(): ($EarsFeatures$WingMode)[]
public static "valueOf"(arg0: string): $EarsFeatures$WingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeatures$WingMode$Type = (("asymmetric_l") | ("symmetric_dual") | ("none") | ("asymmetric_r") | ("symmetric_single")) | ($EarsFeatures$WingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeatures$WingMode_ = $EarsFeatures$WingMode$Type;
}}
declare module "packages/com/unascribed/ears/api/features/$EarsFeatures$EarMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EarsFeatures$EarMode extends $Enum<($EarsFeatures$EarMode)> {
static readonly "NONE": $EarsFeatures$EarMode
static readonly "ABOVE": $EarsFeatures$EarMode
static readonly "SIDES": $EarsFeatures$EarMode
static readonly "BEHIND": $EarsFeatures$EarMode
static readonly "AROUND": $EarsFeatures$EarMode
static readonly "FLOPPY": $EarsFeatures$EarMode
static readonly "CROSS": $EarsFeatures$EarMode
static readonly "OUT": $EarsFeatures$EarMode
static readonly "TALL": $EarsFeatures$EarMode
static readonly "TALL_CROSS": $EarsFeatures$EarMode


public static "values"(): ($EarsFeatures$EarMode)[]
public static "valueOf"(arg0: string): $EarsFeatures$EarMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeatures$EarMode$Type = (("behind") | ("floppy") | ("tall_cross") | ("above") | ("cross") | ("sides") | ("none") | ("tall") | ("around") | ("out")) | ($EarsFeatures$EarMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeatures$EarMode_ = $EarsFeatures$EarMode$Type;
}}
declare module "packages/com/unascribed/ears/common/$EarsFeaturesHolder" {
import {$EarsFeatures, $EarsFeatures$Type} from "packages/com/unascribed/ears/api/features/$EarsFeatures"

export interface $EarsFeaturesHolder {

 "getEarsFeatures"(): $EarsFeatures

(): $EarsFeatures
}

export namespace $EarsFeaturesHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarsFeaturesHolder$Type = ($EarsFeaturesHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarsFeaturesHolder_ = $EarsFeaturesHolder$Type;
}}
