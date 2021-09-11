fetch('https://jsonplaceholder.typicode.com/photos')
       .then((response)=>response.json())
       .then((data)=>{
           /*Filtering the data*/
          const filteredData=data.filter((value)=>value.id<=50);
          console.log(filteredData);
          /*Displaying the data in the DOM*/
          filteredData.forEach((element)=>{
              document.body.insertAdjacentHTML('beforeend',`<div class="MainBox" id="Box${element.id}">
              <div class="InnerBox">
              <div class="Details">
              Album ID:${element.albumId}<br>
              ID:${element.id}<br>
              Title:${element.title}
              </div>
              <div class="Images">
              <img src="${element.thumbnailUrl}" width="60" height="60"><br>
              <img src="${element.url}" width="60" height="60">
              </div>
              </div>
              </div><br>`);
          });
       })
       .catch((err)=>console.log(err));