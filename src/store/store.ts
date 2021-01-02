import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers';
import * as storage from 'redux-storage';
import logger from 'redux-logger';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

export default function store(onComplete: any) {

  const engine = createEngine('MHApp');

  const storeMiddleWare = storage.createMiddleware(engine);
  const sagaMiddleWare = createSagaMiddleware();
  
  engine.save({});

  let store = createStore(
    storage.reducer(reducers),
    compose(
      applyMiddleware(
        sagaMiddleWare,
        storeMiddleWare,
      ),
    ),
  );

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
  
  sagaMiddleWare.run(sagas);

  return store;
}
