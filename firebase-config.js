// Firebase配置文件
const firebaseConfig = {
  apiKey: "AIzaSyAmFek7_rRciEQ_j-QZHSlU6E_xdI2YM98",
  authDomain: "family-checkin-cloud.firebaseapp.com",
  databaseURL: "https://family-checkin-cloud-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "family-checkin-cloud",
  storageBucket: "family-checkin-cloud.firebasestorage.app",
  messagingSenderId: "862706201060",
  appId: "1:862706201060:web:187dc09077c2f4e96197f1",
  measurementId: "G-0KBTMDYXCR"
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);

// 获取Firebase服务
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

console.log('Firebase初始化成功！');