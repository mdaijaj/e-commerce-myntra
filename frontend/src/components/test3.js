const [name, setName]= useState('');
const [email, setEmail]= useState('')
const [phone, setPhoneNo]= useState('');

const signup= async ()=>{
  console.warn(name, email, phone)
  const userInf={name,email,phone}
  console.log("userInf", userInf)
  let apiRequest= await fetch("/register", {
    method: "Post",
    body: JSON.stringify(userInf),
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  });
  console.log("result", apiRequest)
  apiRequest=await apiRequest.json()
  console.log("result", apiRequest)

}