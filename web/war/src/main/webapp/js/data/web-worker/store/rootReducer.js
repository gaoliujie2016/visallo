/*eslint strict:0 */
define([
    'configuration/plugins/registry',
    'redux',

    // Reducers
    './configuration/reducer',
    './element/reducer',
    './ontology/reducer',
    './product/reducer',
    './screen/reducer',
    './selection/reducer',
    './user/reducer',
    './workspace/reducer'

    // Add reducers above, the name of the function will be used as the key
], function(registry, redux, ...reducers) {

    // TODO: add all from an undocumented extension point (for internal use
    // only for this release)

    var reducerMap = redux.combineReducers(
        _.object(
            reducers.map(reducerFn => [reducerFn.name, reducerFn])
        )
    );

    return reducerMap;
});