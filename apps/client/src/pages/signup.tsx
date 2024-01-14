import { Signup } from "@repo/ui/signup";
import axios from "axios";

export default function SignupPage() {
    return <div>
        <Signup onClick={async (username,password)=>{
            const res = await axios.post(`api/signup`,{username,password})
            // console.log(res.data)
            localStorage.setItem('token',res.data.token)
        }}/>
    </div>
}