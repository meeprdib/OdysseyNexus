declare module "packages/smartin/miapi/item/modular/items/$ModularElytraItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularElytraItem extends $ArmorItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getInstance"(): $ModularElytraItem
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "enchantmentValue"(): integer
get "instance"(): $ModularElytraItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularElytraItem$Type = ($ModularElytraItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularElytraItem_ = $ModularElytraItem$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Leggings" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Leggings extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Leggings$Type = ($ModularWeaponBuilder$Leggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Leggings_ = $ModularWeaponBuilder$Leggings$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularVisualOnlyItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VisualModularItem, $VisualModularItem$Type} from "packages/smartin/miapi/item/modular/$VisualModularItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularVisualOnlyItem extends $Item implements $PlatformModularItemMethods, $VisualModularItem {
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

constructor()

public "getBarWidth"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularVisualOnlyItem$Type = ($ModularVisualOnlyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularVisualOnlyItem_ = $ModularVisualOnlyItem$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularPickaxe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$ModularSetableToolMaterial, $ModularSetableToolMaterial$Type} from "packages/smartin/miapi/item/modular/items/$ModularSetableToolMaterial"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularPickaxe extends $PickaxeItem implements $PlatformModularItemMethods, $ModularItem, $ModularSetableToolMaterial, $ModularItemInject {
 "currentFakeToolmaterial": $Tier
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "setToolMaterial"(toolMaterial: $Tier$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, miner: $Player$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "getBarColor"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type): $ItemStack
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, user: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "useOnRelease"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getTier"(): $Tier
public static "getDurability"(stack: $ItemStack$Type): integer
public "setToolMaterial"(itemStack: $ItemStack$Type): void
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
set "toolMaterial"(value: $Tier$Type)
get "enchantmentValue"(): integer
get "tier"(): $Tier
set "toolMaterial"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularPickaxe$Type = ($ModularPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularPickaxe_ = $ModularPickaxe$Type;
}}
declare module "packages/smartin/miapi/forge/compat/$ModularItemInject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModularItemInject extends $IForgeItem {

 "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
 "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
 "getMaxDamageModular"(stack: $ItemStack$Type): integer
 "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
 "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
 "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "getDamage"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void

(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
}

export namespace $ModularItemInject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularItemInject$Type = ($ModularItemInject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularItemInject_ = $ModularItemInject$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularWeapon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeapon extends $Item implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor(settings: $Item$Properties$Type, withDefaultSettings: boolean)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, miner: $Player$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "getBarColor"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type): $ItemStack
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, user: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "useOnRelease"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeapon$Type = ($ModularWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeapon_ = $ModularWeapon$Type;
}}
declare module "packages/smartin/miapi/item/$MaterialSmithingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SmithingRecipe, $SmithingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MaterialSmithingRecipe implements $SmithingRecipe {

constructor(id: $ResourceLocation$Type, template: $Ingredient$Type, baseMaterial: string, addition: $Ingredient$Type, resultMaterial: string)

public "assemble"(inventory: $Container$Type, registryManager: $RegistryAccess$Type): $ItemStack
public "matches"(inventory: $Container$Type, world: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "isBaseIngredient"(stack: $ItemStack$Type): boolean
public "isTemplateIngredient"(stack: $ItemStack$Type): boolean
public "isAdditionIngredient"(stack: $ItemStack$Type): boolean
public "getResultItem"(registryManager: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getGroup"(): string
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialSmithingRecipe$Type = ($MaterialSmithingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialSmithingRecipe_ = $MaterialSmithingRecipe$Type;
}}
declare module "packages/smartin/miapi/item/modular/$ModularItemPart" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VisualModularItem, $VisualModularItem$Type} from "packages/smartin/miapi/item/modular/$VisualModularItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularItemPart extends $Item implements $VisualModularItem {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularItemPart$Type = ($ModularItemPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularItemPart_ = $ModularItemPart$Type;
}}
declare module "packages/smartin/miapi/mixin/$HoeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccessor {

}

