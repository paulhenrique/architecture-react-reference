const apiServices = {
  find: async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  },
  create: async (endpoint: string, data: any) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    return dataResponse;
  },
  delete: async (endpoint: string, data: any) => {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    return dataResponse;
  },
};

export default apiServices;
