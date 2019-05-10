import { Router } from 'express';
import { getUserProfile, getUserIssue } from './index.ctrl';

const router = new Router();

router.get('/profile', getUserProfile);
router.get('/:owner/issues', getUserIssue);
export default router;
