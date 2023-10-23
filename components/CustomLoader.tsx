"use client"
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Router from "next/router"

const CustomLoader = () => {
  const pathname = usePathname();
   const router = useRouter()
  console.log(pathname)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
console.log(
    Router.events.on("routeChangeStart", start)
)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])



  return loading ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-white opacity-75">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900" />
    </div>
  ) : null;
};

export default CustomLoader;
