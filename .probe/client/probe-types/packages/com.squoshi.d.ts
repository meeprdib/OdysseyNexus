declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellCastingMobBuilder" {
import {$IAnimatableJS, $IAnimatableJS$Type} from "packages/net/liopyu/entityjs/entities/living/entityjs/$IAnimatableJS"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EventBasedSpawnModifier$BiomeSpawn, $EventBasedSpawnModifier$BiomeSpawn$Type} from "packages/net/liopyu/entityjs/util/implementation/$EventBasedSpawnModifier$BiomeSpawn"
import {$ContextUtils$PartEntityParams, $ContextUtils$PartEntityParams$Type} from "packages/net/liopyu/entityjs/util/$ContextUtils$PartEntityParams"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BaseLivingEntityBuilder, $BaseLivingEntityBuilder$Type} from "packages/net/liopyu/entityjs/builders/living/$BaseLivingEntityBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GeoLayerJSBuilder, $GeoLayerJSBuilder$Type} from "packages/net/liopyu/entityjs/client/living/model/$GeoLayerJSBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$SpawnPredicate"
import {$PathfinderMobBuilder, $PathfinderMobBuilder$Type} from "packages/net/liopyu/entityjs/builders/living/entityjs/$PathfinderMobBuilder"
import {$PathfinderMob, $PathfinderMob$Type} from "packages/net/minecraft/world/entity/$PathfinderMob"

export class $SpellCastingMobBuilder<T extends ($PathfinderMob) & ($IAnimatableJS)> extends $PathfinderMobBuilder<(T)> {
static readonly "thisList": $List<($BaseLivingEntityBuilder<(any)>)>
 "placementType": $SpawnPlacements$Type
 "heightMap": $Heightmap$Types
 "spawnPredicate": $SpawnPlacements$SpawnPredicate<(any)>
static readonly "spawnList": $List<($BaseLivingEntityBuilder<(any)>)>
static readonly "biomeSpawnList": $List<($EventBasedSpawnModifier$BiomeSpawn)>
readonly "partEntityParamsList": $List<($ContextUtils$PartEntityParams<(T)>)>
readonly "layerList": $List<($GeoLayerJSBuilder<(T)>)>
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "isCasting"(isCasting: $Function$Type<($LivingEntity$Type), (any)>): $SpellCastingMobBuilder<(T)>
/**
 * Sets a callback function to be executed when the entity stops casting a spell.
 * 
 * Example usage:
 * ```javascript
 * spellEntityBuilder.onCancelledCast(entity => {
 *     // Custom logic to handle the entity cancelling their spell casts
 * });
 * ```
 */
public "onCancelledCast"(onCancelledCast: $Consumer$Type<($LivingEntity$Type)>): $SpellCastingMobBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastingMobBuilder$Type<T> = ($SpellCastingMobBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastingMobBuilder_<T> = $SpellCastingMobBuilder$Type<(T)>;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$DamageTypeHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$DamageTypeHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$DamageTypeHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$DamageTypeHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$DamageTypeHolder$Type)>): $ISSKJSUtils$DamageTypeHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$DamageTypeHolder$Type = ($ISSKJSUtils$DamageTypeHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$DamageTypeHolder_ = $ISSKJSUtils$DamageTypeHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastClientContext" {
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$CastClientContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getSpellLevel"(): integer
public "getCastData"(): $ICastData
get "entity"(): $LivingEntity
get "level"(): $Level
get "spellLevel"(): integer
get "castData"(): $ICastData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastClientContext$Type = ($CustomSpell$CastClientContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$CastClientContext_ = $CustomSpell$CastClientContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$SpellHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$SpellHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$SpellHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$SpellHolder$Type)>): $ISSKJSUtils$SpellHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$SpellHolder$Type = ($ISSKJSUtils$SpellHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$SpellHolder_ = $ISSKJSUtils$SpellHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/item/$StaffItemBuilderJS" {
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffItemBuilderJS extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "addAdditionalAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $StaffItemBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffItemBuilderJS$Type = ($StaffItemBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffItemBuilderJS_ = $StaffItemBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$AttributeHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$AttributeHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$AttributeHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$AttributeHolder$Type)>): $ISSKJSUtils$AttributeHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$AttributeHolder$Type = ($ISSKJSUtils$AttributeHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$AttributeHolder_ = $ISSKJSUtils$AttributeHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ISSKJSUtils$ResourceHolder<T extends $ISSKJSUtils$ResourceHolder<(T)>> {

}

