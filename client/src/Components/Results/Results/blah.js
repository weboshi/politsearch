getDonors2 = (row) => { {
    var fullName = row.name.split(' '),
    firstName = fullName[0],
    lastName = fullName[fullName.length - 1];
    fetch('https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=' + lastName, {
      method: 'GET',
      mode: 'CORS',
      headers: {
        'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
      }
    }).then(response => { response.json();
    switch ( true )
    {
        case (response.length == 0):
        fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/search.json?query=' + lastName, {
              method: 'GET',
              mode: 'CORS',
              headers: {
                'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
        }
            }).then(
                    response => response.json()
                    .then(response => { console.log(response)

                    for (i=0; i < response.results.length; i++) {
                        if (response.results[i].candidate.name.indexOf(firstName.toString().toUpperCase()) !== -1)
                        { 
                        
                            fecId = response.results[i].candidate.id
                            var i;
                            var fecId;
                            var homeState;
                            console.log(fecId)
                            }
                            }
                    fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/' + fecId + '.json', {
                        method: 'GET',
                        mode: 'CORS',
                        headers: {
                            'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
                        }
                    }).then(res => res.json()).then(res => {homeState = res.results[0].mailing_state;
                        var totalReceipts = res.results[0].total_receipts
                        var totalIndividual = res.results[0].total_from_individuals
                        var totalPac = res.results[0].total_from_pacs
                        var totalContributions = res.results[0].total_contributions
                        console.log(totalReceipts)
                            })
                    
                        }
                
                        ))
        break;
        case (response.length > 0): 
        fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/search.json?query=' + lastName, {
            method: 'GET',
            mode: 'CORS',
            headers: {
              'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
      }
          }).then(
                  response => response.json()
                  .then(response => { console.log(response)

                  for (i=0; i < response.results.length; i++) {
                      if (response.results[i].candidate.name.indexOf(firstName.toString().toUpperCase()) !== -1)
                      { 
                      
                          fecId = response.results[i].candidate.id
                          var i;
                          var fecId;
                          var homeState;
                          console.log(fecId)
                          }
                          }
                  fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/' + fecId + '.json', {
                      method: 'GET',
                      mode: 'CORS',
                      headers: {
                          'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
                      }
                  }).then(res => res.json()).then(res => {homeState = res.results[0].mailing_state;
                      var totalReceipts = res.results[0].total_receipts
                      var totalIndividual = res.results[0].total_from_individuals
                      var totalPac = res.results[0].total_from_pacs
                      var totalContributions = res.results[0].total_contributions
                      console.log(totalReceipts)
                          })
                  
                      }
              
                      ))
    }
    }
    )
}}