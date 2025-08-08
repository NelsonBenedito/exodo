import { SignUp } from '@clerk/nextjs'

export default function Page() {
   return (
      <div className="flex h-screen pt-16 items-center justify-center">
        <SignUp />
      </div>
    );
}