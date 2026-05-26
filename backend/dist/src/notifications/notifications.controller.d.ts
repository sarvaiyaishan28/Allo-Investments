import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        message: string;
        read: boolean;
        actionUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        message: string;
        read: boolean;
        actionUrl: string | null;
    }>;
}
