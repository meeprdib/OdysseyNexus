ItemEvents.tooltip(event => {
    // event.add(['minecraft:enchanting_table'], 'Enchanting is disabled in this modpack! Find other ways to make yourself more powerful.');
    // event.add(['kubejs:ruined_controller'], 'A once powerful machine worn down by time and neglect, used as a centerpiece for storage networks. Only good for scrap parts, unless one wants to repair it...');
    event.add(['irons_spellbooks:arcane_debris', 'irons_spellbooks:ancient_knowledge_fragment', 'irons_spellbooks:common_ink', 'irons_spellbooks:uncommon_ink', 'irons_spellbooks:rare_ink', 'irons_spellbooks:epic_ink', 'irons_spellbooks:legendary_ink'], '§7Useless in the modpack as of now, but there might be a use for this later. If I decide to remove it, you have gotten yourself a collectors item!');
    event.add(['apotheosis:gem'], '§7Apply to a piece of gear with sockets using a Smithing Table. Sockets can be granted to gear through the Reforging Table.')
    event.add(['irons_spellbooks:inscription_table', 'irons_spellbooks:scroll_forge', 'irons_spellbooks:alchemist_cauldron', 'irons_spellbooks:arcane_anvil'], '§7This item has had its functionality removed in this modpack, it only serves decorative purposes now!')
    event.add(['supplementaries:wild_flax', 'supplementaries:flax_seeds', 'supplementaries:flax'], '§7Found growing near water')
})
