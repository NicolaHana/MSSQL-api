import express from "express";
import sql from "mssql";
import * as api from "./src/api.js";
import * as query from "./src/query.js"

const app = express();
const PORT = 4000;

app.use(express.json());

const config = {
  user: "sa", // Database username
  password: "Zxtver1234!", // Database password
  server: "172.16.198.132", // Server IP address
  database: "mysql", // Database name
  options: {
    encrypt: false, // Disable encryption
  },
};

const initializeApp = async () => {
  try {
    await sql.connect(config);
    console.log("Connection Successful!");

    const userData = await query.getUser();
    console.log(`user table:`, userData);
    //invoice create
    const createInvoice = await api.createInvoice();
    console.log( `createInvoice:`, createInvoice);
    // Fetch invoice status
    const invoiceStatusBody = { id: 30 };
    const invoiceStatusURL = "https://usdc.nonstopay.net/api/client-invoice-info/get/";
    const invoiceStatusData = await api.getInvoiceStatus(invoiceStatusBody, invoiceStatusURL);
    console.log(`invoiceStatusData:`, invoiceStatusData);

    //Fetch invoice info
    const invoiceInfoBody = { id: 30 };
    const invoiceInfoURL = "https://usdc.nonstopay.net/api/invoice/status/";
    const invoiceInfoData = await api.getInvoice(invoiceInfoBody, invoiceInfoURL);
    console.log(`invoiceInfoData:`, invoiceInfoData);

  } catch (err) {
    console.error("Error initializing app:", err);
  }
};

// Start the server and initialize the application
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await initializeApp();
});
