import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc , getDocs,where, query,orderBy} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyDkMB58AOGO2a-FyaPHhJpAef7aJ81WXro",
  authDomain: "flights-app-293e3.firebaseapp.com",
  projectId: "flights-app-293e3",
  storageBucket: "flights-app-293e3.appspot.com",
  messagingSenderId: "209290529552",
  appId: "1:209290529552:web:12c958acb25e1921abf395",
  measurementId: "G-TLB56WW5WG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)



const saveInfo = async (from,fromIso3,toIso3,to,date,passangers) => {
      
  const userId = await AsyncStorage.getItem('userID')
  await addDoc(collection(db,'flights'),{from:from,fromIso3:fromIso3,toIso3:toIso3,to:to,date:date,passangers:passangers,userId:userId})
  console.log("succes")

}

const loadInfo = async () =>{
  try{
    const userId = await AsyncStorage.getItem('userID')
    const docsQuery = query(collection(db,"flights"),where("userId","==",userId))
    const snapshot = await getDocs(docsQuery)
    const fligths = []
    snapshot.forEach(doc => {
      fligths.push(doc.data())
      
    })
    if(fligths == []){
      return null
    }else {
      return fligths    
    }
    
  }catch(err){
    console.log("loaderror",err)
  }
  
}
export  { firebaseConfig, auth, getFirestore,db, saveInfo, loadInfo };
