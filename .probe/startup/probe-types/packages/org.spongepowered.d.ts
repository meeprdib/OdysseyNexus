declare module "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo" {
import {$Cancellable, $Cancellable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$Cancellable"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfo implements $Cancellable {

constructor(arg0: string, arg1: boolean)

public "toString"(): string
public "getId"(): string
public "isCancellable"(): boolean
public "cancel"(): void
public "isCancelled"(): boolean
public static "getCallInfoClassName"(arg0: $Type$Type): string
get "id"(): string
get "cancellable"(): boolean
get "cancelled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackInfo$Type = ($CallbackInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallbackInfo_ = $CallbackInfo$Type;
}}
declare module "packages/org/spongepowered/asm/mixin/injection/callback/$Cancellable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cancellable {

 "isCancellable"(): boolean
 "cancel"(): void
 "isCancelled"(): boolean
}

export namespace $Cancellable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cancellable$Type = ($Cancellable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cancellable_ = $Cancellable$Type;
}}
declare module "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable" {
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfoReturnable<R> extends $CallbackInfo {

constructor(arg0: string, arg1: boolean, arg2: float)
constructor(arg0: string, arg1: boolean, arg2: integer)
constructor(arg0: string, arg1: boolean, arg2: long)
constructor(arg0: string, arg1: boolean, arg2: short)
constructor(arg0: string, arg1: boolean, arg2: boolean)
constructor(arg0: string, arg1: boolean)
constructor(arg0: string, arg1: boolean, arg2: R)
constructor(arg0: string, arg1: boolean, arg2: byte)
constructor(arg0: string, arg1: boolean, arg2: character)
constructor(arg0: string, arg1: boolean, arg2: double)

public "getReturnValue"(): R
public "setReturnValue"(arg0: R): void
public "getReturnValueB"(): byte
public "getReturnValueC"(): character
public "getReturnValueZ"(): boolean
public "getReturnValueS"(): short
public "getReturnValueF"(): float
public "getReturnValueI"(): integer
public "getReturnValueD"(): double
public "getReturnValueJ"(): long
get "returnValue"(): R
set "returnValue"(value: R)
get "returnValueB"(): byte
get "returnValueC"(): character
get "returnValueZ"(): boolean
get "returnValueS"(): short
get "returnValueF"(): float
get "returnValueI"(): integer
get "returnValueD"(): double
get "returnValueJ"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackInfoReturnable$Type<R> = ($CallbackInfoReturnable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallbackInfoReturnable_<R> = $CallbackInfoReturnable$Type<(R)>;
}}
