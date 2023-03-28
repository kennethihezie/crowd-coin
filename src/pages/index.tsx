import { Component, ReactNode } from 'react'
import web3 from '../web3/web3'
import factory from '../web3/factory'

interface IProp{
  campaigns: Array<any>
}

interface IState {
  accounts: Array<string>
  contracts: any
}

export default class HomePage extends Component<IProp, IState>{
   constructor(props: any){
    super(props)

    this.state = {
      accounts: [],
      contracts: undefined
    }
   }

  // async componentDidMount(): Promise<void> {
  //    this.setState({
  //     accounts: await web3.eth.getAccounts(),
  //     contracts: await factory.methods.getAllDeployedContracts().call()
  //    })

  //    console.log(this.state.contracts);   
  //  }


   render(): ReactNode {
     return (
       <>
         <p className="text-2xl text-purple-500">{ this.props.campaigns }</p>
       </>
     )
   }
}

//Using getStaticProps method to preload our campaigns data. If you want to know more please refer to your nextjs blog project. 
export async function getStaticProps() {
  const campaigns = await factory.methods.getAllDeployedContracts().call()

  return {
    props: { campaigns }
  }
}
