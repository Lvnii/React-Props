import Child from "../child";
import Button from "../button/button";
import List from "../list/list";

const Parent = () => {

    return (
    <div>
        {/* <h2>parent component</h2>
        <h3>child component</h3>
        <div>
            <Child
                text='Save'
                handleClick={(data) => {
                    console.log(data)
                }}
            />
        </div>
        <div>
            <span>click here to do something</span>
            <Child
                text='Click'
            />
        </div>
        <div>
            <Button 
                text = "Delete"
                click = {() => {
                    console.log(`made this action`)
                }}
                status="danger"
            />

            <Button 
                text = "Custom error"
                click = {() => {
                    console.log(`Custom move!`)
                }}
                status="danger"
                warningMessage="This is custom message!"
            />

            <Button 
                text = "Check action"
                click = {() => {
                    console.log(`checked`)
                }}
                status="warning"
            />

            <Button 
                text = "Saved"
                click = {() => {
                    console.log(`saved`)
                }}
                status="success"
            />
        </div> */}
        <List />
    </div>
    )
}

export default Parent;