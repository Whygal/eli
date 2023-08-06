import express from 'express';
import donor from '../controller/donor.mjs';
import ambassador from '../controller/ambassador.mjs';

const router = express.Router();

router.post('/ambassador', ambassador.createAmbassador);
router.get('/ambassador', ambassador.getAllAmbassadors);
router.put('/ambassador/:id', ambassador.updateAmbassador);
router.delete('/ambassador/:id', ambassador.deleteAmbassador);

router.post('/donor', donor.createDonor);
router.get('/donor', donor.getAllDonors);
router.put('/donor/:id', donor.updateDonor);
router.delete('/donor/:id', donor.deleteDonor);


export default router;
