import { notification } from "antd";
import React from "react";
import { AppLayoutProps } from ".";
export declare const useNotificator: () => {
    api: ReturnType<typeof notification.useNotification>[0];
};
export declare const AppLayout: React.FC<AppLayoutProps>;
export default AppLayout;
