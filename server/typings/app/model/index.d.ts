// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportActivity = require('../../../app/model/activity');
import ExportContext = require('../../../app/model/context');
import ExportLeader = require('../../../app/model/leader');
import ExportParticipant = require('../../../app/model/participant');
import ExportTask = require('../../../app/model/task');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Activity: ReturnType<typeof ExportActivity>;
    Context: ReturnType<typeof ExportContext>;
    Leader: ReturnType<typeof ExportLeader>;
    Participant: ReturnType<typeof ExportParticipant>;
    Task: ReturnType<typeof ExportTask>;
    User: ReturnType<typeof ExportUser>;
  }
}
