import Photon from '@generated/photon'
const photon = new Photon()

async function main() {
  
  const saturna = await photon.sponsors.create({
    data: {
      code: 'STC',
      name: 'Saturna Trust Co',
      addresses: {
        create: {
          addressline1: "1300 N State St",
          addressline2: "PO Box N",
          city: "Bellingham",
          state: "WA",
          country: "US",
          postal: "98225",
        },
      },
      contacts: {
        create: {
          name: "Kelsey Piepel",
          phone: "360-734-9900",
          email: "kdp@saturna.com",
        },
      },
      sponsored_plans: {
        create: {
          name: "Saturna Trust HSA",
          plan_code: "STC01",
          adopted_date: "2019-07-25 15:40:00",
          ownership_type: { create: { label: "HSA" }, },
          participants: {
            create: {
              salutation: "Mr.",
              name_first: 'Ryan',
              name_last: 'Rickerts',
              name_middle: 'James',
              email: 'rjr@saturna.com',
              tax_id: "500-30-9999",
              date_of_birth: "1976-12-31",
              marital_status: "Divorced",
              citizenship: "US",
            },
          }
        },
      }
    }
  })

  console.log({ saturna })
  // const ryan = await photon.people.create({data: 
  //   {
  //     salutation: "Mr.",
  //     name_first: 'Ryan',
  //     name_last: 'Rickerts',
  //     name_middle: 'James',
  //     email: 'rjr@saturna.com',
  //     tax_id: "500-30-9999",
  //     date_of_birth: "1976-12-31",
  //     marital_status: "Divorced",
  //     citizenship: "US",
  //   },
  // })
  // const saturna_hsa = await photon.plans.create({
  //   data:
  //   {
  //     name: "Saturna Trust HSA",
  //     plan_code: "STC01",
  //     adopted_date: "2019-07-25 15:40:00",
  //     ownership_type: { create: { label: "HSA" }, },
  //     participants: {
  //       create: {
  //         salutation: "Mr.",
  //         name_first: 'Ryan',
  //         name_last: 'Rickerts',
  //         name_middle: 'James',
  //         email: 'rjr@saturna.com',
  //         tax_id: "500-30-9999",
  //         date_of_birth: "1976-12-31",
  //         marital_status: "Divorced",
  //         citizenship: "US",
  //       },
  //     }
  //   },
  // })

  // const saturna_address = await photon.addresses.create({
  //   data:
  //   {
  //     addressline1: "1300 N State St",
  //     addressline2: "PO Box N",
  //     city: "Bellingham",
  //     state: "WA",
  //     country: "US",
  //     postal: "98225",
  //   },
  // })

  // const saturna_contact = await photon.contacts.create({
  //   data:
  //   {
  //     name: "Kelsey Piepel",
  //     phone: "360-734-9900",
  //     email: "kdp@saturna.com",
  //   },
  // })

}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
