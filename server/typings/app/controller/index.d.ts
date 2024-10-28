// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportActivity = require('../../../app/controller/activity');
import ExportHome = require('../../../app/controller/home');
import ExportLeader = require('../../../app/controller/leader');
import ExportParticipant = require('../../../app/controller/participant');
import ExportSendEmail = require('../../../app/controller/sendEmail');
import ExportTask = require('../../../app/controller/task');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    activity: ExportActivity;
    home: ExportHome;
    leader: ExportLeader;
    participant: ExportParticipant;
    sendEmail: ExportSendEmail;
    task: ExportTask;
    user: ExportUser;
  }
}
