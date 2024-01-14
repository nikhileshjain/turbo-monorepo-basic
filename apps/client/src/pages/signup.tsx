import { Signup } from "@repo/ui/signup";

export default function SignupPage() {
    return <div>
        <Signup onClick={async (username,password)=>{
            // const res = await axios.post(`${BACKEND_URL}/admin/signup`,{username,password})
            // console.log(res)
        }}/>
    </div>
}