window.onload = function() {
getBackEndInfo().then(unicornData => {

  for (let i = unicornData.length-1; i>=0; i--){
        let currCompany = unicornData[i];

        document.getElementById("content").insertAdjacentHTML('afterbegin',
        `<div class="timeline">
            <div class="timeline-icon"><i class="fa fa-globe"></i></div>
            <div class="timeline-content">
            <h3 class="title">${currCompany.name} [${currCompany.entryYear}]</h3>
            <p class="lead description">${currCompany.description}</p>
              
            <p class="lead description">
                <h3 class="sub-title">Valuation: ${currCompany.valuation} B</h3>
                
            Website: <a class="website" href="${currCompany.website}">${currCompany.website}</a>,   Description: ${currCompany.description},
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
