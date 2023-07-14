import React, { useState, useEffect, lazy, Suspense } from 'react';
import './index.less';
import Father from './useImperativeHandle';
import Test from './useReducer';
import Forward from './forwardRef';
import { ATest1, ATest2 } from './hoc';
// import SuspenseDemo from './suspenseDemo';
import SuspensePacking from './suspensePacking';
import TestAsync from './useAsync';
import Index from './useIndex';
import CC from './classComponent';
import Dong from './dong';
import Ahooks from './ahooks';
import Boom from './boom';

import I18N from './i18nText';
import I18NChangelan from './i18nChangelan';
import { i18nOut } from '@/client/utils';
import ErrorBoundary from './errorBoundary';
import VirList from './vitualListIWithActualHeight';
// import VirListNoHeight from './vitualListWithNoHeight';
import Label from '../assets/label.svg';
import ArrowFunctionRerender from './arrowFunctionRerender';
import UseStateFunc from './useStateFunc';
import UseStateClourse from './useStateClourse';
import UseStateClourseAhooks from './useStateClourseAhooks';
import UseRequest from './useRequest';
import VirListMySelf from './vitualListMySelf';
// import  from 'monaco-editor';
const App = () => {
  const [Demo, setDemo] = useState(null);
  import(/* webpackChunkName: "bar" */ './useLayoutEffect').then((Module) => {
    console.log(Module, 'module');
    setDemo(() => Module.default);
  });

  const VirListNoHeight = lazy(() => import('./vitualListWithNoHeight'));

  useEffect(() => {
    console.log(i18nOut());
  }, []);

  return (
    <div>
      <div className="header">222</div>
      <div id="container"></div>
      {/* <Father />
          <Forward />
          <Test />
          <ATest1 />
          <ATest2 />
          <SuspensePacking /> */}
      {/* <MonacoEditor /> */}
      <div>
        <TestAsync />
      </div>
      <div>
        <Index />
      </div>
      <div>
        <CC />
      </div>
      <div>
        <Ahooks />
      </div>
      {/* <div>
        <Boom isShow />
      </div> */}
      {/* <I18NChangelan /> */}
      {/* <I18N /> */}
      {/* <ErrorBoundary /> */}
      {/* <div><Dong /></div> */}
      <div>{Demo ? <Demo /> : null}</div>
      <div>
        <VirList />
      </div>
      {/* <Suspense>
        <VirListNoHeight />
      </Suspense> */}
      <div>
        <img src={Label} />
      </div>
      <div>
        <ArrowFunctionRerender />
      </div>
      <div>
        <UseStateFunc />
      </div>
      <div>{/* <UseStateClourse /> */}</div>
      <div>{/* <UseStateClourseAhooks /> */}</div>
      <div>
        <Dong />
      </div>
      <div>
        <ArrowFunctionRerender />
      </div>
      <div>{/* <UseRequest /> */}</div>
      <div>
        <VirListMySelf
          arr={Array(1000)
            .fill(1)
            .map((item, index) => index + 1)}
        />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default App;
