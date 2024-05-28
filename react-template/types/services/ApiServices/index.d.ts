declare const apiServices: {
    find: (endpoint: string) => Promise<any>;
    create: (endpoint: string, data: any) => Promise<any>;
    delete: (endpoint: string, data: any) => Promise<any>;
};
export default apiServices;
