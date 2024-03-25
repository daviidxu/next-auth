// mark as client component
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
// import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession();

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <>
        <p>Welcome {session.user?.name}. Signed In As</p>
        <Image
          src={session.user?.image as string}
          fill
          alt=""
          className="object-cover rounded-full"
        />
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  console.log(styles);

  // rendering components for not logged in users
  return (
    <div className={styles.homepage}>
      <div className={styles.loginCard}>
        <p>Log in</p>
        <button onClick={() => signIn("github")}>Sign in with github</button>
      </div>
    </div>
  );
}
