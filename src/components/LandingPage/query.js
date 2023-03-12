import { gql } from "@apollo/client";

export const allBounties = gql`
query MyQuery {
    all_bounties{
       bounty_description
       bounty_name
       bounty_type
       organization_name
       bounty_difficulty
       public_address
       id
       payment_amount
    }
  }
`