export namespace $HoeItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItemAccessor$Type = ($HoeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoeItemAccessor_ = $HoeItemAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/$PlatformModularItemMethods" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlatformModularItemMethods {

}

export namespace $PlatformModularItemMethods {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformModularItemMethods$Type = ($PlatformModularItemMethods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformModularItemMethods_ = $PlatformModularItemMethods$Type;
}}
declare module "packages/smartin/miapi/mixin/$ConduitBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConduitBlockEntityAccessor {

 "isActive"(): boolean
 "setActive"(arg0: boolean): void
}

export namespace $ConduitBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBlockEntityAccessor$Type = ($ConduitBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBlockEntityAccessor_ = $ConduitBlockEntityAccessor$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Type = ($ModularWeaponBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder_ = $ModularWeaponBuilder$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Hoe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Hoe extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Hoe$Type = ($ModularWeaponBuilder$Hoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Hoe_ = $ModularWeaponBuilder$Hoe$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Arrow" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Arrow extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Arrow$Type = ($ModularWeaponBuilder$Arrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Arrow_ = $ModularWeaponBuilder$Arrow$Type;
}}
declare module "packages/smartin/miapi/mixin/$DefaultAttributeContainerAccessor" {
import {$AttributeInstance, $AttributeInstance$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $DefaultAttributeContainerAccessor {

 "getInstances"(): $Map<($Attribute), ($AttributeInstance)>

(): $Map<($Attribute), ($AttributeInstance)>
}

export namespace $DefaultAttributeContainerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultAttributeContainerAccessor$Type = ($DefaultAttributeContainerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultAttributeContainerAccessor_ = $DefaultAttributeContainerAccessor$Type;
}}
declare module "packages/smartin/miapi/mixin/client/$SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsAccessor {

 "getImage"(): $NativeImage
 "getHeight"(): integer
 "getWidth"(): integer
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$Type = ($SpriteContentsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularArrow" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularArrow extends $ArrowItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "createArrow"(world: $Level$Type, stack: $ItemStack$Type, shooter: $LivingEntity$Type): $AbstractArrow
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularArrow$Type = ($ModularArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularArrow_ = $ModularArrow$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Pickaxe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Pickaxe extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Pickaxe$Type = ($ModularWeaponBuilder$Pickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Pickaxe_ = $ModularWeaponBuilder$Pickaxe$Type;
}}
declare module "packages/smartin/miapi/item/modular/$VisualModularItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VisualModularItem {

}

export namespace $VisualModularItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualModularItem$Type = ($VisualModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualModularItem_ = $VisualModularItem$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularCrossbow" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CustomDrawTimeItem, $CustomDrawTimeItem$Type} from "packages/smartin/miapi/item/modular/$CustomDrawTimeItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$CrossbowItem, $CrossbowItem$Type} from "packages/net/minecraft/world/item/$CrossbowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularCrossbow extends $CrossbowItem implements $PlatformModularItemMethods, $ModularItem, $CustomDrawTimeItem, $ModularItemInject {
static readonly "DEFAULT_RANGE": integer
 "startSoundPlayed": boolean
 "midLoadSoundPlayed": boolean
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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

constructor()
constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getPullTime"(stack: $ItemStack$Type): integer
public static "putProjectile"(crossbow: $ItemStack$Type, projectile: $ItemStack$Type): void
public static "getProjectiles"(crossbow: $ItemStack$Type): $List<($ItemStack)>
public "getBaseDrawTime"(itemStack: $ItemStack$Type): double
public static "shootAll"(world: $Level$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type, stack: $ItemStack$Type, speed: float, divergence: float): void
public "registerAnimations"(): void
public static "getDurability"(stack: $ItemStack$Type): integer
public "getActualDrawTime"(stack: $ItemStack$Type): double
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularCrossbow$Type = ($ModularCrossbow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularCrossbow_ = $ModularCrossbow$Type;
}}
declare module "packages/smartin/miapi/item/$MaterialSmithingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MaterialSmithingRecipe, $MaterialSmithingRecipe$Type} from "packages/smartin/miapi/item/$MaterialSmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MaterialSmithingRecipe$Serializer implements $RecipeSerializer<($MaterialSmithingRecipe)> {

constructor()

public "write"(packetByteBuf: $FriendlyByteBuf$Type, smithingTransformRecipe: $MaterialSmithingRecipe$Type): void
public "read"(identifier: $ResourceLocation$Type, jsonObject: $JsonObject$Type): $MaterialSmithingRecipe
public "read"(identifier: $ResourceLocation$Type, packetByteBuf: $FriendlyByteBuf$Type): $MaterialSmithingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MaterialSmithingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialSmithingRecipe$Serializer$Type = ($MaterialSmithingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialSmithingRecipe$Serializer_ = $MaterialSmithingRecipe$Serializer$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ExampleModularStrackableItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExampleModularStrackableItem extends $Item implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
static "modularItem": $Item
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public static "attackDamageUUID"(): $UUID
public static "attackSpeedUUID"(): $UUID
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExampleModularStrackableItem$Type = ($ExampleModularStrackableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExampleModularStrackableItem_ = $ExampleModularStrackableItem$Type;
}}
declare module "packages/smartin/miapi/effects/$StunStatusEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StunStatusEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor()

public "applyEffectTick"(entity: $LivingEntity$Type, amplifier: integer): void
public "addAttributeModifiers"(entity: $LivingEntity$Type, attributes: $AttributeMap$Type, amplifier: integer): void
public "removeAttributeModifiers"(entity: $LivingEntity$Type, attributes: $AttributeMap$Type, amplifier: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunStatusEffect$Type = ($StunStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunStatusEffect_ = $StunStatusEffect$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularLeggings" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularLeggings extends $ArmorItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor()
constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularLeggings$Type = ($ModularLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularLeggings_ = $ModularLeggings$Type;
}}
declare module "packages/smartin/miapi/mixin/$SmithingTransformRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SmithingTransformRecipeAccessor {

 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
 "getBase"(): $Ingredient
 "getResult"(): $ItemStack
}

export namespace $SmithingTransformRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipeAccessor$Type = ($SmithingTransformRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTransformRecipeAccessor_ = $SmithingTransformRecipeAccessor$Type;
}}
declare module "packages/smartin/miapi/mixin/client/$InGameHudAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $InGameHudAccessor {

 "callGetHeartRows"(arg0: integer): integer
 "getScaledWidth"(): integer
 "callGetHeartCount"(arg0: $LivingEntity$Type): integer
 "getScaledHeight"(): integer
 "callGetCameraPlayer"(): $Player
 "getRenderHealthValue"(): integer
}

