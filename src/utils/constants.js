export const copyCode = (data) => {
  navigator.clipboard.writeText(data);
};

export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    // minute: '2-digit',
    // second: '2-digit',
    // timeZoneName: 'short',
  };
  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
};

export const usersData = [
  {
    _id: "65929731f1bfbb2d89b01710",
    otp: 771344,
    otpExpire: "2024-01-01T10:47:57.045Z",
    email: "nkonyeprosper@gmail.com",
    isVerified: true,
    isActive: true,
    referringUserIDs: [],
    recent_transactions: [],
    paymentLink: [],
    beneficiaries: [],
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    balances: {
      main_wallet: 0,
      pending_wallet: 0,
      refferal_wallet: 0,
      _id: "659297d9f1bfbb2d89b01717",
    },
    country: "NG",
    date_of_birth: "1997-01-06T00:00:00.000Z",
    gender: "M",
    password: "$2b$10$HQv3o6xSkD93h6RJ.dbXhuMEupT0mSWyIe5g1LZJ7z1u814tTBgTi",
    pin: 1234,
    userReferralID: 998489,
    username: "prosperoo",
  },

  {
    _id: "65929731f1bfbb2d89b01710",
    otp: 771344,
    otpExpire: "2024-01-01T10:47:57.045Z",
    email: "nkonyeprosper@gmail.com",
    isVerified: true,
    isActive: true,
    referringUserIDs: [],
    recent_transactions: [],
    paymentLink: [],
    beneficiaries: [],
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    balances: {
      main_wallet: 0,
      pending_wallet: 0,
      refferal_wallet: 0,
      _id: "659297d9f1bfbb2d89b01717",
    },
    country: "NG",
    date_of_birth: "1997-01-06T00:00:00.000Z",
    gender: "M",
    password: "$2b$10$HQv3o6xSkD93h6RJ.dbXhuMEupT0mSWyIe5g1LZJ7z1u814tTBgTi",
    pin: 1234,
    userReferralID: 998489,
    username: "prosperoo",
  },

  {
    _id: "65929731f1bfbb2d89b01710",
    otp: 771344,
    otpExpire: "2024-01-01T10:47:57.045Z",
    email: "nkonyeprosper@gmail.com",
    isVerified: true,
    isActive: true,
    referringUserIDs: [],
    recent_transactions: [],
    paymentLink: [],
    beneficiaries: [],
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    balances: {
      main_wallet: 0,
      pending_wallet: 0,
      refferal_wallet: 0,
      _id: "659297d9f1bfbb2d89b01717",
    },
    country: "NG",
    date_of_birth: "1997-01-06T00:00:00.000Z",
    gender: "M",
    password: "$2b$10$HQv3o6xSkD93h6RJ.dbXhuMEupT0mSWyIe5g1LZJ7z1u814tTBgTi",
    pin: 1234,
    userReferralID: 998489,
    username: "prosperoo",
  },

  {
    _id: "65929731f1bfbb2d89b01710",
    otp: 771344,
    otpExpire: "2024-01-01T10:47:57.045Z",
    email: "prosperoo@gmail.com",
    isVerified: true,
    isActive: true,
    referringUserIDs: [],
    recent_transactions: [],
    paymentLink: [],
    beneficiaries: [],
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    balances: {
      main_wallet: 0,
      pending_wallet: 0,
      refferal_wallet: 0,
      _id: "659297d9f1bfbb2d89b01717",
    },
    country: "NG",
    date_of_birth: "1997-01-06T00:00:00.000Z",
    gender: "M",
    password: "$2b$10$HQv3o6xSkD93h6RJ.dbXhuMEupT0mSWyIe5g1LZJ7z1u814tTBgTi",
    pin: 1234,
    userReferralID: 998489,
    username: "prosperoo",
  },
];

export const Transactions = [
  {
    type: "Payment",
    payment: {
      linkID: "ADDFE55",
      created: "2024-01-01T10:42:57.056Z",
      expired: "2024-01-01T10:42:57.056Z",
      amount_created: 3000,
      amount_paid: 3000,
      isPaid: true,
      isRedeemed: true,
      sender: {
        account_name: "prosper",
        account_number: "1228804191",
      },
      reciever: "Prosperro",
    },
    owner: "owners id",
    track_id: 112234,
    status: "success", // there is redeemed, pending and cancelled
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
  },
  {
    type: "Payment",
    payment: {
      linkID: "ADDFE55",
      created: "2024-01-01T10:42:57.056Z",
      expired: "2024-01-01T10:42:57.056Z",
      amount_created: 3000,
      amount_paid: 3000,
      isPaid: true,
      isRedeemed: true,
      sender: {
        account_name: "prosper",
        account_number: "1228804191",
      },
      reciever: "Prosperro",
    },
    owner: "owners id",
    track_id: 324282,
    status: "success", // there is redeemed, pending and cancelled
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
  },
  {
    type: "Withdrawal",
    withdrawal: {
      amount: 3000,
      isPaid: true,
      reciever: {
        account_name: "prosper",
        account_number: "1228804191",
      },
      description: "withdrawal from paybeforeservice",
    },
    owner: "owners id",
    track_id: 112234,
    status: "success", // there is redeemed, pending and cancelled
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
  },
];

export const Disputes = [
  {
    type: "transaction",
    status: "pending",
    dispute_id: "EEDF_HGH_KJ1",
    payment_status: "success",
    amount: 2000,
    email: "sampleEmail@gmail.com",
    sender: "wilson",
    reciever: "dennise",
    reason: "issues oooo",
    reminder: 0,
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
  },
  {
    type: "complaint",
    status: "pending",
    dispute_id: "EEDF_HGH_KJ1",
    email: "sampleEmail@gmail.com",
    reason: "issues oooo comoplaint",
    reminder: 0,
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
  },
  {
    type: "inquiry",
    status: "pending",
    dispute_id: "EEDF_HGH_KJ1",
    email: "sampleEmail@gmail.com",
    reason: "issues oooo comoplaint",
    reminder: 0,
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
  },
];

export const Admins = [
  {
    role: "super admin",
    email: "sampleEmail@gmail.com",
    password: "kksofjfokdldldldfffff",
    status: "active",
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    isActive: true,
  },
  {
    role: "super admin",
    email: "sampleEmail@gmail.com",
    password: "kksofjfokdldldldfffff",
    status: "active",
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    isActive: true,
  },
  {
    role: "super admin",
    email: "sampleEmail@gmail.com",
    password: "kksofjfokdldldldfffff",
    status: "active",
    createdAt: "2024-01-01T10:42:57.056Z",
    updatedAt: "2024-01-01T10:45:45.287Z",
    isActive: false,
  },
];

export function formatDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const options = { day: "numeric", month: "short" };
  const formattedToday = today.toLocaleDateString("en-GB", options);
  const formattedTomorrow = tomorrow.toLocaleDateString("en-GB", options);

  return `${formattedToday} - ${formattedTomorrow}`;
}

// Sample life  "https://paybeforeservice-admin.onrender.com/Admin/PayBeforeService";
//sample local  "http://localhost:8000/Admin/PayBeforeService"
export const LOCAL_URL =
  "https://paybeforeservice-admin.onrender.com/Admin/PayBeforeService";