export namespace $ISSKJSUtils$ResourceHolder {
function of<T>(o: any, arg1: $Function$Type<($ResourceLocation$Type), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$ResourceHolder$Type<T> = ($ISSKJSUtils$ResourceHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$ResourceHolder_<T> = $ISSKJSUtils$ResourceHolder$Type<(T)>;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$AbstractSpellWrapper$SpellStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractSpellWrapper$SpellStatus extends $Enum<($AbstractSpellWrapper$SpellStatus)> {
static readonly "REGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "UNREGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "ENABLED": $AbstractSpellWrapper$SpellStatus
static readonly "DISABLED": $AbstractSpellWrapper$SpellStatus


public static "values"(): ($AbstractSpellWrapper$SpellStatus)[]
public static "valueOf"(name: string): $AbstractSpellWrapper$SpellStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$SpellStatus$Type = (("registered") | ("disabled") | ("unregistered") | ("enabled")) | ($AbstractSpellWrapper$SpellStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellWrapper$SpellStatus_ = $AbstractSpellWrapper$SpellStatus$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastTargetingContext" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$PreCastTargetingContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getSpell"(): $AbstractSpell
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): $Level
get "spell"(): $AbstractSpell
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastTargetingContext$Type = ($CustomSpell$PreCastTargetingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastTargetingContext_ = $CustomSpell$PreCastTargetingContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellCastingMobJSBuilder" {
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SpellCastingMobJS, $SpellCastingMobJS$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellCastingMobJS"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EventBasedSpawnModifier$BiomeSpawn, $EventBasedSpawnModifier$BiomeSpawn$Type} from "packages/net/liopyu/entityjs/util/implementation/$EventBasedSpawnModifier$BiomeSpawn"
import {$ContextUtils$PartEntityParams, $ContextUtils$PartEntityParams$Type} from "packages/net/liopyu/entityjs/util/$ContextUtils$PartEntityParams"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BaseLivingEntityBuilder, $BaseLivingEntityBuilder$Type} from "packages/net/liopyu/entityjs/builders/living/$BaseLivingEntityBuilder"
import {$GeoLayerJSBuilder, $GeoLayerJSBuilder$Type} from "packages/net/liopyu/entityjs/client/living/model/$GeoLayerJSBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$SpawnPredicate"
import {$SpellCastingMobBuilder, $SpellCastingMobBuilder$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellCastingMobBuilder"

export class $SpellCastingMobJSBuilder extends $SpellCastingMobBuilder<($SpellCastingMobJS)> {
static readonly "thisList": $List<($BaseLivingEntityBuilder<(any)>)>
 "placementType": $SpawnPlacements$Type
 "heightMap": $Heightmap$Types
 "spawnPredicate": $SpawnPlacements$SpawnPredicate<(any)>
static readonly "spawnList": $List<($BaseLivingEntityBuilder<(any)>)>
static readonly "biomeSpawnList": $List<($EventBasedSpawnModifier$BiomeSpawn)>
readonly "partEntityParamsList": $List<($ContextUtils$PartEntityParams<(T)>)>
readonly "layerList": $List<($GeoLayerJSBuilder<(T)>)>
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastingMobJSBuilder$Type = ($SpellCastingMobJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastingMobJSBuilder_ = $SpellCastingMobJSBuilder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$AbstractSpellWrapper" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder"
import {$AbstractSpellWrapper$SpellStatus, $AbstractSpellWrapper$SpellStatus$Type} from "packages/com/squoshi/irons_spells_js/spell/$AbstractSpellWrapper$SpellStatus"

export interface $AbstractSpellWrapper {

}

export namespace $AbstractSpellWrapper {
function of(spellHolder: $ISSKJSUtils$SpellHolder$Type): $AbstractSpell
function exists(spellHolder: $ISSKJSUtils$SpellHolder$Type): boolean
function isEnabled(spellHolder: $ISSKJSUtils$SpellHolder$Type): boolean
function isSpell(o: any): boolean
function checkStatus(spellHolder: $ISSKJSUtils$SpellHolder$Type): $AbstractSpellWrapper$SpellStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$Type = ($AbstractSpellWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellWrapper_ = $AbstractSpellWrapper$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CustomSpell$Builder, $CustomSpell$Builder$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$Builder"
import {$AnimationHolder, $AnimationHolder$Type} from "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$DefaultConfig, $DefaultConfig$Type} from "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $CustomSpell extends $AbstractSpell {

constructor(b: $CustomSpell$Builder$Type)

public "getCastType"(): $CastType
public "getCastFinishAnimation"(): $AnimationHolder
public "checkPreCastConditions"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, playerMagicData: $MagicData$Type): boolean
public "getCastStartAnimation"(): $AnimationHolder
public "getDefaultConfig"(): $DefaultConfig
public "getSpellResource"(): $ResourceLocation
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "onServerPreCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, playerMagicData: $MagicData$Type): void
public "onClientCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, castData: $ICastData$Type): void
public "onClientPreCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, hand: $InteractionHand$Type, playerMagicData: $MagicData$Type): void
public "onCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, castSource: $CastSource$Type, playerMagicData: $MagicData$Type): void
public "canBeCraftedBy"(player: $Player$Type): boolean
public "needsLearning"(): boolean
public "getUniqueInfo"(spellLevel: integer, caster: $LivingEntity$Type): $List<($MutableComponent)>
public "allowLooting"(): boolean
get "castType"(): $CastType
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "defaultConfig"(): $DefaultConfig
get "spellResource"(): $ResourceLocation
get "castFinishSound"(): $Optional<($SoundEvent)>
get "castStartSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$Type = ($CustomSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell_ = $CustomSpell$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS$OnAntiMagicContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellProjectileJS$OnAntiMagicContext extends $Record {

constructor(getMagicData: $MagicData$Type, getEntity: $Entity$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getMagicData"(): $MagicData
public "getEntity"(): $Entity
get "magicData"(): $MagicData
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJS$OnAntiMagicContext$Type = ($SpellProjectileJS$OnAntiMagicContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJS$OnAntiMagicContext_ = $SpellProjectileJS$OnAntiMagicContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$Builder" {
import {$CustomSpell$PreCastClientContext, $CustomSpell$PreCastClientContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastClientContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$CustomSpell, $CustomSpell$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$SoundEventHolder, $ISSKJSUtils$SoundEventHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$CustomSpell$CastClientContext, $CustomSpell$CastClientContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastClientContext"
import {$CustomSpell$PreCastTargetingContext, $CustomSpell$PreCastTargetingContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastTargetingContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISSKJSUtils$SchoolHolder, $ISSKJSUtils$SchoolHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SchoolHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomSpell$PreCastContext, $CustomSpell$PreCastContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastContext"
import {$CustomSpell$CastContext, $CustomSpell$CastContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastContext"

export class $CustomSpell$Builder extends $BuilderBase<($CustomSpell)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $CustomSpell
public "getRegistryType"(): $RegistryInfo<($AbstractSpell)>
/**
 *     Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
 * 
 *     Example: ```js
 *     .checkPreCastConditions(ctx => {
 *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
 *     })
 *     ```
 */
public "checkPreCastConditions"(predicate: $Predicate$Type<($CustomSpell$PreCastTargetingContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the cast start animation for the spell.
 */
public "setCastStartAnimation"(path: string, playOnce: boolean, animatesLegs: boolean): $CustomSpell$Builder
/**
 *     Sets the spell power per level.
 */
public "setSpellPowerPerLevel"(power: integer): $CustomSpell$Builder
/**
 *     Sets the cast finish animation for the spell.
 */
public "setCastFinishAnimation"(path: string, playOnce: boolean, animatesLegs: boolean): $CustomSpell$Builder
/**
 *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
 */
public "setManaCostPerLevel"(cost: integer): $CustomSpell$Builder
/**
 *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
 */
public "setBaseSpellPower"(power: integer): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
 */
public "onPreCast"(consumer: $Consumer$Type<($CustomSpell$PreCastContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play when it starts casting.
 */
public "setStartSound"(soundEvent: $ISSKJSUtils$SoundEventHolder$Type): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
 */
public "onPreClientCast"(consumer: $Consumer$Type<($CustomSpell$PreCastClientContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
 */
public "setCastType"(type: $CastType$Type): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play after it is done casting.
 */
public "setFinishSound"(soundEvent: $ISSKJSUtils$SoundEventHolder$Type): $CustomSpell$Builder
/**
 *     Sets the school of the spell. The different schools each are a resource location.
 * 
 *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
 *     Another example: `setSchool('irons_spellbooks:blood')`
 */
public "setSchool"(schoolHolder: $ISSKJSUtils$SchoolHolder$Type): $CustomSpell$Builder
/**
 *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
 */
public "setUniqueInfo"(info: $BiFunction$Type<(integer), ($LivingEntity$Type), ($List$Type<($MutableComponent$Type)>)>): $CustomSpell$Builder
/**
 *     Sets the base mana cost. The mana cost per level adds on to this.
 */
public "setBaseManaCost"(cost: integer): $CustomSpell$Builder
/**
 *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
 */
public "setCastTime"(time: integer): $CustomSpell$Builder
/**
 *     Sets whether or not the spell can be looted from a loot table.
 */
public "setAllowLooting"(allow: boolean): $CustomSpell$Builder
/**
 *     Sets the max level of the spell. Goes up to `10` from `1`.
 */
public "setMaxLevel"(level: integer): $CustomSpell$Builder
/**
 *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
 */
public "setCooldownSeconds"(seconds: integer): $CustomSpell$Builder
/**
 *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
 */
public "setMinRarity"(rarity: $SpellRarity$Type): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
 */
public "onClientCast"(consumer: $Consumer$Type<($CustomSpell$CastClientContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast. This is what the spell does when it is casted.
 */
public "onCast"(consumer: $Consumer$Type<($CustomSpell$CastContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the predicate for whether or not the spell can be crafted by a player.
 */
public "canBeCraftedBy"(predicate: $Predicate$Type<($Player$Type)>): $CustomSpell$Builder
/**
 *     Sets whether or not the spell needs to be learned before it can be casted.
 */
public "needsLearning"(needs: boolean): $CustomSpell$Builder
get "registryType"(): $RegistryInfo<($AbstractSpell)>
set "spellPowerPerLevel"(value: integer)
set "manaCostPerLevel"(value: integer)
set "baseSpellPower"(value: integer)
set "startSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "castType"(value: $CastType$Type)
set "finishSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "school"(value: $ISSKJSUtils$SchoolHolder$Type)
set "uniqueInfo"(value: $BiFunction$Type<(integer), ($LivingEntity$Type), ($List$Type<($MutableComponent$Type)>)>)
set "baseManaCost"(value: integer)
set "castTime"(value: integer)
set "allowLooting"(value: boolean)
set "maxLevel"(value: integer)
set "cooldownSeconds"(value: integer)
set "minRarity"(value: $SpellRarity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$Builder$Type = ($CustomSpell$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$Builder_ = $CustomSpell$Builder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$FacetHolder, $FacetHolder$Type} from "packages/com/redpxnda/nucleus/facet/$FacetHolder"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractMagicProjectile, $AbstractMagicProjectile$Type} from "packages/io/redspace/ironsspellbooks/entity/spells/$AbstractMagicProjectile"
import {$AntiMagicSusceptible, $AntiMagicSusceptible$Type} from "packages/io/redspace/ironsspellbooks/entity/mobs/$AntiMagicSusceptible"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MoverType, $MoverType$Type} from "packages/net/minecraft/world/entity/$MoverType"
import {$SpellProjectileJSBuilder, $SpellProjectileJSBuilder$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellProjectileJSBuilder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$IProjectileEntityJS, $IProjectileEntityJS$Type} from "packages/net/liopyu/entityjs/entities/nonliving/entityjs/$IProjectileEntityJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LightningBolt, $LightningBolt$Type} from "packages/net/minecraft/world/entity/$LightningBolt"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $SpellProjectileJS extends $AbstractMagicProjectile implements $IProjectileEntityJS, $AntiMagicSusceptible {
 "builder": $SpellProjectileJSBuilder
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "dimensions": $EntityDimensions
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(builder: $SpellProjectileJSBuilder$Type, pEntityType: $EntityType$Type<(any)>, pLevel: $Level$Type)
constructor(entityType: $EntityType$Type<(any)>, levelIn: $Level$Type, shooter: $LivingEntity$Type)

public "isInvulnerableTo"(p_20122_: $DamageSource$Type): boolean
public "playerTouch"(player: $Player$Type): void
public "move"(pType: $MoverType$Type, pPos: $Vec3$Type): void
public "tick"(): void
public "stopRiding"(): void
public "rideTick"(): void
public "m_7378_"(pCompound: $CompoundTag$Type): void
public "isGlowing"(): boolean
public "m_7380_"(pCompound: $CompoundTag$Type): void
public "getSpeed"(): float
public "entityName"(): string
public "onClientRemoval"(): void
public "lavaHurt"(): void
public "dampensVibrations"(): boolean
public "shouldRenderAtSqrDistance"(distance: double): boolean
public "canCollideWith"(pEntity: $Entity$Type): boolean
public "showVehicleHealth"(): boolean
public "thunderHit"(p_19927_: $ServerLevel$Type, p_19928_: $LightningBolt$Type): void
public "getDamage"(): float
public "getMaxFallDistance"(): integer
public "shootFromRotation"(pShooter: $Entity$Type, pX: float, pY: float, pZ: float, pVelocity: float, pInaccuracy: float): void
public "getControllingPassenger"(): $LivingEntity
public "canFreeze"(): boolean
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, posRotationIncrements: integer, teleport: boolean): void
public "canChangeDimensions"(): boolean
public "canTrample"(state: $BlockState$Type, pos: $BlockPos$Type, fallDistance: float): boolean
public "onRemovedFromWorld"(): void
public "onAddedToWorld"(): void
public "setDamage"(damage: float): void
public "isFreezing"(): boolean
public "mayInteract"(p_146843_: $Level$Type, p_146844_: $BlockPos$Type): boolean
public "push"(pEntity: $Entity$Type): void
public "setSpeed"(speed: float): void
public "attack"(pSource: $DamageSource$Type, pAmount: float): boolean
public "isAttackable"(): boolean
public "setSprinting"(sprinting: boolean): void
public "causeFallDamage"(pFallDistance: float, pMultiplier: float, pSource: $DamageSource$Type): boolean
public "isPushable"(): boolean
public "onAntiMagic"(playerMagicData: $MagicData$Type): void
public "getImpactSound"(): $Optional<($SoundEvent)>
public "impactParticles"(v: double, v1: double, v2: double): void
public "trailParticles"(): void
public static "of"(holder: any): $FacetHolder
get "glowing"(): boolean
get "speed"(): float
get "damage"(): float
get "maxFallDistance"(): integer
get "controllingPassenger"(): $LivingEntity
set "damage"(value: float)
get "freezing"(): boolean
set "speed"(value: float)
get "attackable"(): boolean
set "sprinting"(value: boolean)
get "pushable"(): boolean
get "impactSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJS$Type = ($SpellProjectileJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJS_ = $SpellProjectileJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS$ImpactParticleContext" {
import {$SpellProjectileJS, $SpellProjectileJS$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS"

export class $SpellProjectileJS$ImpactParticleContext {
readonly "entity": $SpellProjectileJS
readonly "x": double
readonly "y": double
readonly "z": double

constructor(entity: $SpellProjectileJS$Type, x: double, y: double, z: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJS$ImpactParticleContext$Type = ($SpellProjectileJS$ImpactParticleContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJS$ImpactParticleContext_ = $SpellProjectileJS$ImpactParticleContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastClientContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$PreCastClientContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
public "getHand"(): $InteractionHand
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastClientContext$Type = ($CustomSpell$PreCastClientContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastClientContext_ = $CustomSpell$PreCastClientContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$SoundEventHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$SoundEventHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$SoundEventHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$SoundEventHolder$Type)>): $ISSKJSUtils$SoundEventHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$SoundEventHolder$Type = ($ISSKJSUtils$SoundEventHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$SoundEventHolder_ = $ISSKJSUtils$SoundEventHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/item/$MagicSwordItemBuilderJS" {
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$MagicSwordItem, $MagicSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicSwordItemBuilderJS extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $MagicSwordItem
public "addAdditionalAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $MagicSwordItemBuilderJS
public "addDefaultSpell"(spell: $ISSKJSUtils$SpellHolder$Type, spellLevel: integer): $MagicSwordItemBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItemBuilderJS$Type = ($MagicSwordItemBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicSwordItemBuilderJS_ = $MagicSwordItemBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellPreCastEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$SpellPreCastEvent, $SpellPreCastEvent$Type} from "packages/io/redspace/ironsspellbooks/api/events/$SpellPreCastEvent"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellPreCastEventJS extends $PlayerEventJS {

constructor(event: $SpellPreCastEvent$Type)

/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): string
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEventJS$Type = ($SpellPreCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPreCastEventJS_ = $SpellPreCastEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellProjectileJSBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ProjectileEntityBuilder, $ProjectileEntityBuilder$Type} from "packages/net/liopyu/entityjs/builders/nonliving/entityjs/$ProjectileEntityBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellProjectileJS, $SpellProjectileJS$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS"
import {$SpellProjectileJS$OnAntiMagicContext, $SpellProjectileJS$OnAntiMagicContext$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS$OnAntiMagicContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpellProjectileJS$ImpactParticleContext, $SpellProjectileJS$ImpactParticleContext$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellProjectileJS$ImpactParticleContext"

export class $SpellProjectileJSBuilder extends $ProjectileEntityBuilder<($SpellProjectileJS)> {
static readonly "thisList": $List<($ProjectileEntityBuilder<(any)>)>
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

/**
 * Sets the impact sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * builder.setImpactSound("minecraft:entity.generic.swim");
 * ```
 */
public "setImpactSound"(sound: any): $SpellProjectileJSBuilder
public "onAntiMagic"(onAntiMagic: $Consumer$Type<($SpellProjectileJS$OnAntiMagicContext$Type)>): $SpellProjectileJSBuilder
/**
 * A consumer determining the impact particles for the spell.
 * 
 * Example usage:
 * ```javascript
 * builder.impactParticles(context => {
 *     const {x, y, z, entity} = context
 *     // Logic for spawning impact particles
 * });
 * ```
 */
public "impactParticles"(impactParticles: $Consumer$Type<($SpellProjectileJS$ImpactParticleContext$Type)>): $SpellProjectileJSBuilder
/**
 * A consumer determining the trailing particles behind the spell.
 * 
 * Example usage:
 * ```javascript
 * builder.trailParticles(entity => {
 *     // Logic for spawning trailing particles
 * });
 * ```
 */
public "trailParticles"(trailParticles: $Consumer$Type<($SpellProjectileJS$Type)>): $SpellProjectileJSBuilder
set "impactSound"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJSBuilder$Type = ($SpellProjectileJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJSBuilder_ = $SpellProjectileJSBuilder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/$SpellCastingMobJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$FacetHolder, $FacetHolder$Type} from "packages/com/redpxnda/nucleus/facet/$FacetHolder"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$Type} from "packages/net/minecraft/world/item/$ProjectileWeaponItem"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractSpellCastingMob, $AbstractSpellCastingMob$Type} from "packages/io/redspace/ironsspellbooks/entity/mobs/abstract_spell_casting_mob/$AbstractSpellCastingMob"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$SpellCastingMobJSBuilder, $SpellCastingMobJSBuilder$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellCastingMobJSBuilder"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$PartEntityJS, $PartEntityJS$Type} from "packages/net/liopyu/entityjs/entities/nonliving/entityjs/$PartEntityJS"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$IAnimatableJS, $IAnimatableJS$Type} from "packages/net/liopyu/entityjs/entities/living/entityjs/$IAnimatableJS"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$BaseLivingEntityBuilder, $BaseLivingEntityBuilder$Type} from "packages/net/liopyu/entityjs/builders/living/$BaseLivingEntityBuilder"
import {$SyncedSpellData, $SyncedSpellData$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$IMagicEntity, $IMagicEntity$Type} from "packages/io/redspace/ironsspellbooks/api/entity/$IMagicEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LivingEntity$Fallsounds, $LivingEntity$Fallsounds$Type} from "packages/net/minecraft/world/entity/$LivingEntity$Fallsounds"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$LightningBolt, $LightningBolt$Type} from "packages/net/minecraft/world/entity/$LightningBolt"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellCastingMobJS extends $AbstractSpellCastingMob implements $IAnimatableJS, $IMagicEntity {
 "hasUsedSingleAttack": boolean
readonly "partEntities": ($PartEntityJS<(any)>)[]
static readonly "modelResource": $ResourceLocation
static readonly "textureResource": $ResourceLocation
static readonly "animationInstantCast": $ResourceLocation
 "entityJs$builder": any
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "lookControl": $LookControl
 "navigation": $PathNavigation
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
readonly "handDropChances": (float)[]
readonly "armorDropChances": (float)[]
 "persistenceRequired": boolean
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
readonly "activeEffects": $Map<($MobEffect), ($MobEffectInstance)>
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "effectsDirty": boolean
 "level": $Level
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "dimensions": $EntityDimensions
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(builder: $SpellCastingMobJSBuilder$Type, pEntityType: $EntityType$Type<(any)>, pLevel: $Level$Type)

public "jump"(): void
public "isInvulnerableTo"(p_20122_: $DamageSource$Type): boolean
public "playerTouch"(p_20081_: $Player$Type): void
public "die"(damageSource: $DamageSource$Type): void
public "aiStep"(): void
public "tick"(): void
public "getItemBySlot"(slot: $EquipmentSlot$Type): $ItemStack
public "stopRiding"(): void
public "heal"(amount: float): void
public "rideTick"(): void
public "readAdditionalSaveData"(pCompound: $CompoundTag$Type): void
public "getMagicData"(): $MagicData
public "isSleeping"(): boolean
public "isGlowing"(): boolean
public "addAdditionalSaveData"(pCompound: $CompoundTag$Type): void
public "setTarget"(target: $LivingEntity$Type): void
public "entityName"(): string
public "onClientRemoval"(): void
public "lavaHurt"(): void
public "dampensVibrations"(): boolean
public "canCollideWith"(pEntity: $Entity$Type): boolean
public "showVehicleHealth"(): boolean
public "thunderHit"(p_19927_: $ServerLevel$Type, p_19928_: $LightningBolt$Type): void
public "getMaxFallDistance"(): integer
public "removeWhenFarAway"(pDistanceToClosestPlayer: double): boolean
public "getAmbientSoundInterval"(): integer
public "getWalkTargetValue"(pos: $BlockPos$Type, levelReader: $LevelReader$Type): float
public "canFireProjectileWeapon"(projectileWeapon: $ProjectileWeaponItem$Type): boolean
public "ate"(): void
public "canHoldItem"(stack: $ItemStack$Type): boolean
public "isPersistenceRequired"(): boolean
public "canBeLeashed"(pPlayer: $Player$Type): boolean
public "m_6071_"(pPlayer: $Player$Type, pHand: $InteractionHand$Type): $InteractionResult
public "getMeleeAttackRangeSqr"(entity: $LivingEntity$Type): double
public "getBuilder"(): $BaseLivingEntityBuilder<(any)>
public "getControllingPassenger"(): $LivingEntity
public "doHurtTarget"(pEntity: $Entity$Type): boolean
public "canFreeze"(): boolean
public "isSensitiveToWater"(): boolean
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, posRotationIncrements: integer, teleport: boolean): void
public "onItemPickup"(p_21054_: $ItemEntity$Type): void
public "hasLineOfSight"(entity: $Entity$Type): boolean
public "onEnterCombat"(): void
public "onLeaveCombat"(): void
public "onSyncedDataUpdated"(pKey: $EntityDataAccessor$Type<(any)>): void
public "attackable"(): boolean
public "isAffectedByPotions"(): boolean
public "canChangeDimensions"(): boolean
public "canDisableShield"(): boolean
public "recreateFromPacket"(pPacket: $ClientboundAddEntityPacket$Type): void
public "setId"(entityId: integer): void
public "canTrample"(state: $BlockState$Type, pos: $BlockPos$Type, fallDistance: float): boolean
public "onRemovedFromWorld"(): void
public "getParts"(): ($PartEntity<(any)>)[]
public "onAddedToWorld"(): void
public "isMultipartEntity"(): boolean
public "canFireProjectileWeapons"(projectileWeapon: $ProjectileWeaponItem$Type): boolean
public "startDrinkingPotion"(): void
public "notifyDangerousProjectile"(projectile: $Projectile$Type): void
public "startAutoSpinAttack"(pAttackTicks: integer): void
public "setTeleportLocationBehindTarget"(distance: integer): boolean
public "setBurningDashDirectionData"(): void
public "shouldRiderFaceForward"(player: $Player$Type): boolean
public "isFreezing"(): boolean
public "mayInteract"(p_146843_: $Level$Type, p_146844_: $BlockPos$Type): boolean
public "isCasting"(): boolean
public "isInvertedHealAndHarm"(): boolean
public "canAttackType"(entityType: $EntityType$Type<(any)>): boolean
public "canBreatheUnderwater"(): boolean
public "shouldDropExperience"(): boolean
public "getScale"(): float
public "getVisibilityPercent"(p_20969_: $Entity$Type): double
public "canBeAffected"(effectInstance: $MobEffectInstance$Type): boolean
public "canAttack"(entity: $LivingEntity$Type): boolean
public "onEffectAdded"(effectInstance: $MobEffectInstance$Type, entity: $Entity$Type): void
public "getEatingSound"(itemStack: $ItemStack$Type): $SoundEvent
public "m_5639_"(fallDistance: float, pDamageMultiplier: float): integer
public "getJumpBoostPower"(): float
public "canStandOnFluid"(fluidState: $FluidState$Type): boolean
public "setItemSlot"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): void
public "m_6475_"(pDamageSource: $DamageSource$Type, pDamageAmount: float): void
public "getMyRidingOffset"(): double
public "onClimbable"(): boolean
public "getMobType"(): $MobType
public "isOnSameTeam"(pEntity: $Entity$Type): boolean
public "setSprinting"(sprinting: boolean): void
public "startSleeping"(blockPos: $BlockPos$Type): void
public "stopSleeping"(): void
public "travel"(pTravelVector: $Vec3$Type): void
public "causeFallDamage"(distance: float, damageMultiplier: float, damageSource: $DamageSource$Type): boolean
public "getFallSounds"(): $LivingEntity$Fallsounds
public "getExperienceReward"(): integer
public "getHandSlots"(): $Iterable<($ItemStack)>
public "getArmorSlots"(): $Iterable<($ItemStack)>
public "onEquipItem"(slot: $EquipmentSlot$Type, previous: $ItemStack$Type, current: $ItemStack$Type): void
public "getMainArm"(): $HumanoidArm
public "canTakeItem"(itemStack: $ItemStack$Type): boolean
public "eat"(level: $Level$Type, itemStack: $ItemStack$Type): $ItemStack
public "isPushable"(): boolean
public "canFireProjectileWeaponPredicate"(projectileWeapon: $ProjectileWeaponItem$Type): boolean
public "performRangedAttack"(pTarget: $LivingEntity$Type, pDistanceFactor: float): void
public "isDrinkingPotion"(): boolean
public "setSyncedSpellData"(syncedSpellData: $SyncedSpellData$Type): void
public "initiateCastSpell"(spell: $AbstractSpell$Type, spellLevel: integer): void
public "onJump"(): void
public "canJump"(): boolean
public "cancelCast"(): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "shouldJump"(): boolean
public "tickPart"(partName: string, offsetX: double, offsetY: double, offsetZ: double): void
public "setThisJumping"(value: boolean): void
/**
 * Calls a triggerable animation to be played anywhere.
 */
public "triggerAnimation"(controllerName: string, animName: string): void
public "ableToJump"(): boolean
public "getTypeId"(): string
public "getEntityType"(): $EntityType<(any)>
public "getTick"(entity: any): double
public "triggerAnim"<D>(relatedEntity: $Entity$Type, instanceId: long, controllerName: string, animName: string): void
public "triggerAnim"(controllerName: string, animName: string): void
public "registerControllers"(data: $AnimatableManager$ControllerRegistrar$Type): void
public "getHasUsedSingleAttack"(): boolean
public "setHasUsedSingleAttack"(arg0: boolean): void
public "castComplete"(): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "of"(holder: any): $FacetHolder
get "magicData"(): $MagicData
get "sleeping"(): boolean
get "glowing"(): boolean
set "target"(value: $LivingEntity$Type)
get "maxFallDistance"(): integer
get "ambientSoundInterval"(): integer
get "persistenceRequired"(): boolean
get "builder"(): $BaseLivingEntityBuilder<(any)>
get "controllingPassenger"(): $LivingEntity
get "sensitiveToWater"(): boolean
get "affectedByPotions"(): boolean
set "id"(value: integer)
get "parts"(): ($PartEntity<(any)>)[]
get "multipartEntity"(): boolean
set "teleportLocationBehindTarget"(value: integer)
get "freezing"(): boolean
get "casting"(): boolean
get "invertedHealAndHarm"(): boolean
get "scale"(): float
get "jumpBoostPower"(): float
get "myRidingOffset"(): double
get "mobType"(): $MobType
set "sprinting"(value: boolean)
get "fallSounds"(): $LivingEntity$Fallsounds
get "experienceReward"(): integer
get "handSlots"(): $Iterable<($ItemStack)>
get "armorSlots"(): $Iterable<($ItemStack)>
get "mainArm"(): $HumanoidArm
get "pushable"(): boolean
get "drinkingPotion"(): boolean
set "syncedSpellData"(value: $SyncedSpellData$Type)
get "animatableInstanceCache"(): $AnimatableInstanceCache
set "thisJumping"(value: boolean)
get "typeId"(): string
get "entityType"(): $EntityType<(any)>
get "hasUsedSingleAttack"(): boolean
set "hasUsedSingleAttack"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastingMobJS$Type = ($SpellCastingMobJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastingMobJS_ = $SpellCastingMobJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder" {
import {$AlchemistCauldronRecipe, $AlchemistCauldronRecipe$Type} from "packages/io/redspace/ironsspellbooks/block/alchemist_cauldron/$AlchemistCauldronRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

/**
 *     Creates a new Alchemist Cauldron recipe. Used in StartupEvents.postInit
 */
export class $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder {

constructor()

public "register"(): $AlchemistCauldronRecipe
public static "create"(): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setInput"(input: $ItemStack$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setResult"(result: $ItemStack$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setIngredient"(ingredient: $ItemStack$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setPotionInput"(potionInput: $Potion$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setResultLimit"(i: integer): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setBaseRequirement"(i: integer): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
set "input"(value: $ItemStack$Type)
set "result"(value: $ItemStack$Type)
set "ingredient"(value: $ItemStack$Type)
set "potionInput"(value: $Potion$Type)
set "resultLimit"(value: integer)
set "baseRequirement"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder$Type = ($AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder_ = $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SchoolHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$SchoolHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$SchoolHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$SchoolHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$SchoolHolder$Type)>): $ISSKJSUtils$SchoolHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$SchoolHolder$Type = ($ISSKJSUtils$SchoolHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$SchoolHolder_ = $ISSKJSUtils$SchoolHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellSelectionEventJS" {
import {$SpellSelectionManager$SpellSelectionEvent, $SpellSelectionManager$SpellSelectionEvent$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager$SpellSelectionEvent"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$SpellSelectionManager, $SpellSelectionManager$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"

export class $SpellSelectionEventJS extends $PlayerEventJS {

constructor(event: $SpellSelectionManager$SpellSelectionEvent$Type)

public "getManager"(): $SpellSelectionManager
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(spellData: $SpellData$Type, slotId: string, localSlotIndex: integer): void
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(spellData: $SpellData$Type, slotId: string, localSlotIndex: integer, globalIndex: integer): void
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
get "manager"(): $SpellSelectionManager
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionEventJS$Type = ($SpellSelectionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelectionEventJS_ = $SpellSelectionEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/entity/attribute/$SpellAttributeBuilderJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellAttributeBuilderJS extends $BuilderBase<($Attribute)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "setDefaultValue"(defaultValue: double): $SpellAttributeBuilderJS
public "createObject"(): $Attribute
public "getRegistryType"(): $RegistryInfo<($Attribute)>
public "setMaximumValue"(maximumValue: double): $SpellAttributeBuilderJS
public "setMinimumValue"(minimumValue: double): $SpellAttributeBuilderJS
set "defaultValue"(value: double)
get "registryType"(): $RegistryInfo<($Attribute)>
set "maximumValue"(value: double)
set "minimumValue"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellAttributeBuilderJS$Type = ($SpellAttributeBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellAttributeBuilderJS_ = $SpellAttributeBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$PreCastContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastContext$Type = ($CustomSpell$PreCastContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastContext_ = $CustomSpell$PreCastContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$ChangeManaEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$ChangeManaEvent, $ChangeManaEvent$Type} from "packages/io/redspace/ironsspellbooks/api/events/$ChangeManaEvent"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"

export class $ChangeManaEventJS extends $PlayerEventJS {

constructor(event: $ChangeManaEvent$Type)

/**
 *     Returns the player's current MagicData.
 */
public "getMagicData"(): $MagicData
/**
 *     Changes the value that the mana will change to during the event.
 */
public "setNewMana"(newMana: float): void
/**
 *     Returns the float mana value that the value was before it was changed.
 */
public "getOldMana"(): float
/**
 *     Returns the float mana value that the value changed to after it was changed.
 */
public "getNewMana"(): float
get "magicData"(): $MagicData
set "newMana"(value: float)
get "oldMana"(): float
get "newMana"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEventJS$Type = ($ChangeManaEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeManaEventJS_ = $ChangeManaEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/school/$SchoolTypeJSBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$SoundEventHolder, $ISSKJSUtils$SoundEventHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder"
import {$ISSKJSUtils$DamageTypeHolder, $ISSKJSUtils$DamageTypeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$DamageTypeHolder"

export class $SchoolTypeJSBuilder extends $BuilderBase<($SchoolType)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "setName"(name: $Component$Type): $SchoolTypeJSBuilder
public "createObject"(): $SchoolType
public "getRegistryType"(): $RegistryInfo<($SchoolType)>
public "setDefaultCastSound"(defaultCastSound: $ISSKJSUtils$SoundEventHolder$Type): $SchoolTypeJSBuilder
public "setResistanceAttribute"(resistanceAttribute: $ISSKJSUtils$AttributeHolder$Type): $SchoolTypeJSBuilder
public "setPowerAttribute"(powerAttribute: $ISSKJSUtils$AttributeHolder$Type): $SchoolTypeJSBuilder
public "setFocus"(focus: $ResourceLocation$Type): $SchoolTypeJSBuilder
public "setDamageType"(damageType: $ISSKJSUtils$DamageTypeHolder$Type): $SchoolTypeJSBuilder
set "name"(value: $Component$Type)
get "registryType"(): $RegistryInfo<($SchoolType)>
set "defaultCastSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "resistanceAttribute"(value: $ISSKJSUtils$AttributeHolder$Type)
set "powerAttribute"(value: $ISSKJSUtils$AttributeHolder$Type)
set "focus"(value: $ResourceLocation$Type)
set "damageType"(value: $ISSKJSUtils$DamageTypeHolder$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolTypeJSBuilder$Type = ($SchoolTypeJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolTypeJSBuilder_ = $SchoolTypeJSBuilder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $CustomSpell$CastContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
public "getCastSource"(): $CastSource
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
get "castSource"(): $CastSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastContext$Type = ($CustomSpell$CastContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$CastContext_ = $CustomSpell$CastContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellOnCastEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$SpellOnCastEvent, $SpellOnCastEvent$Type} from "packages/io/redspace/ironsspellbooks/api/events/$SpellOnCastEvent"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellOnCastEventJS extends $PlayerEventJS {

constructor(event: $SpellOnCastEvent$Type)

/**
 *     Returns the original mana cost.
 */
public "getOriginalManaCost"(): integer
/**
 *     Returns the original spell level of the spell that was cast.
 */
public "getOriginalSpellLevel"(): integer
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): string
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Sets the new mana cost.
 */
public "setManaCost"(manaCost: integer): void
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the new mana cost.
 */
public "getManaCost"(): integer
/**
 *     Sets the new spell level of the spell that was cast.
 */
public "setSpellLevel"(spellLevel: integer): void
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
get "originalManaCost"(): integer
get "originalSpellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
set "manaCost"(value: integer)
get "castSource"(): $CastSource
get "manaCost"(): integer
set "spellLevel"(value: integer)
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEventJS$Type = ($SpellOnCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellOnCastEventJS_ = $SpellOnCastEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/item/$SpellBookBuilderJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SpellBook, $SpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/$SpellBook"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellBookBuilderJS extends $BuilderBase<($SpellBook)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $SpellBook
public "getRegistryType"(): $RegistryInfo<($Item)>
public "addDefaultAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $SpellBookBuilderJS
public "addDefaultSpell"(spell: $ISSKJSUtils$SpellHolder$Type, spellLevel: integer): $SpellBookBuilderJS
public "setMaxSpellSlots"(maxSpellSlots: integer): $SpellBookBuilderJS
get "registryType"(): $RegistryInfo<($Item)>
set "maxSpellSlots"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBookBuilderJS$Type = ($SpellBookBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellBookBuilderJS_ = $SpellBookBuilderJS$Type;
}}