export namespace $InGameHudAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InGameHudAccessor$Type = ($InGameHudAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InGameHudAccessor_ = $InGameHudAccessor$Type;
}}
declare module "packages/smartin/miapi/blocks/$ModularWorkBench" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ModularWorkBench extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "isRandomlyTicking"(state: $BlockState$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(world: $ServerLevel$Type, blockEntity: T): $GameEventListener
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, moved: boolean): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getMenuProvider"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWorkBench$Type = ($ModularWorkBench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWorkBench_ = $ModularWorkBench$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Chestplate" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Chestplate extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Chestplate$Type = ($ModularWeaponBuilder$Chestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Chestplate_ = $ModularWeaponBuilder$Chestplate$Type;
}}
declare module "packages/smartin/miapi/mixin/client/$ItemRendererAccessor" {
import {$ItemColors, $ItemColors$Type} from "packages/net/minecraft/client/color/item/$ItemColors"

export interface $ItemRendererAccessor {

 "color"(): $ItemColors

(): $ItemColors
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$Type = ($ItemRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$Type;
}}
declare module "packages/smartin/miapi/mixin/$ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccessor {

}

export namespace $ShovelItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccessor$Type = ($ShovelItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccessor_ = $ShovelItemAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularAxe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$ModularSetableToolMaterial, $ModularSetableToolMaterial$Type} from "packages/smartin/miapi/item/modular/items/$ModularSetableToolMaterial"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularAxe extends $AxeItem implements $PlatformModularItemMethods, $ModularItem, $ModularSetableToolMaterial, $ModularItemInject {
 "currentFakeToolmaterial": $Tier
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor()
constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "setToolMaterial"(toolMaterial: $Tier$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, miner: $Player$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "getBarColor"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type): $ItemStack
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, user: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "useOnRelease"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getTier"(): $Tier
public static "getDurability"(stack: $ItemStack$Type): integer
public "setToolMaterial"(itemStack: $ItemStack$Type): void
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
set "toolMaterial"(value: $Tier$Type)
get "enchantmentValue"(): integer
get "tier"(): $Tier
set "toolMaterial"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAxe$Type = ($ModularAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAxe_ = $ModularAxe$Type;
}}
declare module "packages/smartin/miapi/mixin/$SmithingScreenHandlerAccessor" {
import {$SmithingRecipe, $SmithingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"

export interface $SmithingScreenHandlerAccessor {

 "currentRecipe"(): $SmithingRecipe

(): $SmithingRecipe
}

export namespace $SmithingScreenHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingScreenHandlerAccessor$Type = ($SmithingScreenHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingScreenHandlerAccessor_ = $SmithingScreenHandlerAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularBow" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BowItem, $BowItem$Type} from "packages/net/minecraft/world/item/$BowItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularBow extends $BowItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
static "projectile": $Predicate<($ItemStack)>
static "bowMoveSpeedUUId": $UUID
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public static "shoot"(bowStack: $ItemStack$Type, projectileStack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, pullProgress: float, canPickup: boolean, pitch: float, yaw: float, roll: float): void
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "releaseUsing"(bowStack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getPullProgress"(useTicks: integer, stack: $ItemStack$Type): float
public "registerAnimations"(): void
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularBow$Type = ($ModularBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularBow_ = $ModularBow$Type;
}}
declare module "packages/smartin/miapi/mixin/client/$ModelLoaderInterfaceAccessor" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelLoaderInterfaceAccessor {

 "loadModelFromPath"(arg0: $ResourceLocation$Type): $BlockModel

(arg0: $ResourceLocation$Type): $BlockModel
}

export namespace $ModelLoaderInterfaceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoaderInterfaceAccessor$Type = ($ModelLoaderInterfaceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoaderInterfaceAccessor_ = $ModelLoaderInterfaceAccessor$Type;
}}
declare module "packages/smartin/miapi/mixin/$LivingEntityAccessor" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LivingEntityAccessor {

 "getLastAttackedTime"(): integer
 "callGetEquipmentChanges"(): $Map<($EquipmentSlot), ($ItemStack)>
 "getLastDamageTaken"(): float
 "callDamageArmor"(arg0: $DamageSource$Type, arg1: float): void
 "attacking"(arg0: $LivingEntity$Type): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/forge/$ModularElytraItemImpl" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularElytraItem, $ModularElytraItem$Type} from "packages/smartin/miapi/item/modular/items/$ModularElytraItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularElytraItemImpl extends $ModularElytraItem {
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

constructor()

public static "getInstance"(): $ModularElytraItem
public static "getDurability"(stack: $ItemStack$Type): integer
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "instance"(): $ModularElytraItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularElytraItemImpl$Type = ($ModularElytraItemImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularElytraItemImpl_ = $ModularElytraItemImpl$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularSetableToolMaterial" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export interface $ModularSetableToolMaterial {

 "setToolMaterial"(arg0: $Tier$Type): void
 "setToolMaterial"(itemStack: $ItemStack$Type): void

(arg0: $Tier$Type): void
}

export namespace $ModularSetableToolMaterial {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularSetableToolMaterial$Type = ($ModularSetableToolMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularSetableToolMaterial_ = $ModularSetableToolMaterial$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Helmet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Helmet extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Helmet$Type = ($ModularWeaponBuilder$Helmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Helmet_ = $ModularWeaponBuilder$Helmet$Type;
}}
declare module "packages/smartin/miapi/effects/$CryoStatusEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderingMobEffect, $RenderingMobEffect$Type} from "packages/com/redpxnda/nucleus/registry/effect/$RenderingMobEffect"

export class $CryoStatusEffect extends $RenderingMobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor()

public "isDurationEffectTick"(duration: integer, amplifier: integer): boolean
public "addAttributeModifiers"(entity: $LivingEntity$Type, attributes: $AttributeMap$Type, amplifier: integer): void
public "removeAttributeModifiers"(entity: $LivingEntity$Type, attributes: $AttributeMap$Type, amplifier: integer): void
public "renderPost"(instance: $MobEffectInstance$Type, entity: $LivingEntity$Type, entityYaw: float, partialTick: float, matrixStack: $PoseStack$Type, multiBufferSource: $MultiBufferSource$Type, packedLight: integer): void
public "renderHud"(instance: $MobEffectInstance$Type, minecraft: $Minecraft$Type, graphics: $GuiGraphics$Type, partialTick: float): boolean
public "tickUpdateInterval"(): integer
public static "setupOnClient"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CryoStatusEffect$Type = ($CryoStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CryoStatusEffect_ = $CryoStatusEffect$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Axe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Axe extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Axe$Type = ($ModularWeaponBuilder$Axe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Axe_ = $ModularWeaponBuilder$Axe$Type;
}}
declare module "packages/smartin/miapi/mixin/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {

}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockAccessor$Type = ($DispenserBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockAccessor_ = $DispenserBlockAccessor$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Shovel" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Shovel extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Shovel$Type = ($ModularWeaponBuilder$Shovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Shovel_ = $ModularWeaponBuilder$Shovel$Type;
}}
declare module "packages/smartin/miapi/item/modular/$CustomDrawTimeItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CustomDrawTimeItem {

 "getActualDrawTime"(stack: $ItemStack$Type): double
 "getBaseDrawTime"(arg0: $ItemStack$Type): double

(stack: $ItemStack$Type): double
}

export namespace $CustomDrawTimeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDrawTimeItem$Type = ($CustomDrawTimeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomDrawTimeItem_ = $CustomDrawTimeItem$Type;
}}
declare module "packages/smartin/miapi/mixin/$ProjectileEntityAccessor" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"

export interface $ProjectileEntityAccessor {

