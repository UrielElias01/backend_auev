import {Router, RouterOptions} from "express";


class AuthRoutes{

    public router: Router

    constructor(){
        this.router = Router();
        this.config();
    }

    config(){
        this.router.get('/',(req,res)=>{
            res.send('Invocando autenticacion')
        })
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;