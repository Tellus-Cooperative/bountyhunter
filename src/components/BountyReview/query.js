import { gql } from "@apollo/client";

export const allBounties = gql`
query MyQuery ($public_address: String!) {
    submissions(where: {bounty_owner_address: {_eq: $public_address}}){
       bounty_id
    }
  }
`  

export const newBounties = gql`
query MyQuery ($id: uuid!) {
  all_bounties_by_pk(id: $id){
       bounty_description
       bounty_name
       bounty_type
       organization_name
       bounty_difficulty
       public_address
       id
    }
  }
`
