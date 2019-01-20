const WEAL = [
	[
		// Weal Level 1
		"You cast faerie fire.",
		"A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
		"Torches fall from the sky in a 30 ft. radius surrounding the target. All creatures in the area take 1d4 bludgeoning and 1d4 fire damage (Dex save halves). The torches extinguish when they hit the ground.",
		"You cast magic missile.",
		"You cast Tasha's hideous laughter.",
		"You cast doom.",
		"Glowing manacles appear around the target's limbs. The target must succeed on a Strength save or be restrained for 1 minute. The target may use its action to to make a Strength check to free itself.",
		"Your speed is doubled for 1 minute.",
		"All magic items and effects within 30 ft. of the rod glow blue for 10 minutes.",
		"You cast charm person.",
		"You gain 1d6 hit points.",
		"You have advantage on your next attack, skill check, or saving throw.",
		"A stream of 1d4 x 10 gems, each worth 1 gp, shoots from the rod's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
		"A stream of gravy shoots out of the rod at the target. The effect is identical to grease.",
	],
	[
		// Weal Level 2
		"You cast Detect Thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.",
		"You cast gust of wind.",
		"You shrink the target as if you had cast enlarge/reduce. If the target can't be affected by that spell or if you didn't target a creature, you become the target.",
		"You cast darkness.",
		"You cast levitate.",
		"A nearby weapon animates and begins to attack your enemies as a small animated object for 1 minute.",
		"You cast mirror image.",
		"The rod sprays sticky honey in a 30-foot cone. The affected spaces are difficult terrain. The first time in a turn a creature enters the area or starts its turn in the goo it must succeed on a Strength saving throw to avoid being stuck, becoming grappled by the honey (escape DC same as Save DC).",
		"The rod emits 30 gallons of water in a torrent 30 feet long and 1 foot wide. Each creature in the spray must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.",
		"You cast blindness/deafness.",
		"You gain a breath attack as dragon's breath for the next 24 hours.",
		"You cast scorching ray.",
		"Wielder can use augury for the next 1d4 questions.",
		"You cast calm emotions.",
		"You grow a third eye on the back of your head. If unobstructed, it gives you advantage on all initiative checks.",
	],
	[
		// Weal Level 3
		"You cast slow.",
		"You cast fireball.",
		"The rod moves you out of harm's way. All attacks on you have disadvantage for the next minute, and all Dexterity saves are made with evasion.",
		"You cast stinking cloud.",
		"A large boulder appears out of thin air above the target and drops on the target, dealing 8d6 damage (Dex save half).",
		"You cast sleet storm.",
		"You cast bestow curse, or remove curse if target is already cursed.",
		"Bubbles shoot from the end of the rod in a 30 ft. cone, creatures in the area fall asleep (Wis save negates).",
		"You cast fear.",
		"You cast blink.",
		"You gain a flight speed of 60 ft. for 10 minutes.",
		"1d12 * 100 gold coins spill out from the tip of the rod.",
		"You cast lightning bolt.",
		"You conjure 4 skeletons which collapse into dust after 1 hour.",
		"You cast call lightning."
	],
	[
		// Weal Level 4
		"A series of shooting stars fly from the end of the rod and continue in a 100 ft. line. All in the area of effect take 6d6 points of force damage and are knocked prone (Dex save half, negates prone).",
		"Every creature in a 60-foot radius of you becomes invisible for 1 round.",
		"You cast polymorph. You do not need to concentrate on this spell. After 2d4 rounds the target of the polymorph makes a Wisdom saving throw at the end of each of its turns, ending the effect on itself on a success. If it fails three such saving throws the duration becomes permanent.",
		"All ranged attacks directed within 30-foot radius of the target are made against the target instead for 10 minutes.",
		"The target is covered in slippery slime. Each time it tries to move it must succeed on a Dexterity saving throw or fall prone. The target must make a Dexterity saving throw each time it tries to use an item or weapon, dropping the item on a failure. The slime dries and crumbles away after 1 minute.",
		"A tree erupts from the ground beneath the target. The tree grows up to 40 feet high, has a 5-foot diameter trunk, and its branches spread out in a 10-foot radius at the top. If the target was a creature, it must make on a Dexterity saving throw. On a failure, it is caught in the branches at the top of the tree, and on a success it falls prone in an unoccupied space within 5 feet of the trunk.",
		"The area in a 20-foot radius around the target bursts green flame. Immediately, each creature must make a Dex saving throw or take 5d8 fire damage, or half as much on a successful save. Each creature that ends its turn inside the flames also takes 5d8 damage.",
		"The rod regains 1d4 charges.",
		"You cast vitriolic sphere.",
		"You cast Evard's black tentacles.",
		"You cast stoneskin on yourself.",
		"You cast greater invisibility on yourself.",
		"Whenever you speak, your voice causes a sonic boom similar to the shatter spell. This may be used in combat as a bonus action.",
		"You gain a burrow speed of 30 ft. for the next 24 hours."
	],
	[
		// Weal Level 5
		"You cast conjure elemental of a random type. (Roll 1d4 for air, earth, fire, water, respectively.)",
		"If you are a spellcaster, your most powerful damage-dealing spell is cast at the target. The spell deals maximum possible damage.",
		"You cast wall of stone. There is a 50% chance that somewhere on the wall is a wooden door.",
		"You cast hold monster.",
		"If you targeted a creature, it must succeed on a Charisma saving throw or become fanatically loyal to you for 1 day. If you didn't target a creature, the nearest creature to the target other than you becomes the target.",
		"You cast transmute rock (rock to mud) on the ground beneath the target (50% chance) or ceiling above the target (50% chance).",
		"Every creature within 60 feet of you regains hit points equal to 3d8 + your spell casting ability modifier.",
		"You gain the benefits of a short rest.",
		"You cast cone of cold.",
		"You cast dominate person.",
		"One of your ability scores doubles for 24 hours. Roll a d6 to determine which ability score is affected.",
		"You cast Bigby's hand.",
		"You grow a third arm. When you use the attack action on your turn, you may use your bonus action to make an extra attack with the third arm.",
	],
	[
		// Weal Level 6
		"If you targeted a creature, it must make a Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly Petrified. On any other failed save, the target is Restrained and begins to turn to stone. While Restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming Petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic.",
		"You have advantage on all saving throws until you fail a saving throw.",
		"You cast disintegrate. If the target is reduced to 0 hit points, it is not reduced to find grey dust but a foul smelling green sludge.",
		"You cast eyebite.",
		"You cast move earth.",
		"The target is sent 1d4 rounds forward in time.",
		"You cast chain lightning.",
		"A deluge of pies rains down from above the target in a 10 ft. radius. All creatures in the area take 10d10 damage. A successful Dexterity saving throw halves this damage.",
		"You cast heroes' feast.",
		"One magic item belonging to you or your allies gains a minor magical power.",
		"You cast Otto's Irresistible Dance",
		"You are affected by Tenser's Transformation for the next 24 hours. Your maximum HP increases by 50.",
		"Your next spell is cast as though using a 9th level spell slot (or otherwise similarly enhanced).",
	],
	[
		// Weal Level 7
		"You cast delayed blast fireball. You do not need to concentrate on this spell but it randomly detonates after 1d4 rounds.",
		"You cast forcecage (cage shape).",
		"You cast power word pain.",
		"You summon a hezrou at the target location. It is not controlled by you and immediately attack the nearest creature. The hezrou remains for 1 hour.",
		"You cast project image.",
		"If you are a spellcaster, you regain 3 spell slots of 5th level or lower. If you are not a spellcaster, you take 5d10 points of psychic damage.",
		"You gain the ownership of a 1d12 * 1000 gp gem.",
	],
	[
		// Weal Level 8
		"The number of gold coins on your person double.",
		"You cast sunburst.",
		"For the next 24 hours, you may add a +20 bonus to any single attack roll, skill check, or saving throw.",
		"You gain the ownership of a laser pistol (50%), an antimatter rifle (25%), or a laser rifle (25%) (DMG 268). The weapon is fully loaded.",
		"You cast tsunami.",
	],
	[
		// Weal Level 9
		"You cease to age.",
		"If the target has less than 100 hit points it melts into a puddle of water.",
		"The target ceases to exist and is removed from time. It returns to the space it occupied after 1d100 rounds. If a creature or object is in the location, the target takes 3d6 force damage and is shunted into the nearest unoccupied space.",
		"You cast psychic scream.",
		"If the target has less than 100 hit points it explodes. Each creature in a 30-foot radius of the target must succeed on a Dexterity saving throw. On a failed save, they take 4d6 fire and 4d6 bludgeoning damage, or half as much on a successful one",
		"You cast wish. If you do not declare your wish in the next 30 seconds, the target of the spell can instead use the wish.",
		"You cast Time Stop.",
		"You and nearby companions are teleported to your current destination.",
		"You and nearby allies are fully healed.",
		"You cast gate.",
		"A deceased individual known to you is brought back to life before you.",
		"You cast shapechange into 1 creature of your choice.",
		"You gain the ownership of a random magic item.",
		"You cast foresight.",
	]
];
const NEUTRAL = [
	[
		// Neutral Level 1
		"A rose sprouts from the tip of the rod.",
		"Flowers grow within a 10 ft. radius of the rod wielder.",
		"Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
		"All creatures within a 30 ft. radius of the target have themselves and all their equipment cleaned as if from a bath.",
		"You are suddenly coated in butter, honey, and spices.",
		"A pebble appears out of thin air above you and drops on your head.",
		"You become soaking wet.",
		"The rod of wonder turns into a spatula for 10 minutes.",
		"A puff of smoke comes out of the tip of the rod.",
		"A stream of water shoots out of the rod.",
		"A flight of doves emerge from the tip of the rod and vanish after 5 minutes.",
		"Your hunger is satiated and you require no further nourishment for 10 days.",
		"Target begins sweating profusely and continues to do so for 24 hours.",
		"A nearby ally grows antlers.",
		"Two ghostly fingers form and poke you (50%) or the target (50%) in the eyes. This gives disadvantage on all attacks made during the next turn.",
		"A large floating eye follows the caster for 1 hour.",
		"You summon forth a tiny blue rabbit that sounds like a frog and smells like a cat.",
		"You emanate an aura of cold (50%) or warm (50%) air in a 5 ft. radius.",
		"You gain the abilty to levitate for brief periods. You can hover up to 1 ft. off the ground for a number of rounds equal to your Constitution modifier. This ability lasts for 10 minutes.",
		"A stream of tomatoes shoot out of the rod and pelts the target.",
	],
	[
		// Neutral Level 2
		"If you have darkvision, you lose its benefits for one week. If you do not have darkvision, you gain its benefits for one week.",
		"A random nearby weapon lengthens. Its reach is increased by 5 ft. but attacks made with it are with disadvantage.",
		"For the next 24 hours, confections and pastries pop from the rod every 10 minutes.",
		"You teleport to an unoccupied space 30 feet away in a random direction.",
		"A wall of cheese (60' * 20' * 1') forms between you and the target. Each 5 ft. section of the wall has 1 HP.",
		"Your fists become huge for 1 minute. Your unarmed strikes deal 1d8 damage.",
		"You grow a 3 ft. long beard.",
		"Your body becomes slightly translucent.",
		"A wall of cheese (60' * 20' * 1') forms between you and the target.",
		"The target is teleported to 10 ft. of you.",
		"Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute (area becomes difficult terrain, heavily concealed, and grants half cover).",
		"The rod becomes highly magnetic. When within 5 ft. of any metal surface, it sticks to the surface and requires a DC 15 Strength check to remove.",
		"An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a Rhinoceros appears; on a 26-50, an Elephant appears; and on a 51-100, a rat appears.",
		"The nearest source of water (a pond or smaller) becomes undrinkable, either stagnant or diseased.",
		"Heavy rain (25%), heavy snow (25%), sand and dust (25%) or blood falls in a 60-foot radius centered on the target. The area becomes heavily obscured. The rain falls until the start of your next turn.",
		"Target's armor or clothes are affected by continual flame.",
		"The target's skin turns bright blue (25%), yellow (25%), red (25%), green (25%) for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.",
	],
	[
		// Neutral Level 3
		"A 200 ft. radius around you begins to snow. This continues for 1d4 hours.",
		"Target's hair is changed, the change can be doubling in length (50%) or completely falling off but regrowing in 1d6 days (50%).",
		"Water begins to pour from the tip of the rod at the rate of 5 ft. cube per round for 50 rounds.",
		"All standing and running water within 100 feet of you becomes strong ale.",
		"All non-magical plants in a 60-foot radius wither and die.",
		"Target permanently shrinks (50%) or grows (50%) by 1 inch in height.",
		"The rod becomes fixed in space for 1 hour as an immovable rod.",
		"You gain an insatiable craving for human flesh and can only feed on them for the next week.",
	],
	[
		// Neutral Level 4
		"A flesh golem is summoned between you and the target. Any creature may attempt to issue a command to it as a bonus action. To override an existing command with a new one, you must succeed at an opposed Intelligence check.",
		"Your skin is turned transparent.",
		"All non-magical arrows within 100 ft. burst into flame. A successful Dexterity saving throw allows owners of attended arrows to save half the number of arrows.",
		"A herd of twelve cows (use the statistics for giant goat without the Sure-Footed trait) appear around the target in random spaces.",
		"You cast daylight on the target's space but the duration of the spell is 1 year.",
		"One magic item belong to you and your allies is replaced by another item of equivalent rarity.",
	],
	[
		// Neutral Level 5
		"You become the opposite sex. The greater restoration spell or similar magic reverses this effect.",
		"Loud pounding music fills the area emanating from the space around the target. Creatures within 100 feet of the source of the music have disadvantage on Wisdom (Perception) checks that rely on hearing, and creatures within 10 feet of the source are deafened.",
		"You and the target exchange a random limb, which resizes to fit its new body. If the target isn't a creature one of your limbs becomes the same material as the target while 1/5th of the target becomes made of flesh. The greater restoration spell or similar magic reverses this effect.",
		"One of your non-magic items becomes sentient, gaining an Intelligence score of 3d6 and random personality traits. There is a 50% chance it can communicate telepathically and a 50% chance it somehow gains the ability to speak.",
		"For the next day, you are coated in poison which affects any creature that comes into contact with your skin. The poison is crawler mucus (30%), assassin's blood (30%), truth serum (30%), or wyvern poison (10%).",
	],
	[
		// Neutral Level 6
		"The target ages 1d10 x 10 years.",
		"You and the target exchange current hit point totals. If either revised total is above the previous maximum, the difference becomes temporary hit points. If the target is not a creature, you instead take 6d10 points of force damage.",
		"Nearest house-sized structure or smaller constructed primarily of wood crumbles.",
		"Lava begins to pour from the tip of the rod at the rate of 5 ft. cube per round for 10 rounds. Wading through lava causes 10d10 fire damage per round, submerging in lava causes 18d10 fire damage per round.",
	],
	[
		// Neutral Level 7
		"You are teleported to the location where you were at exactly one day ago. If a creature or object is in the location, you take 3d6 force damage and are shunted to the nearest unoccupied space.",
		"An exact double of you appears in an unoccupied space within 30 feet of the target. The double has all your memories, abilities, and non-magical possessions. The double is a sentient creature with its own hopes and dreams. After 10 minutes, either you or your double dies and crumbles to dust (chosen randomly).",
		"All creatures within 100 ft. become incredibly clumsy for 10 minutes. All attacks and physical skill checks suffer a -10 penalty, and creatures must pass a Dexterity check to move or fall prone.",
	],
	[
		// Neutral Level 8
		"Nearest house-sized structure or smaller constructed primarily of wood crumbles.",
		"A wave of force emanates from you, shoving creatures away. Each creature in a 25 ft. radius around you must make a Strength saving throw. On a failure they are pushed away from you in a straight line until they are 30 ft. away. On a successful saving throw, creatures only move half as far.",
		"A frigid blizzard is summoned above you and covers land in a 5 mile radius for 8 hours. All exposed creatures are affected by extreme cold and must succeed on a DC 10 Constitution saving throw at the end of each hour or gain one level of exhaustion (DMG 110).",
	],
	[
		// Neutral Level 9
		"You are made aware of the name and directions to a long-lost artifact.",
		"You grow a second head. This head has the same memories and general personality as you but its Intelligence and Wisdom scores are swapped and it has a random alignment. While you have the head you have advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious. A head can be removed by the greater restoration spell or similar magic.",
		"A sphere of annihilation appears between you and the target. It disappears after consuming a single creature or item.",
	]
];

