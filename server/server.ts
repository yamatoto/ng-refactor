import { findAllNews } from './queries/findAllNews';

findAllNews()
    .then(result => console.log(JSON.stringify(result)));
