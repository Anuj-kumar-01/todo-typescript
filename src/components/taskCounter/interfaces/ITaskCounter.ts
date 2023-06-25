import { Status } from '../../createATask/enums/Status';
export interface ITaskCounter {
    count?: number;
    status?: TaskCounterStatusType;
}

export type TaskCounterStatusType =
    | Status.todo
    | Status.inProgress
    | Status.completed;
