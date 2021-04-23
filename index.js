window.onload = function() {
getBackEndInfo().then(unicornData => {

    for (let i = 0; i < unicornData.length; i++){
        let currCompany = unicornData[i];

        document.getElementById("content").insertAdjacentHTML('afterbegin',
        `<div class="timeline">
            <div class="timeline-icon"><i class="fa fa-globe"></i></div>
            <div class="timeline-content">
                <h3 class="title">${currCompany.name} [${currCompany.entry}]</h3>
              
                <p class="description">
                <h3 class="sub-title">${currCompany.valuation} B</h3>
                Website : ${currCompany.website} Description: ${currCompany.description}
                  Sector: ${currCompany.sector} , Location: ${currCompany.location} , Investors: ${currCompany.investors} 
                </p>
            </div>
        </div>`
       );
      }
})
.catch(err => console.log(err));
};

function getBackEndInfo(){
    return fetch('./data.json')
    .then(response => response.json());
  }
