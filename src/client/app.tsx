import React from "react";
import "./index.less";
import Father from "./useImperativeHandle";
import Test from "./useReducer";
import Forward from "./forwardRef";
import { ATest1, ATest2 } from "./hoc";
// import SuspenseDemo from './suspenseDemo';
import SuspensePacking from "./suspensePacking";
import TestAsync from "./useAsync";
import Index from "./useIndex";
import CC from "./classComponent";
import Dong from "./dong";
import Ahooks from "./ahooks";
import Boom from "./boom";
import Demo from "./useLayoutEffect";

import I18N from "./i18nText";
import I18NChangelan from "./i18nChangelan";
import { i18nOut } from "@/client/utils";
import ErrorBoundary from "./errorBoundary";
import VirList from "./vitualListIWithActualHeight";
import VirListNoHeight from "./vitualListWithNoHeight";
import Label from "../assets/label.svg";
import ArrowFunctionRerender from './arrowFunctionRerender';
import UseStateFunc from './useStateFunc';

// import  from 'monaco-editor';

export default class App extends React.Component {
  render() {
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
        <div>
          <Boom isShow />
        </div>
        {/* <I18NChangelan /> */}
        {/* <I18N /> */}
        {/* <ErrorBoundary /> */}
        {/* <div><Dong /></div> */}
        <div>
          <Demo />
        </div>
        {/* <div>
          <VirList />
        </div> */}
        <div>
          <VirListNoHeight />
        </div>
        <img src={Label} />
        <div>
          <ArrowFunctionRerender />
        </div>
        <div>
          <UseStateFunc />
        </div>
        <div>
          <Dong />
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(i18nOut());
  }
}
