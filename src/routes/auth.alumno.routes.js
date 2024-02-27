import { Router } from "express";
import * as authAlumnoController from "../controllers/auth.alumno.controller.js";

const router = Router();

router.post('/crear', authAlumnoController.crear);
router.get('/obtenerAlumnos', authAlumnoController.obtenerAlumnos);
router.get('/obtenerAlumno/:id', authAlumnoController.obtenerAlumno);
router.put('/actualizarAlumno/:id', authAlumnoController.actualizarAlumno);
router.delete('/eliminarAlumno/:id', authAlumnoController.eliminarAlumno);

export default router;