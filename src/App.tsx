import { Button } from "./components/ui/button"
import { Card, CardHeader } from "./components/ui/card"
import img from './assets/react.svg'

function App() {


  return (
    <>
     <h1 className="text-blue-500">Hello!</h1>
     <Button className="w-60">Hello</Button>
     <Card className="w-[400px] bg-blue-200 h-[300px]">
        <CardHeader>
          <img src={img} alt="" />
        </CardHeader>
     </Card>
    </>
  )
}

export default App
