import { gql } from "@apollo/client";

export const submitSubmission = gql`
  mutation MyMutation(
    $bounty_id: uuid!
    $bounty_owner_address: String!
    $sub_public_address: String!
    $submission_title: String!
    $submission_link: String!
    $submission_description: String!
  ) {
    insert_submissions_one(
      object: {
        bounty_id: $bounty_id
        bounty_owner_address: $bounty_owner_address
        sub_public_address: $sub_public_address
        submission_title: $submission_title
        submission_link: $submission_link
        submission_description: $submission_description
      }
    ) {
      id
    }
  }
`;

export const allBounties = gql`
query MyQuery ($public_address: String!) {
    submissions(where: {submissions: {_eq: $public_address}}){
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
