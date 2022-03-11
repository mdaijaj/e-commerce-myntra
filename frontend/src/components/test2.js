const Register = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState({
      name: "",
      email: "",
      phoneNo: "",
    })
    const loggedIn = false;
  
    const handleChange=(e)=>{
      const {name, value}= e.target
      setUsername(preState =>({
        ...preState, [name]: value
      }))
    }
  
    const submitForm = async (e) => {
      e.preventDefault()
      // const {name, email, phoneNo}= username
      // console.log("item", item)
      console.log("aaaa")
      if(username.email.length){
        const payload={
          "name": username.name,
          "email": username.email,
          "phoneNo": username.phoneNo
        }
  
        const userdata= await axios.post('/register', payload)
        console.log("userdata", userdata)
        .then((response)=>{
          console.log("response", response)
          if(response.status=='200'){
            setUsername(preState =>({
              ...preState, "successMessage": "Registration is Sucessfully!"
            }))
            localStorage.setItem(JSON.stringify(response))
            // redirectToHome();
            history.push('/otp')
          }
          else{
            props.showError("Some error ocurred");
          }   
        })
        .catch((err)=>{
          console.log(err.mesage)
        })
  
      }
      else{
        props.showError('Please enter valid username and password')  
      }
      const requestOption={
        method: "Post",
        headers: {
          "content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: username.name,
          email: username.email,
          phoneNo: username.phoneNo
        })
      }