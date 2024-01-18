import { AuthLeftPanel } from "@/components";

export default function AuthLayout ({children}:{children:React.ReactNode}) {
    return (
        <div className="flex flex-wrap h-screen ">
        <AuthLeftPanel/>
        {children}
        </div>
    )

}