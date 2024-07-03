async function getUsers() {
  let usersRawData;
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    usersRawData = await data.json();
    //console.log(users);
  } catch {
    console.log("Bir hata oluştu");
  }
  return usersRawData;
}

async function createUsers() {
  const usersPromise = getUsers();
  const users = await usersPromise;
  const cardsRow = document.getElementById("cardsRow");

  for (i = 0; i < users.length; i++) {
    let userId = users[i].id;
    let userName = users[i].name;
    let userUserName = users[i].username;
    let userEmail = users[i].email;
    let userAddressStreet = users[i].address.street;
    let userAddressSuite = users[i].address.suite;
    let userAddressCity = users[i].address.city;
    let userAddressZipcode = users[i].address.zipcode;
    let userAddressGeoLat = users[i].address.geo.lat;
    let userAddressGeoLng = users[i].address.geo.lng;
    let userPhone = users[i].phone;
    let userWebsite = users[i].website;
    let userCompanyName = users[i].company.name;
    let userCompanyCatchPhrase = users[i].company.catchPhrase;
    let userCompanyBs = users[i].company.bs;

    let cardHTMLData = `<div class="d-flex align-items-start my-3 py-2 border rounded-3 bg-light" >
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab-${userId}" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-info-tab-${userId}" data-bs-toggle="pill"
                        data-bs-target="#v-pills-info-${userId}" type="button" role="tab" aria-controls="v-pills-info-${userId}"
                        aria-selected="true"><span class="fa fa-user text-start"></span> Info</button>
                    <button class="nav-link" id="v-pills-address-tab-${userId}" data-bs-toggle="pill"
                        data-bs-target="#v-pills-address-${userId}" type="button" role="tab" aria-controls="v-pills-address-${userId}"
                        aria-selected="false"><span class="fa fa-location-dot text-start"></span> Address</button>
                    <button class="nav-link" id="v-pills-company-tab-${userId}" data-bs-toggle="pill"
                        data-bs-target="#v-pills-company-${userId}" type="button" role="tab" aria-controls="v-pills-company-${userId}"
                        aria-selected="false"><span class="fa fa-building text-start"></span> Company</button>
                    <button class="nav-link" id="v-pills-contact-tab-${userId}" data-bs-toggle="pill"
                        data-bs-target="#v-pills-contact-${userId}" type="button" role="tab" aria-controls="v-pills-contact-${userId}"
                        aria-selected="false"><span class="fa fa-envelope text-start"></span> Contact</button>
                </div>
                <div class="tab-content" id="v-pills-tabContent-${userId}">
                    <div class="tab-pane fade show active align-items-center" id="v-pills-info-${userId}" role="tabpanel"
                        aria-labelledby="v-pills-info-tab-${userId}">
                        <p><b>Id: </b>${userId}
                        <p><b>Username: </b>${userUserName}</p>
                        <p><b>Name: </b>${userName}</p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-address-${userId}" role="tabpanel"
                        aria-labelledby="v-pills-address-tab-${userId}">
                        <p><b>Street: </b>${userAddressStreet}</p>
                        <p><b>Suite: </b>${userAddressSuite}</p>
                        <p><b>City: </b>${userAddressCity}</p>
                        <p><b>Zipcode: </b>${userAddressZipcode}</p>
                        <p><b>Geography </b><br></p>
                        <span class="ps-5"><b>lat: </b>${userAddressGeoLat}</span>
                        <span class="ps-5"><b>lng: </b>${userAddressGeoLng}</span>
                    </div>
                    <div class="tab-pane fade" id="v-pills-company-${userId}" role="tabpanel"
                        aria-labelledby="v-pills-company-tab-${userId}">
                        <p><b>Name: </b>${userCompanyName}</p>
                        <p><b>CatchPhrase: </b>${userCompanyCatchPhrase}</p>
                        <p><b>Bs: </b>${userCompanyBs}</p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-contact-${userId}" role="tabpanel"
                        aria-labelledby="v-pills-contact-tab-${userId}">
                        <p><b>Email: </b>${userEmail}</p>
                        <p><b>Phone: </b>${userPhone}</p>
                        <p><b>Website: </b>${userWebsite}</p>
                    </div>
                </div>
            </div>`;
    cardsRow.innerHTML += cardHTMLData;
  }
}

createUsers()