const wtf = require('wtf_wikipedia');
wtf.random().then((doc) => {
  console.log(doc.title(), doc.summary())
});