
import React from 'react'
import { Payment, columns } from './collumn'
import DataTable from './data-table'

const getdata = async ():Promise<Payment[]> => {
  return(
[
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "username": "John Doe",
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "username": "Jane Doe",
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "username": "Peter Jones",
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "username": "Mary Smith",
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 412,
    "status": "pending",
    "username": "Chris Green",
    "email": "chris.green@mail.com"
  },
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "username": "John Doe",
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "username": "Jane Doe",
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "username": "Peter Jones",
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "username": "Mary Smith",
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 412,
    "status": "pending",
    "username": "Chris Green",
    "email": "chris.green@mail.com"
  },
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "username": "John Doe",
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "username": "Jane Doe",
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "username": "Peter Jones",
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "username": "Mary Smith",
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 412,
    "status": "pending",
    "username": "Chris Green",
    "email": "chris.green@mail.com"
  },
  {
    "id": "728ed521",
    "amount": 134,
    "status": "pending",
    "username": "John Doe",
    "email": "johndoe@gmail.com"
  },
  {
    "id": "728ed522",
    "amount": 124,
    "status": "success",
    "username": "Jane Doe",
    "email": "janedoe@gmail.com"
  },
  {
    "id": "728ed523",
    "amount": 250,
    "status": "success",
    "username": "Peter Jones",
    "email": "peterjones@example.com"
  },
  {
    "id": "728ed524",
    "amount": 78,
    "status": "failed",
    "username": "Mary Smith",
    "email": "msmith@work.com"
  },
  {
    "id": "728ed525",
    "amount": 4125,
    "status": "pending",
    "username": "Chris Green",
    "email": "chris.green@mail.com"
  },
]
  )
  
}
const PaymentsPage = async() => {
  const data = await getdata()
  return (
    <div>
      <div className="mb-8 py-2 bg-secondary rounded-md px-5">
        <h1 className='font-bold'>All Payment</h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default PaymentsPage
