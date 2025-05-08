import { Router } from "express";
import EmployerRouters from "./EmployerRouters";

const router = Router()

router.use('/employer',EmployerRouters)

export default router