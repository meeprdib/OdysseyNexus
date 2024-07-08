import {$ModifyAttributeEventJS, $ModifyAttributeEventJS$Type} from "packages/net/liopyu/entityjs/events/$ModifyAttributeEventJS"
import {$ClientInitEventJS, $ClientInitEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientInitEventJS"
import {$ItemModelPropertiesEventJS, $ItemModelPropertiesEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemModelPropertiesEventJS"
import {$BoilerHeaterHandlerEvent, $BoilerHeaterHandlerEvent$Type} from "packages/dev/latvian/mods/kubejs/create/events/$BoilerHeaterHandlerEvent"
import {$AddWorldgenEventJS, $AddWorldgenEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/gen/$AddWorldgenEventJS"
import {$RegisterSpawnPlacementsEventJS, $RegisterSpawnPlacementsEventJS$Type} from "packages/net/liopyu/entityjs/events/$RegisterSpawnPlacementsEventJS"
import {$CreativeTabEvent, $CreativeTabEvent$Type} from "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabEvent"
import {$SpellSelectionEventJS, $SpellSelectionEventJS$Type} from "packages/com/squoshi/irons_spells_js/events/$SpellSelectionEventJS"
import {$ItemModificationEventJS, $ItemModificationEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemModificationEventJS"
import {$RegistryEventJS, $RegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryEventJS"
import {$ModifyLivingEntityBuilder, $ModifyLivingEntityBuilder$Type} from "packages/net/liopyu/entityjs/builders/living/modification/$ModifyLivingEntityBuilder"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$BlockModificationEventJS, $BlockModificationEventJS$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockModificationEventJS"
import {$SpecialFluidHandlerEvent, $SpecialFluidHandlerEvent$Type} from "packages/dev/latvian/mods/kubejs/create/events/$SpecialFluidHandlerEvent"
import {$ItemArmorTierRegistryEventJS, $ItemArmorTierRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ItemArmorTierRegistryEventJS"
import {$SpecialSpoutHandlerEvent, $SpecialSpoutHandlerEvent$Type} from "packages/dev/latvian/mods/kubejs/create/events/$SpecialSpoutHandlerEvent"
import {$RecipeSchemaRegistryEventJS, $RecipeSchemaRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeSchemaRegistryEventJS"
import {$RemoveWorldgenEventJS, $RemoveWorldgenEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/gen/$RemoveWorldgenEventJS"
import {$ItemToolTierRegistryEventJS, $ItemToolTierRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ItemToolTierRegistryEventJS"

declare global {
export namespace WorldgenEvents {
function add(handler: (event: $AddWorldgenEventJS) => void): void
function remove(handler: (event: $RemoveWorldgenEventJS) => void): void
}
export namespace EntityJSEvents {
function modifyEntity(handler: (event: $ModifyLivingEntityBuilder) => void): void
function attributes(handler: (event: $ModifyAttributeEventJS) => void): void
function spawnPlacement(handler: (event: $RegisterSpawnPlacementsEventJS) => void): void
}
export namespace PlayerEvents {
function spellSelection(handler: (event: $SpellSelectionEventJS) => void): void
}
export namespace ItemEvents {
function modelProperties(handler: (event: $ItemModelPropertiesEventJS) => void): void
function modification(handler: (event: $ItemModificationEventJS) => void): void
function toolTierRegistry(handler: (event: $ItemToolTierRegistryEventJS) => void): void
function armorTierRegistry(handler: (event: $ItemArmorTierRegistryEventJS) => void): void
}
export namespace ClientEvents {
function init(handler: (event: $ClientInitEventJS) => void): void
}
export namespace CreateEvents {
function boilerHeatHandler(handler: (event: $BoilerHeaterHandlerEvent) => void): void
function pipeFluidEffect(handler: (event: $SpecialFluidHandlerEvent) => void): void
function spoutHandler(handler: (event: $SpecialSpoutHandlerEvent) => void): void
}
export namespace StartupEvents {
function init(handler: (event: $StartupEventJS) => void): void
function registry(extra: string, handler: (event: $RegistryEventJS<(any)>) => void): void
function modifyCreativeTab(extra: string, handler: (event: $CreativeTabEvent) => void): void
function recipeSchemaRegistry(handler: (event: $RecipeSchemaRegistryEventJS) => void): void
function postInit(handler: (event: $StartupEventJS) => void): void
}
export namespace BlockEvents {
function modification(handler: (event: $BlockModificationEventJS) => void): void
}
}