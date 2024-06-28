"use client"
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const handleLandingPageButton = () => {
    router.push('/main-products');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-sky-200">
          Welcome to AutoEmail
        </h1>
        <p className="mt-3 text-2xl">
          Your automated email management solution.
        </p>

        <div className="mt-6">
          <Button variant="contained" color="primary" onClick={handleLandingPageButton}>
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}
