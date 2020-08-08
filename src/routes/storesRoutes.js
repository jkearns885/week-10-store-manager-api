
const router = require('express').Router();
const { deleteStore, updateStore, createStore, getStores } = require('../database/stores');

router.get('/', async (req, res) => {
  res.send(await getStores());
});

router.post('/', async (apiRequest, apiResponse) => {
  const newStore = apiRequest.body;
  await createStore(newStore);
  apiResponse.send({
    message: 'New store created.',
    allStores: await getStores(),
  });
});

// endpoint to delete a Store
router.delete('/:StoreId', async (apiRequest, apiResponse) => {
  await deleteStore(apiRequest.params.LogoId);
  apiResponse.send({ message: 'Store deleted.' });
});

// endpoint to update a Store
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedStore = apiRequest.body;
  console.log({ updatedStore })
  await updateStore(apiRequest.params.id, updatedStore);
  apiResponse.send({ message: 'Store updated.' });
});


module.exports = router;