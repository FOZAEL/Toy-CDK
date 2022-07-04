#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FargateStack } from '../lib/Fargate';
import { CloudfrontStack } from '../lib/cloudfront';

const app = new cdk.App();

// Fargate Stack
new FargateStack(app, 'FargateStack', {
  env: { account: '866278975207', region: 'us-east-1' },
 });

// Frontend Stack
new CloudfrontStack(app, 'CloudfrontStack', {
  env: { account: '866278975207', region: 'us-east-1' },
 });