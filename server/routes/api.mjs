import express from 'express';
import donor from '../controller/donor.mjs';
import group from '../controller/group.mjs';

const router = express.Router();

router.post('/group', group.createGroup);
router.get('/group', group.getAllGroups);
router.put('/group/:id', group.updateGroup);
router.delete('/group/:id', group.deleteGroup);

router.post('/donor', donor.createDonor);
router.get('/donor', donor.getAllDonors);
router.get('/donor/groupId/:id', donor.getDonorsByGroupId);
router.put('/donor/:id', donor.updateDonor);
router.delete('/donor/:id', donor.deleteDonor);
router.get('/donor/totalAmount', donor.geSumOfAllDonorAmaount);


export default router;