const WOE = [
	[
		// Woe Level 1
		"Feathers pour from the rod and engulf everyone in a 30 ft. radius around you. The area becomes difficult terrain and offers heavy concealment and half cover.",
		"You find your voice greatly amplified for 10 minutes. Others have advantage on Perception checks to hear you.",
		"All creatures within a 10 ft. radius of the target are affected by bless for 1 minute.",
		"You emit a foul smelling odor for 1 day. This gives you disadvantage on all Charisma checks.",
		"You catch fire and take 1d6 points fire damage. Unless you spend an action to extinguish the flames, you take 1d6 damage at the start of your turn for the next 10 rounds.",
		"You become intoxicated. You have disadvantage on attacks and Dexterity, Intelligence, and Wisdom skill checks. You become immune to fear.",
		"Sanctuary affects the target",
		"A 20 ft. pit opens under you. A Dexterity saving throw is needed to avoid falling in.",
	],
	[
		// Woe Level 2
		"You enlarge the target as if you had cast enlarge/reduce. If the target can't be affected by that spell or if you didn't target a creature, you become the target.",
		"The target becomes invisible per the spell.",
		"You are stunned until the start of your next turn, believing something awesome just happened.",
		"You switch location with the target, or appear at targeted location if a point in space is targeted.",
		"A loud bang deafens all within 30 ft. of you (Con save negates).",
		"You lose your voice for 10 minutes, and cannot cast spells that require a verbal component.",
		"You radiate an evil aura for the next week which may be detected by divine sense and detect evil and good.",
		"You hiccup uncontrollably for the next hour. The hiccups disrupt spellcasting, which requires a successful DC 10 Constitution save to be cast. You also have disadvantage on all Stealth checks.",
		"You belch with the same effect as a thunderstone. All creatures within 10 ft. of you must make a Constitution saving throw or be deafened for 1 hour.",
	],
	[
		// Woe Level 3
		"A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a Constitution saving throw or become Blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		"Target strength score is increased by 4 for 1 minute.",
		"Target is hasted for 10 rounds.",
		"A hostile swarm of 8 stirges is conjured and attack you.",
		"The area within 100 ft. of you becomes a wild magic zone. All spells cast within trigger a wild magic surge and only activate successfully 50% of the time.",
		"One of your possessions appears in the target's hands or on the ground if target is not a creature.",
		"You are cursed . This persists until a remove curse is cast on you.",
		"You belch forth a 30 ft. cone of fire that deals 8d6 damage. A successful Dexterity save halves this damage.",
	],
	[
		// Woe Level 4
		"You fly into a berserker rage for 1 minute, gaining all benefits of a barbarian's rage ability. Each round you must attack the nearest creature with the most effective melee attacks at your disposal.",
		"For 1 minute you can breathe water but not air. A lesser restoration spell or similar magic ends the effect early.",
		"A powerful force knocks you prone and holds you fast to the ground for 10 minutes. You may stand with a successful Strength check and move at half speed.",
		"You begin to float upwards uncontrollably for 1 minute at the speed of 30 ft. per round.",
		"A fissure opens between you and the target. It is 1d10 * 10 ft. deep, 10 ft. wide, and 100 ft. long. Creatures caught in the area of the fissure must make a Dexterity saving throw or fall in.",
		"Your arms are transformed into iron spikes. You gain a natural weapon that deals 1d6 piercing damage but lose use of your hands. A greater restoration spell reverses the effect.",
		"A bolt of energy lashes from the rod and strikes the nearest creature to you. It deals 10d6 damage, a successful Dexterity saving throw halves this amount.",
	],
	[
		// Woe Level 5
		"A dead creature nearest to the target animates as a wraith. If there are no dead creatures, the wraith is summoned instead. It attacks you to the exclusion of all else.",
		"Surrounding objects animate and attack you as the spell animate objects.",
		"For the next 24 hours, two of your ability scores swap. Use a d6 to determine which ability scores are changed. If both results are the same, there is no effect.",
		"A gong and mallet appear above you for 1d8 rounds. On this turn and at the start of each of your turns, the gong is struck and all creatures within 30 ft. take 5d8 damage. A successful Wisdom saving throw halves this damage.",
		"You forget how to cast the next spell you cast for 24 hours. If you are a non-spellcaster, you take 4d8 points of psychic damage.",
	],
	[
		// Woe Level 6
		"Your highest and lowest ability scores are exchanged for 1 hour.",
		"The life force of you and the target are linked for 1 minute. Whenever one takes damage, the other takes half as much damage. This damage can't be reduced or prevented in any way.",
		"You and the target exchange minds, as if affected by a magic jar spell. If you didn't target a creature, you instead take 6d10 psychic damage. The effect lasts for 1 day. If either you or the target dies before the effect ends, the change is permanent.",
		"You contract the sight rot disease.",
	],
	[
		// Woe Level 7
		"You cast reverse gravity centered on yourself. You don't need to concentrate on this spell and it has a duration of 2d6 rounds.",
		"All weapons within 60 ft. are transformed into nonfunctional wooden toys for 1 hour.",
		"All creatures within 100 ft. are incapacitated for 1 hour and under the influences of a powerful illusion. In the illusion they exist together in a false reality that unfolds in their minds.",
		"For the next 24 hours, your class is changed to that of another of the same level. Use a d12 to determine the new class.",
		"The air within 30 ft. of you is filled with dust of sneezing and choking.",
	],
	[
		// Woe Level 8
		"If you are a spellcaster, you instantly expend 3 spell slots of 6th level or lower (roll 1d6 three times to determine which slots are lost). These manifest around you in a flash of uncontrolled magical damage, dealing 5 points of damage for each spell level expended. If you are not a spellcaster, you take 6d10 points of psychic damage.",
		"You are affected by feeblemind.",
		"The area in a 100 ft. radius surrounding you is affected by earthquake.",
		"All gold within 100 feet of you becomes copper.",
		"You cast antimagic field on yourself. You do not need to maintain concentration on this spell and it lasts for 1d6 x 10 minutes.",
	],
	[
		// Woe Level 9
		"You cast imprisonment on yourself.",
		"Day becomes night or night becomes day. The day/night patterns of Toril is permanently offset by half a day. You incur the ire of the churches of Selune, Shar, and Amaunator.",
		"Meteors fall from the sky and strike all creatures within a 100 ft. radius as the spell meteor swarm.",
		"You summon a balor. It immediately attacks you and your allies.",
		"The most recent adversary the wielder killed that has an equal or greater number of Hit Dice is returned to life at exact location where it was slain, and it immediately becomes obsessed with evening the score.",
		"You are permanently polymorphed into a lizard.",
	]
];