 "onCollisionMixin"(arg0: $HitResult$Type): void

(arg0: $HitResult$Type): void
}

export namespace $ProjectileEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileEntityAccessor$Type = ($ProjectileEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileEntityAccessor_ = $ProjectileEntityAccessor$Type;
}}
declare module "packages/smartin/miapi/mixin/$InventoryValidationMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InventoryValidationMixin {

}

export namespace $InventoryValidationMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryValidationMixin$Type = ($InventoryValidationMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryValidationMixin_ = $InventoryValidationMixin$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Sword" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Sword extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Sword$Type = ($ModularWeaponBuilder$Sword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Sword_ = $ModularWeaponBuilder$Sword$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularShovel" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$ModularSetableToolMaterial, $ModularSetableToolMaterial$Type} from "packages/smartin/miapi/item/modular/items/$ModularSetableToolMaterial"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularShovel extends $ShovelItem implements $PlatformModularItemMethods, $ModularItem, $ModularSetableToolMaterial, $ModularItemInject {
 "currentFakeToolmaterial": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "setToolMaterial"(toolMaterial: $Tier$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, miner: $Player$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "getBarColor"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type): $ItemStack
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, user: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "useOnRelease"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getTier"(): $Tier
public static "getDurability"(stack: $ItemStack$Type): integer
public "setToolMaterial"(itemStack: $ItemStack$Type): void
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
set "toolMaterial"(value: $Tier$Type)
get "enchantmentValue"(): integer
get "tier"(): $Tier
set "toolMaterial"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularShovel$Type = ($ModularShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularShovel_ = $ModularShovel$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularHelmet" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularHelmet extends $ArmorItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor()
constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularHelmet$Type = ($ModularHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularHelmet_ = $ModularHelmet$Type;
}}
declare module "packages/smartin/miapi/mixin/client/$FeatureRendererAccessor" {
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $FeatureRendererAccessor<T extends $Entity, M extends $EntityModel<(T)>> {

 "getContext"(): $RenderLayerParent<(T), (M)>

(): $RenderLayerParent<(T), (M)>
}

export namespace $FeatureRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureRendererAccessor$Type<T, M> = ($FeatureRendererAccessor<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatureRendererAccessor_<T, M> = $FeatureRendererAccessor$Type<(T), (M)>;
}}
declare module "packages/smartin/miapi/item/modular/$ModularItem" {
import {$VisualModularItem, $VisualModularItem$Type} from "packages/smartin/miapi/item/modular/$VisualModularItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModularItem extends $VisualModularItem {

}

export namespace $ModularItem {
function getDurability(stack: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularItem$Type = ($ModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularItem_ = $ModularItem$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularSword" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$ModularSetableToolMaterial, $ModularSetableToolMaterial$Type} from "packages/smartin/miapi/item/modular/items/$ModularSetableToolMaterial"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularSword extends $SwordItem implements $PlatformModularItemMethods, $ModularItem, $ModularSetableToolMaterial, $ModularItemInject {
 "currentFakeToolmaterial": $Tier
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "setToolMaterial"(toolMaterial: $Tier$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, miner: $Player$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "getBarColor"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type): $ItemStack
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, user: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "useOnRelease"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getTier"(): $Tier
public static "getDurability"(stack: $ItemStack$Type): integer
public "setToolMaterial"(itemStack: $ItemStack$Type): void
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
set "toolMaterial"(value: $Tier$Type)
get "enchantmentValue"(): integer
get "tier"(): $Tier
set "toolMaterial"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularSword$Type = ($ModularSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularSword_ = $ModularSword$Type;
}}
declare module "packages/smartin/miapi/effects/$TeleportBlockEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TeleportBlockEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportBlockEffect$Type = ($TeleportBlockEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportBlockEffect_ = $TeleportBlockEffect$Type;
}}
declare module "packages/smartin/miapi/mixin/$ThrowablePotionItemAccessor" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"

export interface $ThrowablePotionItemAccessor {

