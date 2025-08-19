import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'

const CardList = ({ title }: { title: string }) => {
    const lastestTransantion = [
        {
            "id": 1,
            "title": "New Follower",
            "badge": "Jessica Smith",
            "image": "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "count": 250
        },
        {
            "id": 2,
            "title": "Project Update",
            "badge": "Project Alpha",
            "image": "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "count": 580
        },
        {
            "id": 3,
            "title": "Subscription Renewal",
            "badge": "Michael Johnson",
            "image": "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "count": 10
        },
        {
            "id": 4,
            "title": "Server Maintenance",
            "badge": "System Alert",
            "image": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "count": 95
        }
    ]
    return (

        <div >
            <h1 className='text-lg font-medium mb-6'>{title}</h1>
            <div className="flex flex-col gap-2">
                {lastestTransantion.map((item) => (
                    <Card className='flex flex-row items-center justify-between' key={item.id}>
                        <Image src={item.image} alt={item.title} width={20} height={30} className='ml-5' />
                        <CardContent className='p-0'>
                            <CardTitle className='text-sm font-medium text-left'>{item.title}</CardTitle>
                        </CardContent>
                        <CardFooter>{item.count}</CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardList
