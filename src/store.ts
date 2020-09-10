import { createStore, applyMiddleware, compose, ReducersMapObject } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { camelCase } from 'lodash';
import { combineReducers } from 'redux';
import Service from 'util/Service';

let reducers: ReducersMapObject<any, any> = {};
let epics: any = [];

const reducerContext = require.context('./modules/', true, /Store\/reducer\.ts$/);
const epicContext = require.context('./modules/', true, /Store\/epic\.ts$/);
reducerContext.keys().map((key: string) => {
  let moduleName = (key.substring(key.lastIndexOf('./') + 2, key.lastIndexOf('/Store'))).toLowerCase();
  reducers[camelCase(moduleName)] = reducerContext(key).default;
  return key;
});

epicContext.keys().map((key: string) => {
  // @ts-ignore
  Object.keys(epicContext(key).default).map(k => epics.push(epicContext(key).default[k]));
  return key;
});

const composeEnhancers = compose;

const epicMiddleware = createEpicMiddleware({
  dependencies: { Service },
});

const store: any = createStore(
  combineReducers({ ...reducers }),
  {},
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(combineEpics.apply({}, epics));

export default store;
