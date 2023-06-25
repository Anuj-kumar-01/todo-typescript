import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../createATask/enums/Status';

export const emitCorrectBorderColor = (
    status: TaskCounterStatusType,
): string => {
    switch (status) {
        case Status.todo:
            return 'error.light';
        case Status.inProgress:
            return 'warning.light';
        case Status.completed:
            return 'success.light';
    }
};

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
    switch (status) {
        case Status.todo:
            return "Todo's";
        case Status.inProgress:
            return 'In Progress';
        case Status.completed:
            return 'Completed';
    }
};
