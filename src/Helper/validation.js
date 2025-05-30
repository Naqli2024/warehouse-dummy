import * as yup from "yup";

export const newSalesReturnSchema = yup.object().shape({
  customerName: yup.string().required("Customer name is required"),
  salesOrder: yup.string().required("Sales order is required"),
  raNumber: yup.string().required("RA number is required"),
  date: yup.date().required("Date is required").typeError("Invalid date format"),
  invoiceNumber: yup.string().required("Invoice number is required"),
  invoiceDate: yup.date().required("Invoice Date is required").typeError("Invalid date format"),
  warehouse: yup.string().required("Warehouse is required"),
});

export const newCreditNoteSchema = yup.object().shape({
    customerName: yup.string().required("Customer name is required"),
    salesOrder: yup.string().required("Sales order is required"),
    creditNoteId: yup.string().required("Credit Note Id is required"),
    creditNoteDate: yup.date().required("Credit Note Date is required").typeError("Invalid date format"),
    salesPerson: yup.string().required("Sales Person is required"),
});

export const refundDialogSchema = yup.object().shape({
    refundDate: yup.date().required("Refund Date is required").typeError("Invalid date format"),
    paymentMode: yup.string().required("Payment Mode is required"),
    amount: yup.string().required("Amount is required"),
});

export const newSalesReInvoiceSchema = yup.object().shape({
  customerName: yup.string().required("Customer name is required"),
  salesOrder: yup.string().required("Sales order is required"),
  invoiceId: yup.string().required("Invoice number is required"),
  invoiceDate: yup.date().required("Invoice date is required").typeError("Invalid date format"),
  paymentTerms: yup.string().required("Payment terms is required"),
  dueDate: yup.date().required("Due date is required").typeError("Invalid date format"),
  orderNumber: yup.string().required("Order number is required"),
});

export const newPurchaseReturnSchema = yup.object().shape({
  vendorName: yup.string().required("Vendor name is required"),
  purchaseId: yup.string().required("Purchase Id is required"),
  purchaseReturnId: yup.string().required("Purchase return id number is required"),
  returnDate: yup.date().required("Return date is required").typeError("Invalid date format"),
  invoiceNumber: yup.string().required("Invoice number is required"),
  invoiceDate: yup.date().required("Invoice Date is required").typeError("Invalid date format"),
});

export const newDebitNoteSchema = yup.object().shape({
  vendorName: yup.string().required("Vendor name is required"),
  purchaseOrder: yup.string().required("Purchase order is required"),
  debitNoteId: yup.string().required("Debit Note Id is required"),
  debitNoteDate: yup.date().required("Debit Note Date is required").typeError("Invalid date format"),
  invoiceId: yup.string().required("Invoice Id is required"),
  invoiceDate: yup.date().required("Invoice Date is required").typeError("Invalid date format"),
  salesPerson: yup.string().required("Sales Person is required"),
});

export const newEmployeeSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Zip code is required"),
  mobileNo: yup.string().required("Mobile no is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password is required"),
  dob: yup.date().required("DOB is required").typeError("Invalid date format"),
  typeOfHire: yup.string().required("Type of hire is required"),
  dateOfJoining: yup.date().required("Date of joining is required").typeError("Invalid date format"),
  nationality: yup.string().required("Nationality is required"),
  gender: yup.string().required("Gender is required"),
  accessTo: yup.string().required("Access to is required"),
});


export const resetPasswordSchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup.string().required("New password is required"),
  confirmPassword: yup.string().required("Confirm password is required"),
});

export const newFloorManagementSchema = yup.object().shape({
  warehouseName: yup.string().required("Warehouse name is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal code is required"),
  address: yup.string().required("Address is required"),
  status: yup.string().required("Status is required"),
  warehouseManger: yup.string().required("Warehouse manager no is required"),
});

export const deleteAccountSchema = yup.object().shape({
  reason: yup.string().required("Reason is required"),
  feedback: yup.string().required("Feedback is required"),
});

export const companyDetailsSchema = yup.object().shape({
  companyId: yup.string().required("Company name is required"),
  companyType: yup.string().required("Company type is required"),
  website: yup.string().required("Website is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  streetName1: yup.string().required("Street name1 is required"),
  zipCode: yup.string().required("Zip code is required"),
  faxNumber: yup.string().required("Fax number is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
});

export const forgotPasswordEmailSchema = yup.object().shape({
  emailId: yup.string().required("Email is required"),
  newPassword: yup.string().required("New password is required"),
  confirmNewPassword: yup.string().required("Confirm password is required"),
});

export const vendorPersonalInfoSchema = yup.object().shape({
  // firstName: yup.string().required("First Name is required"),
  // lastName: yup.string().required("Last Name is required"),
  // email: yup.string().required("Email is required"),
  // password: yup.string().required("Password is required"),
  // confirmPassword: yup.string().required("Confirm Password is required"),
  // contactNumber: yup.string().required("Contact No is required"),
});

export const vendorCompanyInfoSchema = yup.object().shape({
  // companyName: yup.string().required("Company Name is required"),
  // tradeName: yup.string().required("Trade Name is required"),
  // country: yup.string().required("Country is required"),
  // state: yup.string().required("State is required"),
  // companyType: yup.string().required("Company Type is required"),
  // companyRegNo: yup.string().required("Company Registration No is required"),
  // companyTaxNo: yup.string().required("Company Tax No is required"),
  // itemClassify: yup.string().required("ItemClassify is required"),
  // dateOfEstablish: yup.date().required("Date of Establishment is required").typeError("Invalid date format"),
  // businessType: yup.string().required("Type of Business is required"),
});

export const vendorContactInfoSchema = yup.object().shape({
//   contactPersonName: yup.string().required("Contact Person Name is required"),
//   contactNumber: yup.string().required("Contact number is required"),
//   companyEmail: yup.string().required("Company email is required"),
//   email:  yup.string().required("Email is required"),
//   password:  yup.string().required("Password is required"),
//   companyWebsiteUrl: yup.string().required("Website Url is required"),
//   companyAddress: yup.string().required("Company Address is required"),
// authoritySignature: yup
//   .mixed()
//   .required("Signature is required"),

// companyLogo: yup
//   .mixed()
//   .required("Logo is required")
});

export const vendorBankingInfoSchema = yup.object().shape({
  // accountType: yup.string().required("Account Type is required"),
  // bankName: yup.string().required("Bank Name is required"),
  // accountHolderName: yup.string().required("Account Holder Name is required"),
  // accountNo: yup.string().required("Account No is required"),
  // confirmAccountNo: yup.string().required("Confirm Account No is required"),
  // ifsCode: yup.string().required("IFS Code is required"),
  // swiftCode: yup.string().required("Swift Code is required"),
  // bankBranchAddress: yup.string().required("Bank Branch Address is required"),
});

export const vendorTaxInfoSchema = yup.object().shape({
  // panAccountNo: yup.string().required("Pan Account Number is required"),
  // panCardFile: yup.mixed().required("PAN Card file is required"),
  // taxAccountNo: yup.string().required("Tax Account Number is required"),
  // vatTinNo: yup.string().required("VAT No is required"),
  // importExportCode: yup.string().required("Export Code is required"),
  // gstNo: yup.string().required("GST No is required"),
});