const DEBUG = window.location.href.includes("file");
const TEST = false;
let debugLevel;
let debugType;

const DISTRIBUTION = {};
const RAW_DISTRIBUTION = {
	4: [74, 17, 6, 2, 1],
	8: [14, 51, 22, 9, 3, 1],
	12: [6, 12, 42, 24, 10, 5, 1],
	16: [2, 5, 11, 39, 26, 11, 5, 1],
	20: [1, 2, 5, 11, 37, 26, 11, 5, 2]
};

function generateResult(userLevel) {
	let result = "Nothing happens.";
	const distributionRow = DISTRIBUTION[userLevel];

	if (distributionRow) {
		let resultsRow;
		const resultTypeRoll = Math.random();
		if (resultTypeRoll < 0.60) {
			DEBUG && (debugType = "WEAL");
			resultsRow = WEAL;
		} else if (resultTypeRoll < 0.80) {
			DEBUG && (debugType = "NEUTRAL");
			resultsRow = NEUTRAL;
		} else {
			DEBUG && (debugType = "WOE");
			resultsRow = WOE;
		}

		let levelRow;
		const levelRoll = Math.random();
		for (let i = 0; i < distributionRow.length; i++) {
			if (levelRoll < distributionRow[i]) {
				DEBUG && (debugLevel = i + 1);
				levelRow = resultsRow[i];
				break;
			}
		}

		DEBUG && !TEST && console.log(debugType + " level " + debugLevel + " effect.");
		result = levelRow[Math.floor(Math.random()*levelRow.length)];
	} else {
		console.error("Invalid value for user level: " + userLevel);
	}

	return result;
}

