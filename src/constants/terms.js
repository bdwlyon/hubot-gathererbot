var map = {
    bushido: 'Bushido is a triggered ability. “Bushido N” means “Whenever this creature blocks or becomes blocked, it gets +N/+N until end of turn.”',
    deathtouch: 'Deathtouch is a static ability that means any amount of damage dealt by a source with deathtouch is enough to kill the creature receiving the damage.',
    defender: 'Defender is a static ability that means the affected permanent cannot attack. It is commonly found on creatures with low power, and high toughness, such as most walls.',
    doublestrike: 'A creature with double strike deals damage during the first combat damage step alongside creatures with first strike, then additionally deal damage during the second damage step along with regular creatures.',
    enchant: 'Enchant is a static ability found on auras which defines what they can enchant. The keyword is written with a quality after it (e.g. Enchant creature) which defines what a the aura can enchant.',
    equip: 'Equip is an activated ability found on equipments. By paying an equip cost, you can attach the artifact to a creature you control. Equipping can only be used at sorcery speed.',
    fabricate: 'Fabricate is a triggered ability. “Fabricate N” means “When this permanent enters the battlefield, you may put N +1/+1 counters on it. If you don’t, create N 1/1 colorless Servo artifact creature tokens.”',
    fear: 'It is a static ability which restricts the types of creatures that can block a creature with fear. A creature with fear can\'t be blocked, except by artifact creatures and by creatures that are black.',
    firststrike: 'First strike is a static ability that creates an additional combat damage step. A creature with first strike will deal its combat damage before a creature that doesn\'t. This often leads to the other creature dying before it gets a chance to strike.',
    flash: 'Flash is a static ability which allows the card it is printed on to be played at any time you could play an Instant.',
    flying: 'A creature with flying cannot be blocked except by other creatures with either flying or reach. Creatures with flying can block other creatures with or without flying.',
    haste: 'It is a static ability that allows creatures to ignore the rules informally known as "summoning sickness". This means that they can attack, and activate tap or untap abilities on the same turn they enter the battlefield.',
    hexproof: 'It is a static ability that means that the affected permanent or player cannot be the target of spells or abilities your opponents control, but can still be target by spells or abilities you control.\nHexproof is very similar to the keyword shroud, except that shroud additionally prevents the permanent\'s controller from targeting the permanent.',
    indestructible: 'It is a static ability that means that any permanent that has indestructible cannot be destroyed, and cannot be destroyed as a result of lethal damage.',
    intimidate: 'It is a static ability which restricts the types of creatures that can block a creature with intimidate. A creature with intimidate can\'t be blocked, except by artifact creatures and by creatures that share a color with it.',
    landfall: 'A landfall ability triggers whenever a land enters the battlefield under your control for any reason. It triggers whenever you play a land, as well as whenever a spell or ability causes you to put a land onto the battlefield under your control. It will even trigger when a spell or ability causes another player to put a land onto the battlefield under your control.',
    landwalk: 'It is a static ability that means the affected creature cannot be blocked as long as the defending player controls a land of the specified type. Landwalk abilities are written "{type}walk" where the type is a something about the land (e.g. a creature with plainswalk cares about cards with the land type Plains).',
    lifelink: 'It is a static ability that modifies the result of damage. When a creature with lifelink deals damage, the controller of that creature also gains an amount of life equal to the amount of damage dealt in addition to dealing the damage as normal.',
    madness: 'Madness is a keyword that represents two abilities. The first is a static ability that functions while the card with madness is in a player’s hand. The second is a triggered ability that functions when the first ability is applied. “Madness [cost]” means “If a player would discard this card, that player discards it, but exiles it instead of putting it into his or her graveyard” and “When this card is exiled this way, its owner may cast it by paying [cost] rather than paying its mana cost. If that player doesn’t, he or she puts this card into his or her graveyard.”',
    menace: 'A creature with menace can’t be blocked except by two or more creatures.',
    monstrosity: '“Monstrosity N” means “If this permanent isn’t monstrous, put N +1/+1 counters on it and it becomes monstrous.”',
    morph: 'A permanent with morph allows the player to pay 3 to play the card with the ability face down as a 2/2 colorless, typeless creature. The player can then turn that creature face-up at any time they could play an instant by paying a variable Morph cost printed on each card. Many permanents with morph have additional triggered abilities that trigger when they are turned face-up, and some other permanents trigger when a different card is turned face up.',
    ninjutsu: 'Ninjutsu is an activated ability that functions only while the card with ninjutsu is in a player’s hand. “Ninjutsu [cost]” means “[Cost], Reveal this card from your hand, Return an unblocked attacking creature you control to its owner’s hand: Put this card onto the battlefield from your hand tapped and attacking.”',
    prowess: 'Prowess is a triggered static ability. “Prowess” means “Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.”',
    reach: 'It is a static ability that means the affected creature can block creatures with flying.',
    shroud: 'It is a static ability that means the affected permanent or player cannot be the target of any spells or abilities. It differs from hexproof in that even the player who controls the permanent cannot target it.',
    trample: 'When a creature with trample attacks and is blocked by an opponent\'s creature, if the blocking creature has less toughness than the attacking creature has power, any additional damage not dealt to the blocking creature can still go through to damage the defending player or planeswalker.'
};

module.exports = map;