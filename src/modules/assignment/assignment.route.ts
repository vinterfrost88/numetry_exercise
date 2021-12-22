import { Router } from 'express';
import userController from './assigment.controller';

const router: Router = Router();

router.get('/', userController.get);
router.get('/:id', userController.getById);
router.post('/', userController.post);
router.put('/:id', userController.put);
router.delete('/:id', userController.remove);

export default { router };
