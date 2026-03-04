export interface FirebaseConfigProps {
  apiKey: string;
  appId: string;
  authDomain: string;
  storageBucket: string;
  measurementId: string;
  messagingSenderId: string;
  projectId: string;
}

export interface AccountProps {
  stt: number;
  id: string;
  name: string;
  username: string;
  password: string;
  feature: Array<string>;

  role: "Standard" | "Pro" | "Advance" | "Admin";
  apiKey: string;
  appId: string;
  firebaseConfig: FirebaseConfigProps;
  measurementId: string;
  messagingSenderId: string;
  projectId: string;
  date: string;
  status: "active" | "block";
  websiteUrl: string;
  image?: string;
  phone?: string;
  email?: string;
  token?: string;
  address?: string;
  dateofbirth?: string;
  gender?: string;
  introduce?: string;
  Multilingual?: boolean;
}
