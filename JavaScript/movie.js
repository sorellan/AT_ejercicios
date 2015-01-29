movie={title: 'The Godfather', 
       'releaseInfo': {'year': 1972, rating: 'PG'}}
for (i in movie) {
  if(i == 'releaseInfo') {
    for (j in movie.releaseInfo) {
      console.log(j+': '+movie.releaseInfo[j])
    }
  }
  else {
    console.log(i+': '+movie[i])
  }
}