 "onCollisionMixin"(arg0: $HitResult$Type): void

(arg0: $HitResult$Type): void
}

export namespace $ThrowablePotionItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowablePotionItemAccessor$Type = ($ThrowablePotionItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrowablePotionItemAccessor_ = $ThrowablePotionItemAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularHoe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$ModularSetableToolMaterial, $ModularSetableToolMaterial$Type} from "packages/smartin/miapi/item/modular/items/$ModularSetableToolMaterial"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularHoe extends $HoeItem implements $PlatformModularItemMethods, $ModularItem, $ModularSetableToolMaterial, $ModularItemInject {
 "currentFakeToolmaterial": $Tier
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(settings: $Item$Properties$Type)
constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "setToolMaterial"(toolMaterial: $Tier$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, miner: $Player$Type): boolean
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "getBarColor"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type): $ItemStack
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, user: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "useOnRelease"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getTier"(): $Tier
public static "getDurability"(stack: $ItemStack$Type): integer
public "setToolMaterial"(itemStack: $ItemStack$Type): void
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
set "toolMaterial"(value: $Tier$Type)
get "enchantmentValue"(): integer
get "tier"(): $Tier
set "toolMaterial"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularHoe$Type = ($ModularHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularHoe_ = $ModularHoe$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ExampleModularItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExampleModularItem extends $Item implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
static "modularItem": $Item
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

constructor()

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public static "attackDamageUUID"(): $UUID
public static "attackSpeedUUID"(): $UUID
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExampleModularItem$Type = ($ExampleModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExampleModularItem_ = $ExampleModularItem$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularChestPlate" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularChestPlate extends $ArmorItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor()
constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularChestPlate$Type = ($ModularChestPlate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularChestPlate_ = $ModularChestPlate$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Crossbow" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Crossbow extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Crossbow$Type = ($ModularWeaponBuilder$Crossbow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Crossbow_ = $ModularWeaponBuilder$Crossbow$Type;
}}
declare module "packages/smartin/miapi/effects/$StunResistanceStatusEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StunResistanceStatusEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor()

public "addAttributeModifiers"(entity: $LivingEntity$Type, attributes: $AttributeMap$Type, amplifier: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunResistanceStatusEffect$Type = ($StunResistanceStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunResistanceStatusEffect_ = $StunResistanceStatusEffect$Type;
}}
declare module "packages/smartin/miapi/mixin/$ForgingScreenHandlerAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ForgingScreenHandlerAccessor {

 "getInput"(): $Container

(): $Container
}

export namespace $ForgingScreenHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgingScreenHandlerAccessor$Type = ($ForgingScreenHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgingScreenHandlerAccessor_ = $ForgingScreenHandlerAccessor$Type;
}}
declare module "packages/smartin/miapi/compat/kubejs/$ModularWeaponBuilder$Boots" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularWeaponBuilder$Boots extends $ItemBuilder {
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

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularWeaponBuilder$Boots$Type = ($ModularWeaponBuilder$Boots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularWeaponBuilder$Boots_ = $ModularWeaponBuilder$Boots$Type;
}}
declare module "packages/smartin/miapi/mixin/$ClientAdvancementManagerAccessor" {
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"
import {$AdvancementProgress, $AdvancementProgress$Type} from "packages/net/minecraft/advancements/$AdvancementProgress"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ClientAdvancementManagerAccessor {

 "getAdvancementProgresses"(): $Map<($Advancement), ($AdvancementProgress)>

(): $Map<($Advancement), ($AdvancementProgress)>
}

export namespace $ClientAdvancementManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientAdvancementManagerAccessor$Type = ($ClientAdvancementManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientAdvancementManagerAccessor_ = $ClientAdvancementManagerAccessor$Type;
}}
declare module "packages/smartin/miapi/item/modular/items/$ModularBoots" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModularItem, $ModularItem$Type} from "packages/smartin/miapi/item/modular/$ModularItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlatformModularItemMethods, $PlatformModularItemMethods$Type} from "packages/smartin/miapi/item/modular/$PlatformModularItemMethods"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularItemInject, $ModularItemInject$Type} from "packages/smartin/miapi/forge/compat/$ModularItemInject"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularBoots extends $ArmorItem implements $PlatformModularItemMethods, $ModularItem, $ModularItemInject {
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

