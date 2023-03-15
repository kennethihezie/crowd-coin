import Link from 'next/link'
import { Component, ReactNode } from 'react'

interface IProp{

}

interface IState {

}

export default class HomePage extends Component<IProp, IState>{
   constructor(props: any){
    super(props)

    this.state = {
      
    }
   }

   render(): ReactNode {
     return (
      <>
        <p className='text-xl text-purple-400'>Hello</p>
        <Link href='/views/a' className='text-blue-500'>click me</Link>
      </>
     )
   }
}
