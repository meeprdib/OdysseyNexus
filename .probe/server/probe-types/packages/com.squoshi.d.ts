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
public "getSpellLevel"(): integer
public "getLevel"(): $Level
public "getCastData"(): $ICastData
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "level"(): $Level
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
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CustomSpell$Builder, $CustomSpell$Builder$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$Builder"
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
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "onServerPreCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, playerMagicData: $MagicData$Type): void
public "onCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, castSource: $CastSource$Type, playerMagicData: $MagicData$Type): void
public "onClientCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, castData: $ICastData$Type): void
public "getUniqueInfo"(spellLevel: integer, caster: $LivingEntity$Type): $List<($MutableComponent)>
public "onClientPreCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, hand: $InteractionHand$Type, playerMagicData: $MagicData$Type): void
public "canBeCraftedBy"(player: $Player$Type): boolean
public "needsLearning"(): boolean
public "allowLooting"(): boolean
get "castType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
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
public "getEntity"(): $Entity
public "getMagicData"(): $MagicData
get "entity"(): $Entity
get "magicData"(): $MagicData
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
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CustomSpell$PreCastClientContext, $CustomSpell$PreCastClientContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastClientContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$CustomSpell, $CustomSpell$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$CustomSpell$CastClientContext, $CustomSpell$CastClientContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastClientContext"
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

/**
 *     Sets the sound that the spell will play after it is done casting.
 */
public "setFinishSound"(soundEvent: $SoundEvent$Type): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
 */
