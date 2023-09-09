import showVocab from '../pages/vocab';
import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const filterVocab = (techValue, uid) => new Promise((resolve, reject) => {
  getVocab(uid).then((filterArray) => {
    const filteredLanguage = filterArray.filter((item) => (
      item.languageTech.toLowerCase().includes(techValue)
    ));
    showVocab(filteredLanguage);
    resolve(filteredLanguage);
  }).catch(reject);
});
const searchVocab = (searchValue, uid) => new Promise((resolve, reject) => {
  getVocab(uid).then((vocabArray) => {
    const searchResults = vocabArray.filter((vocab) => (vocab.title.toLowerCase().includes(searchValue)
    || vocab.definition.toLowerCase().includes(searchValue)
    || vocab.languageTech.toLowerCase().includes(searchValue)
    ));
    resolve(searchResults);
  }).catch(reject);
});

export {
  getSingleVocab, getVocab, searchVocab, createVocab, updateVocab, deleteVocab, filterVocab
};
