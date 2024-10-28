// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportActivity = require('../../../app/service/activity');
import ExportLeader = require('../../../app/service/leader');
import ExportParticipant = require('../../../app/service/participant');
import ExportSendEmail = require('../../../app/service/sendEmail');
import ExportTask = require('../../../app/service/task');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    activity: AutoInstanceType<typeof ExportActivity>;
    leader: AutoInstanceType<typeof ExportLeader>;
    participant: AutoInstanceType<typeof ExportParticipant>;
    sendEmail: AutoInstanceType<typeof ExportSendEmail>;
    task: AutoInstanceType<typeof ExportTask>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
