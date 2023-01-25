
const searchBook = () => {
const searchField = document.getElementById('search-field');
const searchText = searchField.value;


// reset search field
searchField.value = '';

  // load data 
const url = ` https://openlibrary.org/search.json?q=${searchText}`;

fetch(url)
  .then(res => res.json())
  .then(data => displaysResult(data.docs));
                                                                               
}


// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });
// display data
const displaysResult = docs => {
const searchResult = document.getElementById('search-result');

searchResult.textContent = '';
  // console.log(docs.length);

const find = document.getElementById('found');
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML = `
  <h5 class="text-center text-primary">${docs.length} Data Found</h5>`;

find.appendChild(div);


if (docs.length == 0) {
  const error = document.getElementById('error');
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
      <h5 class="text-center text-danger">No data found!</h5>`;

  error.appendChild(div);
    // console.log('eror');
  }

else {
  docs.forEach(book => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
          <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Author: ${book.author_name}</p>
            <p class="card-text">Publisher: ${book.publisher}</p>
           <p class="card-text"> Publish Year: ${book.first_publish_year}</p>
          </div>
        </div>
      </div>`;

      searchResult.appendChild(div);

    })
  }
}