constructor()
constructor(settings: $Item$Properties$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEnchantmentValue"(stack: $ItemStack$Type): integer
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<(any), (any)>
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(itemStack: $ItemStack$Type): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getDurability"(stack: $ItemStack$Type): integer
public "makesPiglinsNeutralModular"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public "getEquipmentSlotModular"(stack: $ItemStack$Type): $EquipmentSlot
public "getMaxDamageModular"(stack: $ItemStack$Type): integer
public "canPerformActionModular"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "getAttributeModifiersModular"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValueModular"(stack: $ItemStack$Type): integer
public "isCorrectToolForDropsModular"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularBoots$Type = ($ModularBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularBoots_ = $ModularBoots$Type;
}}
declare module "packages/smartin/miapi/mixin/$MiningToolItemAccessor" {
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $MiningToolItemAccessor {

 "getEffectiveBlocks"(): $TagKey<($Block)>

(): $TagKey<($Block)>
}

export namespace $MiningToolItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiningToolItemAccessor$Type = ($MiningToolItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiningToolItemAccessor_ = $MiningToolItemAccessor$Type;
}}
declare module "packages/smartin/miapi/mixin/$AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccessor {

}

export namespace $AxeItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemAccessor$Type = ($AxeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemAccessor_ = $AxeItemAccessor$Type;
}}