function updateResultsList(resultString) {
	const resultDiv = document.createElement("div");
	resultDiv.classList.add("result-line");
	resultDiv.innerHTML = resultString;

	const resultsList = document.getElementById("results-list");

	resultsList.prepend(resultDiv);
	if (resultsList.childElementCount > 10) {
		resultsList.removeChild(resultsList.lastChild);
	}
}

function activateRoW() {
	let selectElement = document.getElementById("user-level");
	const userLevel = selectElement.options[selectElement.selectedIndex].value;

	// Result type is currently hidden and not used.
	selectElement = document.getElementById("result-type");
	const resultType = selectElement.options[selectElement.selectedIndex].value;

	const result = generateResult(userLevel);
	updateResultsList(result);
}

function clearResults() {
	document.getElementById("results-list").innerHTML = "";
}

// Takes the raw distribution values and transforms them into a percentage scale
function getDistributionScale() {
	for (const level in RAW_DISTRIBUTION) {
		const rawRow = RAW_DISTRIBUTION[level];
		const scaledRow = [];
		const sumRow = [];

		let sum = 0;
		rawRow.forEach(function(rawValue) {
			sum += rawValue;
			sumRow.push(sum);
		});

		sumRow.forEach(function(sumValue) {
			scaledRow.push(sumValue / sum);
		});

		DISTRIBUTION[level] = scaledRow;
	}

	if (DEBUG) {
		console.log("Raw distribution values: ");
		console.log(RAW_DISTRIBUTION);
		console.log("Scaled distribution values: ");
		console.log(DISTRIBUTION);
	}
}

