define([
	"./name",
	"../symbol"
], function( numberSymbolName, numberSymbol ) {

/**
 * symbolMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return the (localized symbol, pattern symbol) key value pair, eg. {
 *   ".": "٫",
 *   ",": "٬",
 *   "%": "٪",
 *   ...
 * };
 */
return function( cldr ) {
	var symbol,
		symbolMap = {};

	for ( symbol in numberSymbolName ) {
		symbolMap[ symbol ] = numberSymbol( numberSymbolName[ symbol ], cldr );
	}

	return symbolMap;
};

});
