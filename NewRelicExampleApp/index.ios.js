/*
 * Copyright (c) 2022-present New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 
 */

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as keys from './newrelic.json';
import NewRelic from 'newrelic-react-native-agent';
import * as appversion from './package.json';


NewRelic.startAgent(keys.licenseKey.ios);
NewRelic.setJSAppVersion(appversion.version);
NewRelic.recordCustomEvent("MobileModularAgentTest", "react-native-modular-agent", {"platform1": Platform.OS, "appDidMount": "true"});
AppRegistry.registerComponent(appName, () => App);