function validateResults() {
	const WEAL_EXPECTED = 13;
	const NEUTRAL_EXPECTED = 7;
	const WOE_EXPECTED = 7;

	for (let i = 0; i < WEAL.length; i++) {
		if (WEAL[i].length < WEAL_EXPECTED) {
			console.warn("Weal level " + (i+1) + " has too few effects. Has: " + WEAL[i].length + ", expected: " + WEAL_EXPECTED);
		}
	}
	for (let i = 0; i < NEUTRAL.length; i++) {
		if (NEUTRAL[i].length < NEUTRAL_EXPECTED) {
			console.warn("Neutral level " + (i+1) + " has too few effects. Has: " + NEUTRAL[i].length + ", expected: " + NEUTRAL_EXPECTED);
		}
	}
	for (let i = 0; i < WOE.length; i++) {
		if (WOE[i].length < WOE_EXPECTED) {
			console.warn("Woe level " + (i+1) + " has too few effects. Has: " + WOE[i].length + ", expected: " + WOE_EXPECTED);
		}
	}
}

// This tests the ratios for expected randomness. Typically not run.
function ratioTest() {
	const RUNS = 1000000;
	const LEVEL = "20";

	const typeResult = {WEAL: 0, NEUTRAL: 0, WOE: 0};
	const levelResult = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (let i = 0; i < RUNS; i++) {
		generateResult(LEVEL);

		typeResult[debugType]++;
		levelResult[debugLevel-1]++;
	}

	console.log("Result type results: ");
	console.log(typeResult);
	console.log("Level results: ");
	console.log(levelResult);
}

function renderPage() {
	getDistributionScale();
	validateResults();
	TEST && ratioTest();

	document.getElementById("activate-button").addEventListener("click", activateRoW);
	document.getElementById("clear-button").addEventListener("click", clearResults);
}

window.onload = renderPage;
