import express from 'express';
import UserController from './user-controller';

export function getRouter() {
    const router = express.Router();

    const userController = new UserController();

    router.get('/users', userController.getAllUsers);
    router.get('/users/:id', userController.getUser);
    router.post('/users', userController.createUser);
    router.put('/users', userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);

    return router;
}