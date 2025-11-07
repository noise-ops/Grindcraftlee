// Game Info
setGameInfo({
    name: "Grindcraftle",                         // The name of your game!
    version: "0.2",                                     // The current version of your game!
    icon: "images/system/grindcraftle.png",                    // Link or path to an icon image for your game!
    ID: "DAgrind",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    stick: {
        image: "images/stick.png",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    "dirt hut": {
        image: "images/dirtHut.png",
    },
    "diamond": {
        image: "image/jpeg;base64,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"
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "City State",
    image: "images/areas/cityState.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "overworld",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "stick",
                    time: [["", 0.5]],
                    probability: 50,
                },
                {
                    id: "dirt",
                    time: [["", 0.6]],
                    probability: 50,
                },
            ]
        },
    ],

    crafts: [
        {
            name: "stick",
            desc: "Used to craft planks",
            type: "display",
            cost: [["stick", 0]],
        },
        {
            name: "dirt",
            desc: "Used to build a dirt hut",
            type: "display",
            cost: [["dirt", 0]],
        },
        {
            name: "planks",
            desc: "Used to make a crafting table",
            type: "craft",
            cost: [["stick", 2]],
        },
        {
            name: "crafting table",
            desc: "Required to build a dirt hut",
            type: "craft",
            cost: [["planks", 4]],
        },
        {
            name: "door",
            desc: "Required to build a dirt hut",
            type: "craft",
            amount: 3,
            cost: [["planks", 6]],
        },
        {
            name: "dirt hut",
            desc: "Required to beat the game!",
            type: "craft",
            cost: [["dirt", 23], ["crafting table", 1], ["door", 1]],
            message: "You have beaten the game!",
        },
        {
            name: "diamond",
            desc: "ooooooo shiny!!",
            type: "craft",
            cost: [["dirt hut", 1]],
            message: "AHHHHHHHHHHHH",
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}
