import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import * as rum from 'aws-cdk-lib/aws-rum';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

const customResourceStack = backend.createStack('MyCustomResources');

new rum.CfnAppMonitor(customResourceStack, 'MyAppMonitor', {
  name: 'MyAmplifyAppMonitor',
  domain: '*.example.com', // Replace with your domain
  appMonitorConfiguration: {
    allowCookies: true, // Enable/disable cookies as needed
    sessionSampleRate: 1.0, // Percentage of user sessions to monitor (e.g., 1.0 = 100%)
    telemetries: ['errors', 'performance', 'http'], // Types of data to collect
  },
  customEvents: {
    status: 'ENABLED', // Enable custom events if needed
  },
});
