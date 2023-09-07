//applies to the  entire project if you dont include a defined matcher
export {default} from "next-auth/middleware"
 
//applies to matching routes

export const config = {matcher: ['/dashboard']}