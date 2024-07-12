declare module "packages/dev/xkmc/fruitsdelight/content/item/$DurianFleshItem" {
import {$FDFoodItem, $FDFoodItem$Type} from "packages/dev/xkmc/fruitsdelight/content/item/$FDFoodItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DurianFleshItem extends $FDFoodItem {
static readonly "ROOT": string
readonly "food": $IFDFood
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

constructor(arg0: $Item$Properties$Type, arg1: $IFDFood$Type)

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianFleshItem$Type = ($DurianFleshItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianFleshItem_ = $DurianFleshItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AbstractShapelessRecipe$Serializer, $AbstractShapelessRecipe$Serializer$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$Serializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractShapelessRecipe<T extends $AbstractShapelessRecipe<(T)>> extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getJEIResult"(): $List<($ItemStack)>
public "getSerializer"(): $AbstractShapelessRecipe$Serializer<(T)>
get "jEIResult"(): $List<($ItemStack)>
get "serializer"(): $AbstractShapelessRecipe$Serializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapelessRecipe$Type<T> = ($AbstractShapelessRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapelessRecipe_<T> = $AbstractShapelessRecipe$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/events/$FoodDataAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $FoodDataAccessor {

 "fruitsdelight$setPlayer"(arg0: $Player$Type): void

(arg0: $Player$Type): void
}

export namespace $FoodDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodDataAccessor$Type = ($FoodDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodDataAccessor_ = $FoodDataAccessor$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushType" {
import {$BlockEntry, $BlockEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntry"
import {$FDBushes, $FDBushes$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushes"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FDBushType extends $Enum<($FDBushType)> {
static readonly "CROSS": $FDBushType
static readonly "BLOCK": $FDBushType
static readonly "TALL": $FDBushType


public "build"(arg0: string, arg1: $FDBushes$Type): $BlockEntry<(any)>
public static "values"(): ($FDBushType)[]
public static "valueOf"(arg0: string): $FDBushType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDBushType$Type = (("cross") | ("block") | ("tall")) | ($FDBushType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDBushType_ = $FDBushType$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$EffectFunc" {
import {$Int2IntFunction, $Int2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import {$Int2FloatFunction, $Int2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EffectFunc extends $Record {

constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: $Int2IntFunction$Type, arg2: $Int2IntFunction$Type)
constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: $Int2IntFunction$Type)
constructor(eff: $Supplier$Type<($MobEffect$Type)>, duration: $Int2IntFunction$Type, amplifier: $Int2IntFunction$Type, chance: $Int2FloatFunction$Type)

public "eff"(): $Supplier<($MobEffect)>
public "getChance"(arg0: integer): float
public "getEffect"(arg0: integer): $MobEffectInstance
public "amplifier"(): $Int2IntFunction
public "chance"(): $Int2FloatFunction
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "duration"(): $Int2IntFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectFunc$Type = ($EffectFunc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectFunc_ = $EffectFunc$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Fruit" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DurianLeavesBlock$Fruit extends $Enum<($DurianLeavesBlock$Fruit)> implements $StringRepresentable {
static readonly "NONE": $DurianLeavesBlock$Fruit
static readonly "FLOWERS": $DurianLeavesBlock$Fruit
static readonly "SMALL": $DurianLeavesBlock$Fruit
static readonly "FRUITS": $DurianLeavesBlock$Fruit


public "getSerializedName"(): string
public static "values"(): ($DurianLeavesBlock$Fruit)[]
public static "valueOf"(arg0: string): $DurianLeavesBlock$Fruit
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianLeavesBlock$Fruit$Type = (("small") | ("flowers") | ("fruits") | ("none")) | ($DurianLeavesBlock$Fruit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianLeavesBlock$Fruit_ = $DurianLeavesBlock$Fruit$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PineappleRiceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PineappleRiceBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: boolean)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PineappleRiceBlock$Type = ($PineappleRiceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PineappleRiceBlock_ = $PineappleRiceBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$IconRenderRegion" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IconRenderRegion extends $Record {

constructor(x: float, y: float, scale: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IconRenderRegion
public "x"(): float
public static "identity"(): $IconRenderRegion
public "resize"(arg0: $IconRenderRegion$Type): $IconRenderRegion
public "y"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconRenderRegion$Type = ($IconRenderRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconRenderRegion_ = $IconRenderRegion$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PeachLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PassableLeavesBlock, $PassableLeavesBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PassableLeavesBlock$State, $PassableLeavesBlock$State$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock$State"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PeachLeavesBlock extends $PassableLeavesBlock {
static readonly "FERTILE": $BooleanProperty
static readonly "STATE": $EnumProperty<($PassableLeavesBlock$State)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeachLeavesBlock$Type = ($PeachLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeachLeavesBlock_ = $PeachLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DoubleFruitBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$FDBushType, $FDBushType$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DoubleBushBlock, $DoubleBushBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$DoubleBushBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DoubleFruitBushBlock extends $DoubleBushBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $FDBushType$Type)

public "getDoubleBlockStart"(): integer
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
get "doubleBlockStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleFruitBushBlock$Type = ($DoubleFruitBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleFruitBushBlock_ = $DoubleFruitBushBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$InherentEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InherentEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InherentEffect$Type = ($InherentEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InherentEffect_ = $InherentEffect$Type;
}}
declare module "packages/dev/xkmc/l2library/base/$NamedEntry" {
import {$L2Registrate$RegistryInstance, $L2Registrate$RegistryInstance$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate$RegistryInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $NamedEntry<T extends $NamedEntry<(T)>> {

constructor(arg0: $L2Registrate$RegistryInstance$Type<(T)>)

public "getRegistryName"(): $ResourceLocation
public "getDescriptionId"(): string
public "getThis"(): T
public "getID"(): string
public "getDesc"(): $MutableComponent
get "registryName"(): $ResourceLocation
get "descriptionId"(): string
get "this"(): T
get "iD"(): string
get "desc"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedEntry$Type<T> = ($NamedEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedEntry_<T> = $NamedEntry$Type<(T)>;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$ClientRenderEffect" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DelayedEntityRender, $DelayedEntityRender$Type} from "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ClientRenderEffect {

 "render"(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void

(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void
}

export namespace $ClientRenderEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRenderEffect$Type = ($ClientRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRenderEffect_ = $ClientRenderEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FruitPlant" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$PlantDataEntry, $PlantDataEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $FruitPlant<T extends ($Enum<(T)>) & ($FruitPlant<(T)>)> extends $PlantDataEntry<(T)> {

 "getFruit"(): $Item
 "getFruitTag"(): $TagKey<($Item)>
 "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
 "registerComposter"(): void
 "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
 "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
 "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
 "getName"(): string
}

export namespace $FruitPlant {
function addFruitTags<T>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
function run(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
function gen<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitPlant$Type<T> = ($FruitPlant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitPlant_<T> = $FruitPlant$Type<(T)>;
}}
declare module "packages/dev/xkmc/l2library/base/$L2Registrate$RegistryInstance" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$NamedEntry, $NamedEntry$Type} from "packages/dev/xkmc/l2library/base/$NamedEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $L2Registrate$RegistryInstance<E extends $NamedEntry<(E)>> extends $Record implements $Supplier<($IForgeRegistry<(E)>)> {

constructor(supplier: $Supplier$Type<($IForgeRegistry$Type<(E)>)>, key: $ResourceKey$Type<($Registry$Type<(E)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $ResourceKey<($Registry<(E)>)>
public "supplier"(): $Supplier<($IForgeRegistry<(E)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $L2Registrate$RegistryInstance$Type<E> = ($L2Registrate$RegistryInstance<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $L2Registrate$RegistryInstance_<E> = $L2Registrate$RegistryInstance$Type<(E)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$EmptyEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmptyEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyEffect$Type = ($EmptyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyEffect_ = $EmptyEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$EffectRemovalEffect" {
import {$InherentEffect, $InherentEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$InherentEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EffectRemovalEffect extends $InherentEffect {
readonly "set": $Lazy<($Set<($MobEffect)>)>
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $List$Type<($Supplier$Type<($MobEffect$Type)>)>)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectRemovalEffect$Type = ($EffectRemovalEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectRemovalEffect_ = $EffectRemovalEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$CyclingEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CyclingEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CyclingEffect$Type = ($CyclingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CyclingEffect_ = $CyclingEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$HealAuraEffect" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HealAuraEffect extends $RangeRenderEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealAuraEffect$Type = ($HealAuraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HealAuraEffect_ = $HealAuraEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$AlienatingAuraEffect" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlienatingAuraEffect extends $RangeRenderEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlienatingAuraEffect$Type = ($AlienatingAuraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlienatingAuraEffect_ = $AlienatingAuraEffect$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AbstractShapedRecipe$RecipeFactory, $AbstractShapedRecipe$RecipeFactory$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$RecipeFactory"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractShapedRecipe, $AbstractShapedRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $AbstractShapedRecipe$Serializer<T extends $AbstractShapedRecipe<(T)>> extends $ShapedRecipe$Serializer {

constructor(arg0: $AbstractShapedRecipe$RecipeFactory$Type<(T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$Serializer$Type<T> = ($AbstractShapedRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe$Serializer_<T> = $AbstractShapedRecipe$Serializer$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$EffectEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EffectEntry extends $Record {

constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: integer, arg2: integer)
constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: integer)
constructor(eff: $Supplier$Type<($MobEffect$Type)>, duration: integer, amplifier: integer, chance: float)

public "eff"(): $Supplier<($MobEffect)>
public "getEffect"(): $MobEffectInstance
public "amplifier"(): integer
public "chance"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "duration"(): integer
get "effect"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectEntry$Type = ($EffectEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectEntry_ = $EffectEntry$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IconRenderRegion, $IconRenderRegion$Type} from "packages/dev/xkmc/l2library/base/effects/api/$IconRenderRegion"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DelayedEntityRender extends $Record {

constructor(entity: $LivingEntity$Type, region: $IconRenderRegion$Type, rl: $ResourceLocation$Type, tx: float, ty: float, tw: float, th: float)

public static "icon"(arg0: $LivingEntity$Type, arg1: $IconRenderRegion$Type, arg2: $ResourceLocation$Type): $DelayedEntityRender
public static "icon"(arg0: $LivingEntity$Type, arg1: $ResourceLocation$Type): $DelayedEntityRender
public "entity"(): $LivingEntity
public "tx"(): float
public "ty"(): float
public "rl"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "th"(): float
public "resize"(arg0: $IconRenderRegion$Type): $DelayedEntityRender
public "tw"(): float
public "region"(): $IconRenderRegion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelayedEntityRender$Type = ($DelayedEntityRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelayedEntityRender_ = $DelayedEntityRender$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseLeavesBlock, $BaseLeavesBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseLeavesBlock"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PassableLeavesBlock$State, $PassableLeavesBlock$State$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock$State"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $PassableLeavesBlock extends $BaseLeavesBlock implements $BonemealableBlock {
static readonly "STATE": $EnumProperty<($PassableLeavesBlock$State)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "flowerState"(): $BlockState
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Item$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassableLeavesBlock$Type = ($PassableLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassableLeavesBlock_ = $PassableLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $PlantDataEntry<E extends ($Enum<(E)>) & ($PlantDataEntry<(E)>)> {

 "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
 "registerComposter"(): void
 "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
 "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
 "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
 "getName"(): string
}

export namespace $PlantDataEntry {
const LIST: $List<($Supplier<(($PlantDataEntry<(any)>)[])>)>
function addFruitTags<T>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
function run(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
function gen<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantDataEntry$Type<E> = ($PlantDataEntry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantDataEntry_<E> = $PlantDataEntry$Type<(E)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$MangosteenCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BaseCakeBlock, $BaseCakeBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseCakeBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MangosteenCakeBlock extends $BaseCakeBlock {
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
readonly "bite": $IntegerProperty
readonly "maxBite": integer
readonly "plate": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MangosteenCakeBlock$Type = ($MangosteenCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MangosteenCakeBlock_ = $MangosteenCakeBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $DurianBlock extends $FallingBlock {
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianBlock$Type = ($DurianBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianBlock_ = $DurianBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/base/$L2Registrate$GenericBuilder" {
import {$AbstractBuilder, $AbstractBuilder$Type} from "packages/com/tterrag/registrate/builders/$AbstractBuilder"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$NamedEntry, $NamedEntry$Type} from "packages/dev/xkmc/l2library/base/$NamedEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $L2Registrate$GenericBuilder<T extends $NamedEntry<(T)>, P extends T> extends $AbstractBuilder<(T), (P), ($L2Registrate), ($L2Registrate$GenericBuilder<(T), (P)>)> {


public "defaultLang"(): $L2Registrate$GenericBuilder<(T), (P)>
public static "lazy"<T>(arg0: $Supplier$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$Type<(T)>, arg1: $NonNullSupplier$Type<(string)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $L2Registrate$GenericBuilder$Type<T, P> = ($L2Registrate$GenericBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $L2Registrate$GenericBuilder_<T, P> = $L2Registrate$GenericBuilder$Type<(T), (P)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BaseLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $BaseLeavesBlock extends $LeavesBlock {
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "flowerState"(): $BlockState
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Item$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseLeavesBlock$Type = ($BaseLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseLeavesBlock_ = $BaseLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FDCauldronBlock" {
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractCauldronBlock, $AbstractCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCauldronBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FDCauldronBlock extends $AbstractCauldronBlock {
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isFull"(arg0: $BlockState$Type): boolean
public "getInteractions"(): $Map<($Item), ($CauldronInteraction)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "build"<T extends $FDCauldronBlock>(arg0: $DataGenContext$Type<($Block$Type), (T)>, arg1: $RegistrateBlockstateProvider$Type): void
get "interactions"(): $Map<($Item), ($CauldronInteraction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDCauldronBlock$Type = ($FDCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDCauldronBlock_ = $FDCauldronBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$RangeSearchEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RangeSearchEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "getEntitiesInRange"<T extends $Entity>(arg0: $LivingEntity$Type, arg1: $Class$Type<(T)>): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeSearchEffect$Type = ($RangeSearchEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeSearchEffect_ = $RangeSearchEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$SizeEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SizeEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizeEffect$Type = ($SizeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SizeEffect_ = $SizeEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BaseBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $BaseBushBlock extends $BushBlock implements $BonemealableBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBushBlock$Type = ($BaseBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBushBlock_ = $BaseBushBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$FruitBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$FDBushType, $FDBushType$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseBushBlock, $BaseBushBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseBushBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FruitBushBlock extends $BaseBushBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $FDBushType$Type)

/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitBushBlock$Type = ($FruitBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitBushBlock_ = $FruitBushBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$JellyBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HoneyBlock, $HoneyBlock$Type} from "packages/net/minecraft/world/level/block/$HoneyBlock"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JellyBlock extends $HoneyBlock {
readonly "fruit": $FruitType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isStickyBlock"(arg0: $BlockState$Type): boolean
public "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "showJellySlideParticles"(arg0: $Entity$Type): void
public "showJellyJumpParticles"(arg0: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyBlock$Type = ($JellyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyBlock_ = $JellyBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDMelons" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$StemGrownBlock, $StemGrownBlock$Type} from "packages/net/minecraft/world/level/block/$StemGrownBlock"
import {$PlantDataEntry, $PlantDataEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$StemBlock, $StemBlock$Type} from "packages/net/minecraft/world/level/block/$StemBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AttachedStemBlock, $AttachedStemBlock$Type} from "packages/net/minecraft/world/level/block/$AttachedStemBlock"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegisterColorHandlersEvent$Block, $RegisterColorHandlersEvent$Block$Type} from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Block"

export class $FDMelons extends $Enum<($FDMelons)> implements $PlantDataEntry<($FDMelons)> {
static readonly "HAMIMELON": $FDMelons
readonly "configKey": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "placementKey": $ResourceKey<($PlacedFeature)>


public "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
public "registerComposter"(): void
public "getAttachedStem"(): $AttachedStemBlock
public static "registerColor"(arg0: $RegisterColorHandlersEvent$Block$Type): void
public "getStem"(): $StemBlock
public "getMelonBlock"(): $StemGrownBlock
public "getSlice"(): $Item
public "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
public "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
public "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
public "getName"(): string
public static "values"(): ($FDMelons)[]
public static "valueOf"(arg0: string): $FDMelons
public static "register"(): void
public "getSeed"(): $ItemNameBlockItem
public static "addFruitTags"<T extends $Item>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
public static "run"(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
public static "gen"<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
get "attachedStem"(): $AttachedStemBlock
get "stem"(): $StemBlock
get "melonBlock"(): $StemGrownBlock
get "slice"(): $Item
get "placementKey"(): $ResourceKey<($PlacedFeature)>
get "name"(): string
get "seed"(): $ItemNameBlockItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDMelons$Type = (("hamimelon")) | ($FDMelons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDMelons_ = $FDMelons$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$RageAuraEffect" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RageAuraEffect extends $RangeRenderEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RageAuraEffect$Type = ($RageAuraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RageAuraEffect_ = $RageAuraEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PineappleBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseBushBlock, $BaseBushBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseBushBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $PineappleBlock extends $BaseBushBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PineappleBlock$Type = ($PineappleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PineappleBlock_ = $PineappleBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/entries/$FruitFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FruitFluid extends $ForgeFlowingFluid {
readonly "type": $FruitType
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type, arg1: $FruitType$Type)

public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitFluid$Type = ($FruitFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitFluid_ = $FruitFluid$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$WildPineappleBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $WildPineappleBlock extends $BushBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildPineappleBlock$Type = ($WildPineappleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildPineappleBlock_ = $WildPineappleBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$DurianHelmetItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DurianHelmetItem extends $Item {
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

constructor(arg0: $Item$Properties$Type)

public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianHelmetItem$Type = ($DurianHelmetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianHelmetItem_ = $DurianHelmetItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/cauldrons/$JellyCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FDCauldronBlock, $FDCauldronBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FDCauldronBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JellyCauldronBlock extends $FDCauldronBlock {
static readonly "LEVEL": $IntegerProperty
readonly "type": $FruitType
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "build"<T extends $FDCauldronBlock>(arg0: $DataGenContext$Type<($Block$Type), (T)>, arg1: $RegistrateBlockstateProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyCauldronBlock$Type = ($JellyCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyCauldronBlock_ = $JellyCauldronBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$FirstPlayerRenderEffect" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $FirstPlayerRenderEffect {

 "onClientLevelRender"(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void

(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void
}

export namespace $FirstPlayerRenderEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPlayerRenderEffect$Type = ($FirstPlayerRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPlayerRenderEffect_ = $FirstPlayerRenderEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$FigPuddingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BaseCakeBlock, $BaseCakeBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseCakeBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FigPuddingBlock extends $BaseCakeBlock {
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
readonly "bite": $IntegerProperty
readonly "maxBite": integer
readonly "plate": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FigPuddingBlock$Type = ($FigPuddingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FigPuddingBlock_ = $FigPuddingBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BushFruitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BushFruitItem extends $ItemNameBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "registerBlocks"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BushFruitItem$Type = ($BushFruitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BushFruitItem_ = $BushFruitItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseLeavesBlock, $BaseLeavesBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseLeavesBlock"
import {$DurianLeavesBlock$Fruit, $DurianLeavesBlock$Fruit$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Fruit"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$DurianLeavesBlock$Leaf, $DurianLeavesBlock$Leaf$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Leaf"

export class $DurianLeavesBlock extends $BaseLeavesBlock {
static readonly "FRUIT": $EnumProperty<($DurianLeavesBlock$Fruit)>
static readonly "LEAF": $EnumProperty<($DurianLeavesBlock$Leaf)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "flowerState"(): $BlockState
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Item$Type): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianLeavesBlock$Type = ($DurianLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianLeavesBlock_ = $DurianLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$JelloBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SlimeBlock, $SlimeBlock$Type} from "packages/net/minecraft/world/level/block/$SlimeBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JelloBlock extends $SlimeBlock {
readonly "fruit": $FruitType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "isStickyBlock"(arg0: $BlockState$Type): boolean
public "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "isSlimeBlock"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JelloBlock$Type = ($JelloBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JelloBlock_ = $JelloBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$RangeSearchEffect, $RangeSearchEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeSearchEffect"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$FirstPlayerRenderEffect, $FirstPlayerRenderEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$FirstPlayerRenderEffect"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$DelayedEntityRender, $DelayedEntityRender$Type} from "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender"
import {$ClientRenderEffect, $ClientRenderEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$ClientRenderEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RangeRenderEffect extends $RangeSearchEffect implements $ClientRenderEffect, $FirstPlayerRenderEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer


public "render"(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void
public "onClientLevelRender"(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeRenderEffect$Type = ($RangeRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeRenderEffect_ = $RangeRenderEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$FDBlockItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$IFDFoodItem, $IFDFoodItem$Type} from "packages/dev/xkmc/fruitsdelight/content/item/$IFDFoodItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FDBlockItem extends $BlockItem implements $IFDFoodItem {
readonly "food": $IFDFood
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $IFDFood$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $IFDFood$Type, arg3: $UseAnim$Type)

public "food"(): $IFDFood
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrinkingSound"(): $SoundEvent
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDBlockItem$Type = ($FDBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDBlockItem_ = $FDBlockItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/entries/$FruitFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $FruitFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $FruitType$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitFluidType$Type = ($FruitFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitFluidType_ = $FruitFluidType$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AbstractShapedRecipe$Serializer, $AbstractShapedRecipe$Serializer$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$Serializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractShapedRecipe<T extends $AbstractShapedRecipe<(T)>> extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type)

public "getSerializer"(): $AbstractShapedRecipe$Serializer<(T)>
get "serializer"(): $AbstractShapedRecipe$Serializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$Type<T> = ($AbstractShapedRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe_<T> = $AbstractShapedRecipe$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushes" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$PlantDataEntry, $PlantDataEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$FruitPlant, $FruitPlant$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FruitPlant"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $FDBushes extends $Enum<($FDBushes)> implements $FruitPlant<($FDBushes)> {
static readonly "BLUEBERRY": $FDBushes
static readonly "LEMON": $FDBushes
static readonly "CRANBERRY": $FDBushes
readonly "configKey": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "placementKey": $ResourceKey<($PlacedFeature)>


public "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
public "getFruit"(): $Item
public "registerComposter"(): void
public "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
public "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
public "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
public "buildBushModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type): void
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $BushBlock$Type): void
public "getBush"(): $BushBlock
public "getName"(): string
public static "values"(): ($FDBushes)[]
public static "valueOf"(arg0: string): $FDBushes
public static "register"(): void
public "getSeed"(): $Item
public "getFruitTag"(): $TagKey<($Item)>
public static "addFruitTags"<T extends $Item>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
public static "run"(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
public static "gen"<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
get "fruit"(): $Item
get "placementKey"(): $ResourceKey<($PlacedFeature)>
get "bush"(): $BushBlock
get "name"(): string
get "seed"(): $Item
get "fruitTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDBushes$Type = (("lemon") | ("blueberry") | ("cranberry")) | ($FDBushes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDBushes_ = $FDBushes$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DoubleBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DoublePlantBlock, $DoublePlantBlock$Type} from "packages/net/minecraft/world/level/block/$DoublePlantBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $DoubleBushBlock extends $DoublePlantBlock implements $BonemealableBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "setGrowth"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): void
public "getDoubleBlockStart"(): integer
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "doubleBlockStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBushBlock$Type = ($DoubleBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleBushBlock_ = $DoubleBushBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDMelons$FDMelonBlock" {
import {$StemBlock, $StemBlock$Type} from "packages/net/minecraft/world/level/block/$StemBlock"
import {$FDMelons, $FDMelons$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDMelons"
import {$AttachedStemBlock, $AttachedStemBlock$Type} from "packages/net/minecraft/world/level/block/$AttachedStemBlock"
import {$StemGrownBlock, $StemGrownBlock$Type} from "packages/net/minecraft/world/level/block/$StemGrownBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $FDMelons$FDMelonBlock extends $StemGrownBlock {
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

constructor(arg0: $FDMelons$Type, arg1: $BlockBehaviour$Properties$Type)

public "getAttachedStem"(): $AttachedStemBlock
public "getStem"(): $StemBlock
get "attachedStem"(): $AttachedStemBlock
get "stem"(): $StemBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDMelons$FDMelonBlock$Type = ($FDMelons$FDMelonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDMelons$FDMelonBlock_ = $FDMelons$FDMelonBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ShapelessRecipe$Serializer, $ShapelessRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe$Serializer"
import {$AbstractShapelessRecipe, $AbstractShapelessRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractShapelessRecipe$RecipeFactory, $AbstractShapelessRecipe$RecipeFactory$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$RecipeFactory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AbstractShapelessRecipe$Serializer<T extends $AbstractShapelessRecipe<(T)>> extends $ShapelessRecipe$Serializer {

constructor(arg0: $AbstractShapelessRecipe$RecipeFactory$Type<(T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapelessRecipe$Serializer$Type<T> = ($AbstractShapelessRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapelessRecipe$Serializer_<T> = $AbstractShapelessRecipe$Serializer$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$FDFoodItem" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFDFoodItem, $IFDFoodItem$Type} from "packages/dev/xkmc/fruitsdelight/content/item/$IFDFoodItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FDFoodItem extends $Item implements $IFDFoodItem {
static readonly "ROOT": string
readonly "food": $IFDFood
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

constructor(arg0: $Item$Properties$Type, arg1: $IFDFood$Type, arg2: $UseAnim$Type)
constructor(arg0: $Item$Properties$Type, arg1: $IFDFood$Type)

public static "setContent"(arg0: $FDFoodItem$Type, arg1: $FruitType$Type): $ItemStack
public "fillItemCategory"(arg0: integer, arg1: $CreativeModeTabModifier$Type): void
public "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
public "food"(): $IFDFood
public static "getFoodEffects"(arg0: $FoodProperties$Type, arg1: $List$Type<($Component$Type)>): void
public static "getFoodEffects"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrinkingSound"(): $SoundEvent
public static "color"(arg0: $ItemStack$Type, arg1: integer): integer
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDFoodItem$Type = ($FDFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDFoodItem_ = $FDFoodItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$ChorusEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChorusEffect extends $MobEffect {
 "attributeModifiers": $Map<($Attribute), ($AttributeModifier)>
 "color": integer

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "teleport"(arg0: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusEffect$Type = ($ChorusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusEffect_ = $ChorusEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock$State" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PassableLeavesBlock$State extends $Enum<($PassableLeavesBlock$State)> implements $StringRepresentable {
static readonly "LEAVES": $PassableLeavesBlock$State
static readonly "FLOWERS": $PassableLeavesBlock$State
static readonly "FRUITS": $PassableLeavesBlock$State


public "getSerializedName"(): string
public static "values"(): ($PassableLeavesBlock$State)[]
public static "valueOf"(arg0: string): $PassableLeavesBlock$State
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassableLeavesBlock$State$Type = (("flowers") | ("leaves") | ("fruits")) | ($PassableLeavesBlock$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassableLeavesBlock$State_ = $PassableLeavesBlock$State$Type;
}}
declare module "packages/dev/xkmc/l2library/base/$L2Registrate" {
import {$L2Registrate$RegistryInstance, $L2Registrate$RegistryInstance$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate$RegistryInstance"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EnchantmentBuilder, $EnchantmentBuilder$Type} from "packages/com/tterrag/registrate/builders/$EnchantmentBuilder"
import {$NoConfigBuilder, $NoConfigBuilder$Type} from "packages/com/tterrag/registrate/builders/$NoConfigBuilder"
import {$L2Registrate$GenericBuilder, $L2Registrate$GenericBuilder$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate$GenericBuilder"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$CreativeModeTab$Builder, $CreativeModeTab$Builder$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EnchantmentBuilder$EnchantmentFactory, $EnchantmentBuilder$EnchantmentFactory$Type} from "packages/com/tterrag/registrate/builders/$EnchantmentBuilder$EnchantmentFactory"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$NamedEntry, $NamedEntry$Type} from "packages/dev/xkmc/l2library/base/$NamedEntry"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/tterrag/registrate/util/entry/$RegistryEntry"
import {$AbstractRegistrate, $AbstractRegistrate$Type} from "packages/com/tterrag/registrate/$AbstractRegistrate"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $L2Registrate extends $AbstractRegistrate<($L2Registrate)> {

constructor(arg0: string)

public "buildModCreativeTab"(arg0: string, arg1: string, arg2: $Consumer$Type<($CreativeModeTab$Builder$Type)>): $RegistryEntry<($CreativeModeTab)>
public "newRegistry"<E extends $NamedEntry<(E)>>(arg0: string, arg1: $Class$Type<(any)>): $L2Registrate$RegistryInstance<(E)>
public "buildL2CreativeTab"(arg0: string, arg1: string, arg2: $Consumer$Type<($CreativeModeTab$Builder$Type)>): $RegistryEntry<($CreativeModeTab)>
public "enchantment"<T extends $Enchantment>(arg0: string, arg1: $EnchantmentCategory$Type, arg2: $EnchantmentBuilder$EnchantmentFactory$Type<(T)>, arg3: string): $EnchantmentBuilder<(T), ($L2Registrate)>
/**
 * 
 * @deprecated
 */
public "enchantment"<T extends $Enchantment>(arg0: string, arg1: $EnchantmentCategory$Type, arg2: $EnchantmentBuilder$EnchantmentFactory$Type<(T)>): $EnchantmentBuilder<(T), ($L2Registrate)>
public "effect"<T extends $MobEffect>(arg0: string, arg1: $NonNullSupplier$Type<(T)>, arg2: string): $NoConfigBuilder<($MobEffect), (T), ($L2Registrate)>
public "generic"<T extends $NamedEntry<(T)>, P extends T>(arg0: $L2Registrate$RegistryInstance$Type<(T)>, arg1: string, arg2: $NonNullSupplier$Type<(P)>): $L2Registrate$GenericBuilder<(T), (P)>
public "recipe"<T extends $Recipe<(any)>>(arg0: string): $RegistryEntry<($RecipeType<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $L2Registrate$Type = ($L2Registrate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $L2Registrate_ = $L2Registrate$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FruitCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FDCauldronBlock, $FDCauldronBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FDCauldronBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FruitCauldronBlock extends $FDCauldronBlock {
static readonly "MAX": integer
static readonly "LEVEL": $IntegerProperty
readonly "type": $FruitType
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitCauldronBlock$Type = ($FruitCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitCauldronBlock_ = $FruitCauldronBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood" {
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$EffectEntry, $EffectEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$EffectEntry"
import {$FoodType, $FoodType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FoodType"

export interface $IFDFood {

 "getEffects"(): ($EffectEntry)[]
 "fruit"(): $FruitType
 "getType"(): $FoodType
}

export namespace $IFDFood {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFDFood$Type = ($IFDFood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFDFood_ = $IFDFood$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/mixin/$AbstractCauldronBlockAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AbstractCauldronBlockAccessor {

 "getInteractions"(): $Map<($Item), ($CauldronInteraction)>

(): $Map<($Item), ($CauldronInteraction)>
}

export namespace $AbstractCauldronBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCauldronBlockAccessor$Type = ($AbstractCauldronBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCauldronBlockAccessor_ = $AbstractCauldronBlockAccessor$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$RecipeFactory" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AbstractShapedRecipe, $AbstractShapedRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AbstractShapedRecipe$RecipeFactory<T extends $AbstractShapedRecipe<(T)>> {

 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type): T

(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type): T
}

export namespace $AbstractShapedRecipe$RecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$RecipeFactory$Type<T> = ($AbstractShapedRecipe$RecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe$RecipeFactory_<T> = $AbstractShapedRecipe$RecipeFactory$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BaseCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseCakeBlock extends $Block {
readonly "bite": $IntegerProperty
readonly "maxBite": integer
readonly "plate": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $IntegerProperty$Type, arg2: integer, arg3: boolean)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCakeBlock$Type = ($BaseCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCakeBlock_ = $BaseCakeBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$IFDFoodItem" {
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"

export interface $IFDFoodItem {

 "food"(): $IFDFood

(): $IFDFood
}

export namespace $IFDFoodItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFDFoodItem$Type = ($IFDFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFDFoodItem_ = $IFDFoodItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$RecipeFactory" {
import {$AbstractShapelessRecipe, $AbstractShapelessRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AbstractShapelessRecipe$RecipeFactory<T extends $AbstractShapelessRecipe<(T)>> {

 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>): T

(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>): T
}

export namespace $AbstractShapelessRecipe$RecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapelessRecipe$RecipeFactory$Type<T> = ($AbstractShapelessRecipe$RecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapelessRecipe$RecipeFactory_<T> = $AbstractShapelessRecipe$RecipeFactory$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Leaf" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DurianLeavesBlock$Leaf extends $Enum<($DurianLeavesBlock$Leaf)> implements $StringRepresentable {
static readonly "LEAF": $DurianLeavesBlock$Leaf
static readonly "BUDDING": $DurianLeavesBlock$Leaf
static readonly "BARE": $DurianLeavesBlock$Leaf


public "getSerializedName"(): string
public static "values"(): ($DurianLeavesBlock$Leaf)[]
public static "valueOf"(arg0: string): $DurianLeavesBlock$Leaf
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianLeavesBlock$Leaf$Type = (("budding") | ("leaf") | ("bare")) | ($DurianLeavesBlock$Leaf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianLeavesBlock$Leaf_ = $DurianLeavesBlock$Leaf$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$FoodType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FoodType extends $Enum<($FoodType)> {
static readonly "JUICE": $FoodType
static readonly "JELLY": $FoodType
static readonly "JELLO": $FoodType
static readonly "FRUIT": $FoodType
static readonly "SLICE": $FoodType
static readonly "SHEET": $FoodType
static readonly "STICK": $FoodType
static readonly "SWEET": $FoodType
static readonly "CREAM": $FoodType
static readonly "BOWL": $FoodType
static readonly "MEAL": $FoodType
static readonly "DESSERT": $FoodType
static readonly "STAPLE": $FoodType
static readonly "ROLL": $FoodType
static readonly "COOKIE": $FoodType
static readonly "MANGOSTEEN_CAKE": $FoodType
static readonly "DURIAN_FLESH": $FoodType
readonly "food": integer
readonly "tags": ($TagKey<($Item)>)[]
readonly "effectLevel": integer


public "model"<T>(arg0: $ItemBuilder$Type<($Item$Type), (T)>, arg1: integer, arg2: $FruitType$Type): $ItemBuilder<($Item), (T)>
public "build"(arg0: $Item$Properties$Type, arg1: $IFDFood$Type): $Item
public "build"(arg0: $Item$Properties$Type, arg1: $IFDFood$Type, arg2: $Block$Type): $Item
public static "values"(): ($FoodType)[]
public static "valueOf"(arg0: string): $FoodType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodType$Type = (("mangosteen_cake") | ("staple") | ("cookie") | ("fruit") | ("roll") | ("cream") | ("juice") | ("bowl") | ("meal") | ("jello") | ("dessert") | ("slice") | ("durian_flesh") | ("sheet") | ("stick") | ("jelly") | ("sweet")) | ($FoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodType_ = $FoodType$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$JellyBottleBlock" {
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $JellyBottleBlock extends $Block {
static readonly "SHAPE": $VoxelShape
readonly "fruit": $FruitType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyBottleBlock$Type = ($JellyBottleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyBottleBlock_ = $JellyBottleBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$FruitType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EffectFunc, $EffectFunc$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$EffectFunc"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $FruitType extends $Enum<($FruitType)> {
static readonly "APPLE": $FruitType
static readonly "BLUEBERRY": $FruitType
static readonly "GLOWBERRY": $FruitType
static readonly "HAMIMELON": $FruitType
static readonly "MELON": $FruitType
static readonly "HAWBERRY": $FruitType
static readonly "LYCHEE": $FruitType
static readonly "MANGO": $FruitType
static readonly "ORANGE": $FruitType
static readonly "PEACH": $FruitType
static readonly "PEAR": $FruitType
static readonly "PERSIMMON": $FruitType
static readonly "PINEAPPLE": $FruitType
static readonly "LEMON": $FruitType
static readonly "CRANBERRY": $FruitType
static readonly "MANGOSTEEN": $FruitType
static readonly "SWEETBERRY": $FruitType
static readonly "CHORUS": $FruitType
static readonly "BAYBERRY": $FruitType
static readonly "KIWI": $FruitType
static readonly "FIG": $FruitType
static readonly "DURIAN": $FruitType
readonly "color": integer
readonly "jellyCost": integer
readonly "eff": $List<($EffectFunc)>


public "getFruit"(): $Item
public "getJelly"(): $Item
public "getFruitTag"(): $Ingredient
public "getJello"(): $Item
public static "values"(): ($FruitType)[]
public static "valueOf"(arg0: string): $FruitType
public static "empty"(): $FruitType
get "fruit"(): $Item
get "jelly"(): $Item
get "fruitTag"(): $Ingredient
get "jello"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitType$Type = (("mangosteen") | ("bayberry") | ("kiwi") | ("blueberry") | ("hawberry") | ("fig") | ("sweetberry") | ("peach") | ("glowberry") | ("mango") | ("orange") | ("apple") | ("lychee") | ("pear") | ("lemon") | ("pineapple") | ("persimmon") | ("cranberry") | ("chorus") | ("hamimelon") | ("melon") | ("durian")) | ($FruitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitType_ = $FruitType$Type;
}}
