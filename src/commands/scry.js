var Scry = require('scryfall-sdk');
var gatherer = require('./find');

function scryfallFindCard(robot) {
    var cardName = robot.match[1].trim().toLowerCase();

    Scry.Cards.byName(cardName, true)
        .then(function(result) {
            if(result.scryfall_uri) {
                robot.send(result.scryfall_uri);
            } else {
                handleError(robot, 'scryfall returned card object, but no card uri');
            }
        }).catch(function (error) {
            handleError(robot, error);
    });
}

function handleError(robot, error) {
    console.error('Error retrieving card from scryfall, falling back to gatherer: ', error);
    gatherer(robot);
}

module.exports = scryfallFindCard;
