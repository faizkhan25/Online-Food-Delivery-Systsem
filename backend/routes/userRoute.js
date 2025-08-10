import express from 'express';
import { getAllUsers, deleteUser, registerUser, loginUser, forgotPassword, resetPassword, validateResetToken } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllUsers);
router.delete('/:id', auth, deleteUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/validate-reset-token', validateResetToken);

export default router;
