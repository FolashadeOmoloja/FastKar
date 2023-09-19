import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email";

export const options: NextAuthOptions = {
providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),
    //   EmailProvider({
    //     server: process.env.EMAIL_SERVER,
    //     from: process.env.EMAIL_FROM
    //   }),
      CredentialsProvider({

        name: 'Credentials',
  
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Enter your Name" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
           const user = {id: '42', password: 'howfar', username: 'James Omoloja'}
           if  (credentials?.username === user.username && credentials?.password === user.password){
            return user
           } else {
            return null
           }
        }
      })

], 
theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#75c9fa", // Hex color code
    logo: "/logo.png", // Absolute URL to image
    buttonText: "" // Hex color code
  }
// Session:{

// }
}

//openssl rand -base64 32 in the terminal to get and copy the secret.

