import axios from "axios";

export const createInvoice = async () => {
  const headers = {
    "Content-Type": "application/json",
    "API-KEY": "0d8d8e89a6cdcd",
  };

  const body = {
    email: "maxdev256@gmail.com",
    amount: 1,
    devise: "USD",
  };

  try {
    const response = await axios.post(
      "https://usdc.nonstopay.net/api/btn-create-invoice/get/",
      body,
      { headers }
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    return []; 
  }
};

export const getInvoiceStatus = async (body, url) => {
  const headers = {
    "Content-Type": "application/json",
    "API-KEY": "0d8d8e89a6cdcd",
  };
  console.log('body~~~~~~~', body)
  try {
    const response = await axios.get(`${url}?id=${body.id}`, { headers });
    console.log(`invoice-status:`, response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getInvoice = async (body, url) => {
  const headers = {
    "Content-Type": "application/json",
    "API-KEY": "0d8d8e89a6cdcd",
  };
  
  try {
    const response = await axios.post(url, body, { headers });
    console.log(`invoice-inf:`, response.data);
  } catch (error) {
    console.error(error);
  }
};
