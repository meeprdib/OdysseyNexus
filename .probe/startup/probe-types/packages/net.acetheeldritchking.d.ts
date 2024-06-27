declare module "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$IceDragonPriestArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImbuableDragonChestplateArmorItem, $ImbuableDragonChestplateArmorItem$Type} from "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$ImbuableDragonChestplateArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $IceDragonPriestArmorItem extends $ImbuableDragonChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceDragonPriestArmorItem$Type = ($IceDragonPriestArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IceDragonPriestArmorItem_ = $IceDragonPriestArmorItem$Type;
}}
declare module "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$LightningDragonPriestArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImbuableDragonChestplateArmorItem, $ImbuableDragonChestplateArmorItem$Type} from "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$ImbuableDragonChestplateArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $LightningDragonPriestArmorItem extends $ImbuableDragonChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningDragonPriestArmorItem$Type = ($LightningDragonPriestArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightningDragonPriestArmorItem_ = $LightningDragonPriestArmorItem$Type;
}}
declare module "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$DragonArmorMaterials" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $DragonArmorMaterials extends $Enum<($DragonArmorMaterials)> implements $ArmorMaterial {
static readonly "FIRE_DRAGON_PRIEST": $DragonArmorMaterials
static readonly "ICE_DRAGON_PRIEST": $DragonArmorMaterials
static readonly "LIGHTNING_DRAGON_PRIEST": $DragonArmorMaterials


public static "values"(): ($DragonArmorMaterials)[]
public static "valueOf"(arg0: string): $DragonArmorMaterials
public static "makeArmorMap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $EnumMap<($ArmorItem$Type), (integer)>
public "getEquipSound"(): $SoundEvent
public "getKnockbackResistance"(): float
public "getEnchantmentValue"(): integer
public "getName"(): string
public "getRepairIngredient"(): $Ingredient
public "getToughness"(): float
public "getDefenseForType"(arg0: $ArmorItem$Type$Type): integer
public "getDurabilityForType"(arg0: $ArmorItem$Type$Type): integer
public "getDurabilityForSlot"(arg0: $EquipmentSlot$Type): integer
public "getSlotToAttributeMap"(): $EnumMap<($EquipmentSlot), ($Multimap<($Attribute), ($AttributeModifier)>)>
get "equipSound"(): $SoundEvent
get "knockbackResistance"(): float
get "enchantmentValue"(): integer
get "name"(): string
get "repairIngredient"(): $Ingredient
get "toughness"(): float
get "slotToAttributeMap"(): $EnumMap<($EquipmentSlot), ($Multimap<($Attribute), ($AttributeModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonArmorMaterials$Type = (("fire_dragon_priest") | ("ice_dragon_priest") | ("lightning_dragon_priest")) | ($DragonArmorMaterials);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonArmorMaterials_ = $DragonArmorMaterials$Type;
}}
declare module "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$FireDragonPriestArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ImbuableDragonChestplateArmorItem, $ImbuableDragonChestplateArmorItem$Type} from "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$ImbuableDragonChestplateArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $FireDragonPriestArmorItem extends $ImbuableDragonChestplateArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireDragonPriestArmorItem$Type = ($FireDragonPriestArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireDragonPriestArmorItem_ = $FireDragonPriestArmorItem$Type;
}}
declare module "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$ImbuableDragonChestplateArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$DragonArmorItem, $DragonArmorItem$Type} from "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$DragonArmorItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DragonArmorMaterials, $DragonArmorMaterials$Type} from "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$DragonArmorMaterials"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ImbuableDragonChestplateArmorItem extends $DragonArmorItem implements $IPresetSpellContainer {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DragonArmorMaterials$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuableDragonChestplateArmorItem$Type = ($ImbuableDragonChestplateArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuableDragonChestplateArmorItem_ = $ImbuableDragonChestplateArmorItem$Type;
}}
declare module "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$DragonArmorItem" {
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$DragonArmorMaterials, $DragonArmorMaterials$Type} from "packages/net/acetheeldritchking/ice_and_fire_spellbooks/items/armor/$DragonArmorMaterials"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DragonArmorItem extends $ArmorItem implements $GeoItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DragonArmorMaterials$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public "getMaterial"(): $DragonArmorMaterials
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getTick"(arg0: any): double
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "material"(): $DragonArmorMaterials
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonArmorItem$Type = ($DragonArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonArmorItem_ = $DragonArmorItem$Type;
}}