public "onPreClientCast"(consumer: $Consumer$Type<($CustomSpell$PreCastClientContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
 */
public "onPreCast"(consumer: $Consumer$Type<($CustomSpell$PreCastContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the school of the spell. The different schools each are a resource location.
 * 
 *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
 *     Another example: `setSchool('irons_spellbooks:blood')`
 */
public "setSchool"(schoolHolder: $ISSKJSUtils$SchoolHolder$Type): $CustomSpell$Builder
/**
 *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
 */
public "setBaseSpellPower"(power: integer): $CustomSpell$Builder
/**
 *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
 */
public "setCastType"(type: $CastType$Type): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play when it starts casting.
 */
public "setStartSound"(soundEvent: $SoundEvent$Type): $CustomSpell$Builder
/**
 *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
 */
public "setUniqueInfo"(info: $List$Type<($MutableComponent$Type)>): $CustomSpell$Builder
/**
 *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
 */
public "setCastTime"(time: integer): $CustomSpell$Builder
/**
 *     Sets the base mana cost. The mana cost per level adds on to this.
 */
public "setBaseManaCost"(cost: integer): $CustomSpell$Builder
/**
 *     Sets whether or not the spell can be looted from a loot table.
 */
public "setAllowLooting"(allow: boolean): $CustomSpell$Builder
public "createObject"(): $CustomSpell
public "getRegistryType"(): $RegistryInfo<($AbstractSpell)>
/**
 *     Sets the callback for when the spell is cast. This is what the spell does when it is casted.
 */
public "onCast"(consumer: $Consumer$Type<($CustomSpell$CastContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
 */
public "onClientCast"(consumer: $Consumer$Type<($CustomSpell$CastClientContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the predicate for whether or not the spell can be crafted by a player.
 */
public "canBeCraftedBy"(predicate: $Predicate$Type<($Player$Type)>): $CustomSpell$Builder
/**
 *     Sets whether or not the spell needs to be learned before it can be casted.
 */
public "needsLearning"(needs: boolean): $CustomSpell$Builder
/**
 *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
 */
public "setMinRarity"(rarity: $SpellRarity$Type): $CustomSpell$Builder
/**
 *     Sets the max level of the spell. Goes up to `10` from `1`.
 */
public "setMaxLevel"(level: integer): $CustomSpell$Builder
/**
 *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
 */
public "setCooldownSeconds"(seconds: integer): $CustomSpell$Builder
/**
 *     Sets the spell power per level.
 */
public "setSpellPowerPerLevel"(power: integer): $CustomSpell$Builder
/**
 *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
 */
public "setManaCostPerLevel"(cost: integer): $CustomSpell$Builder
set "finishSound"(value: $SoundEvent$Type)
set "school"(value: $ISSKJSUtils$SchoolHolder$Type)
set "baseSpellPower"(value: integer)
set "castType"(value: $CastType$Type)
set "startSound"(value: $SoundEvent$Type)
set "uniqueInfo"(value: $List$Type<($MutableComponent$Type)>)
set "castTime"(value: integer)
set "baseManaCost"(value: integer)
set "allowLooting"(value: boolean)
get "registryType"(): $RegistryInfo<($AbstractSpell)>
set "minRarity"(value: $SpellRarity$Type)
set "maxLevel"(value: integer)
set "cooldownSeconds"(value: integer)
set "spellPowerPerLevel"(value: integer)
set "manaCostPerLevel"(value: integer)
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
import {$SpellProjectileJSBuilder, $SpellProjectileJSBuilder$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellProjectileJSBuilder"
import {$AntiMagicSusceptible, $AntiMagicSusceptible$Type} from "packages/io/redspace/ironsspellbooks/entity/mobs/$AntiMagicSusceptible"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$IProjectileEntityJS, $IProjectileEntityJS$Type} from "packages/net/liopyu/entityjs/entities/nonliving/entityjs/$IProjectileEntityJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellProjectileJS extends $AbstractMagicProjectile implements $IProjectileEntityJS, $AntiMagicSusceptible {
 "builder": $SpellProjectileJSBuilder
 "ownerUUID": $UUID
 "cachedOwner": $Entity
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

public "getSpeed"(): float
public "m_7380_"(pCompound: $CompoundTag$Type): void
public "m_7378_"(pCompound: $CompoundTag$Type): void
public "onAntiMagic"(playerMagicData: $MagicData$Type): void
public "getImpactSound"(): $Optional<($SoundEvent)>
public "impactParticles"(v: double, v1: double, v2: double): void
public "trailParticles"(): void
public static "of"(holder: any): $FacetHolder
get "speed"(): float
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
public "getHand"(): $InteractionHand
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
get "hand"(): $InteractionHand
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "level"(): $Level
get "playerMagicData"(): $MagicData
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
public "addDefaultSpell"(spell: $ISSKJSUtils$SpellHolder$Type, spellLevel: integer): $MagicSwordItemBuilderJS
public "addAdditionalAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $MagicSwordItemBuilderJS
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
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): string
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
get "castSource"(): $CastSource
get "schoolType"(): $SchoolType
get "spellLevel"(): integer
get "spellId"(): string
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

export class $SpellProjectileJSBuilder extends $ProjectileEntityBuilder<($SpellProjectileJS)> {
static readonly "thisList": $List<($ProjectileEntityBuilder<(any)>)>
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "onAntiMagic"(onAntiMagic: $Consumer$Type<($SpellProjectileJS$OnAntiMagicContext$Type)>): $SpellProjectileJSBuilder
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
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PathfinderMob, $PathfinderMob$Type} from "packages/net/minecraft/world/entity/$PathfinderMob"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$SpellCastingMobJSBuilder, $SpellCastingMobJSBuilder$Type} from "packages/com/squoshi/irons_spells_js/compat/entityjs/entity/builder/$SpellCastingMobJSBuilder"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
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
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
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

export class $SpellCastingMobJS extends $PathfinderMob implements $IAnimatableJS, $IMagicEntity {
 "hasUsedSingleAttack": boolean
readonly "partEntities": ($PartEntityJS<(any)>)[]
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
 "attributes": $AttributeMap
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
public "isCasting"(): boolean
public "onClientRemoval"(): void
public "lavaHurt"(): void
public "isInvulnerableTo"(p_20122_: $DamageSource$Type): boolean
public "playerTouch"(p_20081_: $Player$Type): void
public "aiStep"(): void
public "die"(damageSource: $DamageSource$Type): void
public "tick"(): void
public "getMagicData"(): $MagicData
public "canAttack"(entity: $LivingEntity$Type): boolean
public "canBeAffected"(effectInstance: $MobEffectInstance$Type): boolean
public "canAttackType"(entityType: $EntityType$Type<(any)>): boolean
public "canBreatheUnderwater"(): boolean
public "getScale"(): float
public "shouldDropExperience"(): boolean
public "getVisibilityPercent"(p_20969_: $Entity$Type): double
public "getBuilder"(): $BaseLivingEntityBuilder<(any)>
public "onEffectAdded"(effectInstance: $MobEffectInstance$Type, entity: $Entity$Type): void
public "isSleeping"(): boolean
public "onRemovedFromWorld"(): void
public "getParts"(): ($PartEntity<(any)>)[]
public "isMultipartEntity"(): boolean
public "onAddedToWorld"(): void
public "canBeLeashed"(pPlayer: $Player$Type): boolean
public "m_6071_"(pPlayer: $Player$Type, pHand: $InteractionHand$Type): $InteractionResult
public "removeWhenFarAway"(pDistanceToClosestPlayer: double): boolean
public "getAmbientSoundInterval"(): integer
public "getWalkTargetValue"(pos: $BlockPos$Type, levelReader: $LevelReader$Type): float
public "canFireProjectileWeapon"(projectileWeapon: $ProjectileWeaponItem$Type): boolean
public "ate"(): void
public "canHoldItem"(stack: $ItemStack$Type): boolean
public "isPersistenceRequired"(): boolean
public "entityName"(): string
public "getMainArm"(): $HumanoidArm
public "canTakeItem"(itemStack: $ItemStack$Type): boolean
public "eat"(level: $Level$Type, itemStack: $ItemStack$Type): $ItemStack
public "isPushable"(): boolean
public "setTarget"(target: $LivingEntity$Type): void
public "getMeleeAttackRangeSqr"(entity: $LivingEntity$Type): double
public "tickPart"(partName: string, offsetX: double, offsetY: double, offsetZ: double): void
/**
 * Calls a triggerable animation to be played anywhere.
 */
public "triggerAnimation"(controllerName: string, animName: string): void
public "setThisJumping"(value: boolean): void
public "ableToJump"(): boolean
public "dampensVibrations"(): boolean
public "canCollideWith"(pEntity: $Entity$Type): boolean
public "showVehicleHealth"(): boolean
public "thunderHit"(p_19927_: $ServerLevel$Type, p_19928_: $LightningBolt$Type): void
public "isInvertedHealAndHarm"(): boolean
public "canFireProjectileWeaponPredicate"(projectileWeapon: $ProjectileWeaponItem$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "onEquipItem"(slot: $EquipmentSlot$Type, previous: $ItemStack$Type, current: $ItemStack$Type): void
public "getArmorSlots"(): $Iterable<($ItemStack)>
public "getHandSlots"(): $Iterable<($ItemStack)>
public "addAdditionalSaveData"(pCompound: $CompoundTag$Type): void
public "setItemSlot"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): void
public "m_6475_"(pDamageSource: $DamageSource$Type, pDamageAmount: float): void
public "getMyRidingOffset"(): double
public "getMobType"(): $MobType
public "onClimbable"(): boolean
public "setSprinting"(sprinting: boolean): void
public "isOnSameTeam"(pEntity: $Entity$Type): boolean
public "startSleeping"(blockPos: $BlockPos$Type): void
public "stopSleeping"(): void
public "travel"(pTravelVector: $Vec3$Type): void
public "getFallSounds"(): $LivingEntity$Fallsounds
public "causeFallDamage"(distance: float, damageMultiplier: float, damageSource: $DamageSource$Type): boolean
public "getExperienceReward"(): integer
public "m_5639_"(fallDistance: float, pDamageMultiplier: float): integer
public "getEatingSound"(itemStack: $ItemStack$Type): $SoundEvent
public "getJumpBoostPower"(): float
public "canStandOnFluid"(fluidState: $FluidState$Type): boolean
public "doHurtTarget"(pEntity: $Entity$Type): boolean
public "getControllingPassenger"(): $LivingEntity
public "canFreeze"(): boolean
public "isSensitiveToWater"(): boolean
public "onItemPickup"(p_21054_: $ItemEntity$Type): void
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, posRotationIncrements: integer, teleport: boolean): void
public "hasLineOfSight"(entity: $Entity$Type): boolean
public "onLeaveCombat"(): void
public "onEnterCombat"(): void
public "onSyncedDataUpdated"(pKey: $EntityDataAccessor$Type<(any)>): void
public "attackable"(): boolean
public "isAffectedByPotions"(): boolean
public "canChangeDimensions"(): boolean
public "recreateFromPacket"(pPacket: $ClientboundAddEntityPacket$Type): void
public "setId"(entityId: integer): void
public "canDisableShield"(): boolean
public "canTrample"(state: $BlockState$Type, pos: $BlockPos$Type, fallDistance: float): boolean
public "shouldJump"(): boolean
public "readAdditionalSaveData"(pCompound: $CompoundTag$Type): void
public "shouldRiderFaceForward"(player: $Player$Type): boolean
public "getMaxFallDistance"(): integer
public "isFreezing"(): boolean
public "mayInteract"(p_146843_: $Level$Type, p_146844_: $BlockPos$Type): boolean
public "isGlowing"(): boolean
public "isDrinkingPotion"(): boolean
public "initiateCastSpell"(spell: $AbstractSpell$Type, spellLevel: integer): void
public "setSyncedSpellData"(syncedSpellData: $SyncedSpellData$Type): void
public "cancelCast"(): void
public "performRangedAttack"(pTarget: $LivingEntity$Type, pDistanceFactor: float): void
public "heal"(amount: float): void
public "getItemBySlot"(slot: $EquipmentSlot$Type): $ItemStack
public "stopRiding"(): void
public "rideTick"(): void
public "canFireProjectileWeapons"(projectileWeapon: $ProjectileWeaponItem$Type): boolean
public "startDrinkingPotion"(): void
public "startAutoSpinAttack"(pAttackTicks: integer): void
public "setBurningDashDirectionData"(): void
public "notifyDangerousProjectile"(projectile: $Projectile$Type): void
public "setTeleportLocationBehindTarget"(distance: integer): boolean
public "onJump"(): void
public "canJump"(): boolean
public "getTypeId"(): string
public "getTick"(entity: any): double
public "getEntityType"(): $EntityType<(any)>
public "registerControllers"(data: $AnimatableManager$ControllerRegistrar$Type): void
public "triggerAnim"<D>(relatedEntity: $Entity$Type, instanceId: long, controllerName: string, animName: string): void
public "triggerAnim"(controllerName: string, animName: string): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "of"(holder: any): $FacetHolder
get "casting"(): boolean
get "magicData"(): $MagicData
get "scale"(): float
get "builder"(): $BaseLivingEntityBuilder<(any)>
get "sleeping"(): boolean
get "parts"(): ($PartEntity<(any)>)[]
get "multipartEntity"(): boolean
get "ambientSoundInterval"(): integer
get "persistenceRequired"(): boolean
get "mainArm"(): $HumanoidArm
get "pushable"(): boolean
set "target"(value: $LivingEntity$Type)
set "thisJumping"(value: boolean)
get "invertedHealAndHarm"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "armorSlots"(): $Iterable<($ItemStack)>
get "handSlots"(): $Iterable<($ItemStack)>
get "myRidingOffset"(): double
get "mobType"(): $MobType
set "sprinting"(value: boolean)
get "fallSounds"(): $LivingEntity$Fallsounds
get "experienceReward"(): integer
get "jumpBoostPower"(): float
get "controllingPassenger"(): $LivingEntity
get "sensitiveToWater"(): boolean
get "affectedByPotions"(): boolean
set "id"(value: integer)
get "maxFallDistance"(): integer
get "freezing"(): boolean
get "glowing"(): boolean
get "drinkingPotion"(): boolean
set "syncedSpellData"(value: $SyncedSpellData$Type)
set "teleportLocationBehindTarget"(value: integer)
get "typeId"(): string
get "entityType"(): $EntityType<(any)>
get "boneResetTime"(): double
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
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(spellData: $SpellData$Type, slotId: string, localSlotIndex: integer, globalIndex: integer): void
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

public "createObject"(): $Attribute
public "setDefaultValue"(defaultValue: double): $SpellAttributeBuilderJS
public "getRegistryType"(): $RegistryInfo<($Attribute)>
public "setMinimumValue"(minimumValue: double): $SpellAttributeBuilderJS
public "setMaximumValue"(maximumValue: double): $SpellAttributeBuilderJS
set "defaultValue"(value: double)
get "registryType"(): $RegistryInfo<($Attribute)>
set "minimumValue"(value: double)
set "maximumValue"(value: double)
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
public "getSpellLevel"(): integer
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "level"(): $Level
get "playerMagicData"(): $MagicData
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
 *     Returns the float mana value that the value was before it was changed.
 */
public "getOldMana"(): float
/**
 *     Returns the float mana value that the value changed to after it was changed.
 */
public "getNewMana"(): float
/**
 *     Changes the value that the mana will change to during the event.
 */
public "setNewMana"(newMana: float): void
/**
 *     Returns the player's current MagicData.
 */
public "getMagicData"(): $MagicData
get "oldMana"(): float
get "newMana"(): float
set "newMana"(value: float)
get "magicData"(): $MagicData
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
public "setDefaultCastSound"(defaultCastSound: $ISSKJSUtils$SoundEventHolder$Type): $SchoolTypeJSBuilder
public "setResistanceAttribute"(resistanceAttribute: $ISSKJSUtils$AttributeHolder$Type): $SchoolTypeJSBuilder
public "getRegistryType"(): $RegistryInfo<($SchoolType)>
public "setFocus"(focus: $ResourceLocation$Type): $SchoolTypeJSBuilder
public "setPowerAttribute"(powerAttribute: $ISSKJSUtils$AttributeHolder$Type): $SchoolTypeJSBuilder
public "setDamageType"(damageType: $ISSKJSUtils$DamageTypeHolder$Type): $SchoolTypeJSBuilder
set "name"(value: $Component$Type)
set "defaultCastSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "resistanceAttribute"(value: $ISSKJSUtils$AttributeHolder$Type)
get "registryType"(): $RegistryInfo<($SchoolType)>
set "focus"(value: $ResourceLocation$Type)
set "powerAttribute"(value: $ISSKJSUtils$AttributeHolder$Type)
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
public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
get "entity"(): $LivingEntity
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "level"(): $Level
get "playerMagicData"(): $MagicData
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
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Sets the new spell level of the spell that was cast.
 */
public "setSpellLevel"(spellLevel: integer): void
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Sets the new mana cost.
 */
public "setManaCost"(manaCost: integer): void
/**
 *     Returns the new mana cost.
 */
public "getManaCost"(): integer
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): string
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
/**
 *     Returns the original spell level of the spell that was cast.
 */
public "getOriginalSpellLevel"(): integer
/**
 *     Returns the original mana cost.
 */
public "getOriginalManaCost"(): integer
get "castSource"(): $CastSource
get "schoolType"(): $SchoolType
set "spellLevel"(value: integer)
get "spellLevel"(): integer
set "manaCost"(value: integer)
get "manaCost"(): integer
get "spellId"(): string
get "cancelable"(): boolean
get "originalSpellLevel"(): integer
get "originalManaCost"(): integer
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
public "setMaxSpellSlots"(maxSpellSlots: integer): $SpellBookBuilderJS
public "addDefaultSpell"(spell: $ISSKJSUtils$SpellHolder$Type, spellLevel: integer): $SpellBookBuilderJS
public "addDefaultAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $SpellBookBuilderJS
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